import React, { useState } from 'react';
import { Image as ImageIcon, Upload, Trash2, Copy, Check, Filter } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MediaItem } from '../../types';

export const AdminMedia: React.FC = () => {
  const { media, addMediaItem, deleteMediaItem } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [newImageName, setNewImageName] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageCategory, setNewImageCategory] = useState<MediaItem['category']>('Case Studies');
  const [newImageAlt, setNewImageAlt] = useState('');

  const categories = ['All', 'Profile', 'Case Studies', 'Blog', 'XR', 'General', 'SEO'] as const;

  const filteredMedia = selectedCategory === 'All'
    ? media
    : media.filter(m => m.category === selectedCategory);

  const handleCopyPath = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddMedia = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageUrl || !newImageName) return;

    addMediaItem({
      name: newImageName.endsWith('.jpg') || newImageName.endsWith('.png') ? newImageName : `${newImageName}.jpg`,
      url: newImageUrl,
      category: newImageCategory,
      altText: newImageAlt || newImageName,
      size: '340 KB'
    });

    setNewImageName('');
    setNewImageUrl('');
    setNewImageAlt('');
  };

  return (
    <div className="space-y-8">
      {/* Upload Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold text-[#071A33] flex items-center gap-2 mb-2">
          <Upload className="w-5 h-5 text-[#146EF5]" />
          <span>Add Media Asset to Central Library</span>
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Maintain organized image paths categorized by Profile, Case Studies, Blog, and XR experiences.
        </p>

        <form onSubmit={handleAddMedia} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Asset Name</label>
            <input
              type="text"
              value={newImageName}
              onChange={e => setNewImageName(e.target.value)}
              placeholder="e.g. web-testing-dashboard.jpg"
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Image URL</label>
            <input
              type="url"
              value={newImageUrl}
              onChange={e => setNewImageUrl(e.target.value)}
              placeholder="https://..."
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Folder Category</label>
            <select
              value={newImageCategory}
              onChange={e => setNewImageCategory(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
            >
              <option value="Profile">/images/profile/</option>
              <option value="Case Studies">/images/case-studies/</option>
              <option value="Blog">/images/blog/</option>
              <option value="XR">/images/xr/</option>
              <option value="General">/images/general/</option>
              <option value="SEO">/images/og/</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Add Media</span>
            </button>
          </div>
        </form>
      </div>

      {/* Media Grid with Filter */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-[#071A33]">Media Repository</h3>
            <p className="text-xs text-slate-500">{filteredMedia.length} assets in selection</p>
          </div>

          {/* Categories bar */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#071A33] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMedia.map(item => (
            <div
              key={item.id}
              className="group relative rounded-xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between"
            >
              <div className="relative h-36 bg-slate-200 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/80 text-white">
                  {item.category}
                </span>
              </div>

              <div className="p-3">
                <div className="text-xs font-bold text-slate-800 truncate" title={item.name}>
                  {item.name}
                </div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5" title={item.altText}>
                  {item.altText}
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    onClick={() => handleCopyPath(item.url, item.id)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#146EF5] hover:text-[#071A33]"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy URL</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => deleteMediaItem(item.id)}
                    className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors"
                    title="Delete Image"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
