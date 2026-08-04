"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Crown } from "lucide-react";

const awards = [
  { title: "Best UI Design", org: "Awwwards 2025", icon: <Crown className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]" /> },
  { title: "Innovation Award", org: "Tech Excellence", icon: <Trophy className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(0,229,255,0.6)]" /> },
  { title: "Technology Excellence", org: "Enterprise Tech", icon: <Medal className="w-8 h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.6)]" /> },
  { title: "Customer Choice", org: "B2B Software", icon: <Award className="w-8 h-8 text-accent drop-shadow-[0_0_10px_rgba(0,255,200,0.6)]" /> }
];

export default function AwardsSection() {
  return (
    <section className="relative z-10 py-24 px-6 md:px-16 border-y border-surface-border bg-background overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4"
          >
            Recognition
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4 text-text-main"
          >
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 drop-shadow-[0_0_15px_rgba(250,204,21,0.2)]">Excellence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center border border-surface-border transition-colors duration-500 hover:border-yellow-400/30 group"
            >
              <div className="w-16 h-16 rounded-full bg-black border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                {award.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-text-main mb-2">{award.title}</h3>
              <p className="text-text-muted text-sm tracking-wide uppercase font-semibold">{award.org}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
