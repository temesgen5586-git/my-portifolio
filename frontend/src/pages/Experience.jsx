// import { motion } from 'framer-motion';
// import { Briefcase } from 'lucide-react';
// import SectionTitle from '@/components/ui/SectionTitle';
// import AnimatedSection from '@/components/ui/AnimatedSection';
// import { experience } from '@/data/experience';

// export default function Experience() {
//   return (
//     <div className="pt-28 pb-14">
//       <AnimatedSection className="max-w-5xl mx-auto px-6">
//         <SectionTitle caps>EXPERIENCE</SectionTitle>
//         <p className="section-subtitle mb-14">
//           A timeline of roles, internships, and freelance work.
//         </p>

//         <div className="relative">
//           {/* Vertical line */}
//           <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-edge-strong" />

//           <div className="space-y-10">
//             {experience.map((exp, i) => {
//               const isLeft = i % 2 === 0;
//               return (
//                 <motion.div
//                   key={`${exp.role}-${i}`}
//                   initial={{ opacity: 0, y: 24 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.5, delay: i * 0.05 }}
//                   className={`relative flex items-start gap-6
//                     md:grid md:grid-cols-2 md:gap-10
//                     ${isLeft ? '' : 'md:[&>*:first-child]:order-2'}`}
//                 >
//                   {/* Node dot */}
//                   <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-6 z-10">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       whileInView={{ scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: i * 0.05 + 0.2 }}
//                       className="w-3 h-3 rounded-full bg-teal shadow-glow"
//                     />
//                   </div>

//                   <div className={`pl-12 md:pl-0 ${isLeft ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
//                     <div className="glass-card p-6 inline-block text-left w-full">
//                       <div className="flex items-start gap-3 mb-3">
//                         <div className="w-10 h-10 rounded-xl bg-teal/10 border border-edge grid place-items-center text-teal-soft shrink-0">
//                           <Briefcase size={18} />
//                         </div>
//                         <div>
//                           <h3 className="text-ink font-bold text-base md:text-lg">{exp.role}</h3>
//                           <p className="text-teal-soft text-sm">{exp.company}</p>
//                         </div>
//                       </div>
//                       <div className="flex flex-wrap gap-2 mb-3">
//                         <span className="pill">{exp.period}</span>
//                         <span className="pill">{exp.type}</span>
//                       </div>
//                       <ul className="space-y-1.5">
//                         {exp.points.map((p) => (
//                           <li key={p} className="flex items-start gap-2 text-ink-soft text-sm">
//                             <span className="text-teal-soft mt-1">•</span>
//                             {p}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </AnimatedSection>
//     </div>
//   );
// }



// import { motion } from 'framer-motion';
// import { Briefcase } from 'lucide-react';
// import SectionTitle from '@/components/ui/SectionTitle';
// import AnimatedSection from '@/components/ui/AnimatedSection';
// import { experience } from '@/data/experience';

// export default function Experience() {
//   return (
//     <div className="pt-24 pb-14">
//       <AnimatedSection className="max-w-3xl mx-auto px-6">
//         <SectionTitle caps>EXPERIENCE</SectionTitle>
//         <p className="section-subtitle mb-10">
//           A timeline of roles, internships, and freelance work.
//         </p>

//         <div className="relative">
//           {/* Vertical line on the left */}
//           <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-teal/40 via-edge to-transparent" />

//           <div className="space-y-5">
//             {experience.map((exp, i) => (
//               <motion.div
//                 key={`${exp.role}-${i}`}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="relative pl-14"
//               >
//                 {/* Timeline dot */}
//                 <div className="absolute left-0 top-6 flex items-center justify-center">
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: i * 0.08 + 0.2, type: 'spring', stiffness: 200 }}
//                     className="w-10 h-10 rounded-full
//                                bg-teal/10 border border-edge-strong
//                                grid place-items-center text-teal-soft
//                                shadow-glow-sm backdrop-blur-sm"
//                   >
//                     <Briefcase size={16} />
//                   </motion.div>
//                 </div>

//                 {/* Card */}
//                 <div
//                   className="glass-card p-5
//                              hover:border-teal/30 hover:shadow-glow-sm
//                              transition-all duration-300"
//                 >
//                   {/* Header */}
//                   <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
//                     <div className="min-w-0">
//                       <h3 className="text-ink font-bold text-base md:text-lg leading-tight">
//                         {exp.role}
//                       </h3>
//                       <p className="text-teal-soft text-sm mt-0.5">{exp.company}</p>
//                     </div>

//                     <div className="flex flex-wrap gap-2 shrink-0">
//                       <span className="pill">{exp.period}</span>
//                       <span className="pill">{exp.type}</span>
//                     </div>
//                   </div>

//                   {/* Description points */}
//                   <ul className="space-y-1.5 mt-3">
//                     {exp.points.map((p) => (
//                       <li
//                         key={p}
//                         className="flex items-start gap-2 text-ink-soft text-sm leading-relaxed"
//                       >
//                         <span className="text-teal-soft mt-1.5 shrink-0">▹</span>
//                         <span>{p}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </AnimatedSection>
//     </div>
//   );
// }



import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <div className="pt-24 pb-14">
      <AnimatedSection className="max-w-6xl mx-auto px-6">
        <SectionTitle caps>EXPERIENCE</SectionTitle>
        <p className="section-subtitle mb-10">
          A timeline of roles, internships, and freelance work.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {experience.map((exp, i) => (
            <motion.div
              key={`${exp.role}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-5 flex flex-col
                         hover:border-teal/30 hover:shadow-glow-sm
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl bg-teal/10 border border-edge-strong
                             grid place-items-center text-teal-soft shrink-0
                             shadow-glow-sm"
                >
                  <Briefcase size={16} />
                </div>

                <div className="min-w-0 flex-grow">
                  <h3 className="text-ink font-bold text-base leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-teal-soft text-sm mt-0.5">{exp.company}</p>
                </div>
              </div>

              {/* Period + Type badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="pill">{exp.period}</span>
                <span className="pill">{exp.type}</span>
              </div>

              {/* Description points */}
              <ul className="space-y-1.5 mt-auto">
                {exp.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-ink-soft text-sm leading-relaxed"
                  >
                    <span className="text-teal-soft mt-1.5 shrink-0">▹</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}