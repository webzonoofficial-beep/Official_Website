'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, ShoppingBag, Search, Layers, Wrench } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Website Development',
    description: 'Stunning, fast-loading, and responsive business websites, corporate sites, landing pages, and portfolio sites built with clean, modern code.',
    features: ['Business Websites', 'Corporate Portals', 'Landing Pages', 'Portfolio Sites'],
    color: 'primary',
  },
  {
    icon: ShoppingBag,
    title: 'eCommerce Development',
    description: 'Conversion-optimized, secure online stores with custom carts, seamless payment gateways, and complete inventory management systems.',
    features: ['Online Stores', 'Payment Gateways', 'Inventory Systems', 'Order Dashboards'],
    color: 'secondary',
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description: 'Sophisticated interface design, wireframing, design system creation, and immersive user journey mapping that converts.',
    features: ['Wireframes & Prototypes', 'Design Systems', 'User Experience', 'Brand Identity'],
    color: 'accent',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies that drive organic growth. On-page, technical, and local SEO built directly into your website architecture.',
    features: ['On-Page SEO', 'Technical SEO', 'Local SEO', 'Core Web Vitals'],
    color: 'primary',
  },
  {
    icon: Smartphone,
    title: 'Web Applications',
    description: 'Tailored SaaS dashboards, CRM systems, and complex workflow automation platforms engineered for rapid scale.',
    features: ['SaaS Dashboards', 'CRM Systems', 'Business Software', 'Admin Portals'],
    color: 'secondary',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing security audits, performance optimization, server management, and dedicated technical troubleshooting post-launch.',
    features: ['Security Updates', 'Hosting Support', 'Performance Audits', 'Bug Fixes'],
    color: 'accent',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  primary: {
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    text: 'text-primary',
    glow: 'group-hover:shadow-[0_0_30px_rgba(106,0,255,0.12)]',
  },
  secondary: {
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
    text: 'text-secondary',
    glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]',
  },
  accent: {
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    text: 'text-accent',
    glow: 'group-hover:shadow-[0_0_30px_rgba(255,215,0,0.10)]',
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-primary font-outfit px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black font-outfit text-foreground tracking-tight"
          >
            Our Specialized Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-base md:text-lg mt-4 leading-relaxed"
          >
            We deliver engineered digital solutions using modern design systems, optimized frameworks, and cutting-edge technology stacks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`group glass rounded-2xl border border-card-border p-6 flex flex-col gap-5 transition-all duration-500 hover:border-card-border/80 ${colors.glow}`}
              >
                <div className={`inline-flex w-12 h-12 rounded-xl items-center justify-center ${colors.bg} border ${colors.border} transition-all duration-300 group-hover:scale-110`}>
                  <Icon className={`h-6 w-6 ${colors.text}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-outfit text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{service.description}</p>
                </div>
                <ul className="flex flex-col gap-2 mt-auto">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-text-muted">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.bg} border ${colors.border} ${colors.text.replace('text-', 'bg-')}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`text-xs font-semibold ${colors.text} flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300 mt-2`}
                >
                  Inquire About This Service
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
