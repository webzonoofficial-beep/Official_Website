"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageCircle, Globe, MapPin, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactCards = [
  { type: "phone" },
  { type: "standard", icon: <Mail className="w-5 h-5 text-text-main" />, label: "Email", value: "hello@webzono.in", href: "mailto:hello@webzono.in" },
  { type: "standard", icon: <MessageCircle className="w-5 h-5 text-text-main" />, label: "WhatsApp", value: "Message Us", href: "https://wa.me/917358859792?text=Hello%20WEBZONO%20Team%2C%0A%0AI%20visited%20your%20website%20and%20I%E2%80%99m%20interested%20in%20discussing%20a%20new%20project.%0A%0APlease%20let%20me%20know%20how%20we%20can%20get%20started." },
  { type: "standard", icon: <Globe className="w-5 h-5 text-text-main" />, label: "Website", value: "www.webzono.com", href: "https://www.webzono.com" },
  { type: "standard", icon: <MapPin className="w-5 h-5 text-text-main" />, label: "Location", value: "Chennai, India" }
];

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Valid phone number required"),
  projectType: z.string(),
  budget: z.string(),
  description: z.string().min(20, "Please provide more details (min 20 chars)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: "Business Website",
      budget: "₹15K – ₹30K",
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setError("");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit inquiry.");
      }

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <section id="contact" className="relative z-10 py-32 px-6 md:px-16 lg:px-32 bg-background overflow-hidden border-t border-surface-border">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading font-medium mb-6 text-text-main leading-tight"
          >
            Start Your <span className="text-secondary italic font-light">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-text-muted text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            Whether you need a premium website, application, or custom software, our engineering team is ready.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-col gap-4">
            {contactCards.map((card, idx) => {
              if (card.type === "phone") {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white/5 p-6 rounded-2xl border border-surface-border flex flex-col gap-6 group hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-colors duration-500 pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center w-full">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 text-text-main group-hover:text-white transition-colors duration-300">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col w-full gap-3">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-colors w-full">
                          <div>
                            <p className="text-text-muted text-[10px] tracking-widest uppercase font-medium mb-1">Sales & Project Consultation</p>
                            <h4 className="text-lg font-heading font-medium text-text-main">+91 73588 59792</h4>
                          </div>
                          <a href="tel:+917358859792" className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white text-white hover:text-black rounded-lg text-xs font-semibold transition-all duration-300">
                            Call Now <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-colors w-full">
                          <div>
                            <p className="text-text-muted text-[10px] tracking-widest uppercase font-medium mb-1">Business & Support</p>
                            <h4 className="text-lg font-heading font-medium text-text-main">+91 73581 77544</h4>
                          </div>
                          <a href="tel:+917358177544" className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white text-white hover:text-black rounded-lg text-xs font-semibold transition-all duration-300">
                            Call Now <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.a
                  key={idx}
                  href={card.href}
                  target={card.href?.startsWith('http') ? "_blank" : undefined}
                  rel={card.href?.startsWith('http') ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/5 p-6 rounded-2xl border border-surface-border flex items-center gap-6 group hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-text-muted text-xs tracking-widest uppercase font-medium mb-1">{card.label}</p>
                    <h4 className="text-lg font-heading font-medium text-text-main">{card.value}</h4>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 rounded-2xl p-8 md:p-12 border border-surface-border relative overflow-hidden"
          >
            
            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 flex flex-col gap-6">
              
              {/* Success Message overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md rounded-xl z-20 flex flex-col items-center justify-center p-8 text-center border border-green-500/30"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
                    <h3 className="text-2xl font-semibold text-white mb-2">Inquiry Submitted!</h3>
                    <p className="text-white/70">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium tracking-wider uppercase text-text-muted">Full Name *</label>
                  <input {...register("name")} type="text" placeholder="John Doe" maxLength={50} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm text-text-main focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all placeholder:text-white/20" />
                  {errors.name && <span className="text-red-400 text-xs mt-1">{errors.name.message}</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium tracking-wider uppercase text-text-muted">Company Name</label>
                  <input {...register("company")} type="text" placeholder="Enterprise Corp" maxLength={50} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm text-text-main focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all placeholder:text-white/20" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium tracking-wider uppercase text-text-muted">Business Email *</label>
                  <input {...register("email")} type="email" placeholder="john@company.com" maxLength={80} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm text-text-main focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all placeholder:text-white/20" />
                  {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email.message}</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium tracking-wider uppercase text-text-muted">Phone Number *</label>
                  <input {...register("phone")} type="tel" placeholder="+1 (555) 000-0000" maxLength={20} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm text-text-main focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all placeholder:text-white/20" />
                  {errors.phone && <span className="text-red-400 text-xs mt-1">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium tracking-wider uppercase text-text-muted">Project Type</label>
                  <select {...register("projectType")} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm text-text-main focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all appearance-none cursor-pointer">
                    <option>Business Website</option>
                    <option>Portfolio Website</option>
                    <option>E-Commerce</option>
                    <option>Web Application</option>
                    <option>Android App</option>
                    <option>iOS App</option>
                    <option>ERP</option>
                    <option>CRM</option>
                    <option>AI Solution</option>
                    <option>Digital Marketing</option>
                    <option>Cloud Solution</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium tracking-wider uppercase text-text-muted">Budget Range</label>
                  <select {...register("budget")} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm text-text-main focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all appearance-none cursor-pointer">
                    <option>₹15K – ₹30K</option>
                    <option>₹30K – ₹75K</option>
                    <option>₹75K – ₹2L</option>
                    <option>₹2L+</option>
                    <option>Custom Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium tracking-wider uppercase text-text-muted">Project Description *</label>
                <textarea {...register("description")} rows={4} maxLength={500} placeholder="Tell us about your goals..." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm text-text-main focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all placeholder:text-white/20 resize-none" />
                {errors.description && <span className="text-red-400 text-xs mt-1">{errors.description.message}</span>}
              </div>

              <motion.button 
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-5 mt-4 rounded-xl font-heading font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${
                  isSubmitting ? "bg-white/50 text-black/50 cursor-not-allowed" : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Inquiry...
                  </>
                ) : (
                  <>
                    Submit Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
              
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
