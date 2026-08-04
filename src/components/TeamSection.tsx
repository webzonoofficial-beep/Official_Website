"use client";

import { motion } from "framer-motion";
import { Monitor, Server, PenTool, ArrowRight } from "lucide-react";

const departments = [
  {
    title: "Frontend Development",
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    description: "We build modern, responsive, fast, and interactive user interfaces using React, Next.js, Tailwind CSS and modern web technologies.",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-8 h-8 text-indigo-400" />,
    description: "We build secure, scalable, and high-performance APIs using Node.js, Express, NestJS, MongoDB, PostgreSQL and cloud technologies.",
    skills: ["Node.js", "Express", "NestJS", "MongoDB", "REST API"],
  },
  {
    title: "UI / UX Design",
    icon: <PenTool className="w-8 h-8 text-purple-400" />,
    description: "We design clean, intuitive, and conversion-focused user experiences with modern interfaces and user-centered design principles.",
    skills: ["Figma", "Wireframing", "Prototyping", "Responsive Design", "Design Systems"],
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="relative w-full bg-[#030303] py-24 md:py-32 overflow-hidden flex flex-col items-center">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">The Brains Behind WEBZONO</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            A collective of visionary thinkers, brilliant engineers, and creative designers dedicated to pushing the boundaries of technology.
          </motion.p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              className="group relative w-full rounded-[28px] bg-white/[0.03] border border-white/10 p-8 md:p-10 flex flex-col items-start overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-blue-500/30 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.2)] hover:-translate-y-2 h-full"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Large Circular Icon */}
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500 relative z-10">
                {dept.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300 relative z-10">
                {dept.title}
              </h3>
              
              <p className="text-white/60 text-base leading-relaxed mb-8 flex-grow relative z-10">
                {dept.description}
              </p>
              
              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2 mb-10 relative z-10">
                {dept.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70 group-hover:border-white/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Learn More Button */}
              <div className="mt-auto pt-6 border-t border-white/10 w-full flex items-center justify-between group/btn cursor-pointer relative z-10">
                <span className="text-sm font-semibold text-white/80 group-hover/btn:text-blue-400 transition-colors duration-300">
                  Learn More
                </span>
                <ArrowRight className="w-5 h-5 text-white/50 group-hover/btn:text-blue-400 group-hover/btn:translate-x-1.5 transition-all duration-300" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
