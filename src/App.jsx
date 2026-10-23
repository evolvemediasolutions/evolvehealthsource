import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation, Navigate, useParams } from 'react-router-dom';
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
import ThankYou from './rcm/pages/ThankYou';
import Privacy from './rcm/pages/Privacy';
import Terms from './rcm/pages/Terms';
import NotFound from './rcm/pages/NotFound';
import { initLandingTracking } from './utils/tracking';

// Redirect legacy /rcm/insights/:slug to canonical /insights/:slug
function RcmBlogRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/insights/${slug}`} replace />;
}

// Scroll to hash and top anchor helper + landing tracking
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // Capture and persist UTMs and referrer from landing URL in sessionStorage
    initLandingTracking();

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
        
        {/* 301-redirect /rcm/ to canonical root routes */}
        <Route path="/rcm" element={<Navigate to="/" replace />} />
        <Route path="/rcm/home" element={<Navigate to="/" replace />} />
        <Route path="/rcm/about" element={<Navigate to="/about" replace />} />
        <Route path="/rcm/solutions" element={<Navigate to="/solutions" replace />} />
        <Route path="/rcm/services" element={<Navigate to="/solutions" replace />} />
        <Route path="/rcm/insights" element={<Navigate to="/insights" replace />} />
        <Route path="/rcm/insights/:slug" element={<RcmBlogRedirect />} />
        <Route path="/rcm/careers" element={<Navigate to="/careers" replace />} />
        <Route path="/rcm/contact" element={<Navigate to="/contact" replace />} />
        <Route path="/rcm/contact/thank-you" element={<Navigate to="/contact/thank-you" replace />} />
        <Route path="/rcm/*" element={<Navigate to="/" replace />} />

        {/* RCM Dedicated Sub-application at root level */}
        <Route path="/" element={<RcmLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="about" element={<About />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="services" element={<Solutions />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<BlogDetails />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/thank-you" element={<ThankYou />} />
          <Route path="thank-you" element={<Navigate to="/contact/thank-you" replace />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
