import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { PageHero, SectionLabel } from "@/components/section-primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SVR Solutions — Call, WhatsApp or Visit" },
      { name: "description", content: "Get in touch with SVR Solutions. Call, WhatsApp, email, or visit our store. Free site survey across India." },
      { property: "og:title", content: "Contact SVR Solutions" },
      { property: "og:description", content: "Call, WhatsApp, email or visit. Free quotes within 24 hours." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Partial<Record<keyof z.infer<typeof schema>, string>>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: typeof errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof z.infer<typeof schema>;
        errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `New enquiry from ${parsed.data.name} (${parsed.data.phone}):\n\n${parsed.data.message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={<>Let's talk security<br/>& technology.</>}
        subtitle="Call, WhatsApp, email or fill out the form. We typically respond within a few hours during business days."
      />

      <section className="container-svr py-16 md:py-20 border-x border-border grid grid-cols-1 lg:grid-cols-12 gap-px bg-border">
        {/* Form */}
        <div className="lg:col-span-7 bg-background p-8 md:p-12">
          <SectionLabel>Send a message</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink">Request a quote</h2>
          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Name</label>
              <input
                id="name" name="name" type="text" required maxLength={100}
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-ink focus:border-brand focus:outline-none transition-colors"
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Phone</label>
              <input
                id="phone" name="phone" type="tel" required maxLength={20}
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-ink focus:border-brand focus:outline-none transition-colors"
                placeholder="+91 98xxxxxxxx"
              />
              {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                id="message" name="message" required rows={5} maxLength={1000}
                className="mt-2 w-full border border-border bg-background px-4 py-3 text-ink focus:border-brand focus:outline-none transition-colors resize-none"
                placeholder="Tell us what you need — CCTV install, repair, laptop purchase, etc."
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wider text-background hover:bg-brand transition-colors"
            >
              Send via WhatsApp <MessageCircle className="size-4" />
            </button>
            {sent && (
              <p className="flex items-center gap-2 text-sm text-whatsapp font-medium">
                <CheckCircle2 className="size-4" /> Opening WhatsApp with your message...
              </p>
            )}
          </form>
        </div>

        {/* Contact info */}
        <div className="lg:col-span-5 bg-surface p-8 md:p-12">
          <SectionLabel>Direct channels</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink">Reach us directly</h2>

          <ul className="mt-8 space-y-6">
            <li>
              <p className="mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Phone</p>
              <a href={`tel:${SITE.phoneTel}`} className="mt-1 flex items-center gap-3 text-lg font-bold text-ink hover:text-brand transition-colors">
                <Phone className="size-5 text-brand" /> {SITE.phone}
              </a>
            </li>
            <li>
              <p className="mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email</p>
              <a href={`mailto:${SITE.email}`} className="mt-1 flex items-center gap-3 text-lg font-bold text-ink hover:text-brand transition-colors break-all">
                <Mail className="size-5 text-brand shrink-0" /> {SITE.email}
              </a>
            </li>
            <li>
              <p className="mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">WhatsApp</p>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-1 flex items-center gap-3 text-lg font-bold text-whatsapp hover:underline">
                <MessageCircle className="size-5" /> Chat instantly
              </a>
            </li>
            <li>
              <p className="mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Address</p>
              <p className="mt-1 flex items-start gap-3 text-ink">
                <MapPin className="size-5 text-brand mt-0.5 shrink-0" /> {SITE.address}
              </p>
            </li>
          </ul>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Business hours</p>
            <p className="mt-2 text-ink">Mon – Sat: 9:30 AM – 8:00 PM</p>
            <p className="text-muted-foreground">Sunday: By appointment</p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-y border-border">
        <div className="container-svr border-x border-border">
          <div className="aspect-[16/7] bg-surface">
            <iframe
              title="SVR Solutions location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`}
              className="h-full w-full border-0 grayscale-[30%] contrast-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="container-svr py-16 border-x border-border">
        <SectionLabel>Service coverage</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-ink max-w-2xl">
          We serve across Hyderabad.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          On-site installation and service available in major cities and surrounding regions.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {["Hyderabad"].map((c) => (
            <span key={c} className="border border-border bg-surface px-4 py-2 text-sm font-medium text-ink">{c}</span>
          ))}
        </div>
      </section>
    </>
  );
}
