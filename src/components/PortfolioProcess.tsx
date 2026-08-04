"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Target, 
  PenTool, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  Headset,
  Zap,
  Shield,
  MonitorSmartphone,
  Handshake,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    description: "Understand the client’s business, goals, audience and project requirements.",
    icon: Search
  },
  {
    id: "02",
    title: "Research & Strategy",
    description: "Research competitors, define project scope and prepare a clear execution strategy.",
    icon: Target
  },
  {
    id: "03",
    title: "UI/UX Design",
    description: "Create modern wireframes, layouts and user-friendly interface designs.",
    icon: PenTool
  },
  {
    id: "04",
    title: "Development",
    description: "Build the project using modern technologies with clean, scalable and maintainable code.",
    icon: Code2
  },
  {
    id: "05",
    title: "Testing & QA",
    description: "Test performance, responsiveness, browser compatibility and security before launch.",
    icon: ShieldCheck
  },
  {
    id: "06",
    title: "Deployment",
    description: "Deploy the project securely with SSL, domain configuration and production optimization.",
    icon: Rocket
  },
  {
    id: "07",
    title: "Support & Maintenance",
    description: "Provide updates, bug fixes, monitoring and continuous improvements after launch.",
    icon: Headset
  }
];

const features = [
  {
    title: "Fast Delivery",
    description: "Deliver projects efficiently without compromising quality.",
    icon: Zap
  },
  {
    title: "Enterprise Security",
    description: "Secure development practices and reliable infrastructure.",
    icon: Shield
  },
  {
    title: "Responsive Design",
    description: "Perfect experience across desktop, tablet and mobile.",
    icon: MonitorSmartphone
  },
  {
    title: "Long-Term Partnership",
    description: "Continuous support and future improvements.",
    icon: Handshake
  }
];

export default function PortfolioProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="process" className="relative w-full py-32 bg-[#04060A] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-32">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">Our Development Process</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6"
          >
            Every project follows a structured workflow to ensure quality, performance and long-term success.
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full" ref={containerRef}>
          
          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden relative flex flex-col gap-10">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-8 w-1 bg-white/5 rounded-full" />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute top-0 left-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            />

            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex items-start gap-8"
              >
                {/* Number Circle */}
                <div className="relative z-10 shrink-0 w-16 h-16 rounded-full bg-[#0A0E17] border-2 border-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <span className="text-xl font-bold text-white">{step.id}</span>
                </div>

                <div className="flex-1 bg-white/[0.02] border border-white/5 p-6 sm:p-8 rounded-[24px] backdrop-blur-md group hover:bg-white/[0.04] transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                    <step.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block relative w-full pb-10">
            {/* Horizontal Line Background */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 rounded-full -translate-y-1/2" />
            
            {/* Animated Horizontal Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full -translate-y-1/2 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            />

            <div className="grid grid-cols-7 gap-6 relative z-10">
              {steps.map((step, idx) => {
                const isTop = idx % 2 === 0;

                return (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: isTop ? -30 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className={`relative flex flex-col items-center ${isTop ? 'justify-end pb-12' : 'justify-start pt-12'}`}
                  >
                    
                    {/* The Card */}
                    <div className={`w-full bg-white/[0.02] border border-white/5 p-5 rounded-[20px] backdrop-blur-md group hover:bg-white/[0.05] transition-colors duration-300 hover:-translate-y-2 ${isTop ? 'order-1 mb-8' : 'order-3 mt-8'} flex flex-col items-center text-center`}>
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                        <step.icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <h3 className="text-[15px] font-semibold text-white mb-2 leading-tight">{step.title}</h3>
                      <p className="text-white/50 text-[12px] leading-relaxed line-clamp-4">{step.description}</p>
                    </div>

                    {/* Connecting node */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0A0E17] border-2 border-blue-500 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                      <span className="text-[11px] font-bold text-white">{step.id}</span>
                    </div>

                    {/* Connecting vertical line segment to card */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] bg-blue-500/30 ${isTop ? 'bottom-1/2 h-16' : 'top-1/2 h-16'}`} />

                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Premium Feature Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-32 pt-20 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-md group hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                <feature.icon className="w-5 h-5 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final Premium CTA */}
      <div className="relative w-full py-24 md:py-32 border-t border-white/5 overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[#080B12] z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-[100px] z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tight mb-8"
          >
            From Idea To Launch — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">We’ve Got You Covered.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-2xl"
          >
            Partner with WEBZONO to transform your vision into a world-class digital product.
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
                Book a Free Consultation
              </button>
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
