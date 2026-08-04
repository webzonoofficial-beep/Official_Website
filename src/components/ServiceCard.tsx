"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, ShoppingBag, PenTool, Code, Cloud, TrendingUp, Cpu, Database, Users, Server, Search } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconType: string;
  delay?: number;
  href?: string;
}

const IconMap: any = {
  Monitor, Smartphone, ShoppingBag, PenTool, Code, Cloud, TrendingUp, Cpu, Database, Users, Server, Search
};

export default function ServiceCard({ title, description, iconType, delay = 0, href = "#" }: ServiceCardProps) {
  const Icon = IconMap[iconType] || Monitor;

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative w-full rounded-2xl bg-white/5 border border-surface-border p-8 flex flex-col items-start gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 cursor-pointer block"
    >
      <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-heading font-medium text-text-main group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
