import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
  <section className="py-14 md:py-16 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
       className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 grid-bg opacity-30 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-teal/20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-4">
            Have a project in mind?
          </h2>
          <p className="text-ink-soft mb-6 max-w-xl mx-auto">
            Let&apos;s build something meaningful together. I&apos;m available for freelance
            projects, internships, and full-time roles.
          </p>
          <Link to="/contact" className="btn-primary text-base">
            Let&apos;s Talk <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}