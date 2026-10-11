import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';

const projects = [
  {
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for managing online stores with real-time analytics.',
    tech: ['React', 'Tailwind', 'TypeScript'],
    color: '#5EEAD4',
  },
  {
    title: 'Web Blogs',
    description: 'A modern blogging platform with markdown support and SEO optimization.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    color: '#A78BFA',
  },
  {
    title: '3D Dev eBooks',
    description: 'An interactive 3D book reader for developer eBooks with smooth transitions.',
    tech: ['Three.js', 'React', 'GSAP'],
    color: '#F5C542',
  },
];

export default function FeaturedProjects() {
  return (
    <AnimatedSection className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Featured Projects</SectionTitle>
        <p className="section-subtitle mb-12">
          A selection of work I&apos;m proud of — from dashboards to full-stack apps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 group"
            >
              <div
                className="w-full h-40 rounded-2xl mb-4 relative overflow-hidden
                           bg-gradient-to-br from-base-soft to-base"
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 40%, ${p.color}44, transparent 70%)`,
                  }}
                />
                <div className="absolute inset-0 grid-bg opacity-30" />
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

        <div className="text-center mt-10">
          <Link to="/projects" className="btn-outline">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}