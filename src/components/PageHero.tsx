type Props = {
  title: string;
  subtitle?: string;
};

export function PageHero({ title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,155,39,0.2),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(45,0,0,0.08),transparent_40%)]" />
      <div className="container-page relative py-16 text-center md:py-20">
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
