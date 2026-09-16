import React from 'react';
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react';
import { Article } from '../../types';
import { Badge } from '../common/Badge';
import { useApp } from '../../context/AppContext';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  const { navigateTo } = useApp();

  return (
    <article
      onClick={() => navigateTo(`/insights/${article.slug}`)}
      className={`group bg-white rounded-2xl border border-slate-200/80 hover:border-[#146EF5]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden cursor-pointer ${
        featured ? 'md:grid md:grid-cols-12 md:gap-6' : ''
      }`}
    >
      {/* Featured visual */}
      <div
        className={`relative overflow-hidden bg-slate-100 ${
          featured ? 'md:col-span-5 h-60 md:h-full min-h-[220px]' : 'h-48 sm:h-52 w-full'
        }`}
      >
        <img
          src={article.featuredImage}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3.5 left-3.5">
          <Badge variant="blue">{article.category}</Badge>
        </div>
      </div>

      {/* Content */}
      <div
        className={`p-6 flex-1 flex flex-col justify-between ${
          featured ? 'md:col-span-7 md:py-8' : ''
        }`}
      >
        <div>
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h3
            className={`font-bold text-[#071A33] group-hover:text-[#146EF5] transition-colors leading-snug ${
              featured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl line-clamp-2'
            }`}
          >
            {article.title}
          </h3>

          <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {article.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#146EF5]">
          <span>Read Insight</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  );
};
