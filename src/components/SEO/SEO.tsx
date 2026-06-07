import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalPath?: string;
  schema?: object | object[];
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords,
  ogTitle,
  ogDescription,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalPath,
  schema,
  noindex = false
}) => {
  const serviceAreas = "deep cleaning Hyderabad, home cleaning Hyderabad, sofa cleaning, bathroom cleaning, office cleaning, deep cleaning service";
  const finalKeywords = keywords ? `${keywords}, ${serviceAreas}` : serviceAreas;

  const siteUrl = 'https://ultradeepcleanexperts.com';
  const canonicalUrl = canonicalPath 
    ? `${siteUrl}${canonicalPath.startsWith('/') ? canonicalPath : '/' + canonicalPath}`
    : typeof window !== 'undefined'
      ? window.location.origin + window.location.pathname.replace(/\/$/, '')
      : `${siteUrl}`;

  const schemasArray = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots indexing */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />

      {/* JSON-LD Structured Data Schema */}
      {schemasArray.map((schemaItem, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
