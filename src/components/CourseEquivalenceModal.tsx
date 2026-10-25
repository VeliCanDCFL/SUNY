import React, { useState, useEffect } from 'react';
import { X, Search, BookOpen, AlertCircle, School } from 'lucide-react';
import { SUNYProgram } from '../data/programsData';
import { Language, TRANSLATIONS } from '../data/translations';

interface CourseEquivalenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProgram: SUNYProgram;
  lang: Language;
}

export const CourseEquivalenceModal: React.FC<CourseEquivalenceModalProps> = ({
  isOpen,
  onClose,
  currentProgram,
  lang,
}) => {
  const [query, setQuery] = useState('');
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

  const courses = currentProgram.courses || [];
  const filtered = courses.filter((item) => {
    if (query.trim() !== '') {
      const q = query.toLowerCase();
      return (
        item.homeCode.toLowerCase().includes(q) ||
        item.homeName.toLowerCase().includes(q) ||
        item.sunyCode.toLowerCase().includes(q) ||
        item.sunyName.toLowerCase().includes(q) ||
        item.notes.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-xs animate-fade-in"
    >
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col transition-colors">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#005A43] dark:text-emerald-400" />
            <div>
              <h3 id="course-modal-title" className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {lang === 'tr' ? currentProgram.universityNameTr : currentProgram.universityName} → {currentProgram.sunyCampus}
              </h3>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'tr' ? currentProgram.majorNameTr : currentProgram.majorName} {lang === 'tr' ? 'Ders İntibak Tablosu' : 'Course Equivalencies'}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
            aria-label="Close course modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === 'tr' ? "Ders kodu veya adına göre ara (örn. Lineer Cebir, OR, SSIE)..." : "Search by course code or title (e.g. Linear Algebra, SSIE 340)..."}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#005A43]/30"
            />
          </div>
        </div>

        {/* Course List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              {lang === 'tr' ? 'Eşleşen ders bulunamadı.' : 'No matching courses found.'}
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[#005A43]/40 bg-white dark:bg-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-700 transition-all shadow-2xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  {/* Left: Home Course */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      {item.homeCode}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{item.homeName}</span>
                  </div>

                  {/* Transfer Arrow */}
                  <div className="hidden sm:inline-block text-xs font-bold text-slate-400">→</div>

                  {/* Right: SUNY Course */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs bg-emerald-50 dark:bg-emerald-950/60 text-[#005A43] dark:text-emerald-300 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                      {item.sunyCode}
                    </span>
                    <span className="font-bold text-emerald-950 dark:text-emerald-300 text-sm">
                      {item.sunyName}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">({item.credits})</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50/80 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 mt-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{lang === 'tr' ? 'Ders İçeriği & Detay: ' : 'Course Focus & Tools: '}</span>
                  {item.notes}
                </p>
              </div>
            ))
          )}

          {/* Advice card */}
          <div className="bg-amber-50 dark:bg-amber-950/40 p-3.5 rounded-2xl border border-amber-200 dark:border-amber-800/60 text-xs text-amber-950 dark:text-amber-300 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
            <span>
              {lang === 'tr' ? (
                <>
                  <strong>SUNY Kredi Transfer Kuralı:</strong> Türkiye’deki üniversitenizden transfer edilen derslerin SUNY kampüsü derece gereksinimlerini sağlaması için minimum "C" (2.0/4.0) harf notuyla geçilmiş olması zorunludur.
                </>
              ) : (
                <>
                  <strong>SUNY Credit Transfer Rule:</strong> All courses transferred from your home university require a minimum letter grade of "C" (2.0/4.0) to satisfy SUNY graduation requirements.
                </>
              )}
            </span>
          </div>
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
