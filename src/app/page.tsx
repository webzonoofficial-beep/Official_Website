import Hero from '@/components/home/Hero';
import Logos from '@/components/home/Logos';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Pricing from '@/components/home/Pricing';
import Portfolio from '@/components/home/Portfolio';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';
import TechStack from '@/components/home/TechStack';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';
import RevenueCalculator from '@/components/interactive/RevenueCalculator';
import AuditTool from '@/components/interactive/AuditTool';
import BeforeAfterSlider from '@/components/interactive/BeforeAfterSlider';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Logos />
      <Services />
      <WhyChooseUs />

      {/* Special Premium Section: Before/After Slider */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary font-outfit px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 inline-block">
              Transformation
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-outfit text-foreground tracking-tight">
              See The Webzono Difference
            </h2>
            <p className="text-text-muted text-base md:text-lg mt-4">
              Drag the slider to compare a legacy website with our premium modern redesign architecture.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      <Pricing />
      <Portfolio />

      {/* Special Premium Section: Audit Tool & Revenue Calculator */}
      <section className="py-24 relative bg-background border-y border-card-border/40">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col gap-24">
          <AuditTool />
          <RevenueCalculator />
        </div>
      </section>

      <Process />
      <Testimonials />
      <TechStack />
      <FAQ />
      <Contact />
    </div>
  );
}
