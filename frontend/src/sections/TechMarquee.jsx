// const techs = [
//   'React', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB',
//   'Docker', 'AWS', 'MySQL', 'Git', 'JavaScript',
//   'HTML5', 'CSS3', 'Express', 'Python',
// ];

// export default function TechMarquee() {
//   const items = [...techs, ...techs];

//   return (
//     <section className="py-6 overflow-hidden">
//       <div className="relative">
//         <div
//           className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
//           style={{ background: 'linear-gradient(90deg, #0A1A1A, transparent)' }}
//           aria-hidden="true"
//         />
//         <div
//           className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
//           style={{ background: 'linear-gradient(270deg, #0A1A1A, transparent)' }}
//           aria-hidden="true"
//         />

//         <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
//           {items.map((t, i) => (
//             <div
//               key={`${t}-${i}`}
//               className="shrink-0 px-5 py-2.5 rounded-full
//                          bg-surface border border-edge
//                          text-ink-soft text-sm font-mono whitespace-nowrap"
//             >
//               {t}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// Each technology has its brand color (bg) and a readable text color
const techs = [
  { name: 'React', bg: '#61DAFB', text: '#0B1F2A' },
  { name: 'Node.js', bg: '#339933', text: '#FFFFFF' },
  { name: 'TypeScript', bg: '#3178C6', text: '#FFFFFF' },
  { name: 'Tailwind', bg: '#06B6D4', text: '#04202A' },
  { name: 'MongoDB', bg: '#47A248', text: '#FFFFFF' },
  { name: 'Docker', bg: '#2496ED', text: '#FFFFFF' },
  { name: 'AWS', bg: '#FF9900', text: '#1A1000' },
  { name: 'MySQL', bg: '#4479A1', text: '#FFFFFF' },
  { name: 'Git', bg: '#F05032', text: '#FFFFFF' },
  { name: 'JavaScript', bg: '#F7DF1E', text: '#1A1700' },
  { name: 'HTML5', bg: '#E34F26', text: '#FFFFFF' },
  { name: 'CSS3', bg: '#1572B6', text: '#FFFFFF' },
  { name: 'Express', bg: '#68717F', text: '#FFFFFF' },
  { name: 'Python', bg: '#3776AB', text: '#FFFFFF' },
];

export default function TechMarquee() {
  const items = [...techs, ...techs];

  return (
    <section className="py-6 overflow-hidden">
      <div className="relative">
        <div
          className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #0A1A1A, transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(270deg, #0A1A1A, transparent)' }}
          aria-hidden="true"
        />

        <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              style={{
                backgroundColor: t.bg,
                color: t.text,
                borderColor: 'rgba(255,255,255,0.18)',
              }}
              className="shrink-0 px-5 py-2.5 rounded-full border
                         text-sm font-mono font-medium whitespace-nowrap
                         shadow-md"
            >
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}