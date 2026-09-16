import React from 'react';
import { Mail, Check, Archive, Trash2, Building, User, Calendar, ExternalLink } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminInquiries: React.FC = () => {
  const { inquiries, updateInquiryStatus, deleteInquiry } = useApp();

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#071A33] flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#146EF5]" />
            <span>Incoming Client & Founder Inquiries</span>
          </h2>
          <p className="text-sm text-slate-600">
            Messages submitted via the contact form across Quality Engineering, AI Testing, and Technical Project Delivery.
          </p>
        </div>
        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 self-start sm:self-auto">
          {inquiries.length} submissions recorded
        </span>
      </div>

      {inquiries.length === 0 ? (
        <div className="py-12 text-center text-slate-500 text-sm">
          No inquiries in database. Submit a test message on the /contact page!
        </div>
      ) : (
        <div className="space-y-4">
          {inquiries.map(inq => (
            <div
              key={inq.id}
              className="p-5 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-[#146EF5] font-bold text-sm flex items-center justify-center shrink-0">
                    {inq.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <span>{inq.name}</span>
                      {inq.company && (
                        <span className="text-xs font-medium text-slate-500">
                          @ {inq.company} ({inq.role || 'Stakeholder'})
                        </span>
                      )}
                    </h4>
                    <a
                      href={`mailto:${inq.email}`}
                      className="text-xs text-[#146EF5] hover:underline font-mono"
                    >
                      {inq.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={inq.status}
                    onChange={e => updateInquiryStatus(inq.id, e.target.value as any)}
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-300 bg-white focus:outline-none"
                  >
                    <option value="New">🟡 New</option>
                    <option value="Reviewed">🔵 Reviewed</option>
                    <option value="Archived">⚪ Archived</option>
                  </select>

                  <button
                    onClick={() => {
                      if (confirm(`Delete inquiry from ${inq.name}?`)) {
                        deleteInquiry(inq.id);
                      }
                    }}
                    className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-colors"
                    title="Delete Record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Tag for project type */}
              <div>
                <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-[#146EF5] border border-blue-200/50">
                  Topic: {inq.projectType}
                </span>
              </div>

              {/* Message text */}
              <div className="p-3.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                {inq.message}
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Received {inq.submittedAt}
                </span>
                <a
                  href={`mailto:${inq.email}?subject=Re:%20${encodeURIComponent(inq.projectType)}%20Inquiry%20-%20Abu%20Naser%20Maaz`}
                  className="text-xs font-semibold text-[#146EF5] hover:underline flex items-center gap-1"
                >
                  <span>Reply via Email</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
