import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import OrbitAvatar from '@/components/three-d/OrbitAvatar';
import { profile } from '@/data/profile';
import profileImg from '@/assets/images/profile.jpg';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0, 0, 1] } },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const current = profile.roles[roleIndex];
    const speed = phase === 'typing' ? 70 : 35;

    const t = setTimeout(() => {
      if (phase === 'typing') {
        if (display.length < current.length) {
          setDisplay(current.slice(0, display.length + 1));
        } else {
          setTimeout(() => setPhase('deleting'), 1400);
        }
      } else {
        if (display.length > 0) {
          setDisplay(current.slice(0, display.length - 1));
        } else {
          setPhase('typing');
          setRoleIndex((i) => (i + 1) % profile.roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [display, phase, roleIndex]);

  return (

   <section className="relative min-h-[85vh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full
                   bg-teal/20 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full
                   bg-gold/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p variants={item} className="text-sm md:text-base text-ink-soft mb-3">
              {/* Hello, I&apos;m <span className="text-teal-soft font-semibold">{profile.firstName}</span> */}
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight
                         text-teal-soft mb-4"
            >
              Full Stack Developer
              <br />
              UI/UX Designer
            </motion.h1>

            <motion.div variants={item} className="h-8 mb-6">
              <span className="font-mono text-lg md:text-xl text-gold">
                {display}
                <span className="opacity-60">|</span>
              </span>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-6">
              <Link to="/projects" className="btn-primary">
                View Projects <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Me
              </Link>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-2 mb-6">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* <ChevronDown size={20} className="text-teal-soft" /> */}
               </motion.div>
              {/* <span className="text-ink-soft text-sm">Scroll to explore</span> */}
            </motion.div> 

            <motion.p
              variants={item}
              className="text-ink-soft max-w-md leading-relaxed text-base md:text-lg"
            >
              Hi, I&apos;m <span className="text-ink font-semibold">{profile.name}</span>,{' '}
              {profile.tagline}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
            className="flex justify-center lg:justify-end"
          >
           <OrbitAvatar src={profileImg} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}