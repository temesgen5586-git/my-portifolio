import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'p-6',
}) {
  const Comp = hover ? motion.div : 'div';
  const hoverProps = hover
    ? {
        whileHover: { y: -6 },
        transition: { duration: 0.3 },
      }
    : {};

  return (
    <Comp
      className={`glass-card ${padding} ${className}`}
      {...hoverProps}
    >
      {children}
    </Comp>
  );
}