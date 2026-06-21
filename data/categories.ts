import type { Category } from "./types";

// Component categories. Add a new category here, then add components that
// reference its id. Pages and navigation pick these up automatically.
export const categories: Category[] = [
  {
    id: "buttons",
    icon: "🔘",
    title: { ko: "버튼", en: "Buttons" },
    description: {
      ko: "그라데이션, 단색, 호버·클릭 모션 등 다양한 스타일의 버튼 컴포넌트입니다.",
      en: "Button components in many styles: gradients, solids, hover and click motion.",
    },
  },
  {
    id: "cards",
    icon: "🪪",
    title: { ko: "카드", en: "Cards" },
    description: {
      ko: "콘텐츠를 담는 카드 레이아웃과 호버 효과 모음입니다.",
      en: "Card layouts and hover effects for presenting content.",
    },
  },
  {
    id: "inputs",
    icon: "⌨️",
    title: { ko: "입력창", en: "Inputs" },
    description: {
      ko: "폼 입력 필드, 포커스 애니메이션 등 입력 관련 컴포넌트입니다.",
      en: "Form fields, focus animations and other input components.",
    },
  },
  {
    id: "loaders",
    icon: "⏳",
    title: { ko: "로더", en: "Loaders" },
    description: {
      ko: "스피너, 진행 표시 등 로딩 상태를 보여주는 컴포넌트입니다.",
      en: "Spinners, progress indicators and other loading-state components.",
    },
  },
  {
    id: "toggles",
    icon: "🎚️",
    title: { ko: "토글", en: "Toggles" },
    description: {
      ko: "스위치·체크 등 켜고 끄는 상태를 표현하는 토글 컴포넌트입니다.",
      en: "Switches and checkable controls that express an on/off state.",
    },
  },
  {
    id: "badges",
    icon: "🏷️",
    title: { ko: "배지", en: "Badges" },
    description: {
      ko: "상태·카테고리·알림 수를 표시하는 배지와 태그 컴포넌트입니다.",
      en: "Badges and tags that show status, category or notification counts.",
    },
  },
  {
    id: "tooltips",
    icon: "💬",
    title: { ko: "툴팁", en: "Tooltips" },
    description: {
      ko: "호버 시 추가 설명을 보여 주는 툴팁 컴포넌트입니다.",
      en: "Tooltips that reveal extra information on hover.",
    },
  },
  {
    id: "avatars",
    icon: "👤",
    title: { ko: "아바타", en: "Avatars" },
    description: {
      ko: "사용자 프로필 이미지·이니셜·상태를 표현하는 아바타 컴포넌트입니다.",
      en: "Avatars representing a user's photo, initials or status.",
    },
  },
  {
    id: "alerts",
    icon: "📣",
    title: { ko: "알림", en: "Alerts" },
    description: {
      ko: "성공·경고·정보 등 메시지를 전달하는 알림과 배너 컴포넌트입니다.",
      en: "Alerts and banners that convey success, warning or info messages.",
    },
  },
  {
    id: "progress",
    icon: "📊",
    title: { ko: "진행 표시", en: "Progress" },
    description: {
      ko: "진행률·단계를 시각화하는 프로그레스 바 컴포넌트입니다.",
      en: "Progress bars that visualize completion or steps.",
    },
  },
  {
    id: "tabs",
    icon: "🗂️",
    title: { ko: "탭", en: "Tabs" },
    description: {
      ko: "콘텐츠를 전환하는 탭과 세그먼트 컨트롤 컴포넌트입니다.",
      en: "Tabs and segmented controls for switching between content.",
    },
  },
  {
    id: "navbars",
    icon: "🧭",
    title: { ko: "내비게이션", en: "Navbars" },
    description: {
      ko: "상단 바·하단 바 등 사이트 이동을 돕는 내비게이션 컴포넌트입니다.",
      en: "Top and bottom navigation bars that help users move around a site.",
    },
  },
  {
    id: "modals",
    icon: "🪟",
    title: { ko: "모달", en: "Modals" },
    description: {
      ko: "확인·안내 등 집중이 필요한 작업을 위한 모달과 다이얼로그입니다.",
      en: "Modals and dialogs for focused tasks like confirmation and prompts.",
    },
  },
  {
    id: "dropdowns",
    icon: "🔽",
    title: { ko: "드롭다운", en: "Dropdowns" },
    description: {
      ko: "메뉴·옵션을 펼쳐 보여 주는 드롭다운 컴포넌트입니다.",
      en: "Dropdown menus that reveal a list of actions or options.",
    },
  },
  {
    id: "accordions",
    icon: "📚",
    title: { ko: "아코디언", en: "Accordions" },
    description: {
      ko: "클릭하면 펼쳐지는 아코디언·FAQ 컴포넌트입니다(자바스크립트 불필요).",
      en: "Click-to-expand accordion and FAQ components (no JavaScript needed).",
    },
  },
  {
    id: "sliders",
    icon: "🎛️",
    title: { ko: "슬라이더", en: "Sliders" },
    description: {
      ko: "값을 조절하는 범위 입력 슬라이더 컴포넌트입니다.",
      en: "Range slider components for adjusting a value.",
    },
  },
  {
    id: "breadcrumbs",
    icon: "🧀",
    title: { ko: "브레드크럼", en: "Breadcrumbs" },
    description: {
      ko: "현재 위치와 경로를 보여 주는 브레드크럼 내비게이션입니다.",
      en: "Breadcrumb navigation that shows the current location and path.",
    },
  },
  {
    id: "steppers",
    icon: "🪜",
    title: { ko: "스텝", en: "Steppers" },
    description: {
      ko: "다단계 절차의 진행 단계를 보여 주는 스텝 컴포넌트입니다.",
      en: "Stepper components that show progress through a multi-step flow.",
    },
  },
];

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
