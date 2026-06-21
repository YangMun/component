import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/metadata";
import ContentArticle, {
  type ArticleContent,
} from "@/components/content/ContentArticle";

const content: Record<Locale, ArticleContent> = {
  ko: {
    title: "이용약관",
    updated: "최종 업데이트: 2026년 6월 21일",
    intro: [
      "본 약관은 컴포넌트 갤러리(이하 ‘본 사이트’) 이용에 관한 조건을 규정합니다. 본 사이트를 이용함으로써 이용자는 본 약관에 동의한 것으로 간주됩니다.",
    ],
    sections: [
      {
        heading: "1. 서비스 내용",
        body: [
          "본 사이트는 UI 컴포넌트 예시와 해당 HTML·CSS 코드를 무료로 제공합니다. 서비스 내용은 사전 고지 없이 변경되거나 중단될 수 있습니다.",
        ],
      },
      {
        heading: "2. 코드 사용",
        body: [
          "본 사이트에서 제공하는 컴포넌트 코드는 개인 및 상업적 프로젝트에 자유롭게 사용할 수 있습니다. 다만 코드 모음 자체를 그대로 복제하여 유사한 서비스로 재배포하는 행위는 금지됩니다.",
          "제공되는 코드는 ‘있는 그대로(as-is)’ 제공되며, 특정 목적에의 적합성을 보장하지 않습니다.",
        ],
      },
      {
        heading: "3. 책임의 한계",
        body: [
          "본 사이트는 제공된 코드나 정보의 사용으로 발생하는 직간접적인 손해에 대해 책임지지 않습니다. 코드의 검증과 적용은 이용자의 책임입니다.",
        ],
      },
      {
        heading: "4. 제3자 링크 및 광고",
        body: [
          "본 사이트는 제3자 웹사이트로 연결되는 링크나 광고를 포함할 수 있습니다. 본 사이트는 제3자 사이트의 내용이나 정책에 대해 책임지지 않습니다.",
        ],
      },
      {
        heading: "5. 약관의 변경",
        body: [
          "본 약관은 필요에 따라 변경될 수 있으며, 변경된 약관은 본 페이지에 게시된 시점부터 효력이 발생합니다.",
        ],
      },
    ],
  },
  en: {
    title: "Terms of Service",
    updated: "Last updated: June 21, 2026",
    intro: [
      "These terms govern your use of Component Gallery (the ‘Site’). By using the Site you agree to these terms.",
    ],
    sections: [
      {
        heading: "1. The Service",
        body: [
          "The Site provides UI component examples and their HTML and CSS code for free. The service may change or be discontinued without prior notice.",
        ],
      },
      {
        heading: "2. Use of Code",
        body: [
          "Component code provided on the Site may be used freely in personal and commercial projects. However, copying the collection itself to redistribute as a similar service is not permitted.",
          "All code is provided ‘as-is’ without warranty of fitness for a particular purpose.",
        ],
      },
      {
        heading: "3. Limitation of Liability",
        body: [
          "The Site is not liable for any direct or indirect damages arising from use of the provided code or information. Verifying and applying the code is the user's responsibility.",
        ],
      },
      {
        heading: "4. Third-Party Links and Ads",
        body: [
          "The Site may contain links to third-party websites and advertisements. The Site is not responsible for the content or policies of third-party sites.",
        ],
      },
      {
        heading: "5. Changes to These Terms",
        body: [
          "These terms may be updated as needed, and changes take effect once posted on this page.",
        ],
      },
    ],
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
    path: "/terms",
    title: c.title,
    description: c.intro?.[0] ?? c.title,
  });
}

export default function TermsPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  return <ContentArticle content={content[params.locale]} />;
}
