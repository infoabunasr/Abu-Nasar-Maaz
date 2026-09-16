import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
  FileCheck2,
  Workflow,
  Compass,
  Search,
  MessageSquareCode,
  TrendingUp,
  Activity,
  Code2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SectionHeader } from '../components/common/SectionHeader';
import { MetricCard } from '../components/common/MetricCard';
import { CaseStudyCard } from '../components/case-studies/CaseStudyCard';
import { ArticleCard } from '../components/insights/ArticleCard';
import { CTASection } from '../components/common/CTASection';
import { SEOHead } from '../components/common/SEOHead';
import { Badge } from '../components/common/Badge';

export const HomePage: React.FC = () => {
  const { siteSettings, caseStudies, articles, navigateTo } = useApp();

  const workingSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Understand requirements, user journeys, architecture constraints, and product business goals.',
      icon: Compass
    },
    {
      num: '02',
      title: 'Identify',
      desc: 'Identify meaningful product risks, boundary states, edge cases, and high-impact failure scenarios.',
      icon: Search
    },
    {
      num: '03',
      title: 'Test',
      desc: 'Execute structured, exploratory, functional, API, performance, and regression testing runs.',
      icon: FileCheck2
    },
    {
      num: '04',
      title: 'Communicate',
      desc: 'Document defects with reproducible steps, logs, and collaborate directly with engineers & PMs.',
      icon: MessageSquareCode
    },
    {
      num: '05',
      title: 'Improve',
      desc: 'Verify bug fixes, assess remaining launch risks, and support staging-to-production release confidence.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      <SEOHead
        title="Abu Naser Maaz – QA & Quality Engineering | Technical Project Delivery"
        description="I help founders and product teams ship better software through Quality Engineering, Software Testing, and Technical Project Delivery."
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold uppercase tracking-wider text-[#146EF5]">
                <span className="w-2 h-2 rounded-full bg-[#146EF5]" />
                <span>{siteSettings.heroEyebrow}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#071A33] leading-[1.12]">
                I Help Founders & Product Teams{' '}
                <span className="text-[#146EF5]">Ship Better Software</span>
              </h1>

              {/* Supporting Paragraphs */}
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
                {siteSettings.heroParagraph}
              </p>

              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                {siteSettings.secondarySentence}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => navigateTo('/contact')}
                  className="px-7 py-3.5 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white font-semibold text-base transition-all duration-150 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigateTo('/case-studies')}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#071A33] font-semibold text-base border border-slate-200/90 hover:border-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <ShieldCheck className="w-4 h-4 text-[#146EF5]" />
                  <span>View Case Studies</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Risk-Based Testing
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Defect Root-Cause Analysis
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Release Readiness Sign-offs
                </span>
              </div>
            </div>

            {/* Right Visual Card Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Background decorative soft glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#146EF5]/15 to-slate-200/50 rounded-3xl blur-xl opacity-70" />

                {/* Primary Card */}
                <div className="relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-lg space-y-6">
                  
                  {/* Profile Header */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                        alt="Abu Naser Maaz"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#071A33]">Abu Naser Maaz</h3>
                      <p className="text-xs font-semibold text-[#146EF5]">
                        Quality Engineering • Project Delivery
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Founder & CEO — Innovify XR
                      </p>
                    </div>
                  </div>

                  {/* Core Focus Matrix */}
                  <div className="space-y-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-700">Primary Specialization</span>
                      <span className="text-xs font-bold text-[#146EF5] px-2 py-0.5 rounded bg-blue-50">
                        QA & Quality Engineering
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-700">Coordination & Delivery</span>
                      <span className="text-xs font-bold text-[#071A33] px-2 py-0.5 rounded bg-slate-200/80">
                        Technical Project Delivery
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-700">Emerging Technology</span>
                      <span className="text-xs font-bold text-indigo-700 px-2 py-0.5 rounded bg-indigo-50">
                        AI Testing • XR / VR
                      </span>
                    </div>
                  </div>

                  {/* Quick Status banner */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-600">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-medium">Available for select projects</span>
                    </div>
                    <button
                      onClick={() => navigateTo('/about')}
                      className="text-xs font-bold text-[#146EF5] hover:underline"
                    >
                      Read Bio →
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUST / CAPABILITY HORIZONTAL STRIP */}
      {/* ========================================================================= */}
      <section className="border-y border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 items-center text-center">
            
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#071A33] uppercase">
                QUALITY ENGINEERING
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">End-to-end reliability</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#071A33] uppercase">
                SOFTWARE TESTING
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">Web • Mobile • APIs</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#071A33] uppercase">
                TECHNICAL DELIVERY
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">Sprint & release gating</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#071A33] uppercase">
                AI TESTING
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">LLM & prompt evaluation</span>
            </div>

            <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center p-2">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#071A33] uppercase">
                GAME & XR TESTING
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">Mechanics & spatial UI</span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTRODUCTION / PHILOSOPHY */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#146EF5] text-xs font-bold uppercase tracking-wider mb-4">
              <span>Quality Philosophy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#071A33] leading-tight">
              Quality is more than finding bugs.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed">
              Good software quality requires understanding the product, identifying meaningful risks, validating real user journeys, communicating clearly with technical teams, and helping teams make better release decisions.
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              As a Quality Engineering professional and founder of Innovify XR, I bridge the gap between rigorous technical verification, developer workflows, and product business objectives.
            </p>
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-4">
              <button
                onClick={() => navigateTo('/about')}
                className="text-sm font-bold text-[#146EF5] hover:text-[#071A33] transition-colors flex items-center gap-1.5"
              >
                <span>Read Full Professional Story</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EXPERTISE PREVIEW (3 Major Cards) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core Competencies"
          title="How I Can Support Your Product"
          description="Combining hands-on testing rigor with delivery coordination and modern technological literacy."
          action={{
            label: 'Explore All Expertise',
            onClick: () => navigateTo('/expertise')
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* 01 Quality Engineering */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs hover:border-[#146EF5]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-extrabold text-slate-300 group-hover:text-[#146EF5] transition-colors">
                  01
                </span>
                <div className="p-3 rounded-xl bg-blue-50 text-[#146EF5]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#071A33] mb-3">
                Quality Engineering
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Structured software testing, defect analysis, regression validation, usability evaluation, and release quality support.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={() => navigateTo('/expertise')}
                className="text-xs font-bold uppercase tracking-wider text-[#146EF5] hover:text-[#071A33] flex items-center gap-1"
              >
                <span>View Details</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* 02 Technical Project Delivery */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs hover:border-[#146EF5]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-extrabold text-slate-300 group-hover:text-[#146EF5] transition-colors">
                  02
                </span>
                <div className="p-3 rounded-xl bg-blue-50 text-[#146EF5]">
                  <Workflow className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#071A33] mb-3">
                Technical Project Delivery
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Project coordination, progress tracking, QA coordination, task follow-up, risk visibility, and delivery support.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={() => navigateTo('/expertise')}
                className="text-xs font-bold uppercase tracking-wider text-[#146EF5] hover:text-[#071A33] flex items-center gap-1"
              >
                <span>View Details</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* 03 AI & Emerging Technology */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-xs hover:border-[#146EF5]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-extrabold text-slate-300 group-hover:text-[#146EF5] transition-colors">
                  03
                </span>
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#071A33] mb-3">
                AI & Emerging Technology
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                AI application testing, AI-assisted quality practices, XR testing, immersive technology, games, and emerging product experiences.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={() => navigateTo('/expertise')}
                className="text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-[#071A33] flex items-center gap-1"
              >
                <span>View Details</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SELECTED CASE STUDIES */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Evidence & Methodology"
          title="Selected Work & Practical Case Studies"
          description="In-depth, honest breakdowns of testing strategy, uncovered defects, risk analysis, and delivery recommendations."
          action={{
            label: 'View All Case Studies',
            onClick: () => navigateTo('/case-studies')
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.slice(0, 6).map(study => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. METRICS & EXPERIENCE SECTION (Factually grounded) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <MetricCard
            value="2+ Years"
            label="QA & Testing Experience"
            sublabel="Structured functional, exploratory & regression QA"
            icon={ShieldCheck}
          />
          <MetricCard
            value="1+ Year"
            label="Project Coordination Experience"
            sublabel="Sprint tracking, QA-dev alignment & release gating"
            icon={Workflow}
          />
          <MetricCard
            value="Multiple"
            label="Product & Technology Domains"
            sublabel="Web • Mobile • Games • XR • AI Applications"
            icon={Layers}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WORKING APPROACH (5-Step Process) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Delivery Process"
          title="From Product Understanding to Release Confidence"
          description="A structured, risk-conscious approach to testing that uncovers edge cases without blocking engineering velocity."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {workingSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-4">
                    <span className="text-[#146EF5] font-mono text-sm">{step.num}</span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-base font-bold text-[#071A33] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FOUNDER / INNOVIFY XR SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#146EF5] text-xs font-bold uppercase tracking-wider">
                <span>Venture • Founder Experience</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#071A33] leading-tight">
                Building at the Intersection of XR, AI & Emerging Technology
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As Founder & CEO of <span className="font-semibold text-slate-900">Innovify XR</span>, I work on immersive training simulations, spatial experiences, AI-integrated digital workflows, and emerging technology products.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                This entrepreneurial background gives me a unique perspective on software quality: understanding product-market priorities, technical debt trade-offs, and user immersion.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={siteSettings.innovifyXrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#071A33] hover:bg-[#146EF5] text-white font-semibold text-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Innovify XR</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => navigateTo('/ventures')}
                  className="text-xs font-bold text-slate-700 hover:text-[#146EF5] transition-colors"
                >
                  View All Ventures →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs h-64 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1000&q=80"
                  alt="Innovify XR Virtual Reality Simulation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. INSIGHTS PREVIEW */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Writing & Frameworks"
          title="Insights on Quality, Technology & Delivery"
          description="Practical perspectives on software testing, risk prioritization, AI evaluation, and developer collaboration."
          action={{
            label: 'View All Insights',
            onClick: () => navigateTo('/insights')
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.slice(0, 3).map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FINAL CTA */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>

    </div>
  );
};
