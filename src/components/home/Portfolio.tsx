'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const filters = ['All', 'Business', 'eCommerce', 'Portfolio', 'SaaS'];

const projects = [
  {
    title: 'Green Bond Marketplace',
    category: 'eCommerce',
    description: 'A premium e-commerce marketplace connecting local farmers to consumers with geolocation, live stock updates, and automated payments.',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://green-bond-eight.vercel.app',
    result: '+340% Conversion',
    bgGradient: 'from-emerald-900/80 to-teal-900/60',
    accent: '#10b981',
    mockLines: ['const farmer = await db.findFarmer(geo);', 'await payments.process(order);', '// Orders: Live ✓'],
  },
  {
    title: 'Travel Booking Platform',
    category: 'SaaS',
    description: 'A complex travel aggregation platform with real-time API integrations for flights, hotel inventory, and custom itineraries.',
    tags: ['Next.js', 'Express.js', 'Tailwind'],
    liveUrl: '#contact',
    result: '5000+ Bookings',
    bgGradient: 'from-blue-900/80 to-indigo-900/60',
    accent: '#6366f1',
    mockLines: ['const flights = await api.search(params);', 'const hotels = await api.findNear(loc);', '// Status: Live ✓'],
  },
  {
    title: 'Restaurant Ordering System',
    category: 'Business',
    description: 'Interactive POS dashboard for tablet terminals with consumer ordering, real-time kitchen alerts, and inventory tracking.',
    tags: ['React Native', 'Firebase', 'Redux'],
    liveUrl: '#contact',
    result: '60% Faster Orders',
    bgGradient: 'from-orange-900/70 to-red-900/50',
    accent: '#f97316',
    mockLines: ['await kitchen.sendOrder(table, items);', 'notify.printer(order.id);', '// Kitchen: Live ✓'],
  },
  {
    title: 'Corporate Portfolio Website',
    category: 'Portfolio',
    description: 'Highly animated corporate website with 3D elements, smooth scroll storytelling, and dynamic CMS integration.',
    tags: ['HTML/CSS', 'GSAP', 'Vite'],
    liveUrl: '#contact',
    result: '95+ Lighthouse Score',
    bgGradient: 'from-purple-900/80 to-violet-900/60',
    accent: '#a855f7',
    mockLines: ['gsap.to(hero, { opacity:1, y:0 });', 'ScrollTrigger.create({...});', '// Score: 99 ✓'],
  },
  {
    title: 'E-Commerce Engine',
    category: 'eCommerce',
    description: 'A fully scalable production storefront with granular order tracking, discount systems, and advanced analytics dashboard.',
    tags: ['MERN Stack', 'Stripe', 'Render'],
    liveUrl: '#contact',
    result: '₹50L+ Revenue Generated',
    bgGradient: 'from-cyan-900/70 to-blue-900/60',
    accent: '#06b6d4',
    mockLines: ['stripe.paymentIntent.create({...});', 'await orders.track(id, status);', '// Revenue: Live ✓'],
  },
  {
    title: 'SaaS Analytics Dashboard',
    category: 'SaaS',
    description: 'Real-time business intelligence dashboard with custom metrics, team collaboration, and automated report generation.',
    tags: ['Next.js', 'PostgreSQL', 'Chart.js'],
    liveUrl: '#contact',
    result: '10x Faster Insights',
    bgGradient: 'from-rose-900/70 to-pink-900/60',
    accent: '#f43f5e',
    mockLines: ['const metrics = await analytics.get();', 'report.generate(team, period);', '// Data: Live ✓'],
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = projects.filter(
    (p) => activeFilter === 'All' || p.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-24 relative bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-accent font-outfit px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
          >
            Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black font-outfit text-foreground tracking-tight"
          >
            Projects We&apos;ve Built
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-base md:text-lg mt-4"
          >
            High-performance applications designed, developed, and deployed by our team.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-semibold font-outfit transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(106,0,255,0.3)]'
                  : 'glass border border-card-border text-text-muted hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                className="group glass rounded-2xl border border-card-border overflow-hidden hover:border-card-border/80 transition-all duration-500 hover:shadow-xl flex flex-col"
              >
                {/* Mock Code Visual */}
                <div className={`relative h-44 bg-gradient-to-br ${project.bgGradient} overflow-hidden`}>
                  <div className="absolute inset-0 p-5 flex flex-col justify-between font-mono text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                      <span className="ml-2 text-white/50 text-[10px]">
                        {project.title.toLowerCase().replace(/ /g, '-')}.ts
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {project.mockLines.map((line, i) => (
                        <span
                          key={i}
                          style={{ color: i === 2 ? project.accent : 'rgba(255,255,255,0.7)' }}
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                    {/* Result badge */}
                    <div
                      className="self-end px-3 py-1 rounded-full text-[10px] font-bold border font-outfit"
                      style={{ borderColor: `${project.accent}40`, backgroundColor: `${project.accent}15`, color: project.accent }}
                    >
                      {project.result}
                    </div>
                  </div>
                  {/* Glow accent */}
                  <div
                    className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-30 pointer-events-none"
                    style={{ backgroundColor: project.accent }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col gap-3 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2.5 py-1 rounded-full glass border border-card-border/60 text-text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-bold font-outfit text-foreground">{project.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed flex-grow">{project.description}</p>

                  <div className="flex gap-3 mt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Preview
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-text-muted text-sm mb-4">Ready to add your project to this list?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold font-outfit shadow-[0_0_20px_rgba(106,0,255,0.3)] hover:bg-primary/90 transition-all duration-300"
          >
            Start Your Project Today
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
