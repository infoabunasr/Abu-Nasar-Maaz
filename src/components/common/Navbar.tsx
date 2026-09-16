import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Lock, ShieldCheck, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Navbar: React.FC = () => {
  const { currentRoute, navigateTo, currentUser, setIsLoginModalOpen } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Expertise', path: '/expertise' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Insights', path: '/insights' },
    { label: 'Ventures', path: '/ventures' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return currentRoute === '/' || currentRoute === '';
    return currentRoute.startsWith(path);
  };

  const handleNavClick = (path: string) => {
    navigateTo(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5'
          : 'bg-[#F7F9FC]/90 backdrop-blur-xs border-b border-slate-200/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-[#071A33] flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:bg-[#146EF5] transition-colors">
              M
            </div>
            <div>
              <span className="font-bold text-slate-900 text-lg sm:text-xl tracking-tight leading-none block">
                Abu Naser Maaz
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-normal block mt-0.5">
                Quality Engineering • Delivery
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map(link => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                    active
                      ? 'text-[#146EF5] bg-[#146EF5]/8 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA & Admin trigger */}
          <div className="hidden sm:flex items-center gap-3">
            {currentUser ? (
              <button
                onClick={() => handleNavClick('/admin')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
                title="Admin Dashboard"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admin CMS</span>
              </button>
            ) : (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                title="Admin Portal Login"
                aria-label="Admin Login"
              >
                <Lock className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => handleNavClick('/contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white text-sm font-semibold transition-all duration-150 shadow-xs hover:shadow-sm cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('/contact')}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-[#146EF5] text-white text-xs font-semibold"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map(link => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-left text-base font-semibold transition-colors ${
                    active
                      ? 'bg-[#146EF5]/10 text-[#146EF5]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('/contact')}
              className="w-full py-3 rounded-xl bg-[#146EF5] text-white text-center font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500">Professional Portal</span>
              {currentUser ? (
                <button
                  onClick={() => handleNavClick('/admin')}
                  className="text-xs font-semibold text-emerald-700 hover:underline"
                >
                  Go to Admin CMS
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsLoginModalOpen(true);
                  }}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                >
                  <Lock className="w-3 h-3" />
                  <span>Admin Access</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
