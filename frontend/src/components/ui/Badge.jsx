export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-teal/15 border-edge text-teal-soft',
    gold: 'bg-gold/15 border-gold/30 text-gold',
    outline: 'border-edge text-ink-soft bg-transparent',
    solid: 'bg-teal text-base-deep border-teal',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full
                  text-xs font-medium border
                  ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
}