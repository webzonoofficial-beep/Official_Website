import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard3D({ title, description, icon }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-[320px] rounded-2xl cursor-pointer group"
    >
      {/* Animated gradient border on hover */}
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
        style={{ transform: "translateZ(-1px)" }}
      />
      
      <div className="absolute inset-0 bg-bg-surface border border-white/5 rounded-2xl overflow-hidden transition-colors group-hover:border-white/10 group-hover:bg-bg-void">
        
        {/* Glow effect tracking mouse */}
        <motion.div 
          className="absolute w-64 h-64 bg-accent-blue/20 rounded-full blur-[80px] pointer-events-none"
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "150%"]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "150%"]),
            opacity: isHovered ? 1 : 0
          }}
        />

        <div 
          className="p-8 h-full flex flex-col items-start justify-between"
          style={{ transform: "translateZ(30px)" }} // Inner floating content
        >
          <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6 border border-accent-blue/20">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-syne font-bold text-white mb-3">{title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
