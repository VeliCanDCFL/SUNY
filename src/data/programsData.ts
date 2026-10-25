export interface CourseEquivalenceItem {
  homeCode: string;
  homeName: string;
  sunyCode: string;
  sunyName: string;
  credits: string;
  notes: string;
}

import {
  PROGRAM_PILLARS,
  AcademicPreparation,
  TransitionLogistics,
  UsAcademicCareer,
} from './programPillarsData';

export interface SUNYProgram {
  id: string;
  universityId: 'itu' | 'odtu' | 'anadolu' | 'istanbul';
  universityName: string;
  universityNameTr: string;
  majorName: string;
  majorNameTr: string;
  sunyCampus: string;
  sunyLocation: string; // e.g. "Vestal / Binghamton, NY", "Buffalo / Amherst, NY", "New Paltz, NY", "New York City, NY"
  degreeType: 'B.S.' | 'B.A.' | 'B.F.A.';
  isStemOpt: boolean; // 36 months vs 12 months
  avgMonthlyRent: number;
  healthInsuranceSem: number;
  housingPresets: Record<string, { name: string; rent: number; note: string; busRoute: string }>;
  courses: CourseEquivalenceItem[];
  programHighlights: {
    en: string[];
    tr: string[];
  };
  coordinatorContact: {
    office: string;
    email: string;
    location: string;
  };
  academicPrep: AcademicPreparation;
  transitionLogistics: TransitionLogistics;
  usAcademicCareer: UsAcademicCareer;
}

export interface TurkishUniversity {
  id: 'itu' | 'odtu' | 'anadolu' | 'istanbul';
  name: string;
  shortName: string;
  city: string;
  campusName: string;
  logoBadge: string;
  programs: string[]; // Program IDs
}

export const TURKISH_UNIVERSITIES: TurkishUniversity[] = [
  {
    id: 'itu',
    name: 'İstanbul Teknik Üniversitesi',
    shortName: 'İTÜ',
    city: 'İstanbul (Ayazağa / Maçka / Tuzla)',
    campusName: 'Ayazağa Yerleşkesi',
    logoBadge: 'İTÜ',
    programs: ['itu-bing-ie', 'itu-bing-cs', 'itu-buff-civil', 'itu-np-bus', 'itu-fit-fashion'],
  },
  {
    id: 'odtu',
    name: 'Orta Doğu Teknik Üniversitesi',
    shortName: 'ODTÜ / METU',
    city: 'Ankara',
    campusName: 'ODTÜ Ankara Kampüsü',
    logoBadge: 'ODTÜ',
    programs: ['odtu-bing-gia', 'odtu-np-bus', 'odtu-cort-fle'],
  },
  {
    id: 'anadolu',
    name: 'Anadolu Üniversitesi',
    shortName: 'Anadolu',
    city: 'Eskişehir',
    campusName: 'Yunus Emre Kampüsü',
    logoBadge: 'ANADOLU',
    programs: ['anadolu-cort-econ', 'anadolu-esc-bus'],
  },
  {
    id: 'istanbul',
    name: 'İstanbul Üniversitesi',
    shortName: 'İÜ',
    city: 'İstanbul (Beyazıt / Avcılar)',
    campusName: 'Beyazıt Yerleşkesi',
    logoBadge: 'İÜ',
    programs: ['iu-np-bus'],
  },
];

const BASE_PROGRAMS: Record<string, Omit<SUNYProgram, 'academicPrep' | 'transitionLogistics' | 'usAcademicCareer'>> = {
  'itu-bing-ie': {
    id: 'itu-bing-ie',
    universityId: 'itu',
    universityName: 'Istanbul Technical University',
    universityNameTr: 'İstanbul Teknik Üniversitesi (İTÜ)',
    majorName: 'Industrial Engineering',
    majorNameTr: 'Endüstri Mühendisliği',
    sunyCampus: 'Binghamton University (Watson College)',
    sunyLocation: 'Vestal / Binghamton, New York',
    degreeType: 'B.S.',
    isStemOpt: true,
    avgMonthlyRent: 820,
    healthInsuranceSem: 1350,
    housingPresets: {
      up: {
        name: 'University Plaza (UP)',
        rent: 825,
        note: 'Most popular among ITU students. Fully furnished, right on OCCT green shuttle.',
        busRoute: 'OCCT Campus Shuttle (5-8 min)',
      },
      hayes: {
        name: 'Hayes Student Living',
        rent: 750,
        note: 'Spacious apartments off Vestal Parkway, close to Target and Walmart.',
        busRoute: 'OCCT Vestal Line',
      },
      twinRiver: {
        name: 'Twin River Commons',
        rent: 910,
        note: 'Downtown luxury across from BU Downtown Center (UDC).',
        busRoute: 'OCCT Downtown Express (DCL)',
      },
      hawley: {
        name: '20 Hawley / Chenango',
        rent: 890,
        note: 'Downtown urban living near Court Street cafes and restaurants.',
        busRoute: 'OCCT DDC / DCL',
      },
    },
    courses: [
      {
        homeCode: 'MAT 216',
        homeName: 'Lineer Cebir',
        sunyCode: 'MATH 304',
        sunyName: 'Linear Algebra',
        credits: '4 cr',
        notes: 'Matrix algebra, eigenvalues, essential for SSIE 340.',
      },
      {
        homeCode: 'END 311',
        homeName: 'Yöneylem Araştırması I',
        sunyCode: 'SSIE 340',
        sunyName: 'Deterministic Operations Research',
        credits: '3 cr',
        notes: 'Simplex algorithm, linear programming, solved with AMPL / Python.',
      },
      {
        homeCode: 'END 312',
        homeName: 'Yöneylem Araştırması II',
        sunyCode: 'SSIE 341',
        sunyName: 'Stochastic Operations Research',
        credits: '3 cr',
        notes: 'Markov chains, queuing theory, dynamic programming.',
      },
      {
        homeCode: 'END 214',
        homeName: 'Endüstriyel Olasılık',
        sunyCode: 'SSIE 305',
        sunyName: 'Applied Probability & Statistics',
        credits: '3 cr',
        notes: 'Continuous distributions, ANOVA, hypothesis testing using R/Minitab.',
      },
      {
        homeCode: 'END 331',
        homeName: 'Benzetim (Simülasyon)',
        sunyCode: 'SSIE 360',
        sunyName: 'Discrete-Event Simulation',
        credits: '3 cr',
        notes: 'Rockwell Arena modeling, queue optimization.',
      },
      {
        homeCode: 'END 492',
        homeName: 'Bitirme Tasarım Projesi',
        sunyCode: 'SSIE 410 / 411',
        sunyName: 'Senior Design Project I & II',
        credits: '6 cr',
        notes: 'Year-long corporate capstone with industry sponsors (Lockheed, Raymond Corp).',
      },
    ],
    programHighlights: {
      en: [
        'Top 10 national Industrial Engineering program at Watson College.',
        'Qualifies for full 36-month (3-year) STEM OPT work authorization in the USA.',
        'Extensive Turkish alumni network in NY, NJ, Boston, and Chicago.',
      ],
      tr: [
        'Watson Mühendislik Fakültesinde ABD’nin en köklü Endüstri Mühendisliği programlarından biri.',
        '36 Ay (3 Yıl) yasal STEM OPT çalışma izni hakkı.',
        'New York, New Jersey ve Boston bölgesinde geniş İTÜ-SUNY mezun ağı.',
      ],
    },
    coordinatorContact: {
      office: 'İTÜ İşletme Fakültesi SUNY Koordinatörlüğü',
      email: 'suny@itu.edu.tr',
      location: 'Ayazağa Kampüsü, Maslak / Maçka',
    },
  },

  'itu-bing-cs': {
    id: 'itu-bing-cs',
    universityId: 'itu',
    universityName: 'Istanbul Technical University',
    universityNameTr: 'İstanbul Teknik Üniversitesi (İTÜ)',
    majorName: 'Information Systems / Computer Engineering',
    majorNameTr: 'Bilişim Sistemleri / Bilgisayar Mühendisliği',
    sunyCampus: 'Binghamton University (Watson CS)',
    sunyLocation: 'Vestal / Binghamton, New York',
    degreeType: 'B.S.',
    isStemOpt: true,
    avgMonthlyRent: 820,
    healthInsuranceSem: 1350,
    housingPresets: {
      up: {
        name: 'University Plaza (UP)',
        rent: 825,
        note: 'High-speed internet, student study rooms, OCCT shuttle.',
        busRoute: 'OCCT Campus Shuttle',
      },
      hayes: {
        name: 'Hayes Student Living',
        rent: 750,
        note: 'Vestal Parkway, close to tech shopping and groceries.',
        busRoute: 'OCCT Vestal Line',
      },
    },
    courses: [
      {
        homeCode: 'BLG 102E',
        homeName: 'Intr. to Scientific Computing (C/C++)',
        sunyCode: 'CS 120 / 140',
        sunyName: 'Programming and Hardware Fundamentals',
        credits: '4 cr',
        notes: 'Core programming syntax, pointers, data representation.',
      },
      {
        homeCode: 'BLG 233E',
        homeName: 'Data Structures and Algorithms',
        sunyCode: 'CS 220 / 240',
        sunyName: 'Data Structures and Algorithms',
        credits: '4 cr',
        notes: 'Trees, graphs, asymptotic analysis, search algorithms in C++ / Java.',
      },
      {
        homeCode: 'BLG 312E',
        homeName: 'Computer Operating Systems',
        sunyCode: 'CS 350',
        sunyName: 'Operating Systems',
        credits: '4 cr',
        notes: 'Processes, concurrency, virtual memory, POSIX threads.',
      },
    ],
    programHighlights: {
      en: [
        'Watson Computer Science curriculum directly aligned with Big Tech hiring standards.',
        '3-Year STEM OPT with high placement in NYC & Silicon Valley tech firms.',
        'Access to Watson high-performance computing clusters and AI labs.',
      ],
      tr: [
        'Binghamton Watson CS müfredatı ile global yazılım mühendisliği standartları.',
        '3 Yıllık STEM OPT izni ve New York finans/teknoloji şirketlerinde staj imkanı.',
        'Watson yapay zeka ve yüksek başarımlı hesaplama laboratuvarlarına erişim.',
      ],
    },
    coordinatorContact: {
      office: 'İTÜ Bilgisayar ve Bilişim Fakültesi SUNY Ofisi',
      email: 'bilgisunyo@itu.edu.tr',
      location: 'Ayazağa Yerleşkesi, Maslak',
    },
  },

  'itu-buff-civil': {
    id: 'itu-buff-civil',
    universityId: 'itu',
    universityName: 'Istanbul Technical University',
    universityNameTr: 'İstanbul Teknik Üniversitesi (İTÜ)',
    majorName: 'Civil Engineering',
    majorNameTr: 'İnşaat Mühendisliği',
    sunyCampus: 'University at Buffalo (SUNY Buffalo)',
    sunyLocation: 'Buffalo / Amherst, New York',
    degreeType: 'B.S.',
    isStemOpt: true,
    avgMonthlyRent: 790,
    healthInsuranceSem: 1400,
    housingPresets: {
      sweethome: {
        name: 'Villas on Rensch / Sweethome',
        rent: 810,
        note: 'Walk to UB North Campus, fully furnished, student amenities.',
        busRoute: 'UB Stampede Shuttle (free)',
      },
      chestnut: {
        name: 'Villas at Chestnut Ridge',
        rent: 775,
        note: 'Spacious townhomes near Maple Rd shopping and Wegmans.',
        busRoute: 'Private complex shuttle & UB Transit',
      },
      collegiate: {
        name: 'Collegiate Village',
        rent: 730,
        note: 'Economical option with shuttle directly to UB North/South campuses.',
        busRoute: 'CV Express Shuttle',
      },
    },
    courses: [
      {
        homeCode: 'INS 211',
        homeName: 'Mukavemet (Strength of Materials)',
        sunyCode: 'CIE 334',
        sunyName: 'Materials Science in Civil Engineering',
        credits: '3 cr',
        notes: 'Stress-strain tensors, beam bending, structural mechanics.',
      },
      {
        homeCode: 'INS 321',
        homeName: 'Akışkanlar Mekaniği (Fluid Mechanics)',
        sunyCode: 'CIE 340',
        sunyName: 'Environmental and Fluid Mechanics',
        credits: '3 cr',
        notes: 'Navier-Stokes equations, pipe flow, open channels.',
      },
    ],
    programHighlights: {
      en: [
        'SUNY Buffalo is a premier Tier-1 research university renowned for earthquake & structural engineering.',
        '3-Year STEM OPT for engineering careers across upstate NY, Chicago, and NYC.',
        'UB Stampede campus transit connects North and South campuses for free.',
      ],
      tr: [
        'SUNY Buffalo, deprem mühendisliği ve yapı statiği alanında ABD’nin 1 numaralı merkezlerinden biridir.',
        '3 Yıllık STEM OPT çalışma izni.',
        'Ücretsiz UB Stampede otobüsleri ve Amherst öğrenci yerleşkesi.',
      ],
    },
    coordinatorContact: {
      office: 'İTÜ İnşaat Fakültesi SUNY Program Koordinatörlüğü',
      email: 'insaat-suny@itu.edu.tr',
      location: 'Ayazağa Yerleşkesi',
    },
  },

  'itu-np-bus': {
    id: 'itu-np-bus',
    universityId: 'itu',
    universityName: 'Istanbul Technical University',
    universityNameTr: 'İstanbul Teknik Üniversitesi (İTÜ)',
    majorName: 'Business Administration (İşletme)',
    majorNameTr: 'İşletme',
    sunyCampus: 'SUNY New Paltz (School of Business)',
    sunyLocation: 'New Paltz / Hudson Valley, New York (90 min to NYC)',
    degreeType: 'B.S.',
    isStemOpt: false,
    avgMonthlyRent: 860,
    healthInsuranceSem: 1250,
    housingPresets: {
      village: {
        name: 'Village Walk Apartments',
        rent: 890,
        note: 'Walk to historic New Paltz Main Street and campus.',
        busRoute: 'Walking distance / Campus Loop',
      },
      hudson: {
        name: 'Huguenot Student Quarters',
        rent: 830,
        note: 'Quiet, scenic Hudson Valley setting near Mohonk Preserve.',
        busRoute: 'UCAT Route 11',
      },
    },
    courses: [
      {
        homeCode: 'ISL 101',
        homeName: 'Genel İşletme (Principles of Management)',
        sunyCode: 'BUS 201',
        sunyName: 'Introduction to Business and Management',
        credits: '3 cr',
        notes: 'Strategic planning, corporate governance, organizational design.',
      },
      {
        homeCode: 'ISL 204',
        homeName: 'Finansal Muhasebe',
        sunyCode: 'ACC 201',
        sunyName: 'Financial Accounting',
        credits: '3 cr',
        notes: 'Balance sheets, US GAAP principles, cash flow modeling.',
      },
    ],
    programHighlights: {
      en: [
        'AACSB Accredited School of Business just 90 minutes from Manhattan.',
        'Direct Trailways express bus line from campus to NYC Port Authority.',
        'Close-knit faculty-student mentorship and Wall Street field trips.',
      ],
      tr: [
        'AACSB akreditasyonlu New Paltz İşletme Okulu, Manhattan’a sadece 90 dakika mesafede.',
        'Kampüsten New York City Port Authority’ye doğrudan ekspres otobüs bağlantısı.',
        'Wall Street finans kurumlarına staj ve teknik gezi olanakları.',
      ],
    },
    coordinatorContact: {
      office: 'İTÜ İşletme Fakültesi SUNY Ofisi',
      email: 'isletme-suny@itu.edu.tr',
      location: 'Maçka Yerleşkesi, Beşiktaş',
    },
  },

  'itu-fit-fashion': {
    id: 'itu-fit-fashion',
    universityId: 'itu',
    universityName: 'Istanbul Technical University',
    universityNameTr: 'İstanbul Teknik Üniversitesi (İTÜ)',
    majorName: 'Fashion Design & Textile Marketing',
    majorNameTr: 'Moda Tasarımı / Tekstil Geliştirme',
    sunyCampus: 'Fashion Institute of Technology (FIT Manhattan)',
    sunyLocation: 'Chelsea, Manhattan, New York City',
    degreeType: 'B.F.A.',
    isStemOpt: false,
    avgMonthlyRent: 1550,
    healthInsuranceSem: 1500,
    housingPresets: {
      fitDorms: {
        name: 'FIT 27th Street Co-ed Residence Hall',
        rent: 1450,
        note: 'Live directly on campus in Chelsea, Manhattan. All utilities included.',
        busRoute: 'Directly in FIT academic quad',
      },
      brooklynShared: {
        name: 'Brooklyn / Queens Student Share',
        rent: 1100,
        note: 'Bushwick or Astoria shared apartment with 2-3 roommates.',
        busRoute: 'NYC Subway N/R/W or L train (25 min to FIT)',
      },
    },
    courses: [
      {
        homeCode: 'MDT 101',
        homeName: 'Temel Tasarım (Basic Design)',
        sunyCode: 'FD 111',
        sunyName: 'Fashion Design Studio I',
        credits: '4 cr',
        notes: 'Draping, flat patternmaking, silhouette sketching.',
      },
    ],
    programHighlights: {
      en: [
        'World capital of fashion: FIT Chelsea campus in Manhattan, NYC.',
        'Annual graduation runway shows attended by Vogue, Calvin Klein, and Michael Kors.',
        'OPT work authorization directly in New York fashion houses.',
      ],
      tr: [
        'Dünya modasının kalbinde: Manhattan Chelsea FIT yerleşkesi.',
        'New York Moda Haftası ve ünlü tasarım evlerinde staj ve portfolio sergileri.',
        'Mezuniyet sonrası New York moda merkezlerinde 1 yıllık OPT çalışma fırsatı.',
      ],
    },
    coordinatorContact: {
      office: 'İTÜ Tekstil Teknolojileri ve Tasarımı Fakültesi',
      email: 'tekstilsuny@itu.edu.tr',
      location: 'Gümüşsuyu Yerleşkesi',
    },
  },

  'odtu-bing-gia': {
    id: 'odtu-bing-gia',
    universityId: 'odtu',
    universityName: 'Middle East Technical University (METU)',
    universityNameTr: 'Orta Doğu Teknik Üniversitesi (ODTÜ)',
    majorName: 'Global & International Affairs',
    majorNameTr: 'Uluslararası İlişkiler (Uİ - SUNY)',
    sunyCampus: 'Binghamton University (Harpur College)',
    sunyLocation: 'Vestal / Binghamton, New York',
    degreeType: 'B.A.',
    isStemOpt: false,
    avgMonthlyRent: 820,
    healthInsuranceSem: 1350,
    housingPresets: {
      up: {
        name: 'University Plaza (UP)',
        rent: 825,
        note: 'Preferred student community, close to BU bus loop.',
        busRoute: 'OCCT Campus Shuttle',
      },
      twinRiver: {
        name: 'Twin River Commons',
        rent: 910,
        note: 'Modern downtown student building across from UDC.',
        busRoute: 'OCCT DCL Express',
      },
    },
    courses: [
      {
        homeCode: 'IR 101',
        homeName: 'Introduction to World Politics',
        sunyCode: 'PLSC 117',
        sunyName: 'Introduction to World Politics',
        credits: '4 cr',
        notes: 'International relations theory, balance of power, international law.',
      },
      {
        homeCode: 'IR 225',
        homeName: 'Comparative Political Systems',
        sunyCode: 'PLSC 115',
        sunyName: 'Introduction to Comparative Politics',
        credits: '4 cr',
        notes: 'Regime types, parliamentary systems, political behavior.',
      },
    ],
    programHighlights: {
      en: [
        'Top dual-degree political science & foreign affairs curriculum in Turkey and the USA.',
        'Alumni serving in Turkish Foreign Ministry, United Nations, NATO, and global think-tanks.',
        'Opportunities for semester internships in Washington, D.C. and New York City.',
      ],
      tr: [
        'Türkiye ve ABD’nin en prestijli Uluslararası İlişkiler çift diploma programı.',
        'Dışişleri Bakanlığı, Birleşmiş Milletler ve uluslararası düşünce kuruluşlarında mezunlar.',
        'Washington D.C. ve New York City diplomatik temsilciliklerinde staj imkanları.',
      ],
    },
    coordinatorContact: {
      office: 'ODTÜ İktisadi ve İdari Bilimler Fakültesi SUNY Ofisi',
      email: 'suny@metu.edu.tr',
      location: 'ODTÜ İİBF Dekanlığı, Çankaya, Ankara',
    },
  },

  'odtu-np-bus': {
    id: 'odtu-np-bus',
    universityId: 'odtu',
    universityName: 'Middle East Technical University (METU)',
    universityNameTr: 'Orta Doğu Teknik Üniversitesi (ODTÜ)',
    majorName: 'Business Administration',
    majorNameTr: 'İşletme (SUNY New Paltz)',
    sunyCampus: 'SUNY New Paltz (School of Business)',
    sunyLocation: 'New Paltz, New York (Hudson Valley)',
    degreeType: 'B.S.',
    isStemOpt: false,
    avgMonthlyRent: 860,
    healthInsuranceSem: 1250,
    housingPresets: {
      village: {
        name: 'New Paltz Student Village',
        rent: 880,
        note: 'Walk to lecture halls and campus library.',
        busRoute: 'Campus shuttle',
      },
    },
    courses: [
      {
        homeCode: 'BA 100',
        homeName: 'Introduction to Business',
        sunyCode: 'BUS 201',
        sunyName: 'Introduction to Business Management',
        credits: '3 cr',
        notes: 'Foundations of corporate finance, organizational leadership.',
      },
    ],
    programHighlights: {
      en: [
        'METU academic excellence coupled with American business training.',
        'Quick access to New York City corporate financial districts.',
      ],
      tr: [
        'ODTÜ akademik saygınlığı ile ABD işletme eğitimi birleşimi.',
        'New York finans merkezine 90 dakikalık hızlı erişim.',
      ],
    },
    coordinatorContact: {
      office: 'ODTÜ İşletme Bölümü SUNY Programı',
      email: 'ba-suny@metu.edu.tr',
      location: 'Ankara',
    },
  },

  'odtu-cort-fle': {
    id: 'odtu-cort-fle',
    universityId: 'odtu',
    universityName: 'Middle East Technical University (METU)',
    universityNameTr: 'Orta Doğu Teknik Üniversitesi (ODTÜ)',
    majorName: 'Teaching English as a Foreign Language (FLE)',
    majorNameTr: 'İngilizce Öğretmenliği (FLE)',
    sunyCampus: 'SUNY Cortland',
    sunyLocation: 'Cortland / Central New York',
    degreeType: 'B.A.',
    isStemOpt: false,
    avgMonthlyRent: 690,
    healthInsuranceSem: 1200,
    housingPresets: {
      cortDorm: {
        name: 'SUNY Cortland Student Housing',
        rent: 720,
        note: 'Affordable on/off-campus student living in Central NY.',
        busRoute: 'Cortland Transit (free with student ID)',
      },
    },
    courses: [
      {
        homeCode: 'FLE 201',
        homeName: 'Advanced English Grammar & Syntax',
        sunyCode: 'ENG 220',
        sunyName: 'English Linguistics',
        credits: '3 cr',
        notes: 'Phonetics, morphology, pedagogical grammar.',
      },
    ],
    programHighlights: {
      en: [
        'SUNY Cortland is nationally ranked for educator preparation and applied linguistics.',
        'Dual teaching credentials in both Turkey and New York State educational frameworks.',
      ],
      tr: [
        'Eğitim bilimleri ve yabancı dil öğretimi alanında ABD’nin köklü devlet üniversitelerinden Cortland.',
        'Hem Türkiye hem ABD eğitim standartlarına uyumlu çift diploma.',
      ],
    },
    coordinatorContact: {
      office: 'ODTÜ Eğitim Fakültesi Yabancı Diller Eğitimi',
      email: 'fle-suny@metu.edu.tr',
      location: 'Ankara',
    },
  },

  'anadolu-cort-econ': {
    id: 'anadolu-cort-econ',
    universityId: 'anadolu',
    universityName: 'Anadolu University',
    universityNameTr: 'Anadolu Üniversitesi',
    majorName: 'Economics',
    majorNameTr: 'İktisat',
    sunyCampus: 'SUNY Cortland',
    sunyLocation: 'Cortland, New York',
    degreeType: 'B.S.',
    isStemOpt: false,
    avgMonthlyRent: 690,
    healthInsuranceSem: 1200,
    housingPresets: {
      cortTown: {
        name: 'Cortland College Apartments',
        rent: 700,
        note: 'Comfortable student housing with shared living and kitchen.',
        busRoute: 'Campus shuttle',
      },
    },
    courses: [
      {
        homeCode: 'IKT 101',
        homeName: 'İktisada Giriş I (Mikroiktisat)',
        sunyCode: 'ECO 110',
        sunyName: 'Principles of Microeconomics',
        credits: '3 cr',
        notes: 'Price theory, consumer surplus, market structures.',
      },
    ],
    programHighlights: {
      en: [
        'Anadolu University & SUNY Cortland economic forecasting and public policy training.',
        'Low cost of living in Central New York.',
      ],
      tr: [
        'Eskişehir Anadolu Üniversitesi ve SUNY Cortland iş birliğiyle küresel iktisat eğitimi.',
        'Central New York bölgesinde ekonomik yaşam ve barınma maliyetleri.',
      ],
    },
    coordinatorContact: {
      office: 'Anadolu Üniversitesi Uluslararası İlişkiler Birimi',
      email: 'suny@anadolu.edu.tr',
      location: 'Eskişehir',
    },
  },

  'anadolu-esc-bus': {
    id: 'anadolu-esc-bus',
    universityId: 'anadolu',
    universityName: 'Anadolu University',
    universityNameTr: 'Anadolu Üniversitesi',
    majorName: 'Business Administration',
    majorNameTr: 'İşletme (SUNY Empire State)',
    sunyCampus: 'SUNY Empire State College',
    sunyLocation: 'Saratoga Springs / Albany, New York',
    degreeType: 'B.S.',
    isStemOpt: false,
    avgMonthlyRent: 780,
    healthInsuranceSem: 1200,
    housingPresets: {
      saratoga: {
        name: 'Saratoga Student Suites',
        rent: 800,
        note: 'Historic spa city with modern student accommodations.',
        busRoute: 'CDTA Transit',
      },
    },
    courses: [
      {
        homeCode: 'ISL 102',
        homeName: 'Yönetim ve Organizasyon',
        sunyCode: 'MGMT 2010',
        sunyName: 'Management and Human Behavior',
        credits: '3 cr',
        notes: 'Organizational culture, team dynamics, leadership.',
      },
    ],
    programHighlights: {
      en: [
        'Flexible hybrid learning models with high practical corporate integration.',
        'Graduates successfully placed in banking and commercial enterprises in Turkey & US.',
      ],
      tr: [
        'Uygulamalı yönetim vizyonu ile kurumsal dünyaya hazır mezuniyet.',
        'Bankacılık ve uluslararası ticaret sektöründe çift diploma avantajı.',
      ],
    },
    coordinatorContact: {
      office: 'Anadolu Üniversitesi SUNY Programları Koordinatörlüğü',
      email: 'suny@anadolu.edu.tr',
      location: 'Eskişehir',
    },
  },

  'iu-np-bus': {
    id: 'iu-np-bus',
    universityId: 'istanbul',
    universityName: 'Istanbul University',
    universityNameTr: 'İstanbul Üniversitesi (İÜ)',
    majorName: 'Business Administration (İşletme)',
    majorNameTr: 'İşletme (SUNY New Paltz)',
    sunyCampus: 'SUNY New Paltz',
    sunyLocation: 'New Paltz / Hudson Valley, New York',
    degreeType: 'B.S.',
    isStemOpt: false,
    avgMonthlyRent: 860,
    healthInsuranceSem: 1250,
    housingPresets: {
      village: {
        name: 'New Paltz Village Apartments',
        rent: 890,
        note: 'Walkable college town setting close to academic halls.',
        busRoute: 'Campus loop',
      },
    },
    courses: [
      {
        homeCode: 'ISL 105',
        homeName: 'Pazarlama İlkeleri (Marketing Principles)',
        sunyCode: 'BUS 325',
        sunyName: 'Marketing Management',
        credits: '3 cr',
        notes: 'Consumer behavior, digital marketing, supply chains.',
      },
    ],
    programHighlights: {
      en: [
        'Combining the historic prestige of Istanbul University with New Paltz business acumen.',
        'Direct proximity to New York City commerce and internships.',
      ],
      tr: [
        'İstanbul Üniversitesinin köklü birikimi ile New Paltz İşletme Okulunun çağdaş vizyonu.',
        'New York finans ve ticaret merkezlerine kolay ulaşım.',
      ],
    },
    coordinatorContact: {
      office: 'İstanbul Üniversitesi İktisat Fakültesi SUNY Ofisi',
      email: 'suny@istanbul.edu.tr',
      location: 'Beyazıt, İstanbul',
    },
  },
};

export const SUNY_PROGRAMS: Record<string, SUNYProgram> = Object.fromEntries(
  Object.entries(BASE_PROGRAMS).map(([id, prog]) => {
    const pillars = PROGRAM_PILLARS[id] || PROGRAM_PILLARS['itu-bing-ie'];
    return [
      id,
      {
        ...prog,
        academicPrep: pillars.academicPrep,
        transitionLogistics: pillars.transitionLogistics,
        usAcademicCareer: pillars.usAcademicCareer,
      } as SUNYProgram,
    ];
  })
);
