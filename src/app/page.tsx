'use client';

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, animate, useMotionValue } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Sparkles, Brain, Code2, Smartphone, Palette,
  Megaphone, Database, Check, Star, Zap, Shield, Trophy, Globe,
  Mail, MapPin, Phone,
  ShoppingCart, LayoutGrid, Rocket, AppWindow, ChevronDown,
  Bot, Building2, Cloud, Cpu, FileText, Settings,
} from "lucide-react";
import { toast } from "sonner";

import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";


// Static asset imports - Next.js resolves these through alias @/assets/
import logoPng from "@/assets/webzono-logo.png";
import hero3d from "@/assets/hero-3d.jpg";
import founderPng from "@/assets/founder-1.png";
import cofounderPng from "@/assets/founder-2.png";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

// Safe wrapper to handle Next.js static image import object structure
const logo = { url: typeof logoPng === 'object' && 'src' in logoPng ? (logoPng as any).src : logoPng };
const founder = { url: typeof founderPng === 'object' && 'src' in founderPng ? (founderPng as any).src : founderPng };
const cofounder = { url: typeof cofounderPng === 'object' && 'src' in cofounderPng ? (cofounderPng as any).src : cofounderPng };

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.908 1.452 5.535 0 10.04-4.504 10.043-10.043.002-2.684-1.042-5.207-2.937-7.104C16.766 1.56 14.254.515 11.581.515 6.045.515 1.54 5.018 1.537 10.557c-.001 1.777.464 3.51 1.348 5.03L1.864 21.05l5.52-1.45 2.146.435.534-.492c-.172-.047-.34-.092-.51-.137zm11.385-4.48c-.282-.142-1.67-.824-1.928-.918-.258-.095-.446-.142-.634.142-.188.283-.728.918-.892 1.107-.164.188-.328.213-.61.07-1.12-.563-1.943-.972-2.723-1.638-.72-.612-1.282-1.395-1.492-1.75-.213-.355-.022-.547.154-.723.158-.158.356-.413.534-.62.178-.206.237-.354.356-.59.12-.236.06-.443-.03-.632-.09-.188-.633-1.527-.868-2.09-.23-.556-.462-.48-.633-.49-.164-.008-.353-.01-.54-.01-.188 0-.493.07-.752.355-.258.282-.987.964-.987 2.348 0 1.384 1.007 2.72 1.147 2.91.14.187 1.98 3.029 4.8 4.238 2.82 1.21 2.82.806 3.328.76.508-.046 1.67-.68 1.905-1.34.235-.66.235-1.226.164-1.34-.07-.115-.258-.207-.54-.35z" />
  </svg>
);

function useMouseParallax(strength = 30) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 18 });
  const sy = useSpring(y, { stiffness: 80, damping: 18 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * strength;
      const ny = (e.clientY / window.innerHeight - 0.5) * strength;
      x.set(nx); y.set(ny);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [strength, x, y]);
  return { x: sx, y: sy };
}

function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration, ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  const formatted = to >= 1000 ? Math.round(val).toLocaleString() : Math.round(val).toString();
  return <span ref={ref}>{formatted}{suffix}</span>;
}

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0, ty = 0, x = 0, y = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.12; y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[500px] w-[500px] rounded-full opacity-60 mix-blend-screen md:block"
      style={{ background: "radial-gradient(circle, oklch(0.82 0.14 86 / 0.18) 0%, transparent 60%)" }}
    />
  );
}

function Reveal({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function GoldButton({ children, href = "#contact", variant = "solid" }: { children: ReactNode; href?: string; variant?: "solid" | "ghost" }) {
  if (variant === "ghost") {
    return (
      <a
        href={href}
        className="btn-sweep group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium tracking-wide text-platinum backdrop-blur transition hover:border-[color:var(--gold)]/50 hover:bg-white/[0.06]"
      >
        {children}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    );
  }
  return (
    <a
      href={href}
      className="btn-sweep group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold tracking-wide text-[#0a0a0a] shadow-gold transition hover:scale-[1.02]"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
    { l: "About", h: "#about" }, { l: "Services", h: "#services" },
    { l: "Work", h: "#work" }, { l: "Pricing", h: "#pricing" },
    { l: "Team", h: "#team" }, { l: "Contact", h: "#contact" },
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${scrolled ? "glass shadow-luxe" : "bg-transparent"}`}>
          <a href="#top" className="flex items-center gap-2">
            <img src={logo.url} alt="WEBZONO" className="h-10 w-auto object-contain" style={{ maxWidth: '160px' }} />
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {items.map((it) => (
              <a key={it.l} href={it.h} className="rounded-full px-4 py-2 text-sm text-platinum/70 transition hover:text-platinum">
                {it.l}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-gold-gradient px-5 py-2 text-xs font-semibold tracking-wider text-[#0a0a0a] shadow-gold transition hover:scale-105 sm:inline-flex">
            START PROJECT
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const { x, y } = useMouseParallax(20);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yLogo = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[800px] spotlight" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.82 0.14 86) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.14 86) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 70%)",
        }}
      />
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[color:var(--gold)]"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
            boxShadow: "0 0 12px oklch(0.82 0.14 86 / 0.8)",
          }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div style={{ opacity }} className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-[color:var(--gold)]">
                <Sparkles className="h-3 w-3" /> Build · Grow · Dominate
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-[clamp(2.6rem,6.8vw,5.5rem)] font-light leading-[1.02] tracking-tight">
                <span className="block text-platinum-gradient">Building The Future</span>
                <span className="block italic text-gold-gradient">Of Digital Innovation</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-base text-platinum/65 sm:text-lg">
                We craft world-class websites, AI solutions, and digital experiences
                engineered for global brands ready to lead — not follow.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <GoldButton href="#contact">Start a project</GoldButton>
                <GoldButton href="#work" variant="ghost">Explore our work</GoldButton>
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-8">
                {[
                  { n: 240, s: "+", l: "Projects" },
                  { n: 98, s: "%", l: "Retention" },
                  { n: 12, s: "yrs", l: "Mastery" },
                ].map((it) => (
                  <div key={it.l}>
                    <div className="font-display text-3xl sm:text-4xl text-gold-gradient">
                      <Counter to={it.n} suffix={it.s} />
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-platinum/50">{it.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <motion.div style={{ y: yLogo }} className="relative mx-auto aspect-square w-full max-w-[520px]">
            <motion.div
              style={{ x, y }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute inset-8 rounded-full border border-[color:var(--gold)]/20" />
              <div className="absolute inset-16 rounded-full border border-[color:var(--gold)]/15" />
              <div className="absolute inset-24 rounded-full border border-platinum/10" />
            </motion.div>

            <motion.div
              style={{ x, y }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="absolute h-[80%] w-[80%] rounded-full bg-[color:var(--gold)]/10 blur-3xl animate-pulse-glow" />
              <motion.img
                src={logo.url}
                alt="WEBZONO 3D logo"
                className="relative z-10 h-[78%] w-[78%] object-contain drop-shadow-[0_30px_60px_rgba(212,175,55,0.35)]"
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {[
              { l: "AI", a: 0 }, { l: "WEB", a: 90 }, { l: "UX", a: 180 }, { l: "SAAS", a: 270 },
            ].map((c) => (
              <motion.div
                key={c.l}
                className="absolute left-1/2 top-1/2 -ml-8 -mt-4 w-16 rounded-full glass-gold px-3 py-1 text-center text-[10px] font-semibold tracking-[0.2em] text-[color:var(--gold)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% 50%" }}
              >
                <motion.div
                  initial={{ rotate: c.a, x: 220 }}
                  animate={{ rotate: c.a + 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "-220px 50%" }}
                >
                  {c.l}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mt-24 border-y border-white/5 py-6">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-16 px-8">
            {["FORBES", "TECHCRUNCH", "WIRED", "BLOOMBERG", "FAST COMPANY", "THE VERGE", "WSJ", "INC."].concat(
              ["FORBES", "TECHCRUNCH", "WIRED", "BLOOMBERG", "FAST COMPANY", "THE VERGE", "WSJ", "INC."]
            ).map((b, i) => (
              <span key={i} className="text-sm font-semibold tracking-[0.4em] text-platinum/30">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const milestones = [
    { y: "2014", t: "Founded", d: "Born from a vision to redefine digital craftsmanship." },
    { y: "2018", t: "Global Reach", d: "Expanded to serve enterprise clients across 4 continents." },
    { y: "2021", t: "AI Division", d: "Launched dedicated AI Solutions practice." },
    { y: "2026", t: "Era of Dominance", d: "240+ shipped products. Recognized industry leader." },
  ];
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--gold)]">
            <span className="h-px w-10 bg-[color:var(--gold)]/60" /> About
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05]">
              A studio engineering <span className="italic text-gold-gradient">enterprise-grade</span> digital products for the world's most ambitious brands.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-platinum/65">
              <p>
                WEBZONO is a multidisciplinary technology house — part design atelier, part engineering powerhouse.
                We pair Silicon Valley craft with European restraint to ship products that feel inevitable.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl glass p-5">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold)]">Mission</div>
                  <p className="mt-2 text-sm text-platinum/80">Engineer digital products that compound business value over decades.</p>
                </div>
                <div className="rounded-2xl glass p-5">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold)]">Vision</div>
                  <p className="mt-2 text-sm text-platinum/80">Be the standard the next generation of technology companies aspire to.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent md:block" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal key={m.y} delay={i * 0.1}>
                <div className="relative">
                  <div className="mb-6 hidden h-4 w-4 items-center justify-center rounded-full bg-[color:var(--gold)] md:flex" style={{ boxShadow: "0 0 20px oklch(0.82 0.14 86 / 0.8)" }}>
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a]" />
                  </div>
                  <div className="font-display text-3xl text-gold-gradient">{m.y}</div>
                  <h3 className="mt-2 text-base font-semibold text-platinum">{m.t}</h3>
                  <p className="mt-1.5 text-sm text-platinum/55">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const services = [
    { i: Globe, t: "Business Websites", d: "Professional corporate and brand websites that establish authority, build trust, and convert visitors into customers.", tag: "01" },
    { i: ShoppingCart, t: "E-Commerce Websites", d: "High-converting online stores with secure checkout, inventory management, and seamless shopping experiences.", tag: "02" },
    { i: LayoutGrid, t: "Portfolio Websites", d: "Stunning creative portfolios for agencies, photographers, and professionals to showcase work with impact.", tag: "03" },
    { i: Rocket, t: "Landing Pages", d: "Conversion-optimized single-page experiences engineered for launches, campaigns, and lead generation.", tag: "04" },
    { i: AppWindow, t: "Web Applications", d: "Complex browser-based apps with real-time data, dashboards, collaboration tools, and scalable architecture.", tag: "05" },
    { i: Brain, t: "AI Solutions", d: "Custom LLM agents, RAG pipelines, computer vision, and intelligent automation tailored to your workflows.", tag: "06" },
    { i: Code2, t: "Web Development", d: "Performant, server-rendered platforms built on modern stacks. Engineered for scale and conversion.", tag: "07" },
    { i: Smartphone, t: "Mobile Apps", d: "Native iOS, Android, and cross-platform apps with the polish of a flagship product release.", tag: "08" },
    { i: Palette, t: "UI/UX Design", d: "Interface systems and brand experiences that look inevitable and feel effortless to use.", tag: "09" },
    { i: Megaphone, t: "Digital Marketing", d: "Growth engineering, SEO, paid acquisition, and content strategy built on first-party data.", tag: "10" },
    { i: Database, t: "SaaS Development", d: "End-to-end SaaS architecture, billing, multi-tenancy, and infrastructure that scales to millions.", tag: "11" },
  ];
  return (
    <section id="services" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 spotlight opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--gold)]">
            <span className="h-px w-10 bg-[color:var(--gold)]/60" /> Services
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05]">
            Eleven disciplines. <span className="italic text-gold-gradient">One obsession</span> with craft.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ i: Icon, t, d, tag }: { i: typeof Brain; t: string; d: string; tag: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card/40 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)]/30"
      style={{ boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.05)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(400px circle at ${pos.x}% ${pos.y}%, oklch(0.82 0.14 86 / 0.12), transparent 60%)` }}
      />
      <div className="relative flex items-start justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl glass-gold">
          <Icon className="h-6 w-6 text-[color:var(--gold)]" />
        </div>
        <span className="font-display text-2xl text-platinum/20">{tag}</span>
      </div>
      <h3 className="relative mt-8 text-xl font-semibold text-platinum">{t}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-platinum/55">{d}</p>
      <div className="relative mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)] opacity-0 transition-all duration-500 group-hover:opacity-100">
        Discover <ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </div>
  );
}

/* ---------- WORK ---------- */
function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  // Next.js static asset refs
  const projects = [
    { img: typeof work1 === 'object' && 'src' in work1 ? (work1 as any).src : work1, c: "AURELIA CAPITAL", t: "Investment Analytics Platform", k: "SAAS · FINTECH" },
    { img: typeof work2 === 'object' && 'src' in work2 ? (work2 as any).src : work2, c: "NOIR WELLNESS", t: "Luxury Mobile Companion", k: "MOBILE · iOS / ANDROID" },
    { img: typeof work3 === 'object' && 'src' in work3 ? (work3 as any).src : work3, c: "MAISON LUME", t: "Couture E-commerce", k: "WEB · COMMERCE" },
    { img: typeof work4 === 'object' && 'src' in work4 ? (work4 as any).src : work4, c: "NEXUS AI", t: "Enterprise AI Dashboard", k: "AI · SAAS" },
  ];

  return (
    <section id="work" ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="w-full">
          <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
            <Reveal>
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--gold)]">
                <span className="h-px w-10 bg-[color:var(--gold)]/60" /> Selected Work
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05]">
                Products that have shaped <span className="italic text-gold-gradient">categories</span>.
              </h2>
            </Reveal>
          </div>

          <motion.div style={{ x }} className="flex gap-6 px-[10vw]">
            {projects.map((p) => (
              <div key={p.c} className="group relative h-[60vh] w-[80vw] shrink-0 overflow-hidden rounded-3xl border border-white/10 md:w-[55vw] lg:w-[42vw]">
                <img src={p.img} alt={p.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--gold)]">{p.k}</div>
                  <h3 className="mt-3 font-display text-3xl text-platinum">{p.t}</h3>
                  <div className="mt-1 text-sm tracking-[0.2em] text-platinum/50">{p.c}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY CHOOSE US ---------- */
function WhyChoose() {
  const stats = [
    { n: 240, s: "+", l: "Products Shipped", i: Zap },
    { n: 48, s: "", l: "Countries Served", i: Globe },
    { n: 16, s: "M+", l: "End Users Reached", i: Trophy },
    { n: 99, s: "%", l: "On-time Delivery", i: Shield },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05]">
            The numbers behind the <span className="italic text-gold-gradient">obsession</span>.
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 neu p-8 text-center">
                <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-xl glass-gold">
                  <s.i className="h-5 w-5 text-[color:var(--gold)]" />
                </div>
                <div className="font-display text-5xl text-gold-gradient">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.25em] text-platinum/55">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING & SOLUTIONS ---------- */
interface PricingPlan {
  title: string;
  price: string;
  icon: any;
  category: "websites" | "systems" | "ai-cloud";
  features: string[];
  popular?: boolean;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Landing Page",
    price: "₹4,999",
    icon: FileText,
    category: "websites",
    features: [
      "High Conversion Design",
      "Lead Capture Form",
      "Mobile Responsive",
      "Fast Performance",
    ],
  },
  {
    title: "Portfolio Website",
    price: "₹7,999",
    icon: Palette,
    category: "websites",
    features: [
      "Modern UI/UX",
      "Personal or Company Portfolio",
      "Responsive Design",
      "Contact Form",
      "Optimized Performance",
    ],
  },
  {
    title: "Business Website",
    price: "₹9,999",
    icon: Globe,
    category: "websites",
    popular: true,
    features: [
      "Responsive Design",
      "5–10 Pages",
      "Contact Form",
      "SEO Ready",
      "Fast Loading",
      "WhatsApp Integration",
      "Free Basic Support",
    ],
  },
  {
    title: "E-Commerce Website",
    price: "₹19,999",
    icon: ShoppingCart,
    category: "websites",
    features: [
      "Product Management",
      "Shopping Cart",
      "Secure Payment Gateway",
      "Order Tracking",
      "Admin Dashboard",
    ],
  },
  {
    title: "AI Chatbot & AI Solutions",
    price: "₹14,999",
    icon: Bot,
    category: "ai-cloud",
    features: [
      "AI Chatbot",
      "Customer Support Automation",
      "Lead Generation",
      "Smart Responses",
    ],
  },
  {
    title: "Business Automation",
    price: "₹19,999",
    icon: Settings,
    category: "ai-cloud",
    features: [
      "Workflow Automation",
      "Task Management",
      "Business Process Optimization",
    ],
  },
  {
    title: "Android App Development",
    price: "₹24,999",
    icon: Smartphone,
    category: "systems",
    features: [
      "Modern UI",
      "Fast Performance",
      "API Integration",
      "Play Store Ready",
    ],
  },
  {
    title: "Custom Web Application",
    price: "₹29,999",
    icon: Code2,
    category: "systems",
    popular: true,
    features: [
      "Custom Dashboard",
      "Authentication",
      "Database Integration",
      "API Integration",
      "Secure Architecture",
    ],
  },
  {
    title: "Cloud Solutions",
    price: "₹39,999",
    icon: Cloud,
    category: "ai-cloud",
    features: [
      "Cloud Deployment",
      "Server Configuration",
      "Backup & Security",
      "Monitoring",
    ],
  },
  {
    title: "ERP / CRM System",
    price: "₹49,999",
    icon: Building2,
    category: "systems",
    features: [
      "Employee Management",
      "Customer Management",
      "Reports & Analytics",
      "Secure Admin Panel",
    ],
  },
];

function PricingCard({ plan, onSelect }: { plan: PricingPlan; onSelect: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pctX = ((e.clientX - rect.left) / rect.width) * 100;
    const pctY = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x: pctX, y: pctY });

    const tiltX = (e.clientX - rect.left) / rect.width - 0.5;
    const tiltY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(tiltX);
    y.set(tiltY);
  };

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => {
    setHovering(false);
    x.set(0);
    y.set(0);
  };

  const Icon = plan.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
        perspective: 1000,
        border: "1px solid transparent",
        backgroundImage: hovering 
          ? `linear-gradient(var(--card), var(--card)) padding-box, radial-gradient(180px circle at ${mousePos.x}% ${mousePos.y}%, oklch(0.75 0.18 190 / 0.8), transparent 60%) border-box`
          : "linear-gradient(var(--card), var(--card)) padding-box, linear-gradient(135deg, oklch(1 0 0 / 0.08), oklch(1 0 0 / 0.02)) border-box",
        boxShadow: hovering
          ? "0 20px 40px -15px oklch(0.55 0.22 250 / 0.15), inset 0 1px 0 oklch(1 0 0 / 0.05)"
          : "inset 0 1px 0 oklch(1 0 0 / 0.05)",
      }}
      className={`relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card/40 p-8 backdrop-blur transition-shadow duration-500 ${plan.popular ? 'shadow-[0_0_20px_rgba(0,243,255,0.05)]' : ''}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(350px circle at ${mousePos.x}% ${mousePos.y}%, oklch(0.75 0.18 190 / 0.07), transparent 70%)`
        }}
      />

      <div style={{ transform: "translateZ(25px)" }} className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center justify-between">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[color:var(--cyan-accent)]/15 to-[color:var(--blue-accent)]/5 border border-[color:var(--cyan-accent)]/20 text-[color:var(--cyan-accent)] transition-all duration-500">
              <Icon className="h-5 w-5" />
            </div>
            {plan.popular && (
              <span className="rounded-full bg-gradient-to-r from-[color:var(--cyan-accent)] to-[color:var(--blue-accent)] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-black shadow-[0_0_15px_oklch(0.75 0.18 190 / 0.3)]">
                Most Popular
              </span>
            )}
          </div>

          <h3 className="mt-6 text-xl font-bold tracking-tight text-white">{plan.title}</h3>

          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-xs text-platinum/50">Starting From</span>
            <span className="text-3xl font-black text-[color:var(--cyan-accent)]">{plan.price}</span>
          </div>

          <ul className="mt-6 space-y-3 border-t border-white/5 pt-6">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-platinum/70">
                <Check className="h-4 w-4 text-[color:var(--cyan-accent)] shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <a
            href="#contact"
            onClick={onSelect}
            className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
              plan.popular
                ? "bg-cyber-gradient text-black hover:scale-[1.02] shadow-[0_4px_25px_oklch(0.75 0.18 190 / 0.25)]"
                : "border border-white/10 bg-white/[0.02] text-platinum hover:border-[color:var(--cyan-accent)]/40 hover:bg-white/[0.05]"
            }`}
          >
            Get Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Pricing({ onSelectPlan }: { onSelectPlan: (budget: string, planTitle: string) => void }) {
  const [activeTab, setActiveTab] = useState<"all" | "websites" | "systems" | "ai-cloud">("all");

  const tabs = [
    { id: "all", label: "All Solutions" },
    { id: "websites", label: "Websites" },
    { id: "systems", label: "Apps & Systems" },
    { id: "ai-cloud", label: "AI & Cloud" },
  ] as const;

  const filteredPlans = PRICING_PLANS.filter(
    (plan) => activeTab === "all" || plan.category === activeTab
  );

  return (
    <section id="pricing" className="relative overflow-hidden py-32 border-y border-white/5">
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[600px] w-[600px] rounded-full bg-[color:var(--cyan-accent)]/5 blur-[150px] mix-blend-screen" />
      <div className="pointer-events-none absolute right-[-10%] bottom-[20%] h-[600px] w-[600px] rounded-full bg-[color:var(--blue-accent)]/5 blur-[150px] mix-blend-screen" />

      {Array.from({ length: 15 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[color:var(--cyan-accent)] pointer-events-none"
          style={{
            left: `${(i * 47) % 100}%`,
            top: `${(i * 29) % 100}%`,
            boxShadow: "0 0 10px oklch(0.75 0.18 190 / 0.8)",
          }}
          animate={{ y: [0, -40, 0], x: [0, (i % 2 === 0 ? 10 : -10), 0], opacity: [0.1, 0.7, 0.1] }}
          transition={{ duration: 7 + (i % 5), repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <Reveal>
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[color:var(--cyan-accent)]/30 bg-[color:var(--cyan-accent)]/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--cyan-accent)]">
              <Sparkles className="h-3 w-3" /> Premium Digital Architecture
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
              Choose the perfect <span className="text-cyber-gradient font-normal">digital solution</span><br />for your business.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-platinum/60 sm:text-lg leading-relaxed">
              Transparent starting prices with premium quality, scalable architecture, and dedicated support. 
              Final pricing depends on project scope and custom requirements.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 flex justify-center">
          <Reveal delay={0.2}>
            <div className="relative flex p-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative z-10 rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                    activeTab === tab.id ? "text-black" : "text-platinum/65 hover:text-white"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activePricingTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-cyber-gradient rounded-full -z-10"
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div 
          layout
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredPlans.map((plan, i) => (
            <Reveal key={plan.title} delay={i * 0.05} y={15}>
              <PricingCard 
                plan={plan} 
                onSelect={() => onSelectPlan(plan.price, plan.title)} 
              />
            </Reveal>
          ))}
        </motion.div>

        <Reveal delay={0.4}>
          <div className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-card/30 to-card/10 p-8 sm:p-12 backdrop-blur-md">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.7fr] items-center">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Ready to Build Your Next Digital Product?</h3>
                <p className="mt-3 text-sm leading-relaxed text-platinum/55">
                  All prices shown are starting prices. Final pricing depends on project requirements, features, design complexity, integrations, and development timeline. Contact WEBZONO for a free consultation and custom quotation.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-wider font-semibold text-platinum/75 uppercase">
                  <a href="tel:+917358859792" className="flex items-center gap-2 hover:text-[color:var(--cyan-accent)] transition">
                    <Phone className="h-4 w-4 text-[color:var(--cyan-accent)]" /> +91 7358859792
                  </a>
                  <a href="https://wa.me/917358859792?text=Hi%20WEBZONO,%20I'd%20like%20to%20get%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[color:var(--cyan-accent)] transition">
                    <WhatsAppIcon className="h-4 w-4 text-[color:var(--cyan-accent)]" /> WhatsApp Support
                  </a>
                  <a href="mailto:webzono.official@gmail.com" className="flex items-center gap-2 hover:text-[color:var(--cyan-accent)] transition">
                    <Mail className="h-4 w-4 text-[color:var(--cyan-accent)]" /> webzono.official@gmail.com
                  </a>
                  <a href="https://webzono.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[color:var(--cyan-accent)] transition">
                    <Globe className="h-4 w-4 text-[color:var(--cyan-accent)]" /> WEBZONO.IN
                  </a>
                </div>
              </div>
              <div className="flex justify-start lg:justify-end">
                <a
                  href="#contact"
                  className="btn-sweep inline-flex items-center gap-2.5 rounded-full bg-cyber-gradient px-8 py-4 text-sm font-bold tracking-wider text-black shadow-[0_5px_25px_oklch(0.75 0.18 190 / 0.3)] transition-transform hover:scale-[1.02]"
                >
                  Get Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const quotes = [
    { q: "WEBZONO didn't deliver a product — they delivered a category. Our investor deck writes itself now.", n: "Sarah Lindqvist", r: "CEO, Aurelia Capital" },
    { q: "The level of craft is unreal. Every pixel, every interaction — considered. They feel like an in-house team.", n: "Marcus Reid", r: "CPO, Nexus AI" },
    { q: "Five agencies tried. WEBZONO succeeded in twelve weeks. Conversions tripled, retention doubled.", n: "Aiko Tanaka", r: "Founder, Maison Lume" },
    { q: "They engineer like Stripe and design like Apple. Rare combination, rarer execution.", n: "Daniel Okafor", r: "VP Engineering, Helix" },
    { q: "Working with WEBZONO recalibrated our standard for what 'premium' actually means.", n: "Elena Rossi", r: "CMO, Noir Wellness" },
    { q: "From kickoff to launch felt cinematic. They turn business problems into product magic.", n: "Jonas Becker", r: "COO, Vantage Labs" },
  ];
  const row = [...quotes, ...quotes];
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--gold)]">
            <span className="h-px w-10 bg-[color:var(--gold)]/60" /> Voices
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05]">
            Trusted by founders who <span className="italic text-gold-gradient">don't settle</span>.
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#050505] to-transparent" />
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-6 px-3">
            {row.map((t, i) => (
              <figure key={i} className="w-[360px] shrink-0 rounded-3xl glass p-7 sm:w-[420px]">
                <div className="flex gap-1 text-[color:var(--gold)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 text-[15px] leading-relaxed text-platinum/85">"{t.q}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient text-xs font-bold text-[#0a0a0a]">
                    {t.n.split(" ").map((p) => p[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-platinum">{t.n}</div>
                    <div className="text-xs text-platinum/50">{t.r}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TEAM / FOUNDER ---------- */
function Team() {
  const team = [
    { n: "Pugazhenthi P", r: "Founder & CEO", spotlight: true, img: founder.url },
    { n: "Sofia Marchetti", r: "Chief Design Officer" },
    { n: "Liam Park", r: "Head of Engineering" },
    { n: "Priya Nair", r: "Director of AI" },
  ];
  return (
    <section id="team" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--gold)]">
            <span className="h-px w-10 bg-[color:var(--gold)]/60" /> The Team
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05]">
            Operators, makers, <span className="italic text-gold-gradient">obsessives</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            { name: "Pugazhenthi P", role: "FOUNDER · Chairman & CEO", img: founder.url, label: "Founder" },
            { name: "Yuvaraj G", role: "FOUNDER · CTO & Lead Operations", img: cofounder.url, label: "Founder" },
          ].map((p) => (
            <div key={p.role} className="overflow-hidden rounded-3xl border border-white/10 bg-card group">
              <div className="relative aspect-[3/4] w-full">
                <img
                  src={p.img}
                  alt={`${p.name}, ${p.role}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-transparent" />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full glass-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
                  <Sparkles className="h-3 w-3" /> {p.label}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="font-display text-2xl text-platinum sm:text-3xl">{p.name}</h3>
                  <div className="mt-1 text-xs tracking-[0.25em] text-platinum/60">{p.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-6 rounded-3xl border border-white/10 bg-card/40 p-10 lg:p-14">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">A note from the founders</div>
            <p className="mt-6 max-w-3xl text-platinum/70 leading-relaxed">
              "We started WEBZONO with a simple conviction: the best digital products in the world should not
              be reserved for a handful of Silicon Valley giants. Every brand we partner with deserves an
              obsession-grade level of craft. That is what we build, every day, without compromise."
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Stanford MBA", "Ex-Apple", "Y Combinator W18", "Forbes 30u30"].map((b) => (
                <span key={b} className="rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] tracking-wider text-platinum/65">{b}</span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-3">
          {team.filter((t) => !t.spotlight).map((m, i) => (
            <Reveal key={m.n} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card/40 p-8 transition hover:-translate-y-1 hover:border-[color:var(--gold)]/30">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gold-gradient text-xl font-bold text-[#0a0a0a]">
                  {m.n.split(" ").map((p) => p[0]).join("")}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-platinum">{m.n}</h3>
                <div className="mt-1 text-sm text-platinum/55">{m.r}</div>
                <div className="mt-6 flex gap-3 text-platinum/40">
                  <FaLinkedin className="h-4 w-4 transition hover:text-[color:var(--gold)]" />
                  <FaXTwitter className="h-4 w-4 transition hover:text-[color:var(--gold)]" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact({ prefilledBudget = "", prefilledMessage = "" }: { prefilledBudget?: string; prefilledMessage?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [budgetValue, setBudgetValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  useEffect(() => {
    if (prefilledBudget) setBudgetValue(prefilledBudget);
  }, [prefilledBudget]);

  useEffect(() => {
    if (prefilledMessage) setMessageValue(prefilledMessage);
  }, [prefilledMessage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const selectedBudget = formData.get("budget");
    const customBudget = formData.get("custom_budget");
    const budget = selectedBudget === "custom" ? customBudget : selectedBudget;
    const msg = formData.get("msg");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name as string,
          email: email as string,
          company: company as string,
          budget: budget as string,
          message: msg as string,
        }),
      });

      const res = await response.json();

      if (response.ok && res.success) {
        setSubmitted(true);
        toast.success("Inquiry sent successfully to WEBZONO!");
      } else {
        throw new Error(res.error || "Failed to send inquiry via primary API.");
      }
    } catch (err) {
      console.warn("Primary API failed, attempting direct submission fallback...", err);
      
      try {
        const fallbackResponse = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "a2e8c2ee-a3de-4f27-be8e-a226bc2fa47e",
            name,
            email,
            company,
            budget,
            message: msg,
            subject: `WEBZONO Fallback - New Inquiry from ${name}`,
            from_name: "WEBZONO Client Portal",
          }),
        });

        const fallbackRes = await fallbackResponse.json();
        if (fallbackRes.success) {
          setSubmitted(true);
          toast.success("Inquiry sent successfully via secure direct gateway!");
        } else {
          toast.error(fallbackRes.message || "Failed to send inquiry.");
        }
      } catch (fallbackErr) {
        console.error("Direct fallback failed:", fallbackErr);
        toast.error("Failed to send inquiry. Please try contacting us on WhatsApp or Phone.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 spotlight" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--gold)]">
                <span className="h-px w-10 bg-[color:var(--gold)]/60" /> Let's build
              </div>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05]">
                Tell us what you want to <span className="italic text-gold-gradient">dominate</span>.
              </h2>
              <p className="mt-6 text-platinum/65">
                Selective engagements. Senior teams only. We respond within 24 hours.
              </p>
              <ul className="mt-10 space-y-5">
                {[
                  { i: Mail, l: "Webzono.offcial@gmail.com", href: "mailto:Webzono.offcial@gmail.com" },
                  { i: Phone, l: "+91 7358859792", href: "tel:+917358859792", wa: "https://wa.me/917358859792?text=Hi%20WEBZONO,%20I'd%20like%20to%20get%20a%20free%20consultation." },
                  { i: Phone, l: "+91 7358177544", href: "tel:+917358177544", wa: "https://wa.me/917358177544?text=Hi%20WEBZONO,%20I'd%20like%20to%20get%20a%20free%20consultation." },
                  { i: MapPin, l: "Chennai" },
                ].map((it) => (
                  <li key={it.l} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-xl glass-gold">
                        <it.i className="h-4 w-4 text-[color:var(--gold)]" />
                      </div>
                      {it.href ? (
                        <a href={it.href} className="text-sm text-platinum/85 hover:text-[color:var(--gold)] transition">
                          {it.l}
                        </a>
                      ) : (
                        <span className="text-sm text-platinum/85">{it.l}</span>
                      )}
                    </div>
                    {it.wa && (
                      <a
                        href={it.wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500 hover:text-black transition cursor-pointer"
                        title="Chat on WhatsApp"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl border border-white/10 glass p-8 sm:p-10"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" id="name" placeholder="Your full name" required />
                <Field label="Company" id="company" placeholder="Brand or organization" required />
                <Field label="Email" id="email" type="email" placeholder="your @email.com" className="sm:col-span-2" required />
                
                <div className="sm:col-span-2 relative">
                  <label htmlFor="budget" className="text-[11px] font-semibold uppercase tracking-[0.25em] text-platinum/55">Budget</label>
                  <div className="relative mt-2">
                    <select
                      id="budget"
                      name="budget"
                      value={budgetValue}
                      onChange={(e) => setBudgetValue(e.target.value)}
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#050505]/40 px-4 py-3.5 pr-10 text-sm text-platinum placeholder:text-platinum/30 outline-none transition focus:border-[color:var(--gold)]/50 focus:bg-white/[0.05] appearance-none cursor-pointer"
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" disabled className="bg-[#050505] text-platinum/40">Select budget range...</option>
                      <option value="Under ₹50,000" className="bg-[#050505] text-platinum">Under ₹50,000</option>
                      <option value="₹50,000 – ₹1,00,000" className="bg-[#050505] text-platinum">₹50,000 – ₹1,00,000</option>
                      <option value="₹1,00,000 – ₹2,50,000" className="bg-[#050505] text-platinum">₹1,00,000 – ₹2,50,000</option>
                      <option value="₹2,50,000 – ₹5,00,000" className="bg-[#050505] text-platinum">₹2,50,000 – ₹5,00,000</option>
                      <option value="₹5,00,000+" className="bg-[#050505] text-platinum">₹5,00,000+</option>
                      <option value="custom" className="bg-[#050505] text-platinum font-semibold">Other / Custom Amount...</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-platinum/50">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {budgetValue === "custom" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="sm:col-span-2 overflow-hidden"
                  >
                    <label htmlFor="custom_budget" className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">Enter Custom Budget Amount</label>
                    <input
                      id="custom_budget"
                      name="custom_budget"
                      type="text"
                      placeholder="e.g. ₹75,000 or $2,500"
                      required
                      className="mt-2 w-full rounded-xl border border-[color:var(--gold)]/30 bg-white/[0.04] px-4 py-3.5 text-sm text-platinum placeholder:text-platinum/30 outline-none transition focus:border-[color:var(--gold)]/60 focus:bg-white/[0.06]"
                    />
                  </motion.div>
                )}

                <div className="sm:col-span-2">
                  <label htmlFor="msg" className="text-[11px] font-semibold uppercase tracking-[0.25em] text-platinum/55">Project Details</label>
                  <textarea
                    id="msg" name="msg" rows={4} required
                    placeholder="Tell us about your ambition…"
                    value={messageValue}
                    onChange={(e) => setMessageValue(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-platinum placeholder:text-platinum/30 outline-none transition focus:border-[color:var(--gold)]/50 focus:bg-white/[0.05]"
                  />
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-platinum/45">By submitting you agree to our terms.</div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-sweep group inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold tracking-wide text-[#0a0a0a] shadow-gold transition hover:scale-[1.02] disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : submitted ? (
                    <><Check className="h-4 w-4" /> Received</>
                  ) : (
                    <>Send inquiry <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", placeholder, className = "", required = false }: { label: string; id: string; type?: string; placeholder?: string; className?: string; required?: boolean }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-[11px] font-semibold uppercase tracking-[0.25em] text-platinum/55">{label}</label>
      <input
        id={id} name={id} type={type} placeholder={placeholder} required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-platinum placeholder:text-platinum/30 outline-none transition focus:border-[color:var(--gold)]/50 focus:bg-white/[0.05]"
      />
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <img src={logo.url} alt="WEBZONO" className="h-12 w-auto object-contain" style={{ maxWidth: '180px' }} />
            </div>
            <p className="mt-5 max-w-sm text-sm text-platinum/55">
              Building the future of digital innovation, one product at a time.
              Build. Grow. Dominate.
            </p>
            <div className="mt-6 flex gap-3 text-platinum/45">
              {[FaLinkedin, FaXTwitter, FaInstagram, FaGithub].map((I, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:border-[color:var(--gold)]/40 hover:text-[color:var(--gold)]">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">Studio</div>
            <ul className="mt-4 space-y-2.5 text-sm text-platinum/60">
              {["About", "Services", "Work", "Pricing", "Team", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-[color:var(--gold)]">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">Offices</div>
            <ul className="mt-4 space-y-2.5 text-sm text-platinum/60">
              <li>San Francisco</li><li>London</li><li>Dubai</li><li>Singapore</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-platinum/40">
          <div>© {new Date().getFullYear()} WEBZONO. All rights reserved.</div>
          <div className="tracking-[0.3em]">BUILD · GROW · DOMINATE</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- MAIN PAGE ---------- */
export default function Home() {
  const [prefilledBudget, setPrefilledBudget] = useState("");
  const [prefilledMessage, setPrefilledMessage] = useState("");

  const handleSelectPlan = (budget: string, planTitle: string) => {
    let budgetOption = "Under ₹50,000";
    const numericPrice = parseInt(budget.replace(/[^0-9]/g, ""));
    if (numericPrice >= 50000 && numericPrice < 100000) {
      budgetOption = "₹50,000 – ₹1,00,000";
    } else if (numericPrice >= 100000 && numericPrice < 250000) {
      budgetOption = "₹1,00,000 – ₹2,50,000";
    } else if (numericPrice >= 250000 && numericPrice < 500000) {
      budgetOption = "₹2,50,000 – ₹5,00,000";
    } else if (numericPrice >= 500000) {
      budgetOption = "₹5,00,000+";
    }

    setPrefilledBudget(budgetOption);
    setPrefilledMessage(`Hi WEBZONO, I would like to get a free consultation for the ${planTitle} (${budget}).`);
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Work />
      <WhyChoose />
      <Pricing onSelectPlan={handleSelectPlan} />
      <Testimonials />
      <Team />
      <Contact prefilledBudget={prefilledBudget} prefilledMessage={prefilledMessage} />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917358859792?text=Hi%20WEBZONO,%20I'd%20like%20to%20get%20a%20free%20consultation%20for%20my%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6 fill-white" />
      </a>
    </main>
  );
}
