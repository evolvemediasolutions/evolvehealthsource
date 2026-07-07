import React from 'react';

export default function RcmIllustration({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* SVG Canvas */}
      <svg
        viewBox="0 0 240 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_8px_24px_rgba(59,130,246,0.08)]"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="rcm-card-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="rcm-gauge-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="rcm-accent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          
          <filter id="rcm-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Browser / Dashboard Frame Mockup */}
        <rect x="10" y="10" width="220" height="110" rx="16" fill="url(#rcm-card-bg)" stroke="#e2e8f0" strokeWidth="1.5" />
        
        {/* Browser Dots */}
        <circle cx="26" cy="22" r="3" fill="#ef4444" />
        <circle cx="36" cy="22" r="3" fill="#f59e0b" />
        <circle cx="46" cy="22" r="3" fill="#10b981" />
        
        {/* Browser Header Bar */}
        <line x1="58" y1="22" x2="180" y2="22" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
        
        {/* Left Side: Circular Claims Optimization Gauge */}
        <circle cx="65" cy="72" r="30" fill="none" stroke="#e2e8f0" strokeWidth="6" />
        <path
          d="M 65 42 A 30 30 0 1 1 37 83"
          fill="none"
          stroke="url(#rcm-gauge-grad)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        
        {/* Center of Gauge Text */}
        <text x="65" y="70" fill="#1e293b" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">98.4%</text>
        <text x="65" y="80" fill="#64748b" fontSize="6" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Clean Claims</text>
        
        {/* Right Side: Medical Invoice Mockup */}
        <g transform="translate(125, 42)">
          <rect x="0" y="0" width="85" height="60" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          {/* Invoice Header lines */}
          <rect x="8" y="8" width="30" height="4" rx="2" fill="#cbd5e1" />
          <rect x="8" y="16" width="50" height="3" rx="1.5" fill="#e2e8f0" />
          
          {/* Invoice Item Lines */}
          <line x1="8" y1="26" x2="77" y2="26" stroke="#f1f5f9" strokeWidth="2" />
          <line x1="8" y1="34" x2="77" y2="34" stroke="#f1f5f9" strokeWidth="2" />
          <line x1="8" y1="42" x2="77" y2="42" stroke="#f1f5f9" strokeWidth="2" />
          
          {/* Sparkly item indicators */}
          <circle cx="12" cy="26" r="1.5" fill="#3b82f6" />
          <circle cx="12" cy="34" r="1.5" fill="#818cf8" />
          <circle cx="12" cy="42" r="1.5" fill="#10b981" />
          
          {/* Paid Stamp Indicator */}
          <g transform="translate(48, 28)" opacity="0.9">
            <rect x="0" y="0" width="29" height="12" rx="3" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
            <text x="14.5" y="8.5" fill="#15803d" fontSize="6" fontWeight="extrabold" fontFamily="sans-serif" textAnchor="middle">PAID</text>
          </g>
          
          {/* Price Label */}
          <rect x="8" y="50" width="20" height="4" rx="2" fill="#94a3b8" />
          <rect x="62" y="49" width="15" height="5" rx="2.5" fill="#1e293b" />
        </g>

        {/* Security Shield & Denial Prevention (Overlay) */}
        <g transform="translate(100, 72)" filter="url(#rcm-glow)">
          <circle cx="16" cy="16" r="16" fill="url(#rcm-accent-grad)" />
          {/* Shield Icon in SVG */}
          <path
            d="M 16 9 L 22 11.5 V 16.5 C 22 20.5 19.5 22.8 16 24 C 12.5 22.8 10 20.5 10 16.5 V 11.5 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Checkmark inside Shield */}
          <path
            d="M 13.5 16.5 L 15 18 L 18.5 14.5"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Floating elements */}
        {/* Floating Sparkle */}
        <path
          d="M 115 28 L 117 31 L 120 32 L 117 33 L 115 36 L 113 33 L 110 32 L 113 31 Z"
          fill="#c084fc"
          opacity="0.8"
        />
        <path
          d="M 28 85 L 29 88 L 32 89 L 29 90 L 28 93 L 27 90 L 24 89 L 27 88 Z"
          fill="#3b82f6"
          opacity="0.6"
        />
      </svg>

      {/* Floating Animated Badge */}
      <div className="absolute top-4 right-6 bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm shadow-sm flex items-center gap-1 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
        Secured
      </div>
    </div>
  );
}
