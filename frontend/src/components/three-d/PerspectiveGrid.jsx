import { motion } from 'framer-motion';

export default function PerspectiveGrid({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Perspective container */}
      <div
        className="absolute inset-0"
        style={{ perspective: '500px', perspectiveOrigin: 'center top' }}
      >
        <motion.div
          className="absolute inset-x-0 bottom-0 h-[200%] origin-bottom"
          style={{
            transform: 'rotateX(60deg)',
            transformStyle: 'preserve-3d',
            backgroundImage: `
              linear-gradient(rgba(94, 234, 212, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(94, 234, 212, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage:
              'linear-gradient(to top, black 0%, transparent 80%)',
            WebkitMaskImage:
              'linear-gradient(to top, black 0%, transparent 80%)',
          }}
          animate={{
            backgroundPositionY: ['0px', '60px'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Radial fade at top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center top, transparent 0%, #0A1A1A 70%)',
        }}
      />
    </div>
  );
}