import React, { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Image as ImageIcon,
  Tag,
  Search,
  Settings,
  Mail,
  LogOut,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export type AdminTab =
  | 'dashboard'
  | 'articles'
  | 'case-studies'
  | 'media'
  | 'categories'
  | 'seo'
  | 'inquiries'
  | 'settings';

interface AdminLayoutProps {
  currentTab: AdminTab;
  onSelectTab: (tab: AdminTab) => void;
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  currentTab,
  onSelectTab,
  children
}) => {
  const { currentUser, logoutAdmin, navigateTo, inquiries } = useApp();
  const newInquiriesCount = inquiries.filter(i => i.status === 'New').length;

  const navItems: { id: AdminTab; label: string; icon: React.FC<{ className?: string }>; badge?: number }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'articles', label: 'Articles CMS', icon: FileText },
    { id: 'case-studies', label: 'Case Studies', icon: Briefcase },
    { id: 'media', label: 'Media Library', icon: ImageIcon },
    { id: 'categories', label: 'Categories', icon: Tag },
    { id: 'seo', label: 'SEO Management', icon: Search },
    { id: 'inquiries', label: 'Inquiries', icon: Mail, badge: newInquiriesCount },
    { id: 'settings', label: 'Site Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Admin Bar */}
      <header className="bg-[#071A33] text-white border-b border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#146EF5] flex items-center justify-center font-bold text-sm">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base">Abu Naser Maaz</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  SUPER ADMIN
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Content Management & Administration</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('/')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={logoutAdmin}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-800/40 text-xs font-semibold transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Nav */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-3 shadow-xs sticky top-24">
            <nav className="space-y-1">
              {navItems.map(item => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectTab(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors text-left ${
                      isActive
                        ? 'bg-[#146EF5] text-white shadow-xs'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          isActive ? 'bg-white text-[#146EF5]' : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 pt-4 border-t border-slate-100 px-3 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Local & Cloud Sync Active</span>
              </div>
              <p>Changes are saved to browser storage and ready for deployment.</p>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
};
