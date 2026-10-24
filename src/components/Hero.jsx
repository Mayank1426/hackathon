import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Play, Bot, CheckCircle2, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ParticleCanvas from './ParticleCanvas';
import MagneticButton from './MagneticButton';
import TextScramble from './TextScramble';
import SplitTextReveal from './SplitTextReveal';
import TiltCard from './TiltCard';
import AnimatedCounter from './AnimatedCounter';
import GlitchText from './GlitchText';
import MorphingBlobs from './MorphingBlobs';
import ParallaxSection from './ParallaxSection';

export default function Hero({ onOpenAiRoadmap, onToast }) {
  // Typewriter effect phrases
  const typewriterPhrases = [
    'Make every minute count.',
    'Crack your dream offer.',
    'Stop the random grind.',
    'Ace your technical round.',
    'Target 12+ LPA packages.'
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('Make every minute count.');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeCompanyRoute, setActiveCompanyRoute] = useState({
    name: 'TCS',
    role: 'TCS NQT',
    steps: [
      { n: '01', t: 'MCQ Arena', d: 'Quant + Reasoning speed drills', done: true },
      { n: '02', t: 'Coding Round', d: 'Arrays, Strings, Logic patterns', done: true },
      { n: '03', t: 'Mock Interview', d: 'Simulated HR + Technical round', done: false },
    ]
  });

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];
    let timer;

    if (!isDeleting && currentText === currentPhrase) {
      // Pause after typing completes
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === '') {
      // Switch to next phrase after deletion
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
      timer = setTimeout(() => {}, 300);
    } else {
      // Typing & deleting speed
      const speed = isDeleting ? 30 : 65;
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? currentPhrase.substring(0, currentText.length - 1)
            : currentPhrase.substring(0, currentText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);


  return (
    <section className="relative pt-6 pb-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#FFFDF2]/80 via-[#F7F2FD]/50 to-transparent bg-grid-pattern" id="home">
      {/* Three.js Particle Network Background */}
      <ParticleCanvas />

      {/* Organic Morphing Blobs */}
      <MorphingBlobs />

      {/* Background glow effects - Luminous warm gold #FFCA29 and royal purple #452080 */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[400px] bg-[#FFCA29]/22 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[520px] h-[380px] bg-[#452080]/18 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Copy (Left) */}
          <ScrollReveal animation="fade-up" delay={50} className="lg:col-span-6 space-y-6">
            {/* ★ Animated Pill Badge with rainbow border */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm text-xs font-mono text-slate-800 uppercase tracking-widest rainbow-border magnetic-grow">
              <span className="w-2 h-2 rounded-full bg-[#FFCA29] animate-pulse"></span>
              <TextScramble text="THE PLACEMENT PLAYBOOK" className="font-bold" speed={20} revealDelay={300} />
              <span className="text-slate-400">01 / 07</span>
            </div>

            {/* ★ Hero Heading with Typewriter + Split Text Reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] min-h-[145px] sm:min-h-[165px] lg:min-h-[200px]">
              <SplitTextReveal
                text="Interview tomorrow."
                className="block mb-2"
                animation="rise"
                staggerMs={40}
              />
              <br />
              <span className="holographic inline-block">
                {currentText}
              </span>
              <span className="typing-cursor" />
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed font-medium">
              A deep question bank. A clearer practice plan. The next step toward the offer you want—without the random, aimless grind.
            </p>

            {/* ★ Magnetic CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton strength={0.25}>
                <a
                  href="#destination"
                  className="inline-flex items-center gap-2 bg-[#452080] hover:bg-[#5E2EB0] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 breathing-glow"
                >
                  Build my practice path
                  <ArrowUpRight className="w-4 h-4 text-[#FFCA29]" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <a
                  href="#explore"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-200/90 bg-white/90 hover:bg-slate-50 text-slate-700 font-semibold text-sm shadow-sm transition-all liquid-fill"
                >
                  <Play className="w-4 h-4 text-[#FFCA29] fill-[#FFCA29]" />
                  Explore how it works
                </a>
              </MagneticButton>
            </div>

            {/* ★ Proof stack with Animated Counters */}
            <div className="pt-6 border-t border-slate-200/80 flex items-center gap-4">
              <div className="flex -space-x-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-2 ring-white bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 font-bold text-xs shadow-sm elastic-bounce">
                  AK
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-2 ring-white bg-gradient-to-tr from-purple-600 to-indigo-500 text-white font-bold text-xs shadow-sm elastic-bounce">
                  RS
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-2 ring-white bg-gradient-to-tr from-emerald-600 to-teal-400 text-white font-bold text-xs shadow-sm elastic-bounce">
                  PM
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-2 ring-white bg-slate-900 text-amber-300 font-bold text-xs shadow-sm">
                  +<AnimatedCounter target={38} suffix="k" duration={1500} />
                </span>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  Made for your next round
                  <CheckCircle2 className="w-4 h-4 text-amber-500 inline" />
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  Company • package • language • level
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero Visual — Right Panel */}
          <ScrollReveal animation="scale" delay={150} className="lg:col-span-6 relative [perspective:1200px]">
            {/* ★ Premium 3D Tilt Card */}
            <TiltCard className="group" tiltDeg={8} glareOpacity={0.12}>
              <div className="glass-card rounded-2xl relative overflow-hidden border border-slate-200/90 shadow-xl bg-white/95">
                {/* ★ Animated shimmer top border */}
                <div className="absolute top-0 left-0 right-0 h-[3px] shimmer-border" />

                {/* Top bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-slate-50/80">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 font-semibold pl-1">DKODER · PLACEMENT DASHBOARD</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1 dot-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    LIVE
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  {/* ★ Stats with Animated Counters */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { val: 3254, lbl: 'Questions', color: 'from-purple-500 to-purple-700', icon: '📚', suffix: '' },
                      { val: 48, lbl: 'Companies', color: 'from-amber-400 to-amber-600', icon: '🏢', suffix: '+' },
                      { val: 38, lbl: 'Students', color: 'from-emerald-500 to-teal-600', icon: '🎓', suffix: 'k+' },
                    ].map((s) => (
                      <div key={s.lbl} className={`rounded-xl p-3 bg-gradient-to-br ${s.color} text-white text-center shadow-sm magnetic-grow`}>
                        <div className="text-lg">{s.icon}</div>
                        <div className="font-black text-lg leading-tight">
                          <AnimatedCounter target={s.val} suffix={s.suffix} duration={2000} />
                        </div>
                        <div className="text-[9px] font-mono opacity-80 uppercase tracking-wider">{s.lbl}</div>
                      </div>
                    ))}
                  </div>

                  {/* Company mini-logos - Interactive */}
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                      <span>Target company routes</span>
                      <span className="text-purple-600 font-semibold cursor-pointer hover-gradient-text">Tap to preview</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { name: 'TCS', role: 'TCS NQT', steps: [
                          { n: '01', t: 'MCQ Arena', d: 'Quant + Reasoning speed drills', done: true },
                          { n: '02', t: 'Coding Round', d: 'Arrays, Strings, Logic patterns', done: true },
                          { n: '03', t: 'Mock Interview', d: 'Simulated HR + Technical round', done: false },
                        ]},
                        { name: 'Amazon', role: 'Amazon SDE-1', steps: [
                          { n: '01', t: 'Online Assessment (OA)', d: 'Graphs, Dynamic Programming, Two-Pointer', done: true },
                          { n: '02', t: 'Low-Level Design', d: 'Object-Oriented Design & Clean Code', done: true },
                          { n: '03', t: 'Bar Raiser Mock', d: 'Leadership Principles & Algorithms', done: false },
                        ]},
                        { name: 'Infosys', role: 'Infosys DSE', steps: [
                          { n: '01', t: 'Reasoning & Pseudocode', d: 'Speed Math & Logical Deductions', done: true },
                          { n: '02', t: 'Hands-on Coding', d: 'Stack, Queue, Recursion challenges', done: true },
                          { n: '03', t: 'Tech Assessment', d: 'SQL, DBMS & Live Problem Solving', done: false },
                        ]},
                        { name: 'Microsoft', role: 'Microsoft SWE', steps: [
                          { n: '01', t: 'Codility Assessment', d: 'Tree traversals & Edge case handling', done: true },
                          { n: '02', t: 'Core Data Structures', d: 'Heaps, Tries, Matrix BFS/DFS', done: false },
                          { n: '03', t: 'System Architecture', d: 'Scalability & Space Optimization', done: false },
                        ]},
                      ].map((c) => {
                        const isSelected = activeCompanyRoute.name === c.name;
                        return (
                          <button
                            key={c.name}
                            onClick={() => {
                              setActiveCompanyRoute(c);
                              if (onToast) onToast(`Loaded prep route for ${c.role}`);
                            }}
                            className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer elastic-bounce ${
                              isSelected
                                ? 'bg-purple-600 text-white shadow-xs border border-purple-700 scale-105 breathing-glow'
                                : 'bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700'
                            }`}
                          >
                            {c.name}
                          </button>
                        );
                      })}
                      <span className="text-[10px] font-mono font-bold px-2 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700">
                        +44 more
                      </span>
                    </div>
                  </div>

                  {/* Practice path preview */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 color-shift-bg">
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
                      <span>Sample route · <strong className="text-purple-700 font-extrabold">{activeCompanyRoute.role}</strong></span>
                      <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">VERIFIED</span>
                    </div>
                    <div className="space-y-2">
                      {activeCompanyRoute.steps.map((step, idx) => (
                        <div key={step.n} className={`flex items-center gap-3 stagger-rise`} style={{ animationDelay: `${idx * 100}ms` }}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0 transition-transform ${
                            step.done ? 'bg-emerald-500 text-white shadow-xs' : 'bg-slate-200 text-slate-500'
                          }`}>
                            {step.done ? '✓' : step.n}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-800 leading-tight">{step.t}</div>
                            <div className="text-[10px] font-mono text-slate-400 truncate">{step.d}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Guide teaser — CTA to open chatbot */}
                  <div className="rounded-xl border-2 border-dashed border-purple-300 bg-gradient-to-r from-purple-50 to-amber-50 p-4 flex items-center gap-3 group cursor-pointer hover:border-purple-500 hover:shadow-sm transition-all liquid-fill"
                    onClick={() => document.querySelector('[aria-label="Open AI Chat"]')?.click()}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform breathing-glow">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <GlitchText scrambleOnHover={false} glitchOnHover>Ask the AI Guide</GlitchText>
                        <span className="text-[9px] font-mono bg-emerald-100 text-emerald-700 border border-emerald-200 px-1.5 py-0.3 rounded-full">ONLINE</span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                        "Give me a 30-day TCS roadmap" → instant answer
                      </div>
                    </div>
                    <div className="text-purple-400 group-hover:text-purple-700 text-xs font-bold transition-colors flex-shrink-0">
                      Open ↗
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* ★ Floating badge with parallax */}
            <ParallaxSection speed={-0.15} className="absolute -top-3 -right-3 z-20">
              <div className="bg-dk-yellow text-slate-950 font-black text-[10px] px-3 py-1.5 rounded-full border border-amber-300 shadow-md badge-float tracking-widest uppercase">
                Your Next Step ✳
              </div>
            </ParallaxSection>
          </ScrollReveal>
        </div>

        {/* Hero bottomline */}
        <div className="mt-14 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500">
          <TextScramble text="01 — FIND YOUR DIRECTION" className="tracking-widest" revealDelay={800} />
          <span className="text-purple-700 font-bold tracking-widest flex items-center gap-1.5">
            LESS NOISE. MORE CLARITY. <span className="animate-spin text-sm text-amber-500">✳</span>
          </span>
        </div>
      </div>
    </section>
  );
}
