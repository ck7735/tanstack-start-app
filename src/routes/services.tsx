import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Cpu, Laptop, Cable, Check, ArrowRight, Globe, FileText, GraduationCap, Heart, Users, Briefcase, ShoppingCart, Car, GraduationCap as Licence } from "lucide-react";
import { PageHero } from "@/components/section-primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — CCTV, Computer, Citizen Applications | SVR Solutions" },
      { name: "description", content: "Professional CCTV installation, computer & laptop repair, and complete citizen online applications including passport, PAN card, scholarship, driving license and more across Hyderabad." },
      { property: "og:title", content: "Our Services — SVR Solutions" },
      { property: "og:description", content: "CCTV installation, computer & laptop repair, citizen government services." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: ShieldCheck,
    num: "01",
    title: "CCTV Installation & Maintenance",
    desc: "Complete surveillance systems for homes, shops, offices and industrial sites.",
    benefits: ["HD/4K dome, bullet & IP cameras", "DVR/NVR setup with cloud backup", "Mobile app for live view & playback", "AMC packages for ongoing support"],
  },
  {
    icon: Cpu,
    num: "02",
    title: "Computer Sales & Repair",
    desc: "Custom-built desktops and full repair service for every brand and configuration.",
    benefits: ["Branded & assembled desktops", "Hardware & software diagnostics", "OS install, virus removal, data recovery", "RAM, SSD & GPU upgrades"],
  },
  {
    icon: Laptop,
    num: "03",
    title: "Laptop Sales & Repair",
    desc: "New laptops from top brands plus expert repair for any make or model.",
    benefits: ["HP, Dell, Lenovo, Asus & more", "Screen, keyboard & battery replacement", "Motherboard chip-level repair", "SSD upgrades & performance tuning"],
  },
  {
    icon: Cable,
    num: "04",
    title: "Accessories & Networking",
    desc: "Everything you need to complete your IT setup — sourced and installed.",
    benefits: ["Printers, scanners & cartridges", "Wi-Fi routers, switches, access points", "Hard disks, pen drives, NAS storage", "Cabling, UPS & networking installation"],
  },
];

const CITIZEN_SERVICES = [
  {
    icon: Globe,
    num: "01",
    title: "Passport Application",
    desc: "Complete assistance with passport application form submission, document verification, and appointment booking.",
    benefits: ["Online form filling assistance", "Document verification & scanning", "Appointment scheduling", "Status tracking support"],
  },
  {
    icon: FileText,
    num: "02",
    title: "PAN Card Application",
    desc: "Help with new PAN card application, correction requests, and reprint services.",
    benefits: ["New PAN card application", "Data correction & updates", "Reprint & duplicate requests", "Link with Aadhaar"],
  },
  {
    icon: GraduationCap,
    num: "03",
    title: "Scholarship Application",
    desc: "Guidance for various government scholarship schemes for students.",
    benefits: ["Pre-matric scholarships", "Post-matric scholarships", "Merit-based schemes", "Online application assistance"],
  },
  {
    icon: Heart,
    num: "04",
    title: "Marriage Certificate Application",
    desc: "Assistance with marriage registration and certificate application process.",
    benefits: ["Online registration form", "Document preparation", "Appointment booking", "Certificate tracking"],
  },
  {
    icon: Users,
    num: "05",
    title: "Kalyana Lakshmi Application",
    desc: "Help with Telangana Kalyana Lakshmi scheme application for bride's marriage assistance.",
    benefits: ["Scheme eligibility check", "Application form filling", "Document upload assistance", "Status tracking"],
  },
  {
    icon: Briefcase,
    num: "06",
    title: "Labour Department Services",
    desc: "Online services for labour registration, benefits, and welfare schemes.",
    benefits: ["EPF registration", "ESIC services", "Labour card registration", "Complaint filing"],
  },
  {
    icon: ShoppingCart,
    num: "07",
    title: "Trade Online Application",
    desc: "Assistance with trade licenses, GST registration, and business permits.",
    benefits: ["Trade license application", "GST registration", "Udyam registration", "Business permit services"],
  },
  {
    icon: Car,
    num: "08",
    title: "Learning Licence Application",
    desc: "Complete support for learning license application and test preparation.",
    benefits: ["Online form submission", "Document verification", "Test slot booking", "Practice materials"],
  },
  {
    icon: Licence,
    num: "09",
    title: "Driving Licence Application",
    desc: "Assistance with driving license application, test booking, and documentation.",
    benefits: ["LL to DL conversion", "Test appointment booking", "Document verification", "License renewal"],
  },
  {
    icon: FileText,
    num: "10",
    title: "Other Government Services",
    desc: "Help with various other government online applications and services.",
    benefits: ["Aadhaar services", "Voter ID applications", "RTA services", "Utility bill payments"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>IT Solutions & Citizen<br/>Services Hub</>}
        subtitle="From CCTV installations to complete government application support — we deliver end-to-end IT solutions and citizen services across Hyderabad."
      />

      <section className="container-svr py-16 md:py-20 border-x border-border">
        <div className="grid grid-cols-1 gap-px bg-border border border-border">
          {SERVICES.map(({ icon: Icon, num, title, desc, benefits }) => (
            <article key={num} className="bg-background p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 hover:bg-surface/50 transition-colors">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4">
                  <div className="size-14 bg-brand/10 flex items-center justify-center">
                    <Icon className="size-7 text-brand" strokeWidth={1.5} />
                  </div>
                  <span className="mono text-xs font-bold text-muted-foreground">{num} / 04</span>
                </div>
                <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-ink">{title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{desc}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand hover:gap-3 transition-all">
                  Enquire about this service <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="lg:col-span-7 lg:border-l border-border lg:pl-8">
                <p className="mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Key benefits</p>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink">
                      <Check className="size-4 text-brand mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-background border-y border-border">
        <div className="container-svr py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Need IT Services?
          </h2>
          <p className="mt-4 text-background/70 max-w-xl mx-auto">
            From a single CCTV camera to a full enterprise IT setup, we deliver end-to-end installation, support and maintenance.
          </p>
          <Link to="/contact" className="mt-8 inline-flex bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wider text-brand-foreground hover:bg-brand/90 transition-colors">
            Request a Free Consultation
          </Link>
        </div>
      </section>

      <PageHero
        eyebrow="Citizen Services"
        title={<>Government Services<br/>Made Simple.</>}
        subtitle="We help you with all your citizen online applications — from passport to driving license, scholarships to marriage certificates. Complete assistance with documentation and online submissions."
      />

      <section className="container-svr py-16 md:py-20 border-x border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CITIZEN_SERVICES.map(({ icon: Icon, num, title, desc, benefits }) => (
            <article key={num} className="bg-background p-6 border border-border hover:border-brand/30 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 bg-brand/10 flex items-center justify-center">
                  <Icon className="size-6 text-brand" strokeWidth={1.5} />
                </div>
                <span className="mono text-xs font-bold text-muted-foreground">{num} / 10</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <ul className="mt-4 space-y-2">
                {benefits.slice(0, 3).map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-ink">
                    <Check className="size-3 text-brand mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand hover:gap-3 transition-all">
                Apply Now <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="container-svr py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
            Need help with any government application?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Our team provides end-to-end assistance for all citizen online applications. Visit us or contact us for quick support.
          </p>
          <Link to="/contact" className="mt-8 inline-flex bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wider text-brand-foreground hover:bg-brand/90 transition-colors">
            Contact for Citizen Services
          </Link>
        </div>
      </section>
    </>
  );
}
