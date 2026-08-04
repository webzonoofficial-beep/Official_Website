"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineEvents = [
  { year: "2026", title: "Founded WEBZONO", desc: "Established with a vision to redefine digital excellence." },
  { year: "Q2", title: "First Clients", desc: "Partnered with enterprise businesses to deliver high-end digital experiences." },
  { year: "Q3", title: "Product Expansion", desc: "Launched custom enterprise software and scalable mobile applications." },
  { year: "Q4", title: "AI Services", desc: "Integrated next-generation AI solutions into our core offerings." },
  { year: "Beyond", title: "Future Vision", desc: "Continuing to push the boundaries of technology and design." }
];

export default function AboutSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative z-10 py-32 px-6 md:px-16 lg:px-32 bg-background border-t border-surface-border overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading font-medium mb-6 text-text-main"
          >
            Engineering Digital <span className="text-secondary italic font-light">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-text-muted text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            WEBZONO is a premium technology company specializing in websites, mobile applications, AI solutions and enterprise software for businesses that want to scale.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-2xl bg-white/5 border border-surface-border transition-colors duration-300 hover:bg-white/10 hover:border-white/20"
          >
            <h3 className="text-xl font-heading font-medium text-text-main mb-4 flex items-center gap-3">
              Mission
            </h3>
            <p className="text-text-muted text-sm font-light leading-relaxed">
              Helping businesses build world-class digital products with modern technologies and rigorous engineering.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-10 rounded-2xl bg-white/5 border border-surface-border transition-colors duration-300 hover:bg-white/10 hover:border-white/20"
          >
            <h3 className="text-xl font-heading font-medium text-text-main mb-4 flex items-center gap-3">
              Vision
            </h3>
            <p className="text-text-muted text-sm font-light leading-relaxed">
              To become the most trusted engineering partner for enterprises and fast-growing startups globally.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div ref={targetRef} className="relative max-w-4xl mx-auto py-10">
          {/* Static Background Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-surface-border" />
          
          {/* Animated Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-[1px] bg-text-main"
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {timelineEvents.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex items-center md:justify-between flex-col md:flex-row w-full pl-16 md:pl-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Node */}
                  <div className="absolute left-[22px] md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-background border border-text-main z-10" />

                  {/* Empty space for alignment */}
                  <div className="hidden md:block md:w-[45%]" />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className={`w-full md:w-[45%] p-8 rounded-2xl bg-white/5 border border-surface-border hover:bg-white/10 hover:border-white/20 transition-colors duration-300 ${isEven ? 'md:text-left' : 'md:text-right'}`}
                  >
                    <span className="text-text-main font-medium tracking-widest uppercase text-xs mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-heading font-medium text-text-main mb-2">{item.title}</h3>
                    <p className="text-text-muted text-sm font-light leading-relaxed">{item.desc}</p>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
