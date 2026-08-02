import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { differentiators, partnerLogos } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="MotoGuru is a digital platform that connects car owners with verified local garages for servicing and repairs, built on transparency and choice."
      />

      <section className="section-pad">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm leading-relaxed text-muted md:text-base">
              Users can browse trusted workshops, compare pricing, ratings, distance, and service
              inclusions, then select the garage that best fits their needs. Clear, itemized estimates
              are shared upfront, with updates provided throughout the job. If additional work is
              identified, revised costs are approved by the user before proceeding.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              MotoGuru does not force assignments — customers stay in control, from selection to
              completion, while garages benefit from qualified leads, visibility, and a structured
              service workflow.
            </p>
          </div>
          <Image
            src="/images/abt-car-service-img.png"
            alt="Car service"
            width={1200}
            height={700}
            className="rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="border-y border-line bg-surface/70 py-10 overflow-hidden">
        <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-muted">
          Trusted by India&apos;s top garages
        </p>
        <div className="marquee-track px-8">
          {[...partnerLogos, ...partnerLogos].map((logo, i) => (
            <Image
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={70}
              className="h-12 w-auto object-contain opacity-80"
            />
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-ink">
            What Sets Us Apart
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <article key={item.number} className="rounded-3xl border border-line bg-surface p-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="mb-5 aspect-square rounded-2xl object-cover"
                />
                <p className="text-sm font-semibold text-accent-dark">{item.number}</p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold">Our Vision</h2>
            <p className="mt-4 text-white/70">
              To create India&apos;s most trusted and connected car service platform for car owners and
              garages.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-white/75">
              <li>
                <strong className="text-accent">Reaching Car Owners Nationwide</strong> — serve over 10
                lakh car owners while capturing 4–5% of India&apos;s unorganized car servicing market.
              </li>
              <li>
                <strong className="text-accent">Expanding a Trusted Garage Network</strong> — onboard
                500+ partner garages across 10–12 major cities by 2028.
              </li>
              <li>
                <strong className="text-accent">Building Intelligence for Better Car Care</strong> —
                vehicle-health data, predictive maintenance, and 70+ NPS through Motoguru Rewards.
              </li>
            </ul>
          </div>
          <Image
            src="/images/vision-v2.png"
            alt="Our vision"
            width={800}
            height={800}
            className="rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <Image
            src="/images/mission-mockup-v2.png"
            alt="Our mission"
            width={800}
            height={800}
            className="rounded-3xl object-cover"
          />
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-ink">
              Our Mission
            </h2>
            <p className="mt-4 text-muted">
              To simplify car care by empowering customers with choice, transparency, and trusted
              access to reliable local garages.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li>
                <strong className="text-ink">End-to-End Convenience</strong> — seamless booking,
                pickup, and live tracking.
              </li>
              <li>
                <strong className="text-ink">Rewards That Matter</strong> — loyalty that builds long-term
                trust.
              </li>
              <li>
                <strong className="text-ink">Trust You Can See</strong> — verified garages with clear
                pricing and digital service logs.
              </li>
            </ul>
            <div className="mt-8">
              <ButtonLink href="/contact-us/">Contact Us</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
