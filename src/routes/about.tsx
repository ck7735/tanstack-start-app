import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { PageHero, SectionLabel } from "@/components/section-primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SVR Solutions — 12+ Years of Trusted Tech Service" },
      { name: "description", content: "Learn about SVR Solutions — Hyderabad's trusted partner for CCTV, computers, laptops and IT services. Founded 2019." },
      { property: "og:title", content: "About SVR Solutions" },
      { property: "og:description", content: "12+ years of trusted security & technology service in Hyderabad." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SVR Solutions"
        title={<>Securing spaces. <br/>Empowering technology.</>}
        subtitle="Founded in 2019, SVR Solutions has grown into one of Hyderabad's most trusted names in CCTV installation, computer sales and IT services."
      />

      <section className="container-svr py-20 md:py-24 border-x border-border grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/3] bg-surface overflow-hidden">
          <img src={aboutImg} loading="lazy" width={1200} height={900} alt="SVR Solutions technician installing CCTV camera" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div>
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-ink">
            Built by technicians.<br/>Trusted by thousands.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            What started as a small CCTV installation shop in 2019 has grown into a full-stack security and computer services company serving homes, businesses, schools, and enterprises across Hyderabad.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We believe security shouldn't be complicated — and great technology shouldn't be unaffordable. Every project we take on, big or small, gets the same attention to detail and after-sales support.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Manufacturer-certified technicians on every install",
              "Genuine products only — full warranty backing",
              "Transparent pricing with no hidden fees",
              "AMC support packages for businesses",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-brand mt-0.5 shrink-0" />
                <span className="text-ink">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-svr py-20 border-x border-border">
          <SectionLabel>Our values</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-ink max-w-2xl">
            What guides every project.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { icon: Target, t: "Mission", d: "Make professional security and IT services accessible to every home and business in India." },
              { icon: Eye, t: "Vision", d: "To be India's most trusted single-point partner for security and technology solutions." },
              { icon: Heart, t: "Values", d: "Honesty, craftsmanship, and after-sales support that genuinely shows up when you need it." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-background p-8">
                <Icon className="size-8 text-brand" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl font-bold text-ink">{t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-svr py-20 border-x border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {[
            { v: "6+", l: "Years in business" },
            { v: "4,280+", l: "Cameras installed" },
            { v: "1,000+", l: "Happy customers" },
            { v: "24/7", l: "Support available" },
          ].map((s) => (
            <div key={s.l} className="bg-background p-8 text-center">
              <p className="text-4xl md:text-5xl font-bold text-brand tabular-nums">{s.v}</p>
              <p className="mt-2 mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
