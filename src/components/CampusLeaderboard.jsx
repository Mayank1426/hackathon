import React, { useState } from 'react';
import { podiumData, rankingsData } from '../data/mockData';
import { Trophy, Crown, ArrowUpRight, Search, ChevronDown, RotateCw, Flame, Target } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CampusLeaderboard({ onToast }) {
  const [activeTab, setActiveTab] = useState('xp'); // 'xp' | 'active' | 'hard'
  const [scope, setScope] = useState('All colleges');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePage, setActivePage] = useState(1);

  const filteredRankings = rankingsData.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.college.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 md:py-24 border-b border-slate-200 relative bg-[#F8F9FC]" id="leaderboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal animation="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-3">
              <span className="w-4 h-0.5 bg-amber-500"></span>
              PROGRESS THAT GETS SEEN
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Earn your spot<span className="text-amber-500">.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm md:text-base max-w-md font-medium">
            Celebrate consistent effort with student rankings, campus leaderboards, and a visible sense of momentum across college batches.
          </p>
        </ScrollReveal>

        {/* Full Leaderboard Card as in PDF Pages 7 & 8 */}
        <ScrollReveal animation="fade-up" delay={80}>
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md bg-white space-y-8 max-w-5xl mx-auto">
            {/* Top 3 Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                <button
                  onClick={() => { setActiveTab('xp'); onToast('Showing XP Leaders'); }}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 ${
                    activeTab === 'xp' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Trophy className="w-3.5 h-3.5 text-amber-500" />
                  XP Leaders
                </button>
                <button
                  onClick={() => { setActiveTab('active'); onToast('Showing Most Active Solvers'); }}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 ${
                    activeTab === 'active' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5 text-rose-500" />
                  Most Active Solvers
                </button>
                <button
                  onClick={() => { setActiveTab('hard'); onToast('Showing Hard Solvers'); }}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 ${
                    activeTab === 'hard' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Target className="w-3.5 h-3.5 text-purple-600" />
                  Hard Solvers
                </button>
              </div>

              {/* Search & Scope Dropdown */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search student or college"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600"
                  />
                </div>

                <select
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-900 focus:outline-none focus:border-purple-600 font-semibold shadow-xs"
                >
                  <option>All colleges</option>
                  <option>Dhaanish COE</option>
                  <option>Government Engineering College</option>
                  <option>Non-Institutional</option>
                </select>
              </div>
            </div>

            {/* Podium (Top 3 from PDF Page 7) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 items-end pt-6 pb-6">
              {/* #2 Srimathi */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-teal-600 text-white font-black text-2xl flex items-center justify-center shadow-md border-2 border-teal-400">
                    S
                  </div>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xl">🥈</span>
                  <span className="absolute -bottom-1 -right-1 bg-white border border-slate-300 text-slate-900 font-mono text-xs font-black px-2 py-0.5 rounded-full shadow-xs">
                    2
                  </span>
                </div>
                <div className="font-extrabold text-slate-900 text-sm sm:text-base mt-2">Srimathi</div>
                <div className="text-[11px] font-mono text-slate-500">Non-Institutional Student</div>
                <div className="text-sm font-mono font-bold text-slate-900 mt-1">#2</div>
                <div className="text-xs font-mono font-bold text-teal-700">1749.03 XP</div>
              </div>

              {/* #1 Ronia Rosario K (Center / Gold) */}
              <div className="flex flex-col items-center text-center -translate-y-4">
                <div className="relative mb-2">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-rose-500 text-white font-black text-3xl flex items-center justify-center shadow-lg border-4 border-amber-300">
                    R
                  </div>
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl animate-bounce">👑</span>
                  <span className="absolute -bottom-1 -right-1 bg-slate-900 text-amber-300 font-mono text-xs font-black px-2 py-0.5 rounded-full shadow-xs">
                    1
                  </span>
                </div>
                <div className="font-extrabold text-slate-900 text-base sm:text-lg mt-2">Ronia Rosario K</div>
                <div className="text-[11px] font-mono text-slate-500">Non-Institutional Student</div>
                <div className="text-base font-mono font-black text-amber-600 mt-1">#1</div>
                <div className="text-sm font-mono font-extrabold text-slate-900">2739.53 XP</div>
              </div>

              {/* #3 PAVAN KUMAR */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-indigo-600 text-white font-black text-xl flex items-center justify-center shadow-md border-2 border-indigo-400">
                    PK
                  </div>
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xl">🥉</span>
                  <span className="absolute -bottom-1 -right-1 bg-white border border-slate-300 text-slate-900 font-mono text-xs font-black px-2 py-0.5 rounded-full shadow-xs">
                    3
                  </span>
                </div>
                <div className="font-extrabold text-slate-900 text-sm sm:text-base mt-2">PAVAN KUMAR</div>
                <div className="text-[11px] font-mono text-slate-500">Non-Institutional Student</div>
                <div className="text-sm font-mono font-bold text-slate-900 mt-1">#3</div>
                <div className="text-xs font-mono font-bold text-indigo-700">494.83 XP</div>
              </div>
            </div>

            {/* Table of Ranks (from PDF Page 7 & 8) */}
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <div className="grid grid-cols-12 bg-slate-50 px-4 py-3 text-xs font-mono font-bold text-slate-500 uppercase border-b border-slate-200">
                <span className="col-span-2">RANK</span>
                <span className="col-span-7">STUDENT</span>
                <span className="col-span-3 text-right">XP</span>
              </div>

              <div className="divide-y divide-slate-100">
                {filteredRankings.map((u) => (
                  <div
                    key={u.rank}
                    className="grid grid-cols-12 items-center px-4 py-3 hover:bg-slate-50 transition-colors text-xs font-medium"
                  >
                    <div className="col-span-2 flex items-center">
                      <span className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-mono font-bold text-slate-700">
                        {u.rank}
                      </span>
                    </div>

                    <div className="col-span-7 flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full ${u.color} flex items-center justify-center font-bold text-xs shrink-0 shadow-xs`}>
                        {u.avatar}
                      </span>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{u.name}</div>
                        <div className="text-[11px] font-mono text-slate-500">{u.college}</div>
                      </div>
                    </div>

                    <div className="col-span-3 text-right font-mono font-bold text-slate-900">
                      {u.xp} <span className="text-slate-400 text-[10px]">XP</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer with exact PDF note & Pagination */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <span>Showing ranks 4–13 of 50 below podium · Click a row for details</span>
                <span className="text-slate-400">· 🔄 Updated 11:17 am</span>
              </div>

              {/* Pagination < 1 2 3 4 5 > */}
              <div className="flex items-center gap-1 font-bold">
                <button
                  onClick={() => setActivePage(Math.max(1, activePage - 1))}
                  className="px-2 py-1 rounded hover:bg-slate-100 text-slate-600"
                >
                  &lt;
                </button>
                {[1, 2, 3, 4, 5].map((p) => (
                  <button
                    key={p}
                    onClick={() => { setActivePage(p); onToast(`Loaded leaderboard page ${p}`); }}
                    className={`w-7 h-7 rounded-lg transition-colors ${
                      activePage === p
                        ? 'bg-purple-700 text-white shadow-xs'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setActivePage(Math.min(5, activePage + 1))}
                  className="px-2 py-1 rounded hover:bg-slate-100 text-slate-600"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
