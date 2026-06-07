import React from 'react';

const CompanyLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const hasHeight = className.split(' ').some(c => c.startsWith('h-') || c.startsWith('md:h-'));
  const heightClass = hasHeight ? '' : 'h-10 md:h-12';

  return (
    <img 
      src="/logo.jpeg"
      alt="ULTRA DEEP CLEAN EXPERTS Logo" 
      className={`${heightClass} object-contain ${className}`} 
    />
  );
};

export default CompanyLogo;

