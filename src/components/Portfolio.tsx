import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PortfolioCard3D from './PortfolioCard3D';

const categories = ['All', 'Business', 'eCommerce', 'Portfolio', 'SaaS'];

const projects = [
  {
    id: 1,
    title: 'Nexus Fintech',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    codeSnippet: 'const fetchLedger = await api.get("/ledger");\nsetTransactions(fetchLedger.data);'
  },
  {
    id: 2,
    title: 'Aura Beauty',
    category: 'eCommerce',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800',
    codeSnippet: '<CartProvider>\n  <CheckoutFlow stripeKey={key} />\n</CartProvider>'
  },
  {
    id: 3,
    title: 'Chronos Dashboard',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    codeSnippet: 'export const MetricCard = ({ data }) => (\n  <LineChart data={data} />\n);'
  },
  {
    id: 4,
    title: 'Studio Minimal',
    category: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    codeSnippet: 'gsap.from(".hero", {\n  opacity: 0, y: 50, duration: 1\n});'
  },
  {
    id: 5,
    title: 'Vanguard Logistics',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    codeSnippet: 'const route = computeOptimizedRoute(nodes);\nmap.drawPolyline(route);'
  },
  {
    id: 6,
    title: 'Thread & Co',
    category: 'eCommerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    codeSnippet: 'const inventory = useQuery(GET_STOCK);\nif(inventory.count < 5) alert();'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    proj => activeCategory === 'All' || proj.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 bg-bg-void relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-accent-cyan font-mono text-sm uppercase tracking-widest mb-4">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-syne font-black text-white mb-6">Selected Projects</h3>
          <p className="text-lg text-text-muted">
            Explore our recent digital transformations across various industries.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat 
                  ? 'bg-accent-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' 
                  : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <PortfolioCard3D {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
