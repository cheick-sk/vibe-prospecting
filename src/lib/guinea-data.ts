// ==================== GUINEA SPECIFIC DATA ====================

// Guinea Regions and Prefectures
export const GUINEA_REGIONS = [
  {
    name: 'Conakry',
    capital: 'Conakry',
    type: 'Zone spéciale',
    population: 2000000,
    prefectures: [
      { name: 'Conakry', population: 2000000, area: 450 }
    ]
  },
  {
    name: 'Boké',
    capital: 'Boké',
    type: 'Région',
    population: 1140000,
    prefectures: [
      { name: 'Boké', population: 280000, area: 11000 },
      { name: 'Boffa', population: 230000, area: 9100 },
      { name: 'Fria', population: 110000, area: 2100 },
      { name: 'Kamsar', population: 120000, area: 850 },
      { name: 'Gaoual', population: 195000, area: 11500 },
      { name: 'Koundara', population: 130000, area: 6400 }
    ]
  },
  {
    name: 'Faranah',
    capital: 'Faranah',
    type: 'Région',
    population: 950000,
    prefectures: [
      { name: 'Faranah', population: 280000, area: 13000 },
      { name: 'Dabola', population: 180000, area: 5500 },
      { name: 'Dinguiraye', population: 160000, area: 14500 },
      { name: 'Kissidougou', population: 210000, area: 8200 }
    ]
  },
  {
    name: 'Kankan',
    capital: 'Kankan',
    type: 'Région',
    population: 1400000,
    prefectures: [
      { name: 'Kankan', population: 350000, area: 11500 },
      { name: 'Kouroussa', population: 160000, area: 14200 },
      { name: 'Siguiri', population: 280000, area: 12500 },
      { name: 'Mandiana', population: 195000, area: 10500 },
      { name: 'Kérouané', population: 130000, area: 8500 },
      { name: 'Kouranko', population: 110000, area: 5200 }
    ]
  },
  {
    name: 'Kindia',
    capital: 'Kindia',
    type: 'Région',
    population: 1600000,
    prefectures: [
      { name: 'Kindia', population: 340000, area: 8400 },
      { name: 'Coyah', population: 180000, area: 2600 },
      { name: 'Dubréka', population: 150000, area: 4800 },
      { name: 'Forécariah', population: 220000, area: 4200 },
      { name: 'Télimélé', population: 230000, area: 8500 },
      { name: 'Mali', population: 180000, area: 7500 }
    ]
  },
  {
    name: 'Labé',
    capital: 'Labé',
    type: 'Région',
    population: 1000000,
    prefectures: [
      { name: 'Labé', population: 250000, area: 6200 },
      { name: 'Koubia', population: 100000, area: 2400 },
      { name: 'Lélouma', population: 130000, area: 4200 },
      { name: 'Tougué', population: 140000, area: 6500 },
      { name: 'Dalaba', population: 130000, area: 4500 },
      { name: 'Pita', population: 170000, area: 4800 }
    ]
  },
  {
    name: 'Mamou',
    capital: 'Mamou',
    type: 'Région',
    population: 750000,
    prefectures: [
      { name: 'Mamou', population: 280000, area: 6000 },
      { name: 'Dabatou', population: 130000, area: 3500 },
      { name: 'Timbo', population: 100000, area: 2200 },
      { name: 'Pita', population: 170000, area: 4800 }
    ]
  },
  {
    name: 'Nzérékoré',
    capital: 'Nzérékoré',
    type: 'Région',
    population: 1800000,
    prefectures: [
      { name: 'Nzérékoré', population: 400000, area: 8500 },
      { name: 'Beyla', population: 210000, area: 12500 },
      { name: 'Gueckédou', population: 180000, area: 4400 },
      { name: 'Kissidougou', population: 210000, area: 8200 },
      { name: 'Lola', population: 140000, area: 3800 },
      { name: 'Macenta', population: 190000, area: 8600 },
      { name: 'Nzérékoré', population: 250000, area: 5500 },
      { name: 'Yomou', population: 100000, area: 2900 }
    ]
  }
]

// Guinea Economic Sectors with detailed breakdown
export const GUINEA_ECONOMIC_SECTORS = {
  mining: {
    name: 'Secteur Minier',
    nameEn: 'Mining Sector',
    contributionGDP: 25,
    employment: 50000,
    description: 'Premier producteur mondial de bauxite, ressources en or, fer, diamants',
    opportunities: [
      'Exploration minière',
      'Services miniers',
      'Équipements miniers',
      'Formation minière',
      'Logistique minière'
    ],
    keyPlayers: ['CBG', 'GAC', 'SBD', 'SMD', 'Nordgold', 'Rio Tinto'],
    investmentPotential: 'Très élevé',
    mainRegions: ['Boké', 'Siguiri', 'Faranah', 'Nzérékoré']
  },
  agriculture: {
    name: 'Secteur Agricole',
    nameEn: 'Agriculture Sector',
    contributionGDP: 20,
    employment: 3000000,
    description: 'Riz, café, cacao, ananas, huile de palme, caoutchouc',
    opportunities: [
      'Transformation agroalimentaire',
      'Exportation fruits tropicaux',
      'Mécanisation agricole',
      'Irrigation',
      'Semences améliorées'
    ],
    keyPlayers: ['SGPH', 'Friguia', 'SCB', 'CMDT'],
    investmentPotential: 'Élevé',
    mainRegions: ['Kankan', 'Nzérékoré', 'Kindia', 'Faranah']
  },
  energy: {
    name: 'Secteur Énergétique',
    nameEn: 'Energy Sector',
    contributionGDP: 5,
    employment: 15000,
    description: 'Potentiel hydroélectrique énorme (6th mondial), solaire, biomasse',
    opportunities: [
      'Production hydroélectrique',
      'Électrification rurale',
      'Énergie solaire',
      'Maintenance équipements',
      'Transmission et distribution'
    ],
    keyPlayers: ['EDG', 'SAK', 'SOGEL', 'Tomen'],
    investmentPotential: 'Très élevé',
    mainRegions: ['Conakry', 'Faranah', 'Kindia', 'Nzérékoré']
  },
  telecommunications: {
    name: 'Secteur Télécommunications',
    nameEn: 'Telecommunications Sector',
    contributionGDP: 8,
    employment: 10000,
    description: 'Mobile, internet, fibre optique en expansion',
    opportunities: [
      'Extension réseau 4G/5G',
      'Fibre optique',
      'Services numériques',
      'Mobile banking',
      'Data centers'
    ],
    keyPlayers: ['Orange', 'MTN', 'Cellcom', 'Guinéenne de Téléphonie'],
    investmentPotential: 'Élevé',
    mainRegions: ['Conakry', 'Kankan', 'Nzérékoré', 'Labé']
  },
  construction: {
    name: 'Secteur BTP',
    nameEn: 'Construction Sector',
    contributionGDP: 10,
    employment: 100000,
    description: 'Infrastructures, logement, routes, barrages',
    opportunities: [
      'Construction immobilière',
      'Infrastructures routières',
      'Bâtiments industriels',
      'Travaux publics',
      'Cimenterie'
    ],
    keyPlayers: ['Sogea Satom', 'Bouygues', 'CWE', 'SOGEF'],
    investmentPotential: 'Élevé',
    mainRegions: ['Conakry', 'Toutes régions']
  },
  banking: {
    name: 'Secteur Bancaire et Financier',
    nameEn: 'Banking and Financial Sector',
    contributionGDP: 6,
    employment: 8000,
    description: 'Banques commerciales, microfinance, assurances',
    opportunities: [
      'Banque digitale',
      'Microfinance',
      'Assurances',
      'Fintech',
      'Capital-investissement'
    ],
    keyPlayers: ['GUIB', 'BICIGUI', 'Société Générale', 'Ecobank', 'BPMG'],
    investmentPotential: 'Moyen à Élevé',
    mainRegions: ['Conakry', 'Kankan', 'Nzérékoré']
  },
  transport: {
    name: 'Secteur Transport et Logistique',
    nameEn: 'Transport and Logistics Sector',
    contributionGDP: 7,
    employment: 50000,
    description: 'Port de Conakry, chemins de fer miniers, transport routier',
    opportunities: [
      'Transport maritime',
      'Logistique portuaire',
      'Transport ferroviaire',
      'Transport routier',
      'Aviation'
    ],
    keyPlayers: ['Port Autonome de Conakry', 'Guinea Railways', 'Maersk', 'Bolloré'],
    investmentPotential: 'Très élevé',
    mainRegions: ['Conakry', 'Boké', 'Kankan']
  },
  fishing: {
    name: 'Secteur Pêche',
    nameEn: 'Fishing Sector',
    contributionGDP: 3,
    employment: 100000,
    description: 'Pêche maritime et continentale, aquaculture',
    opportunities: [
      'Pêche industrielle',
      'Transformation du poisson',
      'Aquaculture',
      'Conserves',
      'Exportation'
    ],
    keyPlayers: ['Pêcheurs artisans', 'Entreprises de transformation'],
    investmentPotential: 'Élevé',
    mainRegions: ['Conakry', 'Boké', 'Nzérékoré']
  },
  tourism: {
    name: 'Secteur Tourisme',
    nameEn: 'Tourism Sector',
    contributionGDP: 2,
    employment: 20000,
    description: 'Tourisme naturel, culturel, Mont Nimba, Fouta Djallon',
    opportunities: [
      'Hôtellerie',
      'Écotourisme',
      'Tourisme culturel',
      'Résidences',
      'Restauration'
    ],
    keyPlayers: ['Hôtels de Conakry', 'ONTH'],
    investmentPotential: 'Élevé',
    mainRegions: ['Conakry', 'Labé', 'Nzérékoré', 'Kindia']
  }
}

// Guinea Government - Complete Structure
export const GUINEA_GOVERNMENT = {
  presidency: {
    name: 'Présidence de la République de Guinée',
    address: 'Palais du Peuple, Conakry',
    phone: '+224 664 00 00 00',
    email: 'contact@presidence.gov.gn',
    website: 'https://presidence.gov.gn',
    headOfState: 'Président de la République',
    departments: [
      'Secrétariat Général de la Présidence',
      'Cabinet du Président',
      'Inspection Générale de l\'État',
      'Conseil National de Développement'
    ]
  },
  primeMinistry: {
    name: 'Primature de la République de Guinée',
    address: 'Primature, Conakry',
    phone: '+224 664 10 00 00',
    email: 'contact@primature.gov.gn',
    website: 'https://primature.gov.gn',
    departments: [
      'Secrétariat Général du Gouvernement',
      'Ministères sous tutelle'
    ]
  },
  nationalAssembly: {
    name: 'Assemblée Nationale',
    address: 'Conakry',
    phone: '+224 664 11 00 00',
    email: 'contact@assemblee-nationale.gov.gn',
    website: 'https://assemblee-nationale.gov.gn'
  },
  supremeCourt: {
    name: 'Cour Suprême',
    address: 'Conakry',
    phone: '+224 664 12 00 00',
    email: 'contact@cour-supreme.gov.gn'
  },
  ministries: [
    {
      name: 'Ministère de l\'Économie et des Finances',
      minister: 'Ministre',
      address: 'Conakry, Kaloum',
      phone: '+224 664 20 00 00',
      email: 'contact@finances.gov.gn',
      website: 'https://finances.gov.gn',
      departments: [
        'Direction Nationale du Trésor',
        'Direction Nationale du Budget',
        'Direction Nationale des Impôts',
        'Direction Nationale des Douanes',
        'Direction Nationale de la Comptabilité Publique'
      ],
      agencies: ['Trésor Public', 'Impôts', 'Douanes']
    },
    {
      name: 'Ministère de la Défense Nationale',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 21 00 00',
      email: 'contact@defense.gov.gn',
      departments: [
        'État-Major Général des Armées',
        'Armée de Terre',
        'Armée de l\'Air',
        'Marine Nationale',
        'Gendarmerie Nationale'
      ]
    },
    {
      name: 'Ministère des Affaires Étrangères et des Guinéens de l\'Extérieur',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 22 00 00',
      email: 'contact@diplomatie.gov.gn',
      website: 'https://diplomatie.gov.gn',
      departments: [
        'Direction des Affaires Politiques',
        'Direction de la Coopération Bilatérale',
        'Direction de la Coopération Multilatérale',
        'Direction des Guinéens de l\'Extérieur'
      ]
    },
    {
      name: 'Ministère de l\'Intérieur et de la Décentralisation',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 23 00 00',
      email: 'contact@interieur.gov.gn',
      departments: [
        'Direction Générale de l\'Administration Territoriale',
        'Direction Générale de la Sécurité',
        'Police Nationale',
        'Direction des Élections'
      ]
    },
    {
      name: 'Ministère de la Justice, Gardien des Sceaux',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 24 00 00',
      email: 'contact@justice.gov.gn',
      departments: [
        'Direction Nationale de l\'Administration Judiciaire',
        'Direction des Affaires Pénales',
        'Direction des Affaires Civiles',
        'Administration Pénitentiaire'
      ]
    },
    {
      name: 'Ministère de l\'Éducation Nationale et de l\'Alphabétisation',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 25 00 00',
      email: 'contact@education.gov.gn',
      website: 'https://education.gov.gn',
      departments: [
        'Direction Nationale de l\'Enseignement Primaire',
        'Direction Nationale de l\'Enseignement Secondaire',
        'Direction Nationale de l\'Alphabétisation',
        'Inspection Générale de l\'Éducation'
      ]
    },
    {
      name: 'Ministère de l\'Enseignement Supérieur, de la Recherche Scientifique et de l\'Innovation',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 26 00 00',
      email: 'contact@supérieur.gov.gn',
      departments: [
        'Direction Nationale de l\'Enseignement Supérieur',
        'Direction Nationale de la Recherche Scientifique',
        'Direction de l\'Innovation'
      ]
    },
    {
      name: 'Ministère de la Santé et de l\'Hygiène Publique',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 27 00 00',
      email: 'contact@santé.gov.gn',
      website: 'https://sante.gov.gn',
      departments: [
        'Direction Nationale de la Santé',
        'Direction Nationale des Hôpitaux',
        'Direction Nationale de la Pharmacie',
        'Programme National de Lutte contre le Paludisme',
        'Programme National de Lutte contre le SIDA'
      ]
    },
    {
      name: 'Ministère de l\'Agriculture et de l\'Élevage',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 28 00 00',
      email: 'contact@agriculture.gov.gn',
      website: 'https://agriculture.gov.gn',
      departments: [
        'Direction Nationale de l\'Agriculture',
        'Direction Nationale de l\'Élevage',
        'Direction Nationale des Forêts',
        'Direction Nationale du Génie Rural'
      ]
    },
    {
      name: 'Ministère des Mines et de la Géologie',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 29 00 00',
      email: 'contact@mines.gov.gn',
      website: 'https://mines.gov.gn',
      departments: [
        'Direction Nationale des Mines',
        'Direction Nationale de la Géologie',
        'Direction Nationale de l\'Environnement Minier',
        'Centre de Promotion et de Développement Minier'
      ]
    },
    {
      name: 'Ministère de l\'Énergie, de l\'Hydraulique et des Hydrocarbures',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 30 00 00',
      email: 'contact@energie.gov.gn',
      departments: [
        'Direction Nationale de l\'Énergie',
        'Direction Nationale de l\'Hydraulique',
        'Direction Nationale des Hydrocarbures',
        'Direction des Énergies Renouvelables'
      ]
    },
    {
      name: 'Ministère des Travaux Publics, du Logement et de l\'Urbanisme',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 31 00 00',
      email: 'contact@travauxpublics.gov.gn',
      departments: [
        'Direction Nationale des Travaux Publics',
        'Direction Nationale du Logement',
        'Direction Nationale de l\'Urbanisme',
        'Direction Nationale des Routes'
      ]
    },
    {
      name: 'Ministère des Transports',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 32 00 00',
      email: 'contact@transports.gov.gn',
      departments: [
        'Direction Nationale des Transports Terrestres',
        'Direction Nationale de l\'Aviation Civile',
        'Direction Nationale de la Marine Marchande',
        'Direction de la Sécurité Routière'
      ]
    },
    {
      name: 'Ministère du Commerce, de l\'Industrie et des PME',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 33 00 00',
      email: 'contact@commerce.gov.gn',
      departments: [
        'Direction Nationale du Commerce Intérieur',
        'Direction Nationale du Commerce Extérieur',
        'Direction Nationale de l\'Industrie',
        'Direction Nationale des PME'
      ]
    },
    {
      name: 'Ministère du Tourisme, de l\'Hôtellerie et de l\'Artisanat',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 34 00 00',
      email: 'contact@tourisme.gov.gn',
      website: 'https://tourisme.gov.gn',
      departments: [
        'Direction Nationale du Tourisme',
        'Direction Nationale de l\'Hôtellerie',
        'Direction Nationale de l\'Artisanat',
        'Office Guinéen du Tourisme'
      ]
    },
    {
      name: 'Ministère de la Communication et des Médias',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 35 00 00',
      email: 'contact@communication.gov.gn',
      departments: [
        'Direction Nationale de la Communication',
        'Direction Nationale des Médias',
        'Haute Autorité de la Communication'
      ]
    },
    {
      name: 'Ministère de la Fonction Publique, du Travail et de l\'Emploi',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 36 00 00',
      email: 'contact@fonctionpublique.gov.gn',
      departments: [
        'Direction Nationale de la Fonction Publique',
        'Direction Nationale du Travail',
        'Direction Nationale de l\'Emploi',
        'Caisse Nationale de Sécurité Sociale'
      ]
    },
    {
      name: 'Ministère de l\'Action Sociale, de la Promotion Féminine et de l\'Enfance',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 37 00 00',
      email: 'contact@actionsociale.gov.gn',
      departments: [
        'Direction Nationale de l\'Action Sociale',
        'Direction Nationale de la Promotion Féminine',
        'Direction Nationale de l\'Enfance'
      ]
    },
    {
      name: 'Ministère de l\'Environnement, des Eaux et Forêts',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 38 00 00',
      email: 'contact@environnement.gov.gn',
      departments: [
        'Direction Nationale de l\'Environnement',
        'Direction Nationale des Eaux et Forêts',
        'Centre National des Sciences Halieutiques'
      ]
    },
    {
      name: 'Ministère de la Jeunesse et des Sports',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 39 00 00',
      email: 'contact@jeunesse.gov.gn',
      departments: [
        'Direction Nationale de la Jeunesse',
        'Direction Nationale des Sports',
        'Direction Nationale de l\'Éducation Physique'
      ]
    },
    {
      name: 'Ministère de la Culture, des Arts et du Patrimoine Historique',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 40 00 00',
      email: 'contact@culture.gov.gn',
      departments: [
        'Direction Nationale de la Culture',
        'Direction Nationale des Arts',
        'Direction Nationale du Patrimoine',
        'Institut National de Recherches et de Documentation'
      ]
    },
    {
      name: 'Ministère du Plan et de la Coopération Internationale',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 41 00 00',
      email: 'contact@plan.gov.gn',
      departments: [
        'Direction Nationale du Plan',
        'Direction Nationale de la Coopération',
        'Direction Nationale des Statistiques'
      ]
    },
    {
      name: 'Ministère de l\'Enseignement Technique, de la Formation Professionnelle et de l\'Emploi',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 42 00 00',
      email: 'contact@formationpro.gov.gn',
      departments: [
        'Direction Nationale de l\'Enseignement Technique',
        'Direction Nationale de la Formation Professionnelle',
        'Centres de Formation Professionnelle'
      ]
    },
    {
      name: 'Ministère de la Pêche et de l\'Économie Maritime',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 43 00 00',
      email: 'contact@peche.gov.gn',
      departments: [
        'Direction Nationale de la Pêche',
        'Direction Nationale de l\'Économie Maritime',
        'Centre National des Sciences Halieutiques'
      ]
    },
    {
      name: 'Ministère de la Ville et de l\'Aménagement du Territoire',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 44 00 00',
      email: 'contact@ville.gov.gn',
      departments: [
        'Direction Nationale de la Ville',
        'Direction Nationale de l\'Aménagement du Territoire'
      ]
    },
    {
      name: 'Ministère de la Promotion Féminine',
      minister: 'Ministre',
      address: 'Conakry',
      phone: '+224 664 45 00 00',
      email: 'contact@promotionfeminine.gov.gn'
    }
  ]
}

// Guinea State-Owned Enterprises and Agencies
export const GUINEA_AGENCIES = [
  {
    name: 'Agence Guinéenne de Promotion des Investissements (APIP)',
    type: 'Agence',
    sector: 'Investissement',
    address: 'Conakry, Kaloum',
    phone: '+224 664 50 00 00',
    email: 'contact@apip.gov.gn',
    website: 'https://apip.gov.gn',
    description: 'Promotion des investissements et accompagnement des investisseurs',
    services: ['Création d\'entreprises', 'Accompagnement investisseurs', 'Information économique']
  },
  {
    name: 'Société des Bauxites de Guinée (SBG)',
    type: 'Société d\'État',
    sector: 'Mines',
    address: 'Conakry',
    phone: '+224 664 51 00 00',
    email: 'contact@sbg.gn',
    description: 'Production de bauxite'
  },
  {
    name: 'Société Guinéenne du Patrimoine Minier (SOGUIPAMI)',
    type: 'Société d\'État',
    sector: 'Mines',
    address: 'Conakry',
    phone: '+224 664 52 00 00',
    email: 'contact@soguipami.gov.gn',
    website: 'https://soguipami.gov.gn',
    description: 'Gestion du patrimoine minier de l\'État'
  },
  {
    name: 'Électricité de Guinée (EDG)',
    type: 'Société d\'État',
    sector: 'Énergie',
    address: 'Conakry',
    phone: '+224 664 53 00 00',
    email: 'contact@edg-guinee.com',
    website: 'https://edg-guinee.com',
    description: 'Distribution d\'électricité'
  },
  {
    name: 'Société des Eaux de Guinée (SEG)',
    type: 'Société d\'État',
    sector: 'Eau',
    address: 'Conakry',
    phone: '+224 664 54 00 00',
    email: 'contact@seg.gn',
    description: 'Distribution d\'eau potable'
  },
  {
    name: 'Port Autonome de Conakry (PAC)',
    type: 'Établissement public',
    sector: 'Transport',
    address: 'Conakry',
    phone: '+224 664 55 00 00',
    email: 'contact@pac.gn',
    website: 'https://pac.gn',
    description: 'Gestion du port de Conakry'
  },
  {
    name: 'Office National des Postes et Télécommunications (ONPT)',
    type: 'Établissement public',
    sector: 'Télécommunications',
    address: 'Conakry',
    phone: '+224 664 56 00 00',
    email: 'contact@onpt.gn',
    description: 'Services postaux'
  },
  {
    name: 'Office National du Tourisme et de l\'Hôtellerie (ONTH)',
    type: 'Établissement public',
    sector: 'Tourisme',
    address: 'Conakry',
    phone: '+224 664 57 00 00',
    email: 'contact@onth.gn',
    description: 'Promotion du tourisme'
  },
  {
    name: 'Agence Nationale de l\'Aviation Civile (ANAC)',
    type: 'Agence',
    sector: 'Transport',
    address: 'Conakry',
    phone: '+224 664 58 00 00',
    email: 'contact@anac.gn',
    description: 'Régulation de l\'aviation civile'
  },
  {
    name: 'Autorité de Régulation des Communications Électroniques et Postales (ARCEP)',
    type: 'Autorité de régulation',
    sector: 'Télécommunications',
    address: 'Conakry',
    phone: '+224 664 59 00 00',
    email: 'contact@arcep.gov.gn',
    description: 'Régulation du secteur des télécommunications'
  },
  {
    name: 'Autorité de Régulation des Marchés Publics (ARMP)',
    type: 'Autorité de régulation',
    sector: 'Marchés publics',
    address: 'Conakry',
    phone: '+224 664 60 00 00',
    email: 'contact@armp.gov.gn',
    description: 'Régulation des marchés publics'
  },
  {
    name: 'Comité National de Pilotage des Projets Miniers (CNPPM)',
    type: 'Comité',
    sector: 'Mines',
    address: 'Conakry',
    phone: '+224 664 61 00 00',
    description: 'Pilotage des projets miniers stratégiques'
  },
  {
    name: 'Centre de Promotion et de Développement Minier (CPDM)',
    type: 'Centre',
    sector: 'Mines',
    address: 'Conakry',
    phone: '+224 664 62 00 00',
    description: 'Promotion du secteur minier'
  },
  {
    name: 'Société d\'Aménagement du Konkouré (SAK)',
    type: 'Société',
    sector: 'Énergie',
    address: 'Conakry',
    phone: '+224 664 63 00 00',
    description: 'Aménagement hydroélectrique du Konkouré'
  },
  {
    name: 'Agence Nationale pour le Développement Rural (ANADER)',
    type: 'Agence',
    sector: 'Agriculture',
    address: 'Conakry',
    phone: '+224 664 64 00 00',
    description: 'Développement rural'
  }
]

// Extended Guinea Companies Database
export const GUINEA_COMPANIES = [
  // MINING SECTOR
  { name: 'Compagnie des Bauxites de Guinée', domain: 'cbg.gn', industry: 'Mines', sector: 'Bauxite', size: '1000+', revenue: '$500M+', location: 'Kamsar', region: 'Boké', country: 'GN', website: 'https://cbg.gn', description: 'Plus grand producteur de bauxite de Guinée', technologies: ['SAP', 'Mining Tech', 'IoT'], employees: 2500 },
  { name: 'Guinea Alumina Corporation', domain: 'guineaalumina.com', industry: 'Mines', sector: 'Bauxite', size: '201-500', revenue: '$100M-500M', location: 'Conakry', region: 'Conakry', country: 'GN', website: 'https://guineaalumina.com', description: 'Projet minier de classe mondiale', technologies: ['GIS', 'AutoCAD'], employees: 350 },
  { name: 'Société des Bauxites de Dabola-Tougué', domain: 'sbd.gn', industry: 'Mines', sector: 'Bauxite', size: '201-500', revenue: '$50M-100M', location: 'Dabola', region: 'Faranah', country: 'GN', description: 'Exploitation de bauxite', employees: 280 },
  { name: 'Alufer Mining', domain: 'alufermining.com', industry: 'Mines', sector: 'Bauxite', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Entreprise minière', employees: 150 },
  { name: 'Société Minière de Dinguiraye', domain: 'smd-guinee.com', industry: 'Mines', sector: 'Or', size: '201-500', revenue: '$100M-500M', location: 'Dinguiraye', region: 'Faranah', country: 'GN', description: 'Exploitation aurifère majeure', employees: 400 },
  { name: 'Nordgold Guinea', domain: 'nordgold.com', industry: 'Mines', sector: 'Or', size: '201-500', revenue: '$100M-500M', location: 'Siguiri', region: 'Kankan', country: 'GN', description: 'Mine d\'or de Siguiri', employees: 450 },
  { name: 'Société Aurifère de Guinée', domain: 'sag-guinee.com', industry: 'Mines', sector: 'Or', size: '51-200', revenue: '$50M-100M', location: 'Kouroussa', region: 'Kankan', country: 'GN', description: 'Exploitation aurifère', employees: 180 },
  { name: 'Rio Tinto Guinée', domain: 'riotinto.com', industry: 'Mines', sector: 'Fer', size: '201-500', revenue: '$100M-500M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Projet Simandou - Gisement de fer', employees: 300 },
  { name: 'Société Guinéenne du Patrimoine Minier', domain: 'soguipami.gov.gn', industry: 'Mines', sector: 'Services', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Gestion du patrimoine minier', employees: 120 },
  { name: 'Compagnie des Bauxites de Kindia', domain: 'cbk.gn', industry: 'Mines', sector: 'Bauxite', size: '201-500', revenue: '$50M-100M', location: 'Kindia', region: 'Kindia', country: 'GN', description: 'Production de bauxite', employees: 350 },
  { name: 'Alumina Partners of Guinea', domain: 'apg.gn', industry: 'Mines', sector: 'Bauxite', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Partenariat aluminerie', employees: 100 },
  { name: 'Boké Mining Company', domain: 'bmc.gn', industry: 'Mines', sector: 'Bauxite', size: '51-200', revenue: '$10M-50M', location: 'Boké', region: 'Boké', country: 'GN', description: 'Exploitation minière', employees: 120 },
  
  // TELECOMMUNICATIONS
  { name: 'Orange Guinée', domain: 'orange-guinee.com', industry: 'Télécommunications', sector: 'Mobile', size: '201-500', revenue: '$50M-100M', location: 'Conakry', region: 'Conakry', country: 'GN', website: 'https://orange-guinee.com', description: 'Leader téléphonie mobile', technologies: ['4G LTE', '5G', 'Orange Money'], employees: 450 },
  { name: 'MTN Guinée', domain: 'mtn.gn', industry: 'Télécommunications', sector: 'Mobile', size: '201-500', revenue: '$50M-100M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Opérateur mobile', technologies: ['4G LTE', 'MTN Money'], employees: 380 },
  { name: 'Cellcom Guinée', domain: 'cellcom.gn', industry: 'Télécommunications', sector: 'Mobile', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Opérateur mobile', technologies: ['4G LTE'], employees: 150 },
  { name: 'Guinéenne de Téléphonie', domain: 'guitel.gn', industry: 'Télécommunications', sector: 'Fixe', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Téléphonie fixe', technologies: ['Fiber', 'VoIP'], employees: 120 },
  { name: 'Guinée Télécom', domain: 'guineetelecom.gn', industry: 'Télécommunications', sector: 'Infrastructure', size: '11-50', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Infrastructure télécom', employees: 50 },
  
  // BANKING & FINANCE
  { name: 'Guinéenne de Banque', domain: 'guib.net', industry: 'Banque', sector: 'Banque commerciale', size: '201-500', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', website: 'https://guib.net', description: 'Banque commerciale leader', technologies: ['Temenos', 'SWIFT'], employees: 350 },
  { name: 'BICIGUI - BNP Paribas', domain: 'bicigui.com', industry: 'Banque', sector: 'Banque commerciale', size: '201-500', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Filiale BNP Paribas', technologies: ['Oracle Banking'], employees: 280 },
  { name: 'Société Générale Guinée', domain: 'societegenerale.gn', industry: 'Banque', sector: 'Banque commerciale', size: '201-500', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Banque universelle', technologies: ['SAP Banking'], employees: 250 },
  { name: 'Ecobank Guinée', domain: 'ecobank.com', industry: 'Banque', sector: 'Banque commerciale', size: '201-500', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Banque panafricaine', technologies: ['Temenos'], employees: 220 },
  { name: 'Banque Populaire Maroco-Guinéenne', domain: 'bpmg.gn', industry: 'Banque', sector: 'Banque commerciale', size: '51-200', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Banque maroco-guinéenne', employees: 150 },
  { name: 'Crédit Rural de Guinée', domain: 'creditrural.gn', industry: 'Microfinance', sector: 'Microfinance', size: '51-200', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Microfinance rurale', employees: 180 },
  { name: 'FINADEV Guinée', domain: 'finadev.gn', industry: 'Microfinance', sector: 'Microfinance', size: '51-200', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Microfinance', employees: 100 },
  { name: 'Caisse Nationale de Sécurité Sociale', domain: 'cnss.gn', industry: 'Sécurité sociale', sector: 'Prévoyance', size: '201-500', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Sécurité sociale', employees: 200 },
  
  // ENERGY
  { name: 'Électricité de Guinée', domain: 'edg-guinee.com', industry: 'Énergie', sector: 'Distribution électrique', size: '500-1000', revenue: '$50M-100M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Distribution d\'électricité', technologies: ['SCADA', 'Smart Grid'], employees: 800 },
  { name: 'Société d\'Aménagement du Konkouré', domain: 'sak.gn', industry: 'Énergie', sector: 'Hydroélectrique', size: '201-500', revenue: '$50M-100M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Barrage hydroélectrique', technologies: ['Hydro'], employees: 250 },
  { name: 'Société Guinéenne d\'Électricité', domain: 'sogel.gn', industry: 'Énergie', sector: 'Production électrique', size: '201-500', revenue: '$50M-100M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Production électrique', employees: 300 },
  { name: 'Tomen Guinée', domain: 'tomen.gn', industry: 'Énergie', sector: 'Solaire', size: '11-50', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Énergie solaire', technologies: ['Solar Tech'], employees: 40 },
  { name: 'Energtec Guinée', domain: 'energtec.gn', industry: 'Énergie', sector: 'Services énergétiques', size: '11-50', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Services énergétiques', employees: 35 },
  
  // AGRICULTURE
  { name: 'Société Guinéenne de Palmier à Huile', domain: 'sgph.gn', industry: 'Agriculture', sector: 'Huile de palme', size: '201-500', revenue: '$10M-50M', location: 'Kankan', region: 'Kankan', country: 'GN', description: 'Production d\'huile de palme', employees: 400 },
  { name: 'Friguia', domain: 'friguia.gn', industry: 'Agriculture', sector: 'Fruits tropicaux', size: '201-500', revenue: '$10M-50M', location: 'Kankan', region: 'Kankan', country: 'GN', description: 'Exportation de fruits', employees: 350 },
  { name: 'Société de Culture de Banane', domain: 'scb.gn', industry: 'Agriculture', sector: 'Banane', size: '51-200', revenue: '$5M-10M', location: 'Nzérékoré', region: 'Nzérékoré', country: 'GN', description: 'Production de bananes', employees: 200 },
  { name: 'Compagnie Sucrière de Guinée', domain: 'csg.gn', industry: 'Agriculture', sector: 'Sucre', size: '51-200', revenue: '$10M-50M', location: 'Kankan', region: 'Kankan', country: 'GN', description: 'Production de sucre', employees: 180 },
  { name: 'Société Guinéenne de l\'Ananas', domain: 'sga.gn', industry: 'Agriculture', sector: 'Ananas', size: '51-200', revenue: '$5M-10M', location: 'Kindia', region: 'Kindia', country: 'GN', description: 'Production d\'ananas', employees: 150 },
  { name: 'Guinée Cacao', domain: 'guineecacao.gn', industry: 'Agriculture', sector: 'Cacao', size: '51-200', revenue: '$5M-10M', location: 'Nzérékoré', region: 'Nzérékoré', country: 'GN', description: 'Production de cacao', employees: 120 },
  { name: 'Café de Guinée', domain: 'cafeguinee.gn', industry: 'Agriculture', sector: 'Café', size: '11-50', revenue: '$1M-10M', location: 'Nzérékoré', region: 'Nzérékoré', country: 'GN', description: 'Production de café', employees: 80 },
  { name: 'Riz de Guinée', domain: 'rizguinee.gn', industry: 'Agriculture', sector: 'Riz', size: '51-200', revenue: '$5M-10M', location: 'Kankan', region: 'Kankan', country: 'GN', description: 'Production de riz', employees: 100 },
  
  // CONSTRUCTION & BTP
  { name: 'Sogea Satom Guinée', domain: 'sogea-satom.com', industry: 'BTP', sector: 'Construction', size: '201-500', revenue: '$50M-100M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Travaux publics', employees: 400 },
  { name: 'Bouygues Guinée', domain: 'bouygues-construction.com', industry: 'BTP', sector: 'Construction', size: '51-200', revenue: '$50M-100M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Génie civil', employees: 250 },
  { name: 'China International Water & Electric', domain: 'cwe.cn', industry: 'BTP', sector: 'Infrastructures', size: '201-500', revenue: '$100M+', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Barrages et infrastructures', employees: 500 },
  { name: 'SOGEF SA', domain: 'sogef.gn', industry: 'BTP', sector: 'Immobilier', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Construction immobilière', employees: 150 },
  { name: 'Construction Guinée', domain: 'constructionguinee.gn', industry: 'BTP', sector: 'Construction', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Bâtiments', employees: 120 },
  { name: 'SOTRAGUI', domain: 'sotragui.gn', industry: 'BTP', sector: 'Travaux publics', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Routes et infrastructures', employees: 180 },
  
  // COMMERCE & DISTRIBUTION
  { name: 'CFAO Guinée', domain: 'cfao.com', industry: 'Commerce', sector: 'Distribution', size: '201-500', revenue: '$50M-100M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Distribution automobile', employees: 200 },
  { name: 'Tractafric Guinée', domain: 'tractafric.com', industry: 'Commerce', sector: 'Équipements', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Équipements agricoles et miniers', employees: 80 },
  { name: 'Unilever Guinée', domain: 'unilever.com', industry: 'Commerce', sector: 'Biens de consommation', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Produits de consommation', employees: 100 },
  { name: 'Société Commerciale de Guinée', domain: 'scg.gn', industry: 'Commerce', sector: 'Grossiste', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Commerce de gros', employees: 70 },
  
  // TRANSPORT & LOGISTICS
  { name: 'Port Autonome de Conakry', domain: 'pac.gn', industry: 'Transport', sector: 'Portuaire', size: '500-1000', revenue: '$50M-100M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Gestion portuaire', employees: 600 },
  { name: 'Société de Gestion de l\'Aéroport', domain: 'sogac.gn', industry: 'Transport', sector: 'Aéroportuaire', size: '201-500', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Aéroport international', employees: 250 },
  { name: 'Guinée Railways', domain: 'guineerailways.com', industry: 'Transport', sector: 'Ferroviaire', size: '201-500', revenue: '$50M-100M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Transport ferroviaire', employees: 350 },
  { name: 'Maersk Guinée', domain: 'maersk.com', industry: 'Transport', sector: 'Maritime', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Transport maritime', employees: 80 },
  { name: 'Bolloré Transport & Logistics', domain: 'bollore.com', industry: 'Transport', sector: 'Logistique', size: '201-500', revenue: '$50M-100M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Logistique multimodale', employees: 300 },
  { name: 'SDV Guinée', domain: 'sdv.com', industry: 'Transport', sector: 'Logistique', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Transit et logistique', employees: 120 },
  { name: 'GETMA Guinée', domain: 'getma.com', industry: 'Transport', sector: 'Logistique', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Manutention portuaire', employees: 150 },
  
  // INSURANCE
  { name: 'AXA Guinée', domain: 'axa.gn', industry: 'Assurance', sector: 'Assurances', size: '51-200', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Assurances IARD et vie', employees: 60 },
  { name: 'SUNU Assurances Guinée', domain: 'sunu.com', industry: 'Assurance', sector: 'Assurances', size: '51-200', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Assurances panafricaines', employees: 50 },
  { name: 'NSIA Guinée', domain: 'nsia.com', industry: 'Assurance', sector: 'Assurances', size: '51-200', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Assurances ouest-africaines', employees: 45 },
  { name: 'SAHAM Guinée', domain: 'sahamassurance.com', industry: 'Assurance', sector: 'Assurances', size: '11-50', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Assurances', employees: 35 },
  
  // PETROLEUM
  { name: 'TotalEnergies Guinée', domain: 'totalenergies.gn', industry: 'Pétrole', sector: 'Distribution', size: '201-500', revenue: '$100M+', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Distribution de carburants', employees: 250 },
  { name: 'Shell Guinée', domain: 'shell.com', industry: 'Pétrole', sector: 'Distribution', size: '51-200', revenue: '$50M-100M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Produits pétroliers', employees: 150 },
  { name: 'Petro Guinée', domain: 'petroguinee.gn', industry: 'Pétrole', sector: 'Distribution', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Distribution pétrolière', employees: 100 },
  { name: 'EAG Guinée', domain: 'eag.gn', industry: 'Pétrole', sector: 'Distribution', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Énergie et carburants', employees: 80 },
  
  // MEDIA
  { name: 'RTG - Radio Télévision Guinéenne', domain: 'rtg.gn', industry: 'Médias', sector: 'Audiovisuel public', size: '201-500', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Chaîne de télévision nationale', employees: 400 },
  { name: 'Espace TV', domain: 'espacetv.gn', industry: 'Médias', sector: 'Télévision privée', size: '51-200', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Chaîne privée', employees: 80 },
  { name: 'Guinéenews', domain: 'guineenews.org', industry: 'Médias', sector: 'Presse en ligne', size: '11-50', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Site d\'information', employees: 30 },
  { name: 'Guinée Matin', domain: 'guineematin.com', industry: 'Médias', sector: 'Presse', size: '11-50', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Journal en ligne', employees: 25 },
  { name: 'Radio Nostalgie Guinée', domain: 'nostalgieguinee.com', industry: 'Médias', sector: 'Radio', size: '11-50', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Station de radio', employees: 35 },
  
  // HEALTHCARE
  { name: 'Clinique Pasteur', domain: 'cliniquepasteur.gn', industry: 'Santé', sector: 'Clinique privée', size: '51-200', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Clinique privée', employees: 100 },
  { name: 'Clinique Ambroise Paré', domain: 'cliniqueambroisepare.gn', industry: 'Santé', sector: 'Clinique privée', size: '51-200', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Établissement de soins', employees: 80 },
  { name: 'Laboratoire Pasteur de Guinée', domain: 'labopasteur.gn', industry: 'Santé', sector: 'Laboratoire', size: '51-200', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Analyses médicales', employees: 60 },
  { name: 'Pharmacie Centrale de Guinée', domain: 'pcg.gn', industry: 'Santé', sector: 'Pharmacie', size: '201-500', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Distribution pharmaceutique', employees: 150 },
  
  // EDUCATION
  { name: 'Université Gamal Abdel Nasser', domain: 'uganc.org', industry: 'Éducation', sector: 'Université publique', size: '1000+', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Université publique', employees: 800 },
  { name: 'Université Kofi Annan', domain: 'ukag.edu.gn', industry: 'Éducation', sector: 'Université privée', size: '201-500', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Université privée', employees: 150 },
  { name: 'Institut Supérieur des Sciences', domain: 'isse.gn', industry: 'Éducation', sector: 'École supérieure', size: '51-200', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Formation enseignants', employees: 60 },
  { name: 'Université de Kankan', domain: 'uk.gn', industry: 'Éducation', sector: 'Université publique', size: '500-1000', revenue: '$5M-10M', location: 'Kankan', region: 'Kankan', country: 'GN', description: 'Université publique', employees: 300 },
  { name: 'Université de Nzérékoré', domain: 'unz.gn', industry: 'Éducation', sector: 'Université publique', size: '201-500', revenue: '$5M-10M', location: 'Nzérékoré', region: 'Nzérékoré', country: 'GN', description: 'Université publique', employees: 200 },
  { name: 'Institut Polytechnique de Guinée', domain: 'ipg.gn', industry: 'Éducation', sector: 'École d\'ingénieurs', size: '201-500', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Formation technique', employees: 180 },
  
  // IT & SERVICES
  { name: 'Guinetech', domain: 'guinetech.gn', industry: 'IT', sector: 'Services informatiques', size: '11-50', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Solutions IT', employees: 25 },
  { name: 'AfriSAT Guinée', domain: 'afrisat.gn', industry: 'IT', sector: 'Internet', size: '11-50', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Fournisseur Internet', employees: 30 },
  { name: 'Xarala', domain: 'xarala.co', industry: 'IT', sector: 'Formation tech', size: '11-50', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Formation numérique', employees: 20 },
  { name: 'Studio 224', domain: 'studio224.gn', industry: 'IT', sector: 'Agence digitale', size: '11-50', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Agence web', employees: 15 },
  
  // HOSPITALITY
  { name: 'Hôtel Palm Camayenne', domain: 'palmcamayenne.com', industry: 'Hôtellerie', sector: 'Hôtel', size: '51-200', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Hôtel 5 étoiles', employees: 150 },
  { name: 'Hôtel Riviera Royal', domain: 'rivieraroyal.com', industry: 'Hôtellerie', sector: 'Hôtel', size: '51-200', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Hôtel 4 étoiles', employees: 100 },
  { name: 'Hôtel Noom', domain: 'noomhotel.com', industry: 'Hôtellerie', sector: 'Hôtel', size: '51-200', revenue: '$5M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Hôtel business', employees: 80 },
  { name: 'Le Petit Paris', domain: 'lepetitparis.gn', industry: 'Restauration', sector: 'Restaurant', size: '11-50', revenue: '$1M-10M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Restaurant', employees: 30 },
  
  // MANUFACTURING
  { name: 'Cimenterie de Guinée', domain: 'cimenterieguinee.gn', industry: 'Industrie', sector: 'Ciment', size: '201-500', revenue: '$50M-100M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Production de ciment', employees: 200 },
  { name: 'Brasserie de Guinée', domain: 'brasseriedeguinee.gn', industry: 'Agroalimentaire', sector: 'Boissons', size: '201-500', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Production de boissons', employees: 180 },
  { name: 'GUIAVIC', domain: 'guiavic.gn', industry: 'Industrie', sector: 'Agroalimentaire', size: '51-200', revenue: '$10M-50M', location: 'Conakry', region: 'Conakry', country: 'GN', description: 'Transformation agricole', employees: 120 }
]

// Guinea Business Contacts
export const GUINEA_CONTACTS = [
  // Government Officials
  { name: 'Dr. Mamadi Doumbouya', title: 'Directeur Général APIP', email: 'm.doumbouya@apip.gov.gn', phone: '+224 664 50 10 00', company: 'APIP', region: 'Conakry', type: 'government' },
  { name: 'Alpha Condé', title: 'Directeur Général', email: 'a.conde@finances.gov.gn', phone: '+224 664 20 10 00', company: 'Ministère des Finances', region: 'Conakry', type: 'government' },
  { name: 'Kadiatou Sylla', title: 'Directrice des Investissements', email: 'k.sylla@soguipami.gov.gn', phone: '+224 664 52 10 00', company: 'SOGUIPAMI', region: 'Conakry', type: 'government' },
  { name: 'Ibrahima Touré', title: 'Directeur Technique', email: 'i.toure@mines.gov.gn', phone: '+224 664 29 10 00', company: 'Ministère des Mines', region: 'Conakry', type: 'government' },
  { name: 'Fatou Bintou Bah', title: 'Directrice Commerce Extérieur', email: 'f.bah@commerce.gov.gn', phone: '+224 664 33 10 00', company: 'Ministère du Commerce', region: 'Conakry', type: 'government' },
  { name: 'Mamadou Saliou Diallo', title: 'Directeur Général', email: 'ms.diallo@pac.gn', phone: '+224 664 55 10 00', company: 'Port Autonome de Conakry', region: 'Conakry', type: 'government' },
  
  // Mining Sector
  { name: 'Thierno Oury Diallo', title: 'CEO', email: 'to.diallo@cbg.gn', phone: '+224 664 51 10 00', company: 'Compagnie des Bauxites de Guinée', region: 'Boké', type: 'private' },
  { name: 'Mamadou Sow', title: 'Directeur Commercial', email: 'm.sow@guineaalumina.com', phone: '+224 664 51 20 00', company: 'Guinea Alumina Corporation', region: 'Conakry', type: 'private' },
  { name: 'Sekou Camara', title: 'Directeur des Opérations', email: 's.camara@smd-guinee.com', phone: '+224 664 51 30 00', company: 'SMD', region: 'Faranah', type: 'private' },
  { name: 'Amadou Bah', title: 'Responsable RH', email: 'a.bah@nordgold.com', phone: '+224 664 51 40 00', company: 'Nordgold Guinea', region: 'Kankan', type: 'private' },
  { name: 'Fatoumata Binta Diallo', title: 'Directrice Financière', email: 'fb.diallo@riotinto.com', phone: '+224 664 51 50 00', company: 'Rio Tinto Guinée', region: 'Conakry', type: 'private' },
  
  // Banking Sector
  { name: 'Cheick Talibé Sylla', title: 'Directeur Général', email: 'ct.sylla@guib.net', phone: '+224 664 53 10 00', company: 'Guinéenne de Banque', region: 'Conakry', type: 'private' },
  { name: 'Fatou Bintou Diallo', title: 'Directrice des Finances', email: 'f.diallo@bicigui.com', phone: '+224 664 53 20 00', company: 'BICIGUI', region: 'Conakry', type: 'private' },
  { name: 'Marie Kaba', title: 'Responsable Commercial', email: 'm.kaba@ecobank.com', phone: '+224 664 53 30 00', company: 'Ecobank Guinée', region: 'Conakry', type: 'private' },
  { name: 'Ibrahima Sory Diallo', title: 'Directeur Commercial', email: 'is.diallo@bpmg.gn', phone: '+224 664 53 40 00', company: 'BPMG', region: 'Conakry', type: 'private' },
  
  // Telecom Sector
  { name: 'Aissatou Bah', title: 'Directrice Marketing', email: 'a.bah@orange-guinee.com', phone: '+224 664 54 10 00', company: 'Orange Guinée', region: 'Conakry', type: 'private' },
  { name: 'Mamadou Alpha Diallo', title: 'Directeur Commercial', email: 'ma.diallo@mtn.gn', phone: '+224 664 54 20 00', company: 'MTN Guinée', region: 'Conakry', type: 'private' },
  { name: 'Fatoumata Binta Sylla', title: 'Responsable Partenariats', email: 'fb.sylla@cellcom.gn', phone: '+224 664 54 30 00', company: 'Cellcom Guinée', region: 'Conakry', type: 'private' },
  
  // Energy Sector
  { name: 'Ibrahima Touré', title: 'Directeur des Opérations', email: 'i.toure@edg-guinee.com', phone: '+224 664 53 50 00', company: 'EDG', region: 'Conakry', type: 'private' },
  { name: 'Sékou Konaté', title: 'Ingénieur en Chef', email: 's.konate@sak.gn', phone: '+224 664 53 60 00', company: 'SAK', region: 'Conakry', type: 'private' },
  
  // Agriculture Sector
  { name: 'Mamadou Saliou Bah', title: 'Directeur Général', email: 'ms.bah@sgph.gn', phone: '+224 664 55 10 00', company: 'SGPH', region: 'Kankan', type: 'private' },
  { name: 'Fatoumata Diallo', title: 'Responsable Export', email: 'f.diallo@friguia.gn', phone: '+224 664 55 20 00', company: 'Friguia', region: 'Kankan', type: 'private' },
  
  // Construction Sector
  { name: 'Thierno Monenembo', title: 'Directeur de Projet', email: 't.monenembo@sogea-satom.com', phone: '+224 664 56 10 00', company: 'Sogea Satom', region: 'Conakry', type: 'private' },
  { name: 'Alpha Oumar Diallo', title: 'Responsable Commercial', email: 'ao.diallo@sogef.gn', phone: '+224 664 56 20 00', company: 'SOGEF', region: 'Conakry', type: 'private' },
  
  // Transport & Logistics
  { name: 'Ousmane Sylla', title: 'Directeur Logistique', email: 'o.sylla@bollore.com', phone: '+224 664 57 10 00', company: 'Bolloré Guinée', region: 'Conakry', type: 'private' },
  { name: 'Amadou Oury Diallo', title: 'Responsable Commercial', email: 'ao.diallo@sdv.com', phone: '+224 664 57 20 00', company: 'SDV Guinée', region: 'Conakry', type: 'private' },
  
  // Healthcare Sector
  { name: 'Dr. Kékoura Lélouma', title: 'Directeur Médical', email: 'k.lelouma@cliniquepasteur.gn', phone: '+224 664 58 10 00', company: 'Clinique Pasteur', region: 'Conakry', type: 'private' },
  { name: 'Dr. Fatoumata Binta Bah', title: 'Directrice', email: 'fb.bah@labopasteur.gn', phone: '+224 664 58 20 00', company: 'Laboratoire Pasteur', region: 'Conakry', type: 'private' },
  
  // IT Sector
  { name: 'Ibrahima Camara', title: 'CEO', email: 'i.camara@guinetech.gn', phone: '+224 664 59 10 00', company: 'Guinetech', region: 'Conakry', type: 'private' },
  { name: 'Mamadou Lamine Diallo', title: 'Fondateur', email: 'ml.diallo@xarala.co', phone: '+224 664 59 20 00', company: 'Xarala', region: 'Conakry', type: 'private' }
]

// International Organizations in Guinea
export const GUINEA_ORGANIZATIONS = [
  { name: 'Banque Mondiale - Guinée', type: 'Institution financière', address: 'Conakry', phone: '+224 664 70 00 00', email: 'guinea@worldbank.org', website: 'https://worldbank.org/gn', focus: 'Développement, Infrastructure' },
  { name: 'FMI - Guinée', type: 'Institution financière', address: 'Conakry', phone: '+224 664 71 00 00', email: 'guinea@imf.org', website: 'https://imf.org', focus: 'Stabilité macroéconomique' },
  { name: 'BAD - Guinée', type: 'Banque de développement', address: 'Conakry', phone: '+224 664 72 00 00', email: 'guinea@afdb.org', website: 'https://afdb.org', focus: 'Infrastructures, Énergie' },
  { name: 'PNUD Guinée', type: 'ONU', address: 'Conakry', phone: '+224 664 73 00 00', email: 'registry.gn@undp.org', website: 'https://undp.org/gn', focus: 'Développement humain' },
  { name: 'UNICEF Guinée', type: 'ONU', address: 'Conakry', phone: '+224 664 74 00 00', email: 'conakry@unicef.org', website: 'https://unicef.org/gn', focus: 'Enfance, Éducation' },
  { name: 'OMS Guinée', type: 'ONU', address: 'Conakry', phone: '+224 664 75 00 00', email: 'afroguinea@who.int', website: 'https://who.int/gn', focus: 'Santé publique' },
  { name: 'FAO Guinée', type: 'ONU', address: 'Conakry', phone: '+224 664 76 00 00', email: 'fao-guinea@fao.org', website: 'https://fao.org/gn', focus: 'Agriculture, Sécurité alimentaire' },
  { name: 'AFD - Guinée', type: 'Coopération bilatérale', address: 'Conakry', phone: '+224 664 77 00 00', email: 'afd-conakry@afd.fr', website: 'https://afd.fr', focus: 'Développement, Infrastructure' },
  { name: 'USAID Guinée', type: 'Coopération bilatérale', address: 'Conakry', phone: '+224 664 78 00 00', email: 'infoguinea@usaid.gov', website: 'https://usaid.gov/guinea', focus: 'Santé, Éducation, Démocratie' },
  { name: 'GIZ Guinée', type: 'Coopération bilatérale', address: 'Conakry', phone: '+224 664 79 00 00', email: 'guinee@giz.de', website: 'https://giz.de', focus: 'Énergie, Gouvernance' },
  { name: 'UE - Délégation Guinée', type: 'Coopération', address: 'Conakry', phone: '+224 664 80 00 00', email: 'delegation-guinea@eeas.europa.eu', website: 'https://eeas.europa.eu', focus: 'Développement, Éducation' },
  { name: 'BEI - Guinée', type: 'Banque de développement', address: 'Dakar', phone: '+221 33 849 00 00', email: 'info@eib.org', website: 'https://eib.org', focus: 'Infrastructures, Énergie' },
  { name: 'BOAD - Guinée', type: 'Banque de développement', address: 'Lomé', phone: '+228 22 21 50 00', email: 'info@boad.org', website: 'https://boad.org', focus: 'Développement ouest-africain' },
  { name: 'BIDC - Guinée', type: 'Banque de développement', address: 'Lomé', phone: '+228 22 21 60 00', email: 'info@bidc-ebc.org', website: 'https://bidc-ebc.org', focus: 'Développement CEDEAO' }
]

// Investment Opportunities in Guinea
export const GUINEA_INVESTMENT_OPPORTUNITIES = [
  {
    sector: 'Mines',
    title: 'Valorisation de la Bauxite',
    description: 'Transformation de la bauxite en alumine et aluminium',
    investment: '$500M - $2B',
    potential: 'Très élevé',
    regions: ['Boké', 'Kindia'],
    requirements: ['Accord gouvernemental', 'Infrastructure portuaire', 'Énergie']
  },
  {
    sector: 'Mines',
    title: 'Exploration Aurifère',
    description: 'Exploration et exploitation de gisements aurifères',
    investment: '$50M - $200M',
    potential: 'Élevé',
    regions: ['Kankan', 'Faranah', 'Nzérékoré'],
    requirements: ['Permis minier', 'Études géologiques']
  },
  {
    sector: 'Énergie',
    title: 'Hydroélectrique',
    description: 'Construction de barrages hydroélectriques',
    investment: '$200M - $1B',
    potential: 'Très élevé',
    regions: ['Faranah', 'Kindia', 'Nzérékoré'],
    requirements: ['Accord État', 'Études environnementales']
  },
  {
    sector: 'Énergie',
    title: 'Solaire',
    description: 'Centrales solaires pour électrification',
    investment: '$20M - $100M',
    potential: 'Élevé',
    regions: ['Conakry', 'Kankan', 'Labé'],
    requirements: ['Accord SEG', 'Terrain']
  },
  {
    sector: 'Agriculture',
    title: 'Agro-industrie',
    description: 'Transformation de produits agricoles locaux',
    investment: '$10M - $50M',
    potential: 'Élevé',
    regions: ['Kankan', 'Nzérékoré', 'Kindia'],
    requirements: ['Terrain', 'Approvisionnement agricole']
  },
  {
    sector: 'Infrastructure',
    title: 'Logement Social',
    description: 'Construction de logements abordables',
    investment: '$50M - $200M',
    potential: 'Élevé',
    regions: ['Conakry'],
    requirements: ['Terrain', 'Accord municipal']
  },
  {
    sector: 'Transport',
    title: 'Transport Ferroviaire',
    description: 'Lignes ferroviaires pour fret et passagers',
    investment: '$500M - $2B',
    potential: 'Très élevé',
    regions: ['Conakry', 'Boké', 'Kankan'],
    requirements: ['Accord État', 'Études faisabilité']
  },
  {
    sector: 'Télécommunications',
    title: 'Fibre Optique',
    description: 'Extension du réseau fibre optique national',
    investment: '$50M - $100M',
    potential: 'Élevé',
    regions: ['National'],
    requirements: ['Licence ARCEP', 'Accord gouvernemental']
  },
  {
    sector: 'Tourisme',
    title: 'Écotourisme',
    description: 'Développement de sites touristiques naturels',
    investment: '$5M - $20M',
    potential: 'Moyen',
    regions: ['Labé', 'Nzérékoré', 'Kindia'],
    requirements: ['Accord ONTH', 'Études environnementales']
  },
  {
    sector: 'Industrie',
    title: 'Cimenterie',
    description: 'Production de ciment local',
    investment: '$100M - $300M',
    potential: 'Élevé',
    regions: ['Conakry', 'Kindia'],
    requirements: ['Calcaire', 'Énergie', 'Permis']
  }
]
