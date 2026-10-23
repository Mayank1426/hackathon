import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass, Code, Trophy, Building2, ShieldCheck, CreditCard } from 'lucide-react';

export default function Navbar({ onOpenLogin, onToast }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Explore prep', href: '#explore', icon: Compass },
    { label: 'Question bank', href: '#question-bank', icon: Code },
    { label: 'Leaderboard', href: '#leaderboard', icon: Trophy },
    { label: 'Pricing', href: '#pricing', icon: CreditCard },
    { label: 'For colleges', href: '#institutions', icon: Building2 },
    { label: 'Integrity', href: '#security', icon: ShieldCheck },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-sm'
          : 'bg-white/60 backdrop-blur-sm border-b border-slate-200/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="group flex items-center gap-2.5 text-decoration-none">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-dk-yellow text-slate-950 font-black text-sm tracking-tighter group-hover:scale-105 transition-transform shadow-sm border border-amber-300/60">
            d<span className="text-dk-purple font-black">k</span>
          </span>
          <span className="font-extrabold text-xl tracking-tight text-slate-900 flex items-center">
            dkoder<span className="text-amber-500 animate-pulse text-2xl leading-none">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-slate-950 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Nav Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenLogin}
            className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1"
          >
            Log in <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <a
            href="#destination"
            className="text-xs font-bold uppercase tracking-wider bg-dk-purple hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 active:scale-95"
          >
            Find your path
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:hidden">
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
        <div className="lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn shadow-lg">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-700 hover:text-slate-950 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <Icon className="w-4 h-4 text-purple-600" />
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#destination"
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-xs font-bold uppercase tracking-wider bg-dk-purple text-white py-3 rounded-lg shadow"
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
