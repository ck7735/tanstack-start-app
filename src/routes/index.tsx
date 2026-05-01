import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, Cpu, Laptop, Cable, ArrowRight, Phone, MessageCircle,
  Star, CheckCircle2, MapPin, Clock, Award, Users,
  Globe, FileText, GraduationCap, Heart, Users as Labour, Briefcase, Car, GraduationCap as Licence,
} from "lucide-react";
import heroCctv from "@/assets/hero-cctv.jpg";
import { SITE, whatsappLink } from "@/lib/site";
import { SectionLabel } from "@/components/section-primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SVR Solutions — Complete CCTV, Computer & Citizen Services" },
      { name: "description", content: "CCTV installation, computer & laptop sales, repairs and citizen online applications. Passport, PAN card, scholarship, driving licence & more government services across Hyderabad." },
      { property: "og:title", content: "SVR Solutions — CCTV, Computer & Citizen Services" },
      { property: "og:description", content: "Complete CCTV, computer solutions and citizen government services under one roof." },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { icon: ShieldCheck, num: "01", title: "CCTV Installation", desc: "HD/4K cameras, NVR/DVR setup, remote viewing & AMC support." },
  { icon: Cpu, num: "02", title: "Computer Sales & Repair", desc: "Custom-built desktops, OS installs, hardware repair & upgrades." },
  { icon: Laptop, num: "03", title: "Laptop Sales & Repair", desc: "Branded laptops, screen replacement, motherboard repair, SSD upgrades." },
  { icon: Cable, num: "04", title: "Accessories", desc: "Printers, routers, hard disks, cables, networking gear & more." },
];

const CITIZEN_SERVICES = [
  { icon: Globe, title: "Passport", desc: "Application & verification" },
  { icon: FileText, title: "PAN Card", desc: "New & correction" },
  { icon: GraduationCap, title: "Scholarship", desc: "Government schemes" },
  { icon: Heart, title: "Marriage Cert", desc: "Registration" },
  { icon: Users, title: "Kalyana Lakshmi", desc: "Bride assistance" },
  { icon: Labour, title: "Labour Card", desc: "EPF & ESIC" },
  { icon: Briefcase, title: "Trade License", desc: "GST & permits" },
  { icon: Car, title: "Learning Licence", desc: "Apply online" },
  { icon: Licence, title: "Driving Licence", desc: "DL & renewal" },
];

const STATS = [
  { label: "Cameras Installed", value: "4,280+" },
  { label: "Happy Clients", value: "1,000+" },
  { label: "Response Time", value: "<4 HRS" },
  { label: "Years Trusted", value: "6+" },
];

const TESTIMONIALS = [
  { name: "Ramesh K.", role: "Retail Owner, Hyderabad", text: "SVR installed 16 cameras across our 3 stores in just 2 days. Crystal clear footage and the mobile app works perfectly." },
  { name: "Priya Sharma", role: "School Administrator", text: "Professional team, transparent pricing, and after-sales support that actually responds. Highly recommended." },
  { name: "Arun Verma", role: "Office Manager", text: "From our office network to all our laptops — SVR handles it all. They are our one-stop tech partner." },
];

const BRANDS = ["Hikvision", "CP Plus", "Dahua", "HP", "Dell", "Lenovo", "Asus", "TP-Link"];

const FAQS = [
  { q: "Do you provide free site surveys?", a: "Yes. We offer free on-site surveys across Hyderabad to assess your security needs and provide an accurate quote." },
  { q: "What's the warranty on CCTV installations?", a: "All cameras come with 1–2 year manufacturer warranty plus our 6-month installation warranty for workmanship." },
  { q: "Can I view my CCTV remotely on my phone?", a: "Absolutely. Every system we install includes mobile app setup for live viewing and playback from anywhere." },
  { q: "Do you offer AMC for businesses?", a: "Yes, we provide flexible Annual Maintenance Contracts with priority support and on-site visits." },
  { q: "What are your service areas?", a: "We serve all major cities across Hyderabad including surrounding regions." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative border-b border-border overflow-hidden">
        <div className="container-svr grid grid-cols-1 lg:grid-cols-12 gap-0 border-x border-border">
          <div className="lg:col-span-7 lg:border-r border-border py-16 md:py-24 lg:py-28 px-6 animate-slide-up">
            <SectionLabel>Trusted in Hyderabad · Since 2019</SectionLabel>
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-[1.02]">
              Complete <span className="text-brand underline decoration-4 underline-offset-[10px]">CCTV</span>, Computer & Citizen Services.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              From surveillance cameras to laptop repair — plus complete government application assistance. SVR Solutions delivers reliable security, technology & citizen services backed by 6+ years of expertise.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wider text-background hover:bg-brand transition-colors">
                Get Free Quote <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 border border-border bg-background px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink hover:bg-surface transition-colors">
                <Phone className="size-4" /> Call Now
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-whatsapp bg-whatsapp/5 text-whatsapp px-7 py-4 text-sm font-bold uppercase tracking-wider hover:bg-whatsapp/10 transition-colors">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{s.label}</p>
                  <p className="mt-1 text-2xl font-bold tabular-nums text-ink">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative bg-ink min-h-[400px]">
            <img
              src={heroCctv}
              alt="Modern CCTV camera installation in office building"
              width={1280}
              height={1600}
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-background p-5 shadow-elegant">
              <div className="flex items-center gap-4">
                <div className="size-12 shrink-0 bg-brand/10 flex items-center justify-center">
                  <ShieldCheck className="size-6 text-brand" />
                </div>
                <div>
                  <p className="mono text-[10px] font-bold uppercase tracking-widest text-brand">Live Coverage</p>
                  <h3 className="text-sm font-bold text-ink">24/7 Monitoring · Mobile Access</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="container-svr py-20 md:py-28 border-x border-border">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-ink max-w-2xl">
              Four pillars. One trusted partner.
            </h2>
          </div>
          <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand">
            All services <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {SERVICES.map(({ icon: Icon, num, title, desc }) => (
            <div key={num} className="group bg-background p-8 hover:bg-surface transition-colors cursor-default">
              <div className="flex items-center justify-between">
                <Icon className="size-8 text-brand" strokeWidth={1.5} />
                <span className="mono text-xs font-bold text-muted-foreground">{num}</span>
              </div>
              <h3 className="mt-8 text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <div className="mt-6 h-0.5 w-8 bg-brand group-hover:w-16 transition-all" />
            </div>
          ))}
        </div>
      </section>

      {/* CITIZEN SERVICES */}
      <section className="bg-surface border-y border-border">
        <div className="container-svr py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <SectionLabel>Government Services</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-ink max-w-2xl">
                Citizen Online Applications Made Easy
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Complete assistance with passport, PAN card, scholarships, driving licence, trade license & more government applications.
              </p>
            </div>
            <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand">
              View all services <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4">
            {CITIZEN_SERVICES.map(({ icon: Icon, title, desc }) => (
              <Link key={title} to="/contact" className="group bg-background p-5 border border-border hover:border-brand/30 hover:shadow-md transition-all text-center">
                <div className="mx-auto size-10 bg-brand/10 flex items-center justify-center">
                  <Icon className="size-5 text-brand" strokeWidth={1.5} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-ink">{title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              Need help with any government application? <Link to="/contact" className="text-brand font-bold hover:underline">Contact us</Link> for quick assistance.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-ink text-background border-y border-border">
        <div className="container-svr py-20 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Why SVR Solutions</SectionLabel>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
              Built on trust.<br/>Engineered for uptime.
            </h2>
            <p className="mt-6 text-lg text-background/70 leading-relaxed max-w-xl">
              Over a decade serving homes, shops, schools, and enterprises across Hyderabad with security systems and technology that just work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-background/10">
            {[
              { icon: Award, t: "Certified Technicians", d: "Trained team with manufacturer certifications." },
              { icon: Clock, t: "Fast Response", d: "On-site service within 4 hours in most areas." },
              { icon: Users, t: "1,000+ Clients", d: "Trusted by businesses & homes across Hyderabad." },
              { icon: CheckCircle2, t: "Genuine Products", d: "Only authentic brands with full warranty." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-ink p-7">
                <Icon className="size-7 text-brand" strokeWidth={1.5} />
                <h4 className="mt-5 font-bold">{t}</h4>
                <p className="mt-1.5 text-sm text-background/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-svr py-20 md:py-28 border-x border-border">
        <SectionLabel>Customer stories</SectionLabel>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-ink max-w-2xl">
          What our customers say.
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="bg-background p-8">
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-base text-ink leading-relaxed">"{t.text}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <p className="font-bold text-ink">{t.name}</p>
                <p className="mono text-xs text-muted-foreground uppercase tracking-wider">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-y border-border bg-surface/50">
        <div className="container-svr py-12 border-x border-border">
          <p className="mono text-xs font-bold uppercase tracking-widest text-muted-foreground text-center">Brands we deal with</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {BRANDS.map((b) => (
              <span key={b} className="text-lg md:text-xl font-bold text-ink/70 hover:text-ink transition-colors tracking-tight">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-svr py-20 md:py-28 border-x border-border grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-ink">
            Questions, answered.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Can't find what you're looking for? Reach out — our team responds within hours.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand hover:gap-3 transition-all">
            Ask a question <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="lg:col-span-8 divide-y divide-border border-y border-border">
          {FAQS.map((f, i) => (
            <details key={i} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-lg font-semibold text-ink pr-6">{f.q}</span>
                <span className="mono text-xl text-brand group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand text-brand-foreground">
        <div className="container-svr py-20 md:py-24 text-center">
          <MapPin className="size-8 mx-auto opacity-70" strokeWidth={1.5} />
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Ready to secure your space?
          </h2>
          <p className="mt-5 text-lg opacity-80 max-w-xl mx-auto">
            Get a free site survey and personalized quote within 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="bg-background text-ink px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-background/90 transition-colors">
              Request a Quote
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="border border-brand-foreground/30 px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-brand-foreground/10 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
