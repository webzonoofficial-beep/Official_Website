"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Gem, SearchCheck, Smartphone, Cpu, HeadphonesIcon, Scaling } from "lucide-react";

const features = [
  {
    title: "Performance Optimization",
    description: "Highly optimized architectures and advanced caching mechanisms ensuring rapid load times.",
    icon: <Zap className="w-6 h-6" />,
    delay: 0.1
  },
  {
    title: "Enterprise Security",
    description: "Strict security protocols, end-to-end encryption, and robust data protection systems.",
    icon: <ShieldCheck className="w-6 h-6" />,
    delay: 0.2
  },
  {
    title: "Cinematic UI/UX",
    description: "Handcrafted design systems engineered for maximum user engagement and brand trust.",
    icon: <Gem className="w-6 h-6" />,
    delay: 0.3
  },
  {
    title: "Search Dominance",
    description: "Technical SEO fundamentals built into the core architecture for organic visibility.",
    icon: <SearchCheck className="w-6 h-6" />,
    delay: 0.4
  },
  {
    title: "Responsive Engineering",
    description: "Fluid, component-driven layouts ensuring perfect experiences across all device ecosystems.",
    icon: <Smartphone className="w-6 h-6" />,
    delay: 0.5
  },
  {
    title: "Intelligent Automation",
    description: "Practical integration of modern machine learning models into your business workflows.",
    icon: <Cpu className="w-6 h-6" />,
    delay: 0.6
  },
  {
    title: "Dedicated Support",
    description: "Ongoing technical support, maintenance, and infrastructure monitoring for total peace of mind.",
    icon: <HeadphonesIcon className="w-6 h-6" />,
    delay: 0.7
  },
  {
    title: "Scalable Infrastructure",
    description: "Distributed architectures designed to seamlessly handle massive enterprise traffic spikes.",
    icon: <Scaling className="w-6 h-6" />,
    delay: 0.8
  }
];

export default function FeaturesSection() {
  return (
    <section className="relative z-10 py-32 px-6 md:px-16 lg:px-32 bg-background border-t border-surface-border">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-medium mb-6 text-text-main"
          >
            Engineering <span className="text-secondary italic font-light">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-text-muted text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Why industry leaders choose us to build their most critical digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="p-8 rounded-2xl bg-white/5 flex flex-col items-start gap-4 border border-surface-border transition-colors duration-300 hover:border-white/20 hover:bg-white/10 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-main group-hover:bg-white group-hover:text-black transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-heading font-medium text-text-main mt-2 group-hover:text-white transition-colors">{feature.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
