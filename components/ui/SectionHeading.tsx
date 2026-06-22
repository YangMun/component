import { cn } from "@/lib/utils";

// Editorial section header: a monospace eyebrow, a display-type title, and an
// optional action slot — reused across the home page and gallery pages.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5",
        className
      )}
    >
      <div>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-measure leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0 pb-1">{action}</div>}
    </div>
  );
}
