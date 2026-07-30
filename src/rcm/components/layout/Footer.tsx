import { Link } from 'react-router-dom';
import { Activity, Mail, MapPin, Phone, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const isMarketing = window.location.pathname.startsWith('/marketing');

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-24 pb-12 overflow-hidden border-t border-slate-800">
      {/* Decorative blurred background orb */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-primary-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

          <div className="lg:col-span-2">
            <Link to={isMarketing ? "/marketing/home" : "/"} className="flex items-center gap-3 mb-6 group select-none">
              {isMarketing ? (
                <>
                  <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                    M
                  </div>
                  <span className="font-extrabold text-xl tracking-tight text-white">
                    MyClinic<span className="text-teal-500 font-normal">Boost</span>
                  </span>
                </>
              ) : (
                <img
                  src="/LOGO1.png"
                  alt="Evolve RCM"
                  className="h-20 sm:h-26 w-auto object-contain"
                />
              )}
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              {isMarketing
                ? "Helping healthcare providers grow through professional website development, healthcare SEO, clinical branding, and digital marketing."
                : "Transforming healthcare revenue through intelligent, technology-driven Revenue Cycle Management solutions for modern healthcare providers."}
            </p>

            {/* Newsletter section */}
            <form onSubmit={handleSubscribe} className="max-w-sm mb-8">
              <h4 className="text-white text-sm font-bold mb-3 uppercase tracking-wider">Stay Updated</h4>
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  required
                  className="w-full bg-slate-900 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 bg-gradient-to-r from-[#2563eb] to-[#10b981] hover:opacity-90 text-white rounded-full p-2 transition-all"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-accent text-xs mt-2 font-medium">Thank you for subscribing!</p>
              )}
            </form>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 hover:text-white transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 hover:text-white transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 hover:text-white transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Careers</Link></li>
              <li><Link to="/insights" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Insights</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Solutions</h3>
            <ul className="space-y-4">
              {isMarketing ? (
                <>
                  <li><Link to="/marketing/home#services" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Website Development</Link></li>
                  <li><Link to="/marketing/home#services" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Healthcare SEO</Link></li>
                  <li><Link to="/marketing/home#services" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Digital Advertising</Link></li>
                  <li><Link to="/marketing/home#services" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Clinical Branding</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/solutions" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Medical Coding</Link></li>
                  <li><Link to="/solutions" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Medical Billing</Link></li>
                  <li><Link to="/solutions" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Accounts Receivable</Link></li>
                  <li><Link to="/solutions" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Denial Management</Link></li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">123 Healthcare Blvd, Suite 500<br />Chicago, IL 60601</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-slate-400 text-sm">1-800-555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-slate-400 text-sm">
                  {isMarketing ? "hello@myclinicboost.com" : "chitra@evolvehealthsource.com"}
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} {isMarketing ? "MyClinicBoost" : "Evolve Medical Solutions"}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
