import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import HeroScene from './HeroScene';
import VideoModal from './VideoModal';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-bg-void flex items-center justify-center">
      {/* 3D Background Scene */}
      <HeroScene />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-void/50 via-transparent to-bg-void z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-syne font-black tracking-tight text-white mb-6 max-w-4xl mx-auto drop-shadow-2xl"
        >
          Websites That Turn <br />
          Visitors Into Customers
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <button 
            onClick={() => setIsVideoModalOpen(true)}
            className="group flex items-center gap-3 text-white font-medium hover:text-accent-cyan transition-colors"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:border-accent-cyan group-hover:bg-accent-cyan/10 transition-all">
              <Play className="w-5 h-5 ml-1" />
            </div>
            Watch Our Story
          </button>
          
          <a 
            href="#contact" 
            className="bg-accent-blue hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
          >
            Get Free Consultation
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex flex-wrap justify-center gap-8 text-sm md:text-base text-text-muted font-medium tracking-wide"
        >
          <span>50+ Projects</span>
          <span className="hidden sm:inline">·</span>
          <span>98% Satisfaction</span>
          <span className="hidden sm:inline">·</span>
          <span>24/7 Support</span>
        </motion.div>
      </div>

      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </section>
  );
}
