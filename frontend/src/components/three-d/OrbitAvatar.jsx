// // import { motion } from 'framer-motion';

// // const orbitIcons = [
// //   { label: 'Re',  color: '#61DAFB', angle: 0 },
// //   { label: 'Nd',  color: '#339933', angle: 72 },
// //   { label: 'TS',  color: '#3178C6', angle: 144 },
// //   { label: 'AWS', color: '#FF9900', angle: 216 },
// //   { label: 'Dk',  color: '#2496ED', angle: 288 },
// // ];

// // export default function OrbitAvatar({ src = '/profile.jpg' }) {
// //   return (
// //     <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px]">
// //       {/* Outer glow */}
// //       <div
// //         className="absolute inset-0 rounded-full
// //                    bg-gradient-to-br from-teal-soft/30 via-transparent to-gold/20
// //                    blur-3xl pointer-events-none"
// //         aria-hidden="true"
// //       />

// //       {/* Outer rotating ring with tech icons */}
// //       <motion.div
// //         className="absolute inset-0 rounded-full border border-edge"
// //         animate={{ rotate: 360 }}
// //         transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
// //       >
// //         {orbitIcons.map((icon, i) => {
// //           const angle = (i / orbitIcons.length) * 360;
// //           return (
// //             <div
// //               key={icon.label}
// //               className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full
// //                          bg-base-soft border border-edge-strong
// //                          grid place-items-center font-mono text-xs font-bold
// //                          shadow-glow-sm"
// //               style={{
// //                 top: '50%',
// //                 left: '50%',
// //                 transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg)`,
// //                 color: icon.color,
// //               }}
// //             >
// //               {icon.label}
// //             </div>
// //           );
// //         })}
// //       </motion.div>

// //       {/* Inner counter-rotating ring */}
// //       <motion.div
// //         className="absolute inset-[12%] rounded-full border border-dashed border-teal/20"
// //         animate={{ rotate: -360 }}
// //         transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
// //       />

// //       {/* Profile image */}
// //       <motion.div
// //         initial={{ scale: 0.8, opacity: 0 }}
// //         animate={{ scale: 1, opacity: 1 }}
// //         transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
// //         className="absolute inset-[22%] rounded-full overflow-hidden
// //                    ring-4 ring-teal-soft/30 shadow-glow
// //                    bg-gradient-to-br from-teal-soft to-teal
// //                    grid place-items-center"
// //       >
// //         <span className="text-6xl md:text-7xl font-bold text-base-deep">A</span>
// //       </motion.div>
// //     </div>
// //   );
// // }


// {/* Profile image */}
// <motion.div
//   initial={{ scale: 0.8, opacity: 0 }}
//   animate={{ scale: 1, opacity: 1 }}
//   transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
//   className="absolute inset-[22%] rounded-full overflow-hidden
//              ring-4 ring-teal-soft/30 shadow-glow
//              bg-gradient-to-br from-teal-soft to-teal
//              grid place-items-center"
// >
//   <span className="text-6xl md:text-7xl font-bold text-base-deep">A</span>
// </motion.div>


import { motion } from 'framer-motion';

const orbitIcons = [
  { label: 'Re',  color: '#61DAFB', angle: 0 },
  { label: 'Nd',  color: '#339933', angle: 72 },
  { label: 'TS',  color: '#3178C6', angle: 144 },
  { label: 'AWS', color: '#FF9900', angle: 216 },
  { label: 'Dk',  color: '#2496ED', angle: 288 },
];

export default function OrbitAvatar({ src = '/profile.jpg' }) {
  return (
    <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px]">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full
                   bg-gradient-to-br from-teal-soft/30 via-transparent to-gold/20
                   blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Outer rotating ring with tech icons */}
      <motion.div
        className="absolute inset-0 rounded-full border border-edge"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {orbitIcons.map((icon, i) => {
          const angle = (i / orbitIcons.length) * 360;
          return (
            <div
              key={icon.label}
              className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full
                         bg-base-soft border border-edge-strong
                         grid place-items-center font-mono text-xs font-bold
                         shadow-glow-sm"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg)`,
                color: icon.color,
              }}
            >
              {icon.label}
            </div>
          );
        })}
      </motion.div>

      {/* Inner counter-rotating ring */}
      <motion.div
        className="absolute inset-[12%] rounded-full border border-dashed border-teal/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      {/* Profile image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        className="absolute inset-[22%] rounded-full overflow-hidden
                   ring-4 ring-teal-soft/30 shadow-glow
                   bg-gradient-to-br from-teal-soft to-teal
                   grid place-items-center"
      >
        <img
          src={src}
          alt="Profile"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent) {
              parent.innerHTML =
                '<span class="text-6xl md:text-7xl font-bold text-base-deep">A</span>';
            }
          }}
        />
      </motion.div>
    </div>
  );
}