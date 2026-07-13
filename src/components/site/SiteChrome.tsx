import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/destinations", label: "Destinations" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="container-narrow flex h-18 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border-2 border-accent bg-background shadow-sm transition group-hover:border-primary group-hover:shadow-md">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-primary"
              aria-hidden="true"
            >
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.85 7H17.14L18.22 10.11H5.78L6.85 7ZM19 17H5V12H19V17ZM7.5 16C8.33 16 9 15.33 9 14.5C9 13.67 8.33 13 7.5 13C6.67 13 6 13.67 6 14.5C6 15.33 6.67 16 7.5 16ZM16.5 16C17.33 16 18 15.33 18 14.5C18 13.67 17.33 13 16.5 13C15.67 13 15 13.67 15 14.5C15 15.33 15.67 16 16.5 16Z" />
            </svg>
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 rounded-full border-2 border-background bg-primary px-1.5 py-[0.15rem] font-display text-[0.5rem] font-bold leading-none tracking-tight text-primary-foreground shadow-sm">
              A→B
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[1.35rem] font-semibold leading-none tracking-tight text-foreground">
              A to B Cabs
            </span>
            <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Mysore
            </span>
          </div>
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
          href="tel:+919686767106"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-sm transition hover:bg-primary/90 hover:shadow-md"
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
            <li><a href="tel:+919686767106" className="hover:text-foreground">+91-96867 67106</a></li>
            <li><a href="mailto:atobcabride@gmail.com" className="hover:text-foreground">atobcabride@gmail.com</a></li>
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
