import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-void/80 backdrop-blur-md border-b border-white/10 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-syne font-black text-2xl tracking-tight text-white hover:text-accent-blue transition-colors cursor-pointer">
          WEBZONO
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-text-muted">
          <a href="#services" className="hover:text-accent-cyan transition-colors">Services</a>
          <a href="#audit" className="hover:text-accent-cyan transition-colors">AI Audit</a>
          <a href="#pricing" className="hover:text-accent-cyan transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-accent-cyan transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/20 transition-all">
          Get Started
        </a>
      </div>
    </header>
  );
}
