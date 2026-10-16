// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Github, ExternalLink, ArrowRight } from 'lucide-react';
// import SectionTitle from '@/components/ui/SectionTitle';
// import AnimatedSection from '@/components/ui/AnimatedSection';

// const projects = [
//   {
//     title: 'E-commerce Dashboard',
//     description: 'A comprehensive dashboard for managing online stores with real-time analytics.',
//     tech: ['React', 'Tailwind', 'TypeScript'],
//     color: '#5EEAD4',
//   },
//   {
//     title: 'Web Blogs',
//     description: 'A modern blogging platform with markdown support and SEO optimization.',
//     tech: ['Next.js', 'Prisma', 'PostgreSQL'],
//     color: '#A78BFA',
//   },
//   {
//     title: '3D Dev eBooks',
//     description: 'An interactive 3D book reader for developer eBooks with smooth transitions.',
//     tech: ['Three.js', 'React', 'GSAP'],
//     color: '#F5C542',
//   },
// ];

// export default function FeaturedProjects() {
//   return (
//    <AnimatedSection className="py-14 md:py-16">
//       <div className="max-w-6xl mx-auto px-6">
//         <SectionTitle>Featured Projects</SectionTitle>
//      <p className="section-subtitle mb-10">
//           A selection of work I&apos;m proud of — from dashboards to full-stack apps.
//         </p>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((p, i) => (
//             <motion.article
//               key={p.title}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ delay: i * 0.1, duration: 0.5 }}
//               whileHover={{ y: -6 }}
//               className="glass-card p-6 group"
//             >
//               <div
//                 className="w-full h-40 rounded-2xl mb-4 relative overflow-hidden
//                            bg-gradient-to-br from-base-soft to-base"
//               >
//                 <div
//                   className="absolute inset-0 opacity-20"
//                   style={{
//                     backgroundImage: `radial-gradient(circle at 30% 40%, ${p.color}44, transparent 70%)`,
//                   }}
//                 />
//                 <div className="absolute inset-0 grid-bg opacity-30" />
//               </div>

//               <h3 className="text-lg font-bold text-ink mb-2">{p.title}</h3>
//               <p className="text-ink-soft text-sm leading-relaxed mb-4">{p.description}</p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {p.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="px-2.5 py-1 rounded-full text-xs font-mono
//                                bg-teal/10 border border-edge text-teal-soft"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex items-center gap-3">
//                 <a
//                   href="#"
//                   aria-label="GitHub"
//                   className="text-ink-soft hover:text-teal-soft transition-colors"
//                 >
//                   <Github size={16} />
//                 </a>
//                 <a
//                   href="#"
//                   aria-label="Live demo"
//                   className="text-ink-soft hover:text-teal-soft transition-colors"
//                 >
//                   <ExternalLink size={16} />
//                 </a>
//               </div>
//             </motion.article>
//           ))}
//         </div>
// <div className="text-center mt-8">
//           <Link to="/projects" className="btn-outline">
//             View All Projects <ArrowRight size={18} />
//           </Link>
//         </div>
//       </div>
//     </AnimatedSection>
//   );
// }



import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { projects } from '@/data/projects';

const featured = projects.filter((p) => p.featured).slice(0, 3);

export default function FeaturedProjects() {
  return (
    <AnimatedSection className="py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Featured Projects</SectionTitle>
        <p className="section-subtitle mb-10">
          A selection of work I&apos;m proud of — from dashboards to full-stack apps.
        </p>

        {/* Grid — 2 cols mobile, 3 cols desktop */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {featured.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card p-2 md:p-5 group flex flex-col w-full
                         hover:border-teal/30 hover:shadow-glow-sm
                         transition-all duration-300"
            >
              {/* Cover */}
              <div
                className="w-full h-20 md:h-36 rounded-lg md:rounded-2xl mb-2 md:mb-3
                           relative overflow-hidden bg-gradient-to-br from-base-soft to-base"
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover
                               transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `radial-gradient(circle at 30% 40%, ${p.color}55, transparent 70%)`,
                      }}
                    />
                    <div className="absolute inset-0 grid-bg opacity-30" />
                  </>
                )}

                {/* Category badge */}
                <span className="absolute top-1.5 left-1.5 md:top-2 md:left-2
                                 pill text-[8px] md:text-[10px] py-0 px-1.5 md:px-2 leading-4">
                  {p.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-ink font-bold text-[10px] md:text-[15px] leading-tight
                             mb-1 md:mb-1.5 truncate">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-ink-soft text-[8px] md:text-xs leading-snug md:leading-relaxed
                            mb-2 md:mb-3 line-clamp-2">
                {p.description}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-0.5 md:gap-1.5 mb-2 md:mb-3">
                {p.tech.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="px-1 md:px-2 py-0 rounded md:rounded-full
                               text-[7px] md:text-[10px] font-mono leading-4
                               bg-teal/10 border border-edge text-teal-soft"
                  >
                    {t}
                  </span>
                ))}
                {p.tech.length > 2 && (
                  <span className="px-1 md:px-2 py-0 text-[7px] md:text-[10px]
                                   text-ink-mute leading-4">
                    +{p.tech.length - 2}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex items-center gap-1.5 md:gap-3 mt-auto pt-0.5 md:pt-1">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-ink-soft hover:text-teal-soft transition-colors"
                  >
                    <Github className="w-3 h-3 md:w-4 md:h-4" />
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="text-ink-soft hover:text-teal-soft transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-8">
          <Link to="/projects" className="btn-outline">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}