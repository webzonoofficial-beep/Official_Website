"use client";

import { motion } from "framer-motion";
import { HeadphonesIcon, Clock, Cpu, FileText, ShieldCheck, Handshake } from "lucide-react";

const retentionFeatures = [
  { title: "Dedicated Support", icon: <HeadphonesIcon className="w-6 h-6" /> },
  { title: "On-Time Delivery", icon: <Clock className="w-6 h-6" /> },
  { title: "Modern Technology", icon: <Cpu className="w-6 h-6" /> },
  { title: "Transparent Pricing", icon: <FileText className="w-6 h-6" /> },
  { title: "Enterprise Security", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Long-Term Partnership", icon: <Handshake className="w-6 h-6" /> }
];

export default function WhyClientsStaySection() {
  return (
    <section className="relative z-10 py-24 px-6 md:px-16 lg:px-32 bg-background border-t border-surface-border">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4 text-text-main"
          >
            Why Clients <span className="text-gradient">Stay With Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Delivering beyond expectations to build relationships that last decades.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {retentionFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-2xl flex items-center gap-4 border border-surface-border transition-all duration-300 hover:border-primary/50 group relative overflow-hidden cursor-default"
            >
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none" />
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300 shadow-[0_0_15px_rgba(0,229,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-text-main relative z-10">{feature.title}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
