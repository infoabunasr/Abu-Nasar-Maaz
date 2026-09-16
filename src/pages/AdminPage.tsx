import React from 'react';
import { useApp } from '../context/AppContext';
import { AdminLayout } from '../components/admin/AdminLayout';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { AdminArticles } from '../components/admin/AdminArticles';
import { AdminCaseStudies } from '../components/admin/AdminCaseStudies';
import { AdminMedia } from '../components/admin/AdminMedia';
import { AdminCategories } from '../components/admin/AdminCategories';
import { AdminSEO } from '../components/admin/AdminSEO';
import { AdminInquiries } from '../components/admin/AdminInquiries';
import { AdminSettings } from '../components/admin/AdminSettings';
import { SEOHead } from '../components/common/SEOHead';

interface AdminPageProps {
  subRoute?: string;
}

export const AdminPage: React.FC<AdminPageProps> = ({ subRoute = 'dashboard' }) => {
  const { currentAdminTab } = useApp();

  const activeTab = currentAdminTab || (subRoute as any) || 'dashboard';

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'articles':
        return <AdminArticles />;
      case 'case-studies':
        return <AdminCaseStudies />;
      case 'media':
        return <AdminMedia />;
      case 'categories':
        return <AdminCategories />;
      case 'seo':
        return <AdminSEO />;
      case 'inquiries':
        return <AdminInquiries />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <>
      <SEOHead
        title="Admin CMS & Content Control Center – Abu Naser Maaz"
        description="Administrative management suite for articles, case studies, media assets, SEO configurations, and incoming inquiries."
      />
      <AdminLayout activeTab={activeTab}>
        {renderTabContent()}
      </AdminLayout>
    </>
  );
};
