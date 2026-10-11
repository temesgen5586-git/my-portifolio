// import { useEffect, useState } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { Menu, X, Sparkles } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import ThemeToggle from '@/components/ui/ThemeToggle';

// const links = [
//   { to: '/', label: 'Home' },
//   { to: '/about', label: 'About' },
//   { to: '/experience', label: 'Experience' },
//   { to: '/skills', label: 'Skills' },
//   { to: '/projects', label: 'Projects' },
//   { to: '/testimonials', label: 'Testimonials' },
//   { to: '/contact', label: 'Contact' },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     setOpen(false);
//   }, [pathname]);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
//         className={`mx-auto max-w-6xl flex items-center justify-between gap-4
//                     px-4 md:px-6 py-3 rounded-full transition-all duration-500
//                     ${scrolled ? 'glass-strong shadow-lg shadow-teal/5' : 'glass'}`}
//       >
//         {/* Brand */}
//         <Link to="/" className="flex items-center gap-2 shrink-0 group">
//           <motion.div
//             whileHover={{ rotate: 180 }}
//             transition={{ duration: 0.5 }}
//             className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-soft to-teal
//                        flex items-center justify-center text-base-deep"
//           >
//             <Sparkles size={16} />
//           </motion.div>
//           <span className="hidden sm:block font-bold text-ink tracking-tight">Portfolio</span>
//         </Link>

//         {/* Desktop links */}
//         <ul className="hidden lg:flex items-center gap-1">
//           {links.map((l) => (
//             <li key={l.to}>
//               <NavLink
//                 to={l.to}
//                 end={l.to === '/'}
//                 className={({ isActive }) =>
//                   `relative px-3 xl:px-4 py-2 text-sm font-medium rounded-full
//                    transition-all duration-300
//                    ${isActive
//                      ? 'bg-teal/15 text-teal-soft'
//                      : 'text-ink-soft hover:text-ink hover:bg-surface'}`
//                 }
//               >
//                 {l.label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Right side */}
//         <div className="flex items-center gap-2">
//           <ThemeToggle />

//           <Link
//             to="/contact"
//             className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full
//                        border border-edge text-ink text-sm font-semibold
//                        hover:bg-surface hover:border-edge-strong
//                        transition-all duration-300"
//           >
//             Sign up
//           </Link>

//           <button
//             onClick={() => setOpen((v) => !v)}
//             className="lg:hidden w-10 h-10 grid place-items-center rounded-full
//                        border border-edge text-ink hover:bg-surface
//                        transition-all duration-300"
//             aria-label="Toggle menu"
//             aria-expanded={open}
//           >
//             {open ? <X size={18} /> : <Menu size={18} />}
//           </button>
//         </div>
//       </motion.nav>

//       {/* Mobile drawer */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden mx-auto max-w-6xl mt-2 glass-strong p-4 rounded-3xl"
//           >
//             <ul className="grid gap-1">
//               {links.map((l, i) => (
//                 <motion.li
//                   key={l.to}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.05 }}
//                 >
//                   <NavLink
//                     to={l.to}
//                     end={l.to === '/'}
//                     onClick={() => setOpen(false)}
//                     className={({ isActive }) =>
//                       `block px-4 py-3 rounded-2xl font-medium
//                        transition-all duration-300
//                        ${isActive
//                          ? 'bg-teal/15 text-teal-soft'
//                          : 'text-ink-soft hover:bg-surface'}`
//                     }
//                   >
//                     {l.label}
//                   </NavLink>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }




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
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 20);
      setHidden(y > 120 && y > lastY); // scrolling down past 120px → hide
      lastY = y;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between gap-4
                    px-4 md:px-6 py-3 rounded-full transition-all duration-500
                    ${scrolled ? 'glass-strong shadow-lg shadow-teal/5' : 'glass'}`}
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
          <span className="hidden sm:block font-bold text-ink tracking-tight">Portfolio</span>
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

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                       border border-edge text-ink text-sm font-semibold
                       hover:bg-surface hover:border-edge-strong
                       transition-all duration-300"
          >
            Sign up
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full
                       border border-edge text-ink hover:bg-surface
                       transition-all duration-300"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mx-auto max-w-6xl mt-2 glass-strong p-4 rounded-3xl"
          >
            <ul className="grid gap-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-2xl font-medium
                       transition-all duration-300
                       ${isActive
                         ? 'bg-teal/15 text-teal-soft'
                         : 'text-ink-soft hover:bg-surface'}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}