"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "250+", label: "Projects Delivered" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "120+", label: "Businesses Served" },
  { num: "15+", label: "Industries" }
];

export default function ResultsSection() {
  return (
    <section className="relative z-10 py-24 px-6 md:px-16 border-y border-surface-border bg-background/50 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading font-medium mb-4 text-text-main"
          >
            Engineering <span className="text-secondary italic font-light">Impact</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-text-muted text-lg font-light max-w-2xl mx-auto"
          >
            Metrics that prove our commitment to execution and scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-8 rounded-2xl bg-white/5 border border-surface-border transition-colors duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="text-4xl md:text-5xl font-heading font-medium text-text-main mb-3">
                {stat.num}
              </div>
              <div className="text-sm md:text-base text-text-muted font-light relative z-10">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
