export interface GuideQuestion {
  question: string;
  context: string;
  suggestedAnswer: string;
}

export interface GuideSection {
  title: string;
  content: string[];
  tips?: string[];
  checklist?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface SurvivalGuide {
  id: string;
  slug: string;
  titleEn: string;
  titleTr: string;
  categoryEn: string;
  categoryTr: string;
  readTimeEn: string;
  readTimeTr: string;
  summaryEn: string;
  summaryTr: string;
  badgeColor: string;
  updatedAtEn: string;
  updatedAtTr: string;
  sectionsEn: GuideSection[];
  sectionsTr: GuideSection[];
  interviewQAEn?: GuideQuestion[];
  interviewQATr?: GuideQuestion[];
}

export const SURVIVAL_GUIDES: SurvivalGuide[] = [
  {
    id: 'guide-f1-visa',
    slug: 'f1-visa-survival-guide',
    titleEn: 'The F-1 Visa & DS-160 Master Checklist',
    titleTr: 'F-1 Öğrenci Vizesi & DS-160 Rehberi',
    categoryEn: 'Visa & Immigration',
    categoryTr: 'Vize & Göçmenlik',
    readTimeEn: '8 min read',
    readTimeTr: '8 dk okuma',
    summaryEn: 'Everything you need to ace your F-1 student visa interview at the US Consulate in Istanbul (İstinye) or Ankara. Includes financial documentation criteria, SEVIS fee, and real consular Q&A.',
    summaryTr: 'İstanbul (İstinye) veya Ankara ABD Başkonsolosluğu’ndaki F-1 öğrenci vizesi mülakatını tek seferde geçmeniz için gereken her şey: Maddi teminat kriterleri, SEVIS harcı ve gerçek mülakat soru-cevapları.',
    badgeColor: 'bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800',
    updatedAtEn: 'Updated for 2025/2026 Academic Year',
    updatedAtTr: '2025/2026 Akademik Yılı İçin Güncellendi',
    sectionsEn: [
      {
        title: '1. The F-1 Visa Road Ahead',
        content: [
          'The F-1 non-immigrant student visa allows you to study full-time at your SUNY campus in New York. As an ITU / ODTÜ SUNY dual-diploma student, consular officers in Turkey recognize the prestigious academic nature of the state university partnership.',
          'Under US Immigration Law (INA 214(b)), you must clearly demonstrate: (1) Strong ties to Turkey with intent to return after graduation, and (2) Sufficient liquid funds to cover tuition and living expenses without unauthorized off-campus work.',
        ],
        tips: [
          'Never state in your visa interview that you plan to stay permanently or seek a green card in the US. Emphasize how this dual degree accelerates your career in Turkey or global multinationals.',
          'Bring all paperwork in an organized, clearly tabbed plastic folder.',
        ],
      },
      {
        title: '2. Mandatory Document Dossier Checklist',
        content: ['Gather and double-check every item before your consulate interview date:'],
        checklist: [
          'Original SUNY Form I-20 (signed in ink at the bottom of Page 1)',
          'Valid Turkish Passport (valid for at least 6 months beyond intended US stay)',
          'DS-160 Confirmation Page with readable barcode',
          'US Visa Appointment Confirmation Letter',
          'SEVIS I-901 Fee Payment Receipt ($350 paid via fmjfee.com)',
          'One 2x2 inch (5x5 cm) US visa photo (white background, no glasses)',
          'Official English Transcript from home university showing current CGPA',
          'English Language Proficiency score report (TOEFL / IELTS / DET)',
          'Financial Guarantee Proof: Bank letters showing liquid funds ($45,000 - $50,000 USD equivalent)',
          'Sponsor Affidavit of Support (Notary-approved "Maddi Destek Taahhütnamesi")',
          'Sponsor Income Proof: SGK hizmet dökümü, vergi levhası, tapu fotokopileri',
          'Student Certificate (Öğrenci Belgesi) from e-Devlet with English translation',
        ],
      },
    ],
    sectionsTr: [
      {
        title: '1. F-1 Öğrenci Vizesi Süreci',
        content: [
          'F-1 göçmen olmayan öğrenci vizesi, New York’taki SUNY kampüsünde tam zamanlı lisans eğitimi almanızı sağlar. İTÜ veya ODTÜ SUNY çift diploma öğrencisi olmanız konsoloslukta büyük bir avantajdır; konsoloslar iki köklü devlet üniversitesinin ortak programını çok iyi tanırlar.',
          'Buna rağmen ABD Göçmenlik Yasası (INA 214(b)) uyarınca iki temel kriteri kanıtlamanız zorunludur: (1) Eğitim bitiminde Türkiye’ye döneceğinize dair ailevi ve kariyer bağları, (2) Eğitim ve yaşam masraflarını karşılayacak yeterli nakit/likit birikim.',
        ],
        tips: [
          'Mülakatta asla ABD’de temelli kalmak veya Green Card almak istediğinizi söylemeyin. Çift diplomanın Türkiye sanayisindeki ve uluslararası firmalardaki kariyerinize sağlayacağı değeri vurgulayın.',
          'Tüm evraklarınızı şeffaf, etiketli bir dosyada düzenli tutun. Konsolosluk memuru belge sorduğunda 3 saniye içinde uzatabilmelisiniz.',
        ],
      },
      {
        title: '2. Eksiksiz Vize Evrak Dosyası Kontrol Listesi',
        content: ['Mülakat sabahı İstinye veya Ankara konsolosluğuna girmeden önce bu evrakları sırasıyla kontrol edin:'],
        checklist: [
          'Islak veya dijital imzalı orijinal SUNY Form I-20 belgesi',
          'En az 2 yıl geçerliliği olan T.C. Pasaportu',
          'DS-160 Onay Sayfası (barkodlu çıktı)',
          'Konsolosluk Vize Randevu Onay Mektubu',
          '350$ SEVIS I-901 Harç Ödeme Makbuzu (fmjfee.com)',
          '1 adet 5x5 cm biyometrik Amerikan vize fotoğrafı (beyaz fon, gözlüksüz)',
          'İTÜ / ODTÜ Öğrenci İşlerinden alınmış onaylı İngilizce transkript',
          'İngilizce Yeterlilik Sınav Sonuç Belgesi (TOEFL / IELTS / DET)',
          'Maddi Teminat: Bankadan alınmış en az 45.000$ - 50.000$ karşılığı likit bakiye yazısı (TL, USD, EUR veya Altın)',
          'Noter Onaylı Sponsor Maddi Destek Taahhütnamesi (Anne/Baba sponsorluğu)',
          'Sponsorun gelir belgeleri: SGK Hizmet Dökümü, Vergi Levhası, Maaş Bordrosu, varsa Tapu fotokopileri',
          'e-Devlet üzerinden alınmış İngilizce barkodlu Öğrenci Belgesi',
        ],
      },
      {
        title: '3. Maddi Teminat (Bank Letter) Kuralları',
        content: [
          'I-20 belgenizde belirtilen yıllık tahmini masraf yaklaşık 44.000$ - 48.000$ civarındadır.',
          'Konsolosluk yetkilisi bu paranın hesapta nakit/likit (vadesiz mevduat, vadeli hesap veya fon) olarak bulunmasını ister. Gayrimenkul veya arsa tek başına yetmez; tapular aile bağlarını ve maddi gücü kanıtlayan ek destekleyici belgedir.',
          'Mülakattan hemen 2 gün önce hesaba açıklanamayan devasa bir para transferi yapmaktan kaçının. Düzenli aile birikimi veya gayrimenkul/araç satışı gibi kaynağı belgeli olmalıdır.',
        ],
      },
    ],
    interviewQAEn: [
      {
        question: 'Why are you going to the United States?',
        context: 'Assessing academic clarity and understanding of the program.',
        suggestedAnswer: 'I am a dual-diploma student at Istanbul Technical University in the ITU-Binghamton dual-degree program. In this alternating model, I completed Year 1 at ITU, and I am now transferring to Binghamton Watson College for Year 2 to take core engineering coursework.',
      },
      {
        question: 'Who is funding your education and living expenses?',
        context: 'Verifying financial sufficiency under INA 214(b).',
        suggestedAnswer: 'My parents are funding my entire education. My father is an executive at [Company] and my mother is a [Profession]. We have sufficient liquid funds in our accounts as verified by this official bank statement and notarized affidavit.',
      },
      {
        question: 'What are your career plans after graduation?',
        context: 'Testing non-immigrant intent and return ties.',
        suggestedAnswer: 'After completing my dual B.S. degrees, I plan to return to Turkey to work in industrial optimization or data analytics at multinational firms such as Ford Otosan, Arçelik, or global consulting companies in Istanbul.',
      },
    ],
    interviewQATr: [
      {
        question: 'Neden Amerika Birleşik Devletleri’ne gidiyorsunuz?',
        context: 'Akademik programı ne kadar iyi bildiğinizi ölçer.',
        suggestedAnswer: 'İTÜ ile Binghamton Üniversitesi arasındaki uluslararası ortak çift diploma öğrencisiyim. Programımızın dönüşümlü modeli uyarınca 1. yılımı İTÜ’de tamamladım; şimdi 2. sınıf mühendislik derslerimi almak üzere Binghamton Watson Mühendislik Fakültesi’ne gidiyorum.',
      },
      {
        question: 'Eğitim ve yaşam masraflarınızı kim karşılıyor?',
        context: 'Maddi yeterliliği ve kaynakların meşruiyetini teyit eder.',
        suggestedAnswer: 'Eğitimimin tüm masraflarını ailem karşılıyor. Babam [Şirket Adı]’nda yönetici, annem ise [Meslek]. Ekli resmi banka yazımızda ve noter taahhütnamemizde görüldüğü üzere hesabımızda yeterli likit birikimimiz mevcuttur.',
      },
      {
        question: 'Mezuniyet sonrası kariyer planınız nedir?',
        context: 'Göçmenlik niyetinizin olmadığını ve Türkiye’ye dönüş bağınızı test eder.',
        suggestedAnswer: 'Çift diplomamı tamamladıktan sonra Türkiye’ye dönerek İstanbul’daki Ford Otosan, Arçelik veya küresel teknoloji/danışmanlık şirketlerinin tedarik zinciri veya optimizasyon departmanlarında mühendis olarak çalışmayı hedefliyorum.',
      },
    ],
  },
  {
    id: 'guide-housing',
    slug: 'binghamton-housing-guide',
    titleEn: 'Binghamton & Upstate NY Housing Master Guide',
    titleTr: 'Binghamton & New York Ev Kiralama Rehberi',
    categoryEn: 'Housing & Living',
    categoryTr: 'Barınma & Yaşam',
    readTimeEn: '10 min read',
    readTimeTr: '10 dk okuma',
    summaryEn: 'Comprehensive comparison of University Plaza, Hayes, Twin River, Sweethome, and downtown student living. Rent costs, lease signing, and winter heating bills.',
    summaryTr: 'University Plaza, Hayes, Twin River ve kampüs yakını öğrenci sitelerinin detaylı karşılaştırması. Kira sözleşmesi imzalama, kefil (guarantor) prosedürleri ve NYSEG kış ısıtma faturaları.',
    badgeColor: 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    updatedAtEn: 'Fall 2025 / Spring 2026 Rates',
    updatedAtTr: '2025/2026 Güncel Kira Fiyatları',
    sectionsEn: [
      {
        title: '1. Off-Campus Housing in Upstate New York',
        content: [
          'Living off-campus gives Turkish students significantly more autonomy, full kitchens for Turkish cooking, private bedrooms, in-unit washers/dryers, and lower monthly costs than on-campus dormitories.',
          'In Binghamton, University Plaza (UP) and Hayes are directly along Vestal Parkway near Target and supermarkets, served by free student green buses.',
        ],
      },
    ],
    sectionsTr: [
      {
        title: '1. New York Eyaletinde Ev Kiralama Mantığı',
        content: [
          'Türk çift diploma öğrencilerinin %95’i 2. ve 4. sınıflarda kampüs dışı öğrenci sitelerinde (off-campus student housing) kalmayı tercih eder. Yurtlara göre hem çok daha ekonomiktir hem de kendi mutfağınızda Türk yemekleri pişirme, özel banyolu yatak odası ve çamaşır makinesi özgürlüğü sunar.',
          'Vestal Parkway üzerindeki University Plaza (UP) ve Hayes gibi siteler marketlere yürüme mesafesinde olup kapınızın önünden ücretsiz yeşil kampüs otobüsleri (OCCT) geçer.',
        ],
      },
      {
        title: '2. Popüler Öğrenci Sitelerinin Karşılaştırması',
        content: ['Binghamton ve New York bölgesinde en çok tercih edilen sitelerin özellikleri:'],
        table: {
          headers: ['Site Adı', 'Oda Başı Kira', 'Konum & Mesafe', 'Otobüs Hattı', 'Öne Çıkan Artısı'],
          rows: [
            ['University Plaza (UP)', '$810 - $860 / ay', 'Vestal (1.2 mil)', 'OCCT UP Shuttle (15 dk bir)', 'Türk öğrencilerin 1 numaralı tercihi; Target ve Weis markete yürüyerek 2 dk; eşyalı.'],
            ['Hayes Student Living', '$730 - $780 / ay', 'Vestal (2.0 mil)', 'OCCT Vestal Line', 'Ekonomik kira; geniş salon; Walmart ve Asya marketine çok yakın.'],
            ['Twin River Commons', '$890 - $950 / ay', 'Downtown Binghamton', 'OCCT DCL Ekspres', 'Lüks daireler, spor salonu, UDC kampüs binasının hemen karşısı.'],
            ['20 Hawley / Chenango', '$870 - $930 / ay', 'Downtown', 'OCCT DDC', 'Şehir merkezindeki kafe ve restoranlara yakın hareketli sosyal hayat.'],
          ],
        },
      },
      {
        title: '3. Kefil (Guarantor) & Leap Sigortası Prosedürü',
        content: [
          'Amerikan emlak yönetimleri kiralama yaparken kiracının veya ailesinin ABD’de SSN ve 650+ kredi puanı olmasını şart koşar. Türk ailelerin ABD kredi geçmişi bulunmadığından şu iki yöntem kullanılır:',
          '1. Leap / The Guarantors: Uluslararası öğrenciler için tek seferlik sigorta primi (~300$) ödeyerek yasal Amerikan kefili sağlar.',
          '2. Ek Güvence Bedeli (Deposit): Bazı siteler I-20 ve banka yazısı ile 1 veya 2 aylık iadeli depozito alarak sözleşmeyi onaylar.',
        ],
        tips: [
          'Kışın Türkiye’ye dönerken ev termostatını ASLA tamamen kapatmayın! Sıcaklığı en az 16°C (60°F) seviyesinde bırakın; aksi halde borular donup patlar ve binlerce dolarlık su hasarı kiracıya rücu edilir.',
          'NYSEG elektrik ve doğalgaz aboneliğini başlatırken "Budget Billing" seçeneğini seçin; böylece Ocak-Şubat faturalarınız 12 aya eşit bölünür ve fatura şoku yaşamazsınız.',
        ],
      },
    ],
  },
  {
    id: 'guide-banking-ssn',
    slug: 'banking-ssn-job-playbook',
    titleEn: 'Banking, SSN & On-Campus Job Playbook',
    titleTr: 'Banka Hesabı, SSN & Kampüs İşi Rehberi',
    categoryEn: 'Banking & Work',
    categoryTr: 'Banka & Çalışma',
    readTimeEn: '9 min read',
    readTimeTr: '9 dk okuma',
    summaryEn: 'How to open a US checking account without an SSN, find on-campus student employment, apply at the Social Security Administration, and start building your US credit score.',
    summaryTr: 'SSN olmadan ABD’de vadesiz banka hesabı açma, haftada 20 saate kadar kampüs içi yasal iş bulma, Sosyal Güvenlik Kartı (SSN) alma ve Discover kredi kartıyla kredi puanı oluşturma.',
    badgeColor: 'bg-blue-100 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-800',
    updatedAtEn: 'Verified by Watson Seniors',
    updatedAtTr: 'Mezunlar Tarafından Doğrulandı',
    sectionsEn: [
      {
        title: '1. Opening a US Bank Account (No SSN Required)',
        content: [
          'You do NOT need a Social Security Number to open a checking account. Visit Chase on Vestal Parkway or Bank of America during your first week with your passport, I-20, I-94 arrival record, and local lease.',
        ],
      },
    ],
    sectionsTr: [
      {
        title: '1. ABD Banka Hesabı Açılışı (SSN Gerekmez)',
        content: [
          'Amerika’ya ayak bastığınız ilk hafta yapmanız gereken ilk iş bir vadesiz banka hesabı (checking account) açmaktır. Banka hesabı açmak için SSN numarasına kesinlikle ihtiyaç yoktur.',
          'Türk öğrencilerin büyük çoğunluğu University Plaza’nın hemen yanındaki Chase Bank Vestal Parkway şubesini veya Bank of America’yı tercih eder. Chase mobil uygulamasındaki Zelle özelliği ile ev kiranızı ve ortak market fişlerinizi tek kuruş komisyon ödemeden saniyeler içinde arkadaşınıza gönderebilirsiniz.',
        ],
        checklist: [
          'F-1 vizeli T.C. Pasaportunuz',
          'Binghamton / SUNY I-20 Formunuz',
          'i94.cbp.dhs.gov sitesinden indirilmiş I-94 Giriş Belgesi çıktısı',
          'ABD adresinizi gösteren imzalı kira sözleşmesi',
          'Binghamton Üniversitesi Öğrenci Kimliği (BU ID)',
          'İlk para yatırma için 25$ - 50$ nakit para',
        ],
      },
      {
        title: '2. Sosyal Güvenlik Numarası (SSN) Neden Gereklidir?',
        content: [
          'Social Security Number (SSN), ABD hükümetinin verdiği 9 haneli kimlik ve vergi numarasıdır. F-1 öğrencileri sırf istedikleri için SSN alamazlar; SSN almanın tek yolu üniversite kampüsünde yasal bir öğrenci işine girmektir.',
          'SSN aldığınız andan itibaren kredi kartı çıkarabilir, ABD kredi notunuzu yükseltebilir ve mezuniyette OPT ile işe girerken tüm evrak işlemlerinizi dakikalar içinde tamamlayabilirsiniz.',
        ],
      },
      {
        title: '3. Kampüste İşe Girip SSN Alma Adımları',
        content: ['Adım adım kampüs içi iş ve SSN başvuru süreci:'],
        table: {
          headers: ['Aşama', 'Yapılacak İşlem', 'Zamanlama', 'Nerede'],
          rows: [
            ['1. İşe Başvurun', 'hireBING portalından Dining Services (Yemekhane) veya Watson bilgisayar laboratuvarı görevlisi ilanlarına başvurun.', 'Eylül ayı başı', 'hireBING / Kampüs'],
            ['2. İş Mektubu Alın', 'İşe kabul edildiğinizde birim amiriniz resmi "Employment Verification Letter" düzenler.', 'İşe alımdan 3 gün sonra', 'Bölüm Ofisi'],
            ['3. ISSS Onayı Alın', 'İş mektubunuzu ISSS uluslararası ofisine yükleyerek "SSN Support Letter" alın.', '3-4 iş günü', 'ISSS Portalı'],
            ['4. SSA Ofisine Gidin', 'Evraklarınızla Binghamton merkezindeki Federal Binada bulunan Sosyal Güvenlik Ofisine gidin.', 'Ekim ayı', '15 Henry St, Binghamton'],
            ['5. SSN Kartı Gelir', 'Resmi SSN kartınız mavi-beyaz güvenlikli kağıt olarak posta kutunuza teslim edilir.', '1-2 hafta içinde', 'Ev Posta Kutunuz'],
          ],
        },
      },
    ],
  },
  {
    id: 'guide-watson-academics',
    slug: 'watson-ie-course-equivalences',
    titleEn: 'Watson IE & SUNY Academic Success Guide',
    titleTr: 'Watson & SUNY Akademik Başarı Rehberi',
    categoryEn: 'Academics & Career',
    categoryTr: 'Akademik & Kariyer',
    readTimeEn: '11 min read',
    readTimeTr: '11 dk okuma',
    summaryEn: 'How American grading works, mastering continuous assessment, surviving Operations Research, and preparing for the 3-Year STEM OPT application window.',
    summaryTr: 'Amerikan üniversite eğitim sistemi, sürekli ödev/proje takibi, Yöneylem Araştırması derslerinde başarı ve mezuniyet öncesi 3 yıllık STEM OPT başvuru takvimi.',
    badgeColor: 'bg-purple-100 dark:bg-purple-950/50 text-purple-800 dark:text-purple-300 border-purple-300 dark:border-purple-800',
    updatedAtEn: 'SSIE Department Verified',
    updatedAtTr: 'Mühendislik Bölümü Onaylı',
    sectionsEn: [
      {
        title: '1. Academic Culture Differences',
        content: [
          'In Turkey, midterms and finals often determine 80-100% of your grade. In American universities, grades are distributed across weekly problem sets, Arena simulations, group presentations, and active office hour participation.',
        ],
      },
    ],
    sectionsTr: [
      {
        title: '1. Türkiye ve ABD Üniversite Eğitimi Arasındaki Farklar',
        content: [
          'Türkiye’de çoğu derste notun %80-100’ünü vize ve final sınavları belirler. New York ve Binghamton Watson müfredatında ise notlandırma haftalık ödev setleri, simülasyon laboratuvarları, takım projeleri ve derse katılıma eşit olarak dağıtılmıştır.',
          'Haftalık ödevleri günü gününe teslim etmek ve hocaların haftalık "Office Hours" (Ofis Saatleri) görüşmelerine katılmak yüksek not (A / A-) almanın en kesin yoludur.',
        ],
        tips: [
          'Rockwell Arena ve Python optimizasyon ödevlerine verildiği gün başlayın; son güne bırakılan simülasyon projeleri beklenmedik hata mesajları yüzünden yetişmeyebilir.',
          'Amerikalı sınıf arkadaşlarınızla karma çalışma grupları kurun; sunum ve rapor yazımında onlar, matematiksel modelleme ve formülasyonda Türk öğrenciler birbirini mükemmel tamamlar.',
        ],
      },
      {
        title: '2. 3 Yıllık (36 Ay) STEM OPT Başvuru Takvimi',
        content: [
          'Endüstri Mühendisliği, Bilişim Sistemleri ve Bilgisayar Mühendisliği programları ABD hükümeti tarafından STEM (Science, Technology, Engineering, Math) statüsündedir.',
          'Mezuniyet tarihinize tam 90 gün kala USCIS sistemine Form I-765 ile 12 aylık ilk OPT başvurunuzu yaparsınız. Ardından E-Verify kayıtlı bir Amerikan şirketinde çalışırken 24 aylık uzatmayı alarak toplam 36 ay (3 yıl) boyunca H-1B vize kurasına ihtiyaç duymadan ABD’de yasal olarak çalışabilirsiniz.',
        ],
      },
    ],
  },
  {
    id: 'guide-winter-living',
    slug: 'upstate-ny-winter-survival',
    titleEn: 'Upstate NY Weather & Winter Living Essentials',
    titleTr: 'New York Kışı, Kar Acil Durumu & Yaşam Rehberi',
    categoryEn: 'Binghamton Survival',
    categoryTr: 'New York Yaşamı',
    readTimeEn: '7 min read',
    readTimeTr: '7 dk okuma',
    summaryEn: 'Surviving lake-effect blizzards (-20°C), winter alternate-side street parking rules, grocery shopping at Wegmans, and free student transit.',
    summaryTr: '-20°C göl etkisi kar fırtınalarına hazırlık, sokak kar temizleme dönüşümlü otopark kuralları, Wegmans market alışverişi ve ücretsiz ulaşım.',
    badgeColor: 'bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300 border-teal-300 dark:border-teal-800',
    updatedAtEn: 'Winter Edition',
    updatedAtTr: 'Kış Özel Rehberi',
    sectionsEn: [
      {
        title: '1. Upstate New York Winter Reality',
        content: [
          'Binghamton and Buffalo experience severe lake-effect snowstorms from Lake Ontario and Lake Erie. Temperatures from December through March frequently stay below freezing (0°F to 20°F / -18°C to -7°C).',
        ],
      },
    ],
    sectionsTr: [
      {
        title: '1. New York Eyaletinin Kış Gerçeği',
        content: [
          'Binghamton, Buffalo ve Cortland göl etkisi (lake-effect) kar yağışlarıyla ünlüdür. Aralık ayından Mart sonuna kadar sıcaklıklar sıklıkla -10°C ile -25°C arasında seyreder.',
          'Doğru kıyafet ve termal içliklerle bu soğuk son derece keyifli ve bembeyaz bir masal ortamına dönüşür!',
        ],
        checklist: [
          'Kaz tüyü kalın kaban / parka (The North Face, Columbia, Marmot)',
          'Kaydırmaz tabanlı su geçirmez kar botu (Timberland / Sorel / Columbia)',
          'Termal içlik (Uniqlo HEATTECH Ultra Warm veya eşdeğeri)',
          'Yün çoraplar ve dokunmatik ekran uyumlu polar eldiven',
          'Arabanız varsa arkada bulundurmanız gereken buz kazıyıcı ve kar fırçası',
        ],
      },
      {
        title: '2. Şehir İçi Kar Otopark Kuralı (Alternate Side Parking)',
        content: [
          'Şehir içinde araba kullanıyorsanız 1 Aralık - 31 Mart tarihleri arasında "Alternate Side Parking" kuralına uymak zorundasınız.',
          'Çift sayılı günlerde sokağın çift numaralı binalarının olduğu tarafına, tek sayılı günlerde tek numaralı tarafa park etmelisiniz. Aksi halde belediye kar küreme araçları geçemez ve aracınız çekilerek 150$+ ceza ödemek zorunda kalırsınız!',
        ],
      },
    ],
  },
];
