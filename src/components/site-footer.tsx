import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="container-svr py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="size-9 bg-brand flex items-center justify-center">
              <div className="size-4 border-2 border-brand-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight text-ink">SVR SOLUTIONS</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            {SITE.tagline}. Trusted CCTV installation, computer sales & service across Hyderabad.
          </p>
          <p className="mt-6 mono text-[11px] uppercase tracking-widest text-brand font-bold">
            ISO-grade installations · Since 2019
          </p>
        </div>

        <div>
          <h4 className="mono text-[11px] uppercase tracking-widest text-muted-foreground font-bold">Navigate</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-brand transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-brand transition-colors">Services</Link></li>
            <li><Link to="/products" className="hover:text-brand transition-colors">Products</Link></li>
            <li><Link to="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mono text-[11px] uppercase tracking-widest text-muted-foreground font-bold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="size-4 mt-0.5 text-brand shrink-0" />
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-brand transition-colors">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="size-4 mt-0.5 text-brand shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-brand transition-colors break-all">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 mt-0.5 text-brand shrink-0" />
              <span className="text-muted-foreground">{SITE.address}</span>
            </li>
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-whatsapp hover:underline"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-svr py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SVR Solutions. All rights reserved.</p>
          <p className="mono uppercase tracking-widest">Built for Security · Engineered for Trust</p>
        </div>
      </div>
    </footer>
  );
}
