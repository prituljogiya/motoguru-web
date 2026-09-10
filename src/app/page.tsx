import Image from "next/image";
import { BackgroundDecor } from "@/components/BackgroundDecor";
import { ButtonLink } from "@/components/ButtonLink";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs, services, site, whyChoose } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <BackgroundDecor variant="hero" />
        <div className="container-page relative z-[1] grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
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
          </div>
          <div className="reveal relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-full bg-accent/15 blur-3xl" />
            <div className="decor-float absolute -left-4 top-10 hidden h-14 w-14 rounded-2xl border border-white/70 bg-white/55 shadow-[0_12px_30px_rgba(45,0,0,0.08)] md:block" />
            <div className="decor-float-slow absolute -right-2 bottom-16 hidden h-10 w-10 rounded-full border border-accent/40 bg-accent/20 md:block" />
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

      <section className="section-pad">
        <BackgroundDecor variant="section" />
        <div className="container-page relative z-[1]">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-ink md:text-4xl">
              Services built around clarity
            </h2>
            <p className="mt-3 text-muted">
              From periodic care to complex repairs, Motoguru helps you choose the right workshop with
              confidence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={800}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="pt-5">
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

      <section className="section-pad relative overflow-hidden bg-ink text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 85% 20%, rgba(249,155,39,0.28), transparent 40%), radial-gradient(circle at 10% 80%, rgba(249,155,39,0.12), transparent 35%)",
          }}
        />
        <div className="container-page relative z-[1] grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
              Professional car care with complete clarity
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Motoguru is built for car owners who want verified workshops, honest pricing, and full
              visibility — without pressure or surprises.
            </p>
            <ol className="mt-10 space-y-0 divide-y divide-white/10 border-y border-white/10">
              {whyChoose.map((item, index) => (
                <li key={item.title} className="grid grid-cols-[auto_1fr] gap-5 py-5">
                  <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <Image
            src="/images/happy-user-technician-v2.png"
            alt="Happy Motoguru customer"
            width={800}
            height={1000}
            className="mx-auto w-full max-w-md object-cover"
          />
        </div>
      </section>

      <section className="section-pad overflow-hidden">
        <BackgroundDecor variant="section" />
        <div className="container-page relative z-[1] grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-dark">
              Get the app
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-ink md:text-4xl">
              Download Motoguru
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Book verified workshops, compare estimates, and track your service — all from your phone.
            </p>
            <div className="mt-8 inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-6 py-3">
              <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-wide text-accent-dark">
                Coming Soon
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/15 blur-2xl" />
            <video
              className="relative w-full"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/mg-phone-graphic.png"
            >
              <source src="/images/motoguru-download-app-website-graphic.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line">
        <BackgroundDecor variant="section" />
        <div className="container-page relative z-[1]">
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
        <div className="container-page relative overflow-hidden bg-[linear-gradient(135deg,#2d0000,#4a1a10)] px-6 py-12 text-center text-white md:px-12">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-accent/15 blur-2xl"
            aria-hidden
          />
          <h2 className="relative font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
            Ready for transparent car care?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-white/70">
            Compare verified garages, approve clear estimates, and track your service with Motoguru.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact-us/">Contact us</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
