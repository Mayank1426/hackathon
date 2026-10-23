import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CompanyStrip({ onSelectCompany }) {
  const companies = [
    { name: 'TCS', tag: 'NQT & Digital', color: 'hover:border-blue-400 hover:bg-blue-50/50' },
    { name: 'INFOSYS', tag: 'DSE & SP', color: 'hover:border-indigo-400 hover:bg-indigo-50/50' },
    { name: 'WIPRO', tag: 'NLTH & Turbo', color: 'hover:border-purple-400 hover:bg-purple-50/50' },
    { name: 'COGNIZANT', tag: 'GenC Next', color: 'hover:border-teal-400 hover:bg-teal-50/50' },
    { name: 'CAPGEMINI', tag: 'Exceller Drive', color: 'hover:border-cyan-400 hover:bg-cyan-50/50' },
    { name: 'ACCENTURE', tag: 'ASE & FSE', color: 'hover:border-purple-400 hover:bg-purple-50/50' },
    { name: 'AMAZON', tag: 'SDE-I & SDE-II', color: 'hover:border-amber-400 hover:bg-amber-50/50' },
    { name: 'ATLASSIAN', tag: 'Grad SWE', color: 'hover:border-blue-400 hover:bg-blue-50/50' },
    { name: 'MICROSOFT', tag: 'SWE University', color: 'hover:border-emerald-400 hover:bg-emerald-50/50' },
    { name: 'RAZORPAY', tag: 'Product SWE', color: 'hover:border-sky-400 hover:bg-sky-50/50' }
  ];

  return (
    <div className="py-10 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-6">
            <span>PREP FOR THE PLACES YOU WANT TO GO</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-amber-500" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {companies.map((comp, idx) => (
              <div
                key={comp.name}
                onClick={() => onSelectCompany?.(comp.name)}
                className={`p-3.5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer transition-all duration-200 group flex flex-col justify-between hover:shadow-sm ${comp.color}`}
              >
                <div className="text-sm font-extrabold tracking-tight text-slate-900 group-hover:scale-105 transition-transform origin-left">
                  {comp.name}
                </div>
                <div className="text-[10px] font-mono text-slate-500 mt-1">
                  {comp.tag}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
