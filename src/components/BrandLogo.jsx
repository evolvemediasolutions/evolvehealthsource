import React from 'react';

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img
        src="/images/RCM/EvolveRCM_Logo.png"
        alt="Evolve Health Source Logo"
        className="h-32 sm:h-40 w-auto object-contain -my-6 sm:-my-8"
      />
    </div>
  );
}
