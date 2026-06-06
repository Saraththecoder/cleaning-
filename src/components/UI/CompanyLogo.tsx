import React from 'react';

const CompanyLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <img 
      src="/logo.jpeg" 
      alt="ULTRA DEEP CLEAN EXPERTS Logo" 
      className={`h-12 object-contain ${className}`} 
    />
  );
};

export default CompanyLogo;

