import { motion } from 'framer-motion';
import { FolderGit2, Cpu, Calendar, GitCommit } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import AnimatedSection from '@/components/ui/AnimatedSection';

const stats = [
  { icon: FolderGit2, value: 25,  suffix: '+', label: 'Projects Completed' },
  { icon: Cpu,        value: 15,  suffix: '+', label: 'Technologies' },
  { icon: Calendar,   value: 3,   suffix: '+', label: 'Years Coding' },
  { icon: GitCommit,  value: 500, suffix: '+', label: 'GitHub Commits' },
];

export default function Stats() {
  return (
    <AnimatedSection className="py-16 md:py-20 border-y border-edge bg-base-soft/30">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div
              className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-teal/10 border border-edge
                         grid place-items-center text-teal-soft"
            >
              <s.icon size={20} />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-ink mb-1">
              <AnimatedCounter to={s.value} suffix={s.suffix} />
            </div>
            <div className="text-ink-soft text-xs md:text-sm">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}