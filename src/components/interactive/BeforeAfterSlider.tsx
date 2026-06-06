'use client';

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { Eye, Zap } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(1000);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setContainerWidth(entries[0].contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.buttons === 1) { // Left click held down
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleContainerClick = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center text-sm px-1">
        <span className="text-text-muted flex items-center gap-1.5"><Eye className="h-4 w-4" /> Drag slider to compare</span>
        <span className="text-primary font-outfit font-semibold flex items-center gap-1"><Zap className="h-4 w-4 text-accent animate-pulse" /> 5x Conversion Lift</span>
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={handleContainerClick}
        className="w-full h-[320px] md:h-[400px] relative rounded-2xl overflow-hidden border border-card-border cursor-ew-resize select-none bg-black shadow-xl"
      >
        {/* ================= AFTER SIDE (Bottom Layer - Webzono Redesign) ================= */}
        <div className="absolute inset-0 w-full h-full bg-[#0A0A0A] flex flex-col p-6 md:p-8 justify-between">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-card-border/40 pb-4">
            <span className="text-lg md:text-xl font-bold font-outfit text-white tracking-tight flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              WEBZONO
            </span>
            <div className="flex gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary border border-primary/20 font-semibold font-outfit">SaaS App</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-semibold font-outfit">Live</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="my-auto max-w-sm md:max-w-md">
            <h4 className="text-2xl md:text-4xl font-extrabold font-outfit text-white leading-tight">
              Scale Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SaaS Startup</span> Faster
            </h4>
            <p className="text-xs md:text-sm text-text-muted mt-2 leading-relaxed">
              Unlock streamlined deployment pipelines, automatic code audits, and integrated database metrics.
            </p>
            <div className="flex gap-3 mt-4">
              <span className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-white shadow-[0_0_15px_rgba(106,0,255,0.4)]">
                Deploy Now
              </span>
              <span className="px-4 py-2 text-xs font-semibold rounded-lg border border-card-border/60 text-white">
                View Docs
              </span>
            </div>
          </div>

          {/* Metric Dashboard Box */}
          <div className="glass p-4 rounded-xl border border-card-border/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-500">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase block">API Response Time</span>
                <span className="text-sm font-bold text-white">12ms (Optimal)</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-emerald-500 block font-semibold">+420%</span>
              <span className="text-[10px] text-text-muted block">Efficiency gain</span>
            </div>
          </div>

          {/* Corner Redesign Label */}
          <div className="absolute top-4 right-4 bg-emerald-500 text-black font-semibold text-[10px] uppercase px-2 py-0.5 rounded tracking-widest z-10">
            Webzono Design
          </div>
        </div>

        {/* ================= BEFORE SIDE (Top Layer - Legacy Cluttered Site) ================= */}
        <div
          className="absolute inset-y-0 left-0 h-full overflow-hidden bg-[#E2E8F0] flex flex-col p-6 md:p-8 justify-between"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="h-full flex flex-col justify-between" style={{ width: `${containerWidth}px` }}>
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-400/50 pb-4">
              <span className="text-lg md:text-xl font-bold font-serif text-gray-800 tracking-tight">
                SoftwarePortal v1.0
              </span>
              <div className="flex gap-1">
                <span className="text-xs px-2 py-0.5 bg-gray-300 text-gray-700 border border-gray-400 font-mono">Legacy code</span>
              </div>
            </div>

            {/* Hero Content */}
            <div className="my-auto max-w-sm md:max-w-md">
              <h4 className="text-2xl md:text-3xl font-bold font-serif text-black leading-tight underline decoration-blue-500">
                Welcome to Our Software Home Page
              </h4>
              <p className="text-xs md:text-sm text-gray-700 mt-2 leading-relaxed">
                Click here to download our product install executable. Make sure you read the user guide first or it might crash.
              </p>
              <div className="flex gap-3 mt-4">
                <span className="px-3 py-1.5 text-xs font-mono border-2 border-black bg-white text-black cursor-pointer hover:bg-gray-100">
                  [ DOWNLOAD EXE ]
                </span>
                <span className="px-3 py-1.5 text-xs text-blue-800 underline cursor-pointer">
                  click here to contact support
                </span>
              </div>
            </div>

            {/* Static boring statistics box */}
            <div className="bg-gray-100 p-3 border border-gray-400 flex items-center justify-between text-gray-800 font-mono">
              <span className="text-xs">Database Status: OK</span>
              <span className="text-xs">Server Load: 78%</span>
            </div>

            {/* Corner Legacy Label */}
            <div className="absolute top-4 left-4 bg-red-600 text-white font-semibold text-[10px] uppercase px-2 py-0.5 rounded tracking-widest z-10">
              Legacy Website
            </div>
          </div>
        </div>

        {/* ================= DRAG HANDLE OVERLAY ================= */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary border-2 border-white text-white flex items-center justify-center shadow-lg pointer-events-auto cursor-ew-resize">
            <svg
              className="w-5 h-5 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l-4 4 4 4m8 0l4-4-4-4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
