import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  articleData?: {
    headline: string;
    datePublished: string;
    authorName: string;
    description: string;
  };
  breadcrumbs?: { name: string; item: string }[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  ogImage,
  articleData,
  breadcrumbs
}) => {
  const { seoSettings, siteSettings } = useApp();

  const activeTitle = title
    ? `${title} | Abu Naser Maaz`
    : seoSettings.siteTitle;
  const activeDesc = description || seoSettings.siteDescription;
  const activeImage = ogImage || seoSettings.defaultOGImage;

  useEffect(() => {
    // Update Document Title
    document.title = activeTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', activeDesc);

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', activeTitle);

    // Update OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', activeDesc);

    // Insert or update structured data (JSON-LD)
    const existingScript = document.getElementById('schema-structured-data');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'schema-structured-data';
    script.type = 'application/ld+json';

    const schemas: any[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Abu Naser Maaz',
        jobTitle: 'Quality Engineering & Technical Delivery Specialist',
        description: siteSettings.heroParagraph,
        url: 'https://abunasarmaaz.com',
        sameAs: [
          'https://linkedin.com/in/abunasarmaaz/',
          'https://innovifyxr.com'
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Innovify XR',
          url: 'https://innovifyxr.com'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Abu Naser Maaz',
        url: 'https://abunasarmaaz.com',
        description: seoSettings.siteDescription
      }
    ];

    if (articleData) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: articleData.headline,
        datePublished: articleData.datePublished,
        author: {
          '@type': 'Person',
          name: articleData.authorName
        },
        description: articleData.description,
        publisher: {
          '@type': 'Person',
          name: 'Abu Naser Maaz'
        }
      });
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.item
        }))
      });
    }

    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('schema-structured-data');
      if (el) el.remove();
    };
  }, [activeTitle, activeDesc, activeImage, articleData, breadcrumbs, seoSettings, siteSettings]);

  return null;
};
