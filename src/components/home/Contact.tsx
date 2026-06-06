'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  businessName: z.string().min(2, { message: 'Business name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  serviceRequired: z.string().min(1, { message: 'Please select a service.' }),
  budget: z.string().min(1, { message: 'Please select a budget range.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      businessName: '',
      email: '',
      phone: '',
      serviceRequired: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setServerError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      setIsSuccess(true);
      reset();
      
      // Trigger confetti
      const duration = 3 * 1000;
      const animationEnd = new Date().getTime() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: ReturnType<typeof setInterval> = setInterval(function () {
        const timeLeft = animationEnd - new Date().getTime();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);

      // Reset success state after a while
      setTimeout(() => setIsSuccess(false), 8000);

    } catch (error: unknown) {
      if (error instanceof Error) {
        setServerError(error.message);
      } else {
        setServerError('Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full glass bg-card-border/5 rounded-xl px-4 py-3.5 text-sm md:text-base text-foreground placeholder:text-text-muted/70 border border-card-border/80 focus:border-primary/60 focus:bg-primary/5 focus:outline-none transition-all duration-300";
  const labelClasses = "block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 font-outfit";
  const errorClasses = "text-xs text-red-500 mt-1.5 flex items-center gap-1 font-medium";

  return (
    <section id="contact" className="py-24 relative bg-background overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.2em] font-semibold text-primary font-outfit px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 inline-block"
              >
                Let&apos;s Talk
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-black font-outfit text-foreground tracking-tight leading-tight"
              >
                Ready to Accelerate Your Growth?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-text-muted text-base md:text-lg mt-4 leading-relaxed"
              >
                Fill out the form below to request a free project consultation. Our team of experts will review your requirements and get back to you within 24 hours with a tailored strategy.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div className="glass p-6 rounded-2xl border border-card-border/60">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider font-outfit mb-4 border-b border-card-border/50 pb-2">
                  Direct Contact
                </h4>
                <div className="flex flex-col gap-4 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Email</span>
                    <a href="mailto:info@webzono.com" className="font-semibold text-foreground hover:text-primary transition-colors">
                      info@webzono.com
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Phone / Call</span>
                    <a href="tel:+917358859792" className="font-semibold text-foreground hover:text-primary transition-colors">
                      +91 73588 59792
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">WhatsApp</span>
                    <a href="https://wa.me/917358859792?text=Hi%20Webzono" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 font-bold text-emerald-500 hover:text-emerald-400 transition-colors">
                      Chat with us ↗
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Location</span>
                    <span className="font-semibold text-foreground">
                      Global (Remote First)
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-7 relative"
          >
            <div className="glass rounded-3xl p-6 md:p-10 border border-card-border shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4"
                  >
                    <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-black font-outfit text-foreground mb-3">Message Received!</h3>
                    <p className="text-text-muted mb-8 max-w-sm">
                      Thank you for reaching out. We&apos;ve received your request and our team will be in touch within 24 hours.
                    </p>
                    <Button variant="outline" onClick={() => setIsSuccess(false)}>
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6"
                  >
                    {serverError && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-center gap-2 font-medium">
                        <AlertCircle className="h-4 w-4" />
                        {serverError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Full Name *</label>
                        <input
                          {...register('name')}
                          className={inputClasses}
                          placeholder="John Doe"
                        />
                        {errors.name && <span className={errorClasses}><AlertCircle className="h-3 w-3" />{errors.name.message}</span>}
                      </div>
                      <div>
                        <label className={labelClasses}>Business Name *</label>
                        <input
                          {...register('businessName')}
                          className={inputClasses}
                          placeholder="Acme Corp"
                        />
                        {errors.businessName && <span className={errorClasses}><AlertCircle className="h-3 w-3" />{errors.businessName.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Email Address *</label>
                        <input
                          {...register('email')}
                          type="email"
                          className={inputClasses}
                          placeholder="john@example.com"
                        />
                        {errors.email && <span className={errorClasses}><AlertCircle className="h-3 w-3" />{errors.email.message}</span>}
                      </div>
                      <div>
                        <label className={labelClasses}>Phone Number *</label>
                        <input
                          {...register('phone')}
                          type="tel"
                          className={inputClasses}
                          placeholder="+1 (555) 000-0000"
                        />
                        {errors.phone && <span className={errorClasses}><AlertCircle className="h-3 w-3" />{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Service Required *</label>
                        <select {...register('serviceRequired')} className={inputClasses}>
                          <option value="">Select a service...</option>
                          <option value="Website Development">Website Development</option>
                          <option value="eCommerce Development">eCommerce Development</option>
                          <option value="Web Application">Web Application (SaaS)</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="SEO Optimization">SEO Optimization</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.serviceRequired && <span className={errorClasses}><AlertCircle className="h-3 w-3" />{errors.serviceRequired.message}</span>}
                      </div>
                      <div>
                        <label className={labelClasses}>Estimated Budget *</label>
                        <select {...register('budget')} className={inputClasses}>
                          <option value="">Select budget range...</option>
                          <option value="Below ₹10,000">Below ₹10,000</option>
                          <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                          <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                          <option value="₹50,000+">₹50,000+</option>
                        </select>
                        {errors.budget && <span className={errorClasses}><AlertCircle className="h-3 w-3" />{errors.budget.message}</span>}
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>Project Details *</label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className={`${inputClasses} resize-none`}
                        placeholder="Tell us a bit about your project, goals, and any specific requirements..."
                      />
                      {errors.message && <span className={errorClasses}><AlertCircle className="h-3 w-3" />{errors.message.message}</span>}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="xl"
                      className="w-full mt-2"
                      isLoading={isSubmitting}
                      magnetic
                    >
                      <span>Send Request</span>
                      {!isSubmitting && <Send className="h-4 w-4 ml-2" />}
                    </Button>
                    <p className="text-center text-xs text-text-muted mt-2">
                      Your information is secure and will never be shared with third parties.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
