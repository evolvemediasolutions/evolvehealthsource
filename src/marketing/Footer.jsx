import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Phone, MessageSquare, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const servicesLinks = [
    'Brand Positioning',
    'Website & Conversion',
    'Google & Meta Ads',
    'Reputation & Reviews',
    'Local SEO Chennai'
  ];

  const companyLinks = [
    'About',
    'Case Studies',
    'Testimonials',
    'Contact',
    'Insights'
  ];

  return (
    <footer className="bg-[#031D3F] text-slate-400 text-left pt-20 pb-8 border-t border-blue-950 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Column 1 - Brand Info & Newsletter */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <img 
              src="/images/MARKETING/logo.png" 
              alt="ClinicBoost Logo" 
              className="h-10 w-auto brightness-0 invert" 
            />
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed select-all">
              Helping healthcare providers across the United States attract more patients through strategic healthcare marketing, local SEO, high-converting websites, and data-driven growth solutions.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="space-y-3.5 max-w-xs text-left">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                GET THE US DOCTOR GROWTH LETTER
              </span>
              <div className="space-y-3 select-all">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[#02142d] border border-blue-900/50 rounded-xl text-sm placeholder-slate-450 font-medium text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="w-full py-3 bg-[#8CD5EC] hover:bg-[#72c2db] text-[#031D3F] rounded-full font-bold text-sm tracking-wide transition-all text-center cursor-pointer">
                  Subscribe — it's free
                </button>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Youtube, href: '#' }
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="w-9 h-9 rounded-full border border-blue-900/40 bg-[#02142d]/60 hover:bg-[#8CD5EC] hover:text-[#031D3F] text-white flex items-center justify-center transition-colors"
                  >
                    <IconComponent className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columns 2, 3, 4 - Spaced Flex Grid Wrapper */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 lg:pl-20">
            
            {/* Column 2 - Services */}
            <div className="space-y-4 text-left">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 block">
                SERVICES
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm font-semibold text-slate-350 select-all">
                {servicesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div className="space-y-4 text-left">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 block">
                COMPANY
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm font-semibold text-slate-350 select-all">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Talk to Us */}
            <div className="space-y-4 text-left">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 block">
                TALK TO US
              </h4>
              <ul className="space-y-4 text-xs sm:text-sm font-semibold text-slate-350 select-all font-sans">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <a href="tel:+919025481909" className="hover:text-white transition-colors">
                    +91 90254 81909
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <a 
                    href="https://wa.me/919025481909" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <a href="mailto:chitra@myclinicboost.com" className="hover:text-white transition-colors">
                    chitra@myclinicboost.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 animate-pulse" />
                  <span>US</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Footer Separator */}
        <div className="border-t border-blue-950 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] sm:text-xs font-medium text-slate-400 select-all">
          <span>
            © {new Date().getFullYear()} ClinicBoost. The Predictable Patient Revenue System. All rights reserved.
          </span>
          <div className="flex gap-6 font-semibold">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Built in Chennai</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
