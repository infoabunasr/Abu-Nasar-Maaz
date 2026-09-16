import React, { useState } from 'react';
import { Settings, Save, RotateCcw, Check, AlertTriangle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminSettings: React.FC = () => {
  const { siteSettings, updateSiteSettings, resetToDefaults } = useApp();
  const [form, setForm] = useState(siteSettings);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteSettings(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all site content, case studies, and settings to original defaults?')) {
      resetToDefaults();
      alert('Reset complete.');
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-[#071A33] flex items-center gap-2">
              <Settings className="w-5 h-5 text-[#146EF5]" />
              <span>General Site Settings & Professional Positioning</span>
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Configure hero copy, brand positioning statements, direct contact channels, and venture URLs.
            </p>
          </div>
          {saved && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold animate-in fade-in">
              <Check className="w-4 h-4" />
              <span>Saved Successfully</span>
            </div>
          )}
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Site Name
              </label>
              <input
                type="text"
                value={form.siteName}
                onChange={e => setForm({ ...form, siteName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Tagline
              </label>
              <input
                type="text"
                value={form.tagline}
                onChange={e => setForm({ ...form, tagline: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              Hero Eyebrow
            </label>
            <input
              type="text"
              value={form.heroEyebrow}
              onChange={e => setForm({ ...form, heroEyebrow: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              Main Hero Headline
            </label>
            <input
              type="text"
              value={form.heroHeadline}
              onChange={e => setForm({ ...form, heroHeadline: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              Supporting Hero Paragraph
            </label>
            <textarea
              rows={3}
              value={form.heroParagraph}
              onChange={e => setForm({ ...form, heroParagraph: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              Secondary Hero Sentence
            </label>
            <textarea
              rows={2}
              value={form.secondarySentence}
              onChange={e => setForm({ ...form, secondarySentence: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Contact Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                value={form.linkedInUrl}
                onChange={e => setForm({ ...form, linkedInUrl: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                Innovify XR URL
              </label>
              <input
                type="url"
                value={form.innovifyXrUrl}
                onChange={e => setForm({ ...form, innovifyXrUrl: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white font-semibold text-sm transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Site Configuration</span>
            </button>
          </div>
        </form>
      </div>

      {/* Database Maintenance / Reset */}
      <div className="bg-white rounded-2xl border border-red-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-red-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span>Data Reset & Restore Defaults</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Restore the initial 6 case studies, 6 articles, media assets, and SEO settings. Useful for resetting after demo evaluations.
            </p>
          </div>

          <button
            onClick={handleReset}
            className="shrink-0 px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>
        </div>
      </div>
    </div>
  );
};
