import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/destinations", label: "Destinations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold leading-none tracking-tight">A to B</span>
          <span className="text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
            Cabs · Mysore
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+919999999999"
          className="hidden md:inline-flex items-center rounded-full border border-foreground/80 px-4 py-2 text-xs uppercase tracking-widest text-foreground transition hover:bg-foreground hover:text-background"
        >
          Book a ride
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-narrow grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl font-semibold tracking-tight">A to B Cabs</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Simple and clean travel solutions from the heart of Mysore —
            crafted for families, couples, and travellers who value comfort.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.slice(1).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-foreground text-muted-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Reach us</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Mysuru, Karnataka</li>
            <li><a href="tel:+919999999999" className="hover:text-foreground">+91 99999 99999</a></li>
            <li><a href="mailto:hello@atobcabs.in" className="hover:text-foreground">hello@atobcabs.in</a></li>
            <li>Open 24 × 7</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-narrow flex flex-col md:flex-row items-start md:items-center justify-between gap-2 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} A to B Cabs, Mysore. All rights reserved.</span>
          <span className="italic font-serif text-sm">Simple and clean travel solution.</span>
        </div>
      </div>
    </footer>
  );
}

export function SitePage({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-border/60 bg-secondary/30">
      <div className="container-narrow py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05]">{title}</h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{lead}</p>
        ) : null}
      </div>
    </section>
  );
}
