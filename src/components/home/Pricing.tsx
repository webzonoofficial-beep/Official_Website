'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import Button from '@/components/ui/Button';

const plans = [
  {
    name: 'Basic',
    price: '₹7,999',
    originalPrice: '₹9,999',
    discount: '20% OFF',
    icon: Zap,
    description: 'Perfect for small businesses and startups launching their first professional online presence.',
    features: [
      'Free Domain',
      '1 Year Hosting',
      '5 Pages Website',
      'Contact Form',
      '5 Business Emails',
      'Responsive Design',
      'SEO Friendly',
      'WhatsApp Integration',
      'SSL Certificate',
      'Admin Panel',
    ],
    popular: false,
    color: 'secondary',
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    price: '₹11,999',
    originalPrice: '₹15,999',
    discount: '25% OFF',
    icon: Star,
    description: 'Our most popular plan. Everything you need to grow your business online with dynamic capabilities.',
    features: [
      'Free Domain',
      '1 Year Hosting',
      '15 Dynamic Pages',
      '10 Business Emails',
      'Responsive Design',
      'SEO Friendly',
      'WhatsApp Integration',
      'SSL Certificate',
      'Admin Panel',
      'Payment Gateway',
    ],
    popular: true,
    color: 'primary',
    cta: 'Start Growing Now',
  },
  {
    name: 'Premium',
    price: '₹16,999',
    originalPrice: '₹24,299',
    discount: '30% OFF',
    icon: Crown,
    description: 'Full-scale eCommerce and enterprise website solution with advanced management capabilities.',
    features: [
      'Free Domain',
      '1 Year Hosting',
      '25+ Dynamic Pages',
      '10 Business Emails',
      'SEO Friendly',
      'WhatsApp Integration',
      'SSL Certificate',
      'Admin Access',
      'Payment Gateway',
      'Product Management',
      'Order Management',
      'CPanel Access',
    ],
    popular: false,
    color: 'accent',
    cta: 'Go Premium',
  },
];

const colorStyles: Record<string, {
  tag: string;
  iconBg: string;
  iconText: string;
  checkBg: string;
  checkText: string;
  glow: string;
  border: string;
  btn: 'primary' | 'secondary' | 'accent' | 'glass' | 'outline';
}> = {
  primary: {
    tag: 'bg-primary/10 text-primary border-primary/20',
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    checkBg: 'bg-primary/10',
    checkText: 'text-primary',
    glow: 'shadow-[0_0_50px_rgba(106,0,255,0.15)] border-primary/30',
    border: 'border-primary/30',
    btn: 'primary',
  },
  secondary: {
    tag: 'bg-secondary/10 text-secondary border-secondary/20',
    iconBg: 'bg-secondary/10',
    iconText: 'text-secondary',
    checkBg: 'bg-secondary/10',
    checkText: 'text-secondary',
    glow: '',
    border: 'border-card-border',
    btn: 'outline',
  },
  accent: {
    tag: 'bg-accent/10 text-accent border-accent/20',
    iconBg: 'bg-accent/10',
    iconText: 'text-amber-500',
    checkBg: 'bg-accent/10',
    checkText: 'text-amber-500',
    glow: '',
    border: 'border-card-border',
    btn: 'secondary',
  },
};

export default function Pricing() {
  const [] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-24 relative bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-primary font-outfit px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            Transparent Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black font-outfit text-foreground tracking-tight"
          >
            Choose Your Growth Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-base md:text-lg mt-4"
          >
            Transparent, all-inclusive pricing. No hidden fees. No surprises.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const styles = colorStyles[plan.color];
            const isPopular = plan.popular;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                className={`relative glass rounded-3xl border p-7 flex flex-col gap-6 transition-all duration-500
                  ${isPopular ? `${styles.glow} scale-105` : 'hover:scale-102'}
                  ${styles.border}
                `}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg font-outfit tracking-wide">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${styles.iconBg} flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${styles.iconText}`} />
                    </div>
                    <h3 className="text-xl font-black font-outfit text-foreground">{plan.name}</h3>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${styles.tag}`}>
                    {plan.discount}
                  </span>
                </div>

                {/* Pricing */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black font-outfit text-foreground">{plan.price}</span>
                    <span className="text-sm text-text-muted line-through">{plan.originalPrice}</span>
                  </div>
                  <p className="text-xs text-text-muted mt-1">One-time project investment</p>
                  <p className="text-sm text-text-muted mt-3 leading-relaxed">{plan.description}</p>
                </div>

                {/* CTA */}
                <a href="#contact" className="w-full">
                  <Button
                    variant={styles.btn}
                    size="md"
                    className="w-full justify-center"
                    magnetic={isPopular}
                  >
                    {plan.cta}
                  </Button>
                </a>

                {/* Features */}
                <div className="flex flex-col gap-3 border-t border-card-border/40 pt-5">
                  <p className="text-xs uppercase tracking-wider font-semibold text-text-muted font-outfit">What&apos;s Included</p>
                  {plan.features.map((feature, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full ${styles.checkBg} flex items-center justify-center flex-shrink-0`}>
                        <Check className={`h-3 w-3 ${styles.checkText}`} />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-text-muted text-sm">
            Need a custom enterprise solution?{' '}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Contact us for a tailored quote →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
