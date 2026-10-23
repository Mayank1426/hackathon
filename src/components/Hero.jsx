import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Play, Sparkles, Bot, Terminal, Send, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero({ onOpenAiRoadmap, onToast }) {
  const [aiInput, setAiInput] = useState('');
  const [conversation, setConversation] = useState([
    {
      sender: 'user',
      text: 'I want to be an SDE at Amazon or TCS Digital. Can you guide me?',
      time: '10:42 AM'
    },
    {
      sender: 'bot',
      text: 'I will frame a 30-day targeted roadmap for you based on recent hiring patterns.',
      time: 'DKoder AI guide'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

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

  const handleAskAi = (e) => {
    e.preventDefault();
    if (!aiInput.trim()) return;

    const userMsg = {
      sender: 'user',
      text: aiInput,
      time: 'Just now'
    };

    setConversation((prev) => [...prev, userMsg]);
    setAiInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setConversation((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `Roadmap mapped for: "${userMsg.text}". Added 12 curated questions to your Question Bank filter!`,
          time: 'DKoder AI guide'
        }
      ]);
      onToast('AI Guide generated your placement roadmap!');
    }, 1200);
  };

  return (
    <section className="relative pt-6 pb-20 md:py-24 overflow-hidden bg-[#F8F9FC] bg-grid-pattern" id="home">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-200/40 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Copy (Left) */}
          <ScrollReveal animation="fade-up" delay={50} className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-mono text-slate-800 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              THE PLACEMENT PLAYBOOK
              <span className="text-slate-400">01 / 07</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] min-h-[145px] sm:min-h-[165px] lg:min-h-[200px]">
              Interview tomorrow. <br />
              <span className="text-gradient-purple inline-block">
                {currentText}
              </span>
              <span className="inline-block w-1 sm:w-1.5 h-[0.85em] bg-purple-600 ml-1.5 align-middle animate-pulse rounded-full shadow-sm" />
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed font-medium">
              A deep question bank. A clearer practice plan. The next step toward the offer you want—without the random, aimless grind.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#destination"
                className="inline-flex items-center gap-2 bg-dk-purple hover:bg-purple-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Build my practice path
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#explore"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm shadow-sm transition-all"
              >
                <Play className="w-4 h-4 text-amber-500 fill-amber-500" />
                Explore how it works
              </a>
            </div>

            {/* Proof stack */}
            <div className="pt-6 border-t border-slate-200/80 flex items-center gap-4">
              <div className="flex -space-x-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-2 ring-white bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 font-bold text-xs shadow-sm">
                  AK
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-2 ring-white bg-gradient-to-tr from-purple-600 to-indigo-500 text-white font-bold text-xs shadow-sm">
                  RS
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-2 ring-white bg-gradient-to-tr from-emerald-600 to-teal-400 text-white font-bold text-xs shadow-sm">
                  PM
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-2 ring-white bg-slate-900 text-amber-300 font-bold text-xs shadow-sm">
                  +38k
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

          {/* Hero Visual / Interactive Bot Scene (Right) */}
          <ScrollReveal animation="scale" delay={150} className="lg:col-span-6 relative">
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-slate-200/90 shadow-xl bg-white/90">
              {/* Decorative top pill */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 pl-2 font-semibold">DKODER AI ADVISOR</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  ONLINE
                </span>
              </div>

              {/* Chat bubbles */}
              <div className="space-y-4 mb-6 max-h-56 overflow-y-auto pr-1">
                {conversation.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-medium ${
                        msg.sender === 'user'
                          ? 'bg-dk-purple text-white rounded-tr-none shadow-sm'
                          : 'bg-slate-100 text-slate-800 border border-slate-200 rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 mt-1 px-1">
                      {msg.time}
                    </span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-1 text-slate-500 text-xs py-1">
                    <Bot className="w-4 h-4 text-purple-600 animate-bounce" />
                    <span>DKoder AI is drafting your roadmap...</span>
                  </div>
                )}
              </div>

              {/* Interactive Bot Character & Student Visual */}
              <div className="relative py-6 px-4 bg-slate-50/80 rounded-xl border border-slate-200 flex items-center justify-around overflow-hidden mb-6">
                {/* Floating tags */}
                <div className="absolute top-2 left-2 z-10 text-[10px] font-mono font-bold bg-dk-yellow text-slate-950 px-2.5 py-0.5 rounded border border-amber-300 shadow-sm">
                  YOUR NEXT STEP ↗
                </div>
                <div className="absolute bottom-2 right-2 z-10 text-[10px] font-mono font-bold bg-dk-purple text-white px-2.5 py-0.5 rounded shadow-sm">
                  FOCUSED PREP
                </div>

                {/* Animated Cute Bot */}
                <div className="flex flex-col items-center group cursor-pointer" onClick={() => onToast('Hello! Ask me any role to build a roadmap.')}>
                  <div className="w-2 h-4 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="relative w-16 h-12 bg-gradient-to-b from-slate-100 to-slate-200 rounded-xl flex items-center justify-center gap-2 shadow-sm border border-slate-300">
                    <span className="w-2.5 h-2.5 bg-purple-600 rounded-full animate-pulse"></span>
                    <span className="w-2.5 h-2.5 bg-purple-600 rounded-full animate-pulse"></span>
                    <div className="absolute bottom-1 w-4 h-1 bg-slate-400 rounded-full"></div>
                  </div>
                  <div className="w-12 h-10 bg-slate-800 rounded-b-xl flex items-center justify-center text-dk-yellow font-black text-xs shadow-inner border-t border-slate-700">
                    ✳
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 mt-1 font-semibold">AI Guide</span>
                </div>

                {/* Connected Path Line */}
                <div className="flex-1 max-w-[100px] border-b-2 border-dashed border-amber-400 mx-2 relative">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-amber-600 font-mono font-bold">
                    →
                  </span>
                </div>

                {/* Student Illustration */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-200 ring-2 ring-slate-300 relative">
                    <div className="absolute top-0 inset-x-0 h-3 bg-slate-800 rounded-t-full"></div>
                  </div>
                  <div className="w-12 h-8 bg-dk-yellow rounded-t-xl flex items-center justify-center mt-1 text-slate-950 font-bold text-[10px] border border-amber-300">
                    YOU
                  </div>
                  <div className="w-14 h-3 bg-slate-800 rounded-sm flex items-center justify-center text-[9px] font-mono text-dk-yellow border border-slate-700">
                    DKoder
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 mt-1 font-semibold">Ready</span>
                </div>
              </div>

              {/* Interactive prompt input */}
              <form onSubmit={handleAskAi} className="flex gap-2">
                <input
                  type="text"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="Ask AI guide: e.g. 'Infosys SP Java roadmap'..."
                  className="flex-1 bg-white border border-slate-200 focus:border-purple-600 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors shadow-sm"
                />
                <button
                  type="submit"
                  className="bg-dk-yellow hover:bg-amber-300 text-slate-950 font-bold px-3 py-2 rounded-lg text-xs flex items-center gap-1 transition-colors border border-amber-300 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  Ask
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>✳ YOUR GOAL, YOUR ROUTE</span>
                <span className="text-purple-700 font-bold">SCROLL TO EXPLORE ↓</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero bottomline */}
        <div className="mt-14 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500">
          <span className="tracking-widest">01 — FIND YOUR DIRECTION</span>
          <span className="text-purple-700 font-bold tracking-widest flex items-center gap-1.5">
            LESS NOISE. MORE CLARITY. <span className="animate-spin text-sm text-amber-500">✳</span>
          </span>
        </div>
      </div>
    </section>
  );
}
