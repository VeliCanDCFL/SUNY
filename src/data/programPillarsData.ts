export interface MandatoryCourse {
  code: string;
  nameTr: string;
  nameEn: string;
  prereqChain: string;
  dangerLevel: 'high' | 'medium' | 'low';
  dangerReasonTr: string;
  dangerReasonEn: string;
}

export interface AcademicPreparation {
  mandatoryCourses: MandatoryCourse[];
  prerequisitesOverviewTr: string[];
  prerequisitesOverviewEn: string[];
  gpaTacticsTr: string[];
  gpaTacticsEn: string[];
  professorTipsTr: string[];
  professorTipsEn: string[];
}

export interface HousingComparisonItem {
  name: string;
  type: 'dorm' | 'off-campus';
  monthlyRent: string;
  distanceToCampus: string;
  prosTr: string[];
  prosEn: string[];
  consTr: string[];
  consEn: string[];
  verdictTr: string;
  verdictEn: string;
}

export interface BudgetItem {
  categoryTr: string;
  categoryEn: string;
  costUsd: number;
  frequencyTr: string;
  frequencyEn: string;
  noteTr: string;
  noteEn: string;
}

export interface TransitionLogistics {
  visaSteps: {
    step: number;
    titleTr: string;
    titleEn: string;
    descTr: string;
    descEn: string;
    criticalWarningTr?: string;
    criticalWarningEn?: string;
  }[];
  housingComparison: HousingComparisonItem[];
  annualBudgetEstimate: BudgetItem[];
}

export interface CptOptStep {
  phase: string;
  titleTr: string;
  titleEn: string;
  timelineTr: string;
  timelineEn: string;
  rulesTr: string[];
  rulesEn: string[];
}

export interface UsAcademicCareer {
  accreditationLogicTr: string[];
  accreditationLogicEn: string[];
  cptOptSteps: CptOptStep[];
  careerCenterGuide: {
    centerName: string;
    portalName: string;
    actionsTr: string[];
    actionsEn: string[];
    internshipTacticsTr: string[];
    internshipTacticsEn: string[];
    topHiringCompanies: string[];
  };
}

export interface ProgramPillarData {
  academicPrep: AcademicPreparation;
  transitionLogistics: TransitionLogistics;
  usAcademicCareer: UsAcademicCareer;
}

export const PROGRAM_PILLARS: Record<string, ProgramPillarData> = {
  // 1. İTÜ - Binghamton Endüstri Mühendisliği
  'itu-bing-ie': {
    academicPrep: {
      mandatoryCourses: [
        {
          code: 'MAT 101E / 102E',
          nameTr: 'Matematik I & II (Calculus)',
          nameEn: 'Calculus I & II',
          prereqChain: 'MAT 101E → MAT 102E → MAT 216 → END 311 (SSIE 340)',
          dangerLevel: 'high',
          dangerReasonTr: '1. sınıfta MAT 101E/102E verilmezse MAT 216 (Lineer Cebir) açılamaz; bu da Binghamton 2. yıldaki SSIE 340 dersini bloke eder.',
          dangerReasonEn: 'Failing Calculus blocks Linear Algebra (MAT 216) and subsequent Watson Operations Research (SSIE 340).',
        },
        {
          code: 'MAT 216',
          nameTr: 'Lineer Cebir (Linear Algebra)',
          nameEn: 'Linear Algebra (MATH 304)',
          prereqChain: 'MAT 102E → MAT 216 → END 311 & SSIE 340',
          dangerLevel: 'high',
          dangerReasonTr: 'Binghamton Yöneylem Araştırması (SSIE 340) dersinin doğrudan önşartıdır. Matris cebiri bilinmeden Simplex algoritması geçilemez.',
          dangerReasonEn: 'Direct prerequisite for Watson Deterministic OR (SSIE 340). Critical matrix foundation.',
        },
        {
          code: 'END 214',
          nameTr: 'Endüstriyel Olasılık ve İstatistik',
          nameEn: 'Applied Probability & Statistics (SSIE 305)',
          prereqChain: 'MAT 102E → END 214 → SSIE 360 (Simülasyon)',
          dangerLevel: 'medium',
          dangerReasonTr: 'Binghamton 2. sınıfta SSIE 305/360 benzetim derslerinin temeli. İTÜ’de dersi C altı alırsanız New York’ta sayılmaz.',
          dangerReasonEn: 'Foundation for Binghamton simulation and stochastic modeling. Minimum C required for transfer.',
        },
        {
          code: 'END 311 / 312',
          nameTr: 'Yöneylem Araştırması I & II',
          nameEn: 'Operations Research I & II (SSIE 340 / 341)',
          prereqChain: 'MAT 216 & END 214 → END 311 → END 312',
          dangerLevel: 'high',
          dangerReasonTr: 'Endüstri mühendisliğinin omurga dersidir. Binghamton ve İTÜ arasında çift kodlu denklik taşır, kalındığında mezuniyet 1 yıl sarkar.',
          dangerReasonEn: 'Core backbone of industrial engineering. Failing delays graduation by a full year.',
        },
        {
          code: 'END 331',
          nameTr: 'Benzetim (Simülasyon)',
          nameEn: 'Discrete-Event Simulation (SSIE 360)',
          prereqChain: 'END 214 & Bilgisayar Programlama → END 331',
          dangerLevel: 'medium',
          dangerReasonTr: 'Rockwell Arena yazılımı ile modellenir. Binghamton Watson laboratuvarlarında uygulamalı laboratuvar sınavı vardır.',
          dangerReasonEn: 'Arena simulation modeling. Requires solid computational and statistics background.',
        },
        {
          code: 'END 492',
          nameTr: 'Bitirme Tasarım Projesi (Senior Capstone)',
          nameEn: 'Senior Design Project I & II (SSIE 410 / 411)',
          prereqChain: 'END 311 + END 331 + 4. Yıl Statüsü → END 492',
          dangerLevel: 'high',
          dangerReasonTr: 'Lockheed Martin, Raymond Corp gibi ABD sanayi devleriyle yürütülen 1 yıllık şirket bitirme projesidir. İki üniversite ortak jüri onaylar.',
          dangerReasonEn: 'Year-long corporate-sponsored capstone. Joint evaluation by Watson faculty and ITU.',
        },
      ],
      prerequisitesOverviewTr: [
        'İTÜ-Binghamton İE müfredatında önşart zinciri çok katıdır: MAT 101E → MAT 102E → MAT 216 → END 311 zincirinde 1 ders bile kalırsa 2. sınıfta Binghamton’a gidişiniz riske girer.',
        '1. sınıf sonunda kümülatif CGPA barajı en az 2.50 olmalıdır. 2.50’nin altındaki öğrenciler Binghamton Watson Fakültesi tarafından kabul edilmeyip İTÜ’de intibak dönemine bırakılır.',
        'Önşart muafiyeti (Prerequisite Waiver) New York’ta neredeyse imkansızdır; Watson Akademik Danışmanları eksik önşartla üst ders kaydı açmaz.',
      ],
      prerequisitesOverviewEn: [
        'Strict prerequisite chain: MAT 101E → MAT 102E → MAT 216 → END 311 (SSIE 340). A failure in Year 1 disrupts Year 2 Watson transition.',
        'Minimum CGPA threshold is 2.50. Falling below prevents dispatch to New York.',
        'Prerequisite waivers are rarely granted by Watson Advising.',
      ],
      gpaTacticsTr: [
        'Ninova Ödevlerini Asla Atlamayın: İTÜ’deki derslerde Ninova ödevleri %20-30 ağırlığa sahiptir; quizler ve ödevler çan eğrisinde harf notunuzu doğrudan yükseltir.',
        'Çan Eğrisi (Relative Grading) Stratejisi: Vize ortalaması 35 olan bir derste 55 almak doğrudan BA/AA getirebilir. Sınav zor diye asla pes etmeyin.',
        'SAS ve Bilgisayar Laboratuvarları: END 214 ve programlama derslerinde laboratuvar devamlılığı %100 olmalıdır; vize öncesi geçmiş lab kodlarını çalışın.',
        'Dersten Çekilme (Withdrawal) Hakkı: Eğer bir dersten kalacağınız kesinleştiyse, final öncesi çekilme hakkını (W notu) kullanarak CGPA’inizi koruyun.',
      ],
      gpaTacticsEn: [
        'Never skip Ninova homework: Homework contributes 20-30% of total grade.',
        'Leverage the curve (çan eğrisi): In hard exams with a 35 class average, scoring 55 yields BA/AA.',
        'SAS and computing labs: 100% lab attendance is vital for applied statistics.',
        'Use the Course Withdrawal (W) strategically to shield your cumulative GPA.',
      ],
      professorTipsTr: [
        'Ders Kayıt Saati (Saat 10:00 Stratejisi): İTÜ SIS sisteminde ders kayıt sabahı saniyeler önemlidir. CRN listelerinizi önceden TXT dosyasına hazırlayın ve hızlıca kopyalayın.',
        'Hoca ve Şube Seçimi: İTÜ Sözlük ve üst sınıflardan hoca referansı alın. Proje ağırlıklı ve açık sınav formatı uygulayan hocaları tercih edin.',
        'Fotokopi ve Arşiv İncelemesi: Ayazağa ve Maçka fotokopicilerindeki son 5 yılın vize-final çıkmış sorularını mutlaka çözün; soru şablonları büyük oranda benzerdir.',
        'Ofis Saatleri (Office Hours): Hoca ve araştırma görevlilerinin ofis saatlerine gidip soru sormak hem konuyu pekiştirir hem de gelecekteki referans mektuplarınızın kapısını açar.',
      ],
      professorTipsEn: [
        'Registration Morning (10:00 AM rush): Have CRN codes pre-saved in a text document to register instantly on ITU SIS.',
        'Instructor feedback: Consult upperclassmen for grading transparency and exam predictability.',
        'Past exam archives: Review previous years midterms from department copy centers.',
        'Attend Office Hours: Builds strong faculty relationships for future recommendation letters.',
      ],
    },
    transitionLogistics: {
      visaSteps: [
        {
          step: 1,
          titleTr: 'I-20 Belgesi ve Finansal Teminat Yükleme',
          titleEn: 'I-20 Issuance & Financial Affidavit',
          descTr: 'Binghamton ISSS portalına en az 45.000$ likit bakiye gösteren banka mektubu ve noter onaylı sponsor taahhütnamesini yükleyin.',
          descEn: 'Upload bank statement ($45,000+ liquid balance) and notarized sponsor affidavit to Binghamton ISSS.',
          criticalWarningTr: 'Banka hesabı birinci derece akraba (anne/baba) adına olmalı; tapu veya arsa değil, çekilebilir nakit döviz/TL gösterilmelidir.',
          criticalWarningEn: 'Account must be under first-degree relatives with liquid accessible funds.',
        },
        {
          step: 2,
          titleTr: 'SEVIS I-901 Harcının Ödenmesi',
          titleEn: 'SEVIS I-901 Fee Payment',
          descTr: 'I-20 üzerindeki N00 numaranızla fmjfee.com üzerinden 350$ SEVIS ücretini yatırın ve onay makbuzunu (I-797) yazdırın.',
          descEn: 'Pay the $350 SEVIS fee via fmjfee.com using your SEVIS N-number and print form I-797.',
        },
        {
          step: 3,
          titleTr: 'DS-160 Formu ve Konsolosluk Randevusu',
          titleEn: 'DS-160 Form & Visa Appointment',
          descTr: 'ceac.state.gov adresinden DS-160 formunu doldurun. İstanbul İstinye veya Ankara konsolosluğundan F-1 vize mülakat günü alın.',
          descEn: 'Complete DS-160 on ceac.state.gov and book an F-1 appointment in Istanbul or Ankara.',
          criticalWarningTr: 'Randevu tarihi Temmuz-Ağustos’a sarkarsa, üniversite başlangıç tarihinize 60 gün kala Acil Randevu (Expedited Appointment) talep edin.',
          criticalWarningEn: 'If regular slots are late, file an Expedited Appointment request within 60 days of program start.',
        },
        {
          step: 4,
          titleTr: 'Konsolosluk Mülakatı ve Onay',
          titleEn: 'Consular Interview & Approval',
          descTr: 'Mülakatta İTÜ-Binghamton çift diploma programının prestijini ve mezuniyet sonrası Türkiye’ye dönüş planlarınızı net olarak açıklayın.',
          descEn: 'Articulate the ITU-Binghamton dual degree prestige and your intent to return to Turkey post-graduation.',
        },
      ],
      housingComparison: [
        {
          name: 'University Plaza (UP)',
          type: 'off-campus',
          monthlyRent: '$825 - $875 / ay',
          distanceToCampus: '5-7 dk (OCCT Green Shuttle)',
          prosTr: [
            'Türk SUNY öğrencilerinin %75’i burada kalır; sosyal ağ ve dayanışma çok güçlüdür.',
            'Daireler tamamen eşyalıdır (yatak, masa, koltuk, TV, mutfak aletleri hazır).',
            'Sitenin tam girişinde OCCT yeşil kampüs otobüs durağı vardır (ücretsiz ve 10 dk arayla).',
            'Vestal Parkway üzerinde alışveriş ve marketlere yürüme mesafesinde.',
          ],
          prosEn: [
            '75% of Turkish SUNY students reside here; top community and peer support.',
            'Fully furnished with bed, desk, living set, appliances.',
            'Direct on-site OCCT shuttle bus stop every 10 minutes.',
            'Walking distance to Vestal Parkway shopping and dining.',
          ],
          consTr: [
            'Kira sözleşmeleri 12 aylıktır; yazın Türkiye’ye dönseniz de kira ödenir (sublease aranması gerekir).',
            'Yoğun talep nedeniyle Mart-Nisan aylarında odalar tükenir.',
          ],
          consEn: [
            '12-month lease required; summer subleasing is necessary if returning to Turkey.',
            'High demand requires leasing early in March/April.',
          ],
          verdictTr: 'İTÜ Endüstri öğrencileri için tartışmasız en popüler, en rahat ve pratik seçenek.',
          verdictEn: 'The undisputed top recommendation for ITU IE students.',
        },
        {
          name: 'Hayes Student Living',
          type: 'off-campus',
          monthlyRent: '$730 - $790 / ay',
          distanceToCampus: '8-10 dk (OCCT Vestal Line)',
          prosTr: [
            'UP’ye göre aylık 80-100$ daha ekonomiktir.',
            'Daire içi oturma odaları ve mutfaklar oldukça ferahtır.',
            'Target, Walmart ve Wegmans süpermarketlerine çok yakındır.',
            'Sessiz ve ders çalışmaya uygun bir çevre sunar.',
          ],
          prosEn: [
            '$80-$100 cheaper monthly rent compared to UP.',
            'Spacious living rooms and floor plans.',
            'Proximity to Target, Walmart, and Wegmans.',
            'Quiet academic study atmosphere.',
          ],
          consTr: [
            'Gece geç saatlerdeki otobüs sıklığı UP kadar yoğun değildir.',
            'Sosyal etkinlikler ve Türk öğrenci yoğunluğu UP’ye kıyasla biraz daha düşüktür.',
          ],
          consEn: [
            'Late-night shuttle frequency is lower than UP.',
            'Slightly fewer Turkish student social gatherings.',
          ],
          verdictTr: 'Bütçesini korumak ve marketlere yakın ferah bir evde kalmak isteyenler için mükemmel alternatif.',
          verdictEn: 'Ideal budget-friendly option with spacious layouts near grocery stores.',
        },
        {
          name: 'U-Club Binghamton',
          type: 'off-campus',
          monthlyRent: '$890 - $960 / ay',
          distanceToCampus: '6-8 dk (Özel U-Club Shuttle & OCCT)',
          prosTr: [
            'Lüks öğrenci sitesi; ısıtmalı havuz, 24 saat açık fitness ve modern çalışma salonları.',
            'Bütün odalarda özel ebeveyn banyosu (private bathroom) bulunur.',
            'Paket teslim odası ve site içi güvenlik son derece gelişmiştir.',
          ],
          prosEn: [
            'Resort-style amenities: pool, 24/7 fitness, study lounges.',
            'Every bedroom features an en-suite private bathroom.',
            'High security and advanced package management.',
          ],
          consTr: [
            'Binghamton bölgesindeki en yüksek kira bedellerinden birine sahiptir.',
            'Fiyat/performans açısından UP ve Hayes’e göre daha pahalıdır.',
          ],
          consEn: [
            'Highest price point in the Vestal/Binghamton area.',
            'Lower price-to-performance compared to UP or Hayes.',
          ],
          verdictTr: 'Özel banyo ve lüks rezidans konforu arayanlar için en üst düzey tercih.',
          verdictEn: 'Premier choice for students desiring private baths and luxury amenities.',
        },
        {
          name: 'Twin River Commons / 20 Hawley (Downtown)',
          type: 'off-campus',
          monthlyRent: '$880 - $940 / ay',
          distanceToCampus: '15-20 dk (OCCT Downtown DCL / DDC)',
          prosTr: [
            'Binghamton Downtown merkezinde, kafeler, restoranlar ve gece hayatının ortasında.',
            'BU Downtown Center (UDC) binasının tam karşısındadır.',
            'Daireler modern ve kapalı otopark imkanı vardır.',
          ],
          prosEn: [
            'Located in downtown Binghamton amidst cafes, dining, and nightlife.',
            'Directly across from BU Downtown Center (UDC).',
            'Modern finishes and covered parking options.',
          ],
          consTr: [
            'Ana kampüse (Watson Mühendislik) otobüsle 15-20 dakika sürer.',
            'Vestal Parkway’deki büyük marketlere uzaktır.',
          ],
          consEn: [
            '15-20 minute bus ride to Watson main engineering quad.',
            'Farther away from Vestal shopping centers.',
          ],
          verdictTr: 'Şehir merkezi hareketliliğini seven ve ana kampüse otobüsle gitmeyi dert etmeyenler için ideal.',
          verdictEn: 'Great for urban-minded students preferring downtown vibes.',
        },
        {
          name: 'On-Campus Dorms (Mountainview / Dickinson / Newing)',
          type: 'dorm',
          monthlyRent: '$1,050 - $1,250 / ay (Dönemlik paket)',
          distanceToCampus: '0 dk (Kampüs İçi)',
          prosTr: [
            'Mühendislik binalarına yürüyerek 3 dakikada ulaşım; kış aylarında kar fırtınasında büyük rahatlık.',
            'Amerikalı öğrencilerle kaynaşmak ve İngilizce pratiği için harika bir ortam.',
            'Tüm faturalar, internet ve temizlik hizmeti fiyata dahildir.',
          ],
          prosEn: [
            '3-minute walk to Watson classrooms; immune to winter snow storms.',
            'Maximum immersion with American freshmen/sophomores for English mastery.',
            'All utilities, high-speed ethernet, and maintenance included.',
          ],
          consTr: [
            'Zorunlu Yemek Planı (Meal Plan) alınması gerekir; bu da dönemlik ekstra $2,800+ maliyet demektir.',
            'Kendi yemeğinizi pişirme imkanı çok kısıtlıdır; oda paylaşımı genellikle 2 kişiliktir.',
            'Yaz tatili ve ara tatillerde yurtlar kapatılabilir.',
          ],
          consEn: [
            'Mandatory expensive Meal Plan ($2,800+/sem) required.',
            'Limited private cooking facilities; shared double rooms.',
            'Residence halls close during winter/summer breaks.',
          ],
          verdictTr: 'Kampüsten ayrılmak istemeyenler için pratik ama zorunlu meal plan yüzünden en pahalı seçenek.',
          verdictEn: 'Convenient zero-commute option, but costliest due to required meal plans.',
        },
      ],
      annualBudgetEstimate: [
        {
          categoryTr: 'SUNY Binghamton Harç ve Akademik Ücretler',
          categoryEn: 'SUNY Binghamton Tuition & Fees',
          costUsd: 18500,
          frequencyTr: 'Yıllık (2 Dönem Toplamı)',
          frequencyEn: 'Annual (2 Semesters)',
          noteTr: 'İTÜ-SUNY anlaşmalı indirimli eyalet harcı bedelidir.',
          noteEn: 'Discounted dual-degree international rate under ITU agreement.',
        },
        {
          categoryTr: 'SUNY Zorunlu Uluslararası Sağlık Sigortası',
          categoryEn: 'Mandatory International Health Insurance',
          costUsd: 2700,
          frequencyTr: 'Yıllık (Güz 1350$ + Bahar 1350$)',
          frequencyEn: 'Annual ($1,350 Fall + $1,350 Spring)',
          noteTr: 'F-1 vizesi için zorunludur; feragat edilemez (waiver kabul edilmez).',
          noteEn: 'Strictly mandatory for F-1 status; cannot be waived.',
        },
        {
          categoryTr: 'Konaklama / Ev Kirası (Örn: UP veya Hayes)',
          categoryEn: 'Housing / Off-Campus Rent (UP or Hayes)',
          costUsd: 8400,
          frequencyTr: '10-12 Aylık Kira ($700-800/ay)',
          frequencyEn: '10-12 Months ($700-$800/mo)',
          noteTr: 'Oda arkadaşlarıyla paylaşımlı 4+2 veya 4+4 eşyalı daire kirası.',
          noteEn: 'Shared 4-bedroom student apartment with utilities.',
        },
        {
          categoryTr: 'Market & Yeme-İçme Masrafları',
          categoryEn: 'Groceries & Food Expenses',
          costUsd: 3600,
          frequencyTr: 'Yıllık (~$360/ay)',
          frequencyEn: 'Annual (~$360/mo)',
          noteTr: 'Wegmans, Walmart ve Aldi alışverişleri ile evde yemek pişirme.',
          noteEn: 'Cooking at home shopping at Wegmans, Walmart, and Aldi.',
        },
        {
          categoryTr: 'Gidiş-Dönüş Uçak Biletleri (THY / JFK)',
          categoryEn: 'Roundtrip Flights (Istanbul → JFK)',
          costUsd: 1500,
          frequencyTr: 'Yıllık (Yaz ve Dönem Başı)',
          frequencyEn: 'Annual',
          noteTr: 'İstanbul - New York JFK direkt uçuş ve Binghamton shuttle transferi.',
          noteEn: 'Direct flight plus airport bus/carpool to Binghamton.',
        },
        {
          categoryTr: 'Kitap, Yazılım ve Kurs Materyalleri',
          categoryEn: 'Books, Software & Supplies',
          costUsd: 800,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'Mühendislik ders kitapları ve yazılım lisansları.',
          noteEn: 'Engineering textbooks and licensed software.',
        },
        {
          categoryTr: 'Telefon Hattı ve Kişisel Harcamalar',
          categoryEn: 'Mobile Plan & Personal Expenses',
          costUsd: 1200,
          frequencyTr: 'Yıllık ($100/ay)',
          frequencyEn: 'Annual ($100/mo)',
          noteTr: 'Mint Mobile / T-Mobile hattı, kışlık mont ve kişisel ihtiyaçlar.',
          noteEn: 'Mobile plan (Mint/T-Mobile) and general expenses.',
        },
      ],
    },
    usAcademicCareer: {
      accreditationLogicTr: [
        'Watson College ABET Akreditasyonu: Binghamton Endüstri Mühendisliği programı ABET akreditasyonuna sahiptir ve ABD mühendislik odaları tarafından tam yetkinlikle tanınır.',
        'Asgari "C" (2.00) Notu Kuralı: İTÜ’de aldığınız bir dersin Binghamton’a intibak edilebilmesi için harf notunun en az "C" olması zorunludur. İTÜ’de geçer sayılan "D" veya "DC" notları ABD’de sayılmaz ve dersi New York’ta tekrar almak zorunda kalırsınız.',
        'GPA Sıfırlanma Mantığı: İTÜ’deki derslerinizin kredisi Binghamton transkriptinize "Transfer Credit (CR)" olarak geçer; Türkiye’deki sayısal notlarınız Binghamton GPA’inize eklenmez. New York’a gittiğinizde Binghamton yerel not ortalamanız 0.00’dan başlar!',
        'Çift Diploma Mezuniyet Şartı: Hem İTÜ’nün (en az 2.00 CGPA) hem de Binghamton University’nin (en az 2.00 Watson GPA) mezuniyet barajını tamamlamanız gerekir.',
      ],
      accreditationLogicEn: [
        'Watson ABET Accreditation: Nationally recognized engineering excellence.',
        'Minimum "C" (2.00) rule: Transferred credits require grade C or higher. D/DC grades do not transfer.',
        'GPA Fresh Slate: Turkish grades transfer as credits (CR) without numeric weight; your Binghamton local GPA starts fresh.',
        'Dual Graduation Threshold: You must satisfy graduation rules at both ITU (2.00+) and Binghamton (2.00+).',
      ],
      cptOptSteps: [
        {
          phase: '1. Aşama',
          titleTr: '1 Tam Akademik Yıl (2 Dönem) F-1 Şartı',
          titleEn: '1 Full Academic Year in F-1 Status',
          timelineTr: '2. Yılın Sonu (Güz + Bahar Tamamlandıktan Sonra)',
          timelineEn: 'End of Year 2 (Post Fall + Spring in USA)',
          rulesTr: [
            'ABD göçmenlik yasalarına göre CPT (staj izni) alabilmek için ABD’de en az 2 ardışık dönem tam zamanlı (Full-Time) öğrenci statüsünde kayıtlı olmanız şarttır.',
            '2. sınıfı Binghamton’da bitirdikten sonra yaz döneminde yasal olarak CPT ile staj yapma hakkı kazanırsınız.',
          ],
          rulesEn: [
            'USCIS requires 2 consecutive full-time semesters in the US before CPT authorization.',
            'Qualifies you for summer internships between Year 2 and Year 3.',
          ],
        },
        {
          phase: '2. Aşama',
          titleTr: 'CPT Staj Dersi Kaydı & İş Teklifi',
          titleEn: 'CPT Course Registration & Job Offer Letter',
          timelineTr: 'Staj Başlamadan 30 Gün Önce',
          timelineEn: '30 Days Prior to Internship',
          rulesTr: [
            'Şirketten resmi staj teklif mektubu (Job Offer Letter) alınır; mektupta haftalık çalışma saati (en fazla 40 saat/yaz) ve görev tanımı yazmalıdır.',
            'Watson SSIE 395/495 staj dersine kayıt yaptırılır.',
            'Binghamton ISSS ofisi I-20 belgenizin 2. sayfasına CPT onayını işler. CPT yazılı yeni I-20 çıkmadan çalışmaya BAŞLANAMAZ.',
          ],
          rulesEn: [
            'Secure official written job offer detailing hours and duties.',
            'Enroll in Watson SSIE 395/495 internship course.',
            'Obtain CPT endorsement on page 2 of Form I-20 before commencing work.',
          ],
        },
        {
          phase: '3. Aşama',
          titleTr: 'OPT (Optional Practical Training) - 12 Ay Standart İzin',
          titleEn: 'OPT Standard Post-Completion (12 Months)',
          timelineTr: '4. Yılın Son Dönemi (Mezuniyete 90 Gün Kala)',
          timelineEn: 'Final Semester (90 Days Prior to Graduation)',
          rulesTr: [
            'Mezuniyet tarihinize 90 gün kala USCIS’e Form I-765 ile OPT başvurusu yapılır ($470 başvuru harcı).',
            'Başvuru sonrası yaklaşık 60-90 gün içinde çalışma kartınız (EAD - Employment Authorization Document) adresinize postalanır.',
            'Mezuniyet sonrası 90 gün iş arama süreniz vardır; bu sürede iş bulmanız gerekir.',
          ],
          rulesEn: [
            'Submit Form I-765 to USCIS up to 90 days before program completion ($470 fee).',
            'Receive EAD card via mail within 60-90 days.',
            '90-day allowable unemployment window post-graduation.',
          ],
        },
        {
          phase: '4. Aşama',
          titleTr: 'STEM OPT Uzatması (+24 Ay, Toplam 36 Ay Çalışma İzni)',
          titleEn: 'STEM OPT Extension (+24 Months, 36 Total)',
          timelineTr: 'İlk 12 Aylık OPT Bitimine 90 Gün Kala',
          timelineEn: '90 Days Before Initial 12-Month OPT Expires',
          rulesTr: [
            'İTÜ-Binghamton Endüstri Mühendisliği resmi bir STEM programıdır (CIP Kodu: 14.3501).',
            'İlk 12 aylık OPT bitmeden Form I-983 Mentorluk Planı doldurulur ve işverenin E-Verify sistemine kayıtlı olması gerekir.',
            'Onaylandığında +24 ay ek çalışma izni verilir; toplamda 3 tam yıl ABD’de yasal olarak çalışabilirsiniz.',
            'Bu 3 yıl içinde şirketiniz adınıza H-1B çalışma vizesi veya Green Card çekilişine başvurabilir.',
          ],
          rulesEn: [
            'Binghamton IE is an officially designated STEM degree (CIP Code 14.3501).',
            'File Form I-983 with an E-Verify registered employer.',
            'Yields total 36 months of full legal US work authorization.',
            'Enables multiple H-1B lottery application attempts while employed.',
          ],
        },
        {
          phase: '5. Aşama',
          titleTr: 'SSN (Sosyal Güvenlik Numarası) Çıkarma',
          titleEn: 'Social Security Number (SSN) Procurement',
          timelineTr: 'İş veya Kampüs İşi Teklifi Aldıktan Hemen Sonra',
          timelineEn: 'Immediately Upon Job Offer',
          rulesTr: [
            'Vestal Parkway üzerindeki Social Security Administration (SSA) ofisinden randevu alınır.',
            'Pasaport, F-1 vizesi, I-94 giriş formu, iş teklif mektubu ve ISSS destek yazısı ile başvurulur; SSN kartı 2 hafta içinde posta kutunuza gelir.',
          ],
          rulesEn: [
            'Visit Binghamton/Vestal SSA office with passport, I-20, I-94, and offer letter.',
            'SSN card arrives within 10-14 business days for payroll processing.',
          ],
        },
      ],
      careerCenterGuide: {
        centerName: 'Fleishman Center for Career and Professional Development',
        portalName: 'hireBING by Handshake',
        actionsTr: [
          'hireBING Profilinizi İlk Hafta Oluşturun: Binghamton e-postanızla giriş yapıp profilinizi %100 doldurun; Watson mühendislik filtrelerini açın.',
          '1 Sayfalık Amerikan Tipi ATS Resume: Türk CV formatını (fotoğraf, doğum tarihi, medeni durum) kesinlikle kullanmayın. Fleishman Center danışmanlarına randevu alıp CV’nizi ATS (Applicant Tracking System) uyumlu hale getirin.',
          'Güz ve Bahar Kariyer Fuarları (Job Fair): Eylül ve Şubat aylarında Events Center’da düzenlenen dev kariyer fuarlarına takım elbiseyle katılın; her şirket için 30 saniyelik asansör konuşması (Elevator Pitch) hazırlayın.',
          'Watson Career Connections: Mühendislik fakültesine özel staj etkinlikleri ve teknik mülakat hazırlık (LeetCode / Case Study) seminerlerine katılın.',
        ],
        actionsEn: [
          'Activate hireBING Handshake profile during week 1 with complete engineering tags.',
          'Craft a 1-page US ATS resume: remove photo, birth date, and personal info.',
          'Attend Fall and Spring Job Fairs in professional business attire with elevator pitches ready.',
          'Utilize Watson Career Connections for engineering mock interviews and technical case preps.',
        ],
        internshipTacticsTr: [
          'Bölgesel Sanayi Devlerine Odaklanın: New York Upstate bölgesinde Binghamton öğrencilerine öncelik veren Lockheed Martin (Owego), Raymond Corp (Greene), BAE Systems (Endicott) ve Amphenol gibi dev şirketler her yıl onlarca stajyer alır.',
          'Türk Mezun Ağı (LinkedIn): LinkedIn’de "Binghamton University + ITU" araması yaparak New York, New Jersey ve Boston’da çalışan kıdemli mezunlara ulaşın ve kahve sohbeti (Informational Interview) talep edin.',
          'Referans (Referral) Alın: Soğuk başvuru yerine içeride çalışan mezunlar üzerinden başvuru yapmak mülakat şansınızı 5 katına çıkarır.',
        ],
        internshipTacticsEn: [
          'Target upstate giants: Lockheed Martin Owego, Raymond Corp Greene, BAE Systems Endicott, Amphenol.',
          'Leverage the Turkish Binghamton Alumni network on LinkedIn across NY, NJ, Boston.',
          'Internal referrals yield 5x higher interview call-back rates than cold applications.',
        ],
        topHiringCompanies: [
          'Lockheed Martin',
          'The Raymond Corporation (Toyota Group)',
          'BAE Systems',
          'Bloomberg LP',
          'Deloitte Consulting',
          'EY (Ernst & Young)',
          'Amazon Fulfillment Systems',
          'Amphenol Aerospace',
        ],
      },
    },
  },

  // 2. İTÜ - Binghamton Bilişim Sistemleri / CS
  'itu-bing-cs': {
    academicPrep: {
      mandatoryCourses: [
        {
          code: 'BLG 102E',
          nameTr: 'Bilimsel Hesaplamaya Giriş (C/C++)',
          nameEn: 'Intro to Scientific Computing (C/C++)',
          prereqChain: 'BLG 102E → BLG 233E (Veri Yapıları) → CS 220/240',
          dangerLevel: 'high',
          dangerReasonTr: 'Pointer aritmetiği ve bellek yönetimi içerir. Bu dersi geçemezseniz Veri Yapıları dersi açılmaz ve New York CS geçişi durur.',
          dangerReasonEn: 'Pointer mechanics and memory management. Core gateway to Data Structures.',
        },
        {
          code: 'BLG 233E',
          nameTr: 'Veri Yapıları ve Algoritmalar',
          nameEn: 'Data Structures and Algorithms',
          prereqChain: 'BLG 102E → BLG 233E → CS 240 & CS 350',
          dangerLevel: 'high',
          dangerReasonTr: 'Tüm yazılım mülakatlarının ve Watson CS bölümünün en kritik dersidir. Ağaçlar, graflar ve karmaşıklık analizi öğretilir.',
          dangerReasonEn: 'Single most critical course for coding interviews and upper-level Watson CS.',
        },
        {
          code: 'MAT 216',
          nameTr: 'Lineer Cebir',
          nameEn: 'Linear Algebra',
          prereqChain: 'MAT 102E → MAT 216 → CS 375 & AI Lab',
          dangerLevel: 'medium',
          dangerReasonTr: 'Yapay zeka, makine öğrenmesi ve grafik algoritmaları için zorunlu matematik altyapısıdır.',
          dangerReasonEn: 'Essential foundation for AI, Machine Learning, and Graphics courses.',
        },
      ],
      prerequisitesOverviewTr: [
        'Watson CS programı kodlama derslerinde sıfır tolerans uygular; kod intihali (MOSS benzerlik tespiti) doğrudan dersten kalma ve disiplin cezası sebebidir.',
        'BLG 102E ve BLG 233E derslerinin İTÜ’de mutlaka en az B- seviyesinde bitirilmesi Binghamton’daki ileri düzey algoritma dersleri için şiddetle tavsiye edilir.',
      ],
      prerequisitesOverviewEn: [
        'Zero tolerance on code plagiarism via MOSS detectors at Watson CS.',
        'Aim for B- or higher in BLG 102E and BLG 233E prior to upper-level Binghamton CS classes.',
      ],
      gpaTacticsTr: [
        'Git ve GitHub Temelleri: Tüm ödevleri Git üzerinden sürüm kontrolüyle yapın. Kodlama ödevlerini son geceye bırakmayın; compile hataları notu sıfırlar.',
        'Haftalık LeetCode Pratiği: 1. sınıftan itibaren haftada en az 2-3 LeetCode Easy/Medium problemi çözerek algoritma vizelerine hazırlanın.',
      ],
      gpaTacticsEn: [
        'Version control early: Commit clean code with Git and test edge cases.',
        'Weekly LeetCode: Practice 2-3 problems weekly to master midterm algorithm questions.',
      ],
      professorTipsTr: [
        'Proje odaklı araştırma görevlilerini tercih edin. Lab asistanlarıyla iyi iletişim kurmak hata ayıklama (debugging) sürecinde hayat kurtarır.',
      ],
      professorTipsEn: [
        'Engage actively with lab TAs; building debugging rapport saves massive time.',
      ],
    },
    transitionLogistics: {
      visaSteps: [
        {
          step: 1,
          titleTr: 'I-20 ve Yazılım Portfolyosu Hazırlığı',
          titleEn: 'I-20 Issuance & GitHub Portfolio',
          descTr: 'Finansal belgeleri yükleyin ve vize sürecinde aktif GitHub projelerinizi güncel tutun.',
          descEn: 'Submit liquid financial proof and maintain an active GitHub profile.',
        },
        {
          step: 2,
          titleTr: 'DS-160 ve SEVIS Ödemesi',
          titleEn: 'DS-160 & SEVIS $350 Fee',
          descTr: 'SEVIS harcını ödeyip F-1 randevunuzu alın. Bilgisayar mühendisliği öğrencilerine TAL (Technology Alert List) sorusu gelebileceği için araştırma alanınızı sivil yazılım olarak açıklayın.',
          descEn: 'Pay SEVIS fee and state research intent clearly as civil software/web systems.',
        },
      ],
      housingComparison: [
        {
          name: 'University Plaza (UP)',
          type: 'off-campus',
          monthlyRent: '$825 - $875 / ay',
          distanceToCampus: '5-7 dk (OCCT Shuttle)',
          prosTr: ['Yüksek hızlı fiber internet, grup çalışma odaları, CS öğrencileriyle hackathon ve proje dayanışması.'],
          prosEn: ['High-speed internet, study hubs, ideal for collaborative programming.'],
          consTr: ['12 aylık kira taahhüdü.'],
          consEn: ['12-month lease commitment.'],
          verdictTr: 'CS öğrencileri için ortak proje yapmak adına en verimli ortam.',
          verdictEn: 'Top environment for collaborative software building.',
        },
        {
          name: 'Hayes Student Living',
          type: 'off-campus',
          monthlyRent: '$730 - $790 / ay',
          distanceToCampus: '8-10 dk (OCCT)',
          prosTr: ['Sessiz ve geniş odalar, evde konsantre kod yazmak için ideal.'],
          prosEn: ['Quiet spacious setting for focused programming.'],
          consTr: ['Gece otobüsleri daha seyrek.'],
          consEn: ['Fewer night shuttles.'],
          verdictTr: 'Daha uygun fiyatlı ve sessiz alternatif.',
          verdictEn: 'Cost-effective quiet alternative.',
        },
      ],
      annualBudgetEstimate: [
        {
          categoryTr: 'SUNY Binghamton Harç ve Ücretler',
          categoryEn: 'Tuition & Fees',
          costUsd: 18500,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'İTÜ-SUNY ortaklık tarifesi.',
          noteEn: 'Dual-degree international tuition.',
        },
        {
          categoryTr: 'Zorunlu Sağlık Sigortası',
          categoryEn: 'Mandatory Health Insurance',
          costUsd: 2700,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'Zorunlu uluslararası poliçe.',
          noteEn: 'Mandatory international student policy.',
        },
        {
          categoryTr: 'Kira ve Faturalar',
          categoryEn: 'Rent & Utilities',
          costUsd: 8400,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'Öğrenci dairesi.',
          noteEn: 'Furnished apartment.',
        },
        {
          categoryTr: 'Yemek ve Genel Giderler',
          categoryEn: 'Food & Groceries',
          costUsd: 4000,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'Evde beslenme ve market.',
          noteEn: 'Groceries and food expenses.',
        },
      ],
    },
    usAcademicCareer: {
      accreditationLogicTr: [
        'Watson CS derslerinde C altı notlar intibak edilmez.',
        'Transfer kredileri Binghamton GPA’ini etkilemez.',
      ],
      accreditationLogicEn: [
        'C or higher strictly required for CS credits.',
        'Transfer grades do not compute into Binghamton numeric GPA.',
      ],
      cptOptSteps: [
        {
          phase: '1. Aşama',
          titleTr: 'CPT ile Yazılım Stajı (2. Yıl Sonu)',
          titleEn: 'CPT Software Internship (End of Year 2)',
          timelineTr: 'Mayıs - Ağustos',
          timelineEn: 'May - August',
          rulesTr: ['2 akademik dönemi tamamladıktan sonra New York veya uzaktan ABD yazılım şirketlerinde yasal CPT stajı.'],
          rulesEn: ['Eligible for full-time summer software engineering internships in the US.'],
        },
        {
          phase: '2. Aşama',
          titleTr: '36 Ay (3 Yıl) STEM OPT Hakkı',
          titleEn: '36-Month STEM OPT Authorization',
          timelineTr: 'Mezuniyet Sonrası',
          timelineEn: 'Post-Graduation',
          rulesTr: ['12 ay normal OPT + 24 ay STEM uzatması ile Big Tech ve FinTech şirketlerinde çalışma izni.'],
          rulesEn: ['12 months OPT + 24 months STEM extension at E-Verify tech companies.'],
        },
      ],
      careerCenterGuide: {
        centerName: 'Fleishman Center & Watson Career Connections',
        portalName: 'hireBING by Handshake',
        actionsTr: ['GitHub portfolyosu linkini resume’ye ekleyin, hackathonlara katılın, LeetCode çözümlerini düzenli tutun.'],
        actionsEn: ['Include active GitHub and live deployed demo links on ATS resume.'],
        internshipTacticsTr: ['New York City FinTech şirketleri ve Upstate savunma sanayii yazılım ekipleri.'],
        internshipTacticsEn: ['NYC FinTech startups and Upstate defense software divisions.'],
        topHiringCompanies: ['Google', 'Amazon', 'Bloomberg LP', 'Microsoft', 'Lockheed Martin Software', 'JPMorgan Chase'],
      },
    },
  },

  // 3. İTÜ - SUNY Buffalo İnşaat Mühendisliği
  'itu-buff-civil': {
    academicPrep: {
      mandatoryCourses: [
        {
          code: 'INS 211',
          nameTr: 'Mukavemet (Strength of Materials)',
          nameEn: 'Strength of Materials (CIE 334)',
          prereqChain: 'STATİK → INS 211 → CIE 341 & CIE 400 Serisi',
          dangerLevel: 'high',
          dangerReasonTr: 'İnşaat mühendisliğinin temel taşıdır. Geçilmezse yapı statiği ve betonarme dersleri açılamaz.',
          dangerReasonEn: 'Structural foundation; failure blocks all advanced structural design courses.',
        },
        {
          code: 'INS 321',
          nameTr: 'Akışkanlar Mekaniği (Fluid Mechanics)',
          nameEn: 'Fluid Mechanics (CIE 340)',
          prereqChain: 'FİZ 101E & MAT 102E → INS 321',
          dangerLevel: 'medium',
          dangerReasonTr: 'Buffalo’daki su kaynakları ve çevre mühendisliği modülleri için önşarttır.',
          dangerReasonEn: 'Prerequisite for water resources and environmental engineering tracks.',
        },
      ],
      prerequisitesOverviewTr: [
        'SUNY Buffalo SEAS (School of Engineering and Applied Sciences) deprem ve yapı mühendisliğinde dünyanın en iyi araştırma merkezlerinden biridir.',
        'En az 2.50 CGPA barajı korunmalıdır.',
      ],
      prerequisitesOverviewEn: [
        'UB SEAS is world-renowned for earthquake engineering and shake-table testing.',
        'Maintain a minimum 2.50 CGPA threshold.',
      ],
      gpaTacticsTr: ['Mukavemet ve statik derslerinde formül ezberlemek yerine serbest cisim diyagramı (FBD) çizmeyi kusursuzlaştırın.'],
      gpaTacticsEn: ['Master free body diagrams (FBD) and equilibrium concepts thoroughly.'],
      professorTipsTr: ['İTÜ İnşaat Fakültesi çıkmış soru arşivlerini Maçka ve Ayazağa’dan edinin; problem tipleri genellikle standarttır.'],
      professorTipsEn: ['Acquire previous exam archives; problem architectures are highly standardized.'],
    },
    transitionLogistics: {
      visaSteps: [
        {
          step: 1,
          titleTr: 'I-20 ve Buffalo Finansal Belgeleri',
          titleEn: 'I-20 and Buffalo Financial Verification',
          descTr: 'UB Uluslararası Öğrenci Ofisine banka hesap dökümü ve sponsor onayını iletin.',
          descEn: 'Submit required liquid proof to UB International Student Services.',
        },
      ],
      housingComparison: [
        {
          name: 'Villas on Rensch / Sweethome',
          type: 'off-campus',
          monthlyRent: '$780 - $840 / ay',
          distanceToCampus: '3-5 dk (UB Stampede Shuttle)',
          prosTr: ['UB North Kampüsün hemen karşısında, ücretsiz UB Stampede otobüsleriyle kampüse ring sefer.'],
          prosEn: ['Directly adjacent to UB North Campus, free UB Stampede bus loop.'],
          consTr: ['Kışın Buffalo kar fırtınalarında otobüs bekleme soğuk olabilir.'],
          consEn: ['Snowy Buffalo winters require solid winter gear at bus stops.'],
          verdictTr: 'İTÜ İnşaat öğrencileri için en popüler ve konforlu yerleşke.',
          verdictEn: 'Primary choice for ITU Civil Engineering students at UB.',
        },
      ],
      annualBudgetEstimate: [
        {
          categoryTr: 'SUNY Buffalo Harç ve Ücretler',
          categoryEn: 'Tuition & Fees',
          costUsd: 19200,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'UB Mühendislik lisans harcı.',
          noteEn: 'UB engineering international tuition.',
        },
        {
          categoryTr: 'Sağlık Sigortası & Barınma',
          categoryEn: 'Insurance & Housing',
          costUsd: 10500,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'UB sigorta ve Sweethome kira tahmini.',
          noteEn: 'UB insurance and student apartment rent.',
        },
      ],
    },
    usAcademicCareer: {
      accreditationLogicTr: ['Buffalo SEAS ABET akreditasyonuna sahiptir. C altı harf notları intibak edilmez.'],
      accreditationLogicEn: ['Buffalo SEAS is fully ABET accredited; minimum C grade for course transfers.'],
      cptOptSteps: [
        {
          phase: '1. Aşama',
          titleTr: '36 Ay STEM OPT & FE Sınavı',
          titleEn: '36-Month STEM OPT & FE Exam',
          timelineTr: 'Mezuniyet Öncesi ve Sonrası',
          timelineEn: 'Pre and Post Graduation',
          rulesTr: ['İnşaat mühendisliği mezunları 3 yıllık STEM OPT hakkına sahiptir. Mezuniyet öncesi FE (Fundamentals of Engineering) sınavını geçmek ABD’de imza yetkisinin ilk adımıdır.'],
          rulesEn: ['Qualifies for 3-year STEM OPT. Passing the FE exam is key for EIT licensing.'],
        },
      ],
      careerCenterGuide: {
        centerName: 'UB Career Design Center',
        portalName: 'Bullseye powered by Handshake',
        actionsTr: ['Bullseye üzerinden inşaat fuarına kayıt olun; Turner Construction, Skanska gibi firmalarla mülakat ayarlayın.'],
        actionsEn: ['Attend UB Engineering Career Fair and network with major contractors.'],
        internshipTacticsTr: ['New York Eyaleti Ulaştırma Bakanlığı (NYSDOT) projeleri ve altyapı müteahhitleri.'],
        internshipTacticsEn: ['Target NYSDOT infrastructure projects and general engineering contractors.'],
        topHiringCompanies: ['Turner Construction', 'Skanska USA', 'AECOM', 'Stantec', 'ARUP'],
      },
    },
  },

  // 4. İTÜ - SUNY New Paltz İşletme
  'itu-np-bus': {
    academicPrep: {
      mandatoryCourses: [
        {
          code: 'ISL 101',
          nameTr: 'Genel İşletme',
          nameEn: 'Intro to Business & Management',
          prereqChain: 'ISL 101 → BUS 201 → Strategic Management',
          dangerLevel: 'low',
          dangerReasonTr: 'İşletme temel prensiplerini verir; C ve üzeri not şarttır.',
          dangerReasonEn: 'Core business fundamentals.',
        },
        {
          code: 'ISL 204',
          nameTr: 'Finansal Muhasebe',
          nameEn: 'Financial Accounting (ACC 201)',
          prereqChain: 'ISL 204 → Yönetim Muhasebesi & Finans',
          dangerLevel: 'medium',
          dangerReasonTr: 'New Paltz AACSB akreditasyonunda muhasebe zincirinin anahtarıdır.',
          dangerReasonEn: 'Backbone for corporate finance courses at New Paltz School of Business.',
        },
      ],
      prerequisitesOverviewTr: ['New Paltz School of Business AACSB akreditasyonuna sahiptir. CGPA barajı en az 2.50 olmalıdır.'],
      prerequisitesOverviewEn: ['AACSB accredited business curriculum requiring 2.50+ CGPA.'],
      gpaTacticsTr: ['Vaka analizleri (Case Studies) ve sınıf içi katılım notun %20-30’unu oluşturur; derste aktif söz alın.'],
      gpaTacticsEn: ['Class participation and Harvard Business cases make up 25% of final grading.'],
      professorTipsTr: ['Proje sunumlarında profesyonel slayt tasarımı ve veri görselleştirmeye özen gösterin.'],
      professorTipsEn: ['Focus on clean presentation visuals and executive summaries.'],
    },
    transitionLogistics: {
      visaSteps: [
        {
          step: 1,
          titleTr: 'I-20 ve New Paltz Kabul İşlemleri',
          titleEn: 'I-20 and New Paltz Onboarding',
          descTr: 'İşletme Fakültesi koordinatörlüğü aracılığıyla I-20 teminatını yükleyin.',
          descEn: 'Submit financial affidavit for New Paltz I-20 issuance.',
        },
      ],
      housingComparison: [
        {
          name: 'Village Walk / Huguenot Apartments',
          type: 'off-campus',
          monthlyRent: '$830 - $890 / ay',
          distanceToCampus: '5-10 dk (Yürüme Mesafesi)',
          prosTr: ['Tarihi New Paltz kasaba merkezinde, kütüphaneye ve sınıflara yürüme mesafesinde.'],
          prosEn: ['Walkable historic college town, steps to campus library and cafes.'],
          consTr: ['Küçük bir kasaba olduğu için kiralık ev sayısı sınırlıdır.'],
          consEn: ['Limited rental inventory in a small boutique college town.'],
          verdictTr: 'New Paltz’ta araba ihtiyacı olmadan rahatça yaşamak için en pratik seçenek.',
          verdictEn: 'Best walkable option with zero car dependency.',
        },
      ],
      annualBudgetEstimate: [
        {
          categoryTr: 'SUNY New Paltz Harç ve Ücretler',
          categoryEn: 'Tuition & Fees',
          costUsd: 17800,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'İTÜ indirimli eyalet harcı.',
          noteEn: 'Discounted international business tuition.',
        },
        {
          categoryTr: 'Barınma, Beslenme ve Sigorta',
          categoryEn: 'Living & Insurance',
          costUsd: 12500,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'Kira, sigorta ve kişisel harcamalar.',
          noteEn: 'Rent, insurance, and groceries.',
        },
      ],
    },
    usAcademicCareer: {
      accreditationLogicTr: ['AACSB onaylı çift diploma. Minimum C harf notu transfer şartıdır.'],
      accreditationLogicEn: ['AACSB accredited dual degree. Minimum C required for credit transfer.'],
      cptOptSteps: [
        {
          phase: '1. Aşama',
          titleTr: '12 Ay Yasal OPT Çalışma İzni',
          titleEn: '12-Month Post-Completion OPT',
          timelineTr: 'Mezuniyet Sonrası',
          timelineEn: 'Post-Graduation',
          rulesTr: ['İşletme bölümü non-STEM olduğundan standart 12 ay OPT hakkı tanınır; New York City firmalarında staj ve iş imkanı.'],
          rulesEn: ['Standard 12-month OPT authorization for non-STEM business graduates.'],
        },
      ],
      careerCenterGuide: {
        centerName: 'Career Resource Center (New Paltz)',
        portalName: 'Handshake New Paltz',
        actionsTr: ['Trailways otobüsüyle 90 dakikada Manhattan’a geçip Wall Street ve kurumsal networking etkinliklerine katılın.'],
        actionsEn: ['Take the 90-min Trailways express coach to NYC for corporate networking and Wall Street events.'],
        internshipTacticsTr: ['New York City merkezli finans, danışmanlık ve pazarlama ajansları.'],
        internshipTacticsEn: ['Target NYC marketing agencies, corporate finance, and consulting firms.'],
        topHiringCompanies: ['PwC', 'KPMG', 'Morgan Stanley', 'IBM Poughkeepsie', 'Mid-Hudson Commercial Banks'],
      },
    },
  },

  // 5. İTÜ - Fashion Institute of Technology (FIT) Manhattan
  'itu-fit-fashion': {
    academicPrep: {
      mandatoryCourses: [
        {
          code: 'MDT 101',
          nameTr: 'Temel Tasarım & Kalıp',
          nameEn: 'Fashion Design Studio & Draping (FD 111)',
          prereqChain: 'MDT 101 → İleri Drapaj → Senior Runway',
          dangerLevel: 'high',
          dangerReasonTr: 'FIT portfolyo jürisi tarafından birebir denetlenir; dikiş ve çizim kalitesi kusursuz olmalıdır.',
          dangerReasonEn: 'Strict portfolio review by FIT faculty; requires high precision craftsmanship.',
        },
      ],
      prerequisitesOverviewTr: ['FIT Manhattan kabulünde akademik GPA yanında portfolyo ve mülakat başarısı belirleyicidir.'],
      prerequisitesOverviewEn: ['FIT admission requires rigorous portfolio review alongside academic GPA.'],
      gpaTacticsTr: ['Stüdyo derslerinde zaman yönetimi hayati önem taşır; kumaş kesimi ve kalıp hazırlığı sabahlara kalmamalıdır.'],
      gpaTacticsEn: ['Studio project time management is vital; avoid last-minute garment construction.'],
      professorTipsTr: ['New York moda trendlerini yakından takip edin ve hocalara sürekli taslak gösterip revizyon alın.'],
      professorTipsEn: ['Seek iterative feedback from fashion faculty on sketches and fabric swatches.'],
    },
    transitionLogistics: {
      visaSteps: [
        {
          step: 1,
          titleTr: 'FIT I-20 ve Manhattan Yaşam Masrafı Teminatı',
          titleEn: 'FIT I-20 & Manhattan Cost Verification',
          descTr: 'New York City yaşam maliyetleri yüksek olduğundan konsolosluk banka teminatında en az 55.000$ görmek isteyebilir.',
          descEn: 'Manhattan living expenses require showing $55,000+ liquid funds for I-20.',
        },
      ],
      housingComparison: [
        {
          name: 'FIT 27th Street Co-ed Residence Hall',
          type: 'dorm',
          monthlyRent: '$1,400 - $1,550 / ay',
          distanceToCampus: '0 dk (Chelsea Kampüs İçi)',
          prosTr: ['Manhattan Chelsea’de kampüsün tam içinde yaşama ayrıcalığı, 7/24 güvenlik ve stüdyolara anında erişim.'],
          prosEn: ['Live directly on campus in Chelsea, Manhattan; 24/7 security and studio access.'],
          consTr: ['Oda paylaşımı zorunludur ve Manhattan fiyat seviyesindedir.'],
          consEn: ['Shared rooms at typical Manhattan price tiers.'],
          verdictTr: 'New York’a ilk kez gelen moda öğrencisi için güvenlik ve lojistik açıdan 1 numara.',
          verdictEn: 'Premier secure option for first-year fashion students in NYC.',
        },
      ],
      annualBudgetEstimate: [
        {
          categoryTr: 'FIT Harç ve Manhattan Yaşam Giderleri',
          categoryEn: 'Tuition & Manhattan Living',
          costUsd: 34000,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'Manhattan harç, yurt ve malzeme masrafları toplamı.',
          noteEn: 'FIT tuition, Chelsea housing, and garment supplies.',
        },
      ],
    },
    usAcademicCareer: {
      accreditationLogicTr: ['Dünyanın en prestijli moda okulu diploması. Minimum C harf notu intibak kuralı geçerlidir.'],
      accreditationLogicEn: ['Prestige fashion credential with standard minimum C grade transfer rules.'],
      cptOptSteps: [
        {
          phase: '1. Aşama',
          titleTr: '1 Yıllık OPT ile New York Moda Merkezinde Çalışma',
          titleEn: '1-Year OPT in NYC Fashion Houses',
          timelineTr: 'Mezuniyet Sonrası',
          timelineEn: 'Post-Graduation',
          rulesTr: ['12 ay yasal OPT ile Calvin Klein, Michael Kors, Coach gibi New York moda evlerinde tasarımcı ve pazarlama uzmanı olarak çalışma.'],
          rulesEn: ['12-month OPT authorization in Manhattan design ateliers and showroom agencies.'],
        },
      ],
      careerCenterGuide: {
        centerName: 'FIT Career and Internship Services',
        portalName: 'FIT Job Bank',
        actionsTr: ['New York Moda Haftası backstage gönüllülüklerine katılın, profesyonel lookbook ve online portfolio hazırlayın.'],
        actionsEn: ['Volunteer backstage during NYFW; maintain a high-res digital lookbook.'],
        internshipTacticsTr: ['Garment District tasarım ofisleri ve Manhattan showroomları.'],
        internshipTacticsEn: ['Target Garment District ateliers, PR showrooms, and styling agencies.'],
        topHiringCompanies: ['Ralph Lauren', 'Michael Kors', 'Tapestry (Coach)', 'PVH Corp', 'Vogue / Condé Nast'],
      },
    },
  },

  // 6. ODTÜ - Binghamton Uluslararası İlişkiler (GIA)
  'odtu-bing-gia': {
    academicPrep: {
      mandatoryCourses: [
        {
          code: 'IR 101',
          nameTr: 'Dünya Politikasına Giriş',
          nameEn: 'Intro to World Politics (PLSC 117)',
          prereqChain: 'IR 101 ➔ Karşılaştırmalı Politika ➔ Uluslararası Hukuk',
          dangerLevel: 'high',
          dangerReasonTr: 'Binghamton Harpur College siyaset bilimi derslerinin temelidir. Çok sayıda İngilizce makale analizi ve essay gerektirir.',
          dangerReasonEn: 'Harpur College political science cornerstone; heavy reading and essay writing.',
        },
        {
          code: 'IR 225',
          nameTr: 'Karşılaştırmalı Siyasal Sistemler',
          nameEn: 'Comparative Politics (PLSC 115)',
          prereqChain: 'IR 101 ➔ IR 225 ➔ PLSC 300+ Seminerleri',
          dangerLevel: 'medium',
          dangerReasonTr: 'Demokrasi, otoriter rejimler ve meclis sistemlerini irdeler. Notlandırma essay ve araştırma raporu ağırlıklıdır.',
          dangerReasonEn: 'Comparative governance and regime analysis; evaluation based on analytical essays.',
        },
      ],
      prerequisitesOverviewTr: [
        'ODTÜ-Binghamton GIA programı akademik okuma ve analitik essay yazma yoğunlukludur.',
        'ODTÜ’de alınan notların Binghamton Harpur College intibakında en az "C" (2.00) şartı aranır.',
      ],
      prerequisitesOverviewEn: [
        'Rigorous analytical essay writing and reading syllabus.',
        'Minimum C grade for transfer credit into Harpur College.',
      ],
      gpaTacticsTr: [
        'Essay Taslakları (Drafting): Kompozisyon ödevlerini son güne bırakmayın; ODTÜ ve Binghamton Writing Center’dan prova geri bildirimi alın.',
        'Akademik Kaynak Tarama: JSTOR ve Google Scholar kullanarak güncel peer-reviewed makalelerle argümanlarınızı destekleyin.',
      ],
      gpaTacticsEn: [
        'Utilize the Writing Center for feedback on paper drafts before final submission.',
        'Cite peer-reviewed articles from JSTOR and academic repositories.',
      ],
      professorTipsTr: [
        'Ders içi münazaralara ve seminer tartışmalarına aktif katılın; hocalar analitik katkı sağlayan öğrencileri hemen fark eder.',
      ],
      professorTipsEn: [
        'Participate actively in seminar debates; faculty appreciate analytical arguments.',
      ],
    },
    transitionLogistics: {
      visaSteps: [
        {
          step: 1,
          titleTr: 'I-20 ve Harpur College Kabulü',
          titleEn: 'I-20 & Harpur College Admittance',
          descTr: 'Binghamton Harpur College için mali teminat belgelerinizi eksiksiz yükleyin.',
          descEn: 'Upload financial affidavit to Binghamton ISSS for Harpur College admission.',
        },
      ],
      housingComparison: [
        {
          name: 'University Plaza (UP)',
          type: 'off-campus',
          monthlyRent: '$825 - $875 / ay',
          distanceToCampus: '5-7 dk (OCCT Shuttle)',
          prosTr: ['ODTÜ GIA öğrencilerinin en çok tercih ettiği yerleşim; eşyalı ve kampüse doğrudan shuttle.'],
          prosEn: ['Top choice among METU GIA students; fully furnished with direct shuttle.'],
          consTr: ['12 aylık kira sözleşmesi.'],
          consEn: ['12-month lease obligation.'],
          verdictTr: 'ODTÜ SUNY öğrencileri için en pratik ve sosyal konaklama.',
          verdictEn: 'Premier social and practical residence for METU SUNY cohort.',
        },
        {
          name: 'Twin River Commons (Downtown)',
          type: 'off-campus',
          monthlyRent: '$880 - $940 / ay',
          distanceToCampus: '15 dk (OCCT DCL)',
          prosTr: ['Harpur College öğrencileri için canlı şehir hayatı ve kütüphanelere yakınlık.'],
          prosEn: ['Downtown urban lifestyle, near Binghamton Downtown Center library.'],
          consTr: ['Kira biraz daha yüksek.'],
          consEn: ['Slightly higher rental cost.'],
          verdictTr: 'Merkezi konumu sevenler için harika bir seçenek.',
          verdictEn: 'Excellent for students prioritizing downtown urban access.',
        },
      ],
      annualBudgetEstimate: [
        {
          categoryTr: 'Binghamton Harpur Harç ve Sigorta',
          categoryEn: 'Tuition & Insurance',
          costUsd: 20200,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'Harpur College uluslararası harç ve SUNY sigortası.',
          noteEn: 'Harpur international tuition and health insurance.',
        },
        {
          categoryTr: 'Konaklama ve Yaşam Masrafları',
          categoryEn: 'Living & Housing',
          costUsd: 12000,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'Kira, faturalar ve yemek masrafları.',
          noteEn: 'Rent, food, and personal living budget.',
        },
      ],
    },
    usAcademicCareer: {
      accreditationLogicTr: ['Harpur College of Arts and Sciences çift diploması. Min C notu transfer kuralı.'],
      accreditationLogicEn: ['Harpur College dual degree with standard C minimum transfer policy.'],
      cptOptSteps: [
        {
          phase: '1. Aşama',
          titleTr: '12 Ay Yasal OPT ve Diplomatik Stajlar',
          titleEn: '12-Month OPT & Diplomatic Internships',
          timelineTr: 'Mezuniyet Sonrası',
          timelineEn: 'Post-Graduation',
          rulesTr: ['New York Birleşmiş Milletler Daimi Temsilciliği, düşünce kuruluşları (Think Tanks) ve Washington D.C.’de 12 ay OPT ile çalışma hakkı.'],
          rulesEn: ['12-month OPT authorization at UN missions, global think tanks, or Washington D.C. NGOs.'],
        },
      ],
      careerCenterGuide: {
        centerName: 'Fleishman Center for Career and Professional Development',
        portalName: 'hireBING by Handshake',
        actionsTr: ['Washington D.C. ve NYC alumni networking etkinliklerine katılın; dış politika araştırma asistanlıklarına başvurun.'],
        actionsEn: ['Participate in Binghamton D.C. career treks and international policy seminars.'],
        internshipTacticsTr: ['BM Genel Merkezi, Türkiye New York Başkonsolosluğu, düşünce kuruluşları (CSIS, Brookings, Wilson Center).'],
        internshipTacticsEn: ['UN HQ, Turkish Consulate in NYC, foreign policy think tanks in Washington D.C.'],
        topHiringCompanies: ['United Nations Agencies', 'Turkish Ministry of Foreign Affairs', 'Eurasia Group', 'World Bank Group (D.C.)', 'International NGOs'],
      },
    },
  },

  // 7. ODTÜ - SUNY New Paltz İşletme
  'odtu-np-bus': {
    academicPrep: {
      mandatoryCourses: [
        {
          code: 'BA 100',
          nameTr: 'İşletme Temelleri',
          nameEn: 'Intro to Business Management',
          prereqChain: 'BA 100 ➔ Üst Düzey Yönetim Dersleri',
          dangerLevel: 'low',
          dangerReasonTr: 'ODTÜ İşletme Bölümü temel dersi; New Paltz intibakı için C şarttır.',
          dangerReasonEn: 'METU business intro requiring C or better.',
        },
      ],
      prerequisitesOverviewTr: ['ODTÜ akademik prestiji ile New Paltz School of Business AACSB müfredatı birleşimidir.'],
      prerequisitesOverviewEn: ['Combining METU academic rigor with New Paltz AACSB business training.'],
      gpaTacticsTr: ['Finans ve istatistik modüllerine ağırlık verin; çan eğrisi ODTÜ’de belirleyicidir.'],
      gpaTacticsEn: ['Focus on finance and quantitative statistics courses.'],
      professorTipsTr: ['Bölüm içi grup projelerinde liderlik rolü üstlenin.'],
      professorTipsEn: ['Assume active leadership in teamwork project presentations.'],
    },
    transitionLogistics: {
      visaSteps: [
        {
          step: 1,
          titleTr: 'I-20 ve New Paltz Başvurusu',
          titleEn: 'I-20 & New Paltz Application',
          descTr: 'Mali belgeleri ODTÜ SUNY ofisi onayından sonra New Paltz’a aktarın.',
          descEn: 'Submit verified financial paperwork to SUNY New Paltz.',
        },
      ],
      housingComparison: [
        {
          name: 'New Paltz Student Village',
          type: 'off-campus',
          monthlyRent: '$840 - $900 / ay',
          distanceToCampus: '5 dk (Yürüme Mesafesi)',
          prosTr: ['Kampüse ve kasaba merkezine yürüme mesafesinde konforlu daireler.'],
          prosEn: ['Walking distance to academic halls and Main Street.'],
          consTr: ['Kontenjanlar sınırlıdır.'],
          consEn: ['Limited bed spaces.'],
          verdictTr: 'ODTÜ New Paltz öğrencileri için en rahat yerleşim.',
          verdictEn: 'Top convenient choice for METU New Paltz students.',
        },
      ],
      annualBudgetEstimate: [
        {
          categoryTr: 'New Paltz Harç ve Yaşam Tahmini',
          categoryEn: 'Tuition & Living Costs',
          costUsd: 30500,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'Harç, sigorta, kira ve yeme-içme toplamı.',
          noteEn: 'Comprehensive annual budget.',
        },
      ],
    },
    usAcademicCareer: {
      accreditationLogicTr: ['AACSB onaylı çift diploma. Minimum C kuralı.'],
      accreditationLogicEn: ['AACSB accreditation standards with C threshold.'],
      cptOptSteps: [
        {
          phase: '1. Aşama',
          titleTr: '12 Ay OPT ile Finans ve Yönetim Stajı',
          titleEn: '12-Month OPT in Corporate Finance',
          timelineTr: 'Mezuniyet Sonrası',
          timelineEn: 'Post-Graduation',
          rulesTr: ['New York metropolünde 1 yıl yasal çalışma ve uluslararası şirketlerde iş deneyimi.'],
          rulesEn: ['12 months OPT work authorization across NY metro business firms.'],
        },
      ],
      careerCenterGuide: {
        centerName: 'New Paltz Career Resource Center',
        portalName: 'Handshake New Paltz',
        actionsTr: ['Manhattan kurumsal kariyer fuarlarına katılın.'],
        actionsEn: ['Participate in NYC business network summits.'],
        internshipTacticsTr: ['Wall Street bankacılık ve denetim şirketleri.'],
        internshipTacticsEn: ['Target financial audit, corporate banking, and advisory services.'],
        topHiringCompanies: ['Deloitte', 'EY', 'PwC', 'JPMorgan', 'Citi'],
      },
    },
  },

  // 8. ODTÜ - SUNY Cortland İngilizce Öğretmenliği (FLE)
  'odtu-cort-fle': {
    academicPrep: {
      mandatoryCourses: [
        {
          code: 'FLE 201',
          nameTr: 'İleri İngilizce Dilbilgisi ve Sözdizimi',
          nameEn: 'Advanced English Grammar & Syntax (ENG 220)',
          prereqChain: 'FLE 101 ➔ FLE 201 ➔ Pedagojik Formasyon',
          dangerLevel: 'medium',
          dangerReasonTr: 'Cortland eğitim fakültesi intibakında fonetik ve morfoloji temeli oluşturur.',
          dangerReasonEn: 'Core linguistic foundation for Cortland educator credentials.',
        },
      ],
      prerequisitesOverviewTr: ['Hem Türk MEB hem de New York State öğretmenlik standartlarına uyumlu çift diploma.'],
      prerequisitesOverviewEn: ['Accredited for Turkish Ministry of Education and NY State teacher frameworks.'],
      gpaTacticsTr: ['Mikro öğretim (Micro-teaching) uygulamalarında ders planlarınızı detaylı hazırlayın.'],
      gpaTacticsEn: ['Prepare detailed lesson plans for micro-teaching assessments.'],
      professorTipsTr: ['Sınıf yönetimi ve pedagojik materyal geliştirme ödevlerine özen gösterin.'],
      professorTipsEn: ['Focus on pedagogy material design and classroom management strategies.'],
    },
    transitionLogistics: {
      visaSteps: [
        {
          step: 1,
          titleTr: 'Cortland I-20 Belgeleri',
          titleEn: 'Cortland I-20 Processing',
          descTr: 'Cortland Uluslararası Kabul Ofisine finansal teminat mektubunu yükleyin.',
          descEn: 'Submit financial affidavit to SUNY Cortland admissions.',
        },
      ],
      housingComparison: [
        {
          name: 'SUNY Cortland Student Housing / West Campus',
          type: 'off-campus',
          monthlyRent: '$680 - $740 / ay',
          distanceToCampus: '5 dk (Cortland Transit)',
          prosTr: ['Ekonomik kira fiyatları, Cortland otobüsleriyle ücretsiz ulaşım.'],
          prosEn: ['Very affordable rental rates with free Cortland student transit.'],
          consTr: ['Kışın yoğun kar yağışı.'],
          consEn: ['Heavy upstate winter snowfall.'],
          verdictTr: 'Ekonomik ve samimi bir üniversite kasabası ortamı.',
          verdictEn: 'Affordable, welcoming college town setting.',
        },
      ],
      annualBudgetEstimate: [
        {
          categoryTr: 'Cortland Harç ve Yaşam Tahmini',
          categoryEn: 'Tuition & Living Costs',
          costUsd: 26500,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'Upstate NY bölgesinde en ekonomik SUNY seçeneklerinden biridir.',
          noteEn: 'One of the most budget-friendly SUNY locations in Central NY.',
        },
      ],
    },
    usAcademicCareer: {
      accreditationLogicTr: ['Eğitim bilimleri akreditasyonu. C altı notlar transfer edilmez.'],
      accreditationLogicEn: ['Teacher education standards with minimum C grade transfer rules.'],
      cptOptSteps: [
        {
          phase: '1. Aşama',
          titleTr: '12 Ay OPT ile ABD Okullarında Öğretmenlik / Dil Eğitimi',
          titleEn: '12-Month OPT in US Educational Settings',
          timelineTr: 'Mezuniyet Sonrası',
          timelineEn: 'Post-Graduation',
          rulesTr: ['ABD’deki dil okullarında, kolejlerde ve eğitim kurumlarında 1 yıl yasal öğretmenlik.'],
          rulesEn: ['12-month authorization at language centers, public/private schools, and academies.'],
        },
      ],
      careerCenterGuide: {
        centerName: 'Cortland Career Services',
        portalName: 'Handshake Cortland',
        actionsTr: ['New York eyaleti eğitim fuarlarına katılın; eğitim kurumlarıyla doğrudan mülakat yapın.'],
        actionsEn: ['Participate in NY State Educator Job Fairs.'],
        internshipTacticsTr: ['Central New York dil merkezleri ve New York City charter okulları.'],
        internshipTacticsEn: ['Target Central NY language institutes and NYC charter school networks.'],
        topHiringCompanies: ['Success Academy NYC', 'EF Education First', 'SUNY Language Centers', 'International Baccalaureate Schools'],
      },
    },
  },

  // 9. Anadolu Üniversitesi - SUNY Cortland İktisat
  'anadolu-cort-econ': {
    academicPrep: {
      mandatoryCourses: [
        {
          code: 'IKT 101',
          nameTr: 'İktisada Giriş I (Mikroiktisat)',
          nameEn: 'Principles of Microeconomics (ECO 110)',
          prereqChain: 'IKT 101 ➔ IKT 102 ➔ Ekonometri',
          dangerLevel: 'medium',
          dangerReasonTr: 'Cortland iktisat bölümü üst sınıf ekonometri derslerinin temelidir.',
          dangerReasonEn: 'Foundation for upper-level econometrics and quantitative macro at Cortland.',
        },
      ],
      prerequisitesOverviewTr: ['Eskişehir Anadolu Üniversitesi ve Cortland ortak iktisat müfredatı.'],
      prerequisitesOverviewEn: ['Joint economics syllabus between Anadolu and SUNY Cortland.'],
      gpaTacticsTr: ['Grafik çizimleri ve matematiksel türev modellerini eksiksiz öğrenin.'],
      gpaTacticsEn: ['Master economic curve graphing and partial derivatives.'],
      professorTipsTr: ['Anadolu Üniversitesi çıkmış sınav sorularını arşivden temin edin.'],
      professorTipsEn: ['Study past exam papers from Anadolu Economics archives.'],
    },
    transitionLogistics: {
      visaSteps: [
        {
          step: 1,
          titleTr: 'I-20 Finansal Teminatı',
          titleEn: 'I-20 Financial Affidavit',
          descTr: 'Cortland kabul ofisine banka hesap dökümünü yükleyin.',
          descEn: 'Submit liquid bank statements to Cortland Admissions.',
        },
      ],
      housingComparison: [
        {
          name: 'Cortland College Apartments',
          type: 'off-campus',
          monthlyRent: '$670 - $720 / ay',
          distanceToCampus: '5 dk (Shuttle)',
          prosTr: ['Çok uygun kira ve sakin yaşam.'],
          prosEn: ['Very low rent and quiet study environment.'],
          consTr: ['Kışları soğuktur.'],
          consEn: ['Cold upstate winters.'],
          verdictTr: 'Ekonomik iktisat eğitimi için ideal.',
          verdictEn: 'Great budget-friendly choice.',
        },
      ],
      annualBudgetEstimate: [
        {
          categoryTr: 'Cortland Yıllık Toplam Tahmin',
          categoryEn: 'Annual Estimated Expenses',
          costUsd: 26000,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'Harç, konaklama, sigorta ve yemek.',
          noteEn: 'Tuition, rent, groceries, and insurance.',
        },
      ],
    },
    usAcademicCareer: {
      accreditationLogicTr: ['İktisat çift diploma akreditasyonu. C altı notlar transfer edilmez.'],
      accreditationLogicEn: ['Economics dual degree; C minimum transfer threshold.'],
      cptOptSteps: [
        {
          phase: '1. Aşama',
          titleTr: '12 Ay OPT ile Finansal Analistlik',
          titleEn: '12-Month OPT as Economic Analyst',
          timelineTr: 'Mezuniyet Sonrası',
          timelineEn: 'Post-Graduation',
          rulesTr: ['Bankacılık, piyasa analizi ve veri araştırması alanlarında 1 yıl çalışma izni.'],
          rulesEn: ['12 months OPT authorization for banking, risk analysis, and market research.'],
        },
      ],
      careerCenterGuide: {
        centerName: 'Cortland Career Services',
        portalName: 'Handshake Cortland',
        actionsTr: ['Veri analizi (Excel, R, Python) portfolyosu hazırlayın.'],
        actionsEn: ['Build quantitative analysis portfolio with Excel, R, and Python.'],
        internshipTacticsTr: ['Bölgesel New York bankaları ve finans danışmanlıkları.'],
        internshipTacticsEn: ['Regional New York banks and financial advisory groups.'],
        topHiringCompanies: ['M&T Bank', 'KeyBank', 'Bloomberg LP', 'New York State Budget Division'],
      },
    },
  },

  // 10. Anadolu Üniversitesi - SUNY Empire State İşletme
  'anadolu-esc-bus': {
    academicPrep: {
      mandatoryCourses: [
        {
          code: 'ISL 102',
          nameTr: 'Yönetim ve Organizasyon',
          nameEn: 'Management and Human Behavior (MGMT 2010)',
          prereqChain: 'ISL 102 ➔ İnsan Kaynakları & Strateji',
          dangerLevel: 'low',
          dangerReasonTr: 'Temel yönetim dersidir; C notu gereklidir.',
          dangerReasonEn: 'Management fundamentals; requires C or above.',
        },
      ],
      prerequisitesOverviewTr: ['Esnek ve hibrit modüllerle kurumsal yönetim eğitimi.'],
      prerequisitesOverviewEn: ['Flexible and hybrid learning model with corporate management focus.'],
      gpaTacticsTr: ['Online tartışma panolarına (Discussion Boards) haftalık düzenli katkı verin.'],
      gpaTacticsEn: ['Submit timely weekly contributions to discussion boards.'],
      professorTipsTr: ['Vaka analizi ödevlerinde teorik modelleri gerçek şirket vakalarıyla eşleştirin.'],
      professorTipsEn: ['Map theoretical models to real corporate case studies.'],
    },
    transitionLogistics: {
      visaSteps: [
        {
          step: 1,
          titleTr: 'Empire State I-20 Süreci',
          titleEn: 'Empire State I-20 Process',
          descTr: 'Saratoga Springs kabul birimine finansal belgeleri iletin.',
          descEn: 'Submit financial paperwork to Saratoga Springs admissions.',
        },
      ],
      housingComparison: [
        {
          name: 'Saratoga Student Suites',
          type: 'off-campus',
          monthlyRent: '$780 - $840 / ay',
          distanceToCampus: '10 dk (CDTA Transit)',
          prosTr: ['Tarihi kaplıca ve turizm kenti Saratoga’da güvenli yaşam.'],
          prosEn: ['Safe, picturesque setting in historic Saratoga Springs.'],
          consTr: ['Ulaşım için otobüs saatlerine dikkat edilmelidir.'],
          consEn: ['Requires scheduling with CDTA regional transit.'],
          verdictTr: 'Sakin ve kaliteli yaşam ortamı.',
          verdictEn: 'Tranquil and high quality living environment.',
        },
      ],
      annualBudgetEstimate: [
        {
          categoryTr: 'Empire State Harç ve Yaşam',
          categoryEn: 'Tuition & Living',
          costUsd: 28000,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'Yıllık toplam bütçe.',
          noteEn: 'Total estimated annual budget.',
        },
      ],
    },
    usAcademicCareer: {
      accreditationLogicTr: ['İşletme akreditasyonu. C altı notlar sayılmaz.'],
      accreditationLogicEn: ['Business accreditation with C minimum threshold.'],
      cptOptSteps: [
        {
          phase: '1. Aşama',
          titleTr: '12 Ay OPT Çalışma İzni',
          titleEn: '12-Month OPT Authorization',
          timelineTr: 'Mezuniyet Sonrası',
          timelineEn: 'Post-Graduation',
          rulesTr: ['Uluslararası ticaret ve kurumsal şirketlerde 1 yıl çalışma.'],
          rulesEn: ['12 months OPT in commercial management and corporate administration.'],
        },
      ],
      careerCenterGuide: {
        centerName: 'Empire State Career Hub',
        portalName: 'ESC Career Portal',
        actionsTr: ['Albany ve Saratoga bölgesindeki ticaret odası etkinliklerine katılın.'],
        actionsEn: ['Connect with Albany and Capital District chambers of commerce.'],
        internshipTacticsTr: ['Upstate New York ticaret ve lojistik firmaları.'],
        internshipTacticsEn: ['Target upstate commercial logistics and management companies.'],
        topHiringCompanies: ['GE Vernova', 'Albany Medical Health System', 'New York State Agencies', 'Commerce Bank'],
      },
    },
  },

  // 11. İstanbul Üniversitesi - SUNY New Paltz İşletme
  'iu-np-bus': {
    academicPrep: {
      mandatoryCourses: [
        {
          code: 'ISL 105',
          nameTr: 'Pazarlama İlkeleri',
          nameEn: 'Marketing Management (BUS 325)',
          prereqChain: 'ISL 105 ➔ Tüketici Davranışları & Dijital Pazarlama',
          dangerLevel: 'low',
          dangerReasonTr: 'İstanbul Üniversitesi İktisat Fakültesi ve New Paltz ortak dersi; C notu aranır.',
          dangerReasonEn: 'Core marketing requirement; requires C or above.',
        },
      ],
      prerequisitesOverviewTr: ['İstanbul Üniversitesi köklü birikimi ile New Paltz İşletme Okulu iş birliği.'],
      prerequisitesOverviewEn: ['Istanbul University legacy partnered with New Paltz School of Business.'],
      gpaTacticsTr: ['Pazarlama ve yönetim sunumlarında veri analitiği metriklerini kullanın.'],
      gpaTacticsEn: ['Integrate data metrics and analytics into marketing pitches.'],
      professorTipsTr: ['Beyazıt ve Avcılar kampüslerindeki derslerde devamlılığı yüksek tutun.'],
      professorTipsEn: ['Maintain high lecture attendance across Istanbul campuses.'],
    },
    transitionLogistics: {
      visaSteps: [
        {
          step: 1,
          titleTr: 'New Paltz I-20 ve Vize Randevusu',
          titleEn: 'New Paltz I-20 & Visa Booking',
          descTr: 'İÜ SUNY koordinatörlüğü onayıyla mali belgeleri New Paltz ISSS’e iletin.',
          descEn: 'Submit verified financial paperwork to SUNY New Paltz ISSS.',
        },
      ],
      housingComparison: [
        {
          name: 'New Paltz Village Apartments',
          type: 'off-campus',
          monthlyRent: '$830 - $890 / ay',
          distanceToCampus: '5 dk (Yürüme Mesafesi)',
          prosTr: ['Kampüse ve çarşıya yürüme mesafesinde, New York City’ye ekspres otobüs.'],
          prosEn: ['Walking distance to lectures and historic downtown, express bus to NYC.'],
          consTr: ['Kiralık yerler erkenden dolar.'],
          consEn: ['Leases fill up quickly.'],
          verdictTr: 'İÜ New Paltz öğrencileri için en konforlu seçenek.',
          verdictEn: 'Top convenient choice for Istanbul University students.',
        },
      ],
      annualBudgetEstimate: [
        {
          categoryTr: 'New Paltz Yıllık Bütçe Tahmini',
          categoryEn: 'Annual Estimated Budget',
          costUsd: 30000,
          frequencyTr: 'Yıllık',
          frequencyEn: 'Annual',
          noteTr: 'Harç, sigorta, ev kirası ve beslenme.',
          noteEn: 'Tuition, insurance, rent, and groceries.',
        },
      ],
    },
    usAcademicCareer: {
      accreditationLogicTr: ['AACSB onaylı çift diploma. Minimum C notu kuralı.'],
      accreditationLogicEn: ['AACSB accredited dual degree with C minimum threshold.'],
      cptOptSteps: [
        {
          phase: '1. Aşama',
          titleTr: '12 Ay Yasal OPT ile New York’ta Çalışma',
          titleEn: '12-Month OPT in New York City',
          timelineTr: 'Mezuniyet Sonrası',
          timelineEn: 'Post-Graduation',
          rulesTr: ['Mezuniyet sonrası 1 yıl süreyle New York metropolünde kurumsal şirketlerde çalışma.'],
          rulesEn: ['12 months OPT work authorization across NY metro business firms.'],
        },
      ],
      careerCenterGuide: {
        centerName: 'New Paltz Career Resource Center',
        portalName: 'Handshake New Paltz',
        actionsTr: ['New York City’deki Türk-Amerikan Ticaret Odası (TACCI) etkinliklerine katılın.'],
        actionsEn: ['Engage with Turkish-American Chamber of Commerce events in NYC.'],
        internshipTacticsTr: ['Manhattan merkezli pazarlama ajansları ve çok uluslu firmalar.'],
        internshipTacticsEn: ['Target NYC marketing agencies, corporate consulting, and multinationals.'],
        topHiringCompanies: ['Omnicom Group', 'PwC New York', 'Mid-Hudson Commercial Banks', 'Turkish Airlines NYC Office'],
      },
    },
  },
};
