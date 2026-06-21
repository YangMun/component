// Renders a JSON-LD structured-data script. Server component — safe to inline
// since the data is our own, not user input.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
