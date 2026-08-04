"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

interface TestimonialCardProps {
  name: string;
  company: string;
  text: string;
  delay?: number;
}

function TestimonialCard({ name, company, text, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay }}
      className="relative w-full rounded-2xl bg-white/5 border border-surface-border p-8 md:p-12 flex flex-col items-start transition-all duration-300 hover:bg-white/10 hover:border-white/20 group h-full"
    >
      {/* Project Completed Badge */}
      <div 
        className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-text-muted transition-colors duration-300 group-hover:bg-white group-hover:text-black group-hover:border-transparent"
      >
        <CheckCircle2 className="w-3 h-3" />
        Project Completed
      </div>

      {/* Header (Image + Name) */}
      <div 
        className="flex items-center gap-4 mb-6 w-full"
      >
        <div className="w-12 h-12 rounded-full bg-surface-border border border-white/10 flex items-center justify-center overflow-hidden" />
        <div>
          <h4 className="font-heading font-medium text-text-main text-lg md:text-xl">{name}</h4>
          <p className="text-text-muted text-xs md:text-sm tracking-wider uppercase font-medium">{company}</p>
        </div>
      </div>

      {/* 5 Stars */}
      <div className="flex items-center gap-1 mb-6 text-yellow-500/80">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 fill-current" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-text-muted text-base md:text-lg font-light leading-relaxed mb-4">
        "{text}"
      </p>
      
    </motion.div>
  );
}

const testimonials = [
  {
    name: "Alex Sterling",
    company: "Enterprise Corp",
    text: "WEBZONO delivered an absolutely flawless digital product. Their attention to elegant typography and robust engineering completely transformed our online presence. A world-class team."
  },
  {
    name: "Sarah Chen",
    company: "Global Tech Inc.",
    text: "The sheer speed and quality of execution were remarkable. They didn't just build a website; they architected a scalable enterprise platform that feels incredibly premium."
  },
  {
    name: "Michael Hayes",
    company: "Luxury Real Estate",
    text: "From the fluid interactions to the refined design system, every pixel screams perfection. We saw a 300% increase in lead conversions in the first month."
  },
  {
    name: "Elena Rodriguez",
    company: "SaaS Startup",
    text: "Unmatched technical expertise. They implemented a complex dashboard with a UI that rivals Silicon Valley's best. Highly recommend them for serious businesses."
  },
  {
    name: "David Kim",
    company: "Fintech Solutions",
    text: "The security, architecture, and deployment processes were flawless. They operate exactly like a Fortune 500 company, providing complete transparency and 24/7 support."
  },
  {
    name: "Emma Thompson",
    company: "E-Commerce Brand",
    text: "Our digital storefront now feels like a high-end luxury experience. The headless architecture they deployed ensures zero latency, giving us a massive edge over competitors."
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="reviews" className="relative z-10 py-32 px-6 md:px-16 lg:px-32 bg-background border-t border-surface-border overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading font-medium mb-6 text-text-main"
          >
            Client <span className="text-secondary italic font-light">Testimonials</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-text-muted text-lg font-light max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from the visionaries we've partnered with.
          </motion.p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto min-h-[350px] md:min-h-[300px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <TestimonialCard 
                name={testimonials[currentIndex].name}
                company={testimonials[currentIndex].company}
                text={testimonials[currentIndex].text}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-white/20 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
