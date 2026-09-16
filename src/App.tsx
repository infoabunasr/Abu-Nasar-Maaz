import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExpertisePage } from './pages/ExpertisePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { InsightsPage } from './pages/InsightsPage';
import { InsightDetailPage } from './pages/InsightDetailPage';
import { VenturesPage } from './pages/VenturesPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

const AppContent: React.FC = () => {
  const { currentRoute } = useApp();

  // Scroll to top on route navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentRoute]);

  // Route Dispatcher
  const renderCurrentRoute = () => {
    const cleanRoute = currentRoute.split('?')[0];

    // Admin Routes
    if (cleanRoute.startsWith('/admin')) {
      const parts = cleanRoute.split('/');
      const subRoute = parts[2] || 'dashboard';
      return <AdminPage subRoute={subRoute} />;
    }

    // Single Case Study Detail Route
    if (cleanRoute.startsWith('/case-studies/')) {
      const slug = cleanRoute.replace('/case-studies/', '').trim();
      if (slug) {
        return <CaseStudyDetailPage slug={slug} />;
      }
      return <CaseStudiesPage />;
    }

    // Single Insight Detail Route
    if (cleanRoute.startsWith('/insights/')) {
      const slug = cleanRoute.replace('/insights/', '').trim();
      if (slug) {
        return <InsightDetailPage slug={slug} />;
      }
      return <InsightsPage />;
    }

    // Standard Static Pages
    switch (cleanRoute) {
      case '/about':
        return <AboutPage />;
      case '/expertise':
        return <ExpertisePage />;
      case '/case-studies':
        return <CaseStudiesPage />;
      case '/insights':
        return <InsightsPage />;
      case '/ventures':
        return <VenturesPage />;
      case '/contact':
        return <ContactPage />;
      case '/':
      case '':
      default:
        return <HomePage />;
    }
  };

  const isAdmin = currentRoute.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-[#071A33] selection:bg-[#146EF5] selection:text-white font-sans antialiased">
      {!isAdmin && <Navbar />}

      <main className={`flex-grow ${!isAdmin ? 'pt-4 sm:pt-6 pb-16' : ''}`}>
        {renderCurrentRoute()}
      </main>

      {!isAdmin && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
