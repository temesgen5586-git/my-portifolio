import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { useMediaQuery } from "./hooks/useMediaQuery";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import PageTransition from "@/components/layout/PageTransition";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

// Global 3D particle layer — lazy-loaded once, stays mounted across routes
const FloatingParticles = lazy(
  () => import("@/components/three-d/FloatingParticles")
);

export default function App() {
  const location = useLocation();
  const prefersReduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const transitionEnabled = !prefersReduced;
  const isHome = location.pathname === "/";

  return (
    <>
      {/* === GLOBAL 3D PARTICLES (behind everything) === */}
      <Suspense fallback={null}>
        <FloatingParticles
          fixed
          count={isMobile ? 1500 : 4000}
          opacity={isHome ? 1 : 0.35}
          primaryColor="#7dd3fc"
          secondaryColor="#a78bfa"
        />
      </Suspense>

      <ScrollProgress />
      <Navbar />

      <main
        className={isMobile ? "mobile-layout" : undefined}
        style={{ position: "relative", zIndex: 1 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition enabled={transitionEnabled}>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition enabled={transitionEnabled}>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition enabled={transitionEnabled}>
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/skills"
              element={
                <PageTransition enabled={transitionEnabled}>
                  <Skills />
                </PageTransition>
              }
            />
            <Route
              path="/experience"
              element={
                <PageTransition enabled={transitionEnabled}>
                  <Experience />
                </PageTransition>
              }
            />
            <Route
              path="/testimonials"
              element={
                <PageTransition enabled={transitionEnabled}>
                  <Testimonials />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition enabled={transitionEnabled}>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition enabled={transitionEnabled}>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer style={{ position: "relative", zIndex: 1 }} />
      <BackToTop />
    </>
  );
}