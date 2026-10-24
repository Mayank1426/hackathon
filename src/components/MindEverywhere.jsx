import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Brain, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SplitTextReveal from './SplitTextReveal';
import TextScramble from './TextScramble';
import TiltCard from './TiltCard';
import MorphingBlobs from './MorphingBlobs';

export default function MindEverywhere({ onToast }) {
  const thoughts = [
    {
      id: 1,
      text: 'Where do I even begin?',
      solution: 'Start with your target company pattern. 15 focused questions beat 100 random problems.'
    },
    {
      id: 2,
      text: 'Have I really improved?',
      solution: 'Check your streak and XP stats on the dashboard. Consistency reflects in test accuracy.'
    },
    {
      id: 3,
      text: 'Can I explain my projects?',
      solution: 'Use our mock technical round to practise explaining architecture and trade-offs out loud.'
    },
    {
      id: 4,
      text: 'Did I practise the right questions?',
      solution: 'Filter by company tier (Service, Product, Big Tech) to see exact questions asked in recent drives.'
    },
    {
      id: 5,
      text: 'Can I reach that ₹10 LPA goal?',
      solution: 'Follow the Specialist track (L03/L04). High packages look for solid core logic and problem breakdown.'
    },
    {
      id: 6,
      text: 'Is this the right role for me?',
      solution: 'Explore our 5 career tracks (Chip & Systems, Service, Product SDE, Big Tech) to align with your strengths.'
    },
    {
      id: 7,
      text: 'What if I fail the aptitude round?',
      solution: 'Dedicate 10 minutes daily to timed quant and speed reasoning sets in the MCQ arena.'
    },
    {
      id: 8,
      text: 'What if I forget everything?',
      solution: 'Stress makes you feel that way. Trust the muscle memory you built in your daily practice checklist.'
    },
    {
      id: 9,
      text: 'Will I sound confident in there?',
      solution: 'Preparation breeds confidence. Review the company briefing sheets before your interview day.'
    },
    {
      id: 10,
      text: 'Is everyone else better prepared?',
      solution: 'Focus on your own preparation route. Every student has gaps; intentional practice closes them.'
    }
  ];

  const [activeThought, setActiveThought] = useState(thoughts[0]);

  const handleSelectThought = (th) => {
    setActiveThought(th);
    onToast(`Actionable tip: ${th.solution}`);
  };

  return (
    <section className="py-16 md:py-24 border-b border-purple-100/60 bg-white/75 backdrop-blur-sm relative" id="mind">
      {/* ★ Morphing blobs background */}
      <MorphingBlobs />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-up" className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-600 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 border border-amber-200 rainbow-border">
            <Brain className="w-3.5 h-3.5 text-purple-700" />
            <TextScramble text="PLACEMENT PLAYBOOK" speed={25} revealDelay={200} />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            <SplitTextReveal text="Interview tomorrow." animation="rise" staggerMs={35} className="block" />
            <br />
            <span className="holographic">Mind everywhere?</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto font-medium">
            Tap a thought below to see how to handle it.
          </p>
        </ScrollReveal>

        {/* 10 Interactive Thoughts Grid */}
        <ScrollReveal animation="scale" delay={100} className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-10">
          {thoughts.map((item, idx) => {
            const isSelected = activeThought?.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectThought(item)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer select-none kinetic-underline magnetic-grow stagger-rise ${
                  isSelected
                    ? 'bg-[#452080] text-white border-[#321461] shadow-lg scale-105 breathing-glow'
                    : 'bg-white/90 hover:bg-purple-50/50 border-slate-200 text-slate-700 hover:border-[#452080]/30 shadow-sm hover:-translate-y-0.5'
                }`}
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                {item.text}
              </button>
            );
          })}
        </ScrollReveal>

        {/* Dynamic Solution Card */}
        <ScrollReveal animation="fade-up" delay={150}>
          <TiltCard className="max-w-3xl mx-auto" tiltDeg={6} glareOpacity={0.1}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 border-2 border-[#452080]/40 shadow-xl bg-gradient-to-br from-white via-purple-50/25 to-amber-50/30 space-y-4 relative">
              {/* ★ Animated top shimmer border */}
              <div className="absolute top-0 left-0 right-0 h-[3px] shimmer-border rounded-t-2xl" />

              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <span className="text-[11px] font-mono font-bold text-[#B38300] uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFCA29] fill-[#FFCA29]" />
                  WANT A SOLUTION?
                </span>
                <span className="text-xs font-mono font-bold text-[#452080] bg-[#452080]/10 border border-[#452080]/20 px-2.5 py-0.5 rounded-full badge-float">
                  HANDLING: "{activeThought.text}"
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                One goal can narrow the next question.
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                {activeThought.solution}
              </p>

              <p className="text-slate-500 text-xs font-medium">
                Start with a target, then filter by company, package, mode and level. A smaller shortlist makes the next action easier to choose.
              </p>

              <div className="pt-2">
                <a
                  href="#destination"
                  className="inline-flex items-center gap-2 bg-[#FFCA29] hover:bg-[#FFD54F] text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md border border-[#FFCA29] transition-all hover:-translate-y-0.5 active:scale-95 liquid-fill"
                >
                  Try the filters
                  <ArrowUpRight className="w-4 h-4 text-[#452080]" />
                </a>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
