import React from 'react';
import { motion } from 'motion/react';
import { testimonials } from '../data';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  // Duplicate testimonials to create an infinite loop effect
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-32 bg-bg-void border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
        <h2 className="text-accent-cyan font-mono text-sm uppercase tracking-widest mb-4">Client Success Stories</h2>
        <h3 className="text-4xl md:text-5xl font-syne font-black text-white">Don't Just Take Our Word For It</h3>
      </div>

      <div className="relative w-full overflow-hidden flex whitespace-nowrap mask-image-linear">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex gap-6 px-6"
        >
          {repeatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[450px] bg-bg-surface border border-white/5 rounded-3xl p-8 relative group hover:bg-white/5 transition-colors shrink-0 whitespace-normal"
            >
              <Quote className="w-10 h-10 text-accent-blue/20 absolute top-8 right-8 group-hover:text-accent-blue/40 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bg-void to-white/5 flex items-center justify-center font-bold text-lg border border-white/10 text-white shadow-inner">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-white font-syne">{testimonial.name}</h4>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-text-muted leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .mask-image-linear {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
