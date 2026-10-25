import React from 'react';
import { SURVIVAL_GUIDES, SurvivalGuide } from '../data/guidesData';
import { BookOpen, ArrowRight, ShieldCheck, Home, DollarSign, Award, Snowflake } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface GuidesSectionProps {
  onSelectGuide: (guide: SurvivalGuide) => void;
  lang: Language;
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({ onSelectGuide, lang }) => {
  const t = TRANSLATIONS[lang];

  const getCategoryIcon = (categoryEn: string) => {
    switch (categoryEn) {
      case 'Visa & Immigration':
        return <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Housing & Living':
        return <Home className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Banking & Work':
        return <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Academics & Career':
        return <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <Snowflake className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <section id="guides" className="bg-slate-100/70 dark:bg-slate-950/70 py-16 sm:py-20 border-y border-slate-200 dark:border-slate-800 scroll-mt-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800 mb-3 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.guidesTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            {t.guidesTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {t.guidesSub}
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SURVIVAL_GUIDES.map((guide) => {
            const title = lang === 'tr' ? guide.titleTr : guide.titleEn;
            const summary = lang === 'tr' ? guide.summaryTr : guide.summaryEn;
            const category = lang === 'tr' ? guide.categoryTr : guide.categoryEn;
            const readTime = lang === 'tr' ? guide.readTimeTr : guide.readTimeEn;

            return (
              <div
                key={guide.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md border border-slate-200/90 dark:border-slate-800 hover:border-[#005A43]/50 dark:hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Read Time */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        {getCategoryIcon(guide.categoryEn)}
                      </div>
                      <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${guide.badgeColor}`}>
                        {category}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#005A43] dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {summary}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <button
                  onClick={() => onSelectGuide(guide)}
                  className="w-full flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-800/90 hover:bg-[#005A43] dark:hover:bg-emerald-600 text-slate-800 dark:text-slate-200 hover:text-white border border-slate-200 dark:border-slate-700 hover:border-[#005A43] text-xs font-bold py-3 rounded-xl transition-all shadow-2xs group/btn"
                >
                  <span>{t.readFullGuide}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
