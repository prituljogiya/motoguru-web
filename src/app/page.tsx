import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs, services, site, whyChoose } from "@/content/site";

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

      <section className="section-pad">
        <div className="container-page">
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

      <section className="section-pad bg-ink text-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
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
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-dark">
              Get the app
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-ink md:text-4xl">
              Download Motoguru
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Book verified workshops, compare estimates, and track your service — all from your phone.
              Available on Google Play and the App Store.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-ink px-5 py-3 text-white transition hover:bg-ink/90"
                aria-label="Get it on Google Play"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M3.61 1.81 13.79 12 3.61 22.19a1 1 0 0 1-.61-.92V2.73a1 1 0 0 1 .61-.92Zm10.89 10.9 2.3 2.3-10.94 6.33 8.64-8.63Zm3.2-3.2 2.81 1.63a1 1 0 0 1 0 1.73l-2.81 1.63L15.21 12l2.49-2.49ZM5.86 2.66 16.8 8.99l-2.3 2.3-8.64-8.63Z"
                  />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] uppercase tracking-wide text-white/70">
                    Get it on
                  </span>
                  <span className="block text-sm font-semibold">Google Play</span>
                </span>
              </a>
              <a
                href={site.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-ink px-5 py-3 text-white transition hover:bg-ink/90"
                aria-label="Download on the App Store"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M18.7 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9-.7 0-1.9-.8-3.1-.8-1.6 0-3.1 1-3.9 2.5-1.7 2.9-.4 7.2 1.2 9.6.8 1.1 1.7 2.4 3 2.3 1.2-.1 1.6-.7 3.1-.7s1.8.7 3.1.7c1.3 0 2.1-1.1 2.9-2.2.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.5-1-2.7-3.4zM15.5 5.3c.7-.8 1.1-1.9 1-3-.9.1-2 .7-2.7 1.5-.6.7-1.1 1.8-1 2.9 1 .1 2-.5 2.7-1.4z"
                  />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] uppercase tracking-wide text-white/70">
                    Download on the
                  </span>
                  <span className="block text-sm font-semibold">App Store</span>
                </span>
              </a>
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
        <div className="container-page overflow-hidden bg-[linear-gradient(135deg,#2d0000,#4a1a10)] px-6 py-12 text-center text-white md:px-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
            Ready for transparent car care?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Compare verified garages, approve clear estimates, and track your service with Motoguru.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact-us/">Contact us</ButtonLink>
            <a
              href={site.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
            >
              Download the app
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
