"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Server, 
  Layout, 
  Database, 
  PenTool, 
  Cloud, 
  GitMerge,
  ArrowRight,
  CheckCircle2,
  Code2
} from "lucide-react";

const techCategories = [
  {
    id: 1,
    title: "Frontend Engineering",
    description: "Building immersive, lightning-fast user interfaces.",
    icon: Layout,
    items: [
      { name: "React.js & Next.js", desc: "For dynamic, high-performance web applications with Server-Side Rendering capabilities." },
      { name: "Tailwind CSS", desc: "Utility-first framework for scalable, custom styling and rapid UI development." },
      { name: "HTML5, CSS3, ES6+", desc: "Modern core web standards ensuring cross-browser compatibility and accessibility." }
    ]
  },
  {
    id: 2,
    title: "Backend Infrastructure",
    description: "Robust server-side logic and secure data processing.",
    icon: Server,
    items: [
      { name: "Node.js & Express.js", desc: "High-throughput asynchronous processing for scalable network applications." },
      { name: "REST APIs", desc: "Scalable, standardized communication between client and server microservices." },
      { name: "Authentication", desc: "Enterprise-grade identity and access management using JWT and OAuth." }
    ]
  },
  {
    id: 3,
    title: "Database Management",
    description: "Secure, scalable data storage and rapid retrieval.",
    icon: Database,
    items: [
      { name: "MongoDB & Mongoose", desc: "Flexible NoSQL document architecture tailored for rapid horizontal scaling." },
      { name: "Firebase", desc: "Real-time database synchronization for modern, highly-interactive web apps." }
    ]
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "User-centric layouts focused on conversion and aesthetics.",
    icon: PenTool,
    items: [
      { name: "Figma & Adobe XD", desc: "Industry-standard collaborative design tooling for wireframing and prototyping." },
      { name: "Responsive Design", desc: "Fluid, pixel-perfect experiences adapting flawlessly to any device screen." }
    ]
  },
  {
    id: 5,
    title: "Cloud Deployment",
    description: "Zero-downtime releases and global edge delivery networks.",
    icon: Cloud,
    items: [
      { name: "Vercel & Netlify", desc: "Edge hosting infrastructure delivering instant global performance and reliability." },
      { name: "SSL & Optimization", desc: "End-to-end encrypted, asset-compressed, and secure content delivery." }
    ]
  },
  {
    id: 6,
    title: "Version Control",
    description: "Reliable codebase management and seamless collaboration.",
    icon: GitMerge,
    items: [
      { name: "Git & GitHub", desc: "Distributed version control providing strict backup and branch management." },
      { name: "Team Workflow", desc: "Automated CI/CD testing and robust deployment pipelines for teams." }
    ]
  }
];

const principles = [
  "Clean Code",
  "Reusable Components",
  "Performance First",
  "SEO Friendly",
  "Accessibility",
  "Scalable Architecture",
  "Responsive Design",
  "Secure Development"
];

const workflow = ["Planning", "Design", "Development", "Testing", "Deployment", "Support"];

const qualityStats = [
  { value: "95+", label: "Performance Target" },
  { value: "100%", label: "Responsive Design" },
  { value: "A+", label: "Enterprise Security" },
  { value: "Top", label: "SEO Optimized" },
  { value: "Agile", label: "Modern Architecture" }
];

function TechCard({ cat, index }: { cat: typeof techCategories[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full rounded-[24px] bg-white/[0.02] border border-white/10 overflow-hidden cursor-default transition-colors duration-500 hover:bg-white/[0.04] hover:border-white/20 p-8 h-full min-h-[340px] flex flex-col group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          <cat.icon className="w-6 h-6 text-white/80 group-hover:text-blue-400 transition-colors duration-500" />
        </div>
        
        <h3 className="text-2xl font-semibold text-white mb-2">{cat.title}</h3>
        
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div 
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex items-start mt-2"
            >
               <p className="text-white/50 text-lg leading-relaxed">{cat.description}</p>
            </motion.div>
          ) : (
            <motion.div 
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-grow flex flex-col gap-4 mt-4"
            >
              {cat.items.map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-blue-300">{item.name}</span>
                  <span className="text-xs text-white/60 leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-6 border-t border-white/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-xs font-medium text-white/50 group-hover:text-white/80">
          <Code2 className="w-4 h-4" />
          Enterprise Standard
        </div>

      </div>
    </motion.div>
  );
}

export default function PortfolioTech() {
  return (
    <section id="technology" className="relative w-full py-32 bg-[#080B12] overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

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
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">Technology That Powers Innovation</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6"
          >
            We leverage modern technologies to build fast, scalable and future-ready digital solutions.
          </motion.h2>
        </div>

        {/* Section 1: Technology Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-40">
          {techCategories.map((cat, idx) => (
            <TechCard key={cat.id} cat={cat} index={idx} />
          ))}
        </div>

        {/* Section 2: Development Principles */}
        <div className="mb-40 flex flex-col items-center">
          <motion.h3 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-2xl font-semibold text-white mb-10 text-center"
          >
             Core Engineering Principles
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-2 hover:bg-white/[0.08] hover:border-white/30 transition-colors duration-300 cursor-default"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span className="text-white/80 text-sm font-medium">{principle}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Animated Workflow Chain */}
        <div className="mb-40 w-full">
           <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
             {workflow.map((step, idx) => (
               <div key={idx} className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="px-5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white/70 text-sm font-medium tracking-wide uppercase shadow-lg"
                 >
                   {step}
                 </motion.div>
                 
                 {idx < workflow.length - 1 && (
                   <motion.div 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                   >
                     <ArrowRight className="w-5 h-5 text-blue-500/50 hidden md:block" />
                     <ArrowRight className="w-5 h-5 text-blue-500/50 rotate-90 block md:hidden" />
                   </motion.div>
                 )}
               </div>
             ))}
           </div>
        </div>

        {/* Section 4: Quality Standards */}
        <div className="mb-40 w-full border-y border-white/10 py-20 bg-white/[0.01]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 text-center">
             {qualityStats.map((stat, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: idx * 0.1 }}
                 className="flex flex-col items-center gap-3"
               >
                 <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                   {stat.value}
                 </span>
                 <span className="text-sm font-semibold text-white/50 uppercase tracking-widest max-w-[120px]">
                   {stat.label}
                 </span>
               </motion.div>
             ))}
          </div>
        </div>

        {/* Section 5: Why Our Technology Matters */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center pb-20">
           <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
           >
              <Server className="w-8 h-8 text-blue-400" />
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-8"
           >
             Built For Performance Today. <br />
             <span className="italic text-white/70">Ready For Tomorrow.</span>
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-2xl"
           >
             Every WEBZONO project is built with scalable architecture, incredibly clean code, and uncompromising modern development standards. We engineer digital products that dominate and last.
           </motion.p>
        </div>

      </div>
    </section>
  );
}
