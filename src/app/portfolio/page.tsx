"use client";

import dynamic from "next/dynamic";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { useRef } from "react";

// 3D Tilt Hook
function use3DTilt(intensity: number = 2) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
}

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const PortfolioFeaturedProjects = dynamic(() => import("@/components/PortfolioFeaturedProjects"), { ssr: true });
const PortfolioStory = dynamic(() => import("@/components/PortfolioStory"), { ssr: true });
const PortfolioFounders = dynamic(() => import("@/components/PortfolioFounders"), { ssr: true });
const PortfolioServices = dynamic(() => import("@/components/PortfolioServices"), { ssr: true });
const PortfolioCaseStudies = dynamic(() => import("@/components/PortfolioCaseStudies"), { ssr: true });
const PortfolioTech = dynamic(() => import("@/components/PortfolioTech"), { ssr: true });
const PortfolioProcess = dynamic(() => import("@/components/PortfolioProcess"), { ssr: true });
const PortfolioPricing = dynamic(() => import("@/components/PortfolioPricing"), { ssr: true });
const PortfolioTrust = dynamic(() => import("@/components/PortfolioTrust"), { ssr: true });
const PortfolioFAQ = dynamic(() => import("@/components/PortfolioFAQ"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: true });

export default function PortfolioPage() {
  const tilt = use3DTilt(5);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const stats = [
    { label: "Projects Delivered", value: "50+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Fast Delivery", value: "Guaranteed" },
    { label: "Technologies", value: "Modern" }
  ];

  // Generate some random floating particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  return (
    <main className="w-full min-h-screen flex flex-col relative overflow-hidden bg-[#04060A]">
      
      <Navbar />

      {/* 100vh Premium Hero Section */}
      <section id="about" ref={heroRef} className="relative w-full h-[100vh] flex items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 z-10 overflow-hidden">
        
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#04060A]" />
          
          {/* Subtle noise/grid texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          
          {/* Subtle Glows */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" 
          />

          {/* Floating Particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              animate={{ 
                y: [0, -100, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                delay: p.delay,
                ease: "linear"
              }}
              className="absolute rounded-full bg-white/20"
              style={{
                width: p.size,
                height: p.size,
                left: p.left,
                top: p.top
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center h-full pt-16">
          
          {/* Left Column - Content */}
          <div className="flex flex-col items-start justify-center h-full">
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 mb-8 bg-white/[0.02] backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/70">Premium Case Studies</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-sans font-semibold leading-[1.05] tracking-tight mb-8 text-white"
            >
              Our Work Speaks <br />
              <span className="italic font-light text-white/80">Louder Than Words.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed font-light mb-10"
            >
              Explore the premium digital experiences we’ve crafted for ambitious brands and businesses. Every project reflects our commitment to design, performance, and innovation.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5 mb-16 w-full sm:w-auto"
            >
              <button 
                onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3 group"
              >
                View Our Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500" />
              </button>
              <Link href="/#contact">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-transparent text-white font-semibold text-sm transition-all duration-500 hover:bg-white/10 hover:border-white/40 flex items-center justify-center">
                  Start Your Project
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10 w-full"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-2xl font-sans font-semibold text-white">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">{stat.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              y: parallaxY,
              rotateX: tilt.rotateX, 
              rotateY: tilt.rotateY,
              transformStyle: "preserve-3d"
            }}
            onMouseMove={tilt.handleMouseMove}
            onMouseLeave={tilt.handleMouseLeave}
            className="w-full relative aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(59,130,246,0.2)] mt-10 lg:mt-0 group perspective-1000"
          >
            <div className="absolute inset-0 bg-blue-500/10 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            <Image 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop" 
              alt="Premium Digital Product Showcase" 
              fill 
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              style={{ transform: "translateZ(20px)" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060A]/80 via-transparent to-transparent pointer-events-none z-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04060A]/50 via-transparent to-transparent pointer-events-none z-20" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        >
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold">Scroll to explore</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>

      </section>

      {/* The new Company Story Section */}
      <PortfolioStory />

      {/* The new Founders Leadership Section */}
      <PortfolioFounders />

      {/* What We Build Section */}
      <PortfolioServices />

      {/* Featured Projects Showcase */}
      <PortfolioFeaturedProjects />

      {/* In-Depth Case Studies */}
      <PortfolioCaseStudies />

      {/* Premium Technology Experience */}
      <PortfolioTech />

      {/* Our Development Process */}
      <PortfolioProcess />

      {/* Flexible Solutions & Pricing */}
      <PortfolioPricing />

      {/* Trust & Testimonials */}
      <PortfolioTrust />

      {/* Frequently Asked Questions */}
      <PortfolioFAQ />

      {/* Contact Section */}
      <ContactSection />

      <Footer />

    </main>
  );
}
