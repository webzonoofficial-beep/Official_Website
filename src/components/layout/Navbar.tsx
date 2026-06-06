'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-4 glass-premium shadow-xl' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo / Company Name */}
          <a href="#" className="flex items-center gap-2.5 z-50 relative group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-[0_0_15px_rgba(106,0,255,0.4)] group-hover:scale-110 transition-transform">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
            <span className="text-2xl font-black font-outfit text-foreground tracking-tight uppercase">
              Webzono
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-text-muted hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="tel:+917358859792" className="text-text-muted hover:text-primary transition-colors flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <PhoneCall className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-bold font-outfit">+91 73588 59792</span>
            </a>
            <a href="#contact">
              <Button variant="primary" size="sm" magnetic>
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-24 pb-8 px-6 lg:hidden flex flex-col"
          >
            <ul className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold font-outfit text-foreground hover:text-primary transition-colors block border-b border-card-border/40 pb-4"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 mb-4">
              <a href="tel:+917358859792" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 p-4 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <PhoneCall className="w-5 h-5" />
                <span className="font-bold font-outfit text-lg">Call Us Now</span>
              </a>
            </div>
            <div className="mt-auto">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="lg" className="w-full justify-center">
                  Start Your Project
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
