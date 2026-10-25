import React, { useState, useEffect } from 'react';
import { GLOSSARY_TERMS, GlossaryTerm } from '../data/glossaryData';
import { X, Search, HelpCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: Language;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose, lang = 'tr' }) => {
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = ['All', 'Immigration', 'Academics', 'Campus Life', 'Living'];

  const filtered = GLOSSARY_TERMS.filter((item) => {
    if (categoryFilter !== 'All' && item.categoryEn !== categoryFilter) return false;
    if (query.trim() !== '') {
      const q = query.toLowerCase();
      const def = lang === 'tr' ? item.definitionTr : item.definitionEn;
      const why = lang === 'tr' ? item.whyItMattersTr : item.whyItMattersEn;
      return (
        item.term.toLowerCase().includes(q) ||
        item.fullName.toLowerCase().includes(q) ||
        def.toLowerCase().includes(q) ||
        why.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="glossary-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-xs animate-fade-in"
    >
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col transition-colors">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#005A43] dark:text-emerald-400" />
            <h3 id="glossary-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
              {lang === 'tr' ? 'ABD Akademik & Göçmenlik Terimleri Sözlüğü' : 'US Academic & Immigration Acronyms Glossary'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
            aria-label="Close glossary dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search I-20, SEVIS, STEM OPT, SSN, UDC, OCCT, Taahhütname..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#005A43]/30"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1 rounded-lg font-semibold whitespace-nowrap transition ${
                  categoryFilter === cat
                    ? 'bg-[#005A43] dark:bg-emerald-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Terms List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-10 text-xs text-slate-400">
              {lang === 'tr' ? 'Eşleşen terim bulunamadı.' : 'No matching terms found.'}
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[#005A43]/40 bg-white dark:bg-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-700 transition-all shadow-2xs"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-black text-[#005A43] dark:text-emerald-400">{item.term}</span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      — {item.fullName}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {lang === 'tr' ? item.categoryTr : item.categoryEn}
                  </span>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                  {lang === 'tr' ? item.definitionTr : item.definitionEn}
                </p>

                <div className="text-xs text-emerald-900 dark:text-emerald-200 bg-emerald-50/70 dark:bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
                  <span className="font-bold">
                    {lang === 'tr' ? 'SUNY Öğrencileri İçin Önemi: ' : 'Why it matters for SUNY students: '}
                  </span>
                  {lang === 'tr' ? item.whyItMattersTr : item.whyItMattersEn}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
