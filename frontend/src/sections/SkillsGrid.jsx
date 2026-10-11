import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { skills } from '@/data/skills';

export default function SkillsGrid() {
  return (
    <AnimatedSection className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Skills & Technologies</SectionTitle>
        <p className="section-subtitle mb-12">
          The tools and technologies I use to build modern applications.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {skills.slice(0, 18).map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              whileHover={{ y: -6, rotateX: -6, rotateY: 6 }}
              className="glass-card p-4 flex flex-col items-center gap-2 aspect-square
                         cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="w-10 h-10 rounded-xl grid place-items-center font-mono font-bold text-xs
                           border border-edge-strong"
                style={{
                  color: skill.color,
                  backgroundColor: `${skill.color}15`,
                }}
              >
                {skill.name.slice(0, 2)}
              </div>
              <p className="text-ink text-[10px] font-medium text-center leading-tight">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}