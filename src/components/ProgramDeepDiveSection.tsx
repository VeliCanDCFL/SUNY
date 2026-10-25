import React, { useState } from 'react';
import { SUNYProgram } from '../data/programsData';
import { Language } from '../data/translations';
import {
  GraduationCap,
  Plane,
  Briefcase,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Building2,
  DollarSign,
  FileText,
  Clock,
  Compass,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  HelpCircle,
} from 'lucide-react';

interface ProgramDeepDiveSectionProps {
  currentProgram: SUNYProgram;
  lang: Language;
  onOpenProgramSelector: () => void;
  onOpenEquivalencies: () => void;
}

export const ProgramDeepDiveSection: React.FC<ProgramDeepDiveSectionProps> = ({
  currentProgram,
  lang,
  onOpenProgramSelector,
  onOpenEquivalencies,
}) => {
  const [activeTab, setActiveTab] = useState<'academic' | 'logistics' | 'career'>('academic');

  const { academicPrep, transitionLogistics, usAcademicCareer } = currentProgram;

  const totalAnnualBudget = transitionLogistics.annualBudgetEstimate.reduce(
    (sum, item) => sum + item.costUsd,
    0
  );

  return (
    <section
      id="program-deep-dive"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-16 transition-colors"
    >
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-[#003B2C] text-white rounded-3xl p-6 sm:p-10 shadow-xl mb-10 border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                {lang === 'tr' ? 'Seçili Bölüm Kılavuzu' : 'Active Major Playbook'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20">
                {currentProgram.degreeType} • {currentProgram.isStemOpt ? (lang === 'tr' ? '3 Yıl STEM OPT' : '3-Year STEM OPT') : (lang === 'tr' ? '12 Ay OPT' : '12-Month OPT')}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {lang === 'tr' ? currentProgram.majorNameTr : currentProgram.majorName}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-1.5 flex items-center gap-2">
              <span className="font-semibold text-white">
                {lang === 'tr' ? currentProgram.universityNameTr : currentProgram.universityName}
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-emerald-300 font-semibold">{currentProgram.sunyCampus}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={onOpenProgramSelector}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-bold text-white transition-all shadow-xs cursor-pointer flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-emerald-300" />
              <span>{lang === 'tr' ? 'Bölümü Değiştir' : 'Change Major'}</span>
            </button>
            <button
              onClick={onOpenEquivalencies}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs sm:text-sm font-bold text-white transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'tr' ? 'Ders İntibak Tablosu' : 'Course Equivalencies'}</span>
            </button>
          </div>
        </div>

        {/* 3 Pillar Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6">
          <button
            onClick={() => setActiveTab('academic')}
            className={`p-4 rounded-2xl text-left transition-all border flex items-center gap-3.5 ${
              activeTab === 'academic'
                ? 'bg-white text-slate-900 border-white shadow-lg'
                : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                activeTab === 'academic' ? 'bg-[#005A43] text-white' : 'bg-white/10 text-white'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider opacity-70">
                {lang === 'tr' ? '1. Sütun' : 'Pillar 1'}
              </span>
              <span className="font-extrabold text-sm sm:text-base leading-tight">
                {lang === 'tr' ? 'Türkiye Dönemi & Hazırlık' : 'Home Univ & Academic Prep'}
              </span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('logistics')}
            className={`p-4 rounded-2xl text-left transition-all border flex items-center gap-3.5 ${
              activeTab === 'logistics'
                ? 'bg-white text-slate-900 border-white shadow-lg'
                : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                activeTab === 'logistics' ? 'bg-[#005A43] text-white' : 'bg-white/10 text-white'
              }`}
            >
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider opacity-70">
                {lang === 'tr' ? '2. Sütun' : 'Pillar 2'}
              </span>
              <span className="font-extrabold text-sm sm:text-base leading-tight">
                {lang === 'tr' ? 'ABD Geçiş & Lojistik' : 'US Transition & Logistics'}
              </span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('career')}
            className={`p-4 rounded-2xl text-left transition-all border flex items-center gap-3.5 ${
              activeTab === 'career'
                ? 'bg-white text-slate-900 border-white shadow-lg'
                : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                activeTab === 'career' ? 'bg-[#005A43] text-white' : 'bg-white/10 text-white'
              }`}
            >
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider opacity-70">
                {lang === 'tr' ? '3. Sütun' : 'Pillar 3'}
              </span>
              <span className="font-extrabold text-sm sm:text-base leading-tight">
                {lang === 'tr' ? 'ABD Akademik & Kariyer' : 'US Academic & Career'}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* TAB 1: ACADEMIC PREPARATION IN TURKEY */}
      {activeTab === 'academic' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Prerequisites Warning & Overview */}
          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-3xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200">
                  {lang === 'tr'
                    ? 'Zorunlu Önşart (Prerequisite) Zinciri ve Dikkat Edilmesi Gerekenler'
                    : 'Prerequisite Chains & Registration Bottlenecks'}
                </h3>
                <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-300">
                  {(lang === 'tr'
                    ? academicPrep.prerequisitesOverviewTr
                    : academicPrep.prerequisitesOverviewEn
                  ).map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold text-amber-600 dark:text-amber-400 mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mandatory Courses & Risk Table */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#005A43] dark:text-emerald-400" />
                  <span>
                    {lang === 'tr'
                      ? 'Kritik Zorunlu Dersler ve Önşart İlişkileri'
                      : 'Mandatory Foundation Courses & Prerequisite Chain'}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {lang === 'tr'
                    ? 'Bu derslerden kalındığında New York kampüsündeki ders kayıtları doğrudan bloke olur.'
                    : 'Failing these foundation courses directly blocks registration at the US campus.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {academicPrep.mandatoryCourses.map((c, i) => {
                const isHigh = c.dangerLevel === 'high';
                return (
                  <div
                    key={i}
                    className={`p-5 rounded-2xl border transition-all ${
                      isHigh
                        ? 'border-red-200 dark:border-red-900/60 bg-red-50/50 dark:bg-red-950/20'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-black text-slate-900 dark:text-white bg-white dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 shadow-2xs">
                        {c.code}
                      </span>
                      <span
                        className={`text-[11px] font-black uppercase px-2 py-0.5 rounded-md ${
                          isHigh
                            ? 'bg-red-500 text-white'
                            : 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300'
                        }`}
                      >
                        {isHigh
                          ? lang === 'tr'
                            ? 'Yüksek Risk / Kritik'
                            : 'High Risk / Blocker'
                          : lang === 'tr'
                          ? 'Orta Risk'
                          : 'Medium Risk'}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                      {lang === 'tr' ? c.nameTr : c.nameEn}
                    </h4>

                    <div className="text-xs font-semibold text-[#005A43] dark:text-emerald-400 mb-2.5 flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>{c.prereqChain}</span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {lang === 'tr' ? c.dangerReasonTr : c.dangerReasonEn}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GPA Tactics & Professor Selection Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GPA Tactics */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-[#005A43] dark:text-emerald-300 flex items-center justify-center font-bold">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                  {lang === 'tr' ? "GPA'i Yüksek Tutma Taktikleri" : 'GPA Maximization Tactics'}
                </h3>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {(lang === 'tr' ? academicPrep.gpaTacticsTr : academicPrep.gpaTacticsEn).map(
                  (tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Professor & Registration Tips */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="w-8 h-8 rounded-xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                  {lang === 'tr'
                    ? 'Hoca & Şube Seçim Önerileri (Ders Kayıt Stratejisi)'
                    : 'Instructor Selection & Registration Tactics'}
                </h3>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {(lang === 'tr'
                  ? academicPrep.professorTipsTr
                  : academicPrep.professorTipsEn
                ).map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TRANSITION & LOGISTICS */}
      {activeTab === 'logistics' && (
        <div className="space-y-8 animate-fadeIn">
          {/* I-20, DS-160 & Visa Steps */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold mb-2">
                <Plane className="w-3.5 h-3.5" />
                <span>{lang === 'tr' ? 'Vize ve Kabul Süreci' : 'Visa & Admission Timeline'}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {lang === 'tr'
                  ? 'I-20, DS-160 ve ABD F-1 Vize Randevu Süreçleri'
                  : 'I-20, DS-160 & Consular Visa Roadmap'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {transitionLogistics.visaSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#005A43] dark:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {step.step}
                    </span>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                      {lang === 'tr' ? step.titleTr : step.titleEn}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-2 leading-relaxed">
                    {lang === 'tr' ? step.descTr : step.descEn}
                  </p>
                  {(step.criticalWarningTr || step.criticalWarningEn) && (
                    <div className="mt-2 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/50 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800 flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{lang === 'tr' ? step.criticalWarningTr : step.criticalWarningEn}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Housing Comparison: Dorm vs Off-Campus (UP, Hayes, U-Club, etc.) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-[#005A43] dark:text-emerald-400" />
                  <span>
                    {lang === 'tr'
                      ? 'Konaklama Analizi: Yurt (Dorm) vs. Kampüs Dışı Evler'
                      : 'Housing Breakdown: On-Campus Dorm vs Off-Campus Residences'}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {lang === 'tr'
                    ? 'Popüler seçeneklerin (UP, Hayes, U-Club, Yurtlar) kira, ulaşım, artı ve eksileri.'
                    : 'Pros, cons, rents, and OCCT transit routes for popular student housing complexes.'}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {transitionLogistics.housingComparison.map((house, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-[#005A43] dark:hover:border-emerald-500 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/60 dark:border-slate-700/60">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-black text-lg text-slate-900 dark:text-white">
                          {house.name}
                        </h4>
                        <span
                          className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                            house.type === 'dorm'
                              ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                              : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                          }`}
                        >
                          {house.type === 'dorm'
                            ? lang === 'tr'
                              ? 'Kampüs İçi Yurt'
                              : 'On-Campus Dorm'
                            : lang === 'tr'
                            ? 'Kampüs Dışı Rezidans'
                            : 'Off-Campus Complex'}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5 mt-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {house.distanceToCampus}
                      </span>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-lg font-black text-emerald-700 dark:text-emerald-400">
                        {house.monthlyRent}
                      </span>
                      <span className="block text-[11px] text-slate-400">
                        {lang === 'tr' ? 'Tahmini Kira' : 'Estimated Rent'}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    {/* Pros */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {lang === 'tr' ? 'Artıları (Pros)' : 'Pros'}
                      </span>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        {(lang === 'tr' ? house.prosTr : house.prosEn).map((pro, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-emerald-500 font-bold">•</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" />
                        {lang === 'tr' ? 'Eksileri (Cons)' : 'Cons'}
                      </span>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        {(lang === 'tr' ? house.consTr : house.consEn).map((con, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5">
                            <span className="text-red-500 font-bold">•</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Verdict */}
                  <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-2 text-xs">
                    <span className="font-bold text-[#005A43] dark:text-emerald-400 shrink-0">
                      {lang === 'tr' ? 'Mezun Kararı:' : 'Verdict:'}
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 italic">
                      {lang === 'tr' ? house.verdictTr : house.verdictEn}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Annual Budget Estimate */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  <span>
                    {lang === 'tr'
                      ? 'Yıllık Net Bütçe ve Harcama Kalemi Tahmini'
                      : 'Annual Net Budget & Expense Breakdown'}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {lang === 'tr'
                    ? 'ABD’de okunan 1 tam yıl için gerçekçi harcama kalemleri (USD cinsinden).'
                    : 'Realistic line-item annual forecast for 1 full academic year in the US.'}
                </p>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 rounded-2xl px-5 py-3 text-right">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  {lang === 'tr' ? 'Tahmini Yıllık Toplam' : 'Estimated Annual Total'}
                </span>
                <span className="text-2xl font-black text-emerald-700 dark:text-emerald-300">
                  ${totalAnnualBudget.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase text-[11px] font-bold">
                    <th className="py-3 px-3">{lang === 'tr' ? 'Gider Kalemi' : 'Expense Category'}</th>
                    <th className="py-3 px-3">{lang === 'tr' ? 'Ödeme Sıklığı' : 'Frequency'}</th>
                    <th className="py-3 px-3">{lang === 'tr' ? 'Açıklama & Detay' : 'Notes'}</th>
                    <th className="py-3 px-3 text-right">{lang === 'tr' ? 'Tutar (USD)' : 'Amount'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                  {transitionLogistics.annualBudgetEstimate.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                      <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">
                        {lang === 'tr' ? item.categoryTr : item.categoryEn}
                      </td>
                      <td className="py-3 px-3 text-slate-500 dark:text-slate-400">
                        {lang === 'tr' ? item.frequencyTr : item.frequencyEn}
                      </td>
                      <td className="py-3 px-3 text-slate-600 dark:text-slate-300">
                        {lang === 'tr' ? item.noteTr : item.noteEn}
                      </td>
                      <td className="py-3 px-3 text-right font-black text-slate-900 dark:text-emerald-400">
                        ${item.costUsd.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: US ACADEMIC & CAREER */}
      {activeTab === 'career' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Accreditation & Credit Evaluation Logic */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {lang === 'tr'
                    ? 'Ders Eşdeğerlikleri ve Kreditasyon / İntibak Mantığı'
                    : 'Course Accreditation & Credit Transfer Rules'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {lang === 'tr'
                    ? 'Türkiye ve New York transkriptleri arasındaki not dönüşüm ve geçerlilik kuralları.'
                    : 'Grade transfer rules, minimum thresholds, and GPA reset mechanics.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(lang === 'tr'
                ? usAcademicCareer.accreditationLogicTr
                : usAcademicCareer.accreditationLogicEn
              ).map((rule, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 flex items-start gap-3"
                >
                  <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    {rule}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CPT & OPT Step-by-Step Guide */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#005A43] dark:text-emerald-300 text-xs font-bold mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>
                  {currentProgram.isStemOpt
                    ? lang === 'tr'
                      ? '36 Ay Yasal STEM OPT İmkanı'
                      : '36-Month STEM OPT Eligible'
                    : lang === 'tr'
                    ? '12 Ay Yasal OPT İmkanı'
                    : '12-Month OPT Eligible'}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {lang === 'tr'
                  ? 'CPT / OPT (Staj ve Çalışma İzinleri) Alma Adımları'
                  : 'CPT / OPT (Work Authorization & Internship) Roadmap'}
              </h3>
            </div>

            <div className="space-y-4">
              {usAcademicCareer.cptOptSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-[#005A43] text-white">
                        {step.phase}
                      </span>
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                        {lang === 'tr' ? step.titleTr : step.titleEn}
                      </h4>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-md">
                      {lang === 'tr' ? step.timelineTr : step.timelineEn}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
                    {(lang === 'tr' ? step.rulesTr : step.rulesEn).map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Fleishman Career Center & US Job Hunting Tactics */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Compass className="w-6 h-6 text-[#005A43] dark:text-emerald-400" />
                <span>
                  {usAcademicCareer.careerCenterGuide.centerName} & {lang === 'tr' ? "ABD'de Staj Bulma" : 'US Internship Strategy'}
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {lang === 'tr'
                  ? `Resmi portal: ${usAcademicCareer.careerCenterGuide.portalName} ve mezun networking stratejileri.`
                  : `Portal: ${usAcademicCareer.careerCenterGuide.portalName} with tactical networking recommendations.`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Action checklist */}
              <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800">
                <h4 className="font-extrabold text-emerald-900 dark:text-emerald-200 text-sm mb-3">
                  {lang === 'tr' ? 'Kariyer Merkezi İlk Adımları' : 'Career Center Action Checklist'}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">
                  {(lang === 'tr'
                    ? usAcademicCareer.careerCenterGuide.actionsTr
                    : usAcademicCareer.careerCenterGuide.actionsEn
                  ).map((act, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical hunting tactics */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm mb-3">
                  {lang === 'tr'
                    ? 'ABD’de Staj ve İş Bulma Taktikleri'
                    : 'Internship Hunting Tactics & Referrals'}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {(lang === 'tr'
                    ? usAcademicCareer.careerCenterGuide.internshipTacticsTr
                    : usAcademicCareer.careerCenterGuide.internshipTacticsEn
                  ).map((tac, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-[#005A43] dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{tac}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Top Hiring Companies */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                {lang === 'tr'
                  ? 'Mezunların ve Stajyerlerin Sıklıkla Kabul Aldığı Şirketler'
                  : 'Companies Actively Hiring SUNY Alumni'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {usAcademicCareer.careerCenterGuide.topHiringCompanies.map((comp, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
