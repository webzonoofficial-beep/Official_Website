'use client';



const brands = [
  { name: 'Google', letter: 'G' },
  { name: 'Microsoft', letter: 'M' },
  { name: 'Shopify', letter: 'S' },
  { name: 'Stripe', letter: 'St' },
  { name: 'Vercel', letter: 'V' },
  { name: 'Notion', letter: 'N' },
  { name: 'Figma', letter: 'F' },
  { name: 'Linear', letter: 'L' },
  { name: 'Supabase', letter: 'Su' },
  { name: 'PlanetScale', letter: 'P' },
];

export default function Logos() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-16 overflow-hidden relative border-y border-card-border/40">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-text-muted">
          Trusted by innovative businesses worldwide
        </p>
      </div>

      <div className="flex gap-10 animate-marquee will-change-transform w-max">
        {doubled.map((brand, i) => (
          <div
            key={i}
            className="flex items-center gap-3 glass rounded-2xl border border-card-border px-6 py-4 min-w-[140px] flex-shrink-0 hover:border-primary/40 transition-colors duration-300 group"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary font-outfit group-hover:bg-primary/20 transition-colors">
              {brand.letter}
            </div>
            <span className="text-sm font-semibold text-text-muted group-hover:text-foreground transition-colors font-outfit">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
