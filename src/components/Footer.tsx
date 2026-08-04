"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, MapPin, Mail, Phone, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/#process" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/#contact" }
];

const services = [
  { name: "Business Websites", href: "/portfolio#business-websites" },
  { name: "E-Commerce", href: "/portfolio#ecommerce" },
  { name: "Web Applications", href: "/portfolio#webapps" },
  { name: "Android Apps", href: "/portfolio#android" },
  { name: "UI/UX Design", href: "/portfolio#uiux" },
  { name: "AI Solutions", href: "/portfolio#ai" },
  { name: "Cloud & Hosting", href: "/portfolio#cloud" },
  { name: "Maintenance & Support", href: "/portfolio#maintenance" }
];

const socials = [
  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://instagram.com" },
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com" }
];

export default function Footer() {
  return (
    <footer className="relative w-full pt-32 pb-8 bg-[#04060A] overflow-hidden border-t border-white/5">
      
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Main Footer Layout: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6 lg:pr-8 items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-3">
              <Link href="/" className="inline-block relative z-10">
                <Image 
                  src="/assets/logo.png" 
                  alt="WEBZONO Official Logo"
                  width={240}
                  height={70}
                  className="h-[60px] md:h-[70px] w-auto object-contain block opacity-100"
                />
              </Link>
              <p className="text-white/60 font-light text-sm tracking-wide mt-2">Engineering Digital Excellence.</p>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light mt-2">
              WEBZONO helps startups, businesses and enterprises build world-class websites, applications and AI-powered digital solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 text-sm font-light hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase">Services</h4>
            <ul className="flex flex-col gap-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-white/50 text-sm font-light hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase">Contact</h4>
            <ul className="flex flex-col gap-5">
              
              {/* Phone 1 */}
              <li className="flex flex-col gap-1 text-sm font-light">
                <div className="flex items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase font-semibold">
                  <Phone className="w-3 h-3 text-blue-400" />
                  <span>Sales & Consultation</span>
                </div>
                <a href="tel:+917358859792" className="text-white/80 hover:text-blue-400 transition-colors ml-5">
                  +91 73588 59792
                </a>
              </li>

              {/* Phone 2 */}
              <li className="flex flex-col gap-1 text-sm font-light">
                <div className="flex items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase font-semibold">
                  <Phone className="w-3 h-3 text-blue-400" />
                  <span>Business & Support</span>
                </div>
                <a href="tel:+917358177544" className="text-white/80 hover:text-blue-400 transition-colors ml-5">
                  +91 73581 77544
                </a>
              </li>

              {/* Email */}
              <li className="flex flex-col gap-1 text-sm font-light">
                <div className="flex items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase font-semibold">
                  <Mail className="w-3 h-3 text-blue-400" />
                  <span>Email</span>
                </div>
                <a href="Webzono.official@gmail.com" className="text-white/80 hover:text-blue-400 transition-colors ml-5">
                  Webzono.official@gmail.com
                </a>
              </li>

              {/* Location */}
              <li className="flex flex-col gap-1 text-sm font-light">
                <div className="flex items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase font-semibold">
                  <MapPin className="w-3 h-3 text-blue-400" />
                  <span>Location</span>
                </div>
                <span className="text-white/80 ml-5">
                  Chennai, Tamil Nadu, India
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full p-8 md:p-12 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 mb-20 shadow-[0_0_50px_rgba(59,130,246,0.05)] hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-transparent to-purple-500/0 hover:from-blue-500/5 hover:to-purple-500/5 transition-colors duration-500 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col gap-3 text-center lg:text-left max-w-xl">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Stay Updated</h3>
              <p className="text-white/50 text-sm md:text-base font-light">
                Get the latest updates, design inspiration and technology insights from WEBZONO.
              </p>
            </div>
            <div className="w-full lg:w-auto flex-grow max-w-md relative flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black/50 border border-white/10 rounded-l-xl px-6 py-4 text-sm text-white focus:outline-none focus:border-white/30 focus:bg-black transition-all placeholder:text-white/30"
              />
              <button className="bg-white px-6 md:px-8 rounded-r-xl flex items-center justify-center text-black font-semibold text-sm hover:bg-gray-200 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
          
          {/* Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <p className="text-white/40 text-[11px] tracking-widest uppercase font-medium">
              © {new Date().getFullYear()} WEBZONO.
            </p>
            <p className="text-white/40 text-[11px] tracking-widest uppercase font-medium">
              All Rights Reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 text-[11px] tracking-widest uppercase font-medium hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 text-[11px] tracking-widest uppercase font-medium hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookies" className="text-white/40 text-[11px] tracking-widest uppercase font-medium hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label} page`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-blue-600 hover:border-white hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            {/* Back to Top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 shadow-lg transition-colors ml-4 border border-blue-500/50"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>

        </div>

      </div>
    </footer>
  );
}
