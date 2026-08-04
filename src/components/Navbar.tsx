"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      
      // If at the very top, maybe set to home/about if needed, or rely on first section
      if (window.scrollY < 100) {
        current = pathname === "/portfolio" ? "about" : "home";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isPortfolio = pathname === "/portfolio";

  const mainLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Process", href: "/#process", id: "process" },
    { name: "Reviews", href: "/#reviews", id: "reviews" },
    { name: "Contact", href: "/#contact", id: "contact" },
    { name: "Portfolio", href: "/portfolio", id: "portfolio" }
  ];

  const portfolioLinks = [
    { name: "About", href: "/portfolio#about", id: "about" },
    { name: "Story", href: "/portfolio#company", id: "company" },
    { name: "Founders", href: "/portfolio#founders", id: "founders" },
    { name: "Services", href: "/portfolio#services", id: "services" },
    { name: "Process", href: "/portfolio#process", id: "process" },
    { name: "Technology", href: "/portfolio#technology", id: "technology" },
    { name: "Case Studies", href: "/portfolio#case-studies", id: "case-studies" },
    { name: "Pricing", href: "/portfolio#pricing", id: "pricing" },
    { name: "Contact", href: "/portfolio#contact", id: "contact" }
  ];

  const currentLinks = isPortfolio ? portfolioLinks : mainLinks;

  return (
    <nav className={clsx(styles.navbar, scrolled && styles.scrolled)}>
      <div className="w-full max-w-[1600px] mx-auto flex items-center">
        
        {/* Logo - Left */}
        <div className={clsx(styles.logo, "relative z-50")}>
          <Link href="/">
            <Image 
              src="/api/assets/logo.png" 
              alt="WEBZONO Official Logo"
              width={180}
              height={52}
              className="h-[40px] md:h-[48px] w-auto object-contain block opacity-100"
              priority
            />
          </Link>
        </div>

        {/* Desktop Links - Centered with gap-10 */}
        <div className="hidden lg:flex items-center gap-10 mx-auto">
          {currentLinks.map((link) => {
            // Determine if this specific link is active
            let isActive = false;
            
            if (!isPortfolio) {
              if (link.id === "portfolio") {
                isActive = false; // We are on main page, portfolio link is just a link
              } else {
                isActive = activeSection === link.id;
              }
            } else {
              isActive = activeSection === link.id;
            }

            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={clsx(
                  styles.navLink, 
                  isActive && "!text-white !opacity-100"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA - Right (ml-auto pushes it to the right if mx-auto on links isn't perfectly centering, or if it is) */}
        <Link href={isPortfolio ? "/portfolio#contact" : "/#contact"} className="ml-auto hidden lg:block">
          <button className={styles.ctaButton}>Start Your Project</button>
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="ml-auto lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#04060A]/95 backdrop-blur-2xl border-b border-white/10 flex flex-col py-8 px-6 gap-6 lg:hidden shadow-2xl z-50">
          {currentLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/70 hover:text-white text-lg font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href={isPortfolio ? "/portfolio#contact" : "/#contact"} onClick={() => setMobileMenuOpen(false)} className="mt-4">
            <button className="w-full py-4 border border-white/20 rounded-full text-white font-semibold transition-all hover:bg-white hover:text-black">
              Start Your Project
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
