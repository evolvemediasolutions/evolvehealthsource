import React from 'react';

export default function MarketingIllustration({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* SVG Canvas */}
      <svg
        viewBox="0 0 240 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_8px_24px_rgba(56,189,248,0.08)]"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="mkt-card-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="mkt-chart-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="mkt-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="mkt-accent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          
          <filter id="mkt-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Browser / Dashboard Frame Mockup */}
        <rect x="10" y="10" width="220" height="110" rx="16" fill="url(#mkt-card-bg)" stroke="#e2e8f0" strokeWidth="1.5" />
        
        {/* Browser Dots */}
        <circle cx="26" cy="22" r="3" fill="#ef4444" />
        <circle cx="36" cy="22" r="3" fill="#f59e0b" />
        <circle cx="46" cy="22" r="3" fill="#10b981" />
        
        {/* Browser Header Bar */}
        <line x1="58" y1="22" x2="180" y2="22" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
        
        {/* Dashboard Grid Lines */}
        <line x1="25" y1="45" x2="215" y2="45" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="25" y1="70" x2="215" y2="70" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="25" y1="95" x2="215" y2="95" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* SEO Growth Area Chart */}
        <path
          d="M 25 105 Q 60 90 90 75 T 150 65 T 215 35 L 215 105 Z"
          fill="url(#mkt-chart-grad)"
        />
        
        {/* Dynamic Growth Trend Line */}
        <path
          d="M 25 105 Q 60 90 90 75 T 150 65 T 215 35"
          fill="none"
          stroke="url(#mkt-line-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Glowing Patient Growth Nodes */}
        <circle cx="90" cy="75" r="4.5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="150" cy="65" r="4.5" fill="#0ea5e9" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="215" cy="35" r="5.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" filter="url(#mkt-glow)" />

        {/* Growth Stats Card (Overlay) */}
        <g transform="translate(130, 70)" filter="url(#mkt-glow)">
          <rect x="0" y="0" width="75" height="32" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          {/* Tiny medical cross inside stats card */}
          <path d="M 12 12 H 18 M 15 9 V 15" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
          <text x="25" y="16" fill="#1e293b" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Patients</text>
          <text x="25" y="25" fill="#10b981" fontSize="7" fontWeight="bold" fontFamily="sans-serif">+142% MoM</text>
        </g>

        {/* Floating Sparkles & Marketing Indicators */}
        {/* Target bubble */}
        <circle cx="50" cy="60" r="12" fill="#e0f2fe" opacity="0.7" />
        <path d="M46 60 A4 4 0 0 1 54 60 A4 4 0 0 1 46 60" stroke="#0284c7" strokeWidth="1.5" fill="none" />
        <circle cx="50" cy="60" r="2" fill="#0284c7" />

        {/* Sparkle */}
        <path
          d="M 100 35 L 102 39 L 106 40 L 102 41 L 100 45 L 98 41 L 94 40 L 98 39 Z"
          fill="#f59e0b"
          opacity="0.9"
        />
        <path
          d="M 35 75 L 36 78 L 39 79 L 36 80 L 35 83 L 34 80 L 31 79 L 34 78 Z"
          fill="#38bdf8"
          opacity="0.8"
        />
      </svg>

      {/* Floating Animated Badge */}
      <div className="absolute top-4 right-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm shadow-sm flex items-center gap-1 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        SEO active
      </div>
    </div>
  );
}
