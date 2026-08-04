"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Clock, Package, IndianRupee } from "lucide-react";
import clsx from "clsx";

type ServiceType = "Website" | "E-Commerce" | "Mobile App" | "AI Solution" | "ERP" | "CRM";

const pricingData: Record<ServiceType, { budget: string, timeline: string, package: string }> = {
  "Website": { budget: "₹15,000 - ₹75,000", timeline: "2 - 4 Weeks", package: "Business Website" },
  "E-Commerce": { budget: "₹50,000 - ₹1,50,000", timeline: "4 - 6 Weeks", package: "Premium Business" },
  "Mobile App": { budget: "₹1,00,000 - ₹3,00,000", timeline: "8 - 12 Weeks", package: "Enterprise Solutions" },
  "AI Solution": { budget: "₹80,000 - ₹2,50,000", timeline: "6 - 10 Weeks", package: "Enterprise Solutions" },
  "ERP": { budget: "₹2,00,000+", timeline: "12 - 16 Weeks", package: "Enterprise Solutions" },
  "CRM": { budget: "₹1,50,000+", timeline: "10 - 14 Weeks", package: "Enterprise Solutions" }
};

const services: ServiceType[] = ["Website", "E-Commerce", "Mobile App", "AI Solution", "ERP", "CRM"];

export default function PricingCalculatorSection() {
  const [selectedService, setSelectedService] = useState<ServiceType>("Website");

  const currentData = pricingData[selectedService];

  return (
    <section className="relative z-10 py-24 px-6 md:px-16 lg:px-32 bg-background border-t border-surface-border">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 text-primary shadow-[0_0_20px_rgba(0,229,255,0.2)]"
          >
            <Calculator className="w-8 h-8" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4 text-text-main"
          >
            Interactive <span className="text-gradient">Project Estimator</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Select your required solution below to get an instant estimate on timeline and budget.
          </motion.p>
        </div>

        {/* Calculator Interface */}
        <div className="glass rounded-3xl p-8 md:p-12 border border-surface-border relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Toggle Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-10">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={clsx(
                  "relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300",
                  selectedService === service ? "text-black bg-primary shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105" : "text-text-muted hover:text-text-main bg-white/5 border border-white/10 hover:border-white/20"
                )}
              >
                {service}
              </button>
            ))}
          </div>

          {/* Results Area */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              
              {/* Budget */}
              <motion.div 
                key={`budget-${selectedService}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-black/40 border border-white/5"
              >
                <IndianRupee className="w-8 h-8 text-primary mb-4" />
                <span className="text-text-muted text-sm uppercase tracking-widest font-semibold mb-2">Estimated Budget</span>
                <span className="text-2xl md:text-3xl font-heading font-bold text-text-main">{currentData.budget}</span>
              </motion.div>

              {/* Timeline */}
              <motion.div 
                key={`timeline-${selectedService}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-black/40 border border-white/5"
              >
                <Clock className="w-8 h-8 text-accent mb-4" />
                <span className="text-text-muted text-sm uppercase tracking-widest font-semibold mb-2">Estimated Timeline</span>
                <span className="text-2xl md:text-3xl font-heading font-bold text-text-main">{currentData.timeline}</span>
              </motion.div>

              {/* Package */}
              <motion.div 
                key={`package-${selectedService}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-black/40 border border-primary/20 shadow-[0_0_15px_rgba(0,229,255,0.1)]"
              >
                <Package className="w-8 h-8 text-primary mb-4" />
                <span className="text-text-muted text-sm uppercase tracking-widest font-semibold mb-2">Recommended Package</span>
                <span className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{currentData.package}</span>
              </motion.div>

            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
