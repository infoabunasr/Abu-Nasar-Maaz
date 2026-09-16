import React from 'react';
import { ListOrdered } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="p-5 rounded-xl bg-slate-50/90 border border-slate-200/80 sticky top-24">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3.5">
        <ListOrdered className="w-4 h-4 text-[#146EF5]" />
        <span>Table of Contents</span>
      </div>
      <nav>
        <ul className="space-y-2 text-xs sm:text-sm">
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`${item.level === 3 ? 'pl-3' : 'font-medium'}`}
            >
              <button
                onClick={() => scrollTo(item.id)}
                className="text-left text-slate-600 hover:text-[#146EF5] transition-colors leading-snug focus:outline-none"
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
