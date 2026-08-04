"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { question: "What services do you offer?", answer: "We provide end-to-end software engineering, including web development, mobile apps, e-commerce, and enterprise software." },
  { question: "How long does a typical project take?", answer: "Depending on complexity, most projects take between 4 to 12 weeks from discovery to launch." },
  { question: "Do you provide ongoing support?", answer: "Yes, we offer long-term support and maintenance contracts for all our enterprise clients." }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-10 py-32 px-6 md:px-16 lg:px-32 bg-background border-t border-surface-border">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-medium mb-6 text-text-main"
          >
            Frequently Asked <span className="text-secondary italic font-light">Questions</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isActive = activeIndex === idx;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isActive 
                    ? "bg-white/[0.04] border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]" 
                    : "bg-white/[0.01] border-white/10 hover:bg-white/[0.03] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className={`text-lg md:text-xl font-heading font-medium pr-8 transition-colors duration-300 ${isActive ? 'text-white' : 'text-text-main group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center border transition-all duration-500 ${
                    isActive ? "bg-blue-500/20 border-blue-500/50 rotate-135" : "bg-white/5 border-white/10 group-hover:bg-white/10"
                  }`}>
                    <Plus className={`w-5 h-5 transition-colors duration-500 ${isActive ? 'text-blue-400' : 'text-white/60 group-hover:text-white'}`} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        <p className="text-text-muted text-base md:text-lg leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
