import React, { useState } from 'react';
import { X, Lock, ShieldCheck, KeyRound, AlertCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminLoginModal: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, loginAdmin, navigateTo } = useApp();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(password);
    if (success) {
      setError(false);
      setPassword('');
      navigateTo('/admin');
    } else {
      setError(true);
    }
  };

  const handleQuickDemo = () => {
    const success = loginAdmin('admin123');
    if (success) {
      setError(false);
      setPassword('');
      navigateTo('/admin');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#071A33] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#146EF5] flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Admin Management Portal</h3>
              <p className="text-xs text-slate-300">Authorized editor authentication</p>
            </div>
          </div>
          <button
            onClick={() => setIsLoginModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6">
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-xs font-semibold text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Invalid admin credentials. (Try demo passcode: admin123)</span>
            </div>
          )}

          <div className="mb-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Admin Access Passcode
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter admin password..."
                className="w-full px-4 py-3 pl-10 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#146EF5] focus:border-transparent"
                autoFocus
              />
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Authorized roles: <span className="font-semibold text-slate-700">super_admin</span>. Allows publishing articles, managing case studies, SEO metadata, and media.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2.5">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Sign In to Admin Dashboard</span>
            </button>

            <button
              type="button"
              onClick={handleQuickDemo}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
            >
              ⚡ Instant Demo Sign-in (admin123)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
