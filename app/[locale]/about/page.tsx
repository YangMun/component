import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata";
import ContentArticle, {
  type ArticleContent,
} from "@/components/content/ContentArticle";

const content: Record<Locale, ArticleContent> = {
  ko: {
    title: "사이트 소개",
    intro: [
      "컴포넌트 갤러리는 디자이너와 개발자가 UI를 만들 때 영감을 얻고, 바로 가져다 쓸 수 있는 컴포넌트를 모아 둔 무료 웹사이트입니다.",
      "버튼 하나를 만들더라도 생김새, 클릭했을 때의 모션, 색상(그라데이션·단색) 등 선택지는 무수히 많습니다. 매번 처음부터 고민하는 대신, 잘 정리된 예시를 보고 마음에 드는 것을 골라 코드를 복사해 사용할 수 있도록 돕는 것이 이 사이트의 목적입니다.",
    ],
    sections: [
      {
        heading: "누구를 위한 사이트인가요?",
        body: [
          "디자인 시안을 빠르게 잡아야 하는 디자이너, 퍼블리싱·프론트엔드 작업을 하는 개발자, 그리고 사이드 프로젝트나 학습용으로 깔끔한 UI 요소가 필요한 모든 분을 위한 사이트입니다.",
          "별도의 회원 가입이나 결제 없이 누구나 자유롭게 둘러보고 코드를 가져다 쓸 수 있습니다.",
        ],
      },
      {
        heading: "주요 기능",
        body: [
          "실시간 미리보기: 각 컴포넌트는 실제로 동작하는 미리보기로 제공되어, 호버·클릭 모션과 색상을 그대로 확인할 수 있습니다.",
          "원클릭 코드 복사: HTML과 CSS를 탭으로 나눠 보여 주고, 버튼 한 번으로 클립보드에 복사할 수 있습니다.",
          "카테고리별 정리: 버튼, 카드, 입력창, 로더 등 카테고리로 정리되어 필요한 컴포넌트를 빠르게 찾을 수 있습니다.",
          "프레임워크 독립: 순수 HTML·CSS로 제공되므로 React, Vue 같은 프레임워크는 물론 일반 웹페이지에도 그대로 붙여 넣을 수 있습니다.",
          "라이트·다크 테마와 한국어·영어를 지원하며, 모바일에서는 앱처럼 설치해 사용할 수 있는 웹앱(PWA) 형태로 제공됩니다.",
        ],
      },
      {
        heading: "어떻게 사용하나요?",
        body: [
          "1. 상단 메뉴의 ‘컴포넌트’에서 원하는 카테고리를 선택합니다.",
          "2. 마음에 드는 컴포넌트의 미리보기를 확인합니다.",
          "3. HTML 또는 CSS 탭에서 복사 버튼을 눌러 코드를 가져와 프로젝트에 붙여 넣습니다.",
        ],
      },
      {
        heading: "앞으로의 계획",
        body: [
          "컴포넌트의 종류와 카테고리를 꾸준히 늘려 갈 예정이며, 검색·즐겨찾기·다양한 코드 형식 지원 등 편의 기능도 단계적으로 추가할 계획입니다.",
          "사이트는 유지보수가 쉬운 구조로 설계되어 있어, 새로운 컴포넌트와 기능을 빠르게 반영할 수 있습니다.",
        ],
      },
    ],
  },
  en: {
    title: "About",
    intro: [
      "Component Gallery is a free website that collects UI components designers and developers can use for inspiration and copy straight into their projects.",
      "Even a single button has countless options: its shape, its click motion, its colors (gradients or solids). Instead of starting from scratch every time, this site lets you browse well-organized examples, pick the one you like, and copy its code.",
    ],
    sections: [
      {
        heading: "Who is it for?",
        body: [
          "It is for designers who need to mock up ideas quickly, front-end developers building interfaces, and anyone who wants clean UI elements for a side project or for learning.",
          "There is no sign-up and no payment — anyone can browse and reuse the code freely.",
        ],
      },
      {
        heading: "Key features",
        body: [
          "Live previews: every component ships as a working preview so you can see hover and click motion and colors exactly as they are.",
          "One-click copy: HTML and CSS are split into tabs and copied to your clipboard with a single button.",
          "Organized by category: components are grouped into categories such as buttons, cards, inputs and loaders so you find what you need fast.",
          "Framework agnostic: delivered as plain HTML and CSS, so you can paste it into React or Vue as well as any plain web page.",
          "Light and dark themes plus Korean and English are supported, and on mobile the site can be installed as an app (PWA).",
        ],
      },
      {
        heading: "How to use it",
        body: [
          "1. Open ‘Components’ in the top menu and pick a category.",
          "2. Check the live preview of the component you like.",
          "3. Press the copy button on the HTML or CSS tab and paste it into your project.",
        ],
      },
      {
        heading: "What's next",
        body: [
          "We plan to keep growing the number of components and categories, and to add conveniences such as search, favorites and additional code formats over time.",
          "The site is built with a maintainable structure so new components and features can be added quickly.",
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
    path: "/about",
    title: c.title,
    description: c.intro?.[0] ?? c.title,
  });
}

export default function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  return <ContentArticle content={content[params.locale]} />;
}
