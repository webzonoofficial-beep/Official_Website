"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock,
  Sparkles,
  Layout,
  Globe,
  PenTool,
  Server,
  ShieldCheck,
  TrendingUp,
  BarChart,
  Calendar,
  Briefcase
} from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for startups and personal brands.",
    popular: false,
    features: [
      "Business Website",
      "Responsive Design",
      "Basic SEO",
      "Contact Form",
      "Fast Delivery"
    ],
    cta: "Get Started"
  },
  {
    name: "Professional",
    description: "Perfect for growing businesses.",
    popular: true,
    features: [
      "Everything in Starter",
      "Premium UI/UX",
      "Advanced Animations",
      "Performance Optimization",
      "CMS Integration",
      "Priority Support"
    ],
    cta: "Book Consultation"
  },
  {
    name: "Enterprise",
    description: "Perfect for established businesses.",
    popular: false,
    features: [
      "Custom Web Applications",
      "Advanced Security",
      "Scalable Architecture",
      "API Integration",
      "Dedicated Support",
      "Performance Monitoring"
    ],
    cta: "Talk to Our Team"
  },
  {
    name: "Custom Solution",
    description: "For businesses with unique requirements.",
    popular: false,
    features: [
      "Custom Proposal",
      "Dedicated Planning",
      "Flexible Timeline",
      "Personal Consultation"
    ],
    cta: "Request Custom Quote"
  }
];

const includedFeatures = [
  "Modern UI/UX",
  "Responsive Design",
  "SEO Friendly",
  "Fast Performance",
  "Secure Development",
  "Premium Code Quality",
  "Cross Browser Support",
  "Long-Term Support"
];

const timeline = [
  { type: "Small Website", time: "1–2 Weeks" },
  { type: "Business Website", time: "2–4 Weeks" },
  { type: "Web Application", time: "4–8 Weeks" },
  { type: "Enterprise Solution", time: "Custom Timeline" }
];

const addons = [
  { name: "Logo Design", icon: PenTool },
  { name: "Brand Identity", icon: Briefcase },
  { name: "Content Writing", icon: Layout },
  { name: "Hosting", icon: Server },
  { name: "Domain Setup", icon: Globe },
  { name: "Maintenance", icon: ShieldCheck },
  { name: "SEO", icon: TrendingUp },
  { name: "Analytics", icon: BarChart }
];

export default function PortfolioPricing() {
  return (
    <section id="pricing" className="relative w-full py-32 bg-[#080B12] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">Flexible Solutions For Every Business</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6"
          >
            Every business is unique. We offer tailored digital solutions designed around your goals, budget and long-term growth.
          </motion.h2>
        </div>

        {/* Section 1: Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-40">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[32px] backdrop-blur-xl transition-all duration-500 h-full group
                ${plan.popular 
                  ? "bg-white/[0.04] border border-amber-500/30 hover:border-amber-500/60 shadow-[0_0_40px_rgba(245,158,11,0.1)] hover:shadow-[0_0_60px_rgba(245,158,11,0.2)]" 
                  : "bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04]"}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-3 ${plan.popular ? 'text-amber-400' : 'text-white'}`}>{plan.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="flex-grow">
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-amber-500/80' : 'text-blue-500/80'}`} />
                      <span className="text-white/80 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <Link href="/#contact" className="w-full">
                  <button className={`w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02]
                    ${plan.popular 
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]" 
                      : "bg-white/10 text-white hover:bg-white/20"}
                  `}>
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 2: What's Included */}
        <div className="mb-40 flex flex-col items-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white mb-10 text-center"
          >
            Included In Every Project
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {includedFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-white/80 text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Project Timeline */}
        <div className="mb-40 flex flex-col items-center">
          <motion.h3 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-2xl font-semibold text-white mb-10 text-center"
          >
             Estimated Timelines
          </motion.h3>
          <div className="w-full flex flex-col md:flex-row justify-between relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center gap-4 bg-[#080B12] p-4 md:p-0 mb-8 md:mb-0"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-blue-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <h4 className="text-white font-medium mb-1">{item.type}</h4>
                  <span className="text-blue-400 text-sm font-bold tracking-wide">{item.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 4: Add-ons */}
        <div className="mb-40 flex flex-col items-center border-t border-white/10 pt-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white mb-10 text-center"
          >
            Frequently Requested Add-ons
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            {addons.map((addon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default group"
              >
                <addon.icon className="w-5 h-5 text-white/50 group-hover:text-blue-400 transition-colors" />
                <span className="text-white/80 text-sm font-medium">{addon.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Section 5: Call To Action */}
      <div className="relative w-full py-24 md:py-32 border-t border-white/5 overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[#04060A] z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-r from-blue-600/10 to-amber-600/10 rounded-full blur-[120px] z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tight mb-8"
          >
            Let’s Discuss <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400">Your Project.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-2xl"
          >
            Every project begins with a conversation. We’ll understand your requirements and recommend the best solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <Link href="/#contact" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 group">
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Book Free Consultation
              </button>
            </Link>
            <Link href="/#contact" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 rounded-full border border-white/20 bg-transparent text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2 group">
                Get Custom Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
