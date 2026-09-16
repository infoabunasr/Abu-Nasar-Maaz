import React, { useState } from 'react';
import { Plus, Edit2, Trash2, CheckCircle, Eye, X, Globe, Save, ArrowLeft, Tag } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Article } from '../../types';

export const AdminArticles: React.FC = () => {
  const { articles, addArticle, updateArticle, deleteArticle, navigateTo } = useApp();
  const [editingArticle, setEditingArticle] = useState<Partial<Article> | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const categories = [
    'Quality Engineering',
    'Software Testing',
    'AI Testing',
    'Technical Delivery',
    'Game QA',
    'XR',
    'Product Development',
    'Founder Lessons'
  ] as const;

  const handleStartCreate = () => {
    setIsCreating(true);
    setEditingArticle({
      title: '',
      slug: '',
      category: 'Quality Engineering',
      excerpt: '',
      author: 'Abu Naser Maaz',
      authorRole: 'Quality Engineering & Technical Delivery Specialist',
      publishedAt: new Date().toISOString().split('T')[0],
      readTime: '5 min read',
      featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      content: `### Introduction\nWrite your article content here using markdown format.\n\n### Key Principles\n1. Identify high-impact risks early\n2. Maintain consistent communication\n\n### Summary\nEmpowering teams to ship with release confidence.`,
      tags: ['Quality Engineering', 'Software QA'],
      published: true,
      seoTitle: '',
      seoDescription: '',
      relatedArticlesSlugs: [],
      relatedCaseStudiesSlugs: []
    });
  };

  const handleSave = () => {
    if (!editingArticle || !editingArticle.title) {
      alert('Please provide an article title');
      return;
    }

    const slug =
      editingArticle.slug ||
      editingArticle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const articlePayload = {
      ...editingArticle,
      slug,
      title: editingArticle.title,
      excerpt: editingArticle.excerpt || editingArticle.title,
      category: editingArticle.category as any,
      author: editingArticle.author || 'Abu Naser Maaz',
      authorRole: editingArticle.authorRole || 'Quality Engineering & Technical Delivery Specialist',
      publishedAt: editingArticle.publishedAt || new Date().toISOString().split('T')[0],
      readTime: editingArticle.readTime || '5 min read',
      featuredImage: editingArticle.featuredImage || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      content: editingArticle.content || '',
      tags: editingArticle.tags || ['Quality Engineering'],
      published: editingArticle.published !== false,
      seoTitle: editingArticle.seoTitle || `${editingArticle.title} | Abu Naser Maaz`,
      seoDescription: editingArticle.seoDescription || editingArticle.excerpt,
      relatedArticlesSlugs: editingArticle.relatedArticlesSlugs || [],
      relatedCaseStudiesSlugs: editingArticle.relatedCaseStudiesSlugs || []
    };

    if (isCreating) {
      addArticle(articlePayload as Omit<Article, 'id'>);
    } else if (editingArticle.id) {
      updateArticle(editingArticle.id, articlePayload);
    }

    setEditingArticle(null);
    setIsCreating(false);
    setPreviewMode(false);
  };

  return (
    <div className="space-y-6">
      {/* If editing modal or full-screen view */}
      {editingArticle ? (
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <button
                onClick={() => {
                  setEditingArticle(null);
                  setIsCreating(false);
                }}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 mb-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Articles List</span>
              </button>
              <h2 className="text-2xl font-bold text-[#071A33]">
                {isCreating ? 'Create New Article' : 'Edit Article CMS'}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPreviewMode(!previewMode)}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{previewMode ? 'Editor Mode' : 'Preview Mode'}</span>
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-5 py-2 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Save className="w-4 h-4" />
                <span>Save Article</span>
              </button>
            </div>
          </div>

          {previewMode ? (
            <div className="mt-6 p-6 rounded-xl bg-slate-50 border border-slate-200 prose max-w-none">
              <div className="mb-4">
                <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold">
                  {editingArticle.category}
                </span>
                <h1 className="text-3xl font-bold text-[#071A33] mt-3">{editingArticle.title || 'Untitled Article'}</h1>
                <p className="text-slate-500 text-sm mt-1">{editingArticle.publishedAt} • {editingArticle.readTime}</p>
              </div>
              <div className="whitespace-pre-line text-slate-800 leading-relaxed">
                {editingArticle.content}
              </div>
            </div>
          ) : (
            <div className="mt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    value={editingArticle.title || ''}
                    onChange={e => setEditingArticle({ ...editingArticle, title: e.target.value })}
                    placeholder="e.g. Why QA Should Start Before Development Is Finished"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={editingArticle.slug || ''}
                    onChange={e => setEditingArticle({ ...editingArticle, slug: e.target.value })}
                    placeholder="why-qa-should-start-before-dev"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Category
                  </label>
                  <select
                    value={editingArticle.category || 'Quality Engineering'}
                    onChange={e => setEditingArticle({ ...editingArticle, category: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                  >
                    {categories.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Reading Time
                  </label>
                  <input
                    type="text"
                    value={editingArticle.readTime || '6 min read'}
                    onChange={e => setEditingArticle({ ...editingArticle, readTime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                    Publication Status
                  </label>
                  <select
                    value={editingArticle.published ? 'published' : 'draft'}
                    onChange={e => setEditingArticle({ ...editingArticle, published: e.target.value === 'published' })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                  >
                    <option value="published">Published (Public)</option>
                    <option value="draft">Draft (Admin Only)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Excerpt Summary (1-2 sentences)
                </label>
                <textarea
                  rows={2}
                  value={editingArticle.excerpt || ''}
                  onChange={e => setEditingArticle({ ...editingArticle, excerpt: e.target.value })}
                  placeholder="Summary for search results and social cards..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Featured Image URL
                </label>
                <input
                  type="text"
                  value={editingArticle.featuredImage || ''}
                  onChange={e => setEditingArticle({ ...editingArticle, featuredImage: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                  Article Body (Markdown Supported)
                </label>
                <textarea
                  rows={14}
                  value={editingArticle.content || ''}
                  onChange={e => setEditingArticle({ ...editingArticle, content: e.target.value })}
                  className="w-full font-mono text-sm px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                />
              </div>

              {/* SEO Sub-section */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#146EF5]" />
                  <span>SEO & Social Share Metadata</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">SEO Title</label>
                    <input
                      type="text"
                      value={editingArticle.seoTitle || ''}
                      onChange={e => setEditingArticle({ ...editingArticle, seoTitle: e.target.value })}
                      placeholder="Title for Google search snippet"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">SEO Meta Description</label>
                    <input
                      type="text"
                      value={editingArticle.seoDescription || ''}
                      onChange={e => setEditingArticle({ ...editingArticle, seoDescription: e.target.value })}
                      placeholder="140-160 char search summary"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#071A33]">Articles & Insights CMS</h2>
              <p className="text-sm text-slate-600">Create, edit, schedule, and optimize technical insights.</p>
            </div>
            <button
              onClick={handleStartCreate}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>New Article</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="text-xs uppercase bg-slate-50 text-slate-500 font-bold border-y border-slate-200">
                <tr>
                  <th className="px-4 py-3">Article Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {articles.map(art => (
                  <tr key={art.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-slate-900 max-w-xs sm:max-w-md truncate">
                      {art.title}
                      <span className="block text-[11px] font-normal text-slate-400 font-mono mt-0.5">
                        /insights/{art.slug}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
                        {art.category}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-slate-500 whitespace-nowrap">
                      {art.publishedAt}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          art.published ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {art.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right whitespace-nowrap space-x-2">
                      <button
                        onClick={() => navigateTo(`/insights/${art.slug}`)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-[#146EF5] hover:bg-slate-100"
                        title="View Live"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setEditingArticle(art);
                          setIsCreating(false);
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100"
                        title="Edit Article"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete "${art.title}"?`)) {
                            deleteArticle(art.id);
                          }
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50"
                        title="Delete Article"
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
