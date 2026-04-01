
type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({ eyebrow, title, description, imageSrc, imageAlt }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-soft backdrop-blur md:p-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-plum md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-plum/75 md:text-lg">{description}</p>
        </div>
        {imageSrc ? (
          <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] bg-sand">
            <img src={imageSrc} alt={imageAlt ?? title} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
