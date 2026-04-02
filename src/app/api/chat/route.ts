import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { cookies } from 'next/headers'
import ZAI from 'z-ai-web-dev-sdk'

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

Example response format for company suggestions:
**Company: [Name]**
- Industry: [Industry]
- Size: [Employee count]
- Location: [City, Country]
- Website: [URL]
- Why it's a fit: [Brief explanation]

Always be ready to help users refine their search and find the best prospects for their business.`

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const userId = cookieStore.get('userId')?.value

    if (!userId) {
      return NextResponse.json({ 
        error: 'Authentication required. Please log in to continue.',
        requiresAuth: true 
      }, { status: 401 })
    }

    const body = await request.json()
    const { message, chatId, history } = body

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
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
        error: 'Database connection error. Please try again later.' 
      }, { status: 503 })
    }

    if (!user) {
      return NextResponse.json({ 
        error: 'User not found. Please log in again.',
        requiresAuth: true 
      }, { status: 401 })
    }

    // Check credits
    if (user.credits <= 0) {
      return NextResponse.json(
        { error: 'Insufficient credits. Please upgrade your plan.' },
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
        // Add user message
        await db.chatMessage.create({
          data: { chatId: chat.id, role: 'user', content: message }
        })
      }
    } catch (dbError) {
      console.error('Chat database error:', dbError)
      return NextResponse.json({ 
        error: 'Failed to create chat. Please try again.' 
      }, { status: 500 })
    }

    // Deduct credit
    await db.user.update({
      where: { id: userId },
      data: { credits: { decrement: 1 } }
    })

    // Build messages for AI
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(history || chat.messages || []).map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content
      })),
      { role: 'user' as const, content: message }
    ]

    // Call AI
    let assistantMessage: string
    try {
      const zai = await ZAI.create()
      const completion = await zai.chat.completions.create({
        messages,
        temperature: 0.7,
        max_tokens: 2000
      })
      assistantMessage = completion.choices[0]?.message?.content || 'I apologize, but I was unable to generate a response. Please try again.'
    } catch (aiError) {
      console.error('AI error:', aiError)
      // Refund credit on AI failure
      await db.user.update({
        where: { id: userId },
        data: { credits: { increment: 1 } }
      })
      return NextResponse.json({ 
        error: 'AI service temporarily unavailable. Please try again.' 
      }, { status: 503 })
    }

    // Save assistant message
    await db.chatMessage.create({
      data: { chatId: chat.id, role: 'assistant', content: assistantMessage }
    })

    // Update chat timestamp
    await db.chat.update({
      where: { id: chat.id },
      data: { updatedAt: new Date() }
    })

    return NextResponse.json({
      message: assistantMessage,
      chatId: chat.id,
      credits: user.credits - 1
    })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: 'Failed to process message. Please try again.' },
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
        error: 'Authentication required',
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
        return NextResponse.json({ error: 'Chat not found' }, { status: 404 })
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
        updatedAt: true,
        messages: {
          select: { id: true },
          take: 0
        }
      }
    })

    return NextResponse.json({ chats })
  } catch (error) {
    console.error('Get chats error:', error)
    return NextResponse.json(
      { error: 'Failed to get chats' },
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
        error: 'Authentication required',
        requiresAuth: true 
      }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const chatId = searchParams.get('chatId')

    if (!chatId) {
      return NextResponse.json({ error: 'Chat ID required' }, { status: 400 })
    }

    await db.chat.delete({
      where: { id: chatId, userId }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete chat error:', error)
    return NextResponse.json(
      { error: 'Failed to delete chat' },
      { status: 500 }
    )
  }
}
