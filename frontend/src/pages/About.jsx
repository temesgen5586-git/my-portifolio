import { motion } from 'framer-motion';
import { Download, CheckCircle2, GraduationCap, Award, Target, BookOpen, Rocket, Coffee, Gamepad2, Globe } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { profile } from '@/data/profile';
import { education, certifications } from '@/data/education';

const traits = ['Problem Solver', 'Team Player', 'Tech Enthusiast'];

const journey = [
  { title: 'Learning',      desc: 'Fundamentals of programming, web technologies, and CS.', icon: BookOpen },
  { title: 'Building',      desc: 'Small projects — static sites, simple apps, CLI tools.', icon: Target },
  { title: 'Experimenting', desc: 'Full-stack apps with React, Node.js, and databases.',    icon: Rocket },
  { title: 'Developing',    desc: 'Real projects with authentication, APIs, deployment.',   icon: Award },
  { title: 'Growing',       desc: 'Software engineering principles, architecture, testing.', icon: GraduationCap },
];

const current = [
  { icon: Target,   label: 'Focus',    value: 'Building production-ready web apps' },
  { icon: BookOpen, label: 'Learning', value: 'Advanced system design & cloud' },
  { icon: Rocket,   label: 'Open to',  value: 'Internships, freelance, junior roles' },
];

const funFacts = [
  { icon: Coffee,   text: 'Coffee-driven developer' },
  { icon: Gamepad2, text: 'Strategy game enthusiast' },
  { icon: BookOpen, text: 'Continuous learner' },
  { icon: Globe,    text: 'Open-source contributor' },
];

export default function About() {
  return (
    <div className="pt-32 pb-20">
      {/* SECTION 1 — Profile Hero */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[240px_1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-60 h-60 mx-auto md:mx-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-soft/30 to-gold/20 blur-2xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-teal-soft/30 shadow-glow grid place-items-center bg-gradient-to-br from-teal-soft to-teal">
              <span className="text-7xl font-bold text-base-deep">
                {profile.firstName?.charAt(0) || 'A'}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="pill mb-3">About Me</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink mb-3">
              {profile.name}
            </h1>
            <p className="text-teal-soft font-medium mb-4">{profile.role}</p>
            <p className="text-ink-soft leading-relaxed mb-6 max-w-xl">
              {profile.bio[0]}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {traits.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={profile.cvUrl} className="btn-primary" download>
                <Download size={18} /> Download Resume
              </a>
              <a href="#contact" className="btn-outline">Contact Me</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — Biography */}
      <AnimatedSection className="max-w-4xl mx-auto px-6 mt-20">
        <div className="glass-card p-8 md:p-10 space-y-5">
          {profile.bio.map((para, i) => (
            <p key={i} className="text-ink-soft leading-relaxed">
              {para}
            </p>
          ))}
          <p className="text-ink-soft leading-relaxed">
            My software engineering studies give me a deep understanding of algorithms, data structures, and system design — the foundations that separate good code from great software. I&apos;m constantly learning, building real projects, and looking for opportunities to grow as a developer.
          </p>
        </div>
      </AnimatedSection>

      {/* SECTION 3 — Currently */}
      <AnimatedSection className="max-w-6xl mx-auto px-6 mt-20">
        <SectionTitle>Currently</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {current.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal/10 border border-edge grid place-items-center text-teal-soft mb-4">
                <c.icon size={20} />
              </div>
              <p className="text-ink-mute text-xs uppercase tracking-widest mb-1">{c.label}</p>
              <p className="text-ink font-medium">{c.value}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* SECTION 4 — Developer Journey */}
      <AnimatedSection className="max-w-6xl mx-auto px-6 mt-20">
        <SectionTitle>Developer Journey</SectionTitle>
        <div className="grid md:grid-cols-5 gap-4 mt-10">
          {journey.map((j, i) => (
            <motion.div
              key={j.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-teal/10 border border-edge grid place-items-center text-teal-soft">
                <j.icon size={18} />
              </div>
              <p className="text-ink font-semibold text-sm mb-1">{j.title}</p>
              <p className="text-ink-soft text-xs leading-relaxed">{j.desc}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* SECTION 5 — Education & Certifications */}
      <AnimatedSection className="max-w-6xl mx-auto px-6 mt-20">
        <SectionTitle>Education & Certifications</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="glass-card p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-teal/10 border border-edge grid place-items-center text-teal-soft shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-ink font-bold">{education.degree.title}</h3>
                <p className="text-ink-soft text-sm">{education.degree.institution}</p>
                <p className="text-ink-mute text-xs mt-1">
                  {education.degree.status} · Expected {education.degree.expected}
                </p>
              </div>
            </div>

            <p className="text-ink-mute text-xs uppercase tracking-widest mb-2">Relevant Coursework</p>
            <ul className="grid gap-1.5">
              {education.courses.map((c) => (
                <li key={c} className="flex items-center gap-2 text-ink-soft text-sm">
                  <CheckCircle2 size={14} className="text-teal-soft shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.title} className="glass-card p-5 flex items-start gap-3">
                <Award size={20} className="text-teal-soft shrink-0 mt-0.5" />
                <div>
                  <p className="text-ink font-medium text-sm">{cert.title}</p>
                  <p className="text-ink-soft text-xs">{cert.issuer} · {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* SECTION 6 — Beyond Code */}
      <AnimatedSection className="max-w-6xl mx-auto px-6 mt-20">
        <SectionTitle>Beyond Code</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {funFacts.map((f, i) => (
            <motion.div
              key={f.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 text-center"
            >
              <f.icon size={20} className="text-teal-soft mx-auto mb-2" />
              <p className="text-ink-soft text-xs">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* SECTION 7 — CTA */}
      <AnimatedSection className="max-w-4xl mx-auto px-6 mt-20">
        <div className="glass-card p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-ink mb-3">Let&apos;s build something together</h2>
            <p className="text-ink-soft mb-6">Have a project or opportunity in mind?</p>
            <a href="#contact" className="btn-primary">Get in Touch</a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}