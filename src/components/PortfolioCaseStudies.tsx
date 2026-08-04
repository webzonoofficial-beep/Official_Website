"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  ChevronDown,
  Monitor, 
  Smartphone, 
  Tablet,
  CheckCircle2,
  TrendingUp,
  Zap,
  Target,
  BarChart,
  Calendar
} from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "Business Website",
    industry: "Corporate",
    challenge: "The client needed a modern website that built trust and generated more enquiries.",
    solution: "Designed a premium UI, optimized performance, responsive layouts and SEO.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    results: ["Faster loading", "Professional brand image", "Better user engagement"],
    stats: [
      { label: "Performance", value: "+40%" },
      { label: "User Engagement", value: "3x" },
      { label: "SEO Score", value: "99/100" }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
  },
  {
    id: 2,
    title: "Restaurant Website",
    industry: "Food & Hospitality",
    challenge: "Customers found it difficult to view menus and place enquiries.",
    solution: "Created a responsive restaurant website with online menu, gallery and contact integration.",
    tech: ["React", "Node.js", "MongoDB"],
    results: ["Better customer experience", "Increased online enquiries"],
    stats: [
      { label: "Menu Views", value: "+200%" },
      { label: "Enquiries", value: "+85%" },
      { label: "Bounce Rate", value: "-45%" }
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 3,
    title: "E-Commerce Website",
    industry: "Retail",
    challenge: "Improve online sales with a modern shopping experience.",
    solution: "Built a fast, secure and responsive e-commerce platform.",
    tech: ["Next.js", "Express.js", "MongoDB"],
    results: ["Faster shopping experience", "Mobile-friendly", "Secure checkout"],
    stats: [
      { label: "Sales Conversion", value: "+120%" },
      { label: "Load Time", value: "<1s" },
      { label: "Mobile Traffic", value: "+60%" }
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 4,
    title: "AI Dashboard",
    industry: "Technology",
    challenge: "Businesses required a modern analytics dashboard.",
    solution: "Designed a clean dashboard with real-time analytics and AI-ready architecture.",
    tech: ["React", "Node.js", "Charts", "Authentication"],
    results: ["Better decision making", "Scalable architecture", "Improved productivity"],
    stats: [
      { label: "Data Processing", value: "Real-time" },
      { label: "Productivity", value: "+40%" },
      { label: "User Retention", value: "95%" }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  }
];

function CaseStudyCard({ study, index, isExpanded, onToggle }: { study: typeof caseStudies[0], index: number, isExpanded: boolean, onToggle: () => void }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full rounded-[32px] bg-white/[0.02] border border-white/5 overflow-hidden group cursor-pointer hover:bg-white/[0.03] transition-colors duration-500"
      onClick={onToggle}
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch min-h-[400px]`}>
        
        {/* Mockup Preview Side */}
        <motion.div layout className="w-full lg:w-1/2 relative p-8 lg:p-12 flex items-center justify-center bg-black/20">
          <div className="relative w-full aspect-[16/10] bg-[#1A1F2B] rounded-t-xl rounded-b-sm shadow-2xl overflow-hidden border border-white/10 group-hover:scale-105 transition-transform duration-700">
            <div className="h-4 sm:h-6 w-full bg-black/40 border-b border-white/5 flex items-center px-3 sm:px-4">
              <div className="flex gap-1 sm:gap-1.5">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>
            <div className="relative w-full h-[calc(100%-1rem)] sm:h-[calc(100%-1.5rem)]">
              <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                src={study.image} 
                fill 
                className="object-cover object-top" 
                alt={study.title} 
                quality={100}
              />
            </div>
          </div>
          {/* Base of laptop */}
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[80%] h-2 sm:h-3 bg-gradient-to-b from-[#8a8a8a] to-[#4a4a4a] rounded-b-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-10 border-t border-white/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-1 bg-black/40 rounded-b-lg" />
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div layout className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          
          <motion.div layout className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-widest border border-purple-500/20">
              {study.industry}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest border border-blue-500/20">
              Case Study
            </span>
          </motion.div>

          <motion.h3 layout className="text-3xl lg:text-4xl font-semibold text-white mb-4 tracking-tight">
            {study.title}
          </motion.h3>
          
          <motion.p layout className="text-white/60 text-lg leading-relaxed mb-6">
            <strong className="text-white/90">Challenge:</strong> {study.challenge}
          </motion.p>

          {!isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-medium"
            >
              Click to view full case study
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </motion.div>
          )}

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden flex flex-col gap-8 pt-4 border-t border-white/10 mt-4"
              >
                
                <div>
                  <h4 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    Solution
                  </h4>
                  <p className="text-white/60 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    Key Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((res, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-green-500/70" />
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                    <Monitor className="w-5 h-5 text-purple-400" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-md bg-white/5 text-white/70 text-sm border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Statistics inside Expanded View */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {study.stats.map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="flex flex-col gap-1"
                    >
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        {stat.value}
                      </span>
                      <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider font-semibold">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Multi-device preview indicators */}
                <div className="flex items-center gap-4 mt-2">
                   <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest font-semibold">
                      <Monitor className="w-4 h-4" /> Desktop
                   </div>
                   <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest font-semibold">
                      <Tablet className="w-4 h-4" /> Tablet
                   </div>
                   <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest font-semibold">
                      <Smartphone className="w-4 h-4" /> Mobile
                   </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </motion.div>
  );
}

export default function PortfolioCaseStudies() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="case-studies" className="relative w-full bg-[#080B12] overflow-hidden pt-32">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">In-Depth Case Studies</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6"
          >
            Discover how we transform business challenges into measurable digital success.
          </motion.h2>
        </div>

        {/* Case Studies Container */}
        <div className="flex flex-col gap-12 lg:gap-16 mb-40">
          {caseStudies.map((study, idx) => (
            <CaseStudyCard 
              key={study.id} 
              study={study} 
              index={idx} 
              isExpanded={expandedId === study.id}
              onToggle={() => handleToggle(study.id)}
            />
          ))}
        </div>

      </div>

      {/* Final Premium CTA Banner */}
      <div className="relative w-full py-32 border-t border-white/5 overflow-hidden">
        
        {/* CTA Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaborating"
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04060A] via-[#04060A]/80 to-[#04060A]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-10 backdrop-blur-md"
          >
            <Target className="w-10 h-10 text-blue-400" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tight mb-8"
          >
            Ready To Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 italic">Success Story?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-2xl"
          >
            Let’s create your next premium digital product together. Join our list of successful clients.
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
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link href="/#contact" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 rounded-full border border-white/20 bg-transparent text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2 group">
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Schedule Free Consultation
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
