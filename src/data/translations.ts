export type Language = 'tr' | 'en';

export const TRANSLATIONS = {
  tr: {
    // Brand & Top bar
    brandSub: 'Türkiye ➔ ABD Çift Diploma Rehberi',
    changeProgram: 'Üniversite & Bölüm Değiştir',
    selectedProgram: 'Seçili Program',
    usGlossary: 'ABD Terimler Sözlüğü',
    courseEquivalencies: 'Ders Eşdeğerlikleri',
    startRoadmap: 'Yol Haritasına Başla',
    navRoadmap: '4 Yıllık Yol Haritası',
    navDeepDive: 'Bölüm Rehberi (3 Sütun)',
    navGuides: 'Rehberler & Vize',
    navCalculator: 'Bütçe Hesaplayıcı',
    navMarketplace: 'Öğrenci Pazarı',
    navFeedback: 'Geri Bildirim & Katkı',

    // Hero Section
    heroBadge: 'Resmi Türkiye - SUNY Çift Diploma Rehberi',
    heroStemBadge: '3 Yıl Yasal STEM OPT Çalışma İzni',
    heroNonStemBadge: '12 Ay Yasal OPT Çalışma İzni',
    fromToHeadline: 'Türkiye’den New York’a:',
    playbookHeadline: 'Eksiksiz SUNY Öğrenci Rehberiniz',
    heroDescription:
      'Bürokratik karmaşaya son. F-1 vizesi mülakat taktikleri, ders intibak tabloları, New York ev kiralama sözleşmeleri, canlı ABD yaşam gideri hesaplayıcı ve mezun öğrenci pazarı.',
    btnExploreRoadmap: 'Yol Haritasını İncele',
    btnCalculateBudget: 'ABD Yaşam Maliyetini Hesapla',
    btnCourseEquiv: 'Ders İntibak Tablosu',

    // Program Selector
    selectorModalTitle: 'Üniversitenizi ve Çift Diploma Bölümünüzü Seçin',
    selectorModalSub:
      'Türkiye’deki üniversitenizi ve SUNY ortaklığı programınızı seçtiğinizde tüm rehberler, kampüs bilgileri, barınma seçenekleri ve ders denklikleri seçiminize göre özelleşir.',
    step1Title: '1. Adım: Türkiye’deki Üniversitenizi Seçin',
    step2Title: '2. Adım: Bölümünüzü ve SUNY Kampüsünü Seçin',
    btnConfirmProgram: 'Bu Programı Seç ve Devam Et',
    activeCampusBadge: 'Hedef SUNY Kampüsü',
    activeLocationBadge: 'Konum',

    // Roadmap Section
    roadmapTag: 'İnteraktif 4 Yıllık Çift Diploma Zaman Çizelgesi',
    roadmapTitle: 'SUNY Yolculuğunuz Adım Adım',
    roadmapSub:
      'Gereken belgeleri, akademik barajları, son teslim tarihlerini ve mezun öğrencilerin içeriden tavsiyelerini takip etmek için aşamalara tıklayın.',
    stageProgress: 'Aşama İlerlemesi',
    milestonesChecked: 'tamamlandı',
    keyMilestones: 'Önemli Kilometre Taşları ve Yapılacaklar',
    seniorAdvice: 'Mezunlardan İçeriden Tavsiyeler',
    needEquivHelp: 'Watson veya SUNY ders intibakları konusunda yardıma mı ihtiyacınız var?',
    viewCourseTable: 'Bölüm Ders İntibak Tablosunu Görüntüle',

    // Guides Section
    guidesTag: 'Türk Öğrenciler İçin Saha Rehberleri',
    guidesTitle: 'Temel Hayatta Kalma ve Hazırlık Rehberleri',
    guidesSub:
      'Klasik üniversite el kitaplarının ötesinde. Gerçek vize mülakatı soru-cevapları, kiralama stratejileri ve banka hesabı açma adımları.',
    readFullGuide: 'Rehberi Oku',

    // Calculator Section
    calcTag: 'İnteraktif New York Yaşam Maliyeti Simülatörü',
    calcTitle: 'ABD Yaşam & Dönem Bütçe Hesaplayıcı',
    calcSub:
      'Kira, beslenme, elektrik/ısıtma faturaları, zorunlu SUNY sağlık sigortasını hesaplayın ve kampüs içi yasal çalışma ($15/saat) ile giderlerinizi dengeleyin.',
    quickHousingPreset: 'Hızlı Konut / Ev Ön Ayarı:',
    monthlyRent: 'Aylık Yatak Odası Kirası ($)',
    monthlyGroceries: 'Aylık Market & Yemek Gideri ($)',
    utilitiesWifi: 'Elektrik, Doğalgaz & Wi-Fi ($/ay)',
    mobilePlan: 'ABD Telefon Hattı ($/ay)',
    healthInsurance: 'SUNY Zorunlu Sağlık Sigortası ($/Dönem)',
    onCampusJob: 'Kampüs İçi Yasal Öğrenci İşi (Maaş Katkısı)',
    estimatedOutOfPocket: 'Tahmini Dönemlik Net Cepten Çıkan',
    fiveMonths: '5 Aylık Dönem',
    monthlyLivingCost: 'Aylık Yaşam Gideri:',
    semesterSubtotal: '5 Aylık Yaşam Ara Toplamı:',
    healthInsuranceLabel: 'SUNY Sağlık Sigortası:',
    studentJobOffset: 'Öğrenci İşi Gelir Katkısı:',
    btnCopyBudget: 'Hesaplamayı Aile / Sponsor İçin Kopyala',
    copiedText: 'Bütçe Panoya Kopyalandı!',
    tuitionDisclaimer: '*ITU/SUNY tarafından tahakkuk ettirilen harç farkı hariçtir.',

    // Marketplace
    marketTag: 'Kampüs İçi İkinci El Takas',
    marketTitle: 'Kıdemliden Çömeze Öğrenci Pazarı',
    marketSub:
      'Binghamton, Buffalo, New Paltz ve New York yerleşkelerinde mezun olan Türk öğrencilerden mobilya, kışlık mont, araba ve ders notlarını devralın.',
    btnPostItem: '+ İlan Ekle',
    searchPlaceholder: 'Mobilya, kaban, çalışma masası, devren kiralık, araba ara...',
    allLocations: 'Tüm Konumlar',
    allCategories: 'Tüm Kategoriler',
    contactSeller: 'Satıcıyla İletişime Geç →',
    bySeller: 'İlan Sahibi:',

    // Modals
    close: 'Kapat',
    doneReading: 'Okumayı Bitirdim',
    verifiedSenior: 'Onaylı Öğrenci İlanı',
    chatWhatsapp: 'WhatsApp Üzerinden Mesaj At',
    emailMailto: 'E-posta ile İletişime Geç',
    safetyTip: 'Güvenlik Tavsiyesi: Ödemeleri her zaman ürünü gördükten sonra elden veya Zelle ile yapın.',
  },
  en: {
    brandSub: 'Turkey ➔ US Dual Degree Companion',
    changeProgram: 'Change University & Major',
    selectedProgram: 'Active Program',
    usGlossary: 'US Glossary',
    courseEquivalencies: 'Course Equivalencies',
    startRoadmap: 'Start Roadmap',
    navRoadmap: '4-Year Roadmap',
    navDeepDive: 'Major Deep Dive',
    navGuides: 'Guides & Visa',
    navCalculator: 'Budget Calculator',
    navMarketplace: 'Marketplace',
    navFeedback: 'Q&A & Feedback',

    heroBadge: 'Official Turkey - SUNY Dual Degree Guide',
    heroStemBadge: '3-Year Legal STEM OPT Work Permit',
    heroNonStemBadge: '12-Month Legal OPT Work Permit',
    fromToHeadline: 'From Turkey to New York:',
    playbookHeadline: 'Your Complete SUNY Playbook',
    heroDescription:
      'Zero bureaucratic fluff. Everything you need to transition smoothly: F-1 visa interview tactics, course equivalency tables, New York lease agreements, live US budget calculator, and senior marketplace.',
    btnExploreRoadmap: 'Explore 4-Year Roadmap',
    btnCalculateBudget: 'Calculate US Budget',
    btnCourseEquiv: 'Course Equivalency Table',

    selectorModalTitle: 'Select Your University & Dual Degree Major',
    selectorModalSub:
      'Choose your Turkish home university and SUNY partner program to personalize all guides, campus housing options, city living costs, and course mappings.',
    step1Title: 'Step 1: Choose Your Turkish University',
    step2Title: 'Step 2: Choose Your Major & SUNY Partner Campus',
    btnConfirmProgram: 'Select This Program & Continue',
    activeCampusBadge: 'Target SUNY Campus',
    activeLocationBadge: 'Location',

    roadmapTag: 'Interactive 4-Year Dual Degree Timeline',
    roadmapTitle: 'Your SUNY Journey at a Glance',
    roadmapSub:
      'Click through each stage to track required forms, academic thresholds, deadlines, and insider advice from graduating seniors.',
    stageProgress: 'Stage Progress',
    milestonesChecked: 'completed',
    keyMilestones: 'Key Milestones & Action Items',
    seniorAdvice: 'Senior Insider Advice',
    needEquivHelp: 'Need help with course equivalencies or credit transfers?',
    viewCourseTable: 'View Program Course Equivalency Table',

    guidesTag: 'Field Guides for Turkish Students',
    guidesTitle: 'Essential Survival Playbooks',
    guidesSub:
      'No vague university handbooks. Step-by-step instructions, proven consular answers, and lease signing strategies compiled by graduating seniors.',
    readFullGuide: 'Read Full Guide',

    calcTag: 'Interactive New York Cost Simulator',
    calcTitle: 'US Living & Semester Budget Calculator',
    calcSub:
      'Accurately forecast rent, food, NYSEG utilities, health insurance, and offset living costs through on-campus student employment ($15/hr).',
    quickHousingPreset: 'Quick Housing Preset:',
    monthlyRent: 'Monthly Bedroom Rent ($)',
    monthlyGroceries: 'Monthly Groceries & Dining ($)',
    utilitiesWifi: 'Utilities & Wi-Fi ($/mo)',
    mobilePlan: 'US Mobile Plan ($/mo)',
    healthInsurance: 'SUNY Mandatory Health Insurance ($/Semester)',
    onCampusJob: 'On-Campus Student Job (Offset)',
    estimatedOutOfPocket: 'Estimated Semester Out-of-Pocket',
    fiveMonths: '5 Months',
    monthlyLivingCost: 'Monthly Living Cost:',
    semesterSubtotal: '5-Month Living Subtotal:',
    healthInsuranceLabel: 'SUNY Health Insurance:',
    studentJobOffset: 'Student Job Offset:',
    btnCopyBudget: 'Copy Breakdown for Parents / Sponsor',
    copiedText: 'Breakdown Copied to Clipboard!',
    tuitionDisclaimer: '*Excludes SUNY tuition differential billed by ITU/SUNY.',

    marketTag: 'Campus Peer Exchange',
    marketTitle: 'Senior-to-Junior Marketplace',
    marketSub:
      'Buy and pass down furniture, winter parkas, textbook bundles, and student cars locally in Binghamton, Buffalo, New Paltz, and NYC.',
    btnPostItem: '+ Post Item',
    searchPlaceholder: 'Search furniture, coats, desk, subleases, Honda Civic...',
    allLocations: 'All Locations',
    allCategories: 'All Categories',
    contactSeller: 'Contact Seller →',
    bySeller: 'By',

    close: 'Close',
    doneReading: 'Done Reading',
    verifiedSenior: 'Verified Senior Listing',
    chatWhatsapp: 'Chat on WhatsApp',
    emailMailto: 'Email via University Mail',
    safetyTip: 'Student Safety Tip: Always meet in public campus areas and pay via Zelle or cash after physical inspection.',
  },
};
