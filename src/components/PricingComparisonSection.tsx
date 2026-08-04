"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const features = [
  { name: "Responsive Design", starter: true, business: true, premium: true, enterprise: true },
  { name: "Contact Form", starter: true, business: true, premium: true, enterprise: true },
  { name: "Basic SEO", starter: true, business: true, premium: true, enterprise: true },
  { name: "CMS Integration", starter: false, business: true, premium: true, enterprise: true },
  { name: "Performance Optimization", starter: false, business: true, premium: true, enterprise: true },
  { name: "Smooth Animations", starter: false, business: true, premium: true, enterprise: true },
  { name: "Custom Features", starter: false, business: false, premium: true, enterprise: true },
  { name: "Advanced 3D Animations", starter: false, business: false, premium: true, enterprise: true },
  { name: "ERP & CRM Integrations", starter: false, business: false, premium: false, enterprise: true },
  { name: "AI Automation", starter: false, business: false, premium: false, enterprise: true },
  { name: "Dedicated Server", starter: false, business: false, premium: false, enterprise: true }
];

export default function PricingComparisonSection() {
  return (
    <section className="relative z-10 py-24 px-6 md:px-16 lg:px-32 bg-background border-t border-surface-border overflow-hidden hidden md:block">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4 text-text-main"
          >
            Compare <span className="text-gradient">Plans</span>
          </motion.h2>
        </div>

        <div className="glass rounded-3xl border border-surface-border overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface/50 border-b border-surface-border">
                <th className="py-6 px-8 text-text-main font-heading font-bold text-lg w-1/3">Features</th>
                <th className="py-6 px-4 text-center text-text-muted font-bold tracking-widest uppercase text-xs">Starter</th>
                <th className="py-6 px-4 text-center text-primary font-bold tracking-widest uppercase text-xs bg-primary/5">Business</th>
                <th className="py-6 px-4 text-center text-text-main font-bold tracking-widest uppercase text-xs">Premium</th>
                <th className="py-6 px-4 text-center text-accent font-bold tracking-widest uppercase text-xs">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <motion.tr 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="border-b border-surface-border/50 hover:bg-white/5 transition-colors duration-300 group"
                >
                  <td className="py-5 px-8 text-text-main font-medium group-hover:text-primary transition-colors">{feature.name}</td>
                  
                  <td className="py-5 px-4 text-center">
                    {feature.starter ? <Check className="w-5 h-5 text-text-muted mx-auto" /> : <Minus className="w-5 h-5 text-surface-border mx-auto" />}
                  </td>
                  
                  <td className="py-5 px-4 text-center bg-primary/5">
                    {feature.business ? <Check className="w-5 h-5 text-primary mx-auto drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]" /> : <Minus className="w-5 h-5 text-primary/30 mx-auto" />}
                  </td>
                  
                  <td className="py-5 px-4 text-center">
                    {feature.premium ? <Check className="w-5 h-5 text-text-main mx-auto" /> : <Minus className="w-5 h-5 text-surface-border mx-auto" />}
                  </td>
                  
                  <td className="py-5 px-4 text-center">
                    {feature.enterprise ? <Check className="w-5 h-5 text-accent mx-auto drop-shadow-[0_0_8px_rgba(0,255,200,0.6)]" /> : <Minus className="w-5 h-5 text-surface-border mx-auto" />}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
