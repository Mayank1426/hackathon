import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass, Code, Trophy, Building2, ShieldCheck, CreditCard, Search, Calculator } from 'lucide-react';
import GlitchText from './GlitchText';

export default function Navbar({ onOpenLogin, onToast, onOpenCommandPalette }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { label: 'Readiness quiz', href: '#calculator',   icon: Calculator, id: 'calculator' },
    { label: 'Explore prep',  href: '#explore',       icon: Compass,    id: 'explore' },
    { label: 'Question bank', href: '#question-bank', icon: Code,       id: 'question-bank' },
    { label: 'Leaderboard',   href: '#leaderboard',   icon: Trophy,     id: 'leaderboard' },
    { label: 'Pricing',       href: '#pricing',       icon: CreditCard, id: 'pricing' },
    { label: 'For colleges',  href: '#institutions',  icon: Building2,  id: 'institutions' },
    { label: 'Integrity',     href: '#security',      icon: ShieldCheck,id: 'security' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);

      // Track active section
      for (const link of [...navLinks].reverse()) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(link.id);
          return;
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Ctrl+K / '/' shortcuts for quick navigation
  useEffect(() => {
    const handler = (e) => {
      // Ignore if typing inside input, textarea, or contentEditable
      const tag = document.activeElement?.tagName?.toLowerCase();
      const isInput = tag === 'input' || tag === 'textarea' || document.activeElement?.isContentEditable;

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenCommandPalette?.();
      } else if (e.key === '/' && !isInput) {
        e.preventDefault();
        onOpenCommandPalette?.();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onOpenCommandPalette]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-premium border-b border-[#452080]/15 py-2.5 shadow-sm'
          : 'bg-[#FAF6FE]/90 backdrop-blur-md border-b border-[#452080]/10 py-3.5'
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#FFCA29] via-[#452080] to-[#5E2EB0] transition-all duration-150"
        style={{ width: `${scrollPct}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand with Official 3D Mascot Logo */}
        <a href="#home" className="group flex items-center gap-2.5 no-underline">
          <img
            src="/dkoder-logo.png"
            alt="DKoder Logo"
            className="w-10 h-10 object-contain filter drop-shadow-[0_2px_8px_rgba(255,202,41,0.45)] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
          />
          <span className="font-extrabold text-xl tracking-tight text-slate-900 flex items-center">
            <GlitchText glitchOnHover>dkoder</GlitchText><span className="text-[#FFCA29] animate-pulse text-2xl leading-none">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all hover-gradient-text ${
                  isActive
                    ? 'bg-[#452080]/10 text-[#452080] border border-[#452080]/20 wave-underline'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg hover:border-[#452080]/40 hover:bg-purple-50 hover:text-[#452080] transition-all shadow-sm"
            title="Open command palette (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">Quick find</span>
            <kbd className="hidden xl:inline text-[9px] bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-slate-400">⌘K</kbd>
          </button>

          <button
            onClick={onOpenLogin}
            className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1"
          >
            Log in <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <a
            href="#destination"
            className="text-xs font-bold uppercase tracking-wider bg-[#452080] hover:bg-[#5E2EB0] text-white px-4 py-2 rounded-lg shadow-sm hover:shadow-purple-glow transition-all flex items-center gap-1.5 active:scale-95 breathing-glow"
          >
            Find your path
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FFCA29]" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-lg text-purple-600 hover:bg-purple-50 transition-colors"
            aria-label="Open search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={onOpenLogin}
            className="text-xs font-bold text-slate-900 px-2.5 py-1.5 rounded bg-dk-yellow"
          >
            Login
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 text-sm font-semibold px-3 py-2.5 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-purple-50 text-purple-700 border border-purple-200'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-purple-600' : 'text-purple-500'}`} />
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#destination"
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-xs font-bold uppercase tracking-wider bg-dk-purple text-white py-3 rounded-xl shadow"
              >
                Find your path ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
