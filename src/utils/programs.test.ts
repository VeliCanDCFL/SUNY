import test from 'node:test';
import assert from 'node:assert/strict';
import { TURKISH_UNIVERSITIES, SUNY_PROGRAMS } from '../data/programsData';

test('TURKISH_UNIVERSITIES contains key Turkish institutions', () => {
  assert.ok(TURKISH_UNIVERSITIES.length >= 4);
  const itu = TURKISH_UNIVERSITIES.find((u) => u.id === 'itu');
  assert.ok(itu);
  assert.equal(itu.shortName, 'İTÜ');
  assert.ok(itu.programs.includes('itu-bing-ie'));

  const odtu = TURKISH_UNIVERSITIES.find((u) => u.id === 'odtu');
  assert.ok(odtu);
  assert.ok(odtu.programs.includes('odtu-bing-gia'));
});

test('SUNY_PROGRAMS includes diverse majors with housing presets', () => {
  const ieProg = SUNY_PROGRAMS['itu-bing-ie'];
  assert.ok(ieProg);
  assert.equal(ieProg.isStemOpt, true);
  assert.ok(ieProg.housingPresets.up);
  assert.ok(ieProg.courses.length > 0);

  const buffProg = SUNY_PROGRAMS['itu-buff-civil'];
  assert.ok(buffProg);
  assert.equal(buffProg.sunyCampus, 'University at Buffalo (SUNY Buffalo)');
  assert.ok(buffProg.housingPresets.sweethome);
});

test('Every program has all 3 required pillars: academicPrep, transitionLogistics, and usAcademicCareer', () => {
  const programKeys = Object.keys(SUNY_PROGRAMS);
  assert.ok(programKeys.length >= 10, 'Should have at least 10 dual degree programs configured');

  for (const key of programKeys) {
    const prog = SUNY_PROGRAMS[key];
    assert.ok(prog, `Program ${key} exists`);

    // Pillar 1: Academic Preparation in Turkey
    assert.ok(prog.academicPrep, `${key} must have academicPrep`);
    assert.ok(prog.academicPrep.mandatoryCourses.length > 0, `${key} has mandatory courses`);
    assert.ok(prog.academicPrep.prerequisitesOverviewTr.length > 0, `${key} has prerequisite notes`);
    assert.ok(prog.academicPrep.gpaTacticsTr.length > 0, `${key} has GPA tactics`);
    assert.ok(prog.academicPrep.professorTipsTr.length > 0, `${key} has professor tips`);

    // Pillar 2: Transition & Logistics
    assert.ok(prog.transitionLogistics, `${key} must have transitionLogistics`);
    assert.ok(prog.transitionLogistics.visaSteps.length > 0, `${key} has visa steps`);
    assert.ok(prog.transitionLogistics.housingComparison.length > 0, `${key} has housing comparison`);
    assert.ok(prog.transitionLogistics.annualBudgetEstimate.length > 0, `${key} has budget breakdown`);

    // Verify housing pros/cons/verdict structure
    for (const h of prog.transitionLogistics.housingComparison) {
      assert.ok(h.name, 'Housing option has name');
      assert.ok(h.monthlyRent, 'Housing option has rent');
      assert.ok(h.prosTr.length > 0, 'Housing option has pros');
      assert.ok(h.consTr.length > 0, 'Housing option has cons');
      assert.ok(h.verdictTr, 'Housing option has verdict');
    }

    // Pillar 3: US Academic & Career
    assert.ok(prog.usAcademicCareer, `${key} must have usAcademicCareer`);
    assert.ok(prog.usAcademicCareer.accreditationLogicTr.length > 0, `${key} has accreditation logic`);
    assert.ok(prog.usAcademicCareer.cptOptSteps.length > 0, `${key} has CPT/OPT steps`);
    assert.ok(prog.usAcademicCareer.careerCenterGuide.centerName, `${key} has career center name`);
    assert.ok(prog.usAcademicCareer.careerCenterGuide.actionsTr.length > 0, `${key} has career actions`);
    assert.ok(prog.usAcademicCareer.careerCenterGuide.topHiringCompanies.length > 0, `${key} has employers`);
  }
});

test('itu-bing-ie accurately includes specific Industrial Engineering details', () => {
  const ie = SUNY_PROGRAMS['itu-bing-ie'];
  assert.ok(ie);

  // Prerequisites check
  const math216 = ie.academicPrep.mandatoryCourses.find((c) => c.code === 'MAT 216');
  assert.ok(math216, 'MAT 216 should be listed as mandatory course');
  assert.ok(math216.prereqChain.includes('MAT 102E'));

  const or = ie.academicPrep.mandatoryCourses.find((c) => c.code.includes('END 311'));
  assert.ok(or, 'END 311 Operations Research should be listed');

  // Housing comparison check
  const names = ie.transitionLogistics.housingComparison.map((h) => h.name);
  assert.ok(names.some((n) => n.includes('University Plaza')));
  assert.ok(names.some((n) => n.includes('Hayes Student Living')));
  assert.ok(names.some((n) => n.includes('U-Club')));
  assert.ok(names.some((n) => n.includes('Dorm')));

  // Fleishman Center and CPT/OPT check
  assert.ok(ie.usAcademicCareer.careerCenterGuide.centerName.includes('Fleishman'));
  assert.ok(ie.usAcademicCareer.careerCenterGuide.portalName.includes('hireBING'));
  assert.equal(ie.isStemOpt, true, 'Industrial Engineering must be STEM OPT eligible (36 months)');
});
