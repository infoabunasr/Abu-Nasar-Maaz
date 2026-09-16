import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  value: string;
  label: string;
  sublabel?: string;
  icon?: LucideIcon;
  variant?: 'light' | 'navy' | 'blue';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  sublabel,
  icon: Icon,
  variant = 'light'
}) => {
  const styles = {
    light: 'bg-white border border-slate-200/80 text-slate-900 shadow-sm hover:border-[#146EF5]/30',
    navy: 'bg-[#071A33] border border-slate-800 text-white',
    blue: 'bg-gradient-to-br from-[#146EF5] to-[#0B4DB8] text-white'
  }[variant];

  return (
    <div className={`rounded-xl p-6 sm:p-7 transition-all duration-200 ${styles}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-inherit">
            {value}
          </div>
          <div className="mt-2 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200">
            {label}
          </div>
          {sublabel && (
            <div className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
              {sublabel}
            </div>
          )}
        </div>
        {Icon && (
          <div className="p-3 rounded-lg bg-blue-50 text-[#146EF5] shrink-0">
            <Icon className="w-6 h-6" />
          </div>
        )}
      </div>
    </div>
  );
};
