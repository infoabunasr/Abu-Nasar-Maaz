import React, { useMemo } from 'react';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Check,
  Tag,
  ArrowRight,
  ShieldCheck,
  Linkedin,
  Twitter
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Badge } from '../components/common/Badge';
import { TableOfContents } from '../components/insights/TableOfContents';
import { ArticleCard } from '../components/insights/ArticleCard';
import { CTASection } from '../components/common/CTASection';
import { SEOHead } from '../components/common/SEOHead';

interface InsightDetailPageProps {
  slug: string;
}

export const InsightDetailPage: React.FC<InsightDetailPageProps> = ({ slug }) => {
  const { articles, caseStudies, navigateTo } = useApp();
  const [copied, setCopied] = React.useState(false);

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#071A33]">Article Not Found</h1>
        <p className="text-slate-600">The requested article could not be found or has moved.</p>
        <button
          onClick={() => navigateTo('/insights')}
          className="px-6 py-2.5 rounded-xl bg-[#146EF5] text-white text-sm font-semibold inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Insights</span>
        </button>
      </div>
    );
  }

  // Extract table of contents headings from markdown content
  const tocItems = useMemo(() => {
    const lines = article.content.split('\n');
    const items: { id: string; title: string; level: number }[] = [];

    lines.forEach(line => {
      const h2Match = line.match(/^##\s+(.+)$/);
      const h3Match = line.match(/^###\s+(.+)$/);

      if (h2Match) {
        const title = h2Match[1].replace(/\*\*/g, '').trim();
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        items.push({ id, title, level: 2 });
      } else if (h3Match) {
        const title = h3Match[1].replace(/\*\*/g, '').trim();
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        items.push({ id, title, level: 3 });
      }
    });

    return items;
  }, [article.content]);

  // Related articles
  const relatedArticles = articles
    .filter(a => a.id !== article.id && (a.category === article.category || a.tags.some(t => article.tags.includes(t))))
    .slice(0, 2);

  // Related case studies
  const relatedCaseStudies = caseStudies
    .filter(c => article.tags.some(t => c.tools.includes(t) || c.category === article.category))
    .slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Convert simple markdown headings & paragraphs to clean JSX
  const renderFormattedContent = (content: string) => {
    const sections = content.split('\n\n');

    return sections.map((sec, idx) => {
      const trimmed = sec.trim();

      if (trimmed.startsWith('## ')) {
        const title = trimmed.replace('## ', '');
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return (
          <h2 key={idx} id={id} className="text-2xl sm:text-3xl font-bold text-[#071A33] mt-10 mb-4 pt-4 border-t border-slate-100 scroll-mt-24">
            {title}
          </h2>
        );
      }

      if (trimmed.startsWith('### ')) {
        const title = trimmed.replace('### ', '');
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        return (
          <h3 key={idx} id={id} className="text-xl font-bold text-[#071A33] mt-6 mb-3 scroll-mt-24">
            {title}
          </h3>
        );
      }

      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const items = trimmed.split('\n').map(l => l.replace(/^[-*]\s+/, ''));
        return (
          <ul key={idx} className="space-y-2 my-4 pl-4">
            {items.map((it, i) => (
              <li key={i} className="text-slate-700 text-base leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#146EF5] shrink-0 mt-2.5" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        );
      }

      if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ')) {
        const items = trimmed.split('\n').map(l => l.replace(/^\d+\.\s+/, ''));
        return (
          <ol key={idx} className="space-y-2 my-4 pl-4">
            {items.map((it, i) => (
              <li key={i} className="text-slate-700 text-base leading-relaxed flex items-start gap-2.5">
                <span className="font-mono text-xs font-bold text-[#146EF5] shrink-0 mt-1">0{i + 1}.</span>
                <span>{it}</span>
              </li>
            ))}
          </ol>
        );
      }

      return (
        <p key={idx} className="text-slate-700 text-base sm:text-lg leading-relaxed my-4">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SEOHead
        title={`${article.title} – Abu Naser Maaz`}
        description={article.excerpt}
        ogImage={article.coverImage}
        breadcrumbs={[
          { name: 'Insights', item: 'https://abunasarmaaz.com/#/insights' },
          { name: article.title, item: `https://abunasarmaaz.com/#/insights/${article.slug}` }
        ]}
      />

      <Breadcrumb
        items={[
          { name: 'Insights', route: '/insights' },
          { name: article.title }
        ]}
      />

      {/* Article Header */}
      <article className="space-y-8">
        <header className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#146EF5]">
              {article.category}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishDate}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight leading-tight max-w-4xl">
            {article.title}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            {article.excerpt}
          </p>

          {/* Author and Share bar */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt={article.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-sm font-bold text-[#071A33] block">{article.author.name}</span>
                <span className="text-xs text-slate-500">{article.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied URL!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>Share Article</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Hero Cover Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs h-72 sm:h-96 bg-slate-100">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Layout: Content + TOC Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs space-y-4">
            <div className="prose prose-slate max-w-none">
              {renderFormattedContent(article.content)}
            </div>

            {/* Tags */}
            <div className="pt-8 mt-8 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400" />
              {article.tags.map(t => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar TOC & Author box (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Table of contents */}
            {tocItems.length > 0 && <TableOfContents items={tocItems} />}

            {/* About Author Box */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                About the Author
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Abu Naser Maaz is a Quality Engineering practitioner and Founder of Innovify XR, focused on structured testing, AI QA evaluation, and technical project delivery.
              </p>
              <button
                onClick={() => navigateTo('/contact')}
                className="w-full py-2 rounded-xl bg-slate-100 hover:bg-[#146EF5] hover:text-white text-slate-800 text-xs font-bold transition-colors"
              >
                Connect with Abu Naser →
              </button>
            </div>

            {/* Related Case Studies */}
            {relatedCaseStudies.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#146EF5]" />
                  <span>Related Case Study</span>
                </h3>

                <div className="space-y-3">
                  {relatedCaseStudies.map(cs => (
                    <div
                      key={cs.id}
                      onClick={() => navigateTo(`/case-studies/${cs.slug}`)}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200/60"
                    >
                      <span className="text-[10px] font-bold text-[#146EF5]">{cs.category}</span>
                      <h4 className="text-xs font-bold text-slate-900 mt-0.5 line-clamp-2">
                        {cs.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </aside>

        </div>
      </article>

      {/* Bottom: Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-[#071A33]">More Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map(rel => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </div>
  );
};
