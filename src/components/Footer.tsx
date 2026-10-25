import React from 'react';
import { ExternalLink, Heart, Shield, ArrowUp, GraduationCap } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { SUNYProgram } from '../data/programsData';

interface FooterProps {
  onOpenGlossary: () => void;
  onOpenEquivalencies: () => void;
  lang: Language;
  currentProgram: SUNYProgram;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenGlossary,
  onOpenEquivalencies,
  lang,
  currentProgram,
}) => {
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2240] dark:bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-[#005A43] text-white font-extrabold px-2.5 py-1 rounded-lg text-sm tracking-wider">
                SUNY
              </span>
              <span className="font-extrabold text-white text-lg tracking-tight">
                Hub Türkiye
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {lang === 'tr'
                ? 'Türkiye üniversiteleri ve State University of New York (SUNY) çift diploma öğrencileri için hazırlanmış kapsamlı yol gösterici platform.'
                : 'The comprehensive student companion for Turkish universities and State University of New York (SUNY) dual-diploma undergraduates.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <GraduationCap className="w-4 h-4" />
              <span>
                {currentProgram.universityNameTr.split('(')[0]} → {currentProgram.sunyCampus}
              </span>
            </div>

            {/* Coordinator Info Box */}
            <div className="text-[11px] text-slate-400 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <span className="text-white font-bold block mb-0.5">
                {currentProgram.coordinatorContact.office}
              </span>
              <span>E-posta: {currentProgram.coordinatorContact.email} • {currentProgram.coordinatorContact.location}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'tr' ? 'Öğrenci Araçları' : 'Student Tools'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#roadmap" className="hover:text-emerald-400 transition">
                  {t.navRoadmap}
                </a>
              </li>
              <li>
                <a href="#guides" className="hover:text-emerald-400 transition">
                  {t.navGuides}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-400 transition">
                  {t.navCalculator}
                </a>
              </li>
              <li>
                <a href="#marketplace" className="hover:text-emerald-400 transition">
                  {t.navMarketplace}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenEquivalencies}
                  className="hover:text-emerald-400 transition text-left"
                >
                  {t.courseEquivalencies}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenGlossary}
                  className="hover:text-emerald-400 transition text-left"
                >
                  {t.usGlossary}
                </button>
              </li>
            </ul>
          </div>

          {/* Official Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'tr' ? 'Resmi Portallar' : 'Official Portals'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="https://www.suny.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-emerald-400 transition"
                >
                  <span>The State University of New York (SUNY)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://suny.itu.edu.tr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-emerald-400 transition"
                >
                  <span>İTÜ SUNY Program Koordinatörlüğü</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.binghamton.edu/isss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-emerald-400 transition"
                >
                  <span>Binghamton University ISSS</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.buffalo.edu/international-student-and-scholar-services.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-emerald-400 transition"
                >
                  <span>UB International Services</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://suny.metu.edu.tr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-emerald-400 transition"
                >
                  <span>ODTÜ SUNY Programları</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <Shield className="w-3.5 h-3.5 text-slate-400" />
            <span>
              {lang === 'tr'
                ? 'Bağımsız öğrenci inisiyatifi. Üniversite rektörlükleri veya resmi kurumlarla doğrudan idari bağı bulunmamaktadır.'
                : 'Independent student project. Not affiliated with or endorsed by official university administrations.'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for the Turkish SUNY community
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
