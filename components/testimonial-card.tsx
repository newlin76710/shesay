type TestimonialCardProps = {
  quote: string;
  name: string;
  meta: string;
};

export function TestimonialCard({ quote, name, meta }: TestimonialCardProps) {
  return (
    <article className="rounded-3xl border border-white/70 bg-white p-7 shadow-soft">
      <p className="text-base leading-7 text-plum/80">“{quote}”</p>
      <div className="mt-6">
        <p className="font-semibold text-plum">{name}</p>
        <p className="mt-1 text-sm text-plum/60">{meta}</p>
      </div>
    </article>
  );
}
