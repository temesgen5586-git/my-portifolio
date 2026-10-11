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
    <div className="pt-32 pb-20">
      <AnimatedSection className="max-w-6xl mx-auto px-6">
        <SectionTitle caps>PROJECTS</SectionTitle>
        <p className="section-subtitle mb-10">
          A collection of work spanning web, mobile, and design.
        </p>

        {/* Filters + search */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${active === cat
                    ? 'bg-teal/15 text-teal-soft border border-edge-strong'
                    : 'border border-edge text-ink-soft hover:bg-surface'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="md:ml-auto relative w-full md:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-mute" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-surface border border-edge
                         text-ink text-sm placeholder:text-ink-mute outline-none
                         focus:border-edge-strong transition-colors"
            />
          </div>
        </div>

        {/* Count */}
        <p className="text-ink-mute text-xs mb-6">
          Showing {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        </p>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-12 text-center"
            >
              <p className="text-ink-soft mb-4">No projects match your filters.</p>
              <button
                onClick={() => { setActive('All'); setQuery(''); }}
                className="btn-outline"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="glass-card p-6 group"
                >
                  <div
                    className="w-full h-40 rounded-2xl mb-4 relative overflow-hidden
                               bg-gradient-to-br from-base-soft to-base"
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `radial-gradient(circle at 30% 40%, ${p.color}55, transparent 70%)`,
                      }}
                    />
                    <div className="absolute inset-0 grid-bg opacity-30" />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="pill">{p.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-ink mb-2">{p.title}</h3>
                  <p className="text-ink-soft text-sm leading-relaxed mb-4">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-xs font-mono
                                   bg-teal/10 border border-edge text-teal-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      aria-label="GitHub"
                      className="text-ink-soft hover:text-teal-soft transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="#"
                      aria-label="Live demo"
                      className="text-ink-soft hover:text-teal-soft transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
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