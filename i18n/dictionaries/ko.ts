// All Korean UI strings and long-form page copy live here so translators and
// future edits never need to touch component or page logic.
const ko = {
  meta: {
    siteName: "컴포넌트 갤러리",
    tagline: "디자인 영감을 위한 UI 컴포넌트 모음",
    description:
      "버튼, 카드, 입력창 등 다양한 UI 컴포넌트의 디자인과 모션을 미리보고 HTML·CSS 코드를 복사해 바로 사용할 수 있는 무료 컴포넌트 갤러리입니다.",
  },
  nav: {
    home: "홈",
    components: "컴포넌트",
    styles: "스타일",
    about: "소개",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    contact: "문의",
    skipToContent: "본문으로 건너뛰기",
  },
  actions: {
    copy: "복사",
    copied: "복사됨!",
    copyHtml: "HTML 복사",
    copyCss: "CSS 복사",
    viewAll: "전체 보기",
    viewCategory: "카테고리 보기",
    toggleTheme: "테마 전환",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    installApp: "앱 설치",
  },
  home: {
    heroTitle: "디자인 영감을 코드로 바로",
    heroSubtitle:
      "버튼 하나도 생김새, 클릭 모션, 색상까지. 마음에 드는 컴포넌트를 골라 HTML·CSS를 복사해 바로 사용하세요.",
    heroCtaPrimary: "컴포넌트 둘러보기",
    heroCtaSecondary: "사이트 소개",
    featuresTitle: "이 사이트로 할 수 있는 것",
    features: [
      {
        title: "바로 쓰는 미리보기",
        body: "각 컴포넌트는 실제 동작하는 미리보기로 제공되어 모션과 색상을 그대로 확인할 수 있습니다.",
      },
      {
        title: "원클릭 코드 복사",
        body: "HTML과 CSS를 탭으로 나눠 제공하고, 버튼 한 번으로 클립보드에 복사합니다.",
      },
      {
        title: "카테고리별 탐색",
        body: "버튼, 카드, 입력창 등 카테고리로 정리되어 필요한 컴포넌트를 빠르게 찾습니다.",
      },
      {
        title: "프레임워크 독립",
        body: "순수 HTML·CSS이므로 React, Vue, 일반 웹페이지 어디에나 붙여 넣을 수 있습니다.",
      },
    ],
    featuredTitle: "추천 컴포넌트",
    browseByCategory: "카테고리별로 보기",
    browseByStyle: "디자인 스타일별로 보기",
    heroEyebrow: "디자인 컴포넌트 인덱스",
    stats: { components: "컴포넌트", categories: "카테고리", styles: "스타일" },
  },
  gallery: {
    title: "컴포넌트",
    subtitle: "카테고리를 선택하거나 아래에서 전체 컴포넌트를 둘러보세요.",
    allCategories: "전체 카테고리",
    allStyles: "전체 스타일",
    styleTitle: "디자인 스타일",
    styleSubtitle:
      "글래스모피즘, 뉴모피즘, 네온 등 최신 디자인 트렌드별로 컴포넌트를 둘러보세요.",
    // "{count}" is replaced at render time (see formatCount in lib/utils).
    itemsCount: "{count}개 컴포넌트",
    empty: "아직 등록된 컴포넌트가 없습니다.",
    preview: "미리보기",
    code: "코드",
  },
  footer: {
    rights: "모든 권리 보유.",
    description:
      "디자이너와 개발자를 위한 무료 UI 컴포넌트 영감 갤러리입니다.",
    sections: {
      explore: "둘러보기",
      legal: "정책",
    },
  },
  langSwitch: "언어",
};

// Korean is the source-of-truth shape; every other locale must satisfy this.
export type Dictionary = typeof ko;

export default ko;
