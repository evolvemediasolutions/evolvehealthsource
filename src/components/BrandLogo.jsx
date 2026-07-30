import React from 'react';

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img
        src="/LOGO1.png"
        alt="Evolve Health Source Logo"
        className="h-12 sm:h-16 w-auto object-contain"
      />
    </div>
  );
}
