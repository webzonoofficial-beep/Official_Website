'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { ArrowRight, Sparkles, Star, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Tech Support' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-primary/10 blur-[100px] md:blur-[160px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-secondary/10 blur-[90px] md:blur-[140px] animate-spin-slow pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full glass border border-card-border/80 shadow-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-accent animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider font-outfit text-foreground/80">
                Innovating Digital Spaces
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight text-foreground leading-[1.05] sm:leading-none"
            >
              Websites That Turn <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Visitors Into Customers
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-text-muted max-w-xl leading-relaxed"
            >
              {`"We deliver highly optimized software with stunning user experiences, engineered to accelerate your business growth and dominate your market."`}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-2">
              <a href="#contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-lg group" magnetic>
                  <span>Get Free Consultation</span>
                  <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#portfolio">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <span>View Portfolio</span>
                </Button>
              </a>
            </motion.div>

            {/* Statistics details */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 border-t border-card-border/60 pt-8 mt-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black font-outfit text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-text-muted font-medium mt-1 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Mockup Graphic Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Visual background circle glow */}
            <div className="absolute w-[280px] md:w-[400px] h-[280px] md:h-[400px] rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl -z-10 pointer-events-none" />

            {/* Glass dashboard mockup */}
            <div className="w-full max-w-[440px] glass rounded-3xl border border-card-border/80 shadow-2xl p-5 relative overflow-hidden backdrop-blur-2xl">
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-card-border/40 pb-4 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono text-text-muted">webzono-console v1.2</span>
              </div>

              {/* Console graphic details */}
              <div className="flex flex-col gap-4 font-sans">
                <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/10">
                  <span className="text-[10px] uppercase font-mono text-primary font-bold">Lighthouse Score</span>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xl font-bold font-outfit text-foreground">Performance Audit</span>
                    <span className="text-xl font-black font-outfit text-emerald-500">99/100</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-card-border/20 border border-card-border/40">
                    <span className="text-[10px] uppercase font-mono text-text-muted">Conversion Gain</span>
                    <p className="text-base font-bold text-foreground mt-0.5">+340%</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-card-border/20 border border-card-border/40">
                    <span className="text-[10px] uppercase font-mono text-text-muted">SEO Ranking</span>
                    <p className="text-base font-bold text-foreground mt-0.5">Page #1</p>
                  </div>
                </div>

                {/* Simulated review */}
                <div className="p-3.5 rounded-xl glass border border-card-border/50 flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary flex-shrink-0">
                    SK
                  </div>
                  <div>
                    <div className="flex gap-0.5 text-accent">
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                      <Star className="h-3 w-3 fill-current" />
                    </div>
                    <p className="text-[11px] text-text-muted mt-1 leading-normal italic">
                      "Rebuilding our site with Webzono tripled our bookings within 4 weeks."
                    </p>
                    <span className="text-[10px] font-bold text-foreground block mt-1">- Sunil K., Founder</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Extra floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-6 -right-4 bg-accent text-black font-bold text-xs px-3.5 py-1.5 rounded-full shadow-[0_4px_15px_rgba(255,217,0,0.4)] font-outfit flex items-center gap-1 z-20 pointer-events-none"
            >
              <Star className="h-3.5 w-3.5 fill-current" />
              <span>Premium Startup Tier</span>
            </motion.div>
          </motion.div>
          
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 select-none pointer-events-none">
          <span className="text-[10px] uppercase font-mono tracking-widest text-text-muted">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-4.5 w-4.5 text-text-muted" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
