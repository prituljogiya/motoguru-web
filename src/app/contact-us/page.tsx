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
        subtitle="Questions about Motoguru for car owners or garage partners? Reach out — we’re here to help."
      />
      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-line bg-surface p-6">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">
                Address
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{site.address}</p>
            </div>
            <div className="rounded-3xl border border-line bg-surface p-6">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">
                Mobile No.
              </h2>
              <p className="mt-2 text-sm text-muted">{site.phone}</p>
            </div>
            <div className="rounded-3xl border border-line bg-surface p-6">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">
                Email
              </h2>
              <a href={`mailto:${site.email}`} className="mt-2 block text-sm text-accent-dark">
                {site.email}
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
