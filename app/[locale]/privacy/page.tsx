import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/metadata";
import ContentArticle, {
  type ArticleContent,
} from "@/components/content/ContentArticle";

const content: Record<Locale, ArticleContent> = {
  ko: {
    title: "개인정보처리방침",
    updated: "최종 업데이트: 2026년 6월 21일",
    intro: [
      "컴포넌트 갤러리(이하 ‘본 사이트’)는 이용자의 개인정보를 중요하게 생각하며, 관련 법령을 준수합니다. 본 방침은 본 사이트가 어떤 정보를 수집하고 어떻게 이용하는지 설명합니다.",
    ],
    sections: [
      {
        heading: "1. 수집하는 정보",
        body: [
          "본 사이트는 회원 가입이나 로그인 기능을 제공하지 않으며, 이름·이메일 등 직접적인 개인 식별 정보를 별도로 수집하지 않습니다.",
          "다만 서비스 운영과 개선을 위해 방문 기록, 브라우저 종류, 기기 정보, 접속 국가 등 비식별 통계 정보가 자동으로 수집될 수 있습니다.",
        ],
      },
      {
        heading: "2. 쿠키(Cookie)의 사용",
        body: [
          "본 사이트는 이용자 경험 개선(예: 테마·언어 설정 저장)과 트래픽 분석을 위해 쿠키 및 로컬 스토리지를 사용할 수 있습니다.",
          "이용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있으며, 이 경우 일부 기능이 제한될 수 있습니다.",
        ],
      },
      {
        heading: "3. 광고 및 제3자 서비스 (Google AdSense)",
        body: [
          "본 사이트는 Google AdSense를 비롯한 제3자 광고 서비스를 게재할 수 있습니다. Google과 같은 제3자 광고 사업자는 쿠키(예: DoubleClick 쿠키)를 사용하여 이용자의 이전 방문 기록을 기반으로 맞춤형 광고를 제공할 수 있습니다.",
          "Google의 광고 쿠키 사용을 통해 Google과 광고 파트너는 본 사이트 및 다른 사이트 방문 정보를 바탕으로 광고를 게재합니다.",
          "이용자는 Google 광고 설정 페이지(https://adssettings.google.com)에서 맞춤형 광고를 비활성화할 수 있습니다. 또한 www.aboutads.info 에서 제3자 사업자의 맞춤형 광고 쿠키 사용을 거부할 수 있습니다.",
          "Google이 광고 목적으로 데이터를 사용하는 방식에 대한 자세한 내용은 Google의 개인정보처리방침(https://policies.google.com/technologies/partner-sites)을 참고하시기 바랍니다.",
        ],
      },
      {
        heading: "4. 분석 도구",
        body: [
          "본 사이트는 트래픽과 이용 패턴을 분석하기 위해 웹 분석 도구를 사용할 수 있습니다. 이러한 도구는 비식별 정보를 집계 형태로 수집하며, 서비스 개선 목적으로만 활용됩니다.",
        ],
      },
      {
        heading: "5. 개인정보의 보관 및 제3자 제공",
        body: [
          "본 사이트는 직접적인 개인 식별 정보를 수집하지 않으므로 이를 별도로 저장하거나 판매·제공하지 않습니다.",
          "법령에 따른 요청이 있는 경우를 제외하고는 이용자 정보를 제3자에게 제공하지 않습니다.",
        ],
      },
      {
        heading: "6. 이용자의 권리",
        body: [
          "이용자는 브라우저 및 광고 설정을 통해 쿠키와 맞춤형 광고에 대한 동의를 언제든지 철회할 수 있습니다.",
        ],
      },
      {
        heading: "7. 방침의 변경",
        body: [
          "본 방침은 법령 또는 서비스 변경에 따라 수정될 수 있으며, 변경 시 본 페이지를 통해 공지합니다.",
        ],
      },
      {
        heading: "8. 문의",
        body: [
          "개인정보 처리에 관한 문의 사항은 문의 페이지를 통해 연락해 주시기 바랍니다.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: June 21, 2026",
    intro: [
      "Component Gallery (the ‘Site’) values your privacy and complies with applicable laws. This policy explains what information the Site collects and how it is used.",
    ],
    sections: [
      {
        heading: "1. Information We Collect",
        body: [
          "The Site does not provide sign-up or login features and does not separately collect directly identifying personal information such as your name or email.",
          "However, to operate and improve the service, non-identifying statistical data such as visit logs, browser type, device information and country of access may be collected automatically.",
        ],
      },
      {
        heading: "2. Use of Cookies",
        body: [
          "The Site may use cookies and local storage to improve your experience (for example, saving your theme and language preferences) and to analyze traffic.",
          "You can refuse or delete cookies through your browser settings, although some features may then be limited.",
        ],
      },
      {
        heading: "3. Advertising and Third Parties (Google AdSense)",
        body: [
          "The Site may display third-party advertising, including Google AdSense. Third-party vendors such as Google may use cookies (for example, the DoubleClick cookie) to serve ads based on your prior visits to this and other websites.",
          "Google's use of advertising cookies enables Google and its partners to serve ads based on your visits to the Site and other sites on the Internet.",
          "You may opt out of personalized advertising by visiting Google Ads Settings (https://adssettings.google.com). You may also opt out of third-party vendors' use of cookies for personalized advertising at www.aboutads.info.",
          "For more information on how Google uses data, see Google's policy at https://policies.google.com/technologies/partner-sites.",
        ],
      },
      {
        heading: "4. Analytics",
        body: [
          "The Site may use web analytics tools to understand traffic and usage patterns. These tools collect non-identifying information in aggregate form and are used only to improve the service.",
        ],
      },
      {
        heading: "5. Data Retention and Sharing",
        body: [
          "Because the Site does not collect directly identifying personal information, it does not store, sell or share such data.",
          "We do not provide user information to third parties except where required by law.",
        ],
      },
      {
        heading: "6. Your Rights",
        body: [
          "You may withdraw consent to cookies and personalized advertising at any time through your browser and ad settings.",
        ],
      },
      {
        heading: "7. Changes to This Policy",
        body: [
          "This policy may be updated to reflect legal or service changes. Any changes will be posted on this page.",
        ],
      },
      {
        heading: "8. Contact",
        body: [
          "For questions about how your information is handled, please reach out through the Contact page.",
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
    path: "/privacy",
    title: c.title,
    description: c.intro?.[0] ?? c.title,
  });
}

export default function PrivacyPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  return <ContentArticle content={content[params.locale]} />;
}
