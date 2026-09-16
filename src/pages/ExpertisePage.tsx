import React from 'react';
import {
  ShieldCheck,
  Code2,
  Gamepad2,
  Workflow,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Layers,
  Terminal,
  Cpu,
  MonitorCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { SEOHead } from '../components/common/SEOHead';
import { Badge } from '../components/common/Badge';

export const ExpertisePage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <SEOHead
        title="Technical Expertise – Quality Engineering & Delivery Specializations"
        description="Explore Abu Naser Maaz's core capabilities in Quality Engineering, API Testing, Game & XR Testing, Technical Project Delivery, and AI Application QA."
        breadcrumbs={[
          { name: 'Expertise', item: 'https://abunasarmaaz.com/#/expertise' }
        ]}
      />

      <Breadcrumb items={[{ name: 'Expertise & Capabilities' }]} />

      {/* Hero Header */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#146EF5] text-xs font-bold uppercase tracking-wider">
            <span>Capabilities & Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight leading-tight">
            How I Can Support Your Product
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed font-normal">
            From structured regression passes and cross-device mobile validation to sprint delivery coordination and emerging AI/XR quality assurance.
          </p>
        </div>
      </section>

      {/* 01 Quality Engineering */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#146EF5] flex items-center justify-center font-bold text-xl">
              01
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#146EF5]">Primary Specialization</span>
              <h2 className="text-2xl font-bold text-[#071A33]">Quality Engineering & Software Testing</h2>
            </div>
          </div>
          <Badge variant="blue">Core Focus</Badge>
        </div>

        <p className="text-slate-600 text-base leading-relaxed max-w-4xl">
          Comprehensive testing methodologies designed to uncover critical bugs, race conditions, usability friction, and regression failures across web and mobile platforms.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {[
            { title: 'Functional Testing', desc: 'Validating that business logic, inputs, and state workflows behave exactly as intended.' },
            { title: 'Regression Testing', desc: 'Ensuring new feature commits do not inadvertently break existing functionality.' },
            { title: 'Exploratory Testing', desc: 'Unscripted, heuristic-driven stress testing to identify real-world usability edge cases.' },
            { title: 'Web Testing', desc: 'Cross-browser rendering, responsive layout breakpoints, and frontend performance.' },
            { title: 'Mobile Testing', desc: 'OS fragmentation, touch target accessibility, notch handling, and background suspension.' },
            { title: 'Defect Analysis & Triage', desc: 'Clear tickets with reproducible steps, HAR network logs, and root-cause hints.' },
            { title: 'Usability Evaluation', desc: 'Detecting user journey bottlenecks, ambiguous messaging, and dead-end states.' },
            { title: 'Compatibility Testing', desc: 'Browser engine parity across Chromium, WebKit (Safari), and Gecko (Firefox).' },
            { title: 'Release Validation', desc: 'Pre-launch smoke runs, staging sign-offs, and deployment verification checklists.' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
              <div className="flex items-center gap-2 font-bold text-sm text-[#071A33] mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#146EF5] shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 02 API Testing */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-xl">
              02
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Contract & Endpoint Validation</span>
              <h2 className="text-2xl font-bold text-[#071A33]">API Testing & Integration Verification</h2>
            </div>
          </div>
          <Badge variant="gray">Practical API QA</Badge>
        </div>

        <p className="text-slate-600 text-base leading-relaxed max-w-4xl">
          Practical endpoint and contract testing to ensure backend services return expected payloads, handle unauthorized requests gracefully, and survive boundary-case parameters.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {[
            { title: 'Request & Response Validation', desc: 'Verifying data structures, schema conformity, and data type correctness.' },
            { title: 'HTTP Status Code Verification', desc: 'Ensuring standard REST status codes (200, 201, 400, 401, 403, 404, 422, 500).' },
            { title: 'Authentication & Tokens', desc: 'Validating Bearer tokens, expired JWT handling, and unauthorized endpoint rejection.' },
            { title: 'Negative & Boundary Testing', desc: 'Testing null values, malformed JSON bodies, extreme integers, and unexpected encodings.' },
            { title: 'Postman Collections', desc: 'Building organized request suites with reusable environment variables and pre-request scripts.' },
            { title: 'Error Response Clarity', desc: 'Verifying that API validation errors return actionable error messages to frontends.' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
              <div className="flex items-center gap-2 font-bold text-sm text-[#071A33] mb-1">
                <CheckCircle2 className="w-4 h-4 text-slate-700 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 03 Game & XR Testing */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xl">
              03
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700">Interactive & Spatial QA</span>
              <h2 className="text-2xl font-bold text-[#071A33]">Game & XR / VR Experience Testing</h2>
            </div>
          </div>
          <Badge variant="purple">Spatial & Mechanics QA</Badge>
        </div>

        <p className="text-slate-600 text-base leading-relaxed max-w-4xl">
          Specialized interactive testing for games and virtual reality experiences where physics collision, input latency, framerate consistency, and physiological comfort are critical.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {[
            { title: 'Gameplay Mechanics', desc: 'Stress-testing control responsiveness, physics loops, and game progression.' },
            { title: 'Collision & Physics Glitches', desc: 'Detecting boundary clipping, invisible walls, and out-of-bounds exploits.' },
            { title: 'UI & HUD Scaling', desc: 'Verifying HUD readability across diverse aspect ratios and camera FOV angles.' },
            { title: 'Monetization & Ads', desc: 'Validating rewarded video ad callbacks, interstitial timing, and IAP store receipts.' },
            { title: 'Meta Quest Standalone Testing', desc: 'Profiling standalone VR frame timings (72Hz/90Hz) to eliminate stutter.' },
            { title: 'Spatial Ergonomics & Motion Comfort', desc: 'Validating menu reach zones, vergence accommodation, and nausea prevention.' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-purple-50/40 border border-purple-100">
              <div className="flex items-center gap-2 font-bold text-sm text-[#071A33] mb-1">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 Technical Project Delivery */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#146EF5] flex items-center justify-center font-bold text-xl">
              04
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#146EF5]">Coordination & Operations</span>
              <h2 className="text-2xl font-bold text-[#071A33]">Technical Project Delivery & Coordination</h2>
            </div>
          </div>
          <Badge variant="blue">Delivery Alignment</Badge>
        </div>

        <p className="text-slate-600 text-base leading-relaxed max-w-4xl">
          Bridging the communication gap between founders, product managers, and engineering teams to ensure predictable release cycles and transparent risk management.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {[
            { title: 'Project & Sprint Coordination', desc: 'Maintaining sprint cadence, tracking backlog progress, and unblocking team hurdles.' },
            { title: 'QA & Engineering Alignment', desc: 'Embedding QA during user story grooming to clarify acceptance criteria early.' },
            { title: 'Bug Triage & Prioritization', desc: 'Facilitating structured triage sessions to separate release blockers from minor tasks.' },
            { title: 'Release Gating & Checklists', desc: 'Executing objective sign-off protocols before code is merged into production.' },
            { title: 'Deadline & Risk Visibility', desc: 'Providing founders and tech leads with clear status summaries and risk forecasts.' },
            { title: 'Stakeholder Communication', desc: 'Translating technical defect complexities into clear business trade-offs.' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
              <div className="flex items-center gap-2 font-bold text-sm text-[#071A33] mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#146EF5] shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 05 AI Application Testing */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xl">
              05
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Emerging Specialization</span>
              <h2 className="text-2xl font-bold text-[#071A33]">AI Application Testing & Evaluation</h2>
            </div>
          </div>
          <Badge variant="purple">Active Research & Practice</Badge>
        </div>

        <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs sm:text-sm text-indigo-900 leading-relaxed">
          <span className="font-bold">Active Specialization:</span> Testing non-deterministic LLMs and generative AI products requires new validation frameworks beyond traditional boolean assertions.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {[
            { title: 'Prompt Boundary Testing', desc: 'Testing model resilience against ambiguous, adversarial, and oversized prompt payloads.' },
            { title: 'Structured Schema Compliance', desc: 'Verifying JSON output consistency for downstream UI components and API consumers.' },
            { title: 'Hallucination Assessment', desc: 'Evaluating factual grounding and source document alignment in RAG systems.' },
            { title: 'Streaming UX & Fallbacks', desc: 'Testing token streaming interrupts, rate-limit retries, and network disconnect states.' },
            { title: 'Consistency & Regression Evals', desc: 'Maintaining golden evaluation datasets to catch prompt regressions across model updates.' },
            { title: 'AI-Assisted QA Workflows', desc: 'Utilizing AI models to accelerate test case ideation and synthetic data generation.' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-indigo-50/30 border border-indigo-100/80">
              <div className="flex items-center gap-2 font-bold text-sm text-[#071A33] mb-1">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Elevate Your Product's Quality?"
        description="Whether you need a dedicated Quality Engineering audit, release coordination, or specialized testing for AI or XR experiences, let's discuss how I can help."
      />
    </div>
  );
};
