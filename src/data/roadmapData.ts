export interface Milestone {
  id: string;
  titleEn: string;
  titleTr: string;
  deadlineEn: string;
  deadlineTr: string;
  descriptionEn: string;
  descriptionTr: string;
  isImportant?: boolean;
  category: 'academic' | 'visa' | 'housing' | 'career';
}

export interface RoadmapStage {
  id: number;
  slug: string;
  titleEn: string;
  titleTr: string;
  subtitleEn: string;
  subtitleTr: string;
  locationEn: string;
  locationTr: string;
  durationEn: string;
  durationTr: string;
  summaryEn: string;
  summaryTr: string;
  color: string;
  milestones: Milestone[];
  proTipsEn: string[];
  proTipsTr: string[];
}

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: 1,
    slug: 'year-1-turkey',
    titleEn: 'Stage 1: Year 1 in Turkey (İTÜ / ODTÜ)',
    titleTr: '1. Aşama: 1. Yıl Türkiye (İTÜ / ODTÜ)',
    subtitleEn: 'Engineering Foundation & First Visa Sprint',
    subtitleTr: 'Mühendislik Temelleri & İlk Vize Hazırlığı',
    locationEn: 'Turkey (Ayazağa / Ankara / Eskişehir)',
    locationTr: 'Türkiye (İTÜ Ayazağa / ODTÜ / Anadolu)',
    durationEn: 'Year 1 (Semesters 1 & 2)',
    durationTr: '1. Yıl (Güz & Bahar Dönemi)',
    summaryEn: 'Complete freshman calculus, physics, and programming at your Turkish home university. Maintain your CGPA above the SUNY transfer threshold (2.50+), pass English proficiency, and prepare your I-20 financial affidavit for your upcoming 2nd year in the US.',
    summaryTr: 'Türkiye’deki üniversitenizde Matematik (Calculus), Fizik ve temel kodlama derslerini başarıyla tamamlayın. Genel not ortalamanızı (CGPA) 2.50 barajının üzerinde tutun, İngilizce yeterlilik sınavını geçin ve 2. yılda New York kampüsüne gidiş için I-20 ve F-1 vize işlemlerinizi tamamlayın.',
    color: 'from-blue-600 to-indigo-700',
    milestones: [
      {
        id: 'm1-1',
        titleEn: 'Maintain Transfer CGPA Threshold (min 2.50, recommended 2.80+)',
        titleTr: 'Akademik Baraj Not Ortalamasını Koruyun (Min 2.50, Tavsiye 2.80+)',
        deadlineEn: 'End of Semesters 1 & 2',
        deadlineTr: '1. ve 2. Dönem Sonu',
        descriptionEn: 'SUNY partner campuses require minimum 2.50 CGPA. A 2.80+ GPA grants priority course registration and future eligibility for on-campus TA/grader roles.',
        descriptionTr: 'SUNY anlaşmalı kampüsleri en az 2.50 kümülatif not ortalaması (CGPA) şartı koşar. 2.80 ve üzeri ortalama, ders kayıt önceliği ve asistanlık için büyük avantaj sağlar.',
        isImportant: true,
        category: 'academic',
      },
      {
        id: 'm1-2',
        titleEn: 'Complete English Proficiency (TOEFL iBT / IELTS / Duolingo DET)',
        titleTr: 'İngilizce Dil Yeterlilik Sınavını Verin (TOEFL / IELTS / DET)',
        deadlineEn: 'By February / March of Year 1',
        deadlineTr: '1. Yıl Şubat - Mart',
        descriptionEn: 'Achieve the required score (TOEFL iBT 80+, IELTS 6.5+, or DET 110+ depending on SUNY campus) to ensure your I-20 is processed on time.',
        descriptionTr: 'SUNY kampüsünün talep ettiği geçerli skoru (TOEFL iBT 80+, IELTS 6.5+ veya DET 110+) alarak I-20 belgenizin gecikmeden düzenlenmesini sağlayın.',
        isImportant: true,
        category: 'academic',
      },
      {
        id: 'm1-3',
        titleEn: 'Submit Financial Affidavit for I-20 & Book F-1 Visa Slot',
        titleTr: 'I-20 Maddi Teminat Belgelerini Yükleyin & F-1 Vize Randevusu Alın',
        deadlineEn: 'April - May of Year 1',
        deadlineTr: '1. Yıl Nisan - Mayıs',
        descriptionEn: 'Upload bank letter ($45k+ liquid funds) and sponsor notary affidavit. Pay $350 SEVIS fee and secure your consular interview appointment in Istanbul or Ankara.',
        descriptionTr: 'Banka hesap yazısı ($45.000+ likit bakiye) ve noter onaylı sponsor taahhütnamesini yükleyin. 350$ SEVIS I-901 harcını ödeyip İstinye veya Ankara vize randevunuzu alın.',
        isImportant: true,
        category: 'visa',
      },
      {
        id: 'm1-4',
        titleEn: 'Sign Off-Campus Lease or On-Campus Housing for Year 2 in USA',
        titleTr: '2. Yıl ABD İçin Ev veya Yurt Sözleşmesini İmzalayın',
        deadlineEn: 'May - June of Year 1',
        deadlineTr: '1. Yıl Mayıs - Haziran',
        descriptionEn: 'Coordinate with fellow Turkish classmates to secure apartments (UP, Hayes, Sweethome, or campus dorms) starting in August.',
        descriptionTr: 'Türk dönem arkadaşlarınızla organize olarak Ağustos ayında başlayacak ev sözleşmelerini (UP, Hayes, Sweethome veya öğrenci yurtları) erkenden imzalayın.',
        category: 'housing',
      },
    ],
    proTipsEn: [
      'Remember the alternating structure: You study Year 1 at home in Turkey, Year 2 in the USA, return for Year 3 at home, and finish Year 4 in the USA.',
      'Apply for your F-1 student visa as early as May. Summer consulate interview queues get heavily backlogged.',
      'Do not slack on MAT 216 (Linear Algebra) or programming in Year 1; US sophomore coursework builds heavily on matrix mathematics.',
    ],
    proTipsTr: [
      'SUNY çift diploma programı dönüşümlü modeldir: 1. Yıl Türkiye’de, 2. Yıl ABD’de, 3. Yıl tekrar Türkiye’de, 4. Yıl ise ABD’de okunur.',
      'F-1 vize randevunuzu Mayıs ayında almaya çalışın. Yaz aylarında konsolosluk randevu sıraları aşırı yoğunlaşır.',
      '1. sınıfta MAT 216 Lineer Cebir ve programlama derslerini sağlam tutun; ABD’deki 2. sınıf Yöneylem Araştırması dersleri tamamen matris matematiğine dayanır.',
    ],
  },
  {
    id: 2,
    slug: 'year-2-usa',
    titleEn: 'Stage 2: Year 2 in USA (First American Year)',
    titleTr: '2. Aşama: 2. Yıl ABD (İlk New York Yılı)',
    subtitleEn: 'First US Arrival, Banking, SSN & Sophomore Core',
    subtitleTr: 'İlk ABD Kampüsü Deneyimi, SSN & Temel Dersler',
    locationEn: 'SUNY Campus (Binghamton / Buffalo / New Paltz)',
    locationTr: 'SUNY Kampüsü (Vestal / Buffalo / New Paltz)',
    durationEn: 'Year 2 (Semesters 3 & 4)',
    durationTr: '2. Yıl (3. ve 4. Dönemler)',
    summaryEn: 'Arrive in New York for your first American academic year! Set up your US checking account (Chase/BoA), secure an on-campus job to obtain your Social Security Number (SSN), ride free campus green buses, and master sophomore engineering/business core courses.',
    summaryTr: 'İlk Amerikan akademik yılınız için New York’a varış! Chase veya Bank of America hesabı açın, kampüs içi öğrenci işine girerek Sosyal Güvenlik Numaranızı (SSN) alın, ücretsiz yeşil kampüs otobüslerini kullanın ve 2. sınıf temel mühendislik/işletme derslerini tamamlayın.',
    color: 'from-emerald-600 to-teal-800',
    milestones: [
      {
        id: 'm2-1',
        titleEn: 'US Entry, Mandatory ISSS Immigration Check-In & BU ID',
        titleTr: 'ABD’ye Giriş, ISSS Uluslararası Ofis Kaydı & Öğrenci Kimliği',
        deadlineEn: 'Mid-August Arrival Week',
        deadlineTr: 'Ağustos Ortası (Varış Haftası)',
        descriptionEn: 'Enter the US with signed I-20 and F-1 visa. Download your I-94 arrival record online and submit electronic check-in to activate your legal SEVIS status.',
        descriptionTr: 'F-1 vizesi ve I-20 ile ABD’ye giriş yapın. i94.cbp.dhs.gov adresinden I-94 belgenizi indirin ve ISSS ofisine yükleyerek yasal SEVIS statünüzü aktifleştirin.',
        isImportant: true,
        category: 'visa',
      },
      {
        id: 'm2-2',
        titleEn: 'Open US Checking Account (Chase / Bank of America on Vestal Pkwy)',
        titleTr: 'ABD Banka Hesabı Açın (Vestal Pkwy Chase / Bank of America)',
        deadlineEn: 'Week 1 of Arrival',
        deadlineTr: '1. Hafta',
        descriptionEn: 'Bring passport, I-20, I-94, and local lease. No SSN needed to open checking accounts. Activate Zelle for instant roommate rent & grocery bill splitting.',
        descriptionTr: 'Pasaport, I-20, I-94 ve kira kontratınızla şubeye gidin. Vadesiz hesap açmak için SSN gerekmez. Ev arkadaşlarınızla masraf bölüşmek için Zelle’i açın.',
        category: 'housing',
      },
      {
        id: 'm2-3',
        titleEn: 'Land an On-Campus Job to Secure your Social Security Number (SSN)',
        titleTr: 'Kampüs İçi İşe Girerek Sosyal Güvenlik Numarası (SSN) Alın',
        deadlineEn: 'September - October of Year 2',
        deadlineTr: 'Eylül - Ekim',
        descriptionEn: 'Work up to 20 hrs/week at Dining Services, campus computing labs, or library. Your supervisor letter allows you to apply for an official SSN card at the SSA office.',
        descriptionTr: 'Yemekhane (Dining Services) veya bilgisayar laboratuvarlarında haftada 10-15 saat çalışarak iş teklif mektubu alın ve Sosyal Güvenlik Kurumu’ndan (SSA) resmi SSN kartınızı çıkartın.',
        isImportant: true,
        category: 'career',
      },
      {
        id: 'm2-4',
        titleEn: 'Master Sophomore Core Courses (Operations Research I / Probability)',
        titleTr: '2. Sınıf Temel Derslerini Başarıyla Verin (Yöneylem I / Olasılık)',
        deadlineEn: 'Fall & Spring Semesters',
        deadlineTr: 'Güz ve Bahar Dönemleri',
        descriptionEn: 'Complete key courses like SSIE 340 (Deterministic OR) and SSIE 305. Continuous homework and midterm grading requires consistent weekly pacing.',
        descriptionTr: 'SSIE 340 (Deterministik Yöneylem Araştırması) ve SSIE 305 gibi kritik baraj derslerini verin. ABD sisteminde sürekli ödev ve laboratuvar takibi esastır.',
        category: 'academic',
      },
      {
        id: 'm2-5',
        titleEn: 'Obtain ISSS Travel Signature on I-20 Before Returning to Turkey',
        titleTr: 'Türkiye’ye Dönmeden Önce I-20 Üzerine Seyahat İmzası (Travel Signature) Alın',
        deadlineEn: 'April - May of Year 2',
        deadlineTr: '2. Yıl Nisan - Mayıs',
        descriptionEn: 'Before flying back to Turkey for Year 3, your I-20 must receive an official endorsement signature from Binghamton ISSS to ensure smooth re-entry for Year 4.',
        descriptionTr: '3. yıl için Türkiye’ye dönmeden önce, 4. sınıfta ABD’ye sorunsuz geri dönebilmek için I-20 formunuza uluslararası öğrenci ofisinden (ISSS) seyahat imzası alın.',
        isImportant: true,
        category: 'visa',
      },
    ],
    proTipsEn: [
      'Get a Discover it Student Chrome credit card as soon as your SSN arrives in the mail to start building your US credit score early.',
      'OCCT green buses and Broome Transit are 100% free with your Binghamton student ID card.',
      'Sublease your apartment or store your furniture in a local storage unit before flying back to Turkey for Year 3.',
    ],
    proTipsTr: [
      'SSN kartınız posta kutunuza gelir gelmez Discover it Student kartına başvurarak ABD kredi puanınızı (credit score) oluşturmaya erkenden başlayın.',
      'Yeşil OCCT kampüs otobüsleri ve Broome Transit şehir hatları öğrenci kimliğinizle tamamen ücretsizdir.',
      '3. sınıf için Türkiye’ye dönmeden önce eşyalarınızı Binghamton’daki depolara (storage) bırakabilir veya odanızı yaz dönemi için sublease edebilirsiniz.',
    ],
  },
  {
    id: 3,
    slug: 'year-3-turkey',
    titleEn: 'Stage 3: Year 3 in Turkey (Ayazağa / ODTÜ)',
    titleTr: '3. Aşama: 3. Yıl Türkiye’ye Dönüş (İTÜ / ODTÜ)',
    subtitleEn: 'Junior Engineering, Compulsory Summer Internship & Return Prep',
    subtitleTr: '3. Sınıf Ders İntibakları, Zorunlu Staj & 4. Yıla Hazırlık',
    locationEn: 'Turkey (İTÜ Ayazağa / ODTÜ Ankara)',
    locationTr: 'Türkiye (İTÜ Ayazağa / ODTÜ / Anadolu)',
    durationEn: 'Year 3 (Semesters 5 & 6)',
    durationTr: '3. Yıl (5. ve 6. Dönemler)',
    summaryEn: 'Back home in Turkey for your junior year! Transfer your US credits to İTÜ/ODTÜ student systems, complete advanced courses (Simulation, Stochastic OR, Facilities Planning), complete your compulsory industrial summer internship in Turkish industry, and renew your US lease for senior year.',
    summaryTr: '3. sınıf için Türkiye’ye dönüş! ABD’de aldığınız derslerin intibakını İTÜ/ODTÜ sistemine işletin, ileri seviye dersleri (Simülasyon, Stokastik Yöneylem, Tesis Planlama) verin, Türk sanayisinde zorunlu yaz stajınızı tamamlayın ve 4. yıl için New York evinizi erkenden ayarlayın.',
    color: 'from-amber-600 to-orange-700',
    milestones: [
      {
        id: 'm3-1',
        titleEn: 'Transfer Year 2 SUNY Credits to Home University SIS / OBS Portal',
        titleTr: '2. Yıl SUNY Kredilerini İTÜ / ODTÜ Öğrenci İşlerine İntibak Ettirin',
        deadlineEn: 'September of Year 3',
        deadlineTr: '3. Yıl Eylül Başı',
        descriptionEn: 'Submit your official Binghamton/SUNY electronic transcript to the ITU SUNY Coordination Office to ensure all sophomore credits transfer properly.',
        descriptionTr: 'Resmi Binghamton/SUNY elektronik transkriptinizi İTÜ SUNY Koordinatörlüğü’ne ileterek ABD’de aldığınız tüm derslerin Türkiye transkriptinize işlenmesini sağlayın.',
        isImportant: true,
        category: 'academic',
      },
      {
        id: 'm3-2',
        titleEn: 'Master Advanced Coursework (Simulation, Stochastic Models, Facilities)',
        titleTr: 'İleri Mühendislik Derslerini Tamamlayın (Simülasyon, Stokastik OR)',
        deadlineEn: 'Fall & Spring Semesters',
        deadlineTr: 'Güz ve Bahar Dönemleri',
        descriptionEn: 'Take END 331 (Discrete Simulation with Arena), END 312 (Stochastic OR), and END 322 (Facilities Design).',
        descriptionTr: 'END 331 Benzetim (Arena ile Simülasyon), END 312 Stokastik Yöneylem ve END 322 Tesis Planlama derslerini tamamlayarak bitirme projesi önkoşullarını sağlayın.',
        category: 'academic',
      },
      {
        id: 'm3-3',
        titleEn: 'Complete Mandatory Industrial Summer Internship in Turkey',
        titleTr: 'Türkiye Sanayisinde Zorunlu Endüstriyel Yaz Stajını Yapın',
        deadlineEn: 'June - August of Year 3',
        deadlineTr: '3. Yıl Yaz Dönemi (Haziran - Ağustos)',
        descriptionEn: 'Complete your mandatory engineering internship (Üretim / Yönetim stajı) at leading firms like Ford Otosan, Arçelik, Mercedes-Benz, or top consulting firms.',
        descriptionTr: 'İTÜ/ODTÜ zorunlu staj yönergesine uygun olarak otomotiv, havacılık veya danışmanlık firmalarında (Ford Otosan, THY, Arçelik vb.) yaz stajınızı yapın.',
        isImportant: true,
        category: 'career',
      },
      {
        id: 'm3-4',
        titleEn: 'Re-secure Senior Year Housing in NY & Verify F-1 Visa Validity',
        titleTr: '4. Yıl İçin New York Evinizi Ayarlayın & F-1 Vize Geçerliliğini Kontrol Edin',
        deadlineEn: 'April - June of Year 3',
        deadlineTr: '3. Yıl Nisan - Haziran',
        descriptionEn: 'Re-sign off-campus lease for your final year and check your passport and F-1 visa foil expiration dates.',
        descriptionTr: '4. ve son yılınız için New York’taki evinizi arkadaşlarınızla kiralayın, pasaport ve F-1 vize sürenizin geçerli olduğunu kontrol edin.',
        category: 'housing',
      },
    ],
    proTipsEn: [
      'Your Turkish summer internship experience is a tremendous resume asset when interviewing with US corporate employers for OPT roles in senior year.',
      'Stay in active touch with your Watson academic advisor via email during Year 3 to pre-register for Senior Capstone Design sections.',
      'Keep your US bank account active with small recurring transactions (e.g. Spotify, iCloud) to maintain your US credit score history while in Turkey.',
    ],
    proTipsTr: [
      'Türkiye’de yapacağınız kurumsal yaz stajı, 4. sınıfta ABD’de STEM OPT ve tam zamanlı iş mülakatlarında Amerikan şirketlerine sunabileceğiniz en güçlü kozunuzdur.',
      '3. sınıf boyunca Binghamton’daki bölüm danışmanınızla e-posta iletişimini koparmayın; 4. sınıf Bitirme Projesi (Senior Capstone) takımları erkenden oluşturulur.',
      'Türkiye’deyken ABD banka hesabınızı küçük bir abonelikle (örn. Spotify/iCloud) aktif tutun; böylece ABD kredi geçmişiniz kesintisiz yükselmeye devam eder.',
    ],
  },
  {
    id: 4,
    slug: 'year-4-senior-opt',
    titleEn: 'Stage 4: Year 4 in USA & 3-Year STEM OPT',
    titleTr: '4. Aşama: 4. Yıl ABD, Mezuniyet & 3 Yıllık STEM OPT',
    subtitleEn: 'Senior Capstone, Dual Commencement & US Work Authorization',
    subtitleTr: 'Bitirme Tasarım Projesi, Çift Mezuniyet & ABD Çalışma İzni',
    locationEn: 'USA (Watson / SUNY Campus & US Job Market)',
    locationTr: 'ABD (SUNY Kampüsü & ABD İş Piyasası)',
    durationEn: 'Year 4 (Semesters 7 & 8) + 36-Month OPT',
    durationTr: '4. Yıl (7. & 8. Dönemler) + 3 Yıl OPT',
    summaryEn: 'The triumphant final year! Return to New York to complete your year-long Senior Capstone Design project with Fortune 500 sponsors (Lockheed Martin, BAE, Raymond Corp), attend dual graduation ceremonies, and apply for your 3-Year STEM OPT work authorization to launch your US engineering career.',
    summaryTr: 'Zirve yılı! Yıl boyu sürecek kurumsal Bitirme Tasarım Projenizi (Lockheed Martin, BAE Systems sponsorluğunda) tamamlamak için New York’a dönün. Hem New York’ta hem Ayazağa Stadyumu’nda kep atın ve 3 yıllık (36 ay) yasal STEM OPT çalışma izninizle ABD kariyerinizi başlatın.',
    color: 'from-purple-600 to-indigo-900',
    milestones: [
      {
        id: 'm4-1',
        titleEn: 'Senior Capstone Design Project I & II (SSIE 410 / 411)',
        titleTr: 'Bitirme Tasarım Projesi I & II (SSIE 410 / 411)',
        deadlineEn: 'Full Academic Year (Fall & Spring)',
        deadlineTr: 'Tüm Akademik Yıl (Güz & Bahar)',
        descriptionEn: 'Execute a real industrial engineering solution for corporate sponsors (Lockheed Martin, Raymond Corp, UHS hospitals). Present findings at the Watson Senior Design Expo.',
        descriptionTr: 'Gerçek kurumsal sponsorlar için üretim, lojistik veya simülasyon optimizasyonu projesi yürütün. Bahar döneminde Watson Mühendislik Fuarı’nda jüriye sunun.',
        isImportant: true,
        category: 'academic',
      },
      {
        id: 'm4-2',
        titleEn: '1-Page US ATS Engineering Resume with Fleishman Center',
        titleTr: 'Fleishman Merkezi ile 1 Sayfalık Amerikan Formatında Mühendislik CV’si',
        deadlineEn: 'September (Fall Career Fair)',
        deadlineTr: '4. Yıl Eylül Ayı',
        descriptionEn: 'Drop into the Fleishman Center in the Union to tailor your resume for Watson Career Fairs and multinational company job portals.',
        descriptionTr: 'Kampüs Union binasındaki Fleishman Kariyer Merkezi’nde CV’nizi Amerikan ATS tarama yazılımlarına uygun 1 sayfalık teknik formata dönüştürün.',
        category: 'career',
      },
      {
        id: 'm4-3',
        titleEn: 'File USCIS Form I-765 for 12-Month Initial OPT (90 Days Prior)',
        titleTr: '12 Aylık İlk OPT İçin USCIS Form I-765 Başvurusu (90 Gün Önce)',
        deadlineEn: 'February (90 days before graduation)',
        deadlineTr: 'Şubat (Mezuniyetten 90 Gün Önce)',
        descriptionEn: 'Request your OPT recommendation I-20 from ISSS, file Form I-765 online with USCIS, pay the fee, and receive your Employment Authorization Document (EAD card).',
        descriptionTr: 'ISSS ofisinden OPT tavsiyeli I-20 alın, USCIS sisteminden Form I-765 başvurusunu online yapın ve çalışma izni kartınızı (EAD) posta ile teslim alın.',
        isImportant: true,
        category: 'visa',
      },
      {
        id: 'm4-4',
        titleEn: 'Dual Commencement Ceremonies (Binghamton Events Center & Ayazağa)',
        titleTr: 'Çift Mezuniyet Törenleri (Binghamton Events Center & İTÜ Ayazağa)',
        deadlineEn: 'May & June',
        deadlineTr: 'Mayıs & Haziran',
        descriptionEn: 'Walk the stage at Binghamton Events Center with your American cohort, then celebrate at the legendary ITU Ayazağa Stadium graduation ceremony.',
        descriptionTr: 'Önce New York’ta Binghamton Events Center’da kep atın, ardından İstanbul’a uçup tarihi İTÜ Ayazağa Stadyumu mezuniyet töreninde çift diplomayı kutlayın.',
        category: 'academic',
      },
      {
        id: 'm4-5',
        titleEn: 'File 24-Month STEM OPT Extension (Total 36 Months Legal US Work)',
        titleTr: '24 Aylık STEM OPT Uzatmasını Yapın (Toplam 36 Ay Yasal ABD Çalışma)',
        deadlineEn: 'Before Initial 12-Month OPT Expires',
        deadlineTr: 'İlk 12 Aylık OPT Bitmeden',
        descriptionEn: 'As an ITU-SUNY Engineering or CS graduate, submit Form I-983 with an E-Verify employer to extend your US work authorization to 3 full years!',
        descriptionTr: 'Mühendislik veya Bilişim mezunu olarak E-Verify kayıtlı bir şirkette Form I-983 doldurarak ABD çalışma izninizi toplam 3 yıla (36 aya) uzatın!',
        isImportant: true,
        category: 'career',
      },
    ],
    proTipsEn: [
      'Submit your OPT application exactly on the 90th day prior to graduation; USCIS processing takes between 60 and 90 days.',
      'Dual-diploma graduates with Turkish math rigor and American capstone experience have exceptional placement in supply chain, tech, and consulting across NY/NJ.',
      'Never lose any historical I-20 document! You will need every I-20 ever issued when applying for your STEM extension and future H-1B visas.',
    ],
    proTipsTr: [
      'OPT başvurunuzu mezuniyetten tam 90 gün önce açıldığı ilk gün yapın; USCIS onay süreleri 60 ila 90 gün sürmektedir.',
      'İTÜ’nün matematik temeli ile Binghamton’ın pratik kurumsal proje tecrübesine sahip çift diploma mezunları New York/New Jersey bölgesinde kolaylıkla iş bulmaktadır.',
      'Bugüne kadar size verilen hiçbir I-20 belgesini atmayın! 3 yıllık STEM uzatması ve gelecekteki H-1B çalışma vizelerinde tüm eski I-20 kopyalarınız zorunlu olarak istenir.',
    ],
  },
];
