"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Lightbulb, ShieldCheck, Zap, Users, Target, BarChart, Settings, Layout, Code2, Server, Key, HeartHandshake } from "lucide-react";

export default function PortfolioStory() {
  const timeline = [
    { year: "2026", title: "WEBZONO Founded", desc: "The inception of our premium digital agency." },
    { year: "Phase 1", title: "First Premium Client", desc: "Delivering our first world-class enterprise product." },
    { year: "Phase 2", title: "Growing Digital Solutions", desc: "Expanding our services across global markets." },
    { year: "Phase 3", title: "AI & Enterprise Services", desc: "Integrating advanced AI and enterprise architectures." },
    { year: "Future", title: "Future Vision", desc: "Becoming the most trusted technology partner worldwide." }
  ];

  const values = [
    { icon: <Lightbulb className="w-6 h-6 text-yellow-400" />, title: "Innovation", desc: "Constantly pushing the boundaries of what is possible." },
    { icon: <ShieldCheck className="w-6 h-6 text-green-400" />, title: "Quality", desc: "Uncompromising standards in every line of code." },
    { icon: <Zap className="w-6 h-6 text-blue-400" />, title: "Transparency", desc: "Clear communication and honest processes." },
    { icon: <BarChart className="w-6 h-6 text-purple-400" />, title: "Performance", desc: "Blazing fast digital experiences engineered for scale." },
    { icon: <Users className="w-6 h-6 text-indigo-400" />, title: "Long-Term Partnership", desc: "We grow alongside our clients as dedicated partners." },
    { icon: <HeartHandshake className="w-6 h-6 text-pink-400" />, title: "Customer Success", desc: "Your business metrics are our ultimate KPI." }
  ];

  const features = [
    { icon: <Layout className="w-6 h-6 text-white" />, title: "Custom Design", desc: "Bespoke interfaces tailored to your brand." },
    { icon: <Zap className="w-6 h-6 text-white" />, title: "Fast Performance", desc: "Optimized for speed and high conversion rates." },
    { icon: <Code2 className="w-6 h-6 text-white" />, title: "Modern Technology", desc: "Next.js, React, Node, and cutting-edge stacks." },
    { icon: <Server className="w-6 h-6 text-white" />, title: "Enterprise Security", desc: "Bank-grade security and robust architecture." },
    { icon: <Settings className="w-6 h-6 text-white" />, title: "Transparent Process", desc: "Agile methodologies with clear milestones." },
    { icon: <Target className="w-6 h-6 text-white" />, title: "Dedicated Support", desc: "24/7 maintenance and priority assistance." }
  ];

  return (
    <div id="company" className="w-full bg-[#04060A] overflow-hidden flex flex-col gap-32 py-20 relative z-20">
      
      {/* SECTION 1: Who We Are */}
      <section className="px-6 md:px-16 lg:px-32 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold leading-[1.1] text-white mb-6"
            >
              More Than A <br className="hidden md:block"/>
              <span className="text-white/60">Software Company.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 leading-relaxed font-light"
            >
              WEBZONO builds premium digital experiences that help businesses grow through modern design, powerful technology and long-term partnerships.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group"
          >
            <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop" 
              alt="Premium Workspace"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060A]/80 via-transparent to-transparent opacity-60" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Our Journey */}
      <section className="px-6 md:px-16 lg:px-32 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-sans font-semibold text-white mb-4"
          >
            Our <span className="text-white/60 italic font-light">Journey</span>
          </motion.h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-1/2 md:translate-x-1/2 md:border-l-0">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />
          
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center mb-16 ${idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} flex-row pl-12 md:pl-0`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10" />
              
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:pl-12 text-left" : "md:pr-12 md:text-right"}`}>
                <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-500">
                  <span className="text-xs font-bold tracking-widest uppercase text-white/40 block mb-2">{item.year}</span>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3 & 4: Mission & Vision */}
      <section className="px-6 md:px-16 lg:px-32 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-10 md:p-14 rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-2xl hover:border-white/20 transition-all duration-700"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/50 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20" /> Our Mission
            </h3>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-white">
              “To build digital products that combine <span className="font-medium">exceptional design</span>, cutting-edge technology and measurable <span className="font-medium">business growth</span>.”
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-10 md:p-14 rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-2xl hover:border-white/20 transition-all duration-700"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/50 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20" /> Our Vision
            </h3>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-white">
              “To become one of India’s most trusted <span className="font-medium">premium technology companies</span> delivering world-class digital solutions.”
            </p>
          </motion.div>

        </div>
      </section>

      {/* SECTION 5: Core Values */}
      <section className="px-6 md:px-16 lg:px-32 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-sans font-semibold text-white mb-4"
          >
            Core <span className="text-white/60 italic font-light">Values</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 rounded-[24px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/15 transition-all duration-500 backdrop-blur-xl"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {val.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{val.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6: Why WEBZONO */}
      <section className="px-6 md:px-16 lg:px-32 max-w-7xl mx-auto w-full pb-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-sans font-semibold text-white mb-4"
          >
            Why Businesses Partner With <span className="text-white/60 italic font-light">WEBZONO</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-[24px] bg-black/40 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 shadow-inner">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feat.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
