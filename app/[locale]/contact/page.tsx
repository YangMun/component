import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/metadata";
import { contactEmail } from "@/lib/site";

const content: Record<
  Locale,
  { title: string; intro: string[]; emailLabel: string; responseNote: string }
> = {
  ko: {
    title: "문의",
    intro: [
      "컴포넌트 갤러리를 이용해 주셔서 감사합니다.",
      "서비스에 대한 제안, 오류 제보, 컴포넌트 요청, 또는 광고·제휴 문의가 있으시면 아래 이메일로 연락해 주세요.",
    ],
    emailLabel: "이메일",
    responseNote:
      "보내 주신 문의는 확인하는 대로 순차적으로 답변드리겠습니다.",
  },
  en: {
    title: "Contact",
    intro: [
      "Thank you for using Component Gallery.",
      "If you have suggestions, bug reports, component requests, or advertising and partnership inquiries, please reach out by email below.",
    ],
    emailLabel: "Email",
    responseNote: "We will respond to your message as soon as we can.",
  },
};

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const c = content[params.locale];
  return buildPageMetadata({
    locale: params.locale,
    path: "/contact",
    title: c.title,
    description: c.intro[0],
  });
}

export default function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const c = content[params.locale];

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-fg">{c.title}</h1>
      {c.intro.map((p, i) => (
        <p key={i} className="mt-4 leading-relaxed text-muted">
          {p}
        </p>
      ))}
      <div className="mt-8 rounded-xl border border-border bg-surface p-6">
        <p className="text-sm font-semibold text-muted">{c.emailLabel}</p>
        <a
          href={`mailto:${contactEmail}`}
          className="mt-1 inline-block text-lg font-medium text-brand hover:underline"
        >
          {contactEmail}
        </a>
      </div>
      <p className="mt-4 text-sm text-muted">{c.responseNote}</p>
    </article>
  );
}
