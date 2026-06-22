import { cn } from "@/lib/utils";

// Monochrome gallery-frame monogram: an outlined plate with an offset filled
// square (a "component swatch in a frame"). Inherits currentColor (ink/paper).
export default function Logo({
  withWordmark = true,
  siteName,
  className,
}: {
  withWordmark?: boolean;
  siteName?: string;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="2.5"
          y="2.5"
          width="19"
          height="19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <rect x="9" y="9" width="9" height="9" fill="currentColor" />
      </svg>
      {withWordmark && siteName && (
        <span className="font-display text-[1.05rem] font-bold tracking-tight">
          {siteName}
        </span>
      )}
    </span>
  );
}
