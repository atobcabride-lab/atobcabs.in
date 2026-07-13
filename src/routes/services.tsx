import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SitePage } from "@/components/site/SiteChrome";
import fleetImg from "@/assets/fleet-sedan.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — A to B Cabs, Mysore" },
      {
        name: "description",
        content:
          "Local sightseeing, outstation tours, airport transfers and honeymoon packages from Mysore across South India.",
      },
      { property: "og:title", content: "Services — A to B Cabs" },
      {
        property: "og:description",
        content: "Local, outstation, airport and honeymoon travel from Mysore.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Mysore Local Sightseeing",
    duration: "Half day · Full day",
    body: "Mysore Palace, Chamundi Hills, St Philomena's Cathedral, Brindavan Gardens, Mysore Zoo, Karanji Lake — arranged in the order that fits the weather and your energy, not a rigid checklist.",
    price: "from ₹1,800 / half day",
  },
  {
    title: "Outstation Tours",
    duration: "2 – 10 days",
    body: "Multi-day journeys across Karnataka, Kerala and Tamil Nadu. We handle the route, the fuel, the tolls, and the stops for filter coffee — you handle the window seat.",
    price: "custom quote",
  },
  {
    title: "Airport Transfers",
    duration: "Anytime, 24 × 7",
    body: "Reliable pick-up and drop from Mysore, Bengaluru (KIA) and Mangalore airports. Flight-tracked arrivals, name-board on request, child seats available.",
    price: "from ₹2,500",
  },
  {
    title: "Honeymoon Packages",
    duration: "4 – 7 days",
    body: "Quiet, private itineraries for couples: Coorg homestays, Munnar plantations, Alleppey houseboats, Kanyakumari sunrises. Same driver, same car, the whole way.",
    price: "custom quote",
  },
];

function ServicesPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Services"
        title="Rides, routes, and long journeys."
        lead="Four core services. One promise: a clean car, an honest fare, and a driver who treats your trip like their own."
      />

      <section className="container-narrow py-20">
        <div className="grid gap-px bg-border">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="bg-background p-10 grid md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-1 font-serif text-4xl text-muted-foreground">
                0{i + 1}
              </div>
              <div className="md:col-span-4">
                <h2 className="font-serif text-3xl">{s.title}</h2>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.duration}
                </p>
              </div>
              <p className="md:col-span-5 text-muted-foreground">{s.body}</p>
              <div className="md:col-span-2 md:text-right font-serif text-lg italic">
                {s.price}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border/60">
        <div className="container-narrow py-20 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={fleetImg}
            alt="Clean white sedan for A to B Cabs tours"
            width={1400}
            height={1000}
            loading="lazy"
            className="w-full rounded-sm object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The fleet</p>
            <h2 className="mt-4 font-serif text-4xl">Small fleet. Well kept.</h2>
            <p className="mt-4 text-muted-foreground">
              Sedans for couples and small families, Innovas and Ertigas for
              groups up to seven, and Tempo Travellers for larger parties. Every
              car is inspected before it leaves the yard.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-y-3 text-sm">
              <li>· Toyota Etios / Dzire</li>
              <li>· Maruti Ertiga</li>
              <li>· Toyota Innova Crysta</li>
              <li>· Tempo Traveller (12+1)</li>
            </ul>
            <Link
              to="/fleet"
              className="mt-6 inline-block text-sm underline underline-offset-4 decoration-sand-300 hover:decoration-foreground"
            >
              See full fleet →
            </Link>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
