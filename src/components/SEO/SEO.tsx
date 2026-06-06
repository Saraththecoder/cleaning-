import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const serviceAreas = "Madhapur, Gachibowli, Hitech City, Kondapur, Kukatpally, Jubilee Hills, Manikonda, Miyapur, Hyderabad";
  const finalKeywords = keywords ? `${keywords}, ${serviceAreas}` : serviceAreas;

  return (
    <Helmet>
      <title>{`${title} | ULTRA DEEP CLEAN EXPERTS`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta property="og:title" content={`${title} | ULTRA DEEP CLEAN EXPERTS`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;
