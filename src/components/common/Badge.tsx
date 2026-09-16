import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'navy' | 'gray' | 'emerald' | 'amber' | 'purple' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'sm',
  className = ''
}) => {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs font-semibold' : 'px-3 py-1 text-sm font-semibold';

  const variantClasses = {
    blue: 'bg-[#146EF5]/10 text-[#146EF5] border border-[#146EF5]/20',
    navy: 'bg-[#071A33] text-white',
    gray: 'bg-slate-100 text-slate-700 border border-slate-200',
    emerald: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    amber: 'bg-amber-50 text-amber-700 border border-amber-200',
    purple: 'bg-purple-50 text-purple-700 border border-purple-200',
    outline: 'bg-transparent text-slate-600 border border-slate-300'
  }[variant];

  return (
    <span
      className={`inline-flex items-center rounded-full tracking-wide transition-colors ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};
