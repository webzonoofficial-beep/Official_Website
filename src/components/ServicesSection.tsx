"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

const services = [
  {
    title: "Web Engineering",
    description: "High-performance web applications built on modern React architectures, ensuring scalability and speed.",
    iconType: "Monitor",
    href: "/portfolio#webapps"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications engineered for fluid performance and seamless UX.",
    iconType: "Smartphone",
    href: "/portfolio#android"
  },
  {
    title: "E-Commerce Systems",
    description: "Scalable digital storefronts tailored for conversion rate optimization and secure transactions.",
    iconType: "ShoppingBag",
    href: "/portfolio#ecommerce"
  },
  {
    title: "UI / UX Design",
    description: "Clear, user-centric interfaces crafted by senior designers to elevate your brand identity.",
    iconType: "PenTool",
    href: "/portfolio#uiux"
  },
  {
    title: "System Integration",
    description: "Complex API integrations and enterprise architecture connecting your business tools seamlessly.",
    iconType: "Code",
    href: "/portfolio#integration"
  },
  {
    title: "Cloud Infrastructure",
    description: "Secure cloud hosting architectures with zero-downtime deployment pipelines.",
    iconType: "Cloud",
    href: "/portfolio#cloud"
  },
  {
    title: "Digital Marketing",
    description: "Data-driven growth strategies, programmatic advertising, and advanced audience targeting.",
    iconType: "TrendingUp",
    href: "/portfolio#marketing"
  },
  {
    title: "AI Integration",
    description: "Practical artificial intelligence integrations to automate workflows and improve efficiency.",
    iconType: "Cpu",
    href: "/portfolio#ai"
  },
  {
    title: "Enterprise Software",
    description: "Bespoke internal tools designed to unify and automate your core business operations.",
    iconType: "Database",
    href: "/portfolio#enterprise"
  },
  {
    title: "CRM Platforms",
    description: "Custom Customer Relationship Management systems designed to nurture your client base.",
    iconType: "Users",
    href: "/portfolio#crm"
  },
  {
    title: "Data Engineering",
    description: "Robust data pipelines and analytics dashboards for informed business decision-making.",
    iconType: "Server",
    href: "/portfolio#data"
  },
  {
    title: "SEO Optimization",
    description: "Technical search engine strategies to ensure your platform maintains organic visibility.",
    iconType: "Search",
    href: "/portfolio#seo"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-24 px-6 md:px-16 lg:px-32 border-t border-surface-border bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-medium mb-6 text-text-main"
            >
              Digital Product <span className="text-secondary italic font-light">Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-text-muted text-lg font-light leading-relaxed"
            >
              We provide end-to-end software engineering and design services for enterprises looking to scale their digital presence.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/portfolio">
              <button className="px-6 py-3 rounded-full border border-surface-border text-text-main font-body text-sm hover:bg-white hover:text-black transition-colors">
                View All Services
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx}
              title={service.title}
              description={service.description}
              iconType={service.iconType}
              href={service.href}
              delay={idx * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
