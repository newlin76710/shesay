type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
};

export function SectionTitle({ eyebrow, title, description, center = false }: SectionTitleProps) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-plum md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-plum/75 md:text-lg">{description}</p> : null}
    </div>
  );
}
