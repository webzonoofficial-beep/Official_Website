'use client';

import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    icon: Search,
    description: 'We deep-dive into your product strategy, draft detailed specifications, study market trends, and assess the technological feasibility of your operations.',
    color: 'primary',
  },
  {
    number: '02',
    title: 'Strategy',
    icon: Palette,
    description: 'We structure wireframes, establish modern design systems, map out optimal user paths, and create detailed digital prototypes for your review and approval.',
    color: 'secondary',
  },
  {
    number: '03',
    title: 'Design & Development',
    icon: Code2,
    description: 'Our engineers build your application using clean codebase standards, optimized components, and modular architecture — ready for scale from day one.',
    color: 'accent',
  },
  {
    number: '04',
    title: 'Launch & Growth',
    icon: Rocket,
    description: 'We orchestrate container launches, handle DNS mapping, deploy to fast CDNs, and provide post-launch growth monitoring and support.',
    color: 'primary',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; line: string }> = {
  primary: { bg: 'bg-primary/10', border: 'border-primary/30', text: 'text-primary', line: 'bg-primary' },
  secondary: { bg: 'bg-secondary/10', border: 'border-secondary/30', text: 'text-secondary', line: 'bg-secondary' },
  accent: { bg: 'bg-accent/10', border: 'border-accent/30', text: 'text-amber-500', line: 'bg-accent' },
};

export default function Process() {
  return (
    <section id="process" className="py-24 relative bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-secondary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary font-outfit px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-4"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black font-outfit text-foreground tracking-tight"
          >
            Our Development Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-base md:text-lg mt-4"
          >
            A structured, collaborative approach engineered to turn your ideas into production-ready builds.
          </motion.p>
        </div>

        {/* Steps — Desktop: horizontal timeline; Mobile: vertical */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent origin-left"
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors = colorMap[step.color];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left relative"
                >
                  {/* Step Number Node */}
                  <div className={`relative z-10 w-24 h-24 rounded-2xl ${colors.bg} border-2 ${colors.border} flex flex-col items-center justify-center mb-6 shadow-lg`}>
                    <span className={`text-xs font-mono font-bold ${colors.text} mb-1`}>{step.number}</span>
                    <Icon className={`h-7 w-7 ${colors.text}`} />
                  </div>

                  <h3 className="text-xl font-black font-outfit text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>

                  {/* Mobile connector line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden mt-6 self-center w-px h-10 bg-gradient-to-b from-card-border to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 glass rounded-2xl border border-primary/20 p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
        >
          <div>
            <h3 className="text-2xl font-black font-outfit text-foreground">Ready to start your journey?</h3>
            <p className="text-text-muted text-sm mt-2">Get a free project consultation in under 24 hours.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold font-outfit shadow-[0_0_25px_rgba(106,0,255,0.3)] hover:shadow-[0_0_35px_rgba(106,0,255,0.5)] transition-all duration-300 flex-shrink-0"
          >
            Book Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
