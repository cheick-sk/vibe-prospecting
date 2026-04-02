import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Create a demo user
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@vibeprospecting.com' },
    update: {},
    create: {
      email: 'demo@vibeprospecting.com',
      name: 'Demo User',
      password: 'demo123', // Simple password for demo
      company: 'Vibe Prospecting Demo',
      credits: 400,
      plan: 'free',
    },
  })

  console.log('✅ Created demo user:', demoUser.email)

  // Create some sample leads for the demo user
  const sampleLeads = [
    {
      userId: demoUser.id,
      companyName: 'Guinea Alumina Corporation',
      companyDomain: 'guineaalumina.com',
      companyIndustry: 'Mines',
      companySize: '201-500',
      companyRevenue: '$100M-$500M',
      companyLocation: 'Conakry, Guinée',
      companyWebsite: 'https://guineaalumina.com',
      contactName: 'Mamadou Sow',
      contactTitle: 'Directeur Commercial',
      contactEmail: 'm.sow@guineaalumina.com',
      contactPhone: '+224 664 12 00 00',
      status: 'new',
    },
    {
      userId: demoUser.id,
      companyName: 'Orange Guinée',
      companyDomain: 'orange-guinee.com',
      companyIndustry: 'Télécommunications',
      companySize: '201-500',
      companyRevenue: '$50M-$100M',
      companyLocation: 'Conakry, Guinée',
      companyWebsite: 'https://orange-guinee.com',
      contactName: 'Fatou Bintou Diallo',
      contactTitle: 'Directrice Marketing',
      contactEmail: 'f.diallo@orange-guinee.com',
      status: 'contacted',
    },
    {
      userId: demoUser.id,
      companyName: 'Guinéenne de Banque',
      companyDomain: 'guib.net',
      companyIndustry: 'Banque & Finance',
      companySize: '201-500',
      companyRevenue: '$10M-$50M',
      companyLocation: 'Conakry, Guinée',
      companyWebsite: 'https://guib.net',
      contactName: 'Cheikh Ahmed Tidiane Dia',
      contactTitle: 'Directeur des Investissements',
      contactEmail: 'c.dia@guib.net',
      status: 'qualified',
    },
  ]

  for (const lead of sampleLeads) {
    await prisma.lead.upsert({
      where: { 
        id: `${demoUser.id}-${lead.companyDomain}` 
      },
      update: {},
      create: lead,
    })
  }

  console.log('✅ Created sample leads')

  // Create a sample list
  const sampleList = await prisma.leadList.upsert({
    where: { id: `${demoUser.id}-mines-guinea` },
    update: {},
    create: {
      id: `${demoUser.id}-mines-guinea`,
      userId: demoUser.id,
      name: 'Entreprises Minières Guinée',
      description: 'Liste des entreprises du secteur minier en Guinée',
    },
  })

  console.log('✅ Created sample list:', sampleList.name)

  console.log('🎉 Seed completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
