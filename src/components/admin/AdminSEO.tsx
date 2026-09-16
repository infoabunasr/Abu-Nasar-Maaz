import React, { useState } from 'react';
import { Search, Save, Globe, ShieldCheck, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminSEO: React.FC = () => {
  const { seoSettings, updateSEOSettings } = useApp();
  const [form, setForm] = useState(seoSettings);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSEOSettings(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-[#071A33] flex items-center gap-2">
              <Search className="w-5 h-5 text-[#146EF5]" />
              <span>Global SEO & Metadata Configuration</span>
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Configure search engine snippets, social OpenGraph cards, Twitter preview cards, and robot indexing.
            </p>
          </div>
          {saved && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold animate-in fade-in">
              <Check className="w-4 h-4" />
              <span>SEO Settings Updated!</span>
            </div>
          )}
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              Default Site Title
            </label>
            <input
              type="text"
              value={form.siteTitle}
              onChange={e => setForm({ ...form, siteTitle: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
            />
            <p className="text-xs text-slate-500 mt-1">Recommended length: 50–60 characters</p>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              Default Meta Description
            </label>
            <textarea
              rows={3}
              value={form.siteDescription}
              onChange={e => setForm({ ...form, siteDescription: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
            />
            <p className="text-xs text-slate-500 mt-1">Recommended length: 140–160 characters</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Canonical Base URL
              </label>
              <input
                type="text"
                value={form.canonicalDomain}
                onChange={e => setForm({ ...form, canonicalDomain: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Robots Indexing Policy
              </label>
              <select
                value={form.robotsPolicy}
                onChange={e => setForm({ ...form, robotsPolicy: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
              >
                <option value="index, follow">index, follow (Allow All Search Engines)</option>
                <option value="noindex, follow">noindex, follow (Staging / Private)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              Default Social OpenGraph & Twitter Share Image URL
            </label>
            <input
              type="text"
              value={form.defaultOGImage}
              onChange={e => setForm({ ...form, defaultOGImage: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              Keywords (comma separated)
            </label>
            <input
              type="text"
              value={form.keywords.join(', ')}
              onChange={e =>
                setForm({
                  ...form,
                  keywords: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                })
              }
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
            />
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white font-semibold text-sm transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Save SEO Settings</span>
            </button>
          </div>
        </form>
      </div>

      {/* Google Snippet Live Preview */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4 flex items-center gap-1.5">
          <Globe className="w-4 h-4 text-[#146EF5]" />
          <span>Google Search Result Snippet Simulation</span>
        </h3>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-2xl font-sans">
          <div className="text-xs text-slate-600 truncate flex items-center gap-1">
            <span className="font-semibold text-slate-800">abunasarmaaz.com</span>
            <span className="text-slate-400">›</span>
          </div>
          <div className="text-base sm:text-lg font-medium text-[#1a0dab] hover:underline cursor-pointer line-clamp-1 mt-0.5">
            {form.siteTitle}
          </div>
          <p className="text-xs sm:text-sm text-slate-700 line-clamp-2 mt-1 leading-snug">
            {form.siteDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
