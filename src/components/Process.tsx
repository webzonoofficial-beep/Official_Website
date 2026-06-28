import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Search, Map, Cpu, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: '01', title: 'Discovery', desc: 'Deep dive into your business logic, market position, and technical constraints.', icon: Search },
  { id: '02', title: 'Strategy', desc: 'Architectural planning, UX flow mapping, and technology stack selection.', icon: Map },
  { id: '03', title: 'Build', desc: 'Agile development sprints with continuous integration and deployment.', icon: Cpu },
  { id: '04', title: 'Launch', desc: 'Performance optimization, security audits, and global CDN deployment.', icon: Rocket }
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !scrollRef.current) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.process-step');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollRef.current?.offsetWidth
        }
      });

      // 3D icon rotation on scroll
      sections.forEach((section: any) => {
        const icon = section.querySelector('.step-icon-container');
        if (icon) {
          gsap.to(icon, {
            rotationY: 360,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              containerAnimation: gsap.getById("processScroll"),
              start: "left center",
              end: "right center",
              scrub: true,
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-bg-surface overflow-hidden hidden md:block">
      <div className="h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full mb-12">
          <h2 className="text-accent-cyan font-mono text-sm uppercase tracking-widest mb-4">How We Work</h2>
          <h3 className="text-4xl md:text-5xl font-syne font-black text-white">Our Proven Methodology</h3>
        </div>
        
        <div ref={scrollRef} className="flex w-[400vw] h-[400px]">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="process-step w-screen px-6 md:px-24 flex items-center shrink-0">
                <div className="flex gap-12 items-center w-full max-w-5xl mx-auto">
                  
                  {/* 3D Icon Container */}
                  <div className="step-icon-container w-48 h-48 rounded-3xl bg-bg-void border border-white/10 flex flex-col items-center justify-center shrink-0 preserve-3d shadow-2xl relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-transparent rounded-3xl" />
                    <Icon className="w-16 h-16 text-accent-blue mb-4" style={{ transform: "translateZ(40px)" }} />
                    <span className="font-mono text-3xl font-bold text-white/20" style={{ transform: "translateZ(20px)" }}>{step.id}</span>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-3xl font-syne font-black text-white mb-4">{step.title}</h4>
                    <p className="text-xl text-text-muted leading-relaxed max-w-lg">{step.desc}</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
