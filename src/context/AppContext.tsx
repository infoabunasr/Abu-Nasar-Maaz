import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  CaseStudy,
  Article,
  Venture,
  MediaItem,
  SEOSettings,
  SiteSettings,
  ContactSubmission,
  AdminUser
} from '../types';
import {
  INITIAL_CASE_STUDIES,
  INITIAL_ARTICLES,
  INITIAL_VENTURES,
  INITIAL_MEDIA,
  INITIAL_SEO_SETTINGS,
  INITIAL_SITE_SETTINGS,
  INITIAL_INQUIRIES
} from '../data/initialData';

interface AppContextType {
  // Navigation
  currentRoute: string;
  navigateTo: (route: string) => void;

  // Data
  caseStudies: CaseStudy[];
  articles: Article[];
  ventures: Venture[];
  media: MediaItem[];
  seoSettings: SEOSettings;
  siteSettings: SiteSettings;
  inquiries: ContactSubmission[];

  // Case Studies CRUD
  addCaseStudy: (study: Omit<CaseStudy, 'id' | 'createdAt'>) => void;
  updateCaseStudy: (id: string, updated: Partial<CaseStudy>) => void;
  deleteCaseStudy: (id: string) => void;

  // Articles CRUD
  addArticle: (article: Omit<Article, 'id'>) => void;
  updateArticle: (id: string, updated: Partial<Article>) => void;
  deleteArticle: (id: string) => void;

  // Media Management
  addMediaItem: (item: Omit<MediaItem, 'id' | 'uploadedAt'>) => void;
  deleteMediaItem: (id: string) => void;

  // Settings & SEO
  updateSEOSettings: (settings: Partial<SEOSettings>) => void;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;

  // Contact Submissions
  submitContactForm: (data: Omit<ContactSubmission, 'id' | 'submittedAt' | 'status'>) => Promise<boolean>;
  updateInquiryStatus: (id: string, status: ContactSubmission['status']) => void;
  deleteInquiry: (id: string) => void;

  // Admin Auth
  currentUser: AdminUser | null;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;

  // Utility
  resetToDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  CASE_STUDIES: 'anm_case_studies_v1',
  ARTICLES: 'anm_articles_v1',
  VENTURES: 'anm_ventures_v1',
  MEDIA: 'anm_media_v1',
  SEO: 'anm_seo_v1',
  SITE: 'anm_site_v1',
  INQUIRIES: 'anm_inquiries_v1',
  ADMIN_USER: 'anm_admin_user_v1'
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Safe localStorage helper
  const loadStored = <T,>(key: string, fallback: T): T => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : fallback;
    } catch {
      return fallback;
    }
  };

  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  });

  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(() =>
    loadStored(STORAGE_KEYS.CASE_STUDIES, INITIAL_CASE_STUDIES)
  );
  const [articles, setArticles] = useState<Article[]>(() =>
    loadStored(STORAGE_KEYS.ARTICLES, INITIAL_ARTICLES)
  );
  const [ventures] = useState<Venture[]>(() =>
    loadStored(STORAGE_KEYS.VENTURES, INITIAL_VENTURES)
  );
  const [media, setMedia] = useState<MediaItem[]>(() =>
    loadStored(STORAGE_KEYS.MEDIA, INITIAL_MEDIA)
  );
  const [seoSettings, setSeoSettings] = useState<SEOSettings>(() =>
    loadStored(STORAGE_KEYS.SEO, INITIAL_SEO_SETTINGS)
  );
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() =>
    loadStored(STORAGE_KEYS.SITE, INITIAL_SITE_SETTINGS)
  );
  const [inquiries, setInquiries] = useState<ContactSubmission[]>(() =>
    loadStored(STORAGE_KEYS.INQUIRIES, INITIAL_INQUIRIES)
  );

  const [currentUser, setCurrentUser] = useState<AdminUser | null>(() =>
    loadStored(STORAGE_KEYS.ADMIN_USER, null)
  );
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Sync route with window hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      setCurrentRoute(hash || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: string) => {
    window.location.hash = route;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Persist state updates
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CASE_STUDIES, JSON.stringify(caseStudies));
    } catch (e) {
      console.error('Storage error:', e);
    }
  }, [caseStudies]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(articles));
    } catch (e) {
      console.error('Storage error:', e);
    }
  }, [articles]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MEDIA, JSON.stringify(media));
    } catch (e) {
      console.error('Storage error:', e);
    }
  }, [media]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SEO, JSON.stringify(seoSettings));
    } catch (e) {
      console.error('Storage error:', e);
    }
  }, [seoSettings]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SITE, JSON.stringify(siteSettings));
    } catch (e) {
      console.error('Storage error:', e);
    }
  }, [siteSettings]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
    } catch (e) {
      console.error('Storage error:', e);
    }
  }, [inquiries]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(STORAGE_KEYS.ADMIN_USER, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(STORAGE_KEYS.ADMIN_USER);
      }
    } catch (e) {
      console.error('Storage error:', e);
    }
  }, [currentUser]);

  // Case Studies operations
  const addCaseStudy = (studyData: Omit<CaseStudy, 'id' | 'createdAt'>) => {
    const newStudy: CaseStudy = {
      ...studyData,
      id: `cs-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setCaseStudies(prev => [newStudy, ...prev]);
  };

  const updateCaseStudy = (id: string, updated: Partial<CaseStudy>) => {
    setCaseStudies(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteCaseStudy = (id: string) => {
    setCaseStudies(prev => prev.filter(item => item.id !== id));
  };

  // Articles operations
  const addArticle = (articleData: Omit<Article, 'id'>) => {
    const newArticle: Article = {
      ...articleData,
      id: `art-${Date.now()}`
    };
    setArticles(prev => [newArticle, ...prev]);
  };

  const updateArticle = (id: string, updated: Partial<Article>) => {
    setArticles(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteArticle = (id: string) => {
    setArticles(prev => prev.filter(item => item.id !== id));
  };

  // Media operations
  const addMediaItem = (itemData: Omit<MediaItem, 'id' | 'uploadedAt'>) => {
    const newItem: MediaItem = {
      ...itemData,
      id: `med-${Date.now()}`,
      uploadedAt: new Date().toISOString().split('T')[0]
    };
    setMedia(prev => [newItem, ...prev]);
  };

  const deleteMediaItem = (id: string) => {
    setMedia(prev => prev.filter(item => item.id !== id));
  };

  // Settings operations
  const updateSEOSettings = (newSettings: Partial<SEOSettings>) => {
    setSeoSettings(prev => ({ ...prev, ...newSettings }));
  };

  const updateSiteSettings = (newSettings: Partial<SiteSettings>) => {
    setSiteSettings(prev => ({ ...prev, ...newSettings }));
  };

  // Contact Inquiries
  const submitContactForm = async (data: Omit<ContactSubmission, 'id' | 'submittedAt' | 'status'>): Promise<boolean> => {
    const newInquiry: ContactSubmission = {
      ...data,
      id: `inq-${Date.now()}`,
      submittedAt: new Date().toLocaleString(),
      status: 'New'
    };
    setInquiries(prev => [newInquiry, ...prev]);
    return true;
  };

  const updateInquiryStatus = (id: string, status: ContactSubmission['status']) => {
    setInquiries(prev =>
      prev.map(item => (item.id === id ? { ...item, status } : item))
    );
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(item => item.id !== id));
  };

  // Admin Auth
  const loginAdmin = (password: string): boolean => {
    // Demo admin access with 'admin123' or 'maaz2026'
    if (password === 'admin123' || password === 'maaz2026' || password === 'admin') {
      const user: AdminUser = {
        id: 'usr_admin_1',
        name: 'Abu Naser Maaz',
        email: 'info.abunasermaaz@gmail.com',
        role: 'super_admin'
      };
      setCurrentUser(user);
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setCurrentUser(null);
    if (currentRoute.startsWith('/admin')) {
      navigateTo('/');
    }
  };

  const resetToDefaults = () => {
    setCaseStudies(INITIAL_CASE_STUDIES);
    setArticles(INITIAL_ARTICLES);
    setMedia(INITIAL_MEDIA);
    setSeoSettings(INITIAL_SEO_SETTINGS);
    setSiteSettings(INITIAL_SITE_SETTINGS);
    setInquiries(INITIAL_INQUIRIES);
  };

  return (
    <AppContext.Provider
      value={{
        currentRoute,
        navigateTo,
        caseStudies,
        articles,
        ventures,
        media,
        seoSettings,
        siteSettings,
        inquiries,
        addCaseStudy,
        updateCaseStudy,
        deleteCaseStudy,
        addArticle,
        updateArticle,
        deleteArticle,
        addMediaItem,
        deleteMediaItem,
        updateSEOSettings,
        updateSiteSettings,
        submitContactForm,
        updateInquiryStatus,
        deleteInquiry,
        currentUser,
        loginAdmin,
        logoutAdmin,
        isLoginModalOpen,
        setIsLoginModalOpen,
        resetToDefaults
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
