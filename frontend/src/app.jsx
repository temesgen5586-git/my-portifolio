import { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import BackToTop from '@/components/layout/BackToTop';
import PageTransition from '@/components/layout/PageTransition';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Experience from '@/pages/Experience';
import Projects from '@/pages/Projects';
// import Testimonials from '@/pages/Testimonials';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />

      <Suspense fallback={<div className="pt-32 text-center text-ink-soft">Loading…</div>}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            {/* <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} /> */}
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <Footer />
      <BackToTop />
    </div>
  );
}