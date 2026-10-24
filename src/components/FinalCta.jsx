import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import BrandLogo from './BrandLogo';
import SplitTextReveal from './SplitTextReveal';
import TextScramble from './TextScramble';
import MagneticButton from './MagneticButton';
import MorphingBlobs from './MorphingBlobs';
import ParallaxSection from './ParallaxSection';

export default function FinalCta() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-amber-50/50 to-purple-50/50 morph-gradient-bg" id="start">
      {/* ★ Morphing blobs for organic feel */}
      <MorphingBlobs />

      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FFCA29]/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#452080]/18 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal animation="fade-up">
          {/* Brand Logo Presentation */}
          <div className="flex justify-center mb-5">
            <BrandLogo size="lg" showTagline tagline="Placement Ready · Round Focused" />
          </div>

          {/* ★ Animated badge with rainbow border */}
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#B38300] uppercase tracking-widest mb-6 px-3.5 py-1.5 rounded-full bg-amber-50/80 border border-[#FFCA29]/50 rainbow-border">
            <span className="w-4 h-0.5 bg-[#FFCA29]"></span>
            <TextScramble text="ONE GOAL. ONE USEFUL NEXT STEP." speed={20} revealDelay={400} />
          </div>

          {/* ★ Split text reveal heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            <SplitTextReveal text="Make the next" animation="blur" staggerMs={50} className="block" />
            <br />
            <span className="holographic text-5xl sm:text-6xl md:text-7xl">round count.</span>
          </h2>

          <p className="mt-6 text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Practise relevant questions, track your daily progress, and take a clearer, confident step toward your next opportunity.
          </p>

          {/* ★ Magnetic CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton strength={0.3}>
              <a
                href="#destination"
                className="inline-flex items-center gap-2 bg-[#452080] hover:bg-[#5E2EB0] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 breathing-glow"
              >
                Start a practice route
                <ArrowUpRight className="w-4 h-4 text-[#FFCA29]" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href="#institutions"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm uppercase tracking-wider transition-all shadow-sm liquid-fill"
              >
                For colleges & teams
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </MagneticButton>
          </div>

          {/* ★ Animated bottom divider */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <TextScramble text="LESS RANDOM PREP." className="tracking-widest" revealDelay={600} />
            <span className="text-purple-700 font-bold tracking-widest flex items-center gap-1.5">
              <TextScramble text="MORE INTENTIONAL PROGRESS." className="inline" revealDelay={800} />
              <span className="text-sm text-amber-500">✳</span>
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
