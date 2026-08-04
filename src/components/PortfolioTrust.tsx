"use client";

import { motion } from "framer-motion";
import { 
  Star,
  Building2,
  HeartPulse,
  GraduationCap,
  Utensils,
  Home,
  ShoppingBag,
  Laptop,
  Landmark,
  Rocket,
  CheckCircle2,
  MessageCircle,
  PenTool,
  Code2,
  Zap,
  Server,
  Headset,
  Briefcase,
  ShieldCheck,
  Search,
  MonitorSmartphone,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Michael R.",
    company: "TechFlow Solutions",
    type: "Corporate Website",
    review: "WEBZONO delivered beyond our expectations. The website is fast, modern and helped us attract more customers.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Sarah L.",
    company: "Elevate SaaS",
    type: "Web Application",
    review: "The team communicated clearly throughout the project and delivered exactly what we envisioned.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "David K.",
    company: "Luxe Retail",
    type: "E-Commerce",
    review: "Excellent UI/UX, premium quality and impressive attention to detail.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Emily W.",
    company: "Growth Agency",
    type: "Landing Page",
    review: "Our website loads faster and looks far more professional than before.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "James T.",
    company: "Bistro 89",
    type: "Restaurant Website",
    review: "Reliable team with strong technical knowledge and outstanding support.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Jessica M.",
    company: "FinTrust Partners",
    type: "Custom Dashboard",
    review: "We would happily work with WEBZONO again for future projects.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
];

const metrics = [
  { value: "50", suffix: "+", label: "Projects Delivered" },
  { value: "100", suffix: "%", label: "Client Satisfaction" },
  { value: "99", suffix: "%", label: "On-Time Delivery" },
  { value: "24/7", suffix: "", label: "Support" },
  { value: "5", suffix: "★", label: "Average Rating" }
];

const industries = [
  { name: "Corporate", icon: Building2 },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "Restaurants", icon: Utensils },
  { name: "Real Estate", icon: Home },
  { name: "Retail", icon: ShoppingBag },
  { name: "Technology", icon: Laptop },
  { name: "Finance", icon: Landmark },
  { name: "Startups", icon: Rocket }
];

const reasons = [
  { name: "Transparent Communication", icon: MessageCircle },
  { name: "Premium Design", icon: PenTool },
  { name: "Modern Technologies", icon: Code2 },
  { name: "Fast Delivery", icon: Zap },
  { name: "Scalable Solutions", icon: Server },
  { name: "Long-Term Support", icon: Headset },
  { name: "Business-Focused Approach", icon: Briefcase }
];

const achievements = [
  { name: "Modern Development Standards", icon: Code2 },
  { name: "Performance Optimized", icon: Zap },
  { name: "Responsive Design", icon: MonitorSmartphone },
  { name: "SEO Ready", icon: Search },
  { name: "Security Focused", icon: ShieldCheck },
  { name: "Future-Ready Architecture", icon: Server }
];

function AnimatedCounter({ value, suffix, duration = 2 }: { value: string, suffix: string, duration?: number }) {
  const [count, setCount] = useState("0");
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/[^0-9]/g, ''));
    if (isNaN(end)) {
      setCount(value);
      return;
    }
    
    const totalFrames = Math.round(duration * 60);
    const increment = end / totalFrames;
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      start += increment;
      if (currentFrame >= totalFrames) {
        setCount(end.toString());
        clearInterval(timer);
      } else {
        setCount(Math.round(start).toString());
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className="text-4xl md:text-6xl font-bold text-white tracking-tight">
      {count}{suffix}
    </span>
  );
}

export default function PortfolioTrust() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="testimonials" className="relative w-full py-32 bg-[#04060A] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">Trusted By Businesses That Value Quality</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6"
          >
            Our clients trust WEBZONO to deliver high-performance digital experiences that create real business impact.
          </motion.h2>
        </div>

        {/* Section 1: Featured Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto min-h-[400px] mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="p-8 md:p-12 rounded-[24px] bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 flex flex-col h-full group w-full">
                <div className="flex text-amber-400 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-xl md:text-2xl leading-relaxed mb-12 italic flex-grow">
                  "{testimonials[currentIndex].review}"
                </p>
                <div className="flex items-center gap-6 pt-8 border-t border-white/10 mt-auto">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative border border-white/20">
                    <Image 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">{testimonials[currentIndex].name}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-white/50 text-sm">
                      <span>{testimonials[currentIndex].company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-blue-400">{testimonials[currentIndex].type}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mb-40">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-white/20 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Section 2: Trust Metrics */}
        <div className="mb-40 flex justify-center w-full">
           <div className="w-full rounded-[32px] bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 p-12 lg:p-20 backdrop-blur-md">
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
               {metrics.map((metric, idx) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: idx * 0.1 }}
                   className="flex flex-col items-center gap-3"
                 >
                   <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                   <span className="text-sm font-semibold text-white/50 uppercase tracking-widest max-w-[120px]">
                     {metric.label}
                   </span>
                 </motion.div>
               ))}
             </div>
           </div>
        </div>

        {/* Section 3: Industries We Serve */}
        <div className="mb-40">
          <motion.h3 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-2xl font-semibold text-white mb-10 text-center"
          >
             Industries We Serve
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <industry.icon className="w-8 h-8 text-white/40 mb-3 group-hover:text-blue-400 transition-colors" />
                <span className="text-white/80 font-medium text-sm text-center">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 4: Why Clients Choose WEBZONO */}
        <div className="mb-40 flex flex-col items-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white mb-10 text-center"
          >
            Why Clients Choose WEBZONO
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="px-6 py-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3 hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300 group cursor-default"
              >
                <reason.icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-white/80 text-sm font-medium">{reason.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 5: Recognition */}
        <div className="mb-40 flex flex-col items-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white mb-10 text-center"
          >
            Our Standards & Capabilities
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{item.name}</h4>
                  <p className="text-white/40 text-xs">Enterprise quality ensured.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Final CTA */}
      <div className="relative w-full py-24 md:py-32 border-t border-white/5 overflow-hidden bg-[#080B12]">
        
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-transparent rounded-full blur-[100px] z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tight mb-8"
          >
            Let’s Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Exceptional Together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-2xl"
          >
            Whether you’re launching a startup or scaling an enterprise, WEBZONO is ready to create your next digital success story.
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
                Contact Our Team
              </button>
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
