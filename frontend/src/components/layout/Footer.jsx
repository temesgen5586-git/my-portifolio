import { Github, Linkedin, Send, Facebook, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

const socials = [
  { icon: Github, href: profile.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: Send, href: profile.socials.telegram, label: 'Telegram' },
  { icon: Facebook, href: profile.socials.facebook, label: 'Facebook' },
  { icon: Instagram, href: profile.socials.instagram, label: 'Instagram' },
  { icon: Mail, href: profile.socials.email, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-edge bg-base-deep/60 backdrop-blur-xl relative overflow-hidden">
      <div
        className="absolute inset-0 grid-bg opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* <p className="text-ink-soft text-sm">
          Made with <span className="text-teal-soft"></span> {' '}
          <span className="font-mono text-teal-soft">React/Tailwind</span>
        </p> */}

        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 grid place-items-center rounded-full
                         bg-surface border border-edge text-ink-soft
                         hover:text-teal-soft hover:border-edge-strong
                        //  hover:shadow-glow-sm transition-colors duration-300"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        <p className="text-ink-mute text-xs">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}