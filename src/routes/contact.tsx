import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SitePage } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — A to B Cabs, Mysore" },
      {
        name: "description",
        content:
          "Call, message or write to A to B Cabs in Mysore. Available 24×7 for bookings, quotes, and custom itineraries.",
      },
      { property: "og:title", content: "Contact A to B Cabs" },
      {
        property: "og:description",
        content: "Mysore-based travel service. Reach us anytime.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Contact"
        title="Tell us where and when."
        lead="A quick note with your dates, city of origin and how many travellers is enough for us to send back a quote and a suggested itinerary."
      />

      <section className="container-narrow py-20 grid lg:grid-cols-12 gap-12">
        <form
          className="lg:col-span-7 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            const subject = encodeURIComponent(`Trip enquiry — ${data.get("name") ?? ""}`);
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nDates: ${data.get("dates")}\nTravellers: ${data.get("people")}\n\n${data.get("message")}`,
            );
            window.location.href = `mailto:atobcabride@gmail.com?subject=${subject}&body=${body}`;
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Your name" name="name" required />
            <Field label="Phone / WhatsApp" name="phone" required />
            <Field label="Travel dates" name="dates" placeholder="e.g. 14 – 18 Feb" />
            <Field label="Travellers" name="people" placeholder="e.g. 2 adults, 1 child" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Where would you like to go?
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-border bg-background px-4 py-3 focus:outline-none focus:border-foreground transition"
              placeholder="Mysore → Coorg → Wayanad, three nights, first week of March…"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm transition hover:opacity-90"
          >
            Send enquiry →
          </button>
          <p className="text-xs text-muted-foreground">
            This opens your email app with the details pre-filled. Prefer to
            call? Dial +91-96867 67106 — we answer 24 × 7.
          </p>
        </form>

        <aside className="lg:col-span-4 lg:col-start-9 space-y-8">
          <ContactBlock label="Call" value="+91-96867 67106" href="tel:+919686767106" />
          <ContactBlock label="WhatsApp" value="+91-96867 67106" href="https://wa.me/919686767106" />
          <ContactBlock label="Email" value="atobcabride@gmail.com" href="mailto:atobcabride@gmail.com" />
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Office</div>
            <div className="mt-2 font-serif text-2xl leading-snug">
              No 140, Sumukha, 7th Cross<br />Siddivinayaka block, Teachers layout<br />Mysore-570011
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
            <div className="mt-2 font-serif text-2xl">Open 24 × 7</div>
          </div>
        </aside>
      </section>
    </SitePage>
  );
}

function Field({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border border-border bg-background px-4 py-3 focus:outline-none focus:border-foreground transition"
      />
    </div>
  );
}

function ContactBlock({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <a href={href} className="mt-2 block font-serif text-2xl hover:underline underline-offset-4">
        {value}
      </a>
    </div>
  );
}
