"use client";

import { motion } from "framer-motion";
import { Monitor, Server, PenTool } from "lucide-react";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

const departments = [
  {
    title: "Frontend Development",
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    description: "We build modern, responsive and high-performance web applications using the latest frontend technologies to deliver exceptional user experiences.",
    members: ["Baskar B.", "Rajesh J."],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-8 h-8 text-indigo-400" />,
    description: "We develop secure, scalable and high-performance backend systems, APIs and databases that power modern digital products.",
    members: ["Hamdan"],
  },
  {
    title: "UI / UX Design",
    icon: <PenTool className="w-8 h-8 text-purple-400" />,
    description: "We design clean, intuitive and user-focused digital experiences that combine aesthetics with usability.",
    members: ["Afridi", "Guna"],
  }
];

export default function TeamPage() {
  return (
    <>
      <main className="w-full min-h-screen flex flex-col relative overflow-hidden bg-background pt-32 pb-24">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex-grow">
          
          {/* Section Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">The Brains Behind WEBZONO</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-main mb-6 tracking-tight"
            >
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Team</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-text-muted leading-relaxed"
            >
              Meet the creative minds behind WEBZONO. Our specialists build modern, scalable, and user-focused digital products.
            </motion.p>
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                className="group relative w-full rounded-[24px] bg-white/5 border border-surface-border p-8 md:p-10 flex flex-col items-start transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] hover:-translate-y-2 h-full overflow-hidden"
              >
                {/* Large Circular Icon */}
                <div className="w-16 h-16 rounded-full bg-surface-border border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {dept.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-text-main mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {dept.title}
                </h3>
                
                <p className="text-text-muted text-base leading-relaxed flex-grow">
                  {dept.description}
                </p>

                {dept.members && dept.members.length > 0 && (
                  <div className="w-full mt-8 pt-6 border-t border-surface-border">
                    <h4 className="text-xs font-semibold text-text-muted mb-3 uppercase tracking-wider">Team</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.members.map((member, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 rounded-full bg-background border border-surface-border text-sm font-medium text-text-main group-hover:border-white/20 transition-colors duration-300"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
