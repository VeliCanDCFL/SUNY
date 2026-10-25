import React from 'react';
import { ArrowRight, Compass, Calculator, Sparkles, Building2, GraduationCap, School, MapPin } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { SUNYProgram } from '../data/programsData';

interface HeroSectionProps {
  onOpenEquivalencies: () => void;
  onOpenProgramSelector: () => void;
  lang: Language;
  currentProgram: SUNYProgram;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenEquivalencies,
  onOpenProgramSelector,
  lang,
  currentProgram,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-slate-50 to-white dark:bg-none dark:bg-slate-950 pt-10 pb-14 lg:pt-14 lg:pb-20 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      {/* Background decoration dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#005A43_1px,transparent_1px)] dark:bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Active Program Card Banner */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
          <button
            onClick={onOpenProgramSelector}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/60 text-[#005A43] dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800 shadow-2xs hover:bg-emerald-200/90 transition group"
          >
            <School className="w-3.5 h-3.5" />
            <span>
              {lang === 'tr' ? currentProgram.universityNameTr : currentProgram.universityName} →{' '}
              {currentProgram.sunyCampus}
            </span>
            <span className="underline opacity-80 group-hover:opacity-100 text-[11px]">
              ({t.changeProgram})
            </span>
          </button>

          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${
              currentProgram.isStemOpt
                ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                : 'bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>
              {currentProgram.isStemOpt ? t.heroStemBadge : t.heroNonStemBadge}
            </span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-5">
          {lang === 'tr' ? (
            <>
              {currentProgram.universityNameTr.split('(')[0].trim()}’den New York’a: <br className="hidden sm:inline" />
              <span className="text-[#005A43] dark:text-emerald-400">
                {currentProgram.majorNameTr} SUNY Rehberiniz
              </span>
            </>
          ) : (
            <>
              From {currentProgram.universityName.split(' ')[0]} to New York: <br className="hidden sm:inline" />
              <span className="text-[#005A43] dark:text-emerald-400">
                Your Complete {currentProgram.majorName} Playbook
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          {t.heroDescription}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <a
            href="#roadmap"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#005A43] hover:bg-emerald-900 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-xs sm:text-sm group"
          >
            <Compass className="w-4 h-4" />
            <span>{t.btnExploreRoadmap}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#calculator"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-bold px-6 py-3.5 rounded-xl shadow-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-xs sm:text-sm"
          >
            <Calculator className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            <span>{t.btnCalculateBudget}</span>
          </a>

          <button
            onClick={onOpenEquivalencies}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-bold px-5 py-3.5 rounded-xl shadow-xs transition-all text-xs sm:text-sm"
          >
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>{t.btnCourseEquiv}</span>
          </button>
        </div>

        {/* Program Highlights Pill Strip */}
        <div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-4 max-w-4xl mx-auto shadow-2xs text-left">
          <div className="text-[11px] font-black uppercase tracking-wider text-[#005A43] dark:text-emerald-400 mb-2 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4" />
            <span>
              {lang === 'tr' ? 'Seçili Programın Öne Çıkan Özellikleri' : 'Program Highlights & Advantages'}
            </span>
          </div>
          <div className="grid sm:grid-cols-3 gap-2.5 text-xs text-slate-700 dark:text-slate-300">
            {currentProgram.programHighlights[lang].map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-[#005A43] dark:text-emerald-400">•</span>
                <span className="leading-snug">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
