import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SitePage } from "@/components/site/SiteChrome";
import mysoreImg from "@/assets/dest-mysore-palace.jpg";
import coorgImg from "@/assets/dest-coorg-abbey-falls.jpg";
import wayanadImg from "@/assets/dest-wayanad-wildlife.jpg";
import ootyImg from "@/assets/dest-ooty.jpg";
import kodaikanalImg from "@/assets/dest-kodaikanal-lake.jpg";
import maduraiImg from "@/assets/dest-madurai-meenakshi.jpg";
import alleppeyImg from "@/assets/dest-alleppey.jpg";
import kanyakumariImg from "@/assets/dest-kanyakumari.jpg";
import munnarImg from "@/assets/hero-munnar.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — South India Tour Packages | A to B Cabs" },
      {
        name: "description",
        content:
          "Mysore, Coorg, Wayanad, Ooty, Kodaikanal, Madurai, Kanyakumari, Alleppey, Munnar and more — private car tours across South India.",
      },
      { property: "og:title", content: "South India Destinations — A to B Cabs" },
      {
        property: "og:description",
        content:
          "Private car tours across Karnataka, Kerala and Tamil Nadu.",
      },
    ],
  }),
  component: DestinationsPage,
});

const destinations = [
  { name: "Mysore", state: "Karnataka", img: mysoreImg, note: "Palace, markets, and the city we call home." },
  { name: "Coorg", state: "Karnataka", img: coorgImg, note: "Coffee estates, misty mornings and slow days." },
  { name: "Wayanad", state: "Kerala", img: wayanadImg, note: "Wildlife, waterfalls and forest trails." },
  { name: "Ooty", state: "Tamil Nadu", img: ootyImg, note: "Nilgiri hills, tea gardens and the toy train." },
  { name: "Kodaikanal", state: "Tamil Nadu", img: kodaikanalImg, note: "Pine forests, lakes and cool cliffside walks." },
  { name: "Madurai", state: "Tamil Nadu", img: maduraiImg, note: "The Meenakshi temple and a living old city." },
  { name: "Kanyakumari", state: "Tamil Nadu", img: kanyakumariImg, note: "Where three seas meet — sunrise and sunset over the ocean." },
  { name: "Alleppey", state: "Kerala", img: alleppeyImg, note: "Houseboats on palm-lined backwaters." },
  { name: "Munnar", state: "Kerala", img: munnarImg, note: "Endless tea plantations in the Western Ghats." },
];

function DestinationsPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Destinations"
        title="A slow map of South India."
        lead="Nine places we return to, again and again. Combine any of them into a two-day escape or a two-week loop."
      />

      <section className="container-narrow py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((d) => (
            <article key={d.name} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-muted rounded-sm">
                <img
                  src={d.img}
                  alt={`${d.name}, ${d.state}`}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <div className="flex items-baseline justify-between">
                  <h2 className="font-serif text-3xl">{d.name}</h2>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {d.state}
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground">{d.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-primary text-primary-foreground">
        <div className="container-narrow py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-serif text-4xl md:text-5xl max-w-xl">
            Not sure which combination to pick?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-background px-6 py-3 text-sm text-foreground"
          >
            Plan an itinerary with us →
          </Link>
        </div>
      </section>
    </SitePage>
  );
}
