import React from 'react';
import {
  ShieldCheck,
  Workflow,
  Sparkles,
  Compass,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Target,
  BookOpen,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { CTASection } from '../components/common/CTASection';
import { SEOHead } from '../components/common/SEOHead';
import { MetricCard } from '../components/common/MetricCard';

export const AboutPage: React.FC = () => {
  const { siteSettings, navigateTo } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <SEOHead
        title="About Abu Naser Maaz – Professional Journey & Quality Philosophy"
        description="Learn about Abu Naser Maaz, his journey across QA & Quality Engineering, technical project delivery, founder background at Innovify XR, and focus on AI and XR testing."
        breadcrumbs={[
          { name: 'About', item: 'https://abunasarmaaz.com/#/about' }
        ]}
      />

      <Breadcrumb items={[{ name: 'About Abu Naser Maaz' }]} />

      {/* Main Header / Bio Intro */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 lg:p-16 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#146EF5] text-xs font-bold uppercase tracking-wider">
              <span>Professional Profile</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight leading-tight">
              About Abu Naser Maaz
            </h1>

            <p className="text-lg text-slate-700 font-medium leading-relaxed">
              I am a Quality Engineering professional, technical delivery coordinator, and founder with a strong focus on software reliability, structured testing, and emerging technology validation.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              My work centers on helping startups, software companies, and product teams bridge the gap between ambitious product roadmaps and release confidence. Rather than viewing quality as a late-stage hurdle, I treat quality as an active design and engineering partnership that starts from day one.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => navigateTo('/contact')}
                className="px-6 py-3 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <span>Discuss a Collaboration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={siteSettings.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors inline-flex items-center gap-2"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Abu Naser Maaz"
                className="w-full h-80 sm:h-96 object-cover object-top"
              />
              <div className="p-4 bg-[#071A33] text-white">
                <p className="text-sm font-bold">Abu Naser Maaz</p>
                <p className="text-xs text-blue-300">QA & Quality Engineering • Founder & CEO — Innovify XR</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Experience Summary Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <MetricCard
          value="2+ Years"
          label="QA & Quality Engineering"
          sublabel="Functional, exploratory, regression, API & device testing"
        />
        <MetricCard
          value="1+ Year"
          label="Technical Project Delivery"
          sublabel="Sprint tracking, bug triage & cross-functional coordination"
        />
        <MetricCard
          value="Founder"
          label="Innovify XR"
          sublabel="Immersive training, simulation & spatial tech"
        />
      </section>

      {/* Section: My Approach */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs space-y-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#146EF5] text-xs font-bold uppercase tracking-wider mb-2">
            <span>Core Principles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071A33]">
            My Approach to Software Quality
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
            Testing is not about clicking buttons aimlessly. It is about understanding the system architecture, anticipating how real humans interact with software, identifying high-risk failure modes, and providing engineering teams with crystal-clear defect documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/70">
            <h3 className="font-bold text-[#071A33] text-base mb-2">1. Risk-Based Focus</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Prioritizing revenue-critical user flows, security boundaries, and data persistence before testing cosmetic details.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/70">
            <h3 className="font-bold text-[#071A33] text-base mb-2">2. Empathetic Collaboration</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Delivering bug reports with reproducible steps, logs, and root-cause hints so developers can fix issues quickly without guesswork.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/70">
            <h3 className="font-bold text-[#071A33] text-base mb-2">3. Product Alignment</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Evaluating usability and workflow friction from the perspective of real end-users and founders.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Professional Journey */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs space-y-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#146EF5] text-xs font-bold uppercase tracking-wider mb-2">
            <span>Career Evolution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071A33]">
            Professional Journey
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 space-y-8 pl-6">
          
          <div className="relative">
            <span className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-[#146EF5] border-4 border-white shadow-xs" />
            <span className="text-xs font-bold text-[#146EF5] uppercase">Current</span>
            <h3 className="text-lg font-bold text-[#071A33]">
              Quality Engineering, Technical Delivery & Emerging Technology
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Delivering specialized QA consulting across modern SaaS platforms, mobile applications, and AI integrations. Coordinating cross-functional sprints and release gating protocols.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-slate-400 border-4 border-white shadow-xs" />
            <span className="text-xs font-bold text-slate-500 uppercase">Founder Venture</span>
            <h3 className="text-lg font-bold text-[#071A33]">
              Founder & CEO — Innovify XR
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Leading the development of immersive training, interactive VR/XR simulations, and AI-integrated digital experiences for enterprise and technical domains.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-slate-400 border-4 border-white shadow-xs" />
            <span className="text-xs font-bold text-slate-500 uppercase">Core Discipline</span>
            <h3 className="text-lg font-bold text-[#071A33]">
              Software QA, Game Testing & Project Coordination
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Executing functional and exploratory test passes across web applications, mobile games, interactive physics loops, API contracts, and milestone tracking.
            </p>
          </div>

        </div>
      </section>

      {/* Section: Current Focus & Emerging Specializations */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-blue-50 text-[#146EF5]">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#071A33]">Current Focus</h3>
          </div>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#146EF5] shrink-0 mt-0.5" />
              <span>Full-lifecycle Quality Engineering for fast-moving web and mobile SaaS teams</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#146EF5] shrink-0 mt-0.5" />
              <span>Technical project delivery, sprint coordination, and release checklist enforcement</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#146EF5] shrink-0 mt-0.5" />
              <span>Exploratory edge-case testing under degraded network and resource constraints</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#071A33]">Active Specialization</h3>
          </div>
          <ul className="space-y-2.5 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span>AI application testing: non-deterministic validation, hallucination checks, prompt edge cases</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span>XR/VR spatial ergonomics, frame-timing analysis, and 6DoF interaction verification</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <span>AI-assisted testing tooling and test scenario generation workflows</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
};
