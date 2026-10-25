import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSemesterBudget, HOUSING_PRESETS } from './calculator';

test('calculateSemesterBudget computes standard 5-month costs correctly', () => {
  const result = calculateSemesterBudget({
    rent: 750,
    groceries: 400,
    utilities: 100,
    phonePlan: 30,
    healthInsurancePerSemester: 1350,
    personalExpenses: 150,
    monthsInSemester: 5,
    workHoursPerWeek: 0,
  });

  // Monthly living = 750 + 400 + 100 + 30 + 150 = 1430
  assert.equal(result.monthlyLivingCost, 1430);
  // Semester living = 1430 * 5 = 7150
  assert.equal(result.totalSemesterLivingCost, 7150);
  // With insurance = 7150 + 1350 = 8500
  assert.equal(result.totalSemesterWithInsurance, 8500);
  assert.equal(result.estimatedSemesterEarnings, 0);
  assert.equal(result.netSemesterOutOfPocket, 8500);
  assert.ok(result.tryEquivalent > 0);
});

test('calculateSemesterBudget factors in on-campus student work offset', () => {
  const result = calculateSemesterBudget({
    rent: 800,
    groceries: 350,
    utilities: 100,
    phonePlan: 25,
    healthInsurancePerSemester: 1350,
    personalExpenses: 100,
    monthsInSemester: 5,
    workHoursPerWeek: 15,
    hourlyWage: 15.0,
  });

  // weeks = 5 * 4.2 = 21 weeks
  // gross = 15 * 15 * 21 = 4725
  // net ~ 4725 * 0.9 = 4253
  assert.ok(result.estimatedSemesterEarnings > 4000);
  assert.ok(result.netSemesterOutOfPocket < result.totalSemesterWithInsurance);
});

test('HOUSING_PRESETS contains core ITU Binghamton complexes', () => {
  assert.ok(HOUSING_PRESETS.up);
  assert.ok(HOUSING_PRESETS.hayes);
  assert.ok(HOUSING_PRESETS.twinRiver);
  assert.equal(HOUSING_PRESETS.up.rent, 825);
});
