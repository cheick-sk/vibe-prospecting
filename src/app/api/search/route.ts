import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { db } from '@/lib/db'
import { africanCompanies, guineaCompanies } from '@/lib/african-data'

interface SearchResult {
  url: string
  name: string
  snippet: string
  host_name: string
  rank: number
  date: string
  favicon: string
}

// Fallback to local data when web search is unavailable
function getLocalCompanies(query: string) {
  const searchTerms = query.toLowerCase().split(' ')
  
  const allCompanies = [...guineaCompanies, ...africanCompanies]
  
  return allCompanies
    .filter(company => {
      const searchText = `${company.name} ${company.industry} ${company.location} ${company.description}`.toLowerCase()
      return searchTerms.some(term => searchText.includes(term))
    })
    .slice(0, 10)
    .map(company => ({
      name: company.name,
      domain: company.website?.replace('https://', '').replace('http://', '') || '',
      industry: company.industry,
      size: company.size,
      revenue: company.revenue,
      location: company.location,
      website: company.website,
      logo: null,
      description: company.description,
      technologies: []
    }))
}

// Parse company information from search results
function parseCompanyInfo(results: SearchResult[]) {
  const companies: Array<{
    name: string
    domain: string
    industry: string
    size: string
    revenue: string
    location: string
    website: string
    logo: string | null
    description: string
    technologies: string[]
  }> = []

  for (const result of results) {
    if (result.host_name.includes('linkedin') || 
        result.host_name.includes('twitter') ||
        result.host_name.includes('facebook') ||
        result.host_name.includes('instagram') ||
        result.host_name.includes('crunchbase')) {
      continue
    }

    const name = result.name.replace(' - ', ' | ').split('|')[0].trim()
    const domain = result.host_name
    
    companies.push({
      name,
      domain,
      industry: 'Technologie',
      size: '50-200',
      revenue: '$1M-$10M',
      location: 'Afrique',
      website: `https://${domain}`,
      logo: null,
      description: result.snippet,
      technologies: []
    })
  }

  return companies.slice(0, 10)
}

// Dynamic import for AI SDK
async function performWebSearch(query: string): Promise<SearchResult[] | null> {
  try {
    const ZAI = (await import('z-ai-web-dev-sdk')).default
    const zai = await ZAI.create()
    
    const searchResult = await zai.functions.invoke('web_search', {
      query,
      num: 15
    })
    
    return searchResult as SearchResult[]
  } catch (error) {
    console.error('Web search error:', error)
    return null
  }
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

    let searchQuery = query
    if (type === 'companies') {
      searchQuery = `${query} entreprise profil business`
    } else if (type === 'contacts') {
      searchQuery = `${query} CEO directeur LinkedIn`
    }

    // Try web search, fallback to local data
    const searchResult = await performWebSearch(searchQuery)
    
    let companies = []
    if (searchResult) {
      companies = parseCompanyInfo(searchResult)
    } else {
      // Use local African/Guinean data as fallback
      companies = getLocalCompanies(query)
    }

    // Deduct credits
    await db.user.update({
      where: { id: userId },
      data: { credits: { decrement: 2 } }
    })

    return NextResponse.json({
      companies,
      credits: user.credits - 2,
      source: searchResult ? 'web' : 'local'
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

    let searchQuery = query
    if (type === 'companies') {
      searchQuery = `${query} entreprise profil business`
    } else if (type === 'contacts') {
      searchQuery = `${query} CEO directeur LinkedIn`
    }

    // Try web search, fallback to local data
    const searchResult = await performWebSearch(searchQuery)
    
    let companies = []
    if (searchResult) {
      companies = parseCompanyInfo(searchResult)
    } else {
      companies = getLocalCompanies(query)
    }

    await db.user.update({
      where: { id: userId },
      data: { credits: { decrement: 2 } }
    })

    return NextResponse.json({
      companies,
      credits: user.credits - 2,
      source: searchResult ? 'web' : 'local'
    })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la recherche' },
      { status: 500 }
    )
  }
}
