import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { skills } from '@/data/skills';

const PREVIEW_COUNT = 8;

export default function SkillsPreview() {
  const previewSkills = skills.slice(0, PREVIEW_COUNT);

  return (
    <AnimatedSection className="py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>
        <p className="section-subtitle mb-10">
          Technologies and tools I use to build modern applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {previewSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="glass-card px-4 py-3 flex items-center gap-3
                         cursor-pointer
                         hover:border-teal/30 hover:shadow-glow-sm
                         transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-xl grid place-items-center
                           font-mono font-bold text-xs shrink-0
                           border border-edge-strong"
                style={{
                  color: skill.color,
                  backgroundColor: `${skill.color}15`,
                }}
              >
                {skill.name.slice(0, 2)}
              </div>
              <div className="min-w-0 flex-grow">
                <p className="text-ink text-[13px] font-semibold leading-tight truncate">
                  {skill.name}
                </p>
                <p className="text-ink-mute text-[10px] mt-0.5 truncate">
                  {skill.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/skills" className="btn-outline">
            See All Skills <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}