import React, { useState, useEffect } from 'react';
import { ROADMAP_STAGES, RoadmapStage } from '../data/roadmapData';
import { CheckCircle2, Circle, Clock, MapPin, Lightbulb, ExternalLink, Calendar, CheckSquare } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { SUNYProgram } from '../data/programsData';

interface RoadmapSectionProps {
  onOpenEquivalencies: () => void;
  lang: Language;
  currentProgram: SUNYProgram;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({
  onOpenEquivalencies,
  lang,
  currentProgram,
}) => {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    try {
      const saved = localStorage.getItem('suny_roadmap_completed');
      if (saved) {
        setCompletedItems(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, []);

  const toggleChecklist = (id: string) => {
    const next = { ...completedItems, [id]: !completedItems[id] };
    setCompletedItems(next);
    try {
      localStorage.setItem('suny_roadmap_completed', JSON.stringify(next));
    } catch {
      // Ignore
    }
  };

  const currentStage: RoadmapStage =
    ROADMAP_STAGES.find((s) => s.id === activeStageId) || ROADMAP_STAGES[0];

  const stageMilestones = currentStage.milestones;
  const completedCount = stageMilestones.filter((m) => completedItems[m.id]).length;
  const progressPercent = Math.round((completedCount / stageMilestones.length) * 100);

  const getStageTitle = (stage: RoadmapStage) => (lang === 'tr' ? stage.titleTr : stage.titleEn);
  const getStageSummary = (stage: RoadmapStage) => (lang === 'tr' ? stage.summaryTr : stage.summaryEn);
  const getStageDuration = (stage: RoadmapStage) => (lang === 'tr' ? stage.durationTr : stage.durationEn);
  const getStageProTips = (stage: RoadmapStage) => (lang === 'tr' ? stage.proTipsTr : stage.proTipsEn);

  const getStageLocation = (stageId: number) => {
    if (stageId === 1 || stageId === 3) {
      return lang === 'tr' ? currentProgram.universityNameTr : currentProgram.universityName;
    }
    return `${currentProgram.sunyCampus} (${currentProgram.sunyLocation.split(',')[0]})`;
  };

  return (
    <section id="roadmap" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-16 transition-colors">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#005A43] dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800 mb-3 shadow-2xs">
          <Calendar className="w-3.5 h-3.5" />
          <span>{t.roadmapTag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
          {t.roadmapTitle}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          {t.roadmapSub}
        </p>
      </div>

      {/* Stage Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {ROADMAP_STAGES.map((stage) => {
          const isActive = stage.id === activeStageId;
          const stageDone = stage.milestones.filter((m) => completedItems[m.id]).length;
          const totalInStage = stage.milestones.length;

          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`text-left p-4 rounded-2xl border transition-all relative overflow-hidden ${
                isActive
                  ? 'bg-white dark:bg-slate-900 border-[#005A43] dark:border-emerald-500 shadow-md ring-2 ring-[#005A43]/10'
                  : 'bg-white/80 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm ${
                    isActive
                      ? 'bg-[#005A43] dark:bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {stage.id}
                </span>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {stageDone}/{totalInStage} {t.milestonesChecked}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm leading-snug mb-1 line-clamp-1">
                {getStageTitle(stage).split(':')[1] || getStageTitle(stage)}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                {getStageLocation(stage.id)}
              </p>

              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#005A43] dark:bg-emerald-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Workspace */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 transition-colors">
        {/* Stage Header Info */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-black uppercase tracking-wider text-[#005A43] dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-md">
                {getStageDuration(currentStage)}
              </span>
              <span className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                <MapPin className="w-3 h-3 text-slate-400" />
                {getStageLocation(currentStage.id)}
              </span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              {getStageTitle(currentStage)}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl leading-relaxed">
              {getStageSummary(currentStage)}
            </p>
          </div>

          {/* Stage Progress Box */}
          <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-4 min-w-[220px]">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
              <span className="flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-[#005A43] dark:text-emerald-400" />
                {t.stageProgress}
              </span>
              <span>{progressPercent}%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#005A43] dark:bg-emerald-500 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
              {completedCount} / {stageMilestones.length} {t.milestonesChecked}
            </p>
          </div>
        </div>

        {/* Milestones Checklist Grid */}
        <div className="py-6">
          <h4 className="text-xs font-black tracking-wider uppercase text-slate-400 dark:text-slate-400 mb-4">
            {t.keyMilestones}
          </h4>

          <div className="space-y-3">
            {currentStage.milestones.map((milestone) => {
              const isDone = Boolean(completedItems[milestone.id]);
              const title = lang === 'tr' ? milestone.titleTr : milestone.titleEn;
              const desc = lang === 'tr' ? milestone.descriptionTr : milestone.descriptionEn;
              const deadline = lang === 'tr' ? milestone.deadlineTr : milestone.deadlineEn;

              return (
                <div
                  key={milestone.id}
                  onClick={() => toggleChecklist(milestone.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isDone
                      ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200/80 dark:border-emerald-800/40'
                      : 'bg-white dark:bg-slate-800/90 hover:bg-slate-50/80 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700/80'
                  }`}
                >
                  <button
                    type="button"
                    aria-label={`Mark milestone ${title} as ${isDone ? 'incomplete' : 'complete'}`}
                    className="mt-0.5 text-slate-400 hover:text-[#005A43] dark:hover:text-emerald-400 transition flex-shrink-0"
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-[#005A43] dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-bold text-sm ${
                            isDone ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-900 dark:text-white'
                          }`}
                        >
                          {title}
                        </span>
                        {milestone.isImportant && (
                          <span className="text-[10px] font-black uppercase bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 px-1.5 py-0.5 rounded">
                            {lang === 'tr' ? 'Zorunlu' : 'Mandatory'}
                          </span>
                        )}
                      </div>
                      <span className="flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {deadline}
                      </span>
                    </div>

                    <p
                      className={`text-xs leading-relaxed ${
                        isDone ? 'text-slate-400 dark:text-slate-500' : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pro Tips Box */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50/40 dark:from-amber-950/40 dark:to-orange-950/20 border border-amber-200/70 dark:border-amber-800/60 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-2 text-amber-900 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">
            <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>{t.seniorAdvice} ({getStageTitle(currentStage).split(':')[0]})</span>
          </div>
          <ul className="space-y-2 text-xs text-amber-950/90 dark:text-amber-200/90">
            {getStageProTips(currentStage).map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-bold text-amber-600 dark:text-amber-400">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Fast Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <span>{t.needEquivHelp}</span>
          <button
            onClick={onOpenEquivalencies}
            className="inline-flex items-center gap-1.5 font-bold text-[#005A43] dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition"
          >
            <span>{t.viewCourseTable}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
