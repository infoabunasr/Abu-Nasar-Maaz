import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ArticleCard } from '../components/insights/ArticleCard';
import { CTASection } from '../components/common/CTASection';
import { SEOHead } from '../components/common/SEOHead';
import { Badge } from '../components/common/Badge';

export const InsightsPage: React.FC = () => {
  const { articles, navigateTo } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Quality Engineering',
    'Software Testing',
    'AI Testing',
    'Technical Delivery',
    'Game QA',
    'XR',
    'Product Development',
    'Founder Lessons'
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      const matchesSearch =
        !searchQuery ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featuredArticle = articles.find(a => a.featured) || articles[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SEOHead
        title="Insights & Articles – Software Testing, AI QA & Delivery"
        description="Thoughtful articles and practical guides on Quality Engineering, AI application testing, sprint delivery coordination, and XR testing by Abu Naser Maaz."
        breadcrumbs={[
          { name: 'Insights', item: 'https://abunasarmaaz.com/#/insights' }
        ]}
      />

      <Breadcrumb items={[{ name: 'Insights & Articles' }]} />

      {/* Header */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#146EF5] text-xs font-bold uppercase tracking-wider">
            <span>Writing & Methodologies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight leading-tight">
            Insights on Quality, Technology & Delivery
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Practical perspectives on software testing, risk prioritization, AI model evaluation, sprint coordination, and early-stage startup quality engineering.
          </p>
        </div>
      </section>

      {/* Featured Article Highlight (if no search query active) */}
      {!searchQuery && selectedCategory === 'All' && featuredArticle && (
        <section
          onClick={() => navigateTo(`/insights/${featuredArticle.slug}`)}
          className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-[#146EF5]/50 transition-all cursor-pointer group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 h-64 lg:h-full bg-slate-100 overflow-hidden relative">
              <img
                src={featuredArticle.coverImage}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#146EF5] text-white shadow-sm">
                Featured Insight
              </span>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                <span className="text-[#146EF5] font-bold">{featuredArticle.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featuredArticle.publishDate}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A33] group-hover:text-[#146EF5] transition-colors leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2 flex items-center gap-2 text-sm font-bold text-[#146EF5]">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Pills & Search */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#071A33] text-white'
                    : 'bg-white border border-slate-200/90 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full px-4 py-2 pl-9 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section>
        {filteredArticles.length === 0 ? (
          <div className="p-12 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No articles found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Try searching with another keyword or resetting the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
};
