"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Linkedin, Mail, Github, Crown, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Custom hook for 3D Tilt Effect
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

export default function FoundersSection() {
  const tilt1 = use3DTilt(1.5);
  const tilt2 = use3DTilt(1.5);

  return (
    <section className="relative z-10 bg-[#04060A] overflow-hidden pt-40 pb-32 border-t border-surface-border">
      
      {/* Background Environment */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Premium Office Environment"
          fill
          className="object-cover opacity-[0.08] grayscale-[80%]"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04060A] via-[#04060A]/80 to-[#04060A]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-16 lg:px-24 xl:px-32">
        
        {/* Section Header */}
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 font-sans tracking-[0.3em] uppercase text-xs font-semibold mb-6"
          >
            Leadership
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-sans font-semibold tracking-tight mb-8 text-white leading-tight"
          >
            Meet Our Founders
          </motion.h2>
        </div>

        {/* Founders Cards */}
        <div className="flex flex-col gap-24 mb-20 perspective-1000">
          
          {/* Founder 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX: tilt1.rotateX, rotateY: tilt1.rotateY }}
            onMouseMove={tilt1.handleMouseMove}
            onMouseLeave={tilt1.handleMouseLeave}
            className="group relative w-full rounded-[28px] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.1)] overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] transform-style-3d flex flex-col md:flex-row"
          >
            {/* Image Section */}
            <div className="relative w-full md:w-[45%] h-[450px] md:h-auto overflow-hidden bg-[#0a0a0a]/50 group-hover:bg-[#0a0a0a]/30 transition-colors duration-500">
              <Link href="/portfolio#leadership" className="absolute inset-0 z-30 cursor-pointer">
                <span className="sr-only">View Founder Profile</span>
              </Link>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 z-10 p-4">
                <Image 
                  src="/assets/pugazhenthi.png" 
                  alt="Pugazhenthi P"
                  fill
                  className="object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                  unoptimized
                />
              </motion.div>
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-screen z-0 opacity-40 group-hover:opacity-70 transition-opacity duration-700 blur-[60px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#04060A]/80 opacity-0 md:opacity-100 z-20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060A]/80 via-transparent to-transparent opacity-100 md:opacity-0 z-20 pointer-events-none" />
            </div>

            {/* Content Section */}
            <div className="relative z-30 w-full md:w-[55%] p-10 md:p-14 lg:p-20 flex flex-col justify-center transform-translate-z-30">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] text-blue-400 font-semibold tracking-widest uppercase text-xs w-max">
                  <Crown className="w-4 h-4 text-blue-400" />
                  Chairman & CEO
                </span>
              </div>
              <div className="flex flex-col gap-4 mb-8">
                <div className="relative inline-block pb-4 after:absolute after:bottom-0 after:left-0 after:w-24 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-transparent">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-widest text-white uppercase">
                    Pugazhenthi P
                  </h3>
                </div>
                
                <p className="text-[#a1a1aa] text-lg lg:text-xl font-light leading-relaxed max-w-lg mt-4">
                  Leading WEBZONO with innovation, business strategy and customer-first thinking.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110 group/social">
                  <Linkedin className="w-5 h-5 group-hover/social:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110 group/social">
                  <Github className="w-5 h-5 group-hover/social:scale-110 transition-transform duration-300" />
                </a>
                <a href="mailto:webzono.official.in" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110 group/social">
                  <Mail className="w-5 h-5 group-hover/social:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Founder 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX: tilt2.rotateX, rotateY: tilt2.rotateY }}
            onMouseMove={tilt2.handleMouseMove}
            onMouseLeave={tilt2.handleMouseLeave}
            className="group relative w-full rounded-[28px] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(99,102,241,0.1)] overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:border-white/20 hover:shadow-[0_0_60px_rgba(99,102,241,0.25)] transform-style-3d flex flex-col md:flex-row-reverse"
          >
            {/* Image Section */}
            <div className="relative w-full md:w-[45%] h-[450px] md:h-auto overflow-hidden bg-[#0a0a0a]/50 group-hover:bg-[#0a0a0a]/30 transition-colors duration-500">
              <Link href="/portfolio#leadership" className="absolute inset-0 z-30 cursor-pointer">
                <span className="sr-only">View Founder Profile</span>
              </Link>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 z-10 p-4">
                <Image 
                  src="/assets/yuvaraj.png" 
                  alt="Yuvaraj G"
                  fill
                  className="object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                  unoptimized
                />
              </motion.div>
              <div className="absolute inset-0 bg-indigo-500/10 mix-blend-screen z-0 opacity-40 group-hover:opacity-70 transition-opacity duration-700 blur-[60px]" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#04060A]/80 opacity-0 md:opacity-100 z-20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060A]/80 via-transparent to-transparent opacity-100 md:opacity-0 z-20 pointer-events-none" />
            </div>

            {/* Content Section */}
            <div className="relative z-30 w-full md:w-[55%] p-10 md:p-14 lg:p-20 flex flex-col justify-center transform-translate-z-30">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.2)] text-indigo-400 font-semibold tracking-widest uppercase text-xs w-max">
                  <Zap className="w-4 h-4 text-indigo-400" />
                  CTO & Lead Operations
                </span>
              </div>
              <div className="flex flex-col gap-4 mb-8">
                <div className="relative inline-block pb-4 after:absolute after:bottom-0 after:left-0 after:w-24 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-transparent">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-widest text-white uppercase">
                    Yuvaraj G
                  </h3>
                </div>
                
                <p className="text-[#a1a1aa] text-lg lg:text-xl font-light leading-relaxed max-w-lg mt-4">
                  Building scalable technology and ensuring flawless execution across every project.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-110 group/social">
                  <Linkedin className="w-5 h-5 group-hover/social:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-110 group/social">
                  <Github className="w-5 h-5 group-hover/social:scale-110 transition-transform duration-300" />
                </a>
                <a href="mailto:hello@webzono.in" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-110 group/social">
                  <Mail className="w-5 h-5 group-hover/social:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Portfolio CTA */}
        <div className="flex justify-center mt-12">
          <Link href="/team">
            <button className="px-10 py-5 rounded-full bg-white text-black font-semibold text-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3 group">
              Meet Our Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
