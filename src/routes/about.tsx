import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SitePage } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A to B Cabs, Mysore" },
      {
        name: "description",
        content:
          "A small family-run travel service from Mysore, offering clean cars, honest fares and drivers who know South India.",
      },
      { property: "og:title", content: "About A to B Cabs" },
      {
        property: "og:description",
        content: "Family-run travel service from Mysore since 2013.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="About"
        title="A small team, a straight promise."
        lead="A to B Cabs began with one car and one driver in Mysore. It is still a family business — quiet, careful, and proudly local."
      />

      <section className="container-narrow py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>
            We are based in Mysuru — the old palace city — and have been
            running private car tours across South India since 2013. What
            began as a single airport-drop service has grown into a small,
            trusted fleet used by families, honeymooners and long-time repeat
            travellers from across the country.
          </p>
          <p>
            We don't run a call centre. When you write to us or call, you
            reach the same three people who plan the trip, dispatch the car,
            and pick up the phone if anything is off. That is what we mean by
            <em className="font-serif"> simple and clean</em>.
          </p>
          <p>
            Our drivers live within thirty kilometres of Mysore. They know
            the ghats between here and Madikeri, the roadside dosa stands
            near Sathyamangalam, the quiet backway into Ooty when the main
            road is choked. That local knowledge is the thing we sell.
          </p>
        </div>
        <aside className="md:col-span-4 md:col-start-9 border-l border-border pl-8 space-y-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Founded</div>
            <div className="font-serif text-3xl mt-1">2013 · Mysore</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Team</div>
            <div className="font-serif text-3xl mt-1">3 owners · 11 drivers</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Cars</div>
            <div className="font-serif text-3xl mt-1">Sedan, SUV, Tempo</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Coverage</div>
            <div className="font-serif text-3xl mt-1">All of South India</div>
          </div>
        </aside>
      </section>

      <section className="bg-secondary/40 border-y border-border/60">
        <div className="container-narrow py-20 grid md:grid-cols-3 gap-10">
          {[
            { t: "Honest fares", b: "One quote up-front. No mid-trip surprises, no inflated toll or fuel add-ons." },
            { t: "Clean cars", b: "Every vehicle is washed and vacuumed before pickup. Non-negotiable." },
            { t: "Real drivers", b: "Long-term, salaried drivers who know your route — not gig strangers." },
          ].map((v) => (
            <div key={v.t}>
              <h3 className="font-serif text-2xl">{v.t}</h3>
              <p className="mt-3 text-muted-foreground">{v.b}</p>
            </div>
          ))}
        </div>
      </section>
    </SitePage>
  );
}
