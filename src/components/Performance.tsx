import React, { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Shield, Rocket, Target, Users, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Lightning Fast", desc: "Edge-deployed infrastructure ensuring sub-second load times globally.", icon: Zap },
  { title: "Enterprise Security", desc: "Bank-grade encryption and automated threat mitigation protocols.", icon: Shield },
  { title: "Scalable Architecture", desc: "Cloud-native solutions designed to handle massive traffic spikes.", icon: Rocket },
  { title: "Conversion Optimized", desc: "Data-backed UI/UX patterns proven to increase conversion rates.", icon: Target },
  { title: "Dedicated Support", desc: "24/7 technical assistance from senior engineers, not chatbots.", icon: Users },
  { title: "Clean Codebase", desc: "Maintainable, documented, and test-driven development practices.", icon: Code },
];

export default function Performance() {
  const containerRef = useRef<HTMLElement>(null);
  const counterRef1 = useRef<HTMLDivElement>(null);
  const counterRef2 = useRef<HTMLDivElement>(null);
  const counterRef3 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const counters = [
      { ref: counterRef1, target: 98, suffix: '%' },
      { ref: counterRef2, target: 50, suffix: '+' },
      { ref: counterRef3, target: 24, suffix: '/7' }
    ];

    counters.forEach(({ ref, target, suffix }) => {
      if (ref.current) {
        gsap.to(ref.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
          },
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          onUpdate: function() {
            if (ref.current) {
              ref.current.innerHTML = Math.round(Number(this.targets()[0].innerHTML)) + suffix;
            }
          }
        });
      }
    });

    gsap.fromTo(".feature-card", 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-bg-void relative border-y border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-accent-cyan font-mono text-sm uppercase tracking-widest mb-4">Why Webzono</h2>
            <h3 className="text-4xl md:text-5xl font-syne font-black text-white mb-6">Engineered for <br/> Absolute Performance</h3>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              We don't rely on templates or shortcuts. Every solution is meticulously crafted to deliver uncompromised speed, security, and scalability for ambitious brands.
            </p>
            
            <div className="flex gap-8 md:gap-12">
              <div>
                <div ref={counterRef1} className="text-4xl md:text-5xl font-syne font-black text-white mb-2">0%</div>
                <div className="text-sm font-mono text-accent-cyan">Client Satisfaction</div>
              </div>
              <div>
                <div ref={counterRef2} className="text-4xl md:text-5xl font-syne font-black text-white mb-2">0+</div>
                <div className="text-sm font-mono text-accent-cyan">Enterprise Projects</div>
              </div>
              <div>
                <div ref={counterRef3} className="text-4xl md:text-5xl font-syne font-black text-white mb-2">0/7</div>
                <div className="text-sm font-mono text-accent-cyan">Priority Support</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full flex justify-center">
            {/* Floating 3D Badge */}
            <motion.div 
              animate={{ y: [-10, 10, -10], rotateX: [5, -5, 5], rotateY: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-bg-surface/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.15)] relative preserve-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 opacity-50 rounded-3xl" />
              <div className="relative z-10 flex flex-col items-center text-center" style={{ transform: "translateZ(30px)" }}>
                <span className="text-accent-cyan font-mono text-sm mb-2">FY2025 Impact</span>
                <span className="text-5xl md:text-6xl font-syne font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  ₹2.4 Cr
                </span>
                <span className="text-text-muted font-medium mt-2">Client Revenue Generated</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="feature-card bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-accent-blue" />
                </div>
                <h4 className="text-xl font-syne font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
