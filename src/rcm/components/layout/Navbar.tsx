import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, Activity } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isMarketing = location.pathname.startsWith('/marketing');

  const navLinks = isMarketing
    ? [
      { name: 'Home', path: '/marketing/home' },
      { name: 'Services', path: '/marketing/home#services' },
      { name: 'Parent Portal', path: '/' },
      { name: 'Contact Us', path: '/contact' },
    ]
    : [
      { name: 'Home', path: '/' },
      {
        name: 'About Us',
        path: '/about',
        dropdown: [
          { name: 'About Evolve Medical', path: '/about' },
          { name: 'MyClinicBoost', path: '/myclinicboot' }
        ]
      },
      {
        name: 'Solutions',
        path: '/solutions',
        dropdown: [
          { name: 'Revenue Cycle Management', path: '/solutions?tab=0' },
          { name: 'Medical Coding Services', path: '/solutions?tab=1' },
          { name: 'Medical Billing & Claims', path: '/solutions?tab=2' },
          { name: 'Accounts Receivable', path: '/solutions?tab=3' },
          { name: 'Denial Prevention & Recovery', path: '/solutions?tab=4' },
        ]
      },
      {
        name: 'Insights',
        path: '/insights',
        dropdown: [
          { name: 'Blogs', path: '/insights' },
          { name: 'Industry Updates', path: '/insights?category=industry' },
          { name: 'RCM Resources', path: '/insights?category=resources' },
        ]
      },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 border-b',
        isScrolled || isMarketing
          ? 'bg-white/90 backdrop-blur-lg border-slate-200 py-1.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]'
          : 'bg-transparent border-transparent py-3'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          <Link to={isMarketing ? "/marketing/home" : "/"} className="flex items-center gap-2.5 group relative select-none">
            {isMarketing ? (
              <>
                <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform duration-300">
                  M
                </div>
                <span className={cn(
                  "font-extrabold text-2xl tracking-tight transition-colors duration-300",
                  "text-slate-900"
                )}>
                  MyClinic<span className="text-teal-600 font-medium">Boost</span>
                </span>
              </>
            ) : (
              <img
                src="/images/RCM/EvolveRCM_Logo.png"
                alt="Evolve RCM"
                className={cn(
                  "h-32 sm:h-40 w-auto object-contain transition-all duration-300 -my-7 sm:-my-10",
                  isScrolled ? "brightness-0" : ""
                )}
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "flex items-center gap-1 font-semibold text-sm transition-colors py-2 relative",
                      isScrolled || isMarketing
                        ? isActive
                          ? "text-slate-950"
                          : "text-slate-600 hover:text-slate-950"
                        : isActive
                          ? "text-white"
                          : "text-slate-300 hover:text-white"
                    )}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown className={cn(
                        "h-3.5 w-3.5 transition-transform duration-300",
                        activeDropdown === link.name ? "rotate-180 text-secondary" : "text-slate-400"
                      )} />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white dark:bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50 p-2"
                        >
                          <div className="space-y-1">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-all duration-200"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className={cn(
                "relative group overflow-hidden px-6 py-3 rounded-full font-bold text-sm text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]",
                isMarketing
                  ? "bg-gradient-to-r from-teal-600 to-emerald-600 shadow-lg shadow-teal-600/25 hover:shadow-teal-600/45"
                  : "bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25 hover:shadow-primary/45"
              )}
            >
              <span className="relative z-10">{isMarketing ? "Schedule Demo" : "Schedule Consultation"}</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-xl border transition-all duration-300 cursor-pointer",
                isScrolled || isMarketing
                  ? "bg-slate-100 border-slate-205 text-slate-900"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-2">
                  <Link
                    to={link.path}
                    className="block font-semibold text-slate-900 dark:text-white text-lg py-1"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-2 border-l border-slate-200 dark:border-white/10 ml-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-1"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-primary to-secondary text-white px-5 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-primary/20"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
