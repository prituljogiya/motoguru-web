import { BackgroundDecor } from "@/components/BackgroundDecor";

type Props = {
  title: string;
  subtitle?: string;
};

export function PageHero({ title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line/60">
      <BackgroundDecor variant="hero" />
      <div className="container-page relative z-[1] py-16 text-center md:py-20">
        <h1 className="reveal font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="reveal-delay mx-auto mt-4 max-w-2xl text-base text-muted md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
