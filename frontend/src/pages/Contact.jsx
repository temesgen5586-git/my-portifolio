import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, Copy } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { profile } from '@/data/profile';

const infoCards = [
  { icon: Mail,     label: 'Email',    value: profile.email,                     href: `mailto:${profile.email}`, copy: profile.email },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourusername',   href: profile.socials.linkedin },
  { icon: Github,   label: 'GitHub',   value: 'github.com/yourusername',        href: profile.socials.github },
  { icon: MapPin,   label: 'Location', value: profile.location,                 href: null },
];

const initial = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handle = (key) => (ev) => {
    setForm((f) => ({ ...f, [key]: ev.target.value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm(initial);
      setTimeout(() => setStatus('idle'), 4000);
    }, 800);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="pt-32 pb-20">
      <AnimatedSection className="max-w-6xl mx-auto px-6">
        <SectionTitle caps>CONTACT ME</SectionTitle>
        <p className="section-subtitle mb-14">
          Have a project, opportunity, or idea? Let&apos;s build something meaningful together.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT — FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <h2 className="text-xl font-bold text-ink mb-6">Send a message</h2>

            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div>
                <label className="block text-ink-soft text-sm mb-2">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handle('name')}
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-2xl bg-surface border
                             text-ink placeholder:text-ink-mute outline-none
                             transition-colors
                             ${errors.name ? 'border-red-500' : 'border-edge focus:border-edge-strong'}`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-ink-soft text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handle('email')}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 rounded-2xl bg-surface border
                             text-ink placeholder:text-ink-mute outline-none
                             transition-colors
                             ${errors.email ? 'border-red-500' : 'border-edge focus:border-edge-strong'}`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-ink-soft text-sm mb-2">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={handle('subject')}
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-2xl bg-surface border border-edge
                             text-ink placeholder:text-ink-mute outline-none
                             focus:border-edge-strong transition-colors"
                />
              </div>

              <div>
                <label className="block text-ink-soft text-sm mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={handle('message')}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className={`w-full px-4 py-3 rounded-2xl bg-surface border
                             text-ink placeholder:text-ink-mute outline-none resize-none
                             transition-colors
                             ${errors.message ? 'border-red-500' : 'border-edge focus:border-edge-strong'}`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  'Sending...'
                ) : (
                  <>
                    Submit <Send size={16} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-teal-soft text-sm
                             bg-teal/10 border border-edge rounded-2xl px-4 py-3"
                >
                  <CheckCircle2 size={16} />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm
                                bg-red-500/10 border border-red-500/30 rounded-2xl px-4 py-3">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>

          {/* RIGHT — INFO CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-teal/10 border border-edge
                                grid place-items-center text-teal-soft shrink-0">
                  <card.icon size={18} />
                </div>

                <div className="min-w-0 flex-grow">
                  <p className="text-ink-mute text-xs uppercase tracking-widest mb-0.5">
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={card.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="text-ink font-medium text-sm hover:text-teal-soft
                                 transition-colors truncate block"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-ink font-medium text-sm truncate">{card.value}</p>
                  )}
                </div>

                {card.copy && (
                  <button
                    onClick={copyEmail}
                    aria-label="Copy email"
                    className="w-9 h-9 rounded-xl border border-edge text-ink-soft
                               hover:text-teal-soft hover:border-edge-strong
                               grid place-items-center transition-all shrink-0"
                  >
                    {copied ? <CheckCircle2 size={14} className="text-teal-soft" /> : <Copy size={14} />}
                  </button>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="glass-card p-5 text-center"
            >
              <p className="text-ink-soft text-sm">
                Usually responds within <span className="text-teal-soft font-semibold">24 hours</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}