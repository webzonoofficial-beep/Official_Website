"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Eye, Zap, Handshake, Trophy } from "lucide-react";

const values = [
  { title: "Innovation", desc: "Constantly pushing the boundaries of what is possible with modern technology.", icon: Lightbulb },
  { title: "Quality", desc: "Uncompromising standards ensuring world-class digital products every time.", icon: ShieldCheck },
  { title: "Transparency", desc: "Clear communication, honest pricing, and full visibility into our process.", icon: Eye },
  { title: "Speed", desc: "Agile methodologies delivering complex solutions rapidly without sacrificing stability.", icon: Zap },
  { title: "Partnership", desc: "We don't just build software; we build lasting relationships that grow your business.", icon: Handshake },
  { title: "Success", desc: "Your success is our metric. We win only when your business scales and thrives.", icon: Trophy }
];

export default function ValuesSection() {
  return (
    <section className="relative z-10 py-24 px-6 md:px-16 lg:px-32 bg-background border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-heading font-medium mb-6 text-text-main"
            >
              Our Core <span className="text-secondary italic font-light">Values</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="glass p-8 rounded-2xl border border-surface-border transition-all duration-300 hover:-translate-y-1 hover:border-white/20 group hover:bg-white/5"
            >
              <div className="w-12 h-12 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300 text-text-main">
                <val.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-medium text-text-main mb-3">{val.title}</h3>
              <p className="text-text-muted text-sm font-light leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
