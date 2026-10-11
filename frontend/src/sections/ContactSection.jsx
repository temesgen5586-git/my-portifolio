import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { profile } from '@/data/profile';

const cards = [
  { icon: Mail,     label: 'Email',    value: profile.email,      href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourusername', href: profile.socials.linkedin },
  { icon: Github,   label: 'GitHub',   value: 'github.com/yourusername',      href: profile.socials.github },
  { icon: MapPin,   label: 'Location', value: profile.location,   href: null },
];

export default function ContactSection() {
  return (
    <AnimatedSection className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Get in Touch</SectionTitle>
        <p className="section-subtitle mb-12">
          Have a project or opportunity? Let&apos;s talk.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {cards.map((c, i) => {
            const Wrapper = c.href ? 'a' : 'div';
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Wrapper
                  {...(c.href
                    ? {
                        href: c.href,
                        target: c.href.startsWith('mailto') ? undefined : '_blank',
                        rel: c.href.startsWith('mailto') ? undefined : 'noopener noreferrer',
                      }
                    : {})}
                  className="glass-card p-6 flex items-center gap-4 group h-full
                             hover:border-edge-strong transition-colors"
                >
                  <div className="w-11 h-11 rounded-2xl bg-teal/10 border border-edge
                                  grid place-items-center text-teal-soft shrink-0">
                    <c.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-ink-mute text-xs uppercase tracking-widest mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-ink font-medium text-sm truncate">{c.value}</p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/contact" className="btn-primary text-base">
            Send a Message <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}