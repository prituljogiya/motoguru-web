import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  faqs,
  partnerLogos,
  services,
  site,
  testimonials,
  whyChoose,
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(249,155,39,0.16),transparent_42%),linear-gradient(to_bottom,transparent,rgba(246,244,241,0.9))]" />
        <div className="container-page relative grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="reveal mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent-dark">
              {site.tagline}
            </p>
            <h1 className="reveal font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
              Transparent Car Care, Powered Digitally
            </h1>
            <p className="reveal-delay mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {site.description}
            </p>
            <div className="reveal-delay mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact-us/">Get Started</ButtonLink>
              <ButtonLink href="/about-us/" variant="ghost">
                About Motoguru
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm font-medium text-foreground/80">
              +8k Happy users · 4.9/5 from 2k+ reviews
            </p>
          </div>
          <div className="reveal relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2rem] bg-accent/20 blur-2xl" />
            <Image
              src="/images/mg-phone-graphic.png"
              alt="Motoguru app preview"
              width={800}
              height={840}
              className="relative mx-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/70 py-8 overflow-hidden">
        <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-muted">
          Trusted by India&apos;s top garages
        </p>
        <div className="relative">
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
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-ink md:text-4xl">
              Services built around clarity
            </h2>
            <p className="mt-3 text-muted">
              From periodic care to complex repairs, Motoguru helps you choose the right workshop with confidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(45,0,0,0.08)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={800}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-dark">
                    {service.subtitle}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 max-w-lg text-white/70">
              MotoGuru helps you make informed decisions with the right workshops, transparent pricing, and complete visibility every step of the way.
            </p>
            <div className="mt-8 space-y-5">
              {whyChoose.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/images/happy-user-technician-v2.png"
            alt="Happy Motoguru customer"
            width={800}
            height={1000}
            className="mx-auto max-w-md rounded-[2rem] object-cover"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <h2 className="mb-8 text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-ink md:text-4xl">
            Stories From Car Owners Who Chose Clarity
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.name + t.quote.slice(0, 20)}
                className="rounded-3xl border border-line bg-surface p-6"
              >
                <p className="text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-ink">
                  {t.name}
                  <span className="font-normal text-muted"> · {t.place}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line">
        <div className="container-page">
          <h2 className="mb-8 text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-ink">
            Everything you need to know
          </h2>
          <FaqAccordion items={faqs.slice(0, 5)} />
          <div className="mt-8 text-center">
            <ButtonLink href="/frequently-asked-questions/" variant="ghost">
              View all FAQs
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(135deg,#2d0000,#4a1a10)] px-6 py-12 text-center text-white md:px-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
            Ready for transparent car care?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Compare verified garages, approve clear estimates, and track your service with Motoguru.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact-us/">Talk to us</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
