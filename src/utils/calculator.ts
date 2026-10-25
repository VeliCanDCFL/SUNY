export interface BudgetInputs {
  rent: number;
  groceries: number;
  utilities: number;
  phonePlan: number;
  healthInsurancePerSemester: number; // Mandatory SUNY health insurance ~$1,350/sem
  personalExpenses: number;
  monthsInSemester?: number;
  workHoursPerWeek?: number; // up to 20 hrs/week during semester
  hourlyWage?: number; // NY State min wage ~$15.00/hr
}

export interface BudgetSummary {
  monthlyLivingCost: number;
  totalSemesterLivingCost: number;
  totalSemesterWithInsurance: number;
  estimatedSemesterEarnings: number;
  netSemesterOutOfPocket: number;
  tryEquivalent: number;
}

export const USD_TO_TRY_RATE = 38.5; // Approximate benchmark rate

export function calculateSemesterBudget(
  inputs: BudgetInputs,
  exchangeRate: number = USD_TO_TRY_RATE
): BudgetSummary {
  const months = inputs.monthsInSemester ?? 5;
  const rent = Math.max(0, Number(inputs.rent) || 0);
  const groceries = Math.max(0, Number(inputs.groceries) || 0);
  const utilities = Math.max(0, Number(inputs.utilities) || 0);
  const phonePlan = Math.max(0, Number(inputs.phonePlan) || 0);
  const personal = Math.max(0, Number(inputs.personalExpenses) || 0);
  const insurance = Math.max(0, Number(inputs.healthInsurancePerSemester) || 0);

  const monthlyLivingCost = rent + groceries + utilities + phonePlan + personal;
  const totalSemesterLivingCost = monthlyLivingCost * months;
  const totalSemesterWithInsurance = totalSemesterLivingCost + insurance;

  // On campus work: 16-20 weeks per semester
  const workHours = Math.min(20, Math.max(0, Number(inputs.workHoursPerWeek) || 0));
  const hourlyWage = Math.max(0, Number(inputs.hourlyWage) || 15.0);
  const weeks = months * 4.2;
  // Estimated after nominal FICA/tax deduction ~10% for non-resident aliens if applicable
  const grossEarnings = workHours * hourlyWage * weeks;
  const estimatedSemesterEarnings = Math.round(grossEarnings * 0.9);

  const netSemesterOutOfPocket = Math.max(0, totalSemesterWithInsurance - estimatedSemesterEarnings);
  const tryEquivalent = Math.round(netSemesterOutOfPocket * exchangeRate);

  return {
    monthlyLivingCost,
    totalSemesterLivingCost,
    totalSemesterWithInsurance,
    estimatedSemesterEarnings,
    netSemesterOutOfPocket,
    tryEquivalent,
  };
}

export const HOUSING_PRESETS: Record<string, { name: string; rent: number; note: string; busRoute: string }> = {
  up: {
    name: 'University Plaza (UP)',
    rent: 825,
    note: 'Most popular among ITU students. 4-bed/2-bath or 4-bed/4-bath, fully furnished, right on OCCT green line.',
    busRoute: 'OCCT Campus Shuttle (5-8 min to Binghamton Union)',
  },
  hayes: {
    name: 'Hayes Student Living',
    rent: 750,
    note: 'Great value off Vestal Parkway. Close to Target, Walmart, and Asian Food Market.',
    busRoute: 'OCCT Vestal Line & Broome Transit',
  },
  twinRiver: {
    name: 'Twin River Commons',
    rent: 910,
    note: 'Downtown Binghamton luxury student apartments with gym, study rooms, directly across from UDC.',
    busRoute: 'OCCT DCL (Downtown Express)',
  },
  hawley: {
    name: '20 Hawley / Chenango Place',
    rent: 890,
    note: 'Downtown living near restaurants, cafes, and bars. Ideal if you take classes at UDC or enjoy vibrant nightlife.',
    busRoute: 'OCCT DDC / DCL',
  },
  indianRidge: {
    name: 'Indian Ridge Townhomes',
    rent: 680,
    note: 'Spacious multi-story townhomes in Johnson City. Best if sharing with ITU roommates and have access to a car or bus.',
    busRoute: 'Broome County Transit Route 15 & OCCT Shuttle',
  },
  onCampus: {
    name: 'On-Campus Dorms (Hillside / Susquehanna)',
    rent: 1100,
    note: 'Apartment-style on-campus living. No meal plan required, walk to Watson Engineering building.',
    busRoute: 'Campus loop / walking distance',
  },
};
