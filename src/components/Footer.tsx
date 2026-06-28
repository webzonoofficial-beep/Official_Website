import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-bg-void py-12 text-text-muted border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-accent-blue/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="font-syne font-black text-2xl tracking-tight text-white hover:text-accent-cyan transition-colors cursor-pointer group">
            <span className="group-hover:hidden block">WEBZONO</span>
            {/* Simple ASCII effect fallback for hover */}
            <span className="hidden group-hover:block font-mono text-xl tracking-[0.2em]">W3BZ0N0</span>
          </div>
          <span className="text-white/20 hidden md:inline">|</span>
          <p className="text-sm">© {new Date().getFullYear()} Webzono Studio. All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-accent-cyan transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent-cyan transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
