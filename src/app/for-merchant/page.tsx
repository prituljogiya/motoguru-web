import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { merchantBenefits, merchantStats } from "@/content/site";

export const metadata: Metadata = {
  title: "For Merchant",
};

export default function ForMerchantPage() {
  return (
    <>
      <PageHero
        title="Powering the Next Generation of Garages"
        subtitle="From lead management to service visibility, MotoGuru enables garages to streamline operations and increase repeat business."
      />

      <section className="section-pad">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-muted">
              Success on MotoGuru is built on quality service and customer satisfaction — we enable
              the reach, you deliver the experience.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {merchantStats.map((stat) => (
                <div key={stat.value} className="rounded-2xl border border-line bg-surface p-4">
                  <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-accent-dark">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/images/merchant-car-service-v2.png"
            alt="Garage partner"
            width={1200}
            height={700}
            className="rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="section-pad border-t border-line bg-surface/60">
        <div className="container-page">
          <h2 className="mb-8 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold text-ink">
            Increase walk-ins and revenue with nearby, high-intent customers
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {merchantBenefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-line bg-background px-5 py-6 text-sm font-semibold text-ink"
              >
                {benefit}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Build repeat business through transparency and consistent service quality.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact-us/">Ready To Grow?</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
