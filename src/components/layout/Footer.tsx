'use client';

import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-card-border/40 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary" />
              <span className="text-2xl font-black font-outfit text-foreground tracking-tight">WEBZONO</span>
            </a>
            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              We design and develop premium, high-converting websites and scalable software solutions that help businesses dominate their digital space.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 font-outfit">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#about" className="text-sm text-text-muted hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-sm text-text-muted hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#pricing" className="text-sm text-text-muted hover:text-primary transition-colors">Pricing Plans</a></li>
              <li><a href="#faq" className="text-sm text-text-muted hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 font-outfit">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#services" className="text-sm text-text-muted hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-sm text-text-muted hover:text-primary transition-colors">eCommerce Stores</a></li>
              <li><a href="#services" className="text-sm text-text-muted hover:text-primary transition-colors">SaaS Applications</a></li>
              <li><a href="#services" className="text-sm text-text-muted hover:text-primary transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="text-sm text-text-muted hover:text-primary transition-colors">SEO Optimization</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 font-outfit">Newsletter</h4>
            <p className="text-sm text-text-muted mb-4">
              Subscribe to get the latest insights on web development and conversion optimization.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="w-full glass bg-card-border/5 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-text-muted/70 border border-card-border/80 focus:border-primary/60 focus:outline-none transition-all"
              />
              <button 
                type="submit" 
                className="px-6 py-3 rounded-xl bg-primary text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors flex-shrink-0"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-card-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} WEBZONO. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-text-muted hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-text-muted hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
