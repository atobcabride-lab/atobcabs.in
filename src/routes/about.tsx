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
            reach the owner who plans the trip, dispatches the car, and
            picks up the phone if anything is off. That is what we mean by
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
            <div className="font-serif text-3xl mt-1">1 owner · 18 staff including drivers</div>
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
        <div className="container-narrow py-20">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Team Highlight</div>
            <h2 className="font-serif text-3xl md:text-4xl mt-3">Meet the owner</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Owner profile */}
            <div className="bg-background rounded-2xl border border-border/60 shadow-sm p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="shrink-0">
                <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-inner ring-4 ring-primary/10">
                  <span className="font-display text-4xl font-bold">VG</span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl">Vinayaka G S</h3>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mt-1">Founder & Owner</p>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  A tech enthusiast and travel geek at heart, Vinayaka has spent years in tourism and hospitality, learning what travellers actually need on the road. He built A to B Cabs around that insight: reliable cars, transparent pricing, and a team that treats every trip like its own.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Today he still oversees operations personally — from route planning to driver training — making sure the small-team care that started the company stays in every ride.
                </p>
              </div>
            </div>

            {/* Press story */}
            <div className="bg-background rounded-2xl border border-border/60 shadow-sm p-8 md:p-10 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-border/60" />
                <span className="text-xs uppercase tracking-widest text-muted-foreground">In the press</span>
                <div className="h-px flex-1 bg-border/60" />
              </div>

              <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/95 italic border-l-4 border-primary/60 pl-6 mb-6">
                “I left engineering not because I failed, but because I did not want a life of pressure with nothing to show for it. I would rather earn respect through the work I do.”
              </blockquote>

              <div className="space-y-4 text-foreground/85 leading-relaxed flex-1">
                <p>
                  In 2016, a local news story profiled Vinayaka’s unusual path: an Information Science engineer from MIT, Mysore, who had worked with Joyo Taxi Technologies and Tata Motors in Bangalore, yet chose to return home within a year to start his own travel business.
                </p>
                <p>
                  He began with one car and four friends’ cars, serving airport runs and local travellers. Fluent in four languages, he found that personal attention — not corporate titles — was what customers valued most. That same belief still drives A to B Cabs today.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border/60 text-xs text-muted-foreground">
                Originally reported in May 2016 · Translated from Kannada
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow py-20 grid md:grid-cols-3 gap-10">
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
      </section>
    </SitePage>
  );
}
