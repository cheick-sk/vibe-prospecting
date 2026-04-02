// African Countries
export const AFRICAN_COUNTRIES = [
  { code: 'GN', name: 'Guinée', nameEn: 'Guinea', capital: 'Conakry', flag: '🇬🇳' },
  { code: 'SN', name: 'Sénégal', nameEn: 'Senegal', capital: 'Dakar', flag: '🇸🇳' },
  { code: 'CI', name: 'Côte d\'Ivoire', nameEn: 'Ivory Coast', capital: 'Abidjan', flag: '🇨🇮' },
  { code: 'ML', name: 'Mali', nameEn: 'Mali', capital: 'Bamako', flag: '🇲🇱' },
  { code: 'BF', name: 'Burkina Faso', nameEn: 'Burkina Faso', capital: 'Ouagadougou', flag: '🇧🇫' },
  { code: 'NE', name: 'Niger', nameEn: 'Niger', capital: 'Niamey', flag: '🇳🇪' },
  { code: 'BJ', name: 'Bénin', nameEn: 'Benin', capital: 'Cotonou', flag: '🇧🇯' },
  { code: 'TG', name: 'Togo', nameEn: 'Togo', capital: 'Lomé', flag: '🇹🇬' },
  { code: 'GH', name: 'Ghana', nameEn: 'Ghana', capital: 'Accra', flag: '🇬🇭' },
  { code: 'NG', name: 'Nigeria', nameEn: 'Nigeria', capital: 'Abuja', flag: '🇳🇬' },
  { code: 'CM', name: 'Cameroun', nameEn: 'Cameroon', capital: 'Yaoundé', flag: '🇨🇲' },
  { code: 'GA', name: 'Gabon', nameEn: 'Gabon', capital: 'Libreville', flag: '🇬🇦' },
  { code: 'CG', name: 'Congo-Brazzaville', nameEn: 'Congo', capital: 'Brazzaville', flag: '🇨🇬' },
  { code: 'CD', name: 'RD Congo', nameEn: 'DR Congo', capital: 'Kinshasa', flag: '🇨🇩' },
  { code: 'AO', name: 'Angola', nameEn: 'Angola', capital: 'Luanda', flag: '🇦🇴' },
  { code: 'ET', name: 'Éthiopie', nameEn: 'Ethiopia', capital: 'Addis Ababa', flag: '🇪🇹' },
  { code: 'KE', name: 'Kenya', nameEn: 'Kenya', capital: 'Nairobi', flag: '🇰🇪' },
  { code: 'UG', name: 'Ouganda', nameEn: 'Uganda', capital: 'Kampala', flag: '🇺🇬' },
  { code: 'TZ', name: 'Tanzanie', nameEn: 'Tanzania', capital: 'Dodoma', flag: '🇹🇿' },
  { code: 'RW', name: 'Rwanda', nameEn: 'Rwanda', capital: 'Kigali', flag: '🇷🇼' },
  { code: 'ZA', name: 'Afrique du Sud', nameEn: 'South Africa', capital: 'Pretoria', flag: '🇿🇦' },
  { code: 'EG', name: 'Égypte', nameEn: 'Egypt', capital: 'Cairo', flag: '🇪🇬' },
  { code: 'MA', name: 'Maroc', nameEn: 'Morocco', capital: 'Rabat', flag: '🇲🇦' },
  { code: 'TN', name: 'Tunisie', nameEn: 'Tunisia', capital: 'Tunis', flag: '🇹🇳' },
  { code: 'DZ', name: 'Algérie', nameEn: 'Algeria', capital: 'Algiers', flag: '🇩🇿' },
  { code: 'MZ', name: 'Mozambique', nameEn: 'Mozambique', capital: 'Maputo', flag: '🇲🇿' },
  { code: 'ZW', name: 'Zimbabwe', nameEn: 'Zimbabwe', capital: 'Harare', flag: '🇿🇼' },
  { code: 'ZM', name: 'Zambie', nameEn: 'Zambia', capital: 'Lusaka', flag: '🇿🇲' },
  { code: 'BW', name: 'Botswana', nameEn: 'Botswana', capital: 'Gaborone', flag: '🇧🇼' },
  { code: 'NA', name: 'Namibie', nameEn: 'Namibia', capital: 'Windhoek', flag: '🇳🇦' }
]

// African Industries and Sectors
export const AFRICAN_INDUSTRIES = {
  // Secteurs Primaires
  agriculture: {
    name: 'Agriculture & Élevage',
    nameEn: 'Agriculture & Livestock',
    subsectors: [
      'Culture du riz', 'Culture du café', 'Culture du cacao', 'Culture du coton',
      'Culture de la banane', 'Culture du manioc', 'Élevage bovin', 'Élevage ovin',
      'Pisciculture', 'Aviculture', 'Production laitière', 'Agro-industrie'
    ]
  },
  mines: {
    name: 'Mines & Carrières',
    nameEn: 'Mining & Quarries',
    subsectors: [
      'Extraction de bauxite', 'Extraction d\'or', 'Extraction de fer',
      'Extraction de diamants', 'Extraction de cuivre', 'Extraction de cobalt',
      'Extraction de manganèse', 'Carrières de granit', 'Exploration minière',
      'Services miniers'
    ]
  },
  petrole: {
    name: 'Pétrole & Gaz',
    nameEn: 'Oil & Gas',
    subsectors: [
      'Exploration pétrolière', 'Extraction de pétrole', 'Raffinage',
      'Distribution de carburants', 'Gaz naturel', 'Pétrochimie',
      'Stations-service', 'Logistique pétrolière'
    ]
  },
  peche: {
    name: 'Pêche & Aquaculture',
    nameEn: 'Fishing & Aquaculture',
    subsectors: [
      'Pêche maritime', 'Pêche continentale', 'Aquaculture', 'Transformation du poisson',
      'Conserves de poisson', 'Commerce de poissons'
    ]
  },
  foret: {
    name: 'Forêt & Bois',
    nameEn: 'Forestry & Wood',
    subsectors: [
      'Exploitation forestière', 'Scieries', 'Menuiserie', 'Ébénisterie',
      'Production de contreplaqué', 'Exportation de grumes'
    ]
  },

  // Secteurs Secondaires
  industrie: {
    name: 'Industrie Manufacturière',
    nameEn: 'Manufacturing',
    subsectors: [
      'Agroalimentaire', 'Textile & Habillement', 'Cuir & Chaussures',
      'Boissons', 'Tabac', 'Chimie', 'Pharmacie', 'Plastique',
      'Ciment & Matériaux de construction', 'Métallurgie', 'Mécanique',
      'Électrique & Électronique', 'Impression & Emballage'
    ]
  },
  btp: {
    name: 'BTP & Construction',
    nameEn: 'Construction',
    subsectors: [
      'Bâtiments résidentiels', 'Bâtiments commerciaux', 'Infrastructures routières',
      'Ponts et ouvrages d\'art', 'Barrages', 'Ports et aéroports',
      'Génie civil', 'Architecture', 'Urbanisme'
    ]
  },
  energie: {
    name: 'Énergie & Électrification',
    nameEn: 'Energy & Power',
    subsectors: [
      'Production hydroélectrique', 'Énergie solaire', 'Énergie éolienne',
      'Biomasse', 'Distribution électrique', 'Électrification rurale',
      'Énergies renouvelables', 'Maintenance électrique'
    ]
  },

  // Secteurs Tertiaires
  banque: {
    name: 'Banque & Finance',
    nameEn: 'Banking & Finance',
    subsectors: [
      'Banques commerciales', 'Banques d\'investissement', 'Microfinance',
      'Assurances', 'Bourse', 'Capital-investissement', 'Fintech',
      'Mobile Banking', 'Transferts d\'argent'
    ]
  },
  telecom: {
    name: 'Télécommunications',
    nameEn: 'Telecommunications',
    subsectors: [
      'Opérateurs mobiles', 'Internet et données', 'Infrastructure télécom',
      'Satellite', 'Fibre optique', 'Centres d\'appels', 'Téléphonie fixe'
    ]
  },
  technologie: {
    name: 'Technologie & Innovation',
    nameEn: 'Technology & Innovation',
    subsectors: [
      'Développement logiciel', 'E-commerce', 'Startup tech', 'Cybersécurité',
      'Intelligence artificielle', 'Big Data', 'Cloud computing',
      'Incubateurs et accélérateurs', 'EdTech', 'AgriTech', 'HealthTech'
    ]
  },
  commerce: {
    name: 'Commerce & Distribution',
    nameEn: 'Trade & Distribution',
    subsectors: [
      'Commerce de gros', 'Commerce de détail', 'Supermarchés et centres commerciaux',
      'Import-Export', 'Distribution automatique', 'E-commerce',
      'Commerce transfrontalier'
    ]
  },
  transport: {
    name: 'Transport & Logistique',
    nameEn: 'Transport & Logistics',
    subsectors: [
      'Transport routier', 'Transport ferroviaire', 'Transport maritime',
      'Transport aérien', 'Logistique et entreposage', 'Messagerie et express',
      'Ports et terminaux', 'Aéroports', 'Services douaniers'
    ]
  },
  tourisme: {
    name: 'Tourisme & Hôtellerie',
    nameEn: 'Tourism & Hospitality',
    subsectors: [
      'Hôtels et résidences', 'Restauration', 'Agences de voyage',
      'Tourisme d\'affaires', 'Écotourisme', 'Tourisme culturel',
      'Parcs et réserves', 'Événementiel'
    ]
  },
  sante: {
    name: 'Santé & Pharmacie',
    nameEn: 'Healthcare & Pharma',
    subsectors: [
      'Hôpitaux privés', 'Cliniques', 'Laboratoires d\'analyses',
      'Industrie pharmaceutique', 'Distribution pharmaceutique',
      'Équipements médicaux', 'Télémédecine', 'Formation médicale'
    ]
  },
  education: {
    name: 'Éducation & Formation',
    nameEn: 'Education & Training',
    subsectors: [
      'Enseignement primaire', 'Enseignement secondaire', 'Universités',
      'Écoles supérieures', 'Formation professionnelle', 'Langues',
      'E-learning', 'Centres de certification'
    ]
  },
  media: {
    name: 'Médias & Communication',
    nameEn: 'Media & Communication',
    subsectors: [
      'Presse écrite', 'Radio', 'Télévision', 'Digital media',
      'Agences de publicité', 'Relations publiques', 'Production audiovisuelle',
      'Événementiel', 'Marketing digital'
    ]
  },

  // Services Publics et Gouvernement
  gouvernement: {
    name: 'Gouvernement & Administration',
    nameEn: 'Government & Administration',
    subsectors: [
      'Présidence', 'Premier Ministère', 'Assemblée Nationale',
      'Sénat', 'Cour Suprême', 'Collectivités territoriales',
      'Services administratifs'
    ]
  },
  ministries: {
    name: 'Ministères',
    nameEn: 'Ministries',
    subsectors: [
      'Ministère de l\'Économie et des Finances',
      'Ministère de la Défense Nationale',
      'Ministère des Affaires Étrangères',
      'Ministère de l\'Intérieur et de la Sécurité',
      'Ministère de la Justice',
      'Ministère de l\'Éducation Nationale',
      'Ministère de l\'Enseignement Supérieur',
      'Ministère de la Santé et de l\'Hygiène Publique',
      'Ministère de l\'Agriculture',
      'Ministère des Mines et de la Géologie',
      'Ministère de l\'Énergie et de l\'Hydraulique',
      'Ministère des Travaux Publics',
      'Ministère des Transports',
      'Ministère du Commerce',
      'Ministère de l\'Industrie',
      'Ministère du Tourisme et de l\'Artisanat',
      'Ministère de la Communication',
      'Ministère de la Fonction Publique',
      'Ministère de l\'Emploi et du Travail',
      'Ministère des Affaires Sociales',
      'Ministère de l\'Environnement',
      'Ministère de la Jeunesse et des Sports',
      'Ministère de la Culture',
      'Ministère du Plan et de la Coopération',
      'Ministère de la Promotion Féminine'
    ]
  },
  para_public: {
    name: 'Entreprises Para-publiques',
    nameEn: 'State-Owned Enterprises',
    subsectors: [
      'Sociétés d\'État', 'Entreprises publiques', 'Agences gouvernementales',
      'Autorités régulatrices', 'Offices nationaux', 'Centres nationaux'
    ]
  },

  // ONG et International
  ong: {
    name: 'ONG & Organisations Internationales',
    nameEn: 'NGOs & International Organizations',
    subsectors: [
      'ONG locales', 'ONG internationales', 'Organisations humanitaires',
      'Fondations', 'Associations à but non lucratif', 'Coopération internationale',
      'Programmes des Nations Unies', 'Banques de développement',
      'Agences de développement'
    ]
  }
}

// Government structures by country
export const GOVERNMENT_STRUCTURES: Record<string, {
  country: string
  capital: string
  government: string[]
  ministries: string[]
  agencies: string[]
}> = {
  GN: {
    country: 'Guinée',
    capital: 'Conakry',
    government: [
      'Présidence de la République',
      'Primature',
      'Assemblée Nationale',
      'Cour Suprême',
      'Cour des Comptes',
      'Autorité de Régulation des Communications Électroniques et Postales (ARCEP)',
      'Autorité de Régulation des Marchés Publics (ARMP)'
    ],
    ministries: [
      'Ministère de l\'Économie et des Finances',
      'Ministère de la Défense Nationale',
      'Ministère des Affaires Étrangères et des Guinéens de l\'Extérieur',
      'Ministère de l\'Intérieur et de la Décentralisation',
      'Ministère de la Justice, Gardien des Sceaux',
      'Ministère de l\'Éducation Nationale et de l\'Alphabétisation',
      'Ministère de l\'Enseignement Supérieur, de la Recherche Scientifique et de l\'Innovation',
      'Ministère de la Santé et de l\'Hygiène Publique',
      'Ministère de l\'Agriculture et de l\'Élevage',
      'Ministère des Mines et de la Géologie',
      'Ministère de l\'Énergie, de l\'Hydraulique et des Hydrocarbures',
      'Ministère des Travaux Publics, du Logement et de l\'Urbanisme',
      'Ministère des Transports',
      'Ministère du Commerce, de l\'Industrie et des PME',
      'Ministère du Tourisme, de l\'Hôtellerie et de l\'Artisanat',
      'Ministère de la Communication et des Médias',
      'Ministère de la Fonction Publique, du Travail et de l\'Emploi',
      'Ministère de l\'Action Sociale, de la Promotion Féminine et de l\'Enfance',
      'Ministère de l\'Environnement, des Eaux et Forêts',
      'Ministère de la Jeunesse et des Sports',
      'Ministère de la Culture, des Arts et du Patrimoine Historique',
      'Ministère du Plan et de la Coopération Internationale',
      'Ministère de l\'Enseignement Technique, de la Formation Professionnelle et de l\'Emploi',
      'Ministère de la Pêche et de l\'Économie Maritime',
      'Ministère de la Ville et de l\'Aménagement du Territoire'
    ],
    agencies: [
      'Office guinéen de promotion du tourisme (OGPT)',
      'Agence Guinéenne de Promotion des Investissements (APIP)',
      'Société des Bauxites de Guinée (SBG)',
      'Société Guinéenne du Patrimoine Minier (SOGUIPAMI)',
      'Électricité de Guinée (EDG)',
      'Société des Eaux de Guinée (SEG)',
      'Office National des Postes et Télécommunications (ONPT)',
      'Office National du Tourisme et de l\'Hôtellerie (ONTH)',
      'Agence Nationale de l\'Aviation Civile (ANAC)',
      'Port Autonome de Conakry (PAC)'
    ]
  },
  SN: {
    country: 'Sénégal',
    capital: 'Dakar',
    government: [
      'Présidence de la République',
      'Primature',
      'Assemblée Nationale',
      'Sénat',
      'Cour Suprême',
      'Cour des Comptes'
    ],
    ministries: [
      'Ministère de l\'Économie, des Finances et du Plan',
      'Ministère des Forces Armées',
      'Ministère des Affaires Étrangères et des Sénégalais de l\'Extérieur',
      'Ministère de l\'Intérieur',
      'Ministère de la Justice',
      'Ministère de l\'Éducation Nationale',
      'Ministère de l\'Enseignement Supérieur, de la Recherche et de l\'Innovation',
      'Ministère de la Santé et de l\'Action Sociale',
      'Ministère de l\'Agriculture et de l\'Équipement Rural',
      'Ministère des Mines et de la Géologie',
      'Ministère du Pétrole et des Énergies',
      'Ministère des Infrastructures, des Transports terrestres et du Désenclavement',
      'Ministère du Commerce et des Petites et Moyennes Entreprises',
      'Ministère du Tourisme et des Transports aériens',
      'Ministère de la Communication, des Postes et de l\'Économie numérique'
    ],
    agencies: [
      'Agence Nationale de Promotion des Investissements (APIX)',
      'Office National des Postes du Sénégal (ONPS)',
      'Sénégal Airlines',
      'Port Autonome de Dakar',
      'Société Nationale d\'Électricité (SENELEC)',
      'Société Nationale des Eaux du Sénégal (SNES)'
    ]
  },
  CI: {
    country: 'Côte d\'Ivoire',
    capital: 'Abidjan',
    government: [
      'Présidence de la République',
      'Primature',
      'Assemblée Nationale',
      'Sénat',
      'Cour Suprême'
    ],
    ministries: [
      'Ministère de l\'Économie et des Finances',
      'Ministère de la Défense',
      'Ministère des Affaires Étrangères',
      'Ministère de l\'Intérieur et de la Sécurité',
      'Ministère de la Justice',
      'Ministère de l\'Éducation Nationale',
      'Ministère de l\'Enseignement Supérieur et de la Recherche Scientifique',
      'Ministère de la Santé et de l\'Hygiène Publique',
      'Ministère de l\'Agriculture et du Développement Rural'
    ],
    agencies: [
      'Centre de Promotion des Investissements en Côte d\'Ivoire (CEPICI)',
      'Compagnie Ivoirienne d\'Électricité (CIE)',
      'Société de Distribution d\'Eau de Côte d\'Ivoire (SODECI)',
      'Port Autonome d\'Abidjan',
      'Aéroport Félix Houphouët-Boigny'
    ]
  },
  NG: {
    country: 'Nigeria',
    capital: 'Abuja',
    government: [
      'Presidency',
      'National Assembly',
      'Supreme Court',
      'Federal Executive Council'
    ],
    ministries: [
      'Federal Ministry of Finance',
      'Federal Ministry of Defence',
      'Federal Ministry of Foreign Affairs',
      'Federal Ministry of Interior',
      'Federal Ministry of Justice',
      'Federal Ministry of Education',
      'Federal Ministry of Health',
      'Federal Ministry of Agriculture',
      'Federal Ministry of Mines and Steel Development',
      'Federal Ministry of Petroleum Resources',
      'Federal Ministry of Power',
      'Federal Ministry of Works and Housing',
      'Federal Ministry of Transportation',
      'Federal Ministry of Industry, Trade and Investment',
      'Federal Ministry of Information and Culture'
    ],
    agencies: [
      'Nigerian Investment Promotion Commission (NIPC)',
      'Nigerian National Petroleum Corporation (NNPC)',
      'Central Bank of Nigeria (CBN)',
      'Nigerian Ports Authority (NPA)',
      'Federal Inland Revenue Service (FIRS)'
    ]
  },
  GH: {
    country: 'Ghana',
    capital: 'Accra',
    government: [
      'Office of the President',
      'Parliament of Ghana',
      'Supreme Court',
      'Cabinet'
    ],
    ministries: [
      'Ministry of Finance',
      'Ministry of Defence',
      'Ministry of Foreign Affairs and Regional Integration',
      'Ministry of the Interior',
      'Ministry of Justice and Attorney General',
      'Ministry of Education',
      'Ministry of Health',
      'Ministry of Food and Agriculture',
      'Ministry of Lands and Natural Resources',
      'Ministry of Energy',
      'Ministry of Roads and Highways',
      'Ministry of Transport',
      'Ministry of Trade and Industry',
      'Ministry of Tourism, Arts and Culture'
    ],
    agencies: [
      'Ghana Investment Promotion Centre (GIPC)',
      'Electricity Company of Ghana (ECG)',
      'Ghana Ports and Harbours Authority',
      'Bank of Ghana'
    ]
  }
}

// Sample African companies
export const AFRICAN_COMPANIES = [
  // Guinea
  {
    name: 'Guinea Alumina Corporation',
    domain: 'guineaalumina.com',
    industry: 'Mines',
    sector: 'Extraction de bauxite',
    size: '201-500',
    revenue: '$100M-$500M',
    location: 'Conakry, Guinée',
    country: 'GN',
    website: 'https://guineaalumina.com',
    description: 'Leader dans l\'extraction et l\'exportation de bauxite en Guinée.',
    technologies: ['SAP', 'AutoCAD', 'GIS', 'Microsoft Dynamics'],
    type: 'company'
  },
  {
    name: 'Compagnie des Bauxites de Guinée',
    domain: 'cbg.gn',
    industry: 'Mines',
    sector: 'Extraction de bauxite',
    size: '1000+',
    revenue: '$500M+',
    location: 'Kamsar, Guinée',
    country: 'GN',
    website: 'https://cbg.gn',
    description: 'Plus grand producteur de bauxite de Guinée.',
    technologies: ['SAP', 'SCADA', 'IoT', 'Machine Learning'],
    type: 'company'
  },
  {
    name: 'Guinéenne de Banque',
    domain: 'guib.net',
    industry: 'Banque & Finance',
    sector: 'Banques commerciales',
    size: '201-500',
    revenue: '$10M-$50M',
    location: 'Conakry, Guinée',
    country: 'GN',
    website: 'https://guib.net',
    description: 'Banque commerciale leader en Guinée offrant des services bancaires de qualité.',
    technologies: ['Temenos', 'Oracle', 'SWIFT', 'Mobile Banking'],
    type: 'company'
  },
  {
    name: 'Orange Guinée',
    domain: 'orange-guinee.com',
    industry: 'Télécommunications',
    sector: 'Opérateurs mobiles',
    size: '201-500',
    revenue: '$50M-$100M',
    location: 'Conakry, Guinée',
    country: 'GN',
    website: 'https://orange-guinee.com',
    description: 'Opérateur de téléphonie mobile et internet en Guinée.',
    technologies: ['4G LTE', 'Fiber', 'BSS', 'OSS'],
    type: 'company'
  },
  {
    name: 'Électricité de Guinée',
    domain: 'edg-guinee.com',
    industry: 'Énergie',
    sector: 'Distribution électrique',
    size: '500-1000',
    revenue: '$50M-$100M',
    location: 'Conakry, Guinée',
    country: 'GN',
    website: 'https://edg-guinee.com',
    description: 'Société de distribution d\'électricité en Guinée.',
    technologies: ['SCADA', 'Smart Grid', 'ERP', 'GIS'],
    type: 'company'
  },
  // Senegal
  {
    name: 'Société des Mines de Falémé',
    domain: 'smds.sn',
    industry: 'Mines',
    sector: 'Extraction d\'or',
    size: '201-500',
    revenue: '$100M-$500M',
    location: 'Dakar, Sénégal',
    country: 'SN',
    website: 'https://smds.sn',
    description: 'Exploitation aurifère au Sénégal oriental.',
    technologies: ['SAP', 'Mining Software', 'GIS', 'IoT'],
    type: 'company'
  },
  {
    name: 'Société Nationale d\'Électricité du Sénégal',
    domain: 'senelec.sn',
    industry: 'Énergie',
    sector: 'Production et distribution électrique',
    size: '1000+',
    revenue: '$200M+',
    location: 'Dakar, Sénégal',
    country: 'SN',
    website: 'https://senelec.sn',
    description: 'Producteur et distributeur d\'électricité au Sénégal.',
    technologies: ['SCADA', 'SAP', 'Smart Grid', 'Renewable Energy'],
    type: 'company'
  },
  {
    name: 'Sonatel',
    domain: 'sonatel.sn',
    industry: 'Télécommunications',
    sector: 'Opérateurs mobiles et fixe',
    size: '1000+',
    revenue: '$500M+',
    location: 'Dakar, Sénégal',
    country: 'SN',
    website: 'https://sonatel.sn',
    description: 'Leader des télécommunications au Sénégal et en Afrique de l\'Ouest.',
    technologies: ['5G', 'Fiber', 'Cloud', 'Fintech'],
    type: 'company'
  },
  // Ivory Coast
  {
    name: 'Compagnie Ivoirienne d\'Électricité',
    domain: 'cie.ci',
    industry: 'Énergie',
    sector: 'Distribution électrique',
    size: '1000+',
    revenue: '$300M+',
    location: 'Abidjan, Côte d\'Ivoire',
    country: 'CI',
    website: 'https://cie.ci',
    description: 'Distributeur d\'électricité en Côte d\'Ivoire.',
    technologies: ['SCADA', 'SAP', 'GIS', 'Smart Metering'],
    type: 'company'
  },
  {
    name: 'Orange Côte d\'Ivoire',
    domain: 'orange.ci',
    industry: 'Télécommunications',
    sector: 'Opérateurs mobiles',
    size: '500-1000',
    revenue: '$200M+',
    location: 'Abidjan, Côte d\'Ivoire',
    country: 'CI',
    website: 'https://orange.ci',
    description: 'Leader de la téléphonie mobile en Côte d\'Ivoire.',
    technologies: ['4G LTE', '5G', 'Mobile Money', 'Fiber'],
    type: 'company'
  },
  {
    name: 'SIFCA',
    domain: 'sifca.com',
    industry: 'Agro-industrie',
    sector: 'Agroalimentaire',
    size: '1000+',
    revenue: '$500M+',
    location: 'Abidjan, Côte d\'Ivoire',
    country: 'CI',
    website: 'https://sifca.com',
    description: 'Leader agro-industriel en Afrique de l\'Ouest.',
    technologies: ['ERP', 'IoT', 'Agriculture Technology'],
    type: 'company'
  },
  // Nigeria
  {
    name: 'Dangote Group',
    domain: 'dangote.com',
    industry: 'Industrie',
    sector: 'Ciment & Matériaux',
    size: '10000+',
    revenue: '$2B+',
    location: 'Lagos, Nigeria',
    country: 'NG',
    website: 'https://dangote.com',
    description: 'Plus grand conglomérat industriel d\'Afrique de l\'Ouest.',
    technologies: ['SAP', 'Oracle', 'Manufacturing Systems'],
    type: 'company'
  },
  {
    name: 'MTN Nigeria',
    domain: 'mtn.ng',
    industry: 'Télécommunications',
    sector: 'Opérateurs mobiles',
    size: '1000+',
    revenue: '$1B+',
    location: 'Lagos, Nigeria',
    country: 'NG',
    website: 'https://mtn.ng',
    description: 'Leader des télécommunications au Nigeria.',
    technologies: ['5G', '4G LTE', 'Mobile Money', 'Fiber'],
    type: 'company'
  },
  // Ghana
  {
    name: 'MTN Ghana',
    domain: 'mtn.com.gh',
    industry: 'Télécommunications',
    sector: 'Opérateurs mobiles',
    size: '500-1000',
    revenue: '$300M+',
    location: 'Accra, Ghana',
    country: 'GH',
    website: 'https://mtn.com.gh',
    description: 'Leader des télécommunications au Ghana.',
    technologies: ['4G LTE', '5G', 'Mobile Money', 'Fiber'],
    type: 'company'
  },
  {
    name: 'Tullow Ghana',
    domain: 'tullowoil.com',
    industry: 'Pétrole & Gaz',
    sector: 'Exploration pétrolière',
    size: '500-1000',
    revenue: '$500M+',
    location: 'Accra, Ghana',
    country: 'GH',
    website: 'https://tullowoil.com',
    description: 'Exploration et production pétrolière au Ghana.',
    technologies: ['Seismic Technology', 'Drilling Systems', 'ERP'],
    type: 'company'
  }
]

// Government contacts
export const GOVERNMENT_CONTACTS = [
  // Guinea Government
  {
    name: 'Présidence de la République de Guinée',
    type: 'government',
    category: 'Présidence',
    address: 'Palais du Peuple, Conakry, Guinée',
    phone: '+224 664 00 00 00',
    email: 'contact@presidence.gov.gn',
    website: 'https://presidence.gov.gn',
    country: 'GN',
    description: 'Institution suprême de l\'État guinéen'
  },
  {
    name: 'Primature de Guinée',
    type: 'government',
    category: 'Premier Ministère',
    address: 'Primature, Conakry, Guinée',
    phone: '+224 664 10 00 00',
    email: 'contact@primature.gov.gn',
    website: 'https://primature.gov.gn',
    country: 'GN',
    description: 'Services du Premier Ministre de Guinée'
  },
  {
    name: 'Ministère de l\'Économie et des Finances',
    type: 'ministry',
    category: 'Ministère',
    address: 'Conakry, Guinée',
    phone: '+224 664 20 00 00',
    email: 'contact@finances.gov.gn',
    website: 'https://finances.gov.gn',
    country: 'GN',
    description: 'Gestion des finances publiques et de la politique économique'
  },
  {
    name: 'Ministère des Mines et de la Géologie',
    type: 'ministry',
    category: 'Ministère',
    address: 'Conakry, Guinée',
    phone: '+224 664 30 00 00',
    email: 'contact@mines.gov.gn',
    website: 'https://mines.gov.gn',
    country: 'GN',
    description: 'Régulation et promotion du secteur minier guinéen'
  },
  {
    name: 'Ministère de l\'Énergie, de l\'Hydraulique et des Hydrocarbures',
    type: 'ministry',
    category: 'Ministère',
    address: 'Conakry, Guinée',
    phone: '+224 664 40 00 00',
    email: 'contact@energie.gov.gn',
    website: 'https://energie.gov.gn',
    country: 'GN',
    description: 'Politique énergétique et gestion des ressources hydrauliques'
  },
  {
    name: 'Ministère de l\'Agriculture et de l\'Élevage',
    type: 'ministry',
    category: 'Ministère',
    address: 'Conakry, Guinée',
    phone: '+224 664 50 00 00',
    email: 'contact@agriculture.gov.gn',
    website: 'https://agriculture.gov.gn',
    country: 'GN',
    description: 'Développement agricole et politique de l\'élevage'
  },
  {
    name: 'Agence Guinéenne de Promotion des Investissements (APIP)',
    type: 'agency',
    category: 'Agence',
    address: 'Conakry, Guinée',
    phone: '+224 664 60 00 00',
    email: 'contact@apip.gov.gn',
    website: 'https://apip.gov.gn',
    country: 'GN',
    description: 'Promotion des investissements et accompagnement des investisseurs'
  },
  // Senegal Government
  {
    name: 'Présidence de la République du Sénégal',
    type: 'government',
    category: 'Présidence',
    address: 'Palais de la République, Dakar, Sénégal',
    phone: '+221 33 849 00 00',
    email: 'contact@presidence.sn',
    website: 'https://presidence.sn',
    country: 'SN',
    description: 'Institution suprême de l\'État sénégalais'
  },
  {
    name: 'Ministère de l\'Économie, des Finances et du Plan',
    type: 'ministry',
    category: 'Ministère',
    address: 'Dakar, Sénégal',
    phone: '+221 33 849 10 00',
    email: 'contact@finances.sn',
    website: 'https://finances.sn',
    country: 'SN',
    description: 'Gestion des finances publiques du Sénégal'
  },
  {
    name: 'Agence Nationale de Promotion des Investissements (APIX)',
    type: 'agency',
    category: 'Agence',
    address: 'Dakar, Sénégal',
    phone: '+221 33 849 20 00',
    email: 'contact@apix.sn',
    website: 'https://apix.sn',
    country: 'SN',
    description: 'Promotion des investissements au Sénégal'
  },
  // Ivory Coast Government
  {
    name: 'Présidence de la République de Côte d\'Ivoire',
    type: 'government',
    category: 'Présidence',
    address: 'Abidjan, Côte d\'Ivoire',
    phone: '+225 27 22 00 00 00',
    email: 'contact@presidence.ci',
    website: 'https://presidence.ci',
    country: 'CI',
    description: 'Institution suprême de l\'État ivoirien'
  },
  {
    name: 'Centre de Promotion des Investissements (CEPICI)',
    type: 'agency',
    category: 'Agence',
    address: 'Abidjan, Côte d\'Ivoire',
    phone: '+225 27 22 44 00 00',
    email: 'contact@cepici.ci',
    website: 'https://cepici.ci',
    country: 'CI',
    description: 'Agence nationale de promotion des investissements'
  },
  // Nigeria Government
  {
    name: 'Nigerian Investment Promotion Commission',
    type: 'agency',
    category: 'Agency',
    address: 'Abuja, Nigeria',
    phone: '+234 9 523 0000',
    email: 'info@nipc.gov.ng',
    website: 'https://nipc.gov.ng',
    country: 'NG',
    description: 'Federal agency for investment promotion in Nigeria'
  },
  {
    name: 'Federal Ministry of Finance',
    type: 'ministry',
    category: 'Ministry',
    address: 'Abuja, Nigeria',
    phone: '+234 9 523 1000',
    email: 'info@finance.gov.ng',
    website: 'https://finance.gov.ng',
    country: 'NG',
    description: 'Federal ministry responsible for financial matters'
  },
  // Ghana Government
  {
    name: 'Ghana Investment Promotion Centre',
    type: 'agency',
    category: 'Agency',
    address: 'Accra, Ghana',
    phone: '+233 302 765 000',
    email: 'info@gipc.gov.gh',
    website: 'https://gipc.gov.gh',
    country: 'GH',
    description: 'Government agency for investment promotion'
  }
]

// Sample African contacts
export const AFRICAN_CONTACTS = [
  {
    name: 'Dr. Mamadi Doumbouya',
    title: 'Directeur Général',
    email: 'm.doumbouya@apip.gov.gn',
    phone: '+224 664 61 00 00',
    linkedIn: null,
    company: 'Agence Guinéenne de Promotion des Investissements',
    country: 'GN',
    type: 'government'
  },
  {
    name: 'Mamadou Sow',
    title: 'Directeur Commercial',
    email: 'm.sow@guineaalumina.com',
    phone: '+224 664 12 00 00',
    linkedIn: 'https://linkedin.com/in/mamadousow',
    company: 'Guinea Alumina Corporation',
    country: 'GN',
    type: 'private'
  },
  {
    name: 'Fatou Bintou Diallo',
    title: 'Directrice des Finances',
    email: 'f.diallo@guib.net',
    phone: '+224 664 13 00 00',
    linkedIn: 'https://linkedin.com/in/fatoubdiallo',
    company: 'Guinéenne de Banque',
    country: 'GN',
    type: 'private'
  },
  {
    name: 'Cheikh Ahmed Tidiane Dia',
    title: 'Directeur des Investissements',
    email: 'c.dia@apix.sn',
    phone: '+221 33 849 21 00',
    linkedIn: 'https://linkedin.com/in/cheikhdia',
    company: 'APIX Sénégal',
    country: 'SN',
    type: 'government'
  },
  {
    name: 'Aissatou Ndiaye',
    title: 'Responsable Partenariats',
    email: 'a.ndiaye@sonatel.sn',
    phone: '+221 33 839 00 00',
    linkedIn: 'https://linkedin.com/in/aissatoundiaye',
    company: 'Sonatel',
    country: 'SN',
    type: 'private'
  },
  {
    name: 'Kouamé Yao',
    title: 'Directeur des Opérations',
    email: 'k.yao@cie.ci',
    phone: '+225 27 22 50 00 00',
    linkedIn: 'https://linkedin.com/in/kouameyao',
    company: 'Compagnie Ivoirienne d\'Électricité',
    country: 'CI',
    type: 'private'
  },
  {
    name: 'Adama Coulibaly',
    title: 'CEO',
    email: 'a.coulibaly@sifca.com',
    phone: '+225 27 22 60 00 00',
    linkedIn: 'https://linkedin.com/in/adamacoulibaly',
    company: 'SIFCA',
    country: 'CI',
    type: 'private'
  },
  {
    name: 'Chinedu Eze',
    title: 'Director of Operations',
    email: 'c.eze@dangote.com',
    phone: '+234 1 270 0000',
    linkedIn: 'https://linkedin.com/in/chinedueze',
    company: 'Dangote Group',
    country: 'NG',
    type: 'private'
  },
  {
    name: 'Funke Okpe',
    title: 'Head of Business Development',
    email: 'f.okpe@mtn.ng',
    phone: '+234 803 000 0000',
    linkedIn: 'https://linkedin.com/in/funkeokpe',
    company: 'MTN Nigeria',
    country: 'NG',
    type: 'private'
  },
  {
    name: 'Kwame Asante',
    title: 'Investment Manager',
    email: 'k.asante@gipc.gov.gh',
    phone: '+233 302 765 001',
    linkedIn: 'https://linkedin.com/in/kwameasante',
    company: 'Ghana Investment Promotion Centre',
    country: 'GH',
    type: 'government'
  }
]

// Regional economic communities
export const AFRICAN_COMMUNITIES = [
  {
    name: 'CEDEAO',
    fullName: 'Communauté Économique des États de l\'Afrique de l\'Ouest',
    nameEn: 'ECOWAS - Economic Community of West African States',
    members: ['GN', 'SN', 'CI', 'ML', 'BF', 'NE', 'BJ', 'TG', 'GH', 'NG', 'GW', 'SL', 'LR', 'CV'],
    headquarters: 'Abuja, Nigeria',
    website: 'https://ecowas.int'
  },
  {
    name: 'UEMOA',
    fullName: 'Union Économique et Monétaire Ouest Africaine',
    nameEn: 'West African Economic and Monetary Union',
    members: ['SN', 'CI', 'ML', 'BF', 'NE', 'BJ', 'TG', 'GW'],
    headquarters: 'Ouagadougou, Burkina Faso',
    website: 'https://uemoa.int'
  },
  {
    name: 'CEEAC',
    fullName: 'Communauté Économique des États de l\'Afrique Centrale',
    nameEn: 'ECCAS - Economic Community of Central African States',
    members: ['CM', 'GA', 'CG', 'CD', 'CF', 'TD', 'GQ', 'ST', 'AO'],
    headquarters: 'Libreville, Gabon',
    website: 'https://ceeac-eccas.org'
  },
  {
    name: 'SADC',
    fullName: 'Southern African Development Community',
    nameEn: 'Southern African Development Community',
    members: ['ZA', 'BW', 'NA', 'ZW', 'ZM', 'MZ', 'MW', 'SZ', 'LS', 'TZ', 'MG', 'MU', 'SC'],
    headquarters: 'Gaborone, Botswana',
    website: 'https://sadc.int'
  },
  {
    name: 'EAC',
    fullName: 'East African Community',
    nameEn: 'East African Community',
    members: ['KE', 'UG', 'TZ', 'RW', 'BI', 'SS', 'CD'],
    headquarters: 'Arusha, Tanzania',
    website: 'https://eac.int'
  },
  {
    name: 'UA',
    fullName: 'Union Africaine',
    nameEn: 'African Union',
    members: 'all',
    headquarters: 'Addis Ababa, Ethiopia',
    website: 'https://au.int'
  }
]
