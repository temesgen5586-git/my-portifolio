import { motion } from 'framer-motion';
import { Trophy, TrendingUp, FileText, Folder } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { achievements } from '@/data/education';

const iconMap = {
  trophy: Trophy,
  chart: TrendingUp,
  file: FileText,
  folder: Folder,
};

export default function AchievementsGrid() {
  return (
    <AnimatedSection className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Achievements</SectionTitle>
        <p className="section-subtitle mb-12">
          Highlights from my journey so far.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon] || Trophy;
            return (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl
                                bg-gradient-to-br from-gold/20 to-gold/5
                                border border-gold/30
                                grid place-items-center text-gold">
                  <Icon size={22} />
                </div>
                <p className="text-ink font-bold text-lg mb-1">{a.label}</p>
                <p className="text-ink-soft text-xs">{a.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}