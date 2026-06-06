'use client';

import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    color: 'primary',
    technologies: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Tailwind CSS', icon: '🌊' },
      { name: 'Framer Motion', icon: '✨' },
    ],
  },
  {
    title: 'Backend',
    color: 'secondary',
    technologies: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🚂' },
      { name: 'NestJS', icon: '🐈' },
      { name: 'GraphQL', icon: '🕸️' },
      { name: 'REST APIs', icon: '🔌' },
    ],
  },
  {
    title: 'Database',
    color: 'accent',
    technologies: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Redis', icon: '⚡' },
      { name: 'Prisma', icon: '◬' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    color: 'emerald-500', // custom color key
    technologies: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Vercel', icon: '🚀' },
      { name: 'Cloudflare', icon: '🛡️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'CI/CD', icon: '🔄' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-primary font-outfit px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            Our Arsenal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black font-outfit text-foreground tracking-tight"
          >
            Engineered With Modern Tech
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-base md:text-lg mt-4"
          >
            We leverage industry-leading frameworks, robust datastores, and scalable cloud infrastructure to build world-class applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-card-border hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold font-outfit text-foreground mb-6 pb-4 border-b border-card-border/60">
                {category.title}
              </h3>
              
              <div className="flex flex-col gap-3">
                {category.technologies.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (i * 0.1), duration: 0.3 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card-border/10 border border-transparent hover:border-card-border/80 hover:bg-card-border/20 transition-all cursor-default group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center shadow-sm border border-card-border/40 text-sm group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-text-muted group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
