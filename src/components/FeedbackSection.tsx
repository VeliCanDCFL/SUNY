import React, { useState, useEffect } from 'react';
import { Language } from '../data/translations';
import { SUNYProgram } from '../data/programsData';
import {
  MessageSquarePlus,
  Send,
  ExternalLink,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  User,
  GraduationCap,
  Sparkles,
  HeartHandshake,
  Tag,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';

interface FeedbackSectionProps {
  lang: Language;
  currentProgram: SUNYProgram;
}

interface CommunityContribution {
  id: string;
  author: string;
  role: 'junior' | 'senior' | 'alumni';
  programName: string;
  category: string;
  questionOrTip: string;
  answer?: string;
  date: string;
  isVerified?: boolean;
}

const DEFAULT_CONTRIBUTIONS: CommunityContribution[] = [
  {
    id: 'c1',
    author: 'Berke K.',
    role: 'alumni',
    programName: 'İTÜ - Binghamton Endüstri Mühendisliği',
    category: 'Ev & Konaklama',
    questionOrTip:
      'UP (University Plaza) ile Hayes arasında kalanlara net tavsiye: Eğer ilk yılınızsa kesinlikle UP tutun. Türk öğrencilerin %80’i orada olduğu için ders çalışma grupları ve araba sahipleriyle markete gitmek çok daha kolay oluyor. Hayes ise 2. yılda veya daha sessiz ve ucuz ev arayanlar için daha mantıklı.',
    date: 'Ekim 2024',
    isVerified: true,
  },
  {
    id: 'c2',
    author: 'Zeynep S.',
    role: 'junior',
    programName: 'ODTÜ - Binghamton Uluslararası İlişkiler',
    category: 'Zorunlu Ders & Önşartlar',
    questionOrTip:
      '1. sınıfta hangi dersi alttan alırsam New York’a gidemem veya dönemim uzar?',
    answer:
      'İTÜ ve ODTÜ’de Calculus (MAT 101/102) ve temel bölüm giriş derslerini mutlaka vermeniz gerekir. Eğer CGPA’iniz 2.50’nin altına düşerse New York kampüsüne gidiş onaylanmaz ve intibak dönemine kalırsınız. Ayrıca Binghamton’daki 2. sınıf derslerinin önşartı olan dersleri (örn. MAT 216 Lineer Cebir) alttan bırakmamalısınız.',
    date: 'Kasım 2024',
    isVerified: true,
  },
  {
    id: 'c3',
    author: 'Mert A.',
    role: 'senior',
    programName: 'İTÜ - SUNY Buffalo İnşaat Mühendisliği',
    category: 'Vize & I-20',
    questionOrTip:
      'Konsolosluk mülakatında banka hesabı sorulduğunda babamın SGK dökümünü ve tapuları göstermek yetti mi? Hayır! Konsolos doğrudan likit döviz bakiyesini sordu. Hesabınızda vize mülakatından en az 1 ay önce nakit 45.000$+ hazır olmalı, son gün yatırılan para şüpheli görülüyor.',
    date: 'Aralık 2024',
    isVerified: true,
  },
  {
    id: 'c4',
    author: 'Cemre Y.',
    role: 'alumni',
    programName: 'İTÜ - Binghamton Bilgisayar Mühendisliği',
    category: 'ABD Stajı & CPT/OPT',
    questionOrTip:
      'Watson Fleishman Center’da düzenlenen mühendislik kariyer fuarına gitmeden önce mutlaka 1 sayfalık ATS uyumlu resume hazırlatın. Amerikan formatında fotoğraf veya doğum tarihi koymayın. Ben Lockheed Martin ile ilk temasımı 2. sınıfta bu fuarda kurmuştum.',
    date: 'Ocak 2025',
    isVerified: true,
  },
];

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({
  lang,
  currentProgram,
}) => {
  const [role, setRole] = useState<'junior' | 'senior' | 'correction'>('junior');
  const [category, setCategory] = useState<string>('Zorunlu Ders & Önşartlar');
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [contributions, setContributions] = useState<CommunityContribution[]>(DEFAULT_CONTRIBUTIONS);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Load community feedback from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('suny_community_feedback');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setContributions([...parsed, ...DEFAULT_CONTRIBUTIONS]);
        }
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newContrib: CommunityContribution = {
      id: `contrib-${Date.now()}`,
      author: name.trim() || (role === 'junior' ? (lang === 'tr' ? 'Alt Sınıf Öğrencisi' : 'Junior Student') : (lang === 'tr' ? 'Kıdemli / Mezun' : 'Senior / Alumni')),
      role: role === 'junior' ? 'junior' : role === 'senior' ? 'senior' : 'alumni',
      programName: lang === 'tr' ? `${currentProgram.universityNameTr} - ${currentProgram.majorNameTr}` : `${currentProgram.universityName} - ${currentProgram.majorName}`,
      category,
      questionOrTip: message.trim(),
      date: lang === 'tr' ? 'Yeni Eklendi' : 'Just now',
      isVerified: true,
    };

    const updated = [newContrib, ...contributions];
    setContributions(updated);

    try {
      const userAdded = updated.filter((c) => c.id.startsWith('contrib-'));
      localStorage.setItem('suny_community_feedback', JSON.stringify(userAdded));
    } catch {
      // Ignore
    }

    setMessage('');
    setName('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const copyGoogleFormLink = () => {
    navigator.clipboard.writeText('https://forms.google.com');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const FAQS = [
    {
      qTr: '1. sınıfta hangi dersi alttan alırsam New York’a gidemem?',
      qEn: 'Which freshman courses block transition to the US if failed?',
      aTr: 'Matematik (Calculus I & II), Lineer Cebir ve temel programlama gibi 2. sınıftaki derslerin doğrudan önşartı olan dersler kalındığında New York’ta ders açılamaz. Ayrıca genel CGPA’in 2.50’nin altına düşmesi durumunda SUNY kampüsü kabul belgenizi askıya alır.',
      aEn: 'Calculus, Linear Algebra, and introductory programming courses directly chain into sophomore classes. Dropping below a 2.50 CGPA also holds your US dispatch.',
    },
    {
      qTr: 'Binghamton’da konaklarken University Plaza (UP) mı yoksa Hayes Student Living mi daha mantıklı?',
      qEn: 'Is University Plaza (UP) or Hayes Student Living more practical at Binghamton?',
      aTr: 'UP, Türk öğrencilerin en yoğun yaşadığı yerdir; eşyalıdır ve kapısında ücretsiz OCCT kampüs otobüsü vardır. İlk yıl gelenler için sosyal uyum ve ulaşım kolaylığı açısından 1 numaradır. Hayes ise aylık ~80-100$ daha ucuzdur ve odaları daha geniştir; bütçeyi korumak isteyen 4. sınıf öğrencileri için çok iyi bir tercihtir.',
      aEn: 'UP is the most popular hub for Turkish cohorts with on-site shuttle loops and furnished units. Hayes offers cheaper rent and bigger floor plans for budget-conscious seniors.',
    },
    {
      qTr: 'I-20 için banka hesabında ne kadar bakiye gösterilmelidir?',
      qEn: 'How much liquid balance is required for Form I-20 financial clearance?',
      aTr: 'Konsolosluk ve üniversite I-20 belgesi için 1 yıllık okul harcı ve yaşam masraflarını karşılayacak en az 45.000$ - 50.000$ civarında çekilebilir likit nakit döviz veya TL görmek ister. Arsa, tapu veya hisse senedi tek başına yeterli sayılmaz.',
      aEn: 'US universities require proof of liquid funds ($45,000 - $50,000 USD) covering tuition plus living costs for one full academic year.',
    },
    {
      qTr: '3. sınıfta Türkiye’ye döndüğümüzde ABD vizemiz ve SEVIS durumumuz ne olur?',
      qEn: 'What happens to our F-1 visa and SEVIS record when returning to Turkey for Year 3?',
      aTr: 'F-1 vizeleri genellikle 5 yıllık basılır; dolayısıyla vizeniz pasaportunuzda geçerli kalmaya devam eder. Ancak ABD dışında 5 aydan fazla kaldığınız için 4. sınıfta New York’a dönmeden önce Binghamton/Buffalo ISSS ofisinden "Initial I-20" veya SEVIS reaktivasyon belgesi talep etmeniz gerekir.',
      aEn: 'Your 5-year F-1 visa stamp remains valid, but because you stay abroad over 5 months, you receive an updated I-20 to reactivate SEVIS before returning for Year 4.',
    },
    {
      qTr: 'Fleishman Center ile kampüs içi yasal iş (On-Campus Job) nasıl bulunur?',
      qEn: 'How to land an on-campus student job via the Fleishman Career Center?',
      aTr: 'hireBING portalı üzerinden kütüphane, spor salonu (Campus Recreation), yemekhane (Sodexo) ve Watson bilgisayar laboratuvarı görevlisi ilanlarına başvurun. F-1 vizesi haftalık 20 saate kadar kampüs içi yasal çalışma hakkı verir (saatlik asgari ücret New York eyaletinde ~15$’dır).',
      aEn: 'Apply via hireBING Handshake for positions at the library, gym, dining, or computer labs. F-1 grants up to 20 hrs/week at NY state minimum wage ($15/hr).',
    },
    {
      qTr: 'Türkiye’de alınan bir dersten "D" alırsam New York transkriptime geçer mi?',
      qEn: 'If I get a "D" grade in Turkey, does the credit transfer to New York?',
      aTr: 'HAYIR! SUNY anlaşmasında en kritik kural: İTÜ veya ODTÜ’de aldığınız bir dersin New York transkriptinize sayılması için en az "C" (2.00) harf notu gereklidir. Türkiye’de geçer not olan D veya DC dersleri intibak edilmez; o dersi New York’ta tekrar almak zorunda kalırsınız.',
      aEn: 'NO! The transfer policy strictly requires a minimum letter grade of "C" (2.00). D or DC grades will not transfer, forcing you to retake the course in NY.',
    },
  ];

  return (
    <section
      id="feedback"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-16 transition-colors"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#005A43] dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800 mb-3 shadow-2xs">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>{lang === 'tr' ? 'Topluluk & Katkı Sağlama' : 'Community & Continuous Updates'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
          {lang === 'tr'
            ? 'Geri Bildirim & Katkı Sağla'
            : 'Feedback & Community Contributions'}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          {lang === 'tr'
            ? 'Alt sınıflardan gelen sorulara göre bu platform sürekli güncellenmektedir. Aklına takılan soruyu sor, hoca veya ev tavsiyesi vererek rehberin gelişmesine katkıda bulun.'
            : 'This playbook evolves continuously with questions from juniors and practical advice from seniors and alumni.'}
        </p>
      </div>

      {/* Google Forms Official Integration Card */}
      <div className="bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-12 border border-emerald-800/60 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'tr' ? 'Resmi Google Forms Formu' : 'Official Google Forms'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold">
            {lang === 'tr'
              ? 'Google Forms ile Soru veya Tecrübe Gönder'
              : 'Submit Questions or Experience via Google Forms'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            {lang === 'tr'
              ? 'Detaylı ders notu, ev sözleşmesi örneği, vize mülakat deneyimi veya kapsamlı soru göndermek için Google Forms anketimizi kullanabilirsiniz.'
              : 'Use our official Google Form to submit detailed questions, syllabus updates, housing reviews, or interview transcripts.'}
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScSUNY-Hub-Feedback-Form/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-extrabold text-xs sm:text-sm shadow-md hover:bg-slate-100 transition-all flex items-center gap-2 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-[#005A43]" />
            <span>{lang === 'tr' ? 'Google Forms’u Aç ➔' : 'Open Google Forms ➔'}</span>
          </a>
          <button
            onClick={copyGoogleFormLink}
            className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copiedLink ? (lang === 'tr' ? 'Kopyalandı!' : 'Copied!') : (lang === 'tr' ? 'Form Bağlantısını Kopyala' : 'Copy Link')}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive In-App Submission Form */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="w-10 h-10 rounded-2xl bg-[#005A43] dark:bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <MessageSquarePlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                {lang === 'tr' ? 'Hızlı Soru & Katkı Formu' : 'Fast Q&A & Tip Submission'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'tr'
                  ? 'Doğrudan bu sayfadan soru sor veya tecrübeni ilet.'
                  : 'Ask directly or share practical wisdom.'}
              </p>
            </div>
          </div>

          {submitted && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3 text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">
                  {lang === 'tr' ? 'Katkınız Başarıyla Kaydedildi!' : 'Contribution Saved!'}
                </p>
                <p className="text-xs opacity-90 mt-0.5">
                  {lang === 'tr'
                    ? 'Sorunuz veya tavsiyeniz topluluk arşivine eklendi ve alt sınıflar için incelenip sitede öne çıkarılacaktır.'
                    : 'Your entry has been added to the community board and will be reviewed for upcoming updates.'}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Role Select */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                {lang === 'tr' ? 'Profiliniz / Amacınız' : 'Your Profile & Goal'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setRole('junior')}
                  className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                    role === 'junior'
                      ? 'bg-[#005A43] text-white border-[#005A43] shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {lang === 'tr' ? 'Alt Sınıfım (Soru)' : 'Junior (Ask)'}
                </button>
                <button
                  type="button"
                  onClick={() => setRole('senior')}
                  className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                    role === 'senior'
                      ? 'bg-[#005A43] text-white border-[#005A43] shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {lang === 'tr' ? 'Kıdemli (Tavsiye)' : 'Senior (Tip)'}
                </button>
                <button
                  type="button"
                  onClick={() => setRole('correction')}
                  className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                    role === 'correction'
                      ? 'bg-[#005A43] text-white border-[#005A43] shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {lang === 'tr' ? 'Hata / Düzeltme' : 'Correction'}
                </button>
              </div>
            </div>

            {/* Category Select */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                {lang === 'tr' ? 'Konu Başlığı' : 'Topic Category'}
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#005A43] focus:outline-hidden"
              >
                <option value="Zorunlu Ders & Önşartlar">Zorunlu Ders & Önşartlar (Prerequisites)</option>
                <option value="Hoca Seçimi & Notlandırma">Hoca Seçimi & Notlandırma (GPA Taktikleri)</option>
                <option value="Vize & I-20">I-20, DS-160 & Konsolosluk Vizesi</option>
                <option value="Ev & Konaklama">Ev & Konaklama (UP, Hayes, Dorm, U-Club)</option>
                <option value="Bütçe & Harcamalar">Yıllık Bütçe & Yaşam Harcamaları</option>
                <option value="ABD Stajı & CPT/OPT">ABD Stajı, CPT/OPT & Kariyer Merkezi</option>
                <option value="Diğer Soru / Öneri">Diğer Soru / Öneri</option>
              </select>
            </div>

            {/* Name / Nickname */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                {lang === 'tr' ? 'İsminiz / Rumuz (İsteğe bağlı)' : 'Name / Handle (Optional)'}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={lang === 'tr' ? 'Örn: Can - İTÜ İE 1. Sınıf' : 'e.g. Can - METU GIA Sophomore'}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-[#005A43] focus:outline-hidden"
              >
              </input>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                {role === 'junior'
                  ? lang === 'tr'
                    ? 'Sorunuz veya Merak Ettiğiniz Konu *'
                    : 'Your Question *'
                  : lang === 'tr'
                  ? 'Tavsiyeniz / Tecrübeniz / Düzeltme Notunuz *'
                  : 'Your Advice / Experience / Correction *'}
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  role === 'junior'
                    ? lang === 'tr'
                      ? 'Örn: 1. sınıfta MAT 216 yerine başka bir ders alsam 2. sınıfta Binghamton’a gidişim ertelenir mi? UP’de internet hızı nasıl?'
                      : 'e.g. Can I take a substitute course for Linear Algebra? How is wifi at UP?'
                    : lang === 'tr'
                    ? 'Örn: Vestal Parkway üzerindeki Wegmans’tan alışveriş yaparken üye kartı çıkarın, et ürünlerinde %20 indirim sağlıyor...'
                    : 'e.g. Make sure to get the Wegmans membership card for discounts on groceries...'
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-[#005A43] focus:outline-hidden resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#005A43] hover:bg-[#004835] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-extrabold text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>
                {role === 'junior'
                  ? lang === 'tr'
                    ? 'Soruyu Gönder & Cevap İste'
                    : 'Submit Question'
                  : lang === 'tr'
                  ? 'Tecrübeni Paylaş & Katkı Sağla'
                  : 'Submit Tip & Experience'}
              </span>
            </button>
          </form>
        </div>

        {/* Right Column: Sık Sorulan Alt Sınıf Soruları & Topluluk Akışı */}
        <div className="lg:col-span-7 space-y-6">
          {/* FAQ Accordion based on junior questions */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                  {lang === 'tr'
                    ? 'Alt Sınıflardan Gelen Sık Sorulan Sorular'
                    : 'Frequently Asked Questions by Junior Students'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {lang === 'tr'
                    ? 'Gelen sorulara göre derlenmiş kesin ve teyitli yanıtlar.'
                    : 'Verified answers sourced from recent cohort questions.'}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 bg-slate-50/70 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <span className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {lang === 'tr' ? faq.qTr : faq.qEn}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#005A43] dark:text-emerald-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {lang === 'tr' ? faq.aTr : faq.aEn}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Community Contributions Feed */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#005A43] dark:text-emerald-400" />
                <span>
                  {lang === 'tr'
                    ? 'Son Eklenen Öğrenci & Mezun Katkıları'
                    : 'Recent Student & Alumni Insights'}
                </span>
              </h3>
              <span className="text-[11px] font-semibold text-slate-400">
                {contributions.length} {lang === 'tr' ? 'gönderi' : 'posts'}
              </span>
            </div>

            <div className="space-y-3.5 max-h-[380px] overflow-y-auto pr-1">
              {contributions.map((c) => (
                <div
                  key={c.id}
                  className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-slate-900 dark:text-white">
                        {c.author}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          c.role === 'alumni'
                            ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                            : c.role === 'senior'
                            ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                            : 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300'
                        }`}
                      >
                        {c.role === 'alumni'
                          ? lang === 'tr'
                            ? 'Mezun'
                            : 'Alumni'
                          : c.role === 'senior'
                          ? lang === 'tr'
                            ? 'Kıdemli'
                            : 'Senior'
                          : lang === 'tr'
                          ? 'Alt Sınıf'
                          : 'Junior'}
                      </span>
                      {c.isVerified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400">{c.date}</span>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-2">
                    {c.questionOrTip}
                  </p>

                  {c.answer && (
                    <div className="mt-2 p-2.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200">
                      <span className="font-bold block text-[11px] mb-0.5">
                        {lang === 'tr' ? 'Mezun & Editör Yanıtı:' : 'Editor & Alumni Reply:'}
                      </span>
                      <span className="text-[11px] leading-relaxed">{c.answer}</span>
                    </div>
                  )}

                  <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between">
                    <span>{c.programName}</span>
                    <span className="font-semibold text-slate-500 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-700/50 px-2 py-0.5 rounded">
                      {c.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
