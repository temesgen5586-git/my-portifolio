import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { profile } from '@/data/profile';

const traits = ['Problem Solver', 'Team Player', 'Tech Enthusiast'];

export default function AboutPreview() {
  return (
    <AnimatedSection className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass-card relative">
            <div
              className="absolute inset-0 bg-gradient-to-br from-teal/20 to-gold/10"
              aria-hidden="true"
            />
            <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
            <div className="absolute inset-0 grid place-items-center text-teal-soft text-6xl font-bold opacity-40">
              {profile.firstName?.charAt(0) || 'A'}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="pill mb-4">About Me</p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-6">
            Building modern web experiences.
          </h2>

          <p className="text-ink-soft leading-relaxed mb-6">
            {profile.bio[0]}
          </p>

          <ul className="grid gap-2 mb-6">
            {traits.map((t) => (
              <li key={t} className="flex items-center gap-2 text-ink-soft text-sm">
                <CheckCircle2 size={16} className="text-teal-soft shrink-0" />
                {t}
              </li>
            ))}
          </ul>

          <Link to="/about" className="btn-primary">
            Learn More About Me <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}