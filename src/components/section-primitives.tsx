import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 border border-border bg-surface px-3 py-1">
      <div className="size-1.5 rounded-full bg-brand animate-pulse" />
      <span className="mono text-[10px] font-bold uppercase tracking-widest text-brand">
        {children}
      </span>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
}) {
  return (
    <section className="border-b border-border bg-surface/50">
      <div className="container-svr py-16 md:py-24 animate-slide-up">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-ink max-w-4xl">
          {title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}
