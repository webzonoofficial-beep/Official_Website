"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import Link from "next/link";

const steps = [
  { icon: <Search className="w-6 h-6" />, title: "Discover" },
  { icon: <PenTool className="w-6 h-6" />, title: "Design" },
  { icon: <Code2 className="w-6 h-6" />, title: "Develop" },
  { icon: <Rocket className="w-6 h-6" />, title: "Launch" }
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative z-10 py-32 px-6 md:px-16 lg:px-32 bg-background border-t border-surface-border">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-medium mb-6 text-text-main"
          >
            Our <span className="text-secondary italic font-light">Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <Link href="/portfolio#process" key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center gap-4 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-surface-border flex items-center justify-center text-text-main group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-heading font-medium text-text-main group-hover:text-white transition-colors">{step.title}</h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
