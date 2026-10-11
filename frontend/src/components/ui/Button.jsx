import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...rest
}) {
  const base =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'outline'
        ? 'btn-outline'
        : 'inline-flex items-center gap-2 text-teal-soft hover:underline';

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-base px-8 py-3.5',
  };

  const classes = `${base} ${sizes[size] || ''} ${className}`;

  const content = <>{children}</>;

  if (to) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={classes} {...rest}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <a
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
          className={classes}
          {...rest}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${classes} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      {...rest}
    >
      {content}
    </motion.button>
  );
}