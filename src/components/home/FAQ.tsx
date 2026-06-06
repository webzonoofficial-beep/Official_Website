'use client';

import { motion } from 'framer-motion';
import Accordion from '@/components/ui/Accordion';

const faqs = [
  {
    id: 'faq-1',
    trigger: 'How long does it take to build a website?',
    content: 'For standard business websites, our typical timeline is 7 to 14 days. More complex SaaS or eCommerce platforms may take 4 to 8 weeks depending on the features required. We prioritize speed without sacrificing quality.',
  },
  {
    id: 'faq-2',
    trigger: 'Do you provide hosting and maintenance?',
    content: 'Yes! All our pricing plans include 1 year of premium hosting. We also offer ongoing maintenance packages to ensure your website remains secure, fast, and up-to-date with the latest technologies.',
  },
  {
    id: 'faq-3',
    trigger: 'Will my website be SEO friendly?',
    content: 'Absolutely. Every website we build is optimized for search engines from the ground up. This includes clean code architecture, fast loading speeds (Core Web Vitals), mobile responsiveness, semantic HTML, and necessary meta tags.',
  },
  {
    id: 'faq-4',
    trigger: 'What is the payment structure?',
    content: 'We typically request a 50% deposit to commence work, with the remaining 50% due upon project completion and your final approval before launch. For larger custom projects, we can arrange milestone-based payments.',
  },
  {
    id: 'faq-5',
    trigger: 'Can I update the website content myself?',
    content: 'Yes. We provide an easy-to-use Admin Panel (CMS) allowing you to seamlessly update text, images, products, and blog posts without needing any coding knowledge. We also provide a training session upon handover.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 relative bg-background border-t border-card-border/40">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-primary font-outfit px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 inline-block"
            >
              Have Questions?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black font-outfit text-foreground tracking-tight mb-6"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-muted text-base md:text-lg mb-8"
            >
              Everything you need to know about our process, pricing, and services. Can&apos;t find the answer you&apos;re looking for? Feel free to reach out to our team.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                Contact Support Team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Accordion items={faqs} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
