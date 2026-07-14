import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-munnar.jpg";
import mysoreAsset from "@/assets/dest-mysore-palace.jpg.asset.json";
import coorgAsset from "@/assets/dest-coorg-abbey-falls.jpg.asset.json";
import alleppeyImg from "@/assets/dest-alleppey.jpg";
import ootyImg from "@/assets/dest-ooty.jpg";
import { SitePage } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/")({
  component: Index,
});

const featured = [
  { name: "Mysore", tag: "Palace city", img: mysoreAsset.url },
  { name: "Coorg", tag: "Coffee country", img: coorgAsset.url },
  { name: "Ooty", tag: "Nilgiri hills", img: ootyImg },
  { name: "Alleppey", tag: "Backwaters", img: alleppeyImg },
];

const services = [
  { title: "Local Sightseeing", body: "Mysore Palace, Chamundi Hills, Brindavan Gardens and every corner of the city — on your schedule." },
  { title: "Outstation Tours", body: "Curated multi-day journeys across South India with experienced local drivers who know every route." },
  { title: "Airport Transfers", body: "Punctual, comfortable pick-ups and drops from Mysore, Bangalore, and Mangalore airports." },
  { title: "Honeymoon Packages", body: "Private cars, boutique stays and quiet itineraries designed for two — Coorg, Munnar, Alleppey." },
];

function Index() {
  return (
    <SitePage>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Misty tea plantations in Munnar at golden hour"
            width={1920}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
        </div>
        <div className="relative container-narrow py-32 md:py-44">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/80">
            Mysore · Est. private travel
          </p>
          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] max-w-4xl">
            South India,
            <br />
            <em className="italic text-primary">unhurried.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-foreground/80">
            A to B Cabs is a small, family-run travel service from Mysore.
            Clean cars, honest fares, and drivers who genuinely know the roads
            between the hills, the coast, and the temples.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/destinations"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition hover:opacity-90"
            >
              Explore destinations
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-foreground/50 px-6 py-3 text-sm text-foreground transition hover:bg-foreground hover:text-background"
            >
              Plan my trip →
            </Link>
          </div>
        </div>
      </section>

      {/* TAGLINE STRIP */}
      <section className="border-y border-border/60 bg-background">
        <div className="container-narrow flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-10">
          <p className="font-serif text-3xl md:text-4xl italic max-w-2xl">
            “Simple and clean travel solution.”
          </p>
          <div className="grid grid-cols-3 gap-8 text-sm">
            <div><div className="font-serif text-3xl">12+</div><div className="text-muted-foreground">Years on the road</div></div>
            <div><div className="font-serif text-3xl">40k</div><div className="text-muted-foreground">Happy km driven</div></div>
            <div><div className="font-serif text-3xl">24×7</div><div className="text-muted-foreground">Always answering</div></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-narrow py-24">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">What we do</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              Four ways to<br />travel with us.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-lg text-muted-foreground self-end">
            Whether it's a two-hour city ride or a ten-day journey down to
            Kanyakumari, the same small team looks after your car, your driver,
            and every detail of the itinerary.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((s) => (
            <div key={s.title} className="bg-background p-10">
              <h3 className="font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
              <Link
                to="/services"
                className="mt-6 inline-block text-sm underline underline-offset-4 decoration-sand-300 hover:decoration-foreground"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-secondary/40 border-y border-border/60">
        <div className="container-narrow py-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Where we go</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">Featured destinations</h2>
            </div>
            <Link to="/destinations" className="hidden md:inline text-sm underline underline-offset-4">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {featured.map((d) => (
              <Link
                key={d.name}
                to="/destinations"
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <span className="font-serif text-2xl">{d.name}</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{d.tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container-narrow py-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Kind words</p>
          <blockquote className="mt-6 font-serif italic text-3xl md:text-4xl leading-snug">
            “Ravi picked us up at 4 a.m. from Mysore and drove us all the way to
            Munnar with two long stops in Coorg. The car was spotless, the
            music was quiet, and he knew every viewpoint by name.”
          </blockquote>
          <p className="mt-6 text-sm text-muted-foreground">— Meera & Arjun, Bengaluru</p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-primary text-primary-foreground">
        <div className="container-narrow py-20 grid md:grid-cols-2 gap-10 items-center">
          <h2 className="font-serif text-4xl md:text-5xl">
            Tell us where you<br />want to go.
          </h2>
          <div>
            <p className="text-primary-foreground/80 max-w-md">
              A quick call is often enough. We'll suggest an itinerary, quote a
              fair price, and hold the car for you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+919686767106" className="inline-flex items-center rounded-full bg-background text-foreground px-6 py-3 text-sm">
                Call +91-96867 67106
              </a>
              <Link to="/contact" className="inline-flex items-center rounded-full border border-primary-foreground/40 px-6 py-3 text-sm hover:bg-primary-foreground hover:text-primary">
                Write to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919686767106"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </SitePage>
  );
}
