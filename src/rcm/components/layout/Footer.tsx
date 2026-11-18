import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/evolvehealthsource/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40 hover:text-[#0A66C2] transition-all duration-300 text-slate-300"
              >
                <Linkedin className="h-5 w-5" />
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
                  <li><Link to="/solutions?tab=1#solutions" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Medical Coding</Link></li>
                  <li><Link to="/solutions?tab=2#solutions" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Medical Billing</Link></li>
                  <li><Link to="/solutions?tab=3#solutions" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Accounts Receivable</Link></li>
                  <li><Link to="/solutions?tab=4#solutions" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm">Denial Management</Link></li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">7643, Gate Parkway Suite 982<br />Jacksonville,FL 32256, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:+14243025536" className="text-slate-400 hover:text-white transition-colors text-sm">
                  +1 (424) 302-5536
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 text-slate-400 text-sm">
                  {isMarketing ? (
                    "hello@myclinicboost.com"
                  ) : (
                    <>
                      <a href="mailto:rory@evolvehealthsource.com" className="hover:text-white transition-colors">
                        rory@evolvehealthsource.com
                      </a>
                      <a href="mailto:connect@evolvehealthsource.com" className="hover:text-white transition-colors">
                        connect@evolvehealthsource.com
                      </a>
                    </>
                  )}
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} {isMarketing ? "MyClinicBoost" : "Evolve Health Source"}. All rights reserved.
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
