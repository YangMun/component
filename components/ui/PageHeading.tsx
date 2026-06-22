// Page-level editorial heading (h1): a monospace eyebrow over a display title.
export default function PageHeading({
  eyebrow,
  title,
  description,
  icon,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: string;
}) {
  return (
    <header className="border-b border-border pb-7">
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h1 className="flex items-center gap-3 font-display text-4xl font-bold tracking-tight text-fg sm:text-display-sm">
        {icon && (
          <span aria-hidden="true" className="text-3xl">
            {icon}
          </span>
        )}
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-measure leading-relaxed text-muted">
          {description}
        </p>
      )}
    </header>
  );
}
