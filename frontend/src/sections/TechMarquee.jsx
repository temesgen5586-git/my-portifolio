const techs = [
  'React', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB',
  'Docker', 'AWS', 'MySQL', 'Git', 'JavaScript',
  'HTML5', 'CSS3', 'Express', 'Python',
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
              key={`${t}-${i}`}
              className="shrink-0 px-5 py-2.5 rounded-full
                         bg-surface border border-edge
                         text-ink-soft text-sm font-mono whitespace-nowrap"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}