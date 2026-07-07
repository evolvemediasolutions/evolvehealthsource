import React from 'react';

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img
        src="/images/MARKETING/evolve-logo-mark.webp"
        alt="Evolve Health Source Logo"
        className="h-10 sm:h-12 w-auto object-contain"
      />
    </div>
  );
}
