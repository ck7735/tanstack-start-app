import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { whatsappLink } from "@/lib/site";
import { PageHero } from "@/components/section-primitives";
import dome from "@/assets/product-dome.jpg";
import bullet from "@/assets/product-bullet.jpg";
import ip from "@/assets/product-ip.jpg";
import laptop from "@/assets/product-laptop.jpg";
import desktop from "@/assets/product-desktop.jpg";
import accessories from "@/assets/product-accessories.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — CCTV, Laptops, Desktops & Accessories | SVR Solutions" },
      { name: "description", content: "Browse CCTV cameras (dome, bullet, IP), laptops, desktops and IT accessories. Enquire for best prices in India." },
      { property: "og:title", content: "Products — SVR Solutions" },
      { property: "og:description", content: "CCTV cameras, laptops, desktops and accessories." },
    ],
  }),
  component: ProductsPage,
});

type Product = { id: string; cat: string; name: string; tag: string; img: string };

const PRODUCTS: Product[] = [
  { id: "p1", cat: "CCTV", name: "Dome Camera 4MP", tag: "Indoor · IR Night Vision", img: dome },
  { id: "p2", cat: "CCTV", name: "Bullet Camera 5MP", tag: "Outdoor · Weatherproof", img: bullet },
  { id: "p3", cat: "CCTV", name: "IP PoE Camera 8MP", tag: "Network · Smart Detection", img: ip },
  { id: "p4", cat: "Laptops", name: "Business Laptop i5", tag: "16GB RAM · 512GB SSD", img: laptop },
  { id: "p5", cat: "Laptops", name: "Performance Laptop i7", tag: "32GB RAM · 1TB SSD", img: laptop },
  { id: "p6", cat: "Desktops", name: "Office Desktop", tag: "Intel · 8GB · 256GB SSD", img: desktop },
  { id: "p7", cat: "Desktops", name: "Workstation Pro", tag: "i7 · 32GB · 1TB NVMe", img: desktop },
  { id: "p8", cat: "Accessories", name: "Wi-Fi Router AC1200", tag: "Dual-band · Gigabit", img: accessories },
  { id: "p9", cat: "Accessories", name: "External HDD 2TB", tag: "USB 3.0 · Portable", img: accessories },
];

const CATS = ["All", "CCTV", "Laptops", "Desktops", "Accessories"] as const;

function ProductsPage() {
  const [active, setActive] = useState<(typeof CATS)[number]>("All");
  const items = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>Quality hardware.<br/>Honest pricing.</>}
        subtitle="Browse our curated range of CCTV cameras, laptops, desktops and accessories. Tap Enquire to get a quick quote."
      />

      <section className="container-svr py-12 border-x border-border">
        <div className="flex flex-wrap gap-2 border-b border-border pb-6">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                active === c
                  ? "bg-ink text-background"
                  : "border border-border text-muted-foreground hover:text-ink hover:border-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border-x border-b border-border">
          {items.map((p) => (
            <article key={p.id} className="group bg-background flex flex-col">
              <div className="aspect-square bg-surface overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 mono text-[10px] font-bold uppercase tracking-widest bg-background px-2 py-1 text-brand">
                  {p.cat}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tag}</p>
                <a
                  href={whatsappLink(`Hi, I'd like to enquire about: ${p.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center bg-ink text-background py-3 text-xs font-bold uppercase tracking-wider hover:bg-brand transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
