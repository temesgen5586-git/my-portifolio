import { Github, Linkedin, Send, Facebook, Instagram, Mail } from 'lucide-react';
import { profile } from './profile';

export const socials = [
  { icon: Github,    label: 'GitHub',    href: profile.socials.github },
  { icon: Linkedin,  label: 'LinkedIn',  href: profile.socials.linkedin },
  { icon: Send,      label: 'Telegram',  href: profile.socials.telegram },
  { icon: Facebook,  label: 'Facebook',  href: profile.socials.facebook },
  { icon: Instagram, label: 'Instagram', href: profile.socials.instagram },
  { icon: Mail,      label: 'Email',     href: profile.socials.email },
];

export default socials;