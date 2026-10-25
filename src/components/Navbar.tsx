import React, { useState } from 'react';
import {
  Menu,
  X,
  BookOpen,
  Compass,
  Calculator,
  ShoppingBag,
  Globe,
  HelpCircle,
  Sun,
  Moon,
  School,
  ChevronDown,
  GraduationCap,
  MessageSquare,
} from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { SUNYProgram } from '../data/programsData';

interface NavbarProps {
  onOpenGlossary: () => void;
  onOpenProgramSelector: () => void;
  currency: 'USD' | 'TRY';
  onToggleCurrency: () => void;
  lang: Language;
  onToggleLang: () => void;
  isDark: boolean;
  onToggleDark: () => void;
  currentProgram: SUNYProgram;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGlossary,
  onOpenProgramSelector,
  currency,
  onToggleCurrency,
  lang,
  onToggleLang,
  isDark,
  onToggleDark,
  currentProgram,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const navLinks = [
    { name: t.navRoadmap, href: '#roadmap', icon: Compass },
    { name: t.navDeepDive, href: '#program-deep-dive', icon: GraduationCap },
    { name: t.navGuides, href: '#guides', icon: BookOpen },
    { name: t.navCalculator, href: '#calculator', icon: Calculator },
    { name: t.navMarketplace, href: '#marketplace', icon: ShoppingBag },
    { name: t.navFeedback, href: '#feedback', icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center space-x-2 group">
            <span className="bg-[#005A43] text-white font-extrabold px-2.5 py-1 rounded-lg text-base tracking-wider shadow-xs group-hover:bg-emerald-800 transition">
              SUNY
            </span>
            <span className="font-extrabold text-lg text-[#0B2240] dark:text-white tracking-tight">
              Hub <span className="text-[#005A43] dark:text-emerald-400">Türkiye</span>
            </span>
          </a>

          {/* Active University & Major Selector Chip */}
          <button
            onClick={onOpenProgramSelector}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[#005A43] dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition text-xs font-bold"
            title={t.changeProgram}
          >
            <School className="w-3.5 h-3.5" />
            <span className="truncate max-w-[200px]">
              {lang === 'tr' ? currentProgram.universityNameTr.split('(')[0] : currentProgram.universityName} •{' '}
              {lang === 'tr' ? currentProgram.majorNameTr : currentProgram.majorName}
            </span>
            <ChevronDown className="w-3 h-3 opacity-70" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-5 text-sm font-semibold text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 hover:text-[#005A43] dark:hover:text-emerald-400 transition-colors py-1"
              >
                <Icon className="w-4 h-4 text-slate-400 group-hover:text-[#005A43]" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          {/* Quick University Switcher on Medium Screens */}
          <button
            onClick={onOpenProgramSelector}
            className="flex xl:hidden items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-[#005A43] dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition"
          >
            <School className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{lang === 'tr' ? 'Bölüm Seç' : 'Program'}</span>
          </button>

          {/* Language Switcher (TR / EN) */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 text-xs font-extrabold px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            title="Toggle Türkçe / English"
            aria-label="Toggle language between Turkish and English"
          >
            <Globe className="w-3.5 h-3.5 text-[#005A43] dark:text-emerald-400" />
            <span>{lang === 'tr' ? 'TR' : 'EN'}</span>
          </button>

          {/* Dark / Light Mode Switcher */}
          <button
            onClick={onToggleDark}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle dark theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Currency Switcher */}
          <button
            onClick={onToggleCurrency}
            className="hidden sm:flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 transition"
            title="Toggle USD ($) and Turkish Lira (₺)"
          >
            <span>{currency === 'USD' ? 'USD ($)' : 'TRY (₺)'}</span>
          </button>

          {/* Glossary button */}
          <button
            onClick={onOpenGlossary}
            className="hidden md:flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition"
            title={t.usGlossary}
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#005A43] dark:text-emerald-400" />
            <span>{t.usGlossary}</span>
          </button>

          <a
            href="#roadmap"
            className="hidden sm:inline-flex bg-[#005A43] hover:bg-emerald-900 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-all shadow-xs"
          >
            {t.startRoadmap}
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-4 space-y-2 shadow-lg transition-colors">
          {/* Program banner on mobile */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenProgramSelector();
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-left"
          >
            <div className="flex items-center gap-2">
              <School className="w-4 h-4 text-[#005A43] dark:text-emerald-400" />
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {lang === 'tr' ? currentProgram.majorNameTr : currentProgram.majorName}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">
                  {currentProgram.sunyCampus}
                </div>
              </div>
            </div>
            <span className="text-xs font-bold text-[#005A43] dark:text-emerald-400">
              {lang === 'tr' ? 'Değiştir →' : 'Change →'}
            </span>
          </button>

          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#005A43]"
              >
                <Icon className="w-4 h-4 text-slate-400" />
                {link.name}
              </a>
            );
          })}

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGlossary();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            >
              <HelpCircle className="w-4 h-4 text-[#005A43] dark:text-emerald-400" />
              {t.usGlossary}
            </button>
            <button
              onClick={onToggleCurrency}
              className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200"
            >
              {currency}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
