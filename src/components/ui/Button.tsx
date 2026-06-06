'use client';

import { ReactNode, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'accent' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  magnetic?: boolean;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  isLoading = false,
  magnetic = false,
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || disabled || isLoading || !buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Max movement is 15px
    x.set(mouseX * 0.35);
    y.set(mouseY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantStyles = {
    primary: 'bg-primary text-white border-2 border-primary hover:bg-transparent hover:text-primary shadow-[0_0_15px_rgba(106,0,255,0.4)]',
    secondary: 'bg-transparent text-foreground border-2 border-card-border hover:bg-primary hover:border-primary hover:text-white',
    accent: 'bg-accent text-black border-2 border-accent hover:bg-transparent hover:text-accent font-semibold shadow-[0_0_15px_rgba(255,215,0,0.3)]',
    glass: 'glass text-foreground hover:bg-primary/10 hover:border-primary/50',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
  };

  const sizeStyles = {
    sm: 'px-4 py-1.5 text-xs rounded-md',
    md: 'px-6 py-2.5 text-sm rounded-lg',
    lg: 'px-8 py-3.5 text-base rounded-xl font-medium',
    xl: 'px-10 py-4.5 text-lg rounded-2xl font-semibold',
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={`
        relative overflow-hidden inline-flex items-center justify-center gap-2 cursor-pointer 
        transition-all duration-300 font-sans tracking-wide active:scale-95 disabled:opacity-50 disabled:pointer-events-none
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Glow highlight overlay inside primary / accent buttons */}
      {(variant === 'primary' || variant === 'accent') && (
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </motion.button>
  );
}
