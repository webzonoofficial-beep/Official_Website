import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Repeat } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '₹7,999',
    desc: 'For emerging businesses establishing a digital footprint.',
    features: ['5 Page Architecture', 'Responsive Design', 'Basic SEO Setup', 'Standard Security', 'Email Support']
  },
  {
    name: 'Standard',
    price: '₹11,999',
    desc: 'Comprehensive solutions for scaling operations.',
    features: ['15 Dynamic Pages', 'Payment Gateway Integration', 'Admin Dashboard', 'Advanced Analytics', 'Priority Support'],
    isPopular: true
  },
  {
    name: 'Premium',
    price: '₹16,999',
    desc: 'Tailored web applications and complex integrations.',
    features: ['Unlimited Architecture', 'Custom Microservices', 'High-Availability Hosting', 'Dedicated Account Manager', '24/7 SLA Support']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-accent-cyan font-mono text-sm uppercase tracking-widest mb-4">Investment Plans</h2>
          <h3 className="text-4xl md:text-5xl font-syne font-black text-white mb-6">Transparent Corporate Pricing</h3>
          <p className="text-lg text-text-muted">
            Predictable budgeting for enterprise-grade digital infrastructure. Select a tier that aligns with your strategic objectives.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-1000">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }: { plan: any, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative h-[500px] w-full ${plan.isPopular ? 'md:-translate-y-3 z-10' : 'z-0'}`}
      style={{ perspective: 1000 }}
    >
      {/* Floating animation for popular card */}
      {plan.isPopular && (
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 z-[-1]"
        />
      )}

      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* FRONT SIDE */}
        <div 
          className={`absolute inset-0 backface-hidden rounded-2xl border ${
            plan.isPopular 
              ? 'bg-gradient-to-b from-accent-blue/10 to-bg-void border-accent-blue shadow-[0_0_30px_rgba(59,130,246,0.2)]' 
              : 'bg-white/5 border-white/10'
          } p-8 flex flex-col items-center text-center`}
        >
          {plan.isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-blue text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
              Recommended
            </div>
          )}
          <h4 className="text-xl font-syne font-bold text-white mb-2">{plan.name}</h4>
          <p className="text-text-muted text-sm mb-8 h-10">{plan.desc}</p>
          <div className="mb-auto">
            <span className="text-4xl font-syne font-black text-white">{plan.price}</span>
          </div>
          
          <button className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-accent-cyan hover:text-white transition-colors">
            <Repeat className="w-4 h-4" /> Tap to see features
          </button>
        </div>

        {/* BACK SIDE */}
        <div 
          className={`absolute inset-0 backface-hidden rounded-2xl border ${
            plan.isPopular 
              ? 'bg-bg-void border-accent-blue shadow-[0_0_30px_rgba(59,130,246,0.2)]' 
              : 'bg-bg-void border-white/10'
          } p-8 flex flex-col`}
          style={{ transform: "rotateY(180deg)" }}
        >
          <h4 className="text-xl font-syne font-bold text-white mb-6 text-center border-b border-white/10 pb-4">What's Included</h4>
          <ul className="space-y-4 mb-auto">
            {plan.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <Check className={`w-5 h-5 shrink-0 ${plan.isPopular ? 'text-accent-blue' : 'text-accent-cyan'}`} />
                <span className="text-text-primary text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          <a 
            href="#contact" 
            onClick={(e) => e.stopPropagation()}
            className={`w-full py-4 rounded-xl font-semibold text-center transition-all ${
              plan.isPopular 
                ? 'bg-accent-blue text-white hover:bg-blue-500 shadow-lg' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Select Plan
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
