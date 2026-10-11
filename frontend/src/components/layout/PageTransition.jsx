import { motion } from 'framer-motion';
import { pageVariants } from '@/lib/motion';

export default function PageTransition({ children }) {
  return (
    <motion.main
      id="main-content"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}