import React from 'react';
import {
  FileText,
  Briefcase,
  Image as ImageIcon,
  Mail,
  Plus,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AdminTab } from './AdminLayout';

interface AdminDashboardProps {
  onSelectTab: (tab: AdminTab) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onSelectTab }) => {
  const { articles, caseStudies, media, inquiries, navigateTo } = useApp();

  const publishedArticles = articles.filter(a => a.published).length;
  const publishedCaseStudies = caseStudies.filter(c => c.published).length;
  const newInquiries = inquiries.filter(i => i.status === 'New').length;

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#146EF5]">
              Executive Overview
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#071A33] mt-1">
              Welcome back, Abu Naser Maaz
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Manage your published insights, detailed case studies, media assets, and incoming founder inquiries.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => onSelectTab('articles')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#146EF5] text-white text-xs sm:text-sm font-semibold hover:bg-[#2F80FF] transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Write Article</span>
            </button>
            <button
              onClick={() => onSelectTab('case-studies')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Case Study</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          onClick={() => onSelectTab('articles')}
          className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-[#146EF5]/40 transition-all cursor-pointer shadow-xs"
        >
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Published Articles</span>
            <FileText className="w-4 h-4 text-[#146EF5]" />
          </div>
          <div className="text-3xl font-extrabold text-[#071A33]">{publishedArticles}</div>
          <p className="text-xs text-slate-500 mt-1 font-medium">{articles.length} total in repository</p>
        </div>

        <div
          onClick={() => onSelectTab('case-studies')}
          className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-[#146EF5]/40 transition-all cursor-pointer shadow-xs"
        >
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Case Studies</span>
            <Briefcase className="w-4 h-4 text-[#146EF5]" />
          </div>
          <div className="text-3xl font-extrabold text-[#071A33]">{publishedCaseStudies}</div>
          <p className="text-xs text-slate-500 mt-1 font-medium">Web, Mobile, AI, XR, Games, Delivery</p>
        </div>

        <div
          onClick={() => onSelectTab('inquiries')}
          className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-[#146EF5]/40 transition-all cursor-pointer shadow-xs"
        >
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Client Inquiries</span>
            <Mail className="w-4 h-4 text-[#146EF5]" />
          </div>
          <div className="text-3xl font-extrabold text-[#071A33]">{inquiries.length}</div>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            <span className="font-bold text-amber-600">{newInquiries} new</span> requiring response
          </p>
        </div>

        <div
          onClick={() => onSelectTab('media')}
          className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-[#146EF5]/40 transition-all cursor-pointer shadow-xs"
        >
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Media Assets</span>
            <ImageIcon className="w-4 h-4 text-[#146EF5]" />
          </div>
          <div className="text-3xl font-extrabold text-[#071A33]">{media.length}</div>
          <p className="text-xs text-slate-500 mt-1 font-medium">Organized in structured folders</p>
        </div>
      </div>

      {/* Two Column Layout: Recent Inquiries & Recent Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Recent Inquiries */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#071A33] flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#146EF5]" />
              <span>Recent Founder & Team Inquiries</span>
            </h2>
            <button
              onClick={() => onSelectTab('inquiries')}
              className="text-xs font-semibold text-[#146EF5] hover:underline"
            >
              View All ({inquiries.length})
            </button>
          </div>

          {inquiries.length === 0 ? (
            <p className="text-xs text-slate-500 py-6 text-center">No inquiries received yet.</p>
          ) : (
            <div className="space-y-3">
              {inquiries.slice(0, 3).map(inq => (
                <div
                  key={inq.id}
                  onClick={() => onSelectTab('inquiries')}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-blue-50/50 hover:border-blue-200 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-900">{inq.name} ({inq.company || 'Direct'})</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        inq.status === 'New'
                          ? 'bg-amber-100 text-amber-800'
                          : inq.status === 'Reviewed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {inq.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#146EF5] font-semibold">{inq.projectType}</p>
                  <p className="text-xs text-slate-600 line-clamp-1 mt-1">{inq.message}</p>
                  <p className="text-[10px] text-slate-400 mt-1">{inq.submittedAt}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Live Articles Summary */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#071A33] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#146EF5]" />
              <span>Published Insights & Articles</span>
            </h2>
            <button
              onClick={() => onSelectTab('articles')}
              className="text-xs font-semibold text-[#146EF5] hover:underline"
            >
              Manage CMS
            </button>
          </div>

          <div className="space-y-3">
            {articles.slice(0, 4).map(art => (
              <div
                key={art.id}
                onClick={() => onSelectTab('articles')}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-slate-100/80 transition-colors cursor-pointer flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-0.5">
                    <span className="font-semibold text-[#146EF5]">{art.category}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {art.title}
                  </h4>
                </div>
                <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Live
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
