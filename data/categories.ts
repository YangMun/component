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
];

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
