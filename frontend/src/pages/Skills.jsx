import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { skills, skillCategories } from '@/data/skills';

export default function Skills() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? skills : skills.filter((s) => s.category === active);

  return (
    <div className="pt-32 pb-20">
      <AnimatedSection className="max-w-6xl mx-auto px-6">
        <SectionTitle caps>SKILLS</SectionTitle>
        <p className="section-subtitle mb-10">
          Technologies and tools I use to build modern applications.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
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

        {/* Skills grid */}
        <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                whileHover={{ y: -6, rotateX: -6, rotateY: 6 }}
                className="glass-card p-4 flex flex-col items-center justify-center gap-2 aspect-square cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center font-mono font-bold text-sm
                             border border-edge-strong"
                  style={{
                    color: skill.color,
                    backgroundColor: `${skill.color}15`,
                  }}
                >
                  {skill.name.slice(0, 2)}
                </div>
                <p className="text-ink text-xs font-medium text-center leading-tight">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}