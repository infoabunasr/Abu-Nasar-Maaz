export type CategoryType =
  | 'All'
  | 'QA'
  | 'Web'
  | 'Mobile'
  | 'API'
  | 'Game'
  | 'XR'
  | 'AI'
  | 'Project Delivery'
  | 'Quality Engineering'
  | 'Software Testing'
  | 'Product Development'
  | 'Founder Lessons';

export type CaseStudyProjectType =
  | 'Independent Case Study'
  | 'Prototype'
  | 'Client Project'
  | 'Portfolio Project'
  | 'In Development';

export interface DefectExample {
  title: string;
  description: string;
  severity: 'Critical' | 'Major' | 'Minor' | 'Cosmetic';
  impact: string;
  resolution?: string;
}

export interface TestScenarioItem {
  scenario: string;
  details: string;
  type?: string;
  status?: 'Passed' | 'Fixed' | 'Documented' | 'Monitored';
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: 'Web' | 'Mobile' | 'AI' | 'Game' | 'XR' | 'Project Delivery' | 'QA' | 'API';
  projectType: CaseStudyProjectType;
  shortSummary: string;
  executiveSummary: string;
  problem: string;
  objectives: string[];
  scope: string[];
  approach: string[];
  testScenarios: TestScenarioItem[];
  findings: string[];
  defectExamples: DefectExample[];
  recommendations: string[];
  tools: string[];
  platform: string;
  status: string;
  lessonsLearned: string[];
  featuredImage: string;
  relatedArticlesSlugs: string[];
  relatedCaseStudySlugs: string[];
  published: boolean;
  createdAt: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category:
    | 'Quality Engineering'
    | 'Software Testing'
    | 'AI Testing'
    | 'Technical Delivery'
    | 'Game QA'
    | 'XR'
    | 'Product Development'
    | 'Founder Lessons';
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  featuredImage: string;
  content: string; // Structured Markdown / HTML paragraphs
  tags: string[];
  published: boolean;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  ogImage?: string;
  relatedCaseStudiesSlugs: string[];
  relatedArticlesSlugs: string[];
}

export interface Venture {
  id: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  url: string;
  badge: string;
  highlights: string[];
  image: string;
  focusAreas: string[];
  status: string;
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  category: 'Profile' | 'Case Studies' | 'Blog' | 'XR' | 'General' | 'SEO';
  altText: string;
  size: string;
  uploadedAt: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  projectType: string;
  message: string;
  submittedAt: string;
  status: 'New' | 'Reviewed' | 'Archived';
}

export interface SEOSettings {
  siteTitle: string;
  siteDescription: string;
  defaultOGImage: string;
  keywords: string[];
  robotsPolicy: string;
  canonicalDomain: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  email: string;
  linkedInUrl: string;
  innovifyXrUrl: string;
  locafyroUrl: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroParagraph: string;
  secondarySentence: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'super_admin';
  name: string;
}
