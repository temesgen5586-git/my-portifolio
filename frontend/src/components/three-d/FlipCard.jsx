import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FlipCard({ front, back, className = '', height = 240 }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`perspective-1000 cursor-pointer ${className}`}
      style={{ height }}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Flip card"
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden glass-card p-6 grid place-items-center">
          {front}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden glass-card p-6 grid place-items-center"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}