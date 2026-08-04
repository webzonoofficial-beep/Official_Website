"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  ExternalLink, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Clock, 
  Globe, 
  CheckCircle2, 
  BarChart3, 
  Layout, 
  TrendingUp 
} from "lucide-react";

const filterCategories = ["All", "Business", "E-Commerce", "Portfolio", "Landing Page", "Web App", "AI"];

const projectsData = [
  {
    id: 1,
    title: "WEBZONO Corporate Website",
    categories: ["Business"],
    status: "Completed",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    description: "A premium corporate website built to establish authority and attract high-value clients with immersive animations and dynamic layouts.",
    info: {
      duration: "4 Weeks",
      platform: "Web & Mobile",
      responsive: "100% Fluid",
      performance: "99/100",
      ui: "Glassmorphism",
      result: "+150% Leads"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
  },
  {
    id: 2,
    title: "Restaurant Management Website",
    categories: ["Business"],
    status: "Completed",
    tech: ["React", "Node.js", "MongoDB"],
    description: "An end-to-end management platform for restaurants, featuring real-time orders, inventory tracking, and staff management.",
    info: {
      duration: "6 Weeks",
      platform: "Web",
      responsive: "Fully Responsive",
      performance: "95/100",
      ui: "Clean & Modern",
      result: "40% Efficiency"
    },
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 3,
    title: "E-Commerce Store",
    categories: ["E-Commerce"],
    status: "Completed",
    tech: ["Next.js", "Express", "MongoDB"],
    description: "A fast, secure, and scalable online store built for a seamless shopping experience with high conversion rates.",
    info: {
      duration: "8 Weeks",
      platform: "Web App",
      responsive: "Mobile-First",
      performance: "98/100",
      ui: "Minimalist",
      result: "3x Sales"
    },
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    title: "Portfolio Website",
    categories: ["Portfolio"],
    status: "Completed",
    tech: ["Next.js", "Tailwind"],
    description: "Elegant portfolio websites that highlight creative work and create a lasting first impression with potential clients.",
    info: {
      duration: "2 Weeks",
      platform: "Web",
      responsive: "100% Fluid",
      performance: "100/100",
      ui: "Dark Mode",
      result: "Brand Growth"
    },
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 5,
    title: "Business Landing Page",
    categories: ["Landing Page"],
    status: "Completed",
    tech: ["React", "Tailwind"],
    description: "High-converting landing pages optimized for marketing campaigns, A/B tested for maximum lead generation.",
    info: {
      duration: "1 Week",
      platform: "Web",
      responsive: "Mobile-First",
      performance: "99/100",
      ui: "High Contrast",
      result: "50% Conversion"
    },
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
  },
  {
    id: 6,
    title: "AI Business Dashboard",
    categories: ["Web App", "AI"],
    status: "Completed",
    tech: ["React", "Node.js", "Charts", "Authentication"],
    description: "Modern AI-powered dashboard solutions to automate workflows, visualize complex data, and enhance business productivity.",
    info: {
      duration: "10 Weeks",
      platform: "Web App",
      responsive: "Desktop Optimized",
      performance: "96/100",
      ui: "Data-Driven",
      result: "Automated Workflows"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
  "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
];

export default function PortfolioFeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => 
    activeFilter === "All" ? true : project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="relative w-full py-32 bg-[#04060A] overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">Featured Projects</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6"
          >
            Every project is carefully crafted with attention to detail, performance and user experience.
          </motion.h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-24 relative z-20">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
                activeFilter === category 
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                >
                  
                  {/* Laptop Mockup Side */}
                  <div className="w-full lg:w-1/2 relative perspective-1000">
                    <motion.div
                      whileHover={{ scale: 1.02, rotateY: isEven ? -5 : 5, rotateX: 2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative w-full aspect-[16/10] bg-[#1A1F2B] rounded-t-2xl rounded-b-sm shadow-2xl overflow-hidden border border-white/10 mx-auto"
                    >
                      {/* Fake MacOS Header */}
                      <div className="h-6 w-full bg-black/40 border-b border-white/5 flex items-center px-4">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                      </div>
                      
                      <div className="relative w-full h-[calc(100%-1.5rem)] overflow-hidden group">
                        <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                          src={project.image} 
                          fill 
                          className="object-cover object-top transition-transform duration-1000 group-hover:scale-110" 
                          alt={project.title} 
                          quality={100}
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                          <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                            <ExternalLink className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* MacBook Base */}
                    <div className="w-[110%] h-4 bg-gradient-to-b from-[#8a8a8a] to-[#4a4a4a] rounded-b-xl -ml-[5%] shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative z-10 border-t border-white/20">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/40 rounded-b-lg" />
                    </div>

                    {/* Floating Device Icons */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full shadow-2xl z-20">
                      <Monitor className="w-5 h-5 text-white/80" />
                      <Tablet className="w-4 h-4 text-white/50" />
                      <Smartphone className="w-4 h-4 text-white/50" />
                    </div>
                  </div>

                  {/* Details Side */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start bg-white/[0.02] border border-white/5 p-8 lg:p-12 rounded-[32px] backdrop-blur-md">
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.categories.map((cat, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium uppercase tracking-widest border border-blue-500/20">
                          {cat}
                        </span>
                      ))}
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium uppercase tracking-widest border border-green-500/20 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-4 tracking-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-md bg-white/5 text-white/70 text-sm border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full mb-10 pt-8 border-t border-white/10">
                      <div className="flex flex-col gap-1">
                        <span className="text-white/40 text-xs uppercase tracking-widest flex items-center gap-1.5"><Clock className="w-3 h-3"/> Duration</span>
                        <span className="text-white text-sm font-medium">{project.info.duration}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white/40 text-xs uppercase tracking-widest flex items-center gap-1.5"><Globe className="w-3 h-3"/> Platform</span>
                        <span className="text-white text-sm font-medium">{project.info.platform}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white/40 text-xs uppercase tracking-widest flex items-center gap-1.5"><Layout className="w-3 h-3"/> UI Style</span>
                        <span className="text-white text-sm font-medium">{project.info.ui}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white/40 text-xs uppercase tracking-widest flex items-center gap-1.5"><Monitor className="w-3 h-3"/> Responsive</span>
                        <span className="text-white text-sm font-medium">{project.info.responsive}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white/40 text-xs uppercase tracking-widest flex items-center gap-1.5"><BarChart3 className="w-3 h-3"/> Performance</span>
                        <span className="text-green-400 text-sm font-medium">{project.info.performance}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-white/40 text-xs uppercase tracking-widest flex items-center gap-1.5"><TrendingUp className="w-3 h-3"/> Result</span>
                        <span className="text-blue-400 text-sm font-medium">{project.info.result}</span>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mt-auto">
                      <button disabled className="px-6 py-3 rounded-full bg-white/5 text-white/50 cursor-not-allowed font-semibold text-sm transition-all duration-300 flex items-center gap-2" title="Live preview currently unavailable">
                        View Live Preview
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <a href="#case-studies" className="px-6 py-3 rounded-full bg-transparent text-white border border-white/20 font-semibold text-sm transition-all duration-300 hover:bg-white/10 flex items-center gap-2">
                        View Case Study
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Special Horizontal Gallery Section */}
      <div className="w-full mt-40 pt-32 pb-20 border-t border-white/5 relative overflow-hidden bg-[#080B12]">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
           <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">Crafting Pixel-Perfect Experiences</h3>
           <p className="text-white/50 text-lg">Desktop, Mobile, Tablet. Dark Mode & Light Mode.</p>
        </div>
        
        {/* Infinite Scroll Track */}
        <div className="relative w-full flex overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#080B12] to-transparent z-10" />
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#080B12] to-transparent z-10" />
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex gap-8 px-4 w-[200%]"
          >
            {[...galleryImages, ...galleryImages].map((img, idx) => (
              <div key={idx} className="relative w-[400px] md:w-[600px] aspect-[16/9] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={img}
                  alt={`Gallery Image ${idx}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">Premium Visuals</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
