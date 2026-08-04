"use client";

import dynamic from "next/dynamic";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

const ServicesSection = dynamic(() => import("@/components/ServicesSection"), { ssr: true });
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), { ssr: true });
const PortfolioSection = dynamic(() => import("@/components/PortfolioSection"), { ssr: true });
const FoundersSection = dynamic(() => import("@/components/FoundersSection"), { ssr: true });

const ProcessSection = dynamic(() => import("@/components/ProcessSection"), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/FAQSection"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  const tilt = use3DTilt(5);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main className="w-full min-h-screen flex flex-col relative overflow-hidden bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 pt-20 pb-12 z-10">
        
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background" />
          {/* Subtle noise/grid texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          {/* Extremely soft gradient spot */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 w-full max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start w-full">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-2 rounded-full border border-surface-border mb-8 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-text-muted">Digital Product Agency</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium leading-[1.05] tracking-tight mb-6 text-text-main"
            >
              We engineer <br className="hidden md:block"/>digital products<br className="hidden md:block"/> that solve <span className="text-secondary italic font-light">complex</span><br className="hidden md:block"/> problems.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-text-muted mb-10 max-w-xl leading-relaxed font-light"
            >
              Partnering with forward-thinking enterprises to design, build, and scale world-class software platforms and applications.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/#contact">
                <button className="relative group overflow-hidden rounded-full bg-white text-black px-8 py-4 font-body font-medium text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
                  <span className="relative z-10 flex items-center gap-2">
                    Start a Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="rounded-full border border-surface-border bg-transparent text-text-main px-8 py-4 font-body font-medium text-sm transition-all duration-300 hover:border-white hover:bg-white/5">
                  Our Work
                </button>
              </Link>
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
            className="flex-1 w-full max-w-2xl relative aspect-[4/3] rounded-[28px] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(59,130,246,0.2)] mt-10 lg:mt-0 group perspective-1000"
          >
            <div className="absolute inset-0 bg-blue-500/10 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            <Image sizes="(max-width: 768px) 100vw, 50vw" 
              src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Premium Futuristic Digital Agency Office" 
              fill 
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              style={{ transform: "translateZ(20px)" }}
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060A]/80 via-transparent to-transparent pointer-events-none z-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04060A]/50 via-transparent to-transparent pointer-events-none z-20" />
          </motion.div>
          
        </div>
      </section>

      <ServicesSection />
      <FeaturesSection />
      <PortfolioSection />
      <FoundersSection />

      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />

    </main>
  );
}
