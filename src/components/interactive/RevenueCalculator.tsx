'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

export default function RevenueCalculator() {
  const [visitors, setVisitors] = useState(10000);
  const [conversionRate, setConversionRate] = useState(1.0);
  const [averageValue, setAverageValue] = useState(2500); // in INR (₹) or USD ($) - let's use ₹ (INR) since pricing is in INR

  // Webzono optimized assumptions:
  // Average optimization bumps conversion rate to 3.5% (or 3x current, whichever is higher, capped at 6%)
  const optimizedRate = Math.min(6.0, Math.max(3.5, conversionRate * 3));

  const currentRevenue = Math.round(visitors * (conversionRate / 100) * averageValue);
  const optimizedRevenue = Math.round(visitors * (optimizedRate / 100) * averageValue);
  const revenueLift = optimizedRevenue - currentRevenue;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="w-full glass rounded-3xl p-6 md:p-8 border border-card-border shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-primary/10 w-64 h-64 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 bg-secondary/10 w-64 h-64 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Inputs side */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold font-outfit mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Revenue Optimizer</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-outfit font-bold text-foreground">
              Calculate Your Growth Potential
            </h3>
            <p className="text-sm md:text-base text-text-muted mt-2">
              Adjust the sliders below to visualize how Webzono&apos;s premium optimization and speed conversions can elevate your bottom line.
            </p>
          </div>

          {/* Visitors Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-foreground">Monthly Website Visitors</span>
              <span className="text-primary font-bold">{visitors.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={visitors}
              onChange={(e) => setVisitors(Number(e.target.value))}
              className="w-full h-2 bg-card-border rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-text-muted">
              <span>1K</span>
              <span>50K</span>
              <span>100K</span>
            </div>
          </div>

          {/* Current Conversion Rate Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-foreground">Current Conversion Rate</span>
              <span className="text-secondary font-bold">{conversionRate.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-2 bg-card-border rounded-lg appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex justify-between text-xs text-text-muted">
              <span>0.1%</span>
              <span>2.5%</span>
              <span>5.0%</span>
            </div>
          </div>

          {/* Average Order Value (AOV) Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-foreground">Average Order Value (AOV)</span>
              <span className="text-accent font-bold">₹{averageValue.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="100"
              max="15000"
              step="100"
              value={averageValue}
              onChange={(e) => setAverageValue(Number(e.target.value))}
              className="w-full h-2 bg-card-border rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-xs text-text-muted">
              <span>₹100</span>
              <span>₹7.5K</span>
              <span>₹15K</span>
            </div>
          </div>
        </div>

        {/* Right Dashboard side */}
        <div className="flex flex-col gap-6 bg-background/40 backdrop-blur-md border border-card-border/60 rounded-2xl p-6 relative overflow-hidden">
          {/* Decorative header */}
          <div className="flex items-center justify-between border-b border-card-border/40 pb-4">
            <span className="text-xs font-mono text-text-muted">{`// ESTIMATION DASHBOARD`}</span>
            <div className="flex gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
          </div>

          {/* Current vs Optimized comparison */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-card-border/40 bg-background/20">
              <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">Current Revenue</span>
              <span className="text-lg md:text-xl font-bold font-outfit text-foreground">{formatCurrency(currentRevenue)}</span>
              <span className="text-xs text-text-muted block mt-1">At {conversionRate.toFixed(1)}% Conversion</span>
            </div>

            <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 shadow-inner">
              <span className="text-xs text-primary/80 uppercase tracking-wider block mb-1">Webzono Optimized</span>
              <span className="text-lg md:text-xl font-bold font-outfit text-primary">{formatCurrency(optimizedRevenue)}</span>
              <span className="text-xs text-primary/70 block mt-1">At {optimizedRate.toFixed(1)}% Conversion</span>
            </div>
          </div>

          {/* Total Lift Banner */}
          <div className="relative overflow-hidden rounded-xl border border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5 p-5 flex items-center justify-between">
            <div className="absolute top-0 right-0 bg-accent/10 w-24 h-24 rounded-full blur-xl" />
            
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent border border-accent/25">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs text-text-muted block font-outfit uppercase tracking-wider">Potential Revenue Lift</span>
                <motion.span 
                  key={revenueLift}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl md:text-3xl font-black font-outfit text-foreground block mt-0.5"
                >
                  +{formatCurrency(revenueLift)}
                </motion.span>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-text-muted mt-1">
            *Based on averages from Webzono clients optimizing layouts, speed, and call-to-actions.
          </div>

          <a href="#contact" className="w-full">
            <Button variant="primary" size="lg" className="w-full justify-center group" magnetic>
              <span>Secure Your Revenue Lift</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
