import React, { useState, useEffect } from 'react';
import { TURKISH_UNIVERSITIES, SUNY_PROGRAMS, SUNYProgram } from '../data/programsData';
import { Language, TRANSLATIONS } from '../data/translations';
import { X, Check, School, GraduationCap, MapPin, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProgramSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgramId: string;
  onSelectProgram: (programId: string) => void;
  lang: Language;
}

export const ProgramSelectorModal: React.FC<ProgramSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedProgramId,
  onSelectProgram,
  lang,
}) => {
  const t = TRANSLATIONS[lang];
  const currentProgram = SUNY_PROGRAMS[selectedProgramId] || SUNY_PROGRAMS['itu-bing-ie'];
  const [chosenUniId, setChosenUniId] = useState<'itu' | 'odtu' | 'anadolu' | 'istanbul'>(
    currentProgram.universityId
  );
  const [chosenProgramId, setChosenProgramId] = useState<string>(selectedProgramId);

  useEffect(() => {
    if (currentProgram) {
      setChosenUniId(currentProgram.universityId);
      setChosenProgramId(currentProgram.id);
    }
  }, [selectedProgramId, currentProgram]);

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

  const selectedUni = TURKISH_UNIVERSITIES.find((u) => u.id === chosenUniId) || TURKISH_UNIVERSITIES[0];
  const availablePrograms = selectedUni.programs
    .map((id) => SUNY_PROGRAMS[id])
    .filter(Boolean);

  const handleUniClick = (uniId: 'itu' | 'odtu' | 'anadolu' | 'istanbul') => {
    setChosenUniId(uniId);
    const uni = TURKISH_UNIVERSITIES.find((u) => u.id === uniId);
    if (uni && uni.programs.length > 0) {
      setChosenProgramId(uni.programs[0]);
    }
  };

  const handleConfirm = () => {
    onSelectProgram(chosenProgramId);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="selector-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-xs animate-fade-in"
    >
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[92vh] flex flex-col transition-colors">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60">
          <div className="flex items-center gap-2">
            <School className="w-5 h-5 text-[#005A43] dark:text-emerald-400" />
            <h3 id="selector-modal-title" className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
              {t.selectorModalTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Selector Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.selectorModalSub}
          </p>

          {/* Step 1: Choose Turkish University */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <span>{t.step1Title}</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {TURKISH_UNIVERSITIES.map((uni) => {
                const isSelected = uni.id === chosenUniId;
                return (
                  <button
                    key={uni.id}
                    type="button"
                    onClick={() => handleUniClick(uni.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                      isSelected
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-[#005A43] dark:border-emerald-500 ring-2 ring-[#005A43]/20 shadow-xs'
                        : 'bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-xs font-black px-2 py-0.5 rounded-md ${
                            isSelected
                              ? 'bg-[#005A43] text-white'
                              : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {uni.logoBadge}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#005A43] dark:text-emerald-400" />}
                      </div>
                      <div className="font-extrabold text-xs text-slate-900 dark:text-white line-clamp-1">
                        {uni.shortName}
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-2 truncate">
                      {uni.city.split('(')[0]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Choose Major & SUNY Partner Campus */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <span>{t.step2Title}</span>
            </h4>
            <div className="space-y-2.5">
              {availablePrograms.map((prog) => {
                const isSelected = prog.id === chosenProgramId;
                return (
                  <div
                    key={prog.id}
                    onClick={() => setChosenProgramId(prog.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-[#005A43] dark:border-emerald-500 ring-2 ring-[#005A43]/20 shadow-xs'
                        : 'bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-extrabold text-slate-900 dark:text-white text-sm">
                          {lang === 'tr' ? prog.majorNameTr : prog.majorName}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          {prog.degreeType}
                        </span>
                        {prog.isStemOpt ? (
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-[#005A43] dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            3-Year STEM OPT
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300">
                            12-Mo OPT
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                        <GraduationCap className="w-3.5 h-3.5 text-[#005A43] dark:text-emerald-400 flex-shrink-0" />
                        <span className="font-semibold text-[#005A43] dark:text-emerald-400">
                          {prog.sunyCampus}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3 h-3" />
                          {prog.sunyLocation}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-300">
                        ~${prog.avgMonthlyRent}/mo rent
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center border transition ${
                          isSelected
                            ? 'bg-[#005A43] dark:bg-emerald-600 border-[#005A43] text-white'
                            : 'border-slate-300 dark:border-slate-600'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
            {SUNY_PROGRAMS[chosenProgramId]?.sunyCampus}
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {t.close}
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#005A43] hover:bg-emerald-900 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md transition"
            >
              <span>{t.btnConfirmProgram}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
