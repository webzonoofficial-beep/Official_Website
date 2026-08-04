"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ from, to, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState<string>(from.toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to, duration]);

  useEffect(() => {
    return rounded.onChange((v) => {
      setDisplayValue(v.toString());
    });
  }, [rounded]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

const metrics = [
  { from: 0, to: 500, suffix: "+", label: "Projects Completed", type: "counter" },
  { from: 0, to: 98, suffix: "%", label: "Client Satisfaction", type: "counter" },
  { from: 0, to: 50, suffix: "+", label: "Business Partners", type: "counter" },
  { staticValue: "24/7", label: "Support", type: "static" },
  { from: 0, to: 100, suffix: "%", label: "Responsive Solutions", type: "counter" }
];

export default function SuccessMetricsSection() {
  return (
    <section className="relative z-10 py-24 px-6 md:px-16 border-y border-surface-border glass mt-12 bg-background/50 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {metrics.map((metric, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="text-center group"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient mb-4 drop-shadow-[0_0_15px_rgba(0,229,255,0.2)] group-hover:scale-110 transition-transform duration-500">
              {metric.type === "counter" ? (
                <AnimatedCounter from={metric.from!} to={metric.to!} suffix={metric.suffix!} />
              ) : (
                metric.staticValue
              )}
            </div>
            <div className="text-sm md:text-base text-text-muted uppercase tracking-widest font-semibold">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
