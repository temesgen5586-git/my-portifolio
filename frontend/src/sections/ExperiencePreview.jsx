import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { experience } from '@/data/experience';

const PREVIEW_COUNT = 2;

export default function ExperiencePreview() {
  const previewExperience = experience.slice(0, PREVIEW_COUNT);

  return (
    <AnimatedSection className="py-14 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle>Experience</SectionTitle>
        <p className="section-subtitle mb-10">
          A snapshot of my professional and project journey.
        </p>

        <div className="grid gap-4">
          {previewExperience.map((exp, i) => (
            <motion.div
              key={`${exp.role}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-5 flex items-start gap-4
                         hover:border-teal/30 hover:shadow-glow-sm
                         transition-all duration-300"
            >
              <div
                className="w-11 h-11 rounded-xl bg-teal/10 border border-edge-strong
                           grid place-items-center text-teal-soft shrink-0
                           shadow-glow-sm"
              >
                <Briefcase size={18} />
              </div>

              <div className="min-w-0 flex-grow">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div className="min-w-0">
                    <h3 className="text-ink font-bold text-base leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-teal-soft text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 shrink-0">
                    <span className="pill">{exp.period}</span>
                    <span className="pill">{exp.type}</span>
                  </div>
                </div>

                <ul className="space-y-1 mt-2">
                  {exp.points.slice(0, 2).map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-ink-soft text-[13px] leading-relaxed"
                    >
                      <span className="text-teal-soft mt-1.5 shrink-0">▹</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          {/* <Link to="/experience" className="btn-outline">
            View Full Experience <ArrowRight size={18} />
          </Link> */}
        </div>
      </div>
    </AnimatedSection>
  );
}