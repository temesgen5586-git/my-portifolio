import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsCards() {
  return (
   <AnimatedSection className="py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Testimonials</SectionTitle>
        <p className="section-subtitle mb-10">
          What clients, teammates, and mentors say about working with me.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 flex flex-col"
            >
              <Quote size={24} className="text-teal-soft/40 mb-3" />

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-ink-soft text-sm leading-relaxed mb-6 flex-grow italic">
                “{t.quote}”
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-edge">
                <div className="w-10 h-10 rounded-full
                                bg-gradient-to-br from-teal-soft to-teal
                                grid place-items-center text-base-deep font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-ink font-semibold text-sm">{t.name}</p>
                  <p className="text-ink-soft text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}