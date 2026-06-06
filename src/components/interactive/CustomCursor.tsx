'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Add listeners to interactive elements
    const addListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, select, textarea, [role="button"], .interactive-hover');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    addListeners();
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Setup MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window === 'undefined' || !isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring Follower */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-9999 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary mix-blend-difference"
        style={{
          x: followerX,
          y: followerY,
          scale: hovered ? 1.5 : 1,
          backgroundColor: hovered ? 'rgba(106, 0, 255, 0.3)' : 'rgba(106, 0, 255, 0)',
        }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-9999 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: clicked ? 0.5 : hovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  );
}
