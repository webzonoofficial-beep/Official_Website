import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

const stats = [
  { label: "Projects Delivered", value: "50+", prefix: "" },
  { label: "Client Satisfaction", value: "98", prefix: "%" },
  { label: "Conversion Lift", value: "5x", prefix: "" },
];

const brands = ['Google', 'Microsoft', 'Shopify', 'Stripe', 'Vercel', 'Notion', 'Figma', 'Supabase'];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <section ref={containerRef} className="py-24 bg-zinc-950 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
                {stat.value}{stat.prefix}
              </div>
              <div className="text-lg text-zinc-400 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mb-10">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Trusted by innovative businesses worldwide
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-6">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
        
        <motion.div style={{ x: x1 }} className="flex gap-8 whitespace-nowrap">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/5 text-zinc-400 font-bold text-xl min-w-max">
              <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-sm">{brand[0]}</span>
              {brand}
            </div>
          ))}
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="flex gap-8 whitespace-nowrap">
          {[...brands, ...brands, ...brands].reverse().map((brand, i) => (
            <div key={i} className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/5 text-zinc-400 font-bold text-xl min-w-max">
              <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-sm">{brand[0]}</span>
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
