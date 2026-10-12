// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import SectionTitle from '@/components/ui/SectionTitle';
// import AnimatedSection from '@/components/ui/AnimatedSection';
// import { skills, skillCategories } from '@/data/skills';

// export default function Skills() {
//   const [active, setActive] = useState('All');

//   const filtered =
//     active === 'All' ? skills : skills.filter((s) => s.category === active);

//   return (
//     <div className="pt-28 pb-14">
//       <AnimatedSection className="max-w-6xl mx-auto px-6">
//         <SectionTitle caps>SKILLS</SectionTitle>
//         <p className="section-subtitle mb-10">
//           Technologies and tools I use to build modern applications.
//         </p>

//         {/* Category filter */}
//         <div className="flex flex-wrap justify-center gap-2 mb-12">
//           {skillCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActive(cat)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all
//                 ${active === cat
//                   ? 'bg-teal/15 text-teal-soft border border-edge-strong'
//                   : 'border border-edge text-ink-soft hover:bg-surface'}`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Skills grid */}
//         <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
//           <AnimatePresence mode="popLayout">
//             {filtered.map((skill, i) => (
//               <motion.div
//                 key={skill.name}
//                 layout
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.3, delay: i * 0.02 }}
//                 whileHover={{ y: -6, rotateX: -6, rotateY: 6 }}
//                 className="glass-card p-4 flex flex-col items-center justify-center gap-2 aspect-square cursor-pointer"
//                 style={{ transformStyle: 'preserve-3d' }}
//               >
//                 <div
//                   className="w-10 h-10 rounded-xl grid place-items-center font-mono font-bold text-sm
//                              border border-edge-strong"
//                   style={{
//                     color: skill.color,
//                     backgroundColor: `${skill.color}15`,
//                   }}
//                 >
//                   {skill.name.slice(0, 2)}
//                 </div>
//                 <p className="text-ink text-xs font-medium text-center leading-tight">
//                   {skill.name}
//                 </p>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </AnimatedSection>
//     </div>
//   );
// }



// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import SectionTitle from '@/components/ui/SectionTitle';
// import AnimatedSection from '@/components/ui/AnimatedSection';
// import { skills, skillCategories } from '@/data/skills';

// export default function Skills() {
//   const [active, setActive] = useState('All');

//   const filtered =
//     active === 'All' ? skills : skills.filter((s) => s.category === active);

//   return (
//     <div className="pt-24 pb-10">
//       <AnimatedSection className="max-w-6xl mx-auto px-6">
//         <SectionTitle caps>SKILLS</SectionTitle>
//         <p className="section-subtitle mb-6">
//           Technologies and tools I use to build modern applications.
//         </p>

//         {/* Category filter */}
//         <div className="flex flex-wrap justify-center gap-2 mb-8">
//           {skillCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActive(cat)}
//               className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all
//                 ${active === cat
//                   ? 'bg-teal/15 text-teal-soft border border-edge-strong'
//                   : 'border border-edge text-ink-soft hover:bg-surface'}`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Skills grid — denser layout */}
//         <motion.div
//           layout
//           className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
//         >
//           <AnimatePresence mode="popLayout">
//             {filtered.map((skill, i) => (
//               <motion.div
//                 key={skill.name}
//                 layout
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.3, delay: i * 0.02 }}
//                 whileHover={{ y: -4, rotateX: -6, rotateY: 6 }}
//                 className="glass-card p-3 flex flex-col items-center justify-center gap-1.5
//                            aspect-square cursor-pointer
//                            hover:border-teal/30 hover:shadow-glow-sm
//                            transition-all duration-300"
//                 style={{ transformStyle: 'preserve-3d' }}
//               >
//                 <div
//                   className="w-9 h-9 rounded-lg grid place-items-center
//                              font-mono font-bold text-xs
//                              border border-edge-strong"
//                   style={{
//                     color: skill.color,
//                     backgroundColor: `${skill.color}15`,
//                   }}
//                 >
//                   {skill.name.slice(0, 2)}
//                 </div>
//                 <p className="text-ink text-[10px] font-medium text-center leading-tight">
//                   {skill.name}
//                 </p>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </AnimatedSection>
//     </div>
//   );
// }


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { skills, skillCategories } from '@/data/skills';

export default function Skills() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? skills : skills.filter((s) => s.category === active);

  return (
    <div className="pt-24 pb-10">
      <AnimatedSection className="max-w-6xl mx-auto px-6">
        <SectionTitle caps>SKILLS</SectionTitle>
        <p className="section-subtitle mb-6">
          Technologies and tools I use to build modern applications.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all
                ${active === cat
                  ? 'bg-teal/15 text-teal-soft border border-edge-strong'
                  : 'border border-edge text-ink-soft hover:bg-surface'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid — horizontal card layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                whileHover={{ y: -4 }}
                className="glass-card p-4 flex items-center gap-3
                           cursor-pointer
                           hover:border-teal/30 hover:shadow-glow-sm
                           transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl grid place-items-center
                             font-mono font-bold text-sm shrink-0
                             border border-edge-strong"
                  style={{
                    color: skill.color,
                    backgroundColor: `${skill.color}15`,
                  }}
                >
                  {skill.name.slice(0, 2)}
                </div>

                {/* Name + category */}
                <div className="min-w-0 flex-grow">
                  <p className="text-ink text-sm font-semibold leading-tight truncate">
                    {skill.name}
                  </p>
                  <p className="text-ink-mute text-[11px] mt-0.5 truncate">
                    {skill.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}