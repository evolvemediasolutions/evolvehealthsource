import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Gateway from './Gateway';
import MarketingHome from './MarketingHome';

// RCM Site Pages & Components
import RcmNavbar from './rcm/components/layout/Navbar';
import RcmFooter from './rcm/components/layout/Footer';
import Home from './rcm/pages/Home';
import About from './rcm/pages/About';
import Solutions from './rcm/pages/Solutions';
import Insights from './rcm/pages/Insights';
import BlogDetails from './rcm/pages/BlogDetails';
import Careers from './rcm/pages/Careers';
import Contact from './rcm/pages/Contact';
import NotFound from './rcm/pages/NotFound';

// Scroll to hash and top anchor helper
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Split by '?' to extract only the ID part before any query parameters
      const hashId = location.hash.split('?')[0];
      const id = hashId.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, location.search]);

  return null;
}

// Layout wrapper for all pages under the /rcm route namespace
function RcmLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-rcm-sans antialiased">
      <RcmNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <RcmFooter />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        {/* Existing Marketing Portal */}
        <Route path="/marketing/home" element={<MarketingHome />} />
        <Route path="/myclinicboot" element={<MarketingHome />} />
        <Route path="/myclinicboost" element={<MarketingHome />} />
        
        {/* Support old /rcm prefix routes */}
        <Route path="/rcm" element={<RcmLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="services" element={<Solutions />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<BlogDetails />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* RCM Dedicated Sub-application at root level */}
        <Route path="/" element={<RcmLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="services" element={<Solutions />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<BlogDetails />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
