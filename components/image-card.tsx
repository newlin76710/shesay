
type ImageCardProps = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

export function ImageCard({ src, alt, title, description }: ImageCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-soft">
      <div className="relative aspect-[4/3]">
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      </div>
      {(title || description) ? (
        <div className="p-6">
          {title ? <h3 className="text-lg font-semibold text-plum">{title}</h3> : null}
          {description ? <p className="mt-3 text-sm leading-7 text-plum/70">{description}</p> : null}
        </div>
      ) : null}
    </article>
  );
}
