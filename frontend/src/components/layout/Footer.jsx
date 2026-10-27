import { Github, Linkedin, Send, Facebook, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

const socials = [
  { icon: Github, href: profile.socials.github, label: 'GitHub', color: '#374151' },
  { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { icon: Send, href: profile.socials.telegram, label: 'Telegram', color: '#229ED9' },
  { icon: Facebook, href: profile.socials.facebook, label: 'Facebook', color: '#1877F2' },
  { icon: Instagram, href: profile.socials.instagram, label: 'Instagram', color: '#E1306C' },
  { icon: Mail, href: profile.socials.email, label: 'Email', color: '#EA4335' },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-edge bg-base-deep/60 backdrop-blur-xl relative overflow-hidden">
      <div
        className="absolute inset-0 grid-bg opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              style={{ backgroundColor: color }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 grid place-items-center rounded-full text-white
                         shadow-md transition-shadow duration-300 hover:shadow-lg"
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