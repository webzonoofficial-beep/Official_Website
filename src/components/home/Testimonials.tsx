'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder, EcoBox',
    image: 'SM',
    content: "Webzono completely transformed our online presence. Our conversion rate increased by 240% within the first month of launching the new site.",
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'CEO, TechFlow',
    image: 'JW',
    content: "The level of professionalism and technical expertise is unmatched. They delivered a complex SaaS dashboard weeks ahead of schedule.",
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Director, Bloom Retail',
    image: 'PS',
    content: "Our e-commerce store is now lightning fast. The design is beautiful and perfectly captures our brand identity. Highly recommended!",
    rating: 5,
  },
  {
    name: 'Michael Chang',
    role: 'VP Operations, Nexus',
    image: 'MC',
    content: "We've worked with many agencies, but Webzono is on another level. Their attention to detail and performance optimization is incredible.",
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'CMO, Horizon Finance',
    image: 'ER',
    content: "The ROI we've seen from our new corporate website is staggering. It's not just a website; it's a powerful lead generation engine.",
    rating: 5,
  },
  {
    name: 'David Foster',
    role: 'Co-founder, LaunchPad',
    image: 'DF',
    content: "From the initial discovery call to the final launch, the process was seamless. The resulting platform exceeded all our expectations.",
    rating: 5,
  },
];

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 relative bg-background overflow-hidden border-t border-card-border/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-16">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-primary font-outfit px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            Client Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black font-outfit text-foreground tracking-tight"
          >
            Don&apos;t Just Take Our Word For It
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-base md:text-lg mt-4"
          >
            Hear from the founders and leaders who have partnered with us to scale their digital presence.
          </motion.p>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] pb-8 pt-4 px-4">
          {doubled.map((testimonial, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[400px] glass rounded-3xl p-8 border border-card-border/60 hover:border-primary/30 transition-colors duration-300 flex-shrink-0 relative group"
            >
              <Quote className="absolute top-6 right-8 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-8 relative z-10">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center font-outfit font-bold text-foreground border border-card-border">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold font-outfit text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
