import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, Save, ArrowLeft, Layers, ShieldAlert, Sparkles, Tag } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CaseStudy, CaseStudyProjectType, DefectExample, TestScenarioItem } from '../../types';

export const AdminCaseStudies: React.FC = () => {
  const { caseStudies, addCaseStudy, updateCaseStudy, deleteCaseStudy, navigateTo } = useApp();
  const [editingStudy, setEditingStudy] = useState<Partial<CaseStudy> | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const categories = ['Web', 'Mobile', 'AI', 'Game', 'XR', 'Project Delivery', 'QA', 'API'] as const;
  const projectTypes: CaseStudyProjectType[] = [
    'Independent Case Study',
    'Prototype',
    'Client Project',
    'Portfolio Project',
    'In Development'
  ];

  const handleStartCreate = () => {
    setIsCreating(true);
    setEditingStudy({
      title: '',
      slug: '',
      category: 'Web',
      projectType: 'Independent Case Study',
      shortSummary: '',
      executiveSummary: '',
      problem: '',
      objectives: ['Validate core functional user journeys', 'Ensure cross-device compatibility'],
      scope: ['Authentication, checkout, and state persistence', 'Regression testing against staging build'],
      approach: ['Constructed risk-impact priority matrix', 'Executed exploratory and scripted test passes'],
      testScenarios: [
        { scenario: 'User authentication & session expiry', details: 'Token refresh cycle executes smoothly without dropped state.', status: 'Passed' }
      ],
      findings: ['Identified 8 total issues during test cycles, including 2 high-priority edge cases'],
      defectExamples: [
        {
          title: 'Asynchronous search state collision',
          description: 'Out-of-order API responses overwriting latest user query input.',
          severity: 'Major',
          impact: 'Users view stale result set.',
          resolution: 'Added request cancellation (AbortController) to search dispatch.'
        }
      ],
      recommendations: ['Introduce automated linting and responsive snapshot testing'],
      tools: ['Postman', 'Chrome DevTools', 'BrowserStack'],
      platform: 'Web / Modern Cloud',
      status: 'Completed & Documented',
      lessonsLearned: ['Early exploratory testing uncovers subtle UX defects before production'],
      featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      relatedArticlesSlugs: [],
      relatedCaseStudySlugs: [],
      published: true
    });
  };

  const handleSave = () => {
    if (!editingStudy || !editingStudy.title) {
      alert('Please enter a Case Study title');
      return;
    }

    const slug =
      editingStudy.slug ||
      editingStudy.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const studyPayload = {
      ...editingStudy,
      slug,
      title: editingStudy.title,
      category: (editingStudy.category || 'Web') as any,
      projectType: editingStudy.projectType || 'Independent Case Study',
      shortSummary: editingStudy.shortSummary || editingStudy.title,
      executiveSummary: editingStudy.executiveSummary || editingStudy.shortSummary || '',
      problem: editingStudy.problem || '',
      objectives: editingStudy.objectives || [],
      scope: editingStudy.scope || [],
      approach: editingStudy.approach || [],
      testScenarios: editingStudy.testScenarios || [],
      findings: editingStudy.findings || [],
      defectExamples: editingStudy.defectExamples || [],
      recommendations: editingStudy.recommendations || [],
      tools: editingStudy.tools || ['Chrome DevTools', 'Postman'],
      platform: editingStudy.platform || 'Web Platform',
      status: editingStudy.status || 'Completed',
      lessonsLearned: editingStudy.lessonsLearned || [],
      featuredImage: editingStudy.featuredImage || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      relatedArticlesSlugs: editingStudy.relatedArticlesSlugs || [],
      relatedCaseStudySlugs: editingStudy.relatedCaseStudySlugs || [],
      published: editingStudy.published !== false
    };

    if (isCreating) {
      addCaseStudy(studyPayload as Omit<CaseStudy, 'id' | 'createdAt'>);
    } else if (editingStudy.id) {
      updateCaseStudy(editingStudy.id, studyPayload);
    }

    setEditingStudy(null);
    setIsCreating(false);
  };

  return (
    <div className="space-y-6">
      {editingStudy ? (
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <button
                onClick={() => {
                  setEditingStudy(null);
                  setIsCreating(false);
                }}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 mb-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Case Studies</span>
              </button>
              <h2 className="text-2xl font-bold text-[#071A33]">
                {isCreating ? 'Create Case Study' : 'Edit Case Study CMS'}
              </h2>
            </div>

            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2.5 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Save Case Study</span>
            </button>
          </div>

          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Case Study Title *
                </label>
                <input
                  type="text"
                  value={editingStudy.title || ''}
                  onChange={e => setEditingStudy({ ...editingStudy, title: e.target.value })}
                  placeholder="e.g. Web Application QA & Release Verification"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  URL Slug
                </label>
                <input
                  type="text"
                  value={editingStudy.slug || ''}
                  onChange={e => setEditingStudy({ ...editingStudy, slug: e.target.value })}
                  placeholder="web-application-qa"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Domain Category
                </label>
                <select
                  value={editingStudy.category || 'Web'}
                  onChange={e => setEditingStudy({ ...editingStudy, category: e.target.value as any })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                >
                  {categories.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Project Classification
                </label>
                <select
                  value={editingStudy.projectType || 'Independent Case Study'}
                  onChange={e => setEditingStudy({ ...editingStudy, projectType: e.target.value as any })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                >
                  {projectTypes.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Platform / Stack
                </label>
                <input
                  type="text"
                  value={editingStudy.platform || ''}
                  onChange={e => setEditingStudy({ ...editingStudy, platform: e.target.value })}
                  placeholder="e.g. iOS & Android (React Native)"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Short Card Summary (1-2 sentences)
              </label>
              <textarea
                rows={2}
                value={editingStudy.shortSummary || ''}
                onChange={e => setEditingStudy({ ...editingStudy, shortSummary: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Executive Summary
              </label>
              <textarea
                rows={3}
                value={editingStudy.executiveSummary || ''}
                onChange={e => setEditingStudy({ ...editingStudy, executiveSummary: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Problem Context
              </label>
              <textarea
                rows={3}
                value={editingStudy.problem || ''}
                onChange={e => setEditingStudy({ ...editingStudy, problem: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Tools Used (comma-separated)
              </label>
              <input
                type="text"
                value={(editingStudy.tools || []).join(', ')}
                onChange={e =>
                  setEditingStudy({
                    ...editingStudy,
                    tools: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                  })
                }
                placeholder="Postman, Chrome DevTools, BrowserStack, Jira"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Featured Image URL
              </label>
              <input
                type="text"
                value={editingStudy.featuredImage || ''}
                onChange={e => setEditingStudy({ ...editingStudy, featuredImage: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#071A33]">Case Studies CMS</h2>
              <p className="text-sm text-slate-600">Structured quality engineering and technical delivery projects.</p>
            </div>
            <button
              onClick={handleStartCreate}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Case Study</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="text-xs uppercase bg-slate-50 text-slate-500 font-bold border-y border-slate-200">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Classification</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {caseStudies.map(study => (
                  <tr key={study.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900 max-w-xs sm:max-w-md truncate">
                      {study.title}
                      <span className="block text-[11px] font-normal text-slate-400 font-mono mt-0.5">
                        /case-studies/{study.slug}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700">
                        {study.category}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-slate-600">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700">
                        {study.projectType}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-slate-500 whitespace-nowrap">
                      {study.status}
                    </td>
                    <td className="px-4 py-3.5 text-right whitespace-nowrap space-x-2">
                      <button
                        onClick={() => navigateTo(`/case-studies/${study.slug}`)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-[#146EF5] hover:bg-slate-100"
                        title="View Live"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setEditingStudy(study);
                          setIsCreating(false);
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100"
                        title="Edit Study"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete "${study.title}"?`)) {
                            deleteCaseStudy(study.id);
                          }
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50"
                        title="Delete Study"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
