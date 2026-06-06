'use client';

import { motion } from 'framer-motion';
import { Zap, Monitor, TrendingUp, Shield, Target, Layers } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We utilize component-based methodologies to ship production-ready code rapidly without compromising on quality.',
  },
  {
    icon: Monitor,
    title: 'Mobile Responsive',
    description: 'Every project is built Mobile-First. Pixel-perfect layouts adapt seamlessly across all screen sizes and devices.',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimized',
    description: 'Structured data, optimized meta hierarchy, and Core Web Vitals baked directly into every project architecture.',
  },
  {
    icon: Shield,
    title: 'Secure Infrastructure',
    description: 'SSL certificates, HTTPS enforced, secure API routes, and regular security audits protecting your business data.',
  },
  {
    icon: Target,
    title: 'Conversion Focused',
    description: 'Every page element, CTA placement, and user flow is designed to drive more inquiries and increase your bottom line.',
  },
  {
    icon: Layers,
    title: 'Scalable Solutions',
    description: 'Built on modular, cloud-native foundations that grow alongside your business without costly rewrites.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-24 relative bg-background overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-secondary font-outfit px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 inline-block mb-6"
            >
              Our Edge
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black font-outfit text-foreground tracking-tight mb-6"
            >
              Why Founders Partner With{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">WEBZONO</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-muted text-base md:text-lg leading-relaxed mb-10"
            >
              We are a product development partner that designs, builds, and launches software that solves operational problems and scales smoothly from day one.
            </motion.p>

            <div className="flex flex-col gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07, duration: 0.5 }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-4.5 w-4.5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold font-outfit text-foreground text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-text-muted leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Visual Card Stack */}
          <div className="relative flex flex-col gap-5">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="glass rounded-2xl border border-primary/20 p-6 shadow-lg"
            >
              <div className="flex justify-between items-start mb-5">
                <div>
                  <p className="text-xs uppercase font-mono text-text-muted mb-1">Client Revenue Impact</p>
                  <p className="text-3xl font-black font-outfit text-foreground">₹2.4 Crore</p>
                  <p className="text-xs text-emerald-500 font-semibold mt-1">↑ Generated for clients in FY2025</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-emerald-500" />
                </div>
              </div>
              <div className="w-full h-1.5 bg-card-border/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              </div>
            </motion.div>

            {/* Delivery Speed card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="glass rounded-2xl border border-secondary/20 p-6 shadow-lg ml-8"
            >
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase font-mono mb-0.5">Average Delivery Time</p>
                  <p className="text-2xl font-black font-outfit text-foreground">7–14 Days</p>
                  <p className="text-xs text-text-muted mt-0.5">For standard business websites</p>
                </div>
              </div>
            </motion.div>

            {/* Satisfaction card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="glass rounded-2xl border border-accent/20 p-6 shadow-lg mr-6"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-text-muted uppercase font-mono mb-1">Client Satisfaction Rate</p>
                  <div className="flex items-baseline gap-1">
                    <p className="text-4xl font-black font-outfit text-foreground">98</p>
                    <p className="text-lg font-bold text-primary">%</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((j) => (
                        <div
                          key={j}
                          className={`w-4 h-4 rounded-sm ${i * j < 16 ? 'bg-primary/80' : 'bg-card-border/40'}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
