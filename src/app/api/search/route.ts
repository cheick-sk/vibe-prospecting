import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { db } from '@/lib/db'
import { AFRICAN_COMPANIES, GOVERNMENT_CONTACTS } from '@/lib/african-data'

// Local search using African data
function searchLocalCompanies(query: string) {
  const searchTerms = query.toLowerCase().split(' ')
  
  return AFRICAN_COMPANIES
    .filter(company => {
      const searchText = `${company.name} ${company.industry} ${company.location} ${company.description} ${company.sector}`.toLowerCase()
      return searchTerms.some(term => searchText.includes(term))
    })
    .slice(0, 10)
    .map(company => ({
      name: company.name,
      domain: company.domain,
      industry: company.industry,
      size: company.size,
      revenue: company.revenue,
      location: company.location,
      website: company.website,
      logo: null,
      description: company.description,
      technologies: company.technologies || []
    }))
}

function searchLocalContacts(query: string) {
  const searchTerms = query.toLowerCase().split(' ')
  
  const allContacts = [
    ...GOVERNMENT_CONTACTS.map(c => ({
      name: c.name,
      title: c.category,
      email: c.email,
      phone: c.phone,
      linkedIn: null,
      company: c.name,
      country: c.country
    }))
  ]
  
  return allContacts
    .filter(contact => {
      const searchText = `${contact.name} ${contact.title} ${contact.company} ${contact.country}`.toLowerCase()
      return searchTerms.some(term => searchText.includes(term))
    })
    .slice(0, 10)
}

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const userId = cookieStore.get('userId')?.value

    if (!userId) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const user = await db.user.findUnique({
      where: { id: userId }
    })

    if (!user || user.credits <= 0) {
      return NextResponse.json(
        { error: 'Crédits insuffisants' },
        { status: 403 }
      )
    }

    const body = await request.json()
    const { type, query } = body

    if (!query) {
      return NextResponse.json({ error: 'Requête requise' }, { status: 400 })
    }

    // Use local African data (no external API calls)
    let results = []
    if (type === 'contacts') {
      results = searchLocalContacts(query)
    } else {
      results = searchLocalCompanies(query)
    }

    // Deduct credits
    await db.user.update({
      where: { id: userId },
      data: { credits: { decrement: 1 } }
    })

    return NextResponse.json({
      companies: type === 'companies' ? results : [],
      contacts: type === 'contacts' ? results : [],
      credits: user.credits - 1,
      source: 'local'
    })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la recherche' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const userId = cookieStore.get('userId')?.value

    if (!userId) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')
    const type = searchParams.get('type') || 'companies'

    if (!query) {
      return NextResponse.json({ error: 'Requête requise' }, { status: 400 })
    }

    const user = await db.user.findUnique({
      where: { id: userId }
    })

    if (!user || user.credits <= 0) {
      return NextResponse.json(
        { error: 'Crédits insuffisants' },
        { status: 403 }
      )
    }

    // Use local African data
    let results = []
    if (type === 'contacts') {
      results = searchLocalContacts(query)
    } else {
      results = searchLocalCompanies(query)
    }

    await db.user.update({
      where: { id: userId },
      data: { credits: { decrement: 1 } }
    })

    return NextResponse.json({
      companies: type === 'companies' ? results : [],
      contacts: type === 'contacts' ? results : [],
      credits: user.credits - 1,
      source: 'local'
    })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la recherche' },
      { status: 500 }
    )
  }
}
