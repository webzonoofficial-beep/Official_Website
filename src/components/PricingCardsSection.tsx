"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  delay?: number;
}

function PricingCard({ title, subtitle, price, features, cta, isPopular, delay = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`relative w-full rounded-2xl flex flex-col p-8 transition-all duration-300 ${isPopular ? 'bg-white text-black scale-105 z-10 shadow-2xl' : 'bg-white/5 border border-surface-border text-text-main hover:bg-white/10 hover:border-white/20'}`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
          Most Popular
        </div>
      )}

      <div>
        <h3 className={`text-xl font-heading font-medium mb-2 ${isPopular ? 'text-black' : 'text-text-main'}`}>{title}</h3>
        <p className={`text-sm mb-6 h-10 ${isPopular ? 'text-gray-600' : 'text-text-muted'}`}>{subtitle}</p>
        
        <div className="mb-8 border-b pb-6 border-white/10">
          <span className={`text-xs uppercase tracking-widest font-medium block mb-2 ${isPopular ? 'text-gray-500' : 'text-text-muted'}`}>Starting From</span>
          <div className="flex items-baseline gap-1">
            <span className={`text-4xl font-heading font-bold ${isPopular ? 'text-black' : 'text-text-main'}`}>{price}</span>
          </div>
        </div>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${isPopular ? 'bg-black/10' : 'bg-white/10'}`}>
              <Check className={`w-3 h-3 ${isPopular ? 'text-black' : 'text-white'}`} strokeWidth={3} />
            </div>
            <span className={`text-sm ${isPopular ? 'text-gray-800' : 'text-text-muted'}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-xl font-heading font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${isPopular ? 'bg-black text-white hover:bg-black/80' : 'bg-white text-black hover:bg-gray-200'}`}>
        {cta}
        <ArrowRight className="w-4 h-4" />
      </button>

    </motion.div>
  );
}

const plans = [
  {
    title: "Essential",
    subtitle: "Ideal for startups and personal brands.",
    price: "₹15,000",
    features: ["Responsive Design", "Premium UI", "Contact Form", "Basic SEO", "Fast Delivery"],
    cta: "Start Project",
    isPopular: false
  },
  {
    title: "Professional",
    subtitle: "Perfect for scaling businesses and agencies.",
    price: "₹35,000",
    features: ["Everything in Essential", "CMS Integration", "Smooth Animations", "Performance Optimization", "Google Integration", "Premium Support"],
    cta: "Start Project",
    isPopular: true
  },
  {
    title: "Enterprise",
    subtitle: "For established brands demanding perfection.",
    price: "₹75,000",
    features: ["Luxury UI/UX", "Custom Architecture", "Custom Features", "Premium Technical SEO", "Advanced Analytics", "Priority Support"],
    cta: "Start Project",
    isPopular: false
  },
  {
    title: "Custom Solutions",
    subtitle: "Complex applications and full-scale systems.",
    price: "Custom",
    features: ["System Integration", "AI Automation", "Cloud Infrastructure", "Custom APIs", "Dedicated Team", "SLA Guarantee"],
    cta: "Book Consultation",
    isPopular: false
  }
];

export default function PricingCardsSection() {
  return (
    <section id="pricing" className="relative z-10 py-32 px-6 md:px-16 lg:px-32 bg-background border-t border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading font-medium mb-6 text-text-main"
          >
            Transparent <span className="text-secondary italic font-light">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-text-muted text-lg font-light max-w-2xl mx-auto"
          >
            Clear, upfront pricing tailored to your engineering needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center">
          {plans.map((plan, idx) => (
            <PricingCard 
              key={idx}
              title={plan.title}
              subtitle={plan.subtitle}
              price={plan.price}
              features={plan.features}
              cta={plan.cta}
              isPopular={plan.isPopular}
              delay={idx * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
