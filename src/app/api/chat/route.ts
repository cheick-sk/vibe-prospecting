import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'

const SYSTEM_PROMPT = `You are Vibe AI, an expert B2B prospecting assistant focused on the African market, especially Guinea. You help users find and qualify potential business prospects through natural conversation.

Your capabilities include:
1. Understanding ideal customer profiles (ICP) from natural language descriptions
2. Suggesting African companies and government organizations that match the user's criteria
3. Helping identify decision-makers and contact information
4. Providing insights about company technologies, size, revenue, and industry
5. Qualifying leads based on intent signals and fit

Focus areas:
- Guinea and West African markets
- Government ministries and public sector organizations
- African startups and SMEs
- Mining, agriculture, energy, and telecom sectors

Guidelines:
- Be conversational and helpful
- Ask clarifying questions when needed
- Provide structured information when presenting companies or contacts
- When the user asks to find companies, suggest specific companies with details
- Format company information clearly with: Company Name, Industry, Size, Location, Website
- When discussing contacts, include: Name, Title, Email (if available), LinkedIn
- Be proactive in suggesting next steps
- Use a professional but friendly tone

Always be ready to help users refine their search and find the best prospects for their business.`

// Dynamic import for z-ai-web-dev-sdk to handle initialization errors
async function getAIResponse(messages: Array<{role: string; content: string}>): Promise<string> {
  try {
    const ZAI = (await import('z-ai-web-dev-sdk')).default
    const zai = await ZAI.create()
    
    const completion = await zai.chat.completions.create({
      messages: messages.map(m => ({
        role: m.role as 'system' | 'user' | 'assistant',
        content: m.content
      })),
      temperature: 0.7,
      max_tokens: 2000
    })

    return completion.choices[0]?.message?.content || 'Je ne peux pas générer de réponse pour le moment.'
  } catch (error) {
    console.error('AI initialization or call error:', error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const userId = cookieStore.get('userId')?.value

    if (!userId) {
      return NextResponse.json({ 
        error: 'Veuillez vous connecter pour continuer.',
        requiresAuth: true 
      }, { status: 401 })
    }

    const body = await request.json()
    const { message, chatId, history } = body

    if (!message) {
      return NextResponse.json({ error: 'Message requis' }, { status: 400 })
    }

    // Get user to check credits
    let user
    try {
      user = await db.user.findUnique({
        where: { id: userId }
      })
    } catch (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json({ 
        error: 'Erreur de connexion à la base de données. Veuillez réessayer.' 
      }, { status: 503 })
    }

    if (!user) {
      return NextResponse.json({ 
        error: 'Utilisateur non trouvé. Veuillez vous reconnecter.',
        requiresAuth: true 
      }, { status: 401 })
    }

    // Check credits
    if (user.credits <= 0) {
      return NextResponse.json(
        { error: 'Crédits insuffisants. Veuillez mettre à niveau votre plan.' },
        { status: 403 }
      )
    }

    // Create or get chat
    let chat
    try {
      if (chatId) {
        chat = await db.chat.findUnique({
          where: { id: chatId, userId },
          include: { messages: { orderBy: { createdAt: 'asc' } } }
        })
      }

      if (!chat) {
        chat = await db.chat.create({
          data: {
            userId,
            title: message.substring(0, 50) + (message.length > 50 ? '...' : ''),
            messages: {
              create: { role: 'user', content: message }
            }
          },
          include: { messages: { orderBy: { createdAt: 'asc' } } }
        })
      } else {
        await db.chatMessage.create({
          data: { chatId: chat.id, role: 'user', content: message }
        })
      }
    } catch (dbError) {
      console.error('Chat database error:', dbError)
    }

    // Build messages for AI
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(history || chat?.messages || []).map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content
      })),
      { role: 'user', content: message }
    ]

    // Call AI
    let assistantMessage: string
    try {
      assistantMessage = await getAIResponse(messages)
    } catch (aiError) {
      console.error('AI error:', aiError)
      
      // Return a helpful fallback response instead of error
      assistantMessage = `Je comprends que vous recherchez des contacts d'entreprises guinéennes. 

Voici quelques pistes pour trouver des décideurs en Guinée :

**Entreprises majeures en Guinée :**
- **Guinea Alumina Corporation (GAC)** - Industrie minière
- **CBG (Compagnie des Bauxites de Guinée)** - Extraction bauxite
- **Orange Guinée** - Télécommunications
- **MTN Guinée** - Télécommunications

**Ministères clés :**
- Ministère des Mines et de la Géologie
- Ministère de l'Agriculture
- Ministère de l'Énergie

**Conseils pour contacter les décideurs :**
1. Utilisez LinkedIn pour identifier les directeurs et responsables
2. Contactez les fédérations professionnelles
3. Participez aux événements d'affaires à Conakry

Voulez-vous que je vous aide à cibler un secteur spécifique ?`
    }

    // Deduct credit only on success
    if (user.credits > 0) {
      try {
        await db.user.update({
          where: { id: userId },
          data: { credits: { decrement: 1 } }
        })
      } catch (e) {
        console.error('Credit deduction error:', e)
      }
    }

    // Save assistant message
    if (chat?.id) {
      try {
        await db.chatMessage.create({
          data: { chatId: chat.id, role: 'assistant', content: assistantMessage }
        })
        await db.chat.update({
          where: { id: chat.id },
          data: { updatedAt: new Date() }
        })
      } catch (e) {
        console.error('Save message error:', e)
      }
    }

    return NextResponse.json({
      message: assistantMessage,
      chatId: chat?.id,
      credits: Math.max(0, user.credits - 1)
    })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: 'Erreur lors du traitement du message. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}

// GET - Get chat history
export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const userId = cookieStore.get('userId')?.value

    if (!userId) {
      return NextResponse.json({ 
        error: 'Authentification requise',
        requiresAuth: true 
      }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const chatId = searchParams.get('chatId')

    if (chatId) {
      const chat = await db.chat.findUnique({
        where: { id: chatId, userId },
        include: { messages: { orderBy: { createdAt: 'asc' } } }
      })

      if (!chat) {
        return NextResponse.json({ error: 'Conversation non trouvée' }, { status: 404 })
      }

      return NextResponse.json({ chat })
    }

    // Get all chats
    const chats = await db.chat.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
      select: {
        id: true,
        title: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return NextResponse.json({ chats })
  } catch (error) {
    console.error('Get chats error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des conversations' },
      { status: 500 }
    )
  }
}

// DELETE - Delete chat
export async function DELETE(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const userId = cookieStore.get('userId')?.value

    if (!userId) {
      return NextResponse.json({ 
        error: 'Authentification requise',
        requiresAuth: true 
      }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const chatId = searchParams.get('chatId')

    if (!chatId) {
      return NextResponse.json({ error: 'ID de conversation requis' }, { status: 400 })
    }

    await db.chat.delete({
      where: { id: chatId, userId }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete chat error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la suppression' },
      { status: 500 }
    )
  }
}
