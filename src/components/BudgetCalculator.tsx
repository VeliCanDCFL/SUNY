import React, { useState, useEffect } from 'react';
import {
  calculateSemesterBudget,
  USD_TO_TRY_RATE,
  BudgetInputs,
} from '../utils/calculator';
import {
  Calculator,
  Home,
  Briefcase,
  Copy,
  Check,
  TrendingDown,
  Info,
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { SUNYProgram } from '../data/programsData';

interface BudgetCalculatorProps {
  currency: 'USD' | 'TRY';
  lang: Language;
  currentProgram: SUNYProgram;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({
  currency,
  lang,
  currentProgram,
}) => {
  const t = TRANSLATIONS[lang];
  const presets = currentProgram.housingPresets;
  const initialPresetKey = Object.keys(presets)[0] || 'custom';
  const initialRent = presets[initialPresetKey]?.rent || currentProgram.avgMonthlyRent || 800;

  const [selectedPreset, setSelectedPreset] = useState<string>(initialPresetKey);
  const [inputs, setInputs] = useState<BudgetInputs>({
    rent: initialRent,
    groceries: 380,
    utilities: 90,
    phonePlan: 30,
    personalExpenses: 120,
    healthInsurancePerSemester: currentProgram.healthInsuranceSem || 1350,
    monthsInSemester: 5,
    workHoursPerWeek: 12,
    hourlyWage: 15.0,
  });

  const [copied, setCopied] = useState(false);

  // Update presets whenever program changes
  useEffect(() => {
    const firstKey = Object.keys(currentProgram.housingPresets)[0] || 'custom';
    setSelectedPreset(firstKey);
    const newRent = currentProgram.housingPresets[firstKey]?.rent || currentProgram.avgMonthlyRent || 800;
    setInputs((prev) => ({
      ...prev,
      rent: newRent,
      healthInsurancePerSemester: currentProgram.healthInsuranceSem || 1350,
    }));
  }, [currentProgram]);

  const handlePresetChange = (presetKey: string) => {
    setSelectedPreset(presetKey);
    if (presets[presetKey]) {
      setInputs((prev) => ({
        ...prev,
        rent: presets[presetKey].rent,
      }));
    }
  };

  const handleInputChange = (field: keyof BudgetInputs, val: number) => {
    setInputs((prev) => ({
      ...prev,
      [field]: val,
    }));
  };

  const summary = calculateSemesterBudget(inputs, USD_TO_TRY_RATE);

  const formatAmount = (usdValue: number) => {
    if (currency === 'TRY') {
      const tryVal = Math.round(usdValue * USD_TO_TRY_RATE);
      return `₺${tryVal.toLocaleString()}`;
    }
    return `$${Math.round(usdValue).toLocaleString()}`;
  };

  const handleCopyBudget = () => {
    const text = `${currentProgram.sunyCampus} Semester Budget Estimate (5 Months):
- Monthly Rent: $${inputs.rent}
- Monthly Groceries: $${inputs.groceries}
- Utilities & Phone: $${inputs.utilities + inputs.phonePlan}
- Personal Allowance: $${inputs.personalExpenses}
----------------------------------------
Monthly Living Cost: $${summary.monthlyLivingCost}
5-Month Living Total: $${summary.totalSemesterLivingCost}
SUNY Mandatory Health Insurance: $${inputs.healthInsurancePerSemester}
Total Cost Before Work: $${summary.totalSemesterWithInsurance}
Estimated On-Campus Earnings (${inputs.workHoursPerWeek} hrs/wk): -$${summary.estimatedSemesterEarnings}
----------------------------------------
NET SEMESTER OUT-OF-POCKET: $${summary.netSemesterOutOfPocket} (~₺${summary.tryEquivalent.toLocaleString()} TRY)`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section id="calculator" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 scroll-mt-16 transition-colors">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[#005A43] dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800 mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>{t.calcTag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
          {t.calcTitle}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          {t.calcSub}
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-10 transition-colors">
        {/* Preset Selector */}
        <div className="mb-8">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            {t.quickHousingPreset} ({currentProgram.sunyLocation.split(',')[0]})
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {Object.entries(presets).map(([key, preset]) => (
              <button
                key={key}
                type="button"
                onClick={() => handlePresetChange(key)}
                className={`p-3 rounded-xl text-left border transition-all text-xs ${
                  selectedPreset === key
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-[#005A43] dark:border-emerald-500 text-[#005A43] dark:text-emerald-300 font-bold shadow-2xs'
                    : 'bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="font-bold truncate">{preset.name}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">${preset.rent}/mo</div>
              </button>
            ))}
          </div>
          {presets[selectedPreset] && (
            <div className="mt-2.5 text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
              <Info className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
              <span>
                <strong>{presets[selectedPreset].name}:</strong> {presets[selectedPreset].note} •{' '}
                <em>{presets[selectedPreset].busRoute}</em>
              </span>
            </div>
          )}
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-7 space-y-5">
            {/* Rent */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="rent-input" className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-slate-400" />
                  {t.monthlyRent}
                </label>
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">${inputs.rent}/mo</span>
              </div>
              <input
                id="rent-input"
                type="number"
                min="400"
                max="2500"
                step="10"
                value={inputs.rent}
                onChange={(e) => {
                  setSelectedPreset('custom');
                  handleInputChange('rent', Number(e.target.value));
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#005A43]/40"
              />
            </div>

            {/* Groceries */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="groceries-input" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t.monthlyGroceries}
                </label>
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">${inputs.groceries}/mo</span>
              </div>
              <input
                id="groceries-input"
                type="range"
                min="200"
                max="800"
                step="20"
                value={inputs.groceries}
                onChange={(e) => handleInputChange('groceries', Number(e.target.value))}
                className="w-full accent-[#005A43] dark:accent-emerald-400"
              />
            </div>

            {/* Utilities + Phone Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="utilities-input" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t.utilitiesWifi}
                </label>
                <input
                  id="utilities-input"
                  type="number"
                  min="0"
                  max="300"
                  value={inputs.utilities}
                  onChange={(e) => handleInputChange('utilities', Number(e.target.value))}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#005A43]/40"
                />
              </div>

              <div>
                <label htmlFor="phone-input" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  {t.mobilePlan}
                </label>
                <input
                  id="phone-input"
                  type="number"
                  min="15"
                  max="100"
                  value={inputs.phonePlan}
                  onChange={(e) => handleInputChange('phonePlan', Number(e.target.value))}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#005A43]/40"
                />
              </div>
            </div>

            {/* SUNY Mandatory Health Insurance */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="insurance-input" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t.healthInsurance}
                </label>
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">${inputs.healthInsurancePerSemester}</span>
              </div>
              <input
                id="insurance-input"
                type="number"
                min="0"
                max="2500"
                step="50"
                value={inputs.healthInsurancePerSemester}
                onChange={(e) => handleInputChange('healthInsurancePerSemester', Number(e.target.value))}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none"
              />
            </div>

            {/* Student Employment Slider */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <label htmlFor="work-hours-input" className="text-xs font-bold text-slate-900 dark:text-white">
                    {t.onCampusJob}
                  </label>
                </div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                  {inputs.workHoursPerWeek} hrs/week (~${summary.estimatedSemesterEarnings} net)
                </span>
              </div>
              <input
                id="work-hours-input"
                type="range"
                min="0"
                max="20"
                step="1"
                value={inputs.workHoursPerWeek}
                onChange={(e) => handleInputChange('workHoursPerWeek', Number(e.target.value))}
                className="w-full accent-emerald-700 dark:accent-emerald-400"
              />
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#0B2240] to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-[11px] uppercase font-extrabold tracking-wider text-emerald-400">
                  {t.estimatedOutOfPocket}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 px-2.5 py-0.5 rounded-full">
                  {t.fiveMonths}
                </span>
              </div>

              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight my-2">
                {formatAmount(summary.netSemesterOutOfPocket)}
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-1 mb-6">
                <span>
                  {currency === 'USD'
                    ? `≈ ₺${summary.tryEquivalent.toLocaleString()} TRY`
                    : `≈ $${summary.netSemesterOutOfPocket.toLocaleString()} USD`}
                </span>
              </div>

              {/* Breakdown Table */}
              <div className="space-y-2.5 text-xs border-t border-slate-700/80 pt-4">
                <div className="flex justify-between text-slate-300">
                  <span>{t.monthlyLivingCost}</span>
                  <span className="font-mono font-bold text-white">${summary.monthlyLivingCost} / mo</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{t.semesterSubtotal}</span>
                  <span className="font-mono text-slate-200">${summary.totalSemesterLivingCost}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{t.healthInsuranceLabel}</span>
                  <span className="font-mono text-slate-200">+${inputs.healthInsurancePerSemester}</span>
                </div>

                {summary.estimatedSemesterEarnings > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold bg-emerald-950/40 p-2 rounded-lg border border-emerald-800/40">
                    <span className="flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" />
                      {t.studentJobOffset}
                    </span>
                    <span className="font-mono">-${summary.estimatedSemesterEarnings}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800">
              <button
                type="button"
                onClick={handleCopyBudget}
                className="w-full flex items-center justify-center gap-2 bg-[#005A43] hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition text-xs shadow-md"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>{t.copiedText}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{t.btnCopyBudget}</span>
                  </>
                )}
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2.5">
                {t.tuitionDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
