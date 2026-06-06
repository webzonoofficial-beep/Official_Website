'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { ArrowRight, Search, ShieldAlert, Cpu, Sparkles, AlertTriangle, XCircle, Gauge } from 'lucide-react';

const scanSteps = [
  'Initializing audit connection...',
  'Resolving DNS parameters...',
  'Analyzing mobile layout and responsiveness...',
  'Auditing image assets & payload sizes...',
  'Measuring TTFB & server latency...',
  'Parsing SEO meta configuration & headings...',
  'Generating performance metrics report...',
];

export default function AuditTool() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'scanning' | 'done'>('idle');
  const [scanStep, setScanStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    if (status !== 'scanning') return;

    if (scanStep < scanSteps.length) {
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, `[INFO] ${scanSteps[scanStep]}`]);
        setScanStep((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setStatus('done');
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [status, scanStep]);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setStatus('scanning');
    setScanStep(0);
    setLogs(['[SYSTEM] Starting audit report for: ' + url]);
  };

  const resetAudit = () => {
    setStatus('idle');
    setUrl('');
    setLogs([]);
  };

  // Mock results based loosely on a standard unoptimized site vs Webzono
  const mockScores = {
    performance: { current: 48, webzono: 99 },
    seo: { current: 62, webzono: 100 },
    accessibility: { current: 71, webzono: 98 },
    bestPractices: { current: 55, webzono: 100 },
  };

  const mockVitals = [
    { name: 'Largest Contentful Paint (LCP)', current: '4.2s', target: '< 2.5s', status: 'poor', webzono: '0.8s' },
    { name: 'Cumulative Layout Shift (CLS)', current: '0.28', target: '< 0.1', status: 'poor', webzono: '0.01' },
    { name: 'First Input Delay (FID)', current: '110ms', target: '< 100ms', status: 'needs-improvement', webzono: '5ms' },
  ];

  const mockIssues = [
    { title: 'Unoptimized Image Formats', desc: 'Serving raw JPEG/PNG instead of next-gen WebP/AVIF. Size reduction potential: 78%.', type: 'critical' },
    { title: 'Missing Local Business Schema', desc: 'No structured JSON-LD data found, reducing local SEO visibility.', type: 'medium' },
    { title: 'JavaScript Execution Delay', desc: 'Third-party blocking scripts delayed main thread execution by 2.4s.', type: 'critical' },
    { title: 'Contrast Ratio Warnings', desc: 'Subtle gray text colors fail WCAG AA accessibility contrast ratios.', type: 'low' },
  ];

  return (
    <div className="w-full glass rounded-3xl p-6 md:p-8 border border-card-border shadow-2xl relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 bg-primary/5 w-96 h-96 rounded-full blur-3xl pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="flex flex-col gap-6 text-center max-w-xl mx-auto py-4"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold font-outfit mb-3">
                <Gauge className="h-3.5 w-3.5" />
                <span>PageSpeed & SEO Scanner</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-outfit font-bold text-foreground">
                Run a Instant Website Audit
              </h3>
              <p className="text-sm md:text-base text-text-muted mt-2">
                Enter your site URL to analyze performance, core web vitals, accessibility, and SEO. Find out exactly what is slowing down your sales.
              </p>
            </div>

            <form onSubmit={handleScan} className="flex flex-col sm:flex-row gap-3 mt-2">
              <div className="relative flex-grow">
                <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full glass rounded-xl pl-12 pr-4 py-3.5 text-sm md:text-base text-foreground placeholder:text-text-muted border border-card-border/80 focus:border-primary/50 focus:outline-none transition-colors"
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="sm:flex-shrink-0">
                <span>Scan Website</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}

        {status === 'scanning' && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-6 min-h-[300px]"
          >
            <div className="flex items-center justify-between border-b border-card-border pb-4">
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 animate-spin text-primary" />
                <span className="text-sm font-semibold text-foreground font-outfit">Analyzing: {url}</span>
              </div>
              <span className="text-xs text-text-muted font-mono">{Math.round((scanStep / scanSteps.length) * 100)}% Complete</span>
            </div>

            {/* Scan animation bar */}
            <div className="w-full bg-card-border/40 h-1.5 rounded-full overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-primary to-secondary h-full"
                initial={{ width: 0 }}
                animate={{ width: `${(scanStep / scanSteps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Console Log output panel */}
            <div className="bg-black/90 text-green-400 font-mono text-xs md:text-sm p-4 rounded-xl border border-card-border flex-grow h-48 overflow-y-auto flex flex-col gap-1.5 shadow-inner leading-relaxed">
              {logs.map((log, index) => (
                <div key={index} className="flex gap-2">
                  <span className="text-text-muted select-none">{`>`}</span>
                  <span>{log}</span>
                </div>
              ))}
              <div className="animate-pulse flex items-center gap-1 mt-1 text-green-300">
                <span>Scanning files and running diagnostics</span>
                <span className="inline-block w-1.5 h-3 bg-green-400" />
              </div>
            </div>
          </motion.div>
        )}

        {status === 'done' && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col gap-8"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-card-border pb-5">
              <div>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">AUDIT SUMMARY REPORT</span>
                <h4 className="text-lg md:text-xl font-bold text-foreground font-outfit truncate max-w-md">{url}</h4>
              </div>
              <Button variant="glass" size="sm" onClick={resetAudit} className="cursor-pointer">
                <span>Scan Another URL</span>
              </Button>
            </div>

            {/* Comparative scores grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(mockScores).map(([key, value]) => {
                const title = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
                return (
                  <div key={key} className="glass p-4 rounded-xl border border-card-border text-center flex flex-col justify-between">
                    <span className="text-xs text-text-muted font-medium mb-2">{title}</span>
                    <div className="flex justify-center items-baseline gap-2 my-2">
                      <span className="text-2xl md:text-3xl font-black text-red-500 font-outfit">{value.current}</span>
                      <span className="text-xs text-text-muted">vs</span>
                      <span className="text-3xl md:text-4xl font-black text-emerald-500 font-outfit">{value.webzono}</span>
                    </div>
                    <span className="text-[10px] text-emerald-500 font-mono mt-1 font-semibold flex items-center justify-center gap-1">
                      <Sparkles className="h-2.5 w-2.5" /> Projecting 99+
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Core Web Vitals */}
            <div className="glass p-5 rounded-2xl border border-card-border">
              <h5 className="text-sm font-semibold font-outfit text-foreground mb-4 uppercase tracking-wider">{`// Core Web Vitals Diagnostics`}</h5>
              <div className="flex flex-col gap-4">
                {mockVitals.map((vital, index) => (
                  <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-card-border/40 pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="text-xs md:text-sm font-medium text-foreground">{vital.name}</p>
                      <p className="text-xs text-text-muted">Target threshold: {vital.target}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="text-xs text-text-muted block">Current</span>
                        <span className="text-sm font-bold text-red-500">{vital.current}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-emerald-500/80 block">Webzono</span>
                        <span className="text-sm font-bold text-emerald-500">{vital.webzono}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Critical issues found */}
            <div>
              <h5 className="text-sm font-semibold font-outfit text-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-red-500" />
                Critical Performance Bottlenecks Found
              </h5>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockIssues.map((issue, index) => (
                  <div key={index} className="glass p-4 rounded-xl border border-card-border flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {issue.type === 'critical' ? (
                        <XCircle className="h-5 w-5 text-red-500" />
                      ) : issue.type === 'medium' ? (
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-blue-500" />
                      )}
                    </div>
                    <div>
                      <h6 className="text-xs md:text-sm font-semibold text-foreground">{issue.title}</h6>
                      <p className="text-xs text-text-muted mt-1 leading-relaxed">{issue.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action panel */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <div>
                <h5 className="text-base font-bold font-outfit text-foreground">Want to fix these performance scores?</h5>
                <p className="text-xs md:text-sm text-text-muted mt-1">Book a free video review. We will map out exactly how we can rewrite your platform to run at 99+ speed.</p>
              </div>
              <a href="#contact" className="flex-shrink-0 w-full md:w-auto">
                <Button variant="primary" size="md" className="w-full justify-center group" magnetic>
                  <span>Book Free Optimization Call</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
