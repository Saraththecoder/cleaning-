import React from 'react';

const CompanyLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <img 
      src="/logo192.png"
      alt="ULTRA DEEP CLEAN EXPERTS Logo" 
      className={`h-20 md:h-24 object-contain ${className}`} 
    />
  );
};

export default CompanyLogo;

