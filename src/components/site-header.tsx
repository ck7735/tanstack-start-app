import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-svr flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <div className="size-9 bg-brand flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="size-4 border-2 border-brand-foreground" />
          </div>
          <div className="leading-none">
            <span className="text-lg font-bold tracking-tight text-ink">SVR</span>
            <span className="text-lg font-light tracking-tight text-muted-foreground"> SOLUTIONS</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-ink transition-colors relative py-1"
              activeProps={{ className: "text-ink after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-brand" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-ink hover:text-brand transition-colors"
          >
            <Phone className="size-4" />
            {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground hover:bg-brand/90 transition-all active:scale-[0.98]"
          >
            Get Quote
          </Link>
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-svr flex flex-col py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="py-3 text-sm font-medium text-ink border-b border-border last:border-0"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="py-3 text-sm font-semibold text-brand mono"
            >
              {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
