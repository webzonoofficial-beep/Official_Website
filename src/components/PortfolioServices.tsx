"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  ShoppingBag, 
  Briefcase, 
  MousePointerClick, 
  AppWindow, 
  Smartphone, 
  Palette, 
  Bot, 
  Server,
  Zap,
  Shield,
  MonitorSmartphone,
  LifeBuoy,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

const services = [
  {
    title: "Business Websites",
    description: "Modern, responsive websites designed to strengthen your brand and generate business growth.",
    icon: Building2,
    href: "/portfolio#business-websites"
  },
  {
    title: "E-Commerce Websites",
    description: "Fast, secure and scalable online stores built for a seamless shopping experience.",
    icon: ShoppingBag,
    href: "/portfolio#ecommerce"
  },
  {
    title: "Portfolio Websites",
    description: "Elegant portfolio websites that highlight your work and create a lasting first impression.",
    icon: Briefcase,
    href: "/portfolio#portfolio"
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages optimized for marketing campaigns and lead generation.",
    icon: MousePointerClick,
    href: "/portfolio#landing"
  },
  {
    title: "Web Applications",
    description: "Custom web applications built with modern technologies for performance and scalability.",
    icon: AppWindow,
    href: "/portfolio#webapps"
  },
  {
    title: "Android Applications",
    description: "Beautiful and intuitive Android apps delivering smooth user experiences.",
    icon: Smartphone,
    href: "/portfolio#android"
  },
  {
    title: "UI/UX Design",
    description: "Clean, user-focused interfaces designed to improve usability and engagement.",
    icon: Palette,
    href: "/portfolio#uiux"
  },
  {
    title: "AI Solutions",
    description: "Modern AI-powered solutions to automate workflows and enhance business productivity.",
    icon: Bot,
    href: "/portfolio#ai"
  },
  {
    title: "Hosting & Maintenance",
    description: "Reliable hosting, security updates and long-term maintenance for uninterrupted business operations.",
    icon: Server,
    href: "/portfolio#hosting"
  }
];

const features = [
  {
    title: "Lightning Fast Performance",
    icon: Zap
  },
  {
    title: "Enterprise Grade Security",
    icon: Shield
  },
  {
    title: "Responsive Across All Devices",
    icon: MonitorSmartphone
  },
  {
    title: "Long-Term Technical Support",
    icon: LifeBuoy
  }
];

function ServiceCard({ service, index }: { service: any, index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    const maxRotation = 10;
    const newRotateX = ((y - centerY) / centerY) * -maxRotation;
    const newRotateY = ((x - centerX) / centerX) * maxRotation;
    
    setRotateX(newRotateX);
    setRotateY(newRotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.a
      href={service.href}
      id={service.href.split('#')[1]}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="perspective-1000 w-full block cursor-pointer"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative group p-[1px] rounded-[24px] h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Border Glow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-blue-500/50 group-hover:to-purple-500/50 rounded-[24px] transition-colors duration-500" />
        
        {/* Soft Shadow behind */}
        <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]" />
        
        {/* Card Content - Glassmorphism */}
        <div className="relative h-full bg-[#080B12]/80 backdrop-blur-xl rounded-[24px] p-8 md:p-10 flex flex-col items-start overflow-hidden border border-white/5 z-10"
             style={{ transform: "translateZ(30px)" }}>
             
          {/* Glass Reflection Animation */}
          <motion.div 
            initial={{ x: "-100%", opacity: 0 }}
            whileHover={{ x: "200%", opacity: 0.15 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute top-0 -bottom-20 -left-20 w-32 bg-white/40 skew-x-[30deg] blur-[20px] pointer-events-none z-20"
          />

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-500/10 group-hover:border-blue-500/20">
            <service.icon className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors duration-500" />
          </div>
          
          <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
            {service.title}
          </h3>
          
          <p className="text-white/60 font-light leading-relaxed mb-10 flex-grow line-clamp-2">
            {service.description}
          </p>
          
          <button className="flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white mt-auto transition-colors duration-300">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
        </div>
      </motion.div>
    </motion.a>
  );
}

export default function PortfolioServices() {
  return (
    <section id="services" className="relative w-full py-32 bg-[#04060A] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

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
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">What We Build</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6"
          >
            We create scalable, high-performance digital solutions tailored to modern businesses.
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-40">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>

      </div>

      {/* Special Highlight Banner */}
      <div className="relative w-full border-y border-white/5 bg-[#080B12] overflow-hidden">
        
        {/* Banner Background Image */}
        <div className="absolute inset-0 opacity-20 z-0">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
            alt="Developers working on code"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B12] via-[#080B12]/80 to-[#080B12]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-semibold text-white max-w-4xl leading-tight mb-16"
          >
            Every Project Is Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Performance, Security</span> And Business Growth.
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col gap-4 group cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                  {feature.title}
                </h4>
                <div className="w-8 h-0.5 bg-blue-500/50 group-hover:w-16 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
      
    </section>
  );
}
