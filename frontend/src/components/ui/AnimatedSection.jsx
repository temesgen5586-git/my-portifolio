import { motion } from 'framer-motion';

export default function AnimatedSection({
  children,
  delay = 0,
  y = 30,
  className = '',
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0, 0, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}