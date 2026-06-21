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
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-fg">{content.title}</h1>
      {content.updated && (
        <p className="mt-2 text-sm text-muted">{content.updated}</p>
      )}
      {content.intro?.map((p, i) => (
        <p key={i} className="mt-4 leading-relaxed text-muted">
          {p}
        </p>
      ))}
      {content.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="text-xl font-semibold text-fg">{section.heading}</h2>
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
