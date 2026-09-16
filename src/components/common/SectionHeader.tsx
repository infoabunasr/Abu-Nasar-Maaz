import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  className = ''
}) => {
  return (
    <div
      className={`mb-10 sm:mb-12 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#146EF5]" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#146EF5]">
            {eyebrow}
          </span>
        </div>
      )}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#071A33] leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {action && (
          <button
            onClick={action.onClick}
            className="shrink-0 text-sm font-semibold text-[#146EF5] hover:text-[#071A33] transition-colors flex items-center gap-1.5 group self-start sm:self-auto"
          >
            <span>{action.label}</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        )}
      </div>
    </div>
  );
};
