import React, { useState, useEffect } from 'react';
import { SurvivalGuide } from '../data/guidesData';
import { X, Clock, CheckCircle2, Circle, Lightbulb, MessageSquare, Share2, Check } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface GuideModalProps {
  guide: SurvivalGuide | null;
  onClose: () => void;
  lang?: Language;
}

export const GuideModal: React.FC<GuideModalProps> = ({ guide, onClose, lang = 'tr' }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copiedLink, setCopiedLink] = useState(false);
  const [expandedQA, setExpandedQA] = useState<Record<number, boolean>>({ 0: true });
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (guide) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [guide, onClose]);

  if (!guide) return null;

  const title = lang === 'tr' ? guide.titleTr : guide.titleEn;
  const summary = lang === 'tr' ? guide.summaryTr : guide.summaryEn;
  const category = lang === 'tr' ? guide.categoryTr : guide.categoryEn;
  const readTime = lang === 'tr' ? guide.readTimeTr : guide.readTimeEn;
  const updatedAt = lang === 'tr' ? guide.updatedAtTr : guide.updatedAtEn;
  const sections = (lang === 'tr' ? guide.sectionsTr : guide.sectionsEn) || guide.sectionsTr || [];
  const interviewQA = (lang === 'tr' ? guide.interviewQATr : guide.interviewQAEn) || guide.interviewQATr;

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleQA = (idx: number) => {
    setExpandedQA((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-xs overflow-y-auto animate-fade-in"
    >
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden transition-colors">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/80">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${guide.badgeColor}`}>
              {category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              {readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
              title="Copy share link"
              aria-label="Share guide link"
            >
              {copiedLink ? (
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <Check className="w-4 h-4" /> Copied!
                </span>
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
              aria-label="Close guide modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-6 sm:py-8 space-y-8">
          {/* Header section */}
          <div>
            <h2 id="guide-modal-title" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight mb-3">
              {title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {summary}
            </p>
            <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 mt-2">
              {updatedAt} • Student Curated
            </div>
          </div>

          {/* Guide Sections */}
          {sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800 first:border-none first:pt-0">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {section.title}
              </h3>

              {/* Text paragraphs */}
              <div className="space-y-3">
                {section.content.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Comparison or Info Table */}
              {section.table && (
                <div className="overflow-x-auto my-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold border-b border-slate-200 dark:border-slate-700">
                      <tr>
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-3 py-2.5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/60 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`px-3 py-2.5 text-slate-700 dark:text-slate-300 ${
                                cIdx === 0 ? 'font-bold text-slate-900 dark:text-white' : ''
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Checklist */}
              {section.checklist && section.checklist.length > 0 && (
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 rounded-2xl p-4 sm:p-5 my-4">
                  <div className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                    {lang === 'tr' ? 'Kontrol Listesi:' : 'Checklist:'}
                  </div>
                  <div className="space-y-2.5">
                    {section.checklist.map((item, cIdx) => {
                      const isDone = Boolean(checkedItems[cIdx]);
                      return (
                        <div
                          key={cIdx}
                          onClick={() => toggleCheck(cIdx)}
                          className="flex items-start gap-2.5 cursor-pointer text-xs group"
                        >
                          <button
                            type="button"
                            aria-label={`Toggle item: ${item}`}
                            className="mt-0.5 text-slate-400 group-hover:text-emerald-700 transition"
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-[#005A43] dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950" />
                            ) : (
                              <Circle className="w-4 h-4" />
                            )}
                          </button>
                          <span
                            className={
                              isDone ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-700 dark:text-slate-200 font-medium'
                            }
                          >
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Pro Tips Callout */}
              {section.tips && section.tips.length > 0 && (
                <div className="bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-4 my-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#005A43] dark:text-emerald-400 uppercase tracking-wider mb-2">
                    <Lightbulb className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                    <span>{lang === 'tr' ? 'Mezun Tavsiyeleri' : 'Insider Pro-Tips'}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-emerald-950 dark:text-emerald-200">
                    {section.tips.map((tip, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="font-bold text-emerald-700 dark:text-emerald-400">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Consular Interview Q&A Section if present */}
          {interviewQA && interviewQA.length > 0 && (
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {lang === 'tr' ? 'Gerçek Konsolosluk Mülakat Simülasyonu (Soru-Cevap)' : 'Real Consular Interview Simulation (Top Questions)'}
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                {lang === 'tr'
                  ? 'İstanbul (İstinye) ve Ankara’da Türk çift diploma öğrencilerine bizzat yöneltilmiş mülakat soruları ve onay alan örnek yanıtlar:'
                  : 'Actual questions asked by US consular officers in Istanbul and Ankara to Turkish dual-degree candidates:'}
              </p>

              <div className="space-y-3">
                {interviewQA.map((qa, qIdx) => {
                  const isOpen = Boolean(expandedQA[qIdx]);
                  return (
                    <div
                      key={qIdx}
                      className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-2xs"
                    >
                      <button
                        onClick={() => toggleQA(qIdx)}
                        className="w-full text-left px-4 py-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 dark:text-white transition"
                      >
                        <span>Q: "{qa.question}"</span>
                        <span className="text-xs text-slate-400 font-normal">
                          {isOpen ? (lang === 'tr' ? 'Yanıtı Gizle ▲' : 'Hide Answer ▲') : (lang === 'tr' ? 'Yanıtı Gör ▼' : 'Show Answer ▼')}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                          <div className="text-slate-500 dark:text-slate-400 italic">
                            <span className="font-semibold text-slate-700 dark:text-slate-300">
                              {lang === 'tr' ? 'Konsolosun test ettiği niyet: ' : 'Target context: '}
                            </span>
                            {qa.context}
                          </div>
                          <div className="bg-emerald-50/70 dark:bg-emerald-950/40 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/60 text-slate-800 dark:text-emerald-200 leading-relaxed font-mono">
                            <span className="font-bold text-[#005A43] dark:text-emerald-300 font-sans">
                              {lang === 'tr' ? 'Örnek Başarılı Yanıt: ' : 'Recommended Answer: '}
                            </span>
                            "{qa.suggestedAnswer}"
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {lang === 'tr' ? 'Sorularınız mı var? SUNY WhatsApp grubuna danışabilirsiniz.' : 'Have a question? Ask your fellow SUNY peers on WhatsApp.'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs"
          >
            {t.doneReading}
          </button>
        </div>
      </div>
    </div>
  );
};
