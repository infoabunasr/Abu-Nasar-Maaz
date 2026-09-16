import React from 'react';
import { CategoryType } from '../../types';

interface CaseStudyFilterProps {
  activeFilter: string;
  onFilterChange: (category: string) => void;
  categories: { label: string; value: string; count?: number }[];
}

export const CaseStudyFilter: React.FC<CaseStudyFilterProps> = ({
  activeFilter,
  onFilterChange,
  categories
}) => {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
      {categories.map(cat => {
        const isActive = activeFilter === cat.value;
        return (
          <button
            key={cat.value}
            onClick={() => onFilterChange(cat.value)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
              isActive
                ? 'bg-[#071A33] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
            }`}
          >
            <span>{cat.label}</span>
            {cat.count !== undefined && (
              <span
                className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {cat.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
