import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Send a general enquiry or apply to join as a Motoguru workshop partner. We’ll respond as soon as we can."
      />
      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">
                Address
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{site.address}</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">
                Mobile No.
              </h2>
              <p className="mt-2 text-sm text-muted">{site.phone}</p>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">
                Email
              </h2>
              <a href={`mailto:${site.email}`} className="mt-2 block text-sm text-accent-dark">
                {site.email}
              </a>
            </div>
            <div className="border-t border-line pt-6">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">
                Two ways to reach us
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>
                  <strong className="text-ink">General Enquiry</strong> — questions about Motoguru,
                  bookings, or support.
                </li>
                <li>
                  <strong className="text-ink">Join as Partner</strong> — workshops and garages ready
                  to grow with Motoguru.
                </li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
