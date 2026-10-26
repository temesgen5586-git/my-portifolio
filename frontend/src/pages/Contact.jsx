// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Mail,
//   Github,
//   Linkedin,
//   MapPin,
//   Send,
//   CheckCircle2,
//   AlertCircle,
//   Copy,
// } from 'lucide-react';
// import SectionTitle from '@/components/ui/SectionTitle';
// import AnimatedSection from '@/components/ui/AnimatedSection';
// import { profile } from '@/data/profile';

// const infoCards = [
//   {
//     icon: Mail,
//     label: 'Email',
//     value: profile.email,
//     href: `mailto:${profile.email}`,
//     copy: profile.email,
//   },
//   {
//     icon: Linkedin,
//     label: 'LinkedIn',
//     value: 'linkedin.com/in/yourusername',
//     href: profile.socials.linkedin,
//   },
//   {
//     icon: Github,
//     label: 'GitHub',
//     value: 'github.com/yourusername',
//     href: profile.socials.github,
//   },
//   {
//     icon: MapPin,
//     label: 'Location',
//     value: profile.location,
//     href: null,
//   },
// ];

// const initial = { name: '', email: '', subject: '', message: '' };

// export default function Contact({ embedded = false }) {
//   const [form, setForm] = useState(initial);
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState('idle');
//   const [copied, setCopied] = useState(false);

//   const validate = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = 'Name is required';
//     if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email is required';
//     if (!form.message.trim()) e.message = 'Message is required';
//     return e;
//   };

//   const handle = (key) => (ev) => {
//     setForm((f) => ({ ...f, [key]: ev.target.value }));
//     if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
//   };

//   const onSubmit = (ev) => {
//     ev.preventDefault();
//     const e = validate();
//     setErrors(e);
//     if (Object.keys(e).length) return;

//     setStatus('loading');
//     setTimeout(() => {
//       setStatus('success');
//       setForm(initial);
//       setTimeout(() => setStatus('idle'), 4000);
//     }, 800);
//   };

//   const copyEmail = async () => {
//     try {
//       await navigator.clipboard.writeText(profile.email);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch {}
//   };

//   return (
//     <div className={embedded ? '' : 'pt-20 pb-10'}>
//       <AnimatedSection className="max-w-6xl mx-auto px-6">
//         <SectionTitle caps>CONTACT ME</SectionTitle>
//         <p className="section-subtitle mb-8">
//           Have a project, opportunity, or idea? Let&apos;s build something meaningful together.
//         </p>

//         <div className="grid lg:grid-cols-2 gap-6">
//           {/* LEFT — FORM */}
         

//           {/* RIGHT — INFO CARDS */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             className="space-y-3"
//           >
//             {infoCards.map((card, i) => (
//               <motion.div
//                 key={card.label}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 + i * 0.08 }}
//                 whileHover={{ x: 4 }}
//                 className="glass-card p-4 flex items-center gap-3 group"
//               >
//                 <div
//                   className="w-10 h-10 rounded-2xl bg-teal/10 border border-edge
//                              grid place-items-center text-teal-soft shrink-0"
//                 >
//                   <card.icon size={16} />
//                 </div>

//                 <div className="min-w-0 flex-grow">
//                   <p className="text-ink-mute text-[10px] uppercase tracking-widest mb-0.5">
//                     {card.label}
//                   </p>
//                   {card.href ? (
//                     <a
//                       href={card.href}
//                       target={card.href.startsWith('mailto') ? undefined : '_blank'}
//                       rel={
//                         card.href.startsWith('mailto')
//                           ? undefined
//                           : 'noopener noreferrer'
//                       }
//                       className="text-ink font-medium text-sm hover:text-teal-soft
//                                  transition-colors truncate block"
//                     >
//                       {card.value}
//                     </a>
//                   ) : (
//                     <p className="text-ink font-medium text-sm truncate">{card.value}</p>
//                   )}
//                 </div>

//                 {card.copy && (
//                   <button
//                     onClick={copyEmail}
//                     aria-label="Copy email"
//                     className="w-8 h-8 rounded-xl border border-edge text-ink-soft
//                                hover:text-teal-soft hover:border-edge-strong
//                                grid place-items-center transition-all shrink-0"
//                   >
//                     {copied ? (
//                       <CheckCircle2 size={14} className="text-teal-soft" />
//                     ) : (
//                       <Copy size={14} />
//                     )}
//                   </button>
//                 )}
//               </motion.div>
//             ))}

//             {/* <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.55 }}
//               className="glass-card p-4 text-center"
//             >
//               <p className="text-ink-soft text-sm">
//                 Usually responds within{' '}
//                 <span className="text-teal-soft font-semibold">24 hours</span>
//               </p>
//             </motion.div> */}
//           </motion.div>
//            <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="glass-card p-6"
//           >
//             <h2 className="text-lg font-bold text-ink mb-4">Send a message</h2>

//             <form onSubmit={onSubmit} className="space-y-4" noValidate>
//               <div>
//                 <label className="block text-ink-soft text-xs mb-1.5">Name</label>
//                 <input
//                   type="text"
//                   value={form.name}
//                   onChange={handle('name')}
//                   placeholder="Your name"
//                   className={`w-full px-3.5 py-2.5 rounded-2xl bg-surface border
//                              text-ink placeholder:text-ink-mute outline-none
//                              text-sm transition-colors
//                              ${errors.name ? 'border-red-500' : 'border-edge focus:border-edge-strong'}`}
//                 />
//                 {errors.name && (
//                   <p className="text-red-400 text-xs mt-1">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-ink-soft text-xs mb-1.5">Email</label>
//                 <input
//                   type="email"
//                   value={form.email}
//                   onChange={handle('email')}
//                   placeholder="you@example.com"
//                   className={`w-full px-3.5 py-2.5 rounded-2xl bg-surface border
//                              text-ink placeholder:text-ink-mute outline-none
//                              text-sm transition-colors
//                              ${errors.email ? 'border-red-500' : 'border-edge focus:border-edge-strong'}`}
//                 />
//                 {errors.email && (
//                   <p className="text-red-400 text-xs mt-1">{errors.email}</p>
//                 )}
//               </div>

              

//               <div>
//                 <label className="block text-ink-soft text-xs mb-1.5">Message</label>
//                 <textarea
//                   value={form.message}
//                   onChange={handle('message')}
//                   placeholder="Tell me about your project or idea..."
//                   rows={4}
//                   className={`w-full px-3.5 py-2.5 rounded-2xl bg-surface border
//                              text-ink placeholder:text-ink-mute outline-none resize-none
//                              text-sm transition-colors
//                              ${errors.message ? 'border-red-500' : 'border-edge focus:border-edge-strong'}`}
//                 />
//                 {errors.message && (
//                   <p className="text-red-400 text-xs mt-1">{errors.message}</p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 disabled={status === 'loading'}
//                 className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed py-2.5"
//               >
//                 {status === 'loading' ? (
//                   'Sending...'
//                 ) : (
//                   <>
//                     Submit <Send size={16} />
//                   </>
//                 )}
//               </button>

//               {status === 'success' && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="flex items-center gap-2 text-teal-soft text-sm
//                              bg-teal/10 border border-edge rounded-2xl px-3 py-2"
//                 >
//                   <CheckCircle2 size={16} />
//                   Message sent successfully!
//                 </motion.div>
//               )}

//               {status === 'error' && (
//                 <div
//                   className="flex items-center gap-2 text-red-400 text-sm
//                              bg-red-500/10 border border-red-500/30 rounded-2xl px-3 py-2"
//                 >
//                   <AlertCircle size={16} />
//                   Something went wrong. Please try again.
//                 </div>
//               )}
//             </form>
//           </motion.div>
//         </div>
//       </AnimatedSection>
//     </div>
//   );
// }




import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { profile } from '@/data/profile';

// EmailJS settings
const EMAILJS_SERVICE_ID = 'service_8m07roa';
const EMAILJS_TEMPLATE_ID = 'template_fnqs2wi';
const EMAILJS_PUBLIC_KEY = 'aWEw4Z6kiJnKqtb54';

const infoCards = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    copy: profile.email,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    href: profile.socials.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yourusername',
    href: profile.socials.github,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: null,
  },
];

const initial = { name: '', email: '', message: '' };

export default function Contact({ embedded = false }) {
  const formRef = useRef(null);
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
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

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success');
        setForm(initial);
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className={embedded ? '' : 'pt-20 pb-10'}>
      <AnimatedSection className="max-w-6xl mx-auto px-6">
        <SectionTitle caps>CONTACT ME</SectionTitle>
        <p className="section-subtitle mb-8">
          Have a project, opportunity, or idea? Let&apos;s build something meaningful together.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* LEFT — FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6"
          >
            <h2 className="text-lg font-bold text-ink mb-4">Send a message</h2>

            <form ref={formRef} onSubmit={onSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-ink-soft text-xs mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handle('name')}
                  placeholder="Your name"
                  className={`w-full px-3.5 py-2.5 rounded-2xl bg-surface border
                             text-ink placeholder:text-ink-mute outline-none
                             text-sm transition-colors
                             ${errors.name ? 'border-red-500' : 'border-edge focus:border-edge-strong'}`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-ink-soft text-xs mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handle('email')}
                  placeholder="you@example.com"
                  className={`w-full px-3.5 py-2.5 rounded-2xl bg-surface border
                             text-ink placeholder:text-ink-mute outline-none
                             text-sm transition-colors
                             ${errors.email ? 'border-red-500' : 'border-edge focus:border-edge-strong'}`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-ink-soft text-xs mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle('message')}
                  placeholder="Tell me about your project or idea..."
                  rows={4}
                  className={`w-full px-3.5 py-2.5 rounded-2xl bg-surface border
                             text-ink placeholder:text-ink-mute outline-none resize-none
                             text-sm transition-colors
                             ${errors.message ? 'border-red-500' : 'border-edge focus:border-edge-strong'}`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed py-2.5"
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
                             bg-teal/10 border border-edge rounded-2xl px-3 py-2"
                >
                  <CheckCircle2 size={16} />
                  Message sent successfully!
                </motion.div>
              )}

              {status === 'error' && (
                <div
                  className="flex items-center gap-2 text-red-400 text-sm
                             bg-red-500/10 border border-red-500/30 rounded-2xl px-3 py-2"
                >
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
            className="space-y-3"
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className="glass-card p-4 flex items-center gap-3 group"
              >
                <div
                  className="w-10 h-10 rounded-2xl bg-teal/10 border border-edge
                             grid place-items-center text-teal-soft shrink-0"
                >
                  <card.icon size={16} />
                </div>

                <div className="min-w-0 flex-grow">
                  <p className="text-ink-mute text-[10px] uppercase tracking-widest mb-0.5">
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={
                        card.href.startsWith('mailto')
                          ? undefined
                          : 'noopener noreferrer'
                      }
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
                    className="w-8 h-8 rounded-xl border border-edge text-ink-soft
                               hover:text-teal-soft hover:border-edge-strong
                               grid place-items-center transition-all shrink-0"
                  >
                    {copied ? (
                      <CheckCircle2 size={14} className="text-teal-soft" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}