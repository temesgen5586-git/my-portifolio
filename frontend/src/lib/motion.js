// Central Framer Motion animation presets

export const ease = {
  standard: [0.4, 0, 0.2, 1],
  emphasized: [0.2, 0, 0, 1],
  decelerate: [0, 0, 0.2, 1],
};

export const duration = {
  fast: 0.2,
  base: 0.35,
  slow: 0.5,
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.base, ease: ease.standard } },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.emphasized } },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.emphasized } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: duration.base, ease: ease.emphasized } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: duration.base, ease: ease.emphasized } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: duration.base, ease: ease.emphasized } },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: ease.standard } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25, ease: ease.decelerate } },
};

export const hoverLift = {
  rest: { y: 0 },
  hover: { y: -6, transition: { duration: 0.2, ease: ease.standard } },
};

export const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.emphasized } },
};