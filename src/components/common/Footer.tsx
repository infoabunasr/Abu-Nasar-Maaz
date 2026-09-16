import React from 'react';
import { Linkedin, Globe, Shield, ArrowUpRight, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { navigateTo, siteSettings, setIsLoginModalOpen } = useApp();

  return (
    <footer className="bg-[#071A33] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#146EF5] flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Abu Naser Maaz
              </span>
            </div>
            <p className="text-sm font-semibold text-blue-400 mb-3">
              QA & Quality Engineering | Technical Project Delivery
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Helping founders, product teams, and engineering leaders identify risks, establish quality standards, and ship reliable software across web, mobile, games, AI, and XR.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteSettings.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/90 hover:bg-[#146EF5] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteSettings.innovifyXrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/90 hover:bg-[#146EF5] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Innovify XR Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('/')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/about')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Abu
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/expertise')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/case-studies')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/insights')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Insights & Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/ventures')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Ventures
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Core Areas Col */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Quality Focus
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#146EF5]" />
                <span>Quality Engineering</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#146EF5]" />
                <span>Software QA & Testing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#146EF5]" />
                <span>Technical Project Delivery</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#146EF5]" />
                <span>AI Output Validation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#146EF5]" />
                <span>XR / VR Experience QA</span>
              </li>
            </ul>
          </div>

          {/* Ventures Col */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Ventures
            </h3>
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                  <span>Innovify XR</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">Founder & CEO</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-2">
                  Immersive VR/XR training, simulations & spatial experiences.
                </p>
                <a
                  href={siteSettings.innovifyXrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#2F80FF] hover:text-white flex items-center gap-1 group"
                >
                  <span>innovifyxr.com</span>
                  <ArrowUpRight className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                  <span>Locafyro</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">Venture</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-2">
                  Hyperlocal digital discovery & commerce platform.
                </p>
                <a
                  href={siteSettings.locafyroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 group"
                >
                  <span>locafyro.com</span>
                  <ArrowUpRight className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Abu Naser Maaz. All rights reserved. Professional Quality Engineering & Delivery.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigateTo('/about')}
              className="hover:text-slate-300 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigateTo('/contact')}
              className="hover:text-slate-300 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-1 hover:text-slate-300 transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
