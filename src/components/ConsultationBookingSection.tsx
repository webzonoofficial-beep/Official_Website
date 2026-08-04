"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Video, Phone, Users, ChevronRight, ChevronLeft } from "lucide-react";
import clsx from "clsx";

export default function ConsultationBookingSection() {
  const [selectedDate, setSelectedDate] = useState<number | null>(15);
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM");
  const [meetingType, setMeetingType] = useState<string>("Online");

  const dates = Array.from({ length: 14 }, (_, i) => i + 10);
  const times = ["09:00 AM", "10:00 AM", "11:30 AM", "01:00 PM", "03:00 PM", "04:30 PM"];
  const types = [
    { label: "Online", icon: <Video className="w-4 h-4" /> },
    { label: "Offline", icon: <Users className="w-4 h-4" /> },
    { label: "Phone Call", icon: <Phone className="w-4 h-4" /> }
  ];

  return (
    <section className="relative z-10 py-24 px-6 md:px-16 lg:px-32 bg-background border-t border-surface-border">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Consultation Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/5 rounded-2xl p-8 md:p-12 border border-surface-border mb-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-heading font-medium text-text-main mb-2">Need <span className="text-secondary italic font-light">Expert Advice?</span></h3>
            <p className="text-text-muted text-sm font-light max-w-md">Our consultants and expert architects will help you choose the perfect solution for your business.</p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="px-8 py-4 rounded-xl bg-white text-black font-medium text-sm transition-all hover:bg-gray-200">
              Book Free Consultation
            </button>
            <button className="px-8 py-4 rounded-xl bg-transparent border border-surface-border text-text-main font-medium text-sm transition-all hover:border-white hover:bg-white/5">
              Schedule Meeting
            </button>
          </div>
        </motion.div>

        {/* Booking Experience */}
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-medium text-text-main mb-4"
          >
            Select a <span className="text-secondary italic font-light">Time</span>
          </motion.h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 rounded-2xl p-8 border border-surface-border grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          
          {/* Left: Date Selection */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-text-main flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" /> August 2026
              </h4>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-text-muted mb-2">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {/* Padding for month start */}
              <div /><div /><div />
              {dates.map((date) => (
                <button 
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={clsx(
                    "w-full aspect-square rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300",
                    selectedDate === date ? "bg-white text-black" : "text-text-main hover:bg-white/10 border border-transparent hover:border-white/10"
                  )}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Time & Type Selection */}
          <div className="flex flex-col gap-8">
            
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-medium tracking-widest uppercase text-text-muted flex items-center gap-2">
                <Clock className="w-4 h-4" /> Available Times
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {times.map((time) => (
                  <button 
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={clsx(
                      "py-3 rounded-lg border text-xs font-medium transition-all duration-300",
                      selectedTime === time ? "border-white bg-white/10 text-white" : "border-surface-border text-text-main hover:border-white/30"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-medium tracking-widest uppercase text-text-muted flex items-center gap-2">
                <Video className="w-4 h-4" /> Meeting Type
              </h4>
              <div className="flex flex-col gap-3">
                {types.map((type) => (
                  <button 
                    key={type.label}
                    onClick={() => setMeetingType(type.label)}
                    className={clsx(
                      "flex items-center gap-4 p-4 rounded-xl border transition-all duration-300",
                      meetingType === type.label ? "border-white bg-white/5 text-white" : "border-surface-border text-text-main hover:border-white/30"
                    )}
                  >
                    <div className={clsx("p-2 rounded-lg border border-white/10", meetingType === type.label ? "bg-white/10" : "bg-white/5")}>
                      {type.icon}
                    </div>
                    <span className="text-sm font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full py-4 mt-auto rounded-xl bg-white text-black font-medium text-sm hover:bg-gray-200 transition-all duration-300">
              Confirm Booking
            </button>
            
          </div>

        </motion.div>

      </div>
    </section>
  );
}
