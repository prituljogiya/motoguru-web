import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Clear answers about booking, pricing, garages, and how Motoguru works."
      />
      <section className="section-pad">
        <div className="container-page">
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
