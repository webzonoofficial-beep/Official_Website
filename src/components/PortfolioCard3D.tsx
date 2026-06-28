import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Code } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  codeSnippet: string;
}

export default function PortfolioCard3D({ title, category, image, codeSnippet }: PortfolioCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
    setShowCode(false);
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
      className="relative w-full aspect-[4/3] rounded-2xl cursor-pointer group mb-6"
    >
      <div className="absolute inset-0 bg-bg-surface border border-white/10 rounded-2xl overflow-hidden transition-colors group-hover:border-accent-cyan/50 shadow-2xl">
        
        {/* Glow effect tracking mouse */}
        <motion.div 
          className="absolute w-64 h-64 bg-accent-cyan/20 rounded-full blur-[80px] pointer-events-none z-10"
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "150%"]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "150%"]),
            opacity: isHovered ? 1 : 0
          }}
        />

        <div className="absolute inset-0 z-0">
          <img src={image} alt={title} className={`w-full h-full object-cover transition-all duration-500 ${showCode ? 'opacity-10 scale-110' : 'opacity-60 group-hover:opacity-40 group-hover:scale-105'}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-void via-bg-void/50 to-transparent" />
        </div>

        {/* Code Snippet Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: showCode ? 1 : 0 }}
          className="absolute inset-0 z-10 p-6 flex items-center justify-center pointer-events-none"
        >
          <div className="bg-bg-void/90 backdrop-blur-sm border border-white/10 p-4 rounded-xl w-full">
            <pre className="text-xs font-mono text-accent-cyan overflow-hidden">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </motion.div>

        <div 
          className="absolute inset-0 p-6 flex flex-col justify-end z-20 pointer-events-none"
          style={{ transform: "translateZ(40px)" }} // Inner floating content
        >
          <div className="flex justify-between items-end">
            <div>
              <span className="text-accent-cyan text-xs font-mono uppercase tracking-wider mb-2 block">{category}</span>
              <h3 className="text-2xl font-syne font-bold text-white">{title}</h3>
            </div>
            
            <div className="flex gap-2 pointer-events-auto">
              <button 
                onMouseEnter={() => setShowCode(true)}
                onMouseLeave={() => setShowCode(false)}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent-cyan hover:text-bg-void transition-colors"
              >
                <Code className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent-blue transition-colors">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
