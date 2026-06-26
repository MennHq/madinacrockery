import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Phone, MessageSquare, User, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile } from './types';
import Lenis from 'lenis';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

// SEO & Metadata Map for Routing and Canonical Tags
const METADATA: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Madina Crockery Store | Best & Oldest Wholesale Shop in Sargodha',
    description: 'Established in 1949, Madina Crockery Store is Sargodha’s oldest & best wholesale shop for high-quality dinner sets, steel crockery, and wedding package jahez items at Karkhana Bazaar.'
  },
  '/about': {
    title: 'About Us | Madina Crockery Store Sargodha',
    description: 'Serving generations since 1949, read the history of Madina Crockery Store, the trusted name for wholesale kitchenware and crockery in Sargodha.'
  },
  '/contact': {
    title: 'Contact Us | Madina Crockery Store Sargodha',
    description: 'Find address, map, contact numbers, and opening hours for Madina Crockery Store in Karkhana Bazaar, Sargodha. Get wholesale quotes today.'
  },
  '/blog': {
    title: 'Crockery Blog & Buying Guide | Madina Crockery Store',
    description: 'Expert tips on identifying high-quality plates, choosing ceramic vs porcelain, selecting wedding jahez packages, and maintaining premium utensils.'
  },
  '/faq': {
    title: 'Frequently Asked Questions | Madina Crockery Store',
    description: 'Answers to common questions about buying crockery wholesale, custom wedding jahez packages, secure packing, and store history in Sargodha.'
  }
};

function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const search = location.search;
    
    // Default meta values
    let title = 'Madina Crockery Store | Best & Oldest Wholesale Shop in Sargodha';
    let description = 'Established in 1949, Madina Crockery Store is Sargodha’s oldest & best wholesale shop for high-quality dinner sets, steel crockery, and wedding package jahez items.';

    // Look up static route info
    if (METADATA[path]) {
      title = METADATA[path].title;
      description = METADATA[path].description;
    }

    // For blog posts with query params (e.g., ?post=best-crockery-shop-sargodha)
    if (path === '/blog' && search) {
      const params = new URLSearchParams(search);
      const postSlug = params.get('post');
      if (postSlug) {
        // Humanize the slug for title
        const humanized = postSlug
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        title = `${humanized} | Crockery Blog & Guide | Madina Crockery Store`;
        description = `Read our comprehensive guide on ${humanized.toLowerCase()} from Madina Crockery Store. Expert tips and wholesale recommendations since 1949.`;
      }
    }

    // Update document title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    // Update OpenGraph Description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update OpenGraph URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const fullUrl = `https://madinacrockery.vercel.app${path}${search}`;
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);

    // Dynamic Canonical Link Update
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
  }, [location]);

  return null;
}

function AnimatedRoutes({ user, login }: { user: UserProfile | null, login: (email: string) => void }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
        <Route path="/madinacrockerymanage/*" element={<PageWrapper><Admin user={user} onLogin={login} /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Check for local session
    const savedUser = localStorage.getItem('madina_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse saved user', e);
      }
    }
    setLoading(false);

    return () => {
      lenis.destroy();
    };
  }, []);

  const login = (email: string) => {
    const mockUser: UserProfile = {
      uid: 'mock-' + Date.now(),
      email: email,
      role: email === 'pro679715@gmail.com' ? 'admin' : 'customer',
      displayName: email.split('@')[0]
    };
    setUser(mockUser);
    localStorage.setItem('madina_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('madina_user');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-blue"></div>
      </div>
    );
  }

  return (
    <Router>
      <SEOManager />
      <div className="min-h-screen flex flex-col bg-primary font-sans text-primary">
        <Navbar user={user} onLogin={login} onLogout={logout} />
        <main className="flex-grow">
          <AnimatedRoutes user={user} login={login} />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
