"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, HandCoins, Headphones, TrendingUp } from "lucide-react";

const guarantees = [
  { title: "Premium Delivery", icon: <Zap className="w-8 h-8 text-primary" />, delay: 0.1 },
  { title: "Transparent Pricing", icon: <HandCoins className="w-8 h-8 text-accent" />, delay: 0.2 },
  { title: "No Hidden Charges", icon: <ShieldCheck className="w-8 h-8 text-blue-400" />, delay: 0.3 },
  { title: "Dedicated Support", icon: <Headphones className="w-8 h-8 text-pink-400" />, delay: 0.4 },
  { title: "Future Scalability", icon: <TrendingUp className="w-8 h-8 text-yellow-400" />, delay: 0.5 }
];

export default function GuaranteeSection() {
  return (
    <section className="relative z-10 py-16 px-6 md:px-16 lg:px-32 bg-background border-y border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {guarantees.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl glass border border-surface-border flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                {item.icon}
              </div>
              <span className="font-heading font-bold text-text-main group-hover:text-white transition-colors duration-300">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
