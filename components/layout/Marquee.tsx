"use client";

// A continuously scrolling ticker of labels — a gallery/editorial touch.
// The track is duplicated so the loop is seamless; motion stops for users
// who prefer reduced motion (see .marquee-track in globals.css).
export default function Marquee({ items }: { items: string[] }) {
  const sequence = [...items, ...items];
  return (
    <div
      className="flex overflow-hidden border-y border-border py-3"
      aria-hidden="true"
    >
      <div className="marquee-track flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
        {sequence.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="eyebrow">{item}</span>
            <span className="text-muted">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
