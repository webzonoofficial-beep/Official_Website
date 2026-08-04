"use client";

import { motion } from "framer-motion";

const clients = ["Client A", "Client B", "Client C", "Client D", "Client E", "Client F"];

export default function ClientLogosSection() {
  return (
    <section className="relative z-10 py-20 px-6 md:px-16 border-y border-surface-border bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-text-muted text-xs tracking-[0.2em] uppercase font-medium mb-12 text-center"
        >
          Trusted by Industry Leaders
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              className="text-xl md:text-2xl font-heading font-medium tracking-wide text-white/80 grayscale hover:grayscale-0 hover:text-white transition-all duration-500 cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
