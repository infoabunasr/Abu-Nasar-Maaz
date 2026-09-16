import React from 'react';
import { ArrowRight, Layers, Tag } from 'lucide-react';
import { CaseStudy } from '../../types';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/AppContext';

interface CaseStudyCardProps {
  study: CaseStudy;
  featured?: boolean;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, featured = false }) => {
  const { navigateTo } = useApp();

  const getBadgeVariant = (projectType: string) => {
    switch (projectType) {
      case 'Client Project':
        return 'emerald';
      case 'Prototype':
        return 'purple';
      case 'In Development':
        return 'amber';
      case 'Independent Case Study':
      default:
        return 'blue';
    }
  };

  return (
    <article
      onClick={() => navigateTo(`/case-studies/${study.slug}`)}
      className="group relative bg-white rounded-2xl border border-slate-200/80 hover:border-[#146EF5]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Featured visual header */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={study.featuredImage}
          alt={study.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
        
        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          <Badge variant={getBadgeVariant(study.projectType)}>
            {study.projectType}
          </Badge>
          <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-[11px] font-bold text-white uppercase tracking-wider">
            {study.category}
          </span>
        </div>

        {/* Platform tag bottom left */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center gap-1.5 text-xs text-white/90 font-medium">
          <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span className="truncate">{study.platform}</span>
        </div>
      </div>

      {/* Content body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#071A33] group-hover:text-[#146EF5] transition-colors line-clamp-2 leading-snug">
            {study.title}
          </h3>

          <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {study.shortSummary}
          </p>

          {/* Tools & key metrics */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
            {study.tools.slice(0, 4).map((tool, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
              >
                <Tag className="w-2.5 h-2.5 text-slate-400" />
                {tool}
              </span>
            ))}
            {study.tools.length > 4 && (
              <span className="text-[11px] font-medium text-slate-400 self-center">
                +{study.tools.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#146EF5]">
          <span>View Detailed Case Study</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  );
};
