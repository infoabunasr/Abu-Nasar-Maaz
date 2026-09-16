import React from 'react';
import { Tag, CheckCircle2, Layers } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminCategories: React.FC = () => {
  const { articles, caseStudies } = useApp();

  const articleCategories = [
    { name: 'Quality Engineering', desc: 'Core QA principles, shift-left methodologies, defect prevention' },
    { name: 'Software Testing', desc: 'Functional, regression, smoke, boundary, and exploratory testing' },
    { name: 'AI Testing', desc: 'LLM prompt boundaries, non-deterministic validation, hallucination checks' },
    { name: 'Technical Delivery', desc: 'Cross-functional sprint coordination, release gating, stakeholder sync' },
    { name: 'Game QA', desc: 'Interactive physics, collision boundaries, framedrops, monetization checks' },
    { name: 'XR', desc: 'Spatial UI ergonomics, 6DoF tracking, motion comfort in VR/AR' },
    { name: 'Product Development', desc: 'Startup quality pitfalls, MVP testing strategies, user journeys' },
    { name: 'Founder Lessons', desc: 'Leadership, venture building, and technical product management' }
  ];

  const caseStudyCategories = [
    { name: 'Web', count: caseStudies.filter(c => c.category === 'Web').length },
    { name: 'Mobile', count: caseStudies.filter(c => c.category === 'Mobile').length },
    { name: 'AI', count: caseStudies.filter(c => c.category === 'AI').length },
    { name: 'Game', count: caseStudies.filter(c => c.category === 'Game').length },
    { name: 'XR', count: caseStudies.filter(c => c.category === 'XR').length },
    { name: 'Project Delivery', count: caseStudies.filter(c => c.category === 'Project Delivery').length }
  ];

  return (
    <div className="space-y-8">
      {/* Case Study Taxonomies */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-[#071A33] flex items-center gap-2 mb-2">
          <Layers className="w-5 h-5 text-[#146EF5]" />
          <span>Case Study Taxonomies</span>
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Categorization taxonomy for organizing case studies across platforms and specializations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {caseStudyCategories.map(cat => (
            <div key={cat.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 text-sm">{cat.name}</span>
                <span className="block text-xs text-slate-500">Domain Category</span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#146EF5]/10 text-[#146EF5]">
                {cat.count} {cat.count === 1 ? 'project' : 'projects'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Article Categories */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-[#071A33] flex items-center gap-2 mb-2">
          <Tag className="w-5 h-5 text-[#146EF5]" />
          <span>Insight & Article Taxonomies</span>
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Editorial tags and content classification for search engine topic clustering and user discovery.
        </p>

        <div className="space-y-3">
          {articleCategories.map(cat => {
            const count = articles.filter(a => a.category === cat.name).length;
            return (
              <div key={cat.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">{cat.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700">
                      {count} published
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">{cat.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Active Category</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
