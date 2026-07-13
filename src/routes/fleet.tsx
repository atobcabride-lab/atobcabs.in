import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SitePage } from "@/components/site/SiteChrome";
import sedanImg from "@/assets/fleet-sedan.jpg";
import suvAsset from "@/assets/fleet-suv.jpg.asset.json";
import tempoAsset from "@/assets/fleet-tempo.jpg.asset.json";
import minibusAsset from "@/assets/fleet-minibus.jpg.asset.json";
import busAsset from "@/assets/fleet-bus.jpg.asset.json";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet — A to B Cabs, Mysore" },
      {
        name: "description",
        content:
          "Explore our fleet of clean, well-maintained vehicles: Sedan, SUV, Tempo Traveller, Mini Bus and Bus — perfect for every group size across South India.",
      },
      { property: "og:title", content: "Fleet — A to B Cabs" },
      {
        property: "og:description",
        content:
          "Sedan, SUV, Tempo Traveller, Mini Bus and Bus rentals from Mysore.",
      },
    ],
  }),
  component: FleetPage,
});

const categories = [
  {
    name: "Sedan",
    seats: "4 seater",
    body: "Toyota Etios / Swift Dzire. Quiet, fuel-efficient and ideal for couples, small families and airport transfers.",
    img: sedanImg,
    alt: "Clean white sedan for city rides and airport transfers",
  },
  {
    name: "SUV",
    seats: "7 seater",
    body: "Toyota Innova Crysta / Maruti Ertiga. Spacious, high-clearance and perfect for hill roads and longer outstation tours.",
    img: suvAsset.url,
    alt: "Premium white SUV for family trips and hill station travel",
  },
  {
    name: "Tempo Traveller",
    seats: "12 seater",
    body: "Force Traveller with push-back seats and generous luggage space. Great for medium groups and temple or heritage tours.",
    img: tempoAsset.url,
    alt: "White 12-seater Tempo Traveller van for group tours",
  },
  {
    name: "Mini Bus",
    seats: "21 seater",
    body: "Compact bus with reclining seats and AC. Suited for school trips, corporate outings and wedding parties.",
    img: minibusAsset.url,
    alt: "Modern white 21-seater mini bus parked near Mysore palace",
  },
  {
    name: "Bus",
    seats: "50 seater",
    body: "Large luxury coach for big groups, events and interstate travel. On-board amenities with an experienced crew.",
    img: busAsset.url,
    alt: "Large white 50-seater luxury coach bus on a highway",
  },
];

function FleetPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Fleet"
        title="A vehicle for every group size."
        lead="From a quiet sedan for two to a 50-seater coach for the whole family — every car is cleaned and inspected before it reaches you."
      />

      <section className="container-narrow py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.name}
              className="group overflow-hidden rounded-sm border border-border bg-background"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={c.img}
                  alt={c.alt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-serif text-2xl">{c.name}</h2>
                  <span className="inline-flex shrink-0 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
                    {c.seats}
                  </span>
                </div>
                <p className="mt-3 text-muted-foreground">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="container-narrow py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Need help choosing?
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Not sure which fits your trip?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Tell us how many people, how much luggage, and where you are
              headed. We will suggest the right vehicle and quote a fair fare.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="tel:+919999999999"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition hover:bg-primary/90"
            >
              Call us
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-foreground/50 px-6 py-3 text-sm text-foreground transition hover:bg-foreground hover:text-background"
            >
              Plan my trip →
            </Link>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
