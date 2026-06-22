// Reusable long-form article renderer for About / Privacy / Terms / Contact.
export type ArticleContent = {
  title: string;
  updated?: string;
  intro?: string[];
  sections: { heading: string; body: string[] }[];
};

export default function ContentArticle({
  content,
}: {
  content: ArticleContent;
}) {
  return (
    <article className="mx-auto max-w-measure px-5 py-14 md:px-8">
      <header className="border-b border-border pb-7">
        {content.updated && <p className="eyebrow mb-4">{content.updated}</p>}
        <h1 className="font-display text-4xl font-bold tracking-tight text-fg">
          {content.title}
        </h1>
      </header>
      {content.intro?.map((p, i) => (
        <p key={i} className="mt-5 text-lg leading-relaxed text-muted">
          {p}
        </p>
      ))}
      {content.sections.map((section, si) => (
        <section key={section.heading} className="mt-12">
          <h2 className="flex items-baseline gap-3 font-display text-xl font-bold text-fg">
            <span className="mono text-sm text-muted">
              {String(si + 1).padStart(2, "0")}
            </span>
            {section.heading}
          </h2>
          {section.body.map((p, i) => (
            <p key={i} className="mt-3 leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}
