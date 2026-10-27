// // import { useMemo, useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Github, ExternalLink, Search } from 'lucide-react';
// // import SectionTitle from '@/components/ui/SectionTitle';
// // import AnimatedSection from '@/components/ui/AnimatedSection';
// // import { projects } from '@/data/projects';

// // export default function Projects() {
// //   const [query, setQuery] = useState('');

// //   const filtered = useMemo(() => {
// //     return projects.filter(
// //       (p) =>
// //         p.title.toLowerCase().includes(query.toLowerCase()) ||
// //         p.description.toLowerCase().includes(query.toLowerCase()),
// //     );
// //   }, [query]);

// //   return (<div className="pt-20 pb-10">
// //   <AnimatedSection className="max-w-6xl mx-auto px-6 text-center">
// //         <SectionTitle caps>PROJECTS</SectionTitle>
// //         <p className="section-subtitle mb-5">
// //           A collection of work spanning web, mobile, and design.
// //         </p>

// //         {/* Search bar */}
// //         <div className="max-w-md mx-auto relative mb-4 text-center">
// //           <Search
// //             size={13}
// //             className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-mute"
// //           />
// //           <input
// //             value={query}
// //             onChange={(e) => setQuery(e.target.value)}
// //             placeholder="Search projects..."
// //             className="w-full pl-8 pr-3 py-1.5 rounded-full bg-surface border border-edge
// //                        text-ink text-xs placeholder:text-ink-mute outline-none
// //                        focus:border-edge-strong transition-colors"
// //           />
// //         </div>

      

// //         {/* Grid */}
// //         <AnimatePresence mode="popLayout">
// //           {filtered.length === 0 ? (
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               className="glass-card p-8 text-center max-w-md mx-auto"
// //             >
// //               <p className="text-ink-soft mb-3 text-sm">
// //                 No projects match your search.
// //               </p>
// //               <button
// //                 onClick={() => setQuery('')}
// //                 className="btn-outline text-xs py-1.5 px-4"
// //               >
// //                 Clear Search
// //               </button>
// //             </motion.div>
// //           ) : (
// //        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center">
// //               {filtered.map((p, i) => (
// //                 <motion.article
// //                   key={p.title}
// //                   layout
// //                   initial={{ opacity: 0, y: 16 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, scale: 0.9 }}
// //                   transition={{ duration: 0.3, delay: i * 0.04 }}
// //                   whileHover={{ y: -4 }}className="glass-card p-3.5 group flex flex-col items-center text-center w-full
// //            hover:border-teal/30 hover:shadow-glow-sm
// //            transition-all duration-300"
// //                 >
// //                   {/* Cover */}
// //                   <div
// //                     className="w-full h-32 rounded-xl mb-3 relative overflow-hidden
// //                                bg-gradient-to-br from-base-soft to-base"
// //                   >
// //                     {p.image ? (
// //                       <img
// //                         src={p.image}
// //                         alt={p.title}
// //                         className="absolute inset-0 w-full h-full object-cover
// //                                    transition-transform duration-500 group-hover:scale-110"
// //                         loading="lazy"
// //                       />
// //                     ) : (
// //                       <>
// //                         <div
// //                           className="absolute inset-0 opacity-30"
// //                           style={{
// //                             backgroundImage: `radial-gradient(circle at 30% 40%, ${p.color}55, transparent 70%)`,
// //                           }}
// //                         />
// //                         <div className="absolute inset-0 grid-bg opacity-30" />
// //                       </>
// //                     )}

// //                     {/* Category badge */}
// //                     <span className="absolute top-2 left-2 pill text-[10px] py-0.5 px-2">
// //                       {p.category}
// //                     </span>
// //                   </div>

// //                   {/* Title */}
// //                 <h3 className="text-ink font-semibold text-[10px] md:text-[13px] leading-tight mb-1 truncate">

// //                   {/* Description */}
// //                 <p className="text-ink-soft text-[9px] md:text-[11px] leading-snug mb-2 line-clamp-2">

// //                   {/* Tech stack */}
// //                   <div className="flex flex-wrap gap-1.5 mb-3">
// //                     {p.tech.slice(0, 3).map((t) => (
// //                      <span
// //   key={t}
// //   className="px-1.5 py-0.5 rounded text-[8px] md:text-[9px] font-mono
// //              bg-teal/10 border border-edge text-teal-soft"
// // ></span>
// //                     ))}
// //                     {p.tech.length > 3 && (
// //                       <span className="px-2 py-0.5 text-[10px] text-ink-mute">
// //                         +{p.tech.length - 3}
// //                       </span>
// //                     )}
// //                   </div>

// //                   {/* Links */}
// //                   <div className="flex items-center gap-3 mt-auto pt-1">
// //                     {p.github && (
// //                       <a
// //                         href={p.github}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         aria-label="GitHub"
// //                         className="text-ink-soft hover:text-teal-soft transition-colors"
// //                       >
// //                         <Github size={15} />
// //                       </a>
// //                     )}
// //                     {p.live && (
// //                       <a
// //                         href={p.live}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         aria-label="Live demo"
// //                         className="text-ink-soft hover:text-teal-soft transition-colors"
// //                       >
// //                         <ExternalLink size={15} />
// //                       </a>
// //                     )}
// //                   </div>
// //                 </motion.article>
// //               ))}
// //             </div>
// //           )}
// //         </AnimatePresence>
// //       </AnimatedSection>
// //     </div>
// //   );
// // }



// import { useMemo, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Github, ExternalLink, Search } from 'lucide-react';
// import SectionTitle from '@/components/ui/SectionTitle';
// import AnimatedSection from '@/components/ui/AnimatedSection';
// import { projects } from '@/data/projects';

// export default function Projects() {
//   const [query, setQuery] = useState('');

//   const filtered = useMemo(() => {
//     return projects.filter(
//       (p) =>
//         p.title.toLowerCase().includes(query.toLowerCase()) ||
//         p.description.toLowerCase().includes(query.toLowerCase()),
//     );
//   }, [query]);

//   return (
//     <div className="pt-20 pb-10">
//       <AnimatedSection className="max-w-6xl mx-auto px-6 text-center">
//         <SectionTitle caps>PROJECTS</SectionTitle>
//         <p className="section-subtitle mb-5">
//           A collection of work spanning web, mobile, and design.
//         </p>

//         {/* Search */}
//         <div className="max-w-md mx-auto relative mb-4">
//           <Search
//             size={13}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-mute"
//           />
//           <input
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search projects..."
//             className="w-full pl-8 pr-3 py-1.5 rounded-full bg-surface border border-edge
//                        text-ink text-xs placeholder:text-ink-mute outline-none
//                        focus:border-edge-strong transition-colors text-center"
//           />
//         </div>

//         {/* Count */}
//         <p className="text-ink-mute text-[11px] mb-3">
//           Showing {filtered.length}{' '}
//           {filtered.length === 1 ? 'project' : 'projects'}
//         </p>

//         {/* Grid */}
//         <AnimatePresence mode="popLayout">
//           {filtered.length === 0 ? (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="glass-card p-8 text-center max-w-md mx-auto"
//             >
//               <p className="text-ink-soft mb-3 text-sm">
//                 No projects match your search.
//               </p>
//               <button
//                 onClick={() => setQuery('')}
//                 className="btn-outline text-xs py-1.5 px-4"
//               >
//                 Clear Search
//               </button>
//             </motion.div>
//           ) : (<div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
//               {filtered.map((p, i) => (
//                 <motion.article
//                   key={p.title}
//                   layout
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.3, delay: i * 0.04 }}
//                   whileHover={{ y: -4 }}
//                   className="glass-card p-2 md:p-3 group flex flex-col
//                              hover:border-teal/30 hover:shadow-glow-sm
//                              transition-all duration-300"
//                 >
//                   {/* Cover */}
//                   <div
//                     className="w-full h-20 md:h-28 rounded-lg mb-2 relative overflow-hidden
//                                bg-gradient-to-br from-base-soft to-base"
//                   >
//                     {p.image ? (
//                       <img
//                         src={p.image}
//                         alt={p.title}
//                         className="absolute inset-0 w-full h-full object-cover
//                                    transition-transform duration-500 group-hover:scale-110"
//                         loading="lazy"
//                       />
//                     ) : (
//                       <>
//                         <div
//                           className="absolute inset-0 opacity-30"
//                           style={{
//                             backgroundImage: `radial-gradient(circle at 30% 40%, ${p.color}55, transparent 70%)`,
//                           }}
//                         />
//                         <div className="absolute inset-0 grid-bg opacity-30" />
//                       </>
//                     )}

//                     <span className="absolute top-1.5 left-1.5 pill text-[8px] py-0 px-1.5 leading-4">
//                       {p.category}
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-ink font-semibold text-[10px] md:text-[13px] leading-tight mb-1 truncate">
//                     {p.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-ink-soft text-[9px] md:text-[11px] leading-snug mb-2 line-clamp-2">
//                     {p.description}
//                   </p>

//                   {/* Tech */}
//                   <div className="flex flex-wrap gap-1 mb-2">
//                     {p.tech.slice(0, 2).map((t) => (
//                       <span
//                         key={t}
//                         className="px-1.5 py-0.5 rounded text-[8px] md:text-[9px] font-mono
//                                    bg-teal/10 border border-edge text-teal-soft"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                     {p.tech.length > 2 && (
//                       <span className="px-1 py-0.5 text-[8px] md:text-[9px] text-ink-mute">
//                         +{p.tech.length - 2}
//                       </span>
//                     )}
//                   </div>

//                   {/* Links */}
//                   <div className="flex items-center gap-2 mt-auto pt-1">
//                     {p.github && (
//                       <a
//                         href={p.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label="GitHub"
//                         className="text-ink-soft hover:text-teal-soft transition-colors"
//                       >
//                         <Github size={12} />
//                       </a>
//                     )}
//                     {p.live && (
//                       <a
//                         href={p.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label="Live demo"
//                         className="text-ink-soft hover:text-teal-soft transition-colors"
//                       >
//                         <ExternalLink size={12} />
//                       </a>
//                     )}
//                   </div>
//                 </motion.article>
//               ))}
//             </div>
//           )}
//         </AnimatePresence>
//       </AnimatedSection>
//     </div>
//   );
// }
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Search, Star } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { projects } from '@/data/projects';

// Maximum height of every card (px). Change this one value to resize.
const CARD_MAX_HEIGHT = 600;

const headingFont = { fontFamily: "'Sora', 'Inter', sans-serif" };
const bodyFont = { fontFamily: "'Inter', sans-serif" };

export default function Projects() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <div className="pt-20 pb-10">
      <AnimatedSection className="max-w-[820px] mx-auto px-4 sm:px-6 text-center">
        <SectionTitle caps>PROJECTS</SectionTitle>
        <p className="section-subtitle mb-5" style={bodyFont}>
          Full-stack applications built with React and Node.js.
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto relative mb-3">
          <Search
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-mute"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or technologies..."
            style={bodyFont}
            className="w-full pl-9 pr-3 py-1.5 rounded-full bg-surface border border-edge
                       text-ink text-xs placeholder:text-ink-mute outline-none
                       focus:border-edge-strong transition-colors text-center"
          />
        </div>

        <p className="text-ink-mute text-[11px] mb-6" style={bodyFont}>
          Showing {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        </p>

        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-8 text-center max-w-md mx-auto"
            >
              <p className="text-ink-soft mb-3 text-sm">No projects match your search.</p>
              <button
                onClick={() => setQuery('')}
                className="btn-outline text-xs py-1.5 px-4"
              >
                Clear Search
              </button>
            </motion.div>
          ) : (
            /* 2 columns (2 by 2) on every device */
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-6">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                  style={{ ...bodyFont, maxHeight: CARD_MAX_HEIGHT }}
                  className="glass-card group flex flex-col overflow-hidden text-left
                             w-full hover:border-teal/30 hover:shadow-glow-sm
                             transition-all duration-300"
                >
                  {/* Cover */}
                  <div className="relative h-24 sm:h-36 lg:h-40 overflow-hidden bg-gradient-to-br from-base-soft to-base">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={`${p.title} screenshot`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-top
                                   transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{
                          backgroundImage: `radial-gradient(circle at 30% 40%, ${p.color}66, transparent 70%)`,
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 pill text-[9px] sm:text-[10px] py-0 px-1.5 sm:px-2 leading-4 sm:leading-5">
                      {p.category}
                    </span>
                    {p.featured && (
                      <span
                        className="hidden sm:flex absolute top-2 right-2 items-center gap-1
                                   text-[10px] font-semibold px-2 py-0.5 rounded-full
                                   bg-black/60 backdrop-blur text-white"
                      >
                        <Star size={10} fill="currentColor" style={{ color: p.color }} />
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="h-0.5" style={{ background: p.color }} />

                  {/* Body */}
                  <div className="p-2.5 sm:p-4 flex flex-col flex-grow min-h-0">
                    <h3
                      className="text-ink text-xs sm:text-[15px] font-bold leading-snug mb-1 sm:mb-1.5 line-clamp-2 sm:line-clamp-1"
                      style={headingFont}
                      title={p.title}
                    >
                      {p.title}
                    </h3>

                    <p className="text-ink-soft text-[10px] sm:text-xs leading-snug sm:leading-relaxed mb-2 sm:mb-3 line-clamp-2">
                      {p.description}
                    </p>

                    {/* Tech: 2 chips on mobile, 3 on larger screens */}
                    <div className="flex flex-wrap gap-1 mb-2 sm:mb-3 mt-auto">
                      {p.tech.slice(0, 3).map((t, idx) => (
                        <span
                          key={t}
                          className={`${idx === 2 ? 'hidden sm:inline-block' : ''}
                                     px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono
                                     bg-teal/10 border border-edge text-teal-soft`}
                        >
                          {t}
                        </span>
                      ))}
                      {p.tech.length > 3 && (
                        <span className="hidden sm:inline px-1 py-0.5 text-[10px] text-ink-mute">
                          +{p.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-3 border-t border-edge">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.title} live demo`}
                          className="flex items-center gap-1.5 text-[11px] sm:text-xs text-ink-soft
                                     hover:text-teal-soft transition-colors"
                        >
                          <ExternalLink size={13} />
                          <span className="hidden sm:inline">Demo</span>
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.title} source code`}
                          className="flex items-center gap-1.5 text-[11px] sm:text-xs text-ink-soft
                                     hover:text-teal-soft transition-colors"
                        >
                          <Github size={13} />
                          <span className="hidden sm:inline">Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </AnimatePresence>
      </AnimatedSection>
    </div>
  );
}