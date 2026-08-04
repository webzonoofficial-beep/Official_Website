"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How long does a website project take?",
    answer: "Most business websites are completed within 2–4 weeks depending on project scope and requirements."
  },
  {
    question: "Do you build custom websites?",
    answer: "Yes. Every WEBZONO project is custom-designed and developed to match your business goals."
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Absolutely. Every website is fully responsive across desktop, tablet and mobile devices."
  },
  {
    question: "Do you provide domain and hosting?",
    answer: "Yes. We can assist with domain registration, hosting setup, SSL configuration and deployment."
  },
  {
    question: "Will my website be SEO friendly?",
    answer: "Yes. All websites are developed following modern SEO best practices for better search engine visibility."
  },
  {
    question: "Can I update my website later?",
    answer: "Yes. We build scalable websites that can easily be updated or expanded in the future."
  },
  {
    question: "Do you provide maintenance?",
    answer: "Yes. We offer ongoing maintenance, security updates, backups and technical support."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern technologies including HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, MongoDB and Tailwind CSS."
  },
  {
    question: "How do I start a project?",
    answer: "Simply contact us through WhatsApp, Email or the Contact Form. We’ll schedule a free consultation."
  },
  {
    question: "Why choose WEBZONO?",
    answer: "We focus on premium design, modern technologies, transparent communication, business growth and long-term partnerships."
  }
];

export default function PortfolioFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full py-32 bg-[#080B12] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">Frequently Asked Questions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6"
          >
            Everything you need to know before starting your project with WEBZONO.
          </motion.h2>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4 mb-32">
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
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg md:text-xl font-medium pr-8 transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/80'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center border transition-all duration-500 ${
                    isActive ? "bg-blue-500/20 border-blue-500/50 rotate-135" : "bg-white/5 border-white/10"
                  }`}>
                    <Plus className={`w-5 h-5 transition-colors duration-500 ${isActive ? 'text-blue-400' : 'text-white/60'}`} />
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
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-white/60 text-base md:text-lg leading-relaxed">
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

      {/* Bottom Section CTA */}
      <div className="relative w-full py-24 md:py-32 border-t border-white/5 overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[#080B12] z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-r from-blue-600/10 to-transparent rounded-full blur-[100px] z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            <MessageSquare className="w-8 h-8 text-blue-400" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-8"
          >
            Still Have Questions? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Let’s Talk About Your Project.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-2xl"
          >
            Our team is ready to answer your questions and help you build something exceptional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <Link href="/#contact" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 group">
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link href="/#contact" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 rounded-full border border-white/20 bg-transparent text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2 group">
                Book Free Consultation
              </button>
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
