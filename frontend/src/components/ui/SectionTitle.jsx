import { motion } from 'framer-motion';

export default function SectionTitle({ children, caps = false, className = '' }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
            className={`${caps ? 'section-title-caps' : 'section-title'} mb-4 ${className}`}
    >
      {children}
    </motion.h2>
  );
}