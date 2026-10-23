import React from 'react';
import { ArrowUp, ArrowUpRight, Phone, MessageSquare, Mail, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-[#F1F3F8] text-slate-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact and Office Bar (from PDF Page 19 & 20) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-slate-200 text-xs">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <Phone className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-slate-500 font-bold uppercase text-[10px]">CALL US</div>
              <div className="font-bold text-slate-900 mt-0.5">+91 87542 00247</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-slate-500 font-bold uppercase text-[10px]">WHATSAPP</div>
              <div className="font-bold text-slate-900 mt-0.5">Chat with our team ↗</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-slate-500 font-bold uppercase text-[10px]">EMAIL SUPPORT</div>
              <div className="font-bold text-slate-900 mt-0.5">support@dkoder.co.in</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-slate-500 font-bold uppercase text-[10px]">HEAD OFFICE</div>
              <div className="text-[11px] text-slate-700 leading-tight mt-0.5 font-medium">
                Campus 1A, No. 143, Dr. M.G.R. Road, Perungudi, Chennai 600096
              </div>
            </div>
          </div>
        </div>

        {/* Main 4-column footer (from PDF Page 20) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-200 text-xs">
          {/* Col 1: For students */}
          <div className="space-y-3">
            <div className="font-mono font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <span>🎓</span> FOR STUDENTS
            </div>
            <ul className="space-y-2 font-medium">
              <li><a href="#destination" className="hover:text-purple-700 transition-colors">Practice</a></li>
              <li><a href="#question-bank" className="hover:text-purple-700 transition-colors">Coding practice</a></li>
              <li><a href="#question-bank" className="hover:text-purple-700 transition-colors">Platform arena</a></li>
              <li><a href="#leaderboard" className="hover:text-purple-700 transition-colors">Challenges & Streaks</a></li>
              <li><a href="#leaderboard" className="hover:text-purple-700 transition-colors">Leaderboard</a></li>
              <li><a href="#explore" className="hover:text-purple-700 transition-colors">Courses & Sets</a></li>
              <li><a href="#pricing" className="hover:text-purple-700 transition-colors">Pricing & Scholarship</a></li>
              <li><a href="#start" className="hover:text-purple-700 transition-colors">Verify a certificate</a></li>
            </ul>
          </div>

          {/* Col 2: For institutions */}
          <div className="space-y-3">
            <div className="font-mono font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <span>🏛️</span> FOR INSTITUTIONS
            </div>
            <ul className="space-y-2 font-medium">
              <li><a href="#institutions" className="hover:text-purple-700 transition-colors">Dkoder for colleges</a></li>
              <li><a href="#institutions" className="hover:text-purple-700 transition-colors">Apply for MOU</a></li>
              <li><a href="#institutions" className="hover:text-purple-700 transition-colors">Host a hackathon</a></li>
              <li><a href="#institutions" className="hover:text-purple-700 transition-colors">Benefits for institutions</a></li>
              <li><a href="#institutions" className="hover:text-purple-700 transition-colors">Institution sign-in</a></li>
              <li><a href="#security" className="hover:text-purple-700 transition-colors">Proctoring & Audit console</a></li>
            </ul>
          </div>

          {/* Col 3: Programmes */}
          <div className="space-y-3">
            <div className="font-mono font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <span>🏆</span> PROGRAMMES
            </div>
            <ul className="space-y-2 font-medium">
              <li><a href="#explore" className="hover:text-purple-700 transition-colors">Campus Hackathons</a></li>
              <li><a href="#explore" className="hover:text-purple-700 transition-colors">100 Days of Sustainability</a></li>
              <li><a href="#explore" className="hover:text-purple-700 transition-colors">Final Year Projects</a></li>
              <li><a href="#explore" className="hover:text-purple-700 transition-colors">Topic certifications</a></li>
              <li><a href="#explore" className="hover:text-purple-700 transition-colors">Technology certifications</a></li>
            </ul>
          </div>

          {/* Col 4: Help & support */}
          <div className="space-y-3">
            <div className="font-mono font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <span>🎧</span> HELP & SUPPORT
            </div>
            <ul className="space-y-2 font-medium">
              <li><a href="#faq" className="hover:text-purple-700 transition-colors">Contact support</a></li>
              <li><a href="https://wa.me/918754200247" className="hover:text-purple-700 transition-colors">Chat on WhatsApp</a></li>
              <li><a href="#home" className="hover:text-purple-700 transition-colors">Sign in</a></li>
              <li><a href="#start" className="hover:text-purple-700 transition-colors">Create an account</a></li>
              <li><a href="#faq" className="hover:text-purple-700 transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Government Accreditations & Statutory Regs (from PDF Page 21) */}
        <div className="py-8 border-b border-slate-200">
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500">
              OFFICIAL ACCREDITATIONS & RECOGNITIONS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center items-center">
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
              <div className="text-[10px] font-bold text-slate-800">Ministry of MSME</div>
              <div className="text-[9px] text-slate-500 font-mono">Govt. of India</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
              <div className="text-[10px] font-bold text-slate-800">DPIIT</div>
              <div className="text-[9px] text-amber-700 font-mono font-bold">#startupindia</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
              <div className="text-[10px] font-bold text-slate-800">ISO 9001:2015</div>
              <div className="text-[9px] text-emerald-700 font-mono font-bold">CERTIFIED</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
              <div className="text-[10px] font-bold text-slate-800">Corp. Affairs</div>
              <div className="text-[9px] text-slate-500 font-mono">Govt. of India</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
              <div className="text-[10px] font-bold text-slate-800">AICTE Portal</div>
              <div className="text-[9px] text-purple-700 font-mono font-bold">Internship Portal</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
              <div className="text-[10px] font-bold text-slate-800">Career Service</div>
              <div className="text-[9px] text-slate-500 font-mono">National Portal</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
              <div className="text-[10px] font-bold text-slate-800">NAPS</div>
              <div className="text-[9px] text-blue-700 font-mono font-bold">Govt. Scheme</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
              <div className="text-[10px] font-bold text-slate-800">Skill India</div>
              <div className="text-[9px] text-amber-800 font-mono font-bold">Certified</div>
            </div>
          </div>

          {/* Statutory Registration Details from PDF Page 21 */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-mono text-slate-500">
            <span><b>CIN:</b> U85500TN2025PTC182250</span>
            <span>•</span>
            <span><b>MSME Udyam:</b> UDYAM-TN-08-0120538</span>
            <span>•</span>
            <span><b>DPIIT:</b> DIPP218224</span>
            <span>•</span>
            <span><b>ISO 9001:2015:</b> QMS/OA86/0825</span>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <span>© 2026 Dkoder. All rights reserved.</span>
          <span className="text-slate-700 font-bold tracking-wider">
            Practice · Learn · Achieve
          </span>
          <button
            onClick={scrollToTop}
            className="text-purple-700 hover:text-slate-900 font-bold flex items-center gap-1 transition-colors"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
