import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShoppingCart, Layout, LineChart, Code2, HeadphonesIcon } from 'lucide-react';
import ServiceCard3D from './ServiceCard3D';

export default function Services() {
  const services = [
    { title: 'Web Dev', desc: 'Fast-loading, responsive corporate presence built for trust and authority.', icon: <Globe className="w-6 h-6" /> },
    { title: 'eCommerce', desc: 'Conversion-focused architecture for seamless digital retail experiences.', icon: <ShoppingCart className="w-6 h-6" /> },
    { title: 'UI/UX', desc: 'Systematic interface design that ensures brand consistency and usability.', icon: <Layout className="w-6 h-6" /> },
    { title: 'SEO', desc: 'Data-driven visibility strategies to capture high-intent enterprise traffic.', icon: <LineChart className="w-6 h-6" /> },
    { title: 'Web Apps', desc: 'Scalable SaaS development and complex internal tools infrastructure.', icon: <Code2 className="w-6 h-6" /> },
    { title: 'Support', desc: '24/7 technical maintenance, security patches, and performance monitoring.', icon: <HeadphonesIcon className="w-6 h-6" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" as const, bounce: 0.4 }
    }
  };

  return (
    <section id="services" className="py-24 bg-bg-surface overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         {/* Subtle ambient light from top */}
         <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-blue/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-accent-cyan font-mono text-sm uppercase tracking-widest mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-syne font-black text-white mb-6">Comprehensive Digital Services</h3>
          <p className="text-lg text-text-muted">
            We don't just build websites. We architect robust digital ecosystems that empower your business to scale securely and efficiently.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard3D 
                title={service.title}
                description={service.desc}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
