"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

export default function FinalCTASection() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden border-t border-surface-border">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
          fill 
          className="object-cover opacity-[0.15]"
          quality={100}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-20">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium mb-6 text-text-main leading-tight tracking-tight"
        >
          Let’s Build Something <br/><span className="text-secondary italic font-light">Extraordinary</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-text-muted text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Partner with our senior engineering and design teams to scale your digital presence.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-body font-medium text-sm flex items-center justify-center gap-3 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-10 py-5 rounded-full bg-transparent border border-surface-border text-text-main font-body font-medium text-sm flex items-center justify-center gap-3 hover:bg-white/5 transition-all duration-300"
          >
            Book Consultation
            <Calendar className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
