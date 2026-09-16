import React from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Wrench,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Sparkles,
  Tag,
  Share2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Badge } from '../components/common/Badge';
import { CTASection } from '../components/common/CTASection';
import { SEOHead } from '../components/common/SEOHead';
import { CaseStudyCard } from '../components/case-studies/CaseStudyCard';

interface CaseStudyDetailPageProps {
  slug: string;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ slug }) => {
  const { caseStudies, articles, navigateTo } = useApp();

  const study = caseStudies.find(c => c.slug === slug);

  if (!study) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#071A33]">Case Study Not Found</h1>
        <p className="text-slate-600">The requested case study could not be found or has moved.</p>
        <button
          onClick={() => navigateTo('/case-studies')}
          className="px-6 py-2.5 rounded-xl bg-[#146EF5] text-white text-sm font-semibold inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </button>
      </div>
    );
  }

  // Related items
  const relatedStudies = caseStudies
    .filter(c => c.id !== study.id && (study.relatedCaseStudySlugs?.includes(c.slug) || c.category === study.category))
    .slice(0, 2);

  const relatedArticles = articles
    .filter(a => study.relatedArticlesSlugs?.includes(a.slug))
    .slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SEOHead
        title={`${study.title} – Case Study`}
        description={study.shortSummary}
        breadcrumbs={[
          { name: 'Case Studies', item: 'https://abunasarmaaz.com/#/case-studies' },
          { name: study.title, item: `https://abunasarmaaz.com/#/case-studies/${study.slug}` }
        ]}
      />

      <Breadcrumb
        items={[
          { name: 'Case Studies', route: '/case-studies' },
          { name: study.title }
        ]}
      />

      {/* Header Banner */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="blue">{study.projectType}</Badge>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#071A33] text-white">
            {study.category}
          </span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs font-semibold text-slate-500">{study.platform}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight leading-tight max-w-4xl">
          {study.title}
        </h1>

        <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
          {study.shortSummary}
        </p>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>Status: <strong className="text-emerald-700 font-semibold">{study.status}</strong></span>
            <span>•</span>
            <span>Documented: <strong className="text-slate-800 font-semibold">{study.createdAt}</strong></span>
          </div>

          <button
            onClick={() => navigateTo('/contact')}
            className="px-4 py-2 rounded-lg bg-[#146EF5] hover:bg-[#2F80FF] text-white text-xs font-bold transition-colors"
          >
            Discuss a Similar Product →
          </button>
        </div>
      </section>

      {/* Featured Visual */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs h-72 sm:h-96 bg-slate-100">
        <img
          src={study.featuredImage}
          alt={study.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Grid: Content + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left 8 Cols: Main Structured Case Study */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Executive Summary */}
          <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#146EF5]">Executive Summary</h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {study.executiveSummary}
            </p>
          </section>

          {/* Problem / Context */}
          <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-xl font-bold text-[#071A33]">Problem & Architectural Context</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {study.problem}
            </p>
          </section>

          {/* Objectives & Scope */}
          <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#071A33] mb-3">Testing Objectives</h2>
              <ul className="space-y-2">
                {study.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#146EF5] shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-[#071A33] mb-3">Testing Scope</h3>
              <ul className="space-y-2">
                {study.scope.map((scp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                    <span>{scp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Approach & Methodology */}
          <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#071A33]">Testing & Delivery Approach</h2>
            <div className="space-y-3">
              {study.approach.map((app, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-sm text-slate-700 flex items-start gap-3">
                  <span className="font-bold text-[#146EF5] font-mono shrink-0">0{i + 1}</span>
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Test Scenarios */}
          {study.testScenarios && study.testScenarios.length > 0 && (
            <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-[#071A33]">Validated Test Scenarios</h2>
              <div className="space-y-3">
                {study.testScenarios.map((sc, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900">{sc.scenario}</h4>
                      {sc.status && (
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          sc.status === 'Passed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {sc.status}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{sc.details}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Defect Examples */}
          {study.defectExamples && study.defectExamples.length > 0 && (
            <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl font-bold text-[#071A33]">Uncovered Defect Examples</h2>
              </div>
              <p className="text-xs text-slate-500">Representative issues diagnosed and isolated during testing cycles.</p>

              <div className="space-y-4">
                {study.defectExamples.map((def, i) => (
                  <div key={i} className="p-5 rounded-xl bg-amber-50/40 border border-amber-200/70 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900">{def.title}</h4>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        def.severity === 'Critical'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {def.severity} Severity
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {def.description}
                    </p>
                    <div className="pt-2 border-t border-amber-200/50 text-xs text-slate-600 space-y-1">
                      <p><strong className="text-slate-800">Business Impact:</strong> {def.impact}</p>
                      {def.resolution && (
                        <p><strong className="text-emerald-800">Recommended Resolution:</strong> {def.resolution}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Recommendations & Lessons Learned */}
          <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#071A33] mb-3">Key Recommendations</h2>
              <ul className="space-y-2">
                {study.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-[#071A33] mb-3">Lessons Learned</h3>
              <ul className="space-y-2">
                {study.lessonsLearned.map((les, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                    <span>{les}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>

        {/* Right 4 Cols: Meta, Tools, Related Articles */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* Environment & Tools Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#146EF5]" />
              <span>Tools & Environment</span>
            </h3>

            <div>
              <span className="text-xs text-slate-500 block mb-1">Platform</span>
              <span className="text-sm font-bold text-slate-900">{study.platform}</span>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs text-slate-500 block mb-2">Tools & Utilities</span>
              <div className="flex flex-wrap gap-1.5">
                {study.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs text-slate-500 block mb-1">Project Classification</span>
              <Badge variant="blue">{study.projectType}</Badge>
            </div>
          </div>

          {/* Related Insights */}
          {relatedArticles.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#146EF5]" />
                <span>Related Insights</span>
              </h3>

              <div className="space-y-3">
                {relatedArticles.map(art => (
                  <div
                    key={art.id}
                    onClick={() => navigateTo(`/insights/${art.slug}`)}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200/60"
                  >
                    <span className="text-[11px] font-bold text-[#146EF5]">{art.category}</span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 line-clamp-2">
                      {art.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Contact Box */}
          <div className="bg-[#071A33] text-white rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold">Have questions about this case study?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Let's discuss how similar testing approaches and quality frameworks can be applied to your product.
            </p>
            <button
              onClick={() => navigateTo('/contact')}
              className="w-full py-2.5 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Discuss Your Product</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </aside>

      </div>

      {/* Bottom: Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-[#071A33]">More Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedStudies.map(rel => (
              <CaseStudyCard key={rel.id} study={rel} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </div>
  );
};
