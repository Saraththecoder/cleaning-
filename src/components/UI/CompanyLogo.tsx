import React from 'react';

const CompanyLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const hasHeight = className.split(' ').some(c => c.startsWith('h-') || c.startsWith('md:h-'));
  const heightClass = hasHeight ? '' : 'h-12 md:h-14';

  return (
    <div className="flex items-center gap-3">
      <img 
        src="/logo.jpeg"
        alt="ULTRA DEEP CLEAN EXPERTS Logo" 
        className={`${heightClass} object-contain rounded-lg ${className}`} 
      />
      <div className="flex flex-col text-left">
        <span className="font-heading font-black text-sm sm:text-base leading-none text-slate-800 tracking-tight">
          Ultra Deep
        </span>
        <span className="font-heading font-black text-sm sm:text-base leading-none text-primary tracking-tight mt-0.5">
          Clean Experts
        </span>
      </div>
    </div>
  );
};

export default CompanyLogo;

