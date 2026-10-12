import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Search } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { projects, projectCategories } from '@/data/projects';

export default function Projects() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return projects
      .filter((p) => active === 'All' || p.category === active)
      .filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()),
      );
  }, [active, query]);

  return (
    <div className="pt-20 pb-10">
      <AnimatedSection className="max-w-6xl mx-auto px-6">
        <SectionTitle caps>PROJECTS</SectionTitle>
        <p className="section-subtitle mb-5">
          A collection of work spanning web, mobile, and design.
        </p>

        {/* Filters + search */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-5">
          <div className="flex flex-wrap gap-1.5">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all
                  ${active === cat
                    ? 'bg-teal/15 text-teal-soft border border-edge-strong'
                    : 'border border-edge text-ink-soft hover:bg-surface'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="md:ml-auto relative w-full md:w-56">
            <Search
              size={13}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-mute"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-8 pr-3 py-1.5 rounded-full bg-surface border border-edge
                         text-ink text-xs placeholder:text-ink-mute outline-none
                         focus:border-edge-strong transition-colors"
            />
          </div>
        </div>

        {/* Count */}
        <p className="text-ink-mute text-[11px] mb-3">
          Showing {filtered.length}{' '}
          {filtered.length === 1 ? 'project' : 'projects'}
        </p>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-8 text-center"
            >
              <p className="text-ink-soft mb-3 text-sm">
                No projects match your filters.
              </p>
              <button
                onClick={() => {
                  setActive('All');
                  setQuery('');
                }}
                className="btn-outline text-xs py-1.5 px-4"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="glass-card p-3.5 group flex flex-col
                             hover:border-teal/30 hover:shadow-glow-sm
                             transition-all duration-300"
                >
                  {/* Cover */}
                  <div
                    className="w-full h-32 rounded-xl mb-3 relative overflow-hidden
                               bg-gradient-to-br from-base-soft to-base"
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

                    {/* Category badge overlaid */}
                    <span className="absolute top-2 left-2 pill text-[10px] py-0.5 px-2">
                      {p.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-ink font-bold text-[15px] leading-tight mb-1.5 truncate">
                    {p.title}
                  </h3>

                  {/* Description — 2 lines */}
                  <p className="text-ink-soft text-xs leading-relaxed mb-3
                                line-clamp-2">
                    {p.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full text-[10px] font-mono
                                   bg-teal/10 border border-edge text-teal-soft"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] text-ink-mute">
                        +{p.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto pt-1">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-ink-soft hover:text-teal-soft transition-colors"
                      >
                        <Github size={15} />
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
                        <ExternalLink size={15} />
                      </a>
                    )}
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