import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export interface BreadcrumbItem {
  name: string;
  route?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { navigateTo } = useApp();

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-500">
        <li className="flex items-center">
          <button
            onClick={() => navigateTo('/')}
            className="flex items-center gap-1 hover:text-[#146EF5] transition-colors focus:outline-none focus:underline"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast || !item.route ? (
                <span className="font-semibold text-slate-900 line-clamp-1 max-w-[240px] sm:max-w-none">
                  {item.name}
                </span>
              ) : (
                <button
                  onClick={() => navigateTo(item.route!)}
                  className="hover:text-[#146EF5] transition-colors focus:outline-none focus:underline"
                >
                  {item.name}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
