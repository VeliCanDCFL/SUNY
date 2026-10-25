import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RoadmapSection } from './components/RoadmapSection';
import { GuidesSection } from './components/GuidesSection';
import { GuideModal } from './components/GuideModal';
import { BudgetCalculator } from './components/BudgetCalculator';
import { MarketplaceSection } from './components/MarketplaceSection';
import { ProgramDeepDiveSection } from './components/ProgramDeepDiveSection';
import { FeedbackSection } from './components/FeedbackSection';
import { CourseEquivalenceModal } from './components/CourseEquivalenceModal';
import { GlossaryModal } from './components/GlossaryModal';
import { ProgramSelectorModal } from './components/ProgramSelectorModal';
import { Footer } from './components/Footer';
import { SurvivalGuide } from './data/guidesData';
import { SUNY_PROGRAMS, SUNYProgram } from './data/programsData';
import { Language } from './data/translations';

export default function App() {
  const [selectedGuide, setSelectedGuide] = useState<SurvivalGuide | null>(null);
  const [isEquivalenceModalOpen, setIsEquivalenceModalOpen] = useState(false);
  const [isGlossaryModalOpen, setIsGlossaryModalOpen] = useState(false);
  const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'TRY'>('USD');
  const [lang, setLang] = useState<Language>('tr'); // Default to Turkish as requested
  const [isDark, setIsDark] = useState<boolean>(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string>('itu-bing-ie');

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('suny_lang');
      if (savedLang === 'en' || savedLang === 'tr') {
        setLang(savedLang);
      }

      const savedTheme = localStorage.getItem('suny_theme');
      if (savedTheme === 'dark') {
        setIsDark(true);
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
      }

      const savedProgram = localStorage.getItem('suny_program_id');
      if (savedProgram && SUNY_PROGRAMS[savedProgram]) {
        setSelectedProgramId(savedProgram);
      } else {
        // If first visit, show the university and major selector automatically!
        setIsProgramModalOpen(true);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'tr' ? 'en' : 'tr';
    setLang(nextLang);
    try {
      localStorage.setItem('suny_lang', nextLang);
    } catch {
      // Ignore
    }
  };

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    try {
      localStorage.setItem('suny_theme', nextDark ? 'dark' : 'light');
    } catch {
      // Ignore
    }
  };

  const handleSelectProgram = (programId: string) => {
    setSelectedProgramId(programId);
    try {
      localStorage.setItem('suny_program_id', programId);
    } catch {
      // Ignore
    }
  };

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'USD' ? 'TRY' : 'USD'));
  };

  const currentProgram: SUNYProgram =
    SUNY_PROGRAMS[selectedProgramId] || SUNY_PROGRAMS['itu-bing-ie'];

  return (
    <div
      className={`min-h-screen ${
        isDark ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      } flex flex-col antialiased selection:bg-[#005A43] selection:text-white transition-colors duration-200`}
    >
      {/* Top Navbar */}
      <Navbar
        currency={currency}
        onToggleCurrency={toggleCurrency}
        lang={lang}
        onToggleLang={toggleLanguage}
        isDark={isDark}
        onToggleDark={toggleTheme}
        currentProgram={currentProgram}
        onOpenGlossary={() => setIsGlossaryModalOpen(true)}
        onOpenProgramSelector={() => setIsProgramModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        <HeroSection
          onOpenEquivalencies={() => setIsEquivalenceModalOpen(true)}
          onOpenProgramSelector={() => setIsProgramModalOpen(true)}
          lang={lang}
          currentProgram={currentProgram}
        />

        <RoadmapSection
          onOpenEquivalencies={() => setIsEquivalenceModalOpen(true)}
          lang={lang}
          currentProgram={currentProgram}
        />

        <ProgramDeepDiveSection
          currentProgram={currentProgram}
          lang={lang}
          onOpenProgramSelector={() => setIsProgramModalOpen(true)}
          onOpenEquivalencies={() => setIsEquivalenceModalOpen(true)}
        />

        <GuidesSection
          onSelectGuide={(guide) => setSelectedGuide(guide)}
          lang={lang}
        />

        <BudgetCalculator
          currency={currency}
          lang={lang}
          currentProgram={currentProgram}
        />

        <MarketplaceSection
          currency={currency}
          lang={lang}
        />

        <FeedbackSection
          lang={lang}
          currentProgram={currentProgram}
        />
      </main>

      {/* University & Major Program Selector Modal */}
      <ProgramSelectorModal
        isOpen={isProgramModalOpen}
        onClose={() => setIsProgramModalOpen(false)}
        selectedProgramId={selectedProgramId}
        onSelectProgram={handleSelectProgram}
        lang={lang}
      />

      {/* Guide Content Modal */}
      <GuideModal
        guide={selectedGuide}
        onClose={() => setSelectedGuide(null)}
        lang={lang}
      />

      {/* Course Equivalency Modal */}
      <CourseEquivalenceModal
        isOpen={isEquivalenceModalOpen}
        onClose={() => setIsEquivalenceModalOpen(false)}
        currentProgram={currentProgram}
        lang={lang}
      />

      {/* Glossary Modal */}
      <GlossaryModal
        isOpen={isGlossaryModalOpen}
        onClose={() => setIsGlossaryModalOpen(false)}
        lang={lang}
      />

      {/* Footer */}
      <Footer
        onOpenGlossary={() => setIsGlossaryModalOpen(true)}
        onOpenEquivalencies={() => setIsEquivalenceModalOpen(true)}
        lang={lang}
        currentProgram={currentProgram}
      />
    </div>
  );
}
