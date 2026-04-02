import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'
import { AFRICAN_COMPANIES, AFRICAN_CONTACTS, GOVERNMENT_CONTACTS } from '@/lib/african-data'

// Simple keyword-based response generator (no external AI needed - saves resources)
function generateResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  // Guinea companies
  if (lowerMessage.includes('guinée') || lowerMessage.includes('guinea') || lowerMessage.includes('guinéen')) {
    if (lowerMessage.includes('entreprise') || lowerMessage.includes('company') || lowerMessage.includes('société')) {
      const guineaCompanies = AFRICAN_COMPANIES.filter(c => c.country === 'GN')
      return `Voici les principales entreprises en Guinée :

**Entreprises Minières :**
${guineaCompanies.filter(c => c.industry === 'Mines').map(c => `• **${c.name}** - ${c.sector}\n  📍 ${c.location}\n  🌐 ${c.website}`).join('\n\n')}

**Télécommunications :**
${guineaCompanies.filter(c => c.industry === 'Télécommunications').map(c => `• **${c.name}** - ${c.sector}\n  📍 ${c.location}\n  🌐 ${c.website}`).join('\n\n')}

**Banque & Finance :**
${guineaCompanies.filter(c => c.industry === 'Banque & Finance').map(c => `• **${c.name}** - ${c.sector}\n  📍 ${c.location}\n  🌐 ${c.website}`).join('\n\n')}

Voulez-vous plus de détails sur une entreprise spécifique ?`
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('décideur') || lowerMessage.includes('directeur')) {
      const guineaContacts = AFRICAN_CONTACTS.filter(c => c.country === 'GN')
      return `Voici des contacts clés en Guinée :

**Contacts Gouvernementaux :**
${GOVERNMENT_CONTACTS.filter(c => c.country === 'GN').slice(0, 3).map(c => `• **${c.name}**
  📞 ${c.phone}
  📧 ${c.email}
  🌐 ${c.website}`).join('\n\n')}

**Contacts Privés :**
${guineaContacts.map(c => `• **${c.name}** - ${c.title}
  🏢 ${c.company}
  📧 ${c.email}
  📞 ${c.phone}`).join('\n\n')}

Souhaitez-vous des contacts dans un secteur spécifique ?`
    }
    
    if (lowerMessage.includes('ministère') || lowerMessage.includes('gouvernement')) {
      return `Voici les principaux ministères en Guinée :

**Ministères Clés :**
• **Ministère de l'Économie et des Finances**
  📍 Conakry, Guinée
  🌐 https://finances.gov.gn

• **Ministère des Mines et de la Géologie**
  📍 Conakry, Guinée
  📞 +224 664 30 00 00
  🌐 https://mines.gov.gn

• **Ministère de l'Énergie, de l'Hydraulique et des Hydrocarbures**
  📍 Conakry, Guinée
  🌐 https://energie.gov.gn

• **Ministère de l'Agriculture et de l'Élevage**
  📍 Conakry, Guinée
  🌐 https://agriculture.gov.gn

• **Ministère du Commerce, de l'Industrie et des PME**
  📍 Conakry, Guinée

**Agences :**
• **APIP** - Agence Guinéenne de Promotion des Investissements
  📞 +224 664 60 00 00
  🌐 https://apip.gov.gn

Voulez-vous les coordonnées d'un ministère spécifique ?`
    }
    
    return `Je peux vous aider avec les informations sur la Guinée :

**Entreprises disponibles :**
• Guinea Alumina Corporation (Mines)
• CBG - Compagnie des Bauxites de Guinée (Mines)
• Orange Guinée (Télécommunications)
• Guinéenne de Banque (Finance)
• Électricité de Guinée (Énergie)

**Gouvernement :**
• Présidence de la République
• Primature
• Ministères (Économie, Mines, Énergie, Agriculture...)

**Comment puis-je vous aider ?**
• "Montrez-moi les entreprises minières en Guinée"
• "Donnez-moi les contacts des ministères"
• "Quels sont les décideurs du secteur télécom ?"`
  }
  
  // Mining sector
  if (lowerMessage.includes('mine') || lowerMessage.includes('minier') || lowerMessage.includes('bauxite') || lowerMessage.includes('or')) {
    return `**Secteur Minier en Afrique de l'Ouest :**

**Guinée - Bauxite :**
• **CBG** (Compagnie des Bauxites de Guinée)
  📍 Kamsar, Guinée | Plus grand producteur
  🌐 https://cbg.gn

• **Guinea Alumina Corporation**
  📍 Conakry, Guinée
  🌐 https://guineaalumina.com

**Sénégal - Or :**
• **Société des Mines de Falémé**
  📍 Sénégal oriental

**Contacts Utiles :**
• **Ministère des Mines et de la Géologie (Guinée)**
  📞 +224 664 30 00 00
  🌐 https://mines.gov.gn

Voulez-vous plus d'informations ?`
  }
  
  // Telecom sector
  if (lowerMessage.includes('télécom') || lowerMessage.includes('telecom') || lowerMessage.includes('mobile') || lowerMessage.includes('orange') || lowerMessage.includes('mtn')) {
    return `**Secteur des Télécommunications en Afrique :**

**Guinée :**
• **Orange Guinée** - Leader mobile
  📍 Conakry | 🌐 https://orange-guinee.com

• **MTN Guinée** - Opérateur mobile
  📍 Conakry

**Sénégal :**
• **Sonatel (Orange)** - Leader régional
  📍 Dakar | 🌐 https://sonatel.sn

**Côte d'Ivoire :**
• **Orange Côte d'Ivoire** - Leader
  📍 Abidjan | 🌐 https://orange.ci

**Nigeria :**
• **MTN Nigeria** - Plus grand opérateur
  📍 Lagos | 🌐 https://mtn.ng

Quel opérateur vous intéresse ?`
  }
  
  // Banking sector
  if (lowerMessage.includes('banque') || lowerMessage.includes('bank') || lowerMessage.includes('finance')) {
    return `**Secteur Bancaire en Afrique de l'Ouest :**

**Guinée :**
• **Guinéenne de Banque (BGN)**
  📍 Conakry | 🌐 https://guib.net

• **BICIGUI** (Groupe BNP Paribas)
  📍 Conakry

• **Ecobank Guinée**
  📍 Conakry

**Sénégal :**
• **Société Générale Sénégal**
  📍 Dakar

• **CBAO** (Groupe Attijari)
  📍 Dakar

**Services Mobile Money :**
• Orange Money
• MTN Mobile Money
• Wave

Voulez-vous les contacts d'une banque spécifique ?`
  }
  
  // Energy sector
  if (lowerMessage.includes('énergie') || lowerMessage.includes('energie') || lowerMessage.includes('électricité') || lowerMessage.includes('electricite')) {
    return `**Secteur de l'Énergie en Afrique de l'Ouest :**

**Guinée :**
• **Électricité de Guinée (EDG)**
  📍 Conakry
  🌐 https://edg-guinee.com

• **Société des Eaux de Guinée (SEG)**
  📍 Conakry

**Sénégal :**
• **SENELEC** - Électricité
  📍 Dakar | 🌐 https://senelec.sn

**Côte d'Ivoire :**
• **CIE** - Compagnie Ivoirienne d'Électricité
  📍 Abidjan | 🌐 https://cie.ci

**Énergies Renouvelables :**
• Projets solaires en cours
• Hydroélectricité (barrages)

Voulez-vous plus de détails ?`
  }
  
  // Default response
  return `Je suis votre assistant de prospection B2B pour l'Afrique. Je peux vous aider avec :

**Pays disponibles :**
• Guinée 🇬🇳
• Sénégal 🇸🇳
• Côte d'Ivoire 🇨🇮
• Nigeria 🇳🇬
• Ghana 🇬🇭

**Secteurs :**
• Mines & Carrières
• Télécommunications
• Banque & Finance
• Énergie
• Agriculture
• BTP & Construction

**Exemples de questions :**
• "Entreprises minières en Guinée"
• "Contacts des ministères guinéens"
• "Opérateurs télécom en Afrique de l'Ouest"
• "Banques en Guinée"

Comment puis-je vous aider ?`
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

    const body = await request.json().catch(() => ({}))
    const { message, chatId } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message requis' }, { status: 400 })
    }

    // Get user with error handling
    let user
    try {
      user = await db.user.findUnique({
        where: { id: userId }
      })
    } catch (dbError) {
      console.error('DB find user error:', dbError)
      // Still generate response without DB operations
      const assistantMessage = generateResponse(message)
      return NextResponse.json({
        message: assistantMessage,
        chatId: null,
        credits: 0
      })
    }

    if (!user) {
      return NextResponse.json({ 
        error: 'Utilisateur non trouvé.',
        requiresAuth: true 
      }, { status: 401 })
    }

    // Check credits (allow negative for demo)
    if (user.credits <= 0) {
      // Still allow for demo purposes
      console.log('User has no credits, but allowing for demo')
    }

    // Create or get chat with error handling
    let chat: { id: string } | null = null
    try {
      if (chatId) {
        chat = await db.chat.findUnique({
          where: { id: chatId, userId },
          select: { id: true }
        })
      }

      if (!chat) {
        chat = await db.chat.create({
          data: {
            userId,
            title: message.substring(0, 50),
            messages: {
              create: { role: 'user', content: message }
            }
          },
          select: { id: true }
        })
      } else {
        await db.chatMessage.create({
          data: { chatId: chat.id, role: 'user', content: message }
        })
      }
    } catch (dbError) {
      console.error('DB chat error:', dbError)
      // Continue without chat tracking
    }

    // Generate response using local data (no external AI - saves memory)
    const assistantMessage = generateResponse(message)

    // Deduct credit with error handling
    let newCredits = user.credits
    try {
      if (user.credits > 0) {
        await db.user.update({
          where: { id: userId },
          data: { credits: { decrement: 1 } }
        })
        newCredits = user.credits - 1
      }
    } catch (e) {
      console.error('Credit error:', e)
    }

    // Save assistant message
    if (chat?.id) {
      try {
        await db.chatMessage.create({
          data: { chatId: chat.id, role: 'assistant', content: assistantMessage }
        })
      } catch (e) {
        console.error('Save error:', e)
      }
    }

    return NextResponse.json({
      message: assistantMessage,
      chatId: chat?.id,
      credits: Math.max(0, newCredits)
    })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: 'Erreur lors du traitement. Veuillez réessayer.' },
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
      return NextResponse.json({ chats: [] })
    }

    const { searchParams } = new URL(request.url)
    const chatId = searchParams.get('chatId')

    if (chatId) {
      const chat = await db.chat.findUnique({
        where: { id: chatId, userId },
        include: { messages: { orderBy: { createdAt: 'asc' } } }
      })
      return NextResponse.json({ chat })
    }

    const chats = await db.chat.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
      select: { id: true, title: true, createdAt: true, updatedAt: true }
    })

    return NextResponse.json({ chats })
  } catch (error) {
    console.error('Get chats error:', error)
    return NextResponse.json({ chats: [] })
  }
}

// DELETE - Delete chat
export async function DELETE(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const userId = cookieStore.get('userId')?.value

    if (!userId) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const chatId = searchParams.get('chatId')

    if (!chatId) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 })
    }

    await db.chat.delete({
      where: { id: chatId, userId }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur' }, { status: 500 })
  }
}
