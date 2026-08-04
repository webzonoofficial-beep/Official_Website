"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import clsx from "clsx";

const filters = ["All", "Websites", "Apps", "E-Commerce", "UI/UX"];

const projects = [
  {
    id: 1,
    title: "Corporate Website",
    category: "Websites",
    image: "/assets/mockup_corporate.png",
    description: "Ultra-premium corporate presence for a Fortune 500 firm.",
    tech: ["Next.js", "Framer Motion", "Three.js"],
  },
  {
    id: 2,
    title: "Restaurant Website",
    category: "Websites",
    image: "/assets/mockup_restaurant.png",
    description: "Luxury dark-themed dining experience with reservation system.",
    tech: ["React", "Tailwind CSS", "Node.js"],
  },
  {
    id: 3,
    title: "Hospital Website",
    category: "Websites",
    image: "/assets/mockup_hospital.png",
    description: "Modern, secure healthcare portal and patient dashboard.",
    tech: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    id: 4,
    title: "School / College Website",
    category: "Websites",
    image: "/assets/mockup_school.png",
    description: "Futuristic university platform with animated campus map.",
    tech: ["React", "GSAP", "WebGL"],
  },
  {
    id: 5,
    title: "Real Estate Website",
    category: "Websites",
    image: "/assets/mockup_realestate.png",
    description: "High-end property listings with 3D virtual tours.",
    tech: ["Next.js", "Three.js", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "E-Commerce Store",
    category: "E-Commerce",
    image: "/assets/mockup_ecommerce.png",
    description: "Sleek fashion e-commerce with headless Shopify backend.",
    tech: ["Next.js", "Shopify", "Framer Motion"],
  },
  {
    id: 7,
    title: "SaaS Dashboard",
    category: "UI/UX",
    image: "/assets/mockup_saas.png",
    description: "Complex data visualization and analytics platform for AI tools.",
    tech: ["React", "D3.js", "Tailwind CSS"],
  },
  {
    id: 8,
    title: "Mobile App UI",
    category: "Apps",
    image: "/assets/mockup_mobile.png",
    description: "Premium mobile banking application with biometric security.",
    tech: ["React Native", "Expo", "Redux"],
  }
];

export default function PortfolioSection({ hideCTA = false }: { hideCTA?: boolean }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => 
    activeFilter === "All" ? true : project.category === activeFilter || (activeFilter === "UI/UX" && project.id >= 7)
  );

  return (
    <section className="relative z-10 py-32 px-6 md:px-16 lg:px-32 bg-background border-t border-surface-border overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading font-medium mb-6 text-text-main"
          >
            Selected <span className="text-secondary italic font-light">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-text-muted text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            A curated selection of our recent engineering and design projects.
          </motion.p>
          
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={clsx(
                  "relative px-6 py-2 rounded-full font-medium text-sm transition-colors duration-300",
                  activeFilter === filter ? "text-black" : "text-text-muted hover:text-text-main border border-surface-border"
                )}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-surface-border transition-all duration-500 cursor-pointer hover:border-white/20"
              >
                
                {/* Mockup Image Container */}
                <div className="relative w-full h-[350px] overflow-hidden bg-black/40">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Glass Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium tracking-wider uppercase text-text-main">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-medium text-text-main mb-3">{project.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed font-light mb-6 h-10">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    <Code2 className="w-4 h-4 text-text-muted mr-1" />
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-medium text-text-muted bg-white/5 px-2 py-1 rounded border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center gap-2 text-text-main font-medium uppercase tracking-wider text-sm transition-colors duration-300">
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!hideCTA && (
          <div className="flex justify-center mt-16">
            <Link href="/portfolio">
              <button className="px-10 py-5 rounded-full bg-white text-black font-semibold text-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3 group">
                Explore Our Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
