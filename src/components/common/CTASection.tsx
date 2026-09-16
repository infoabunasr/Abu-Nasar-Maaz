import React from 'react';
import { ArrowRight, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Building a Product? Let's Make Quality Part of the Process.",
  description = "Whether you are validating a new product, improving an existing application, or building an emerging technology experience, let's discuss where quality and delivery can be improved.",
  buttonText = "Let's Talk"
}) => {
  const { navigateTo } = useApp();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 my-12 rounded-2xl bg-[#071A33] text-white">
      {/* Subtle geometric pattern accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#146EF5]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2F80FF]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Product Quality & Technical Delivery</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigateTo('/contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#146EF5] hover:bg-[#2F80FF] text-white font-semibold text-base transition-all duration-150 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => navigateTo('/case-studies')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-base transition-colors border border-white/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-blue-300" />
            <span>Review Practical Case Studies</span>
          </button>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Select Consulting & Career Roles</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" onClick={() => navigateTo('/contact')}>
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Email & Fast Inquiries</span>
          </div>
        </div>
      </div>
    </section>
  );
};
