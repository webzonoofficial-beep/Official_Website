import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Loader2, CheckCircle2, Building, Mail, Phone, ArrowRight } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setIsSuccess(true);
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        projectDetails: ''
      });
    } catch (err: unknown) {
      setError('Failed to send message. Please try again.');
      try {
        handleFirestoreError(err, OperationType.CREATE, 'messages');
      } catch (e) {
        // the error handler throws a new JSON string error, we just catch it to prevent unhandled rejection
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const FloatingInput = ({ label, name, type = 'text', required = true }: any) => {
    const isTextarea = type === 'textarea';
    const value = (formData as any)[name];
    const isFilled = value.length > 0;

    return (
      <div className="relative z-0 w-full mb-6 group">
        {isTextarea ? (
          <textarea
            name={name}
            id={name}
            rows={4}
            required={required}
            value={value}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-accent-cyan peer resize-none"
            placeholder=" "
          />
        ) : (
          <input
            type={type}
            name={name}
            id={name}
            required={required}
            value={value}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-accent-cyan peer"
            placeholder=" "
          />
        )}
        <label
          htmlFor={name}
          className={`peer-focus:font-medium absolute text-sm text-text-muted duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-accent-cyan peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${isFilled ? '-translate-y-6 scale-75' : ''}`}
        >
          {label}
        </label>
      </div>
    );
  };

  return (
    <section id="contact" className="py-24 bg-bg-void relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="flex flex-col lg:flex-row gap-0 bg-white/5 backdrop-blur-[20px] rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="lg:w-2/5 bg-bg-surface/50 p-12 text-white flex flex-col justify-between relative overflow-hidden border-r border-white/5">
            <div className="relative z-10">
              <h3 className="text-3xl font-syne font-black mb-4">Partner with WEBZONO</h3>
              <p className="text-text-muted mb-12 text-lg">
                Initiate a conversation regarding your digital infrastructure requirements.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0 border border-accent-blue/20">
                    <Mail className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted font-medium mb-1">Corporate Inquiries</p>
                    <p className="text-base font-semibold text-white">official@webzono.studio</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0 border border-accent-blue/20">
                    <Phone className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted font-medium mb-1">Direct Contact</p>
                    <p className="text-base font-semibold text-white mb-1">+91 73581 77544 (Yuvaraj G)</p>
                    <p className="text-base font-semibold text-white">+91 73588 59792 (Pugazhenthi P)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0 border border-accent-blue/20">
                    <Building className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted font-medium mb-1">Headquarters</p>
                    <p className="text-base font-semibold text-white">Global Operations / Remote-First</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-12">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-syne font-black text-white mb-2">Inquiry Received</h3>
                <p className="text-text-muted mb-8 max-w-sm">
                  Thank you for your interest. A technical consultant will review your requirements and reach out shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-white/10 text-white font-semibold px-6 py-2 rounded-xl hover:bg-white/20 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-syne font-black text-white mb-8">Request a Proposal</h3>
                <form onSubmit={handleSubmit} className="space-y-2 mt-4">
                  {error && (
                    <div className="p-4 bg-red-500/10 text-red-400 text-sm rounded-xl border border-red-500/20 mb-6">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <FloatingInput label="Full Name" name="fullName" />
                    <FloatingInput label="Business Name" name="businessName" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <FloatingInput label="Email Address" name="email" type="email" />
                    <FloatingInput label="Phone Number" name="phone" type="tel" />
                  </div>
                  
                  <FloatingInput label="Project Scope & Details" name="projectDetails" type="textarea" />

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-accent-blue text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-500 transition-colors disabled:opacity-70 flex justify-center items-center gap-2 mt-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
