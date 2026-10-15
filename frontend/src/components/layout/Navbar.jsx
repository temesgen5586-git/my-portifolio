import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@/components/ui/ThemeToggle';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  // { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* ============ FIXED NAVBAR ============ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-0"
        style={{ position: 'fixed', marginTop: 0, top: 0 }}
      >
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
       className={`mx-auto max-w-6xl flex items-center justify-between gap-4
  px-4 md:px-6 py-3 rounded-full transition-all duration-500
  ${scrolled ? 'navbar-bg-scrolled' : 'navbar-bg'}`}
        >
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-soft to-teal
                         flex items-center justify-center text-base-deep"
            >
              <Sparkles size={16} />
            </motion.div>
            <span className="hidden sm:block font-bold text-ink tracking-tight">
                TEMESGEN
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `relative px-3 xl:px-4 py-2 text-sm font-medium rounded-full
                     transition-all duration-300
                     ${isActive
                       ? 'bg-teal/15 text-teal-soft'
                       : 'text-ink-soft hover:text-ink hover:bg-surface'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
{/* 
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                         border border-edge text-ink text-sm font-semibold
                         hover:bg-surface hover:border-edge-strong
                         transition-all duration-300"
            >
              Sign up
            </Link> */}

            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden w-10 h-10 grid place-items-center rounded-full
                         border border-edge text-ink hover:bg-surface
                         transition-all duration-300"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* ============ MOBILE CORNER MENU (fixed, top-right, 10px) ============ */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="corner-menu"
            initial={{ opacity: 0, scale: 0.9, y: -10, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10, x: 20 }}
            transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
            style={{ position: 'fixed', top: '60px', right: '10px' }}
            className="fixed z-[70] w-56
           rounded-2xl
           shadow-2xl
           !border-0
           bg-base-soft/95 backdrop-blur-xl
           overflow-hidden
           lg:hidden"
            role="dialog"
            aria-modal="false"
            aria-label="Mobile navigation"
          >
            <nav className="p-2">
              <ul className="grid gap-0.5">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 + i * 0.03, duration: 0.2 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3 py-2.5 rounded-xl
                         text-sm font-medium transition-all duration-200
                         ${isActive
                           ? 'bg-teal/15 text-teal-soft'
                           : 'text-ink-soft hover:bg-surface hover:text-ink'}`
                      }
                    >
                      <span>{l.label}</span>
                      <span className="text-ink-mute text-xs opacity-60">→</span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}