import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { CaseStudyCard } from '../components/case-studies/CaseStudyCard';
import { CaseStudyFilter } from '../components/case-studies/CaseStudyFilter';
import { CTASection } from '../components/common/CTASection';
import { SEOHead } from '../components/common/SEOHead';

export const CaseStudiesPage: React.FC = () => {
  const { caseStudies } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions = [
    { label: 'All Projects', value: 'All', count: caseStudies.length },
    { label: 'Web QA', value: 'Web', count: caseStudies.filter(c => c.category === 'Web').length },
    { label: 'Mobile QA', value: 'Mobile', count: caseStudies.filter(c => c.category === 'Mobile').length },
    { label: 'AI Testing', value: 'AI', count: caseStudies.filter(c => c.category === 'AI').length },
    { label: 'Game QA', value: 'Game', count: caseStudies.filter(c => c.category === 'Game').length },
    { label: 'XR / VR', value: 'XR', count: caseStudies.filter(c => c.category === 'XR').length },
    { label: 'Project Delivery', value: 'Project Delivery', count: caseStudies.filter(c => c.category === 'Project Delivery').length }
  ];

  const filteredStudies = useMemo(() => {
    return caseStudies.filter(study => {
      const matchesCategory =
        selectedCategory === 'All' ||
        study.category === selectedCategory ||
        (selectedCategory === 'QA' && (study.category === 'Web' || study.category === 'Mobile'));

      const matchesSearch =
        !searchQuery ||
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.shortSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        study.platform.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [caseStudies, selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SEOHead
        title="Case Studies – Quality Engineering & Testing Portfolios"
        description="Explore detailed case studies in Web QA, Mobile App Testing, AI Testing, Game QA, VR Testing, and Technical Project Delivery by Abu Naser Maaz."
        breadcrumbs={[
          { name: 'Case Studies', item: 'https://abunasarmaaz.com/#/case-studies' }
        ]}
      />

      <Breadcrumb items={[{ name: 'Case Studies' }]} />

      {/* Header */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xs">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#146EF5] text-xs font-bold uppercase tracking-wider">
            <span>Portfolio & Work Samples</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight leading-tight">
            Practical Quality Engineering Case Studies
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Real technical breakdowns detailing test strategies, defect discoveries, device fragmentation challenges, and actionable delivery recommendations.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <CaseStudyFilter
            activeFilter={selectedCategory}
            onFilterChange={setSelectedCategory}
            categories={filterOptions}
          />

          <div className="relative w-full md:w-72 shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by tool, stack, keyword..."
              className="w-full px-4 py-2 pl-9 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm focus:ring-2 focus:ring-[#146EF5] focus:outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section>
        {filteredStudies.length === 0 ? (
          <div className="p-12 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
            <Layers className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No matching case studies found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Try adjusting your category filter or search query to find relevant work samples.
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
            {filteredStudies.map(study => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <CTASection
        title="Have a Product That Needs Testing?"
        description="Whether you need a full pre-launch audit or ongoing quality coordination, let's explore where testing can strengthen your release."
      />
    </div>
  );
};
