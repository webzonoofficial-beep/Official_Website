"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Medal, Briefcase, Users, Star, Clock, Linkedin, Mail, BadgeCheck, Github, Crown, Zap } from "lucide-react";

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

export default function PortfolioFounders() {
  const tilt1 = use3DTilt(1.5);
  const tilt2 = use3DTilt(1.5);
  const philosophy = [
    { title: "Innovation First", icon: <Medal className="w-6 h-6 text-yellow-400" />, desc: "Pioneering new technologies to keep our clients ahead of the curve." },
    { title: "Customer First", icon: <Users className="w-6 h-6 text-blue-400" />, desc: "Your business objectives dictate our engineering priorities." },
    { title: "Quality Without Compromise", icon: <Star className="w-6 h-6 text-purple-400" />, desc: "Every product we ship meets world-class enterprise standards." }
  ];

  const achievements = [
    { value: "50+", label: "Projects Delivered", icon: <Briefcase className="w-5 h-5 text-white/50" /> },
    { value: "30+", label: "Happy Clients", icon: <Users className="w-5 h-5 text-white/50" /> },
    { value: "99%", label: "Client Satisfaction", icon: <Star className="w-5 h-5 text-white/50" /> },
    { value: "24/7", label: "Support", icon: <Clock className="w-5 h-5 text-white/50" /> }
  ];

  return (
    <div id="founders" className="w-full bg-[#04060A] overflow-hidden flex flex-col gap-32 py-20 relative z-20">
      
      {/* Header Section */}
      <section className="px-6 md:px-16 lg:px-32 max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold leading-[1.1] text-white mb-6">
            Meet The <span className="italic font-light text-white/70">Leadership</span> <br/>
            Behind WEBZONO
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed font-light">
            Passionate builders creating premium digital experiences with innovation, quality and long-term vision.
          </p>
        </motion.div>
      </section>

      {/* Founders Layout */}
      <section className="px-6 md:px-16 lg:px-32 max-w-[1400px] mx-auto w-full flex flex-col gap-24">
        
        {/* Founder 1: Image Left, Content Right */}
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
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 z-10 p-4">
              <Image 
                src="/api/assets/pugazhenthi.png" 
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
            <div className="flex flex-wrap items-center gap-3 mb-6">
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

              <p className="text-[#a1a1aa] text-lg lg:text-xl font-light leading-relaxed max-w-lg mt-4 mb-2">
                Pugazhenthi leads WEBZONO with a vision of creating premium digital products that combine design excellence, technology and business growth.
              </p>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110 group/social">
                <Linkedin className="w-5 h-5 group-hover/social:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110 group/social">
                <Github className="w-5 h-5 group-hover/social:scale-110 transition-transform duration-300" />
              </a>
              <a href="mailto:hello@webzono.in" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110 group/social">
                <Mail className="w-5 h-5 group-hover/social:scale-110 transition-transform duration-300" />
              </a>
            </div>

            <div className="mb-10">
              <h4 className="text-sm font-bold tracking-widest uppercase text-white/40 mb-4">Leadership Focus</h4>
              <ul className="flex flex-wrap gap-2">
                {["Business Strategy", "Innovation", "Customer Success", "Brand Growth", "Company Vision"].map((focus, i) => (
                  <li key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
                    {focus}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
              <p className="text-white/80 italic font-light text-lg">
                “Great digital experiences are built with passion, precision and purpose.”
              </p>
            </div>
          </div>
        </motion.div>

        {/* Founder 2: Content Left, Image Right */}
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
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 z-10 p-4">
              <Image 
                src="/api/assets/yuvaraj.png" 
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
            <div className="flex flex-wrap items-center gap-3 mb-6">
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
              
              <p className="text-[#a1a1aa] text-lg lg:text-xl font-light leading-relaxed max-w-lg mt-4 mb-2">
                Yuvaraj leads technology, architecture and operations, ensuring every WEBZONO solution is scalable, secure and high-performing.
              </p>
            </div>

            <div className="flex items-center gap-4 mb-10">
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

            <div className="mb-10">
              <h4 className="text-sm font-bold tracking-widest uppercase text-white/40 mb-4">Leadership Focus</h4>
              <ul className="flex flex-wrap gap-2">
                {["Technology", "Architecture", "Operations", "Performance", "Quality Assurance"].map((focus, i) => (
                  <li key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
                    {focus}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
              <p className="text-white/80 italic font-light text-lg">
                “Technology should solve real business problems with simplicity and reliability.”
              </p>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Leadership Philosophy */}
      <section className="px-6 md:px-16 lg:px-32 max-w-7xl mx-auto w-full pt-10">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-sans font-semibold text-white mb-4"
          >
            Leadership <span className="text-white/60 italic font-light">Philosophy</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophy.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group relative p-10 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-2xl hover:bg-white/[0.04] hover:border-white/15 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Counters */}
      <section className="px-6 md:px-16 lg:px-32 max-w-7xl mx-auto w-full pt-10 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achieve, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center p-8 rounded-[24px] bg-black/20 border border-white/5"
            >
              <div className="mb-4 p-3 rounded-full bg-white/5 border border-white/5">
                {achieve.icon}
              </div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5 }}
                className="text-4xl md:text-5xl font-sans font-bold text-white mb-2"
              >
                {achieve.value}
              </motion.span>
              <span className="text-xs font-semibold tracking-widest uppercase text-white/40">{achieve.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
