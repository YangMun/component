import type { ComponentEntry } from "@/data/types";

const component: ComponentEntry = {
  id: "buttons-solid-press",
  slug: "solid-press",
  category: "buttons",
  title: { ko: "솔리드 프레스", en: "Solid Press" },
  description: {
    ko: "단색 배경에 아래쪽 그림자가 있어 클릭하면 실제로 눌리는 느낌을 주는 버튼입니다.",
    en: "A solid button with a bottom shadow that physically presses down on click.",
  },
  tags: ["solid", "press", "click", "단색"],
  featured: true,
  html: `<button class="btn-solid-press">확인</button>`,
  css: `.btn-solid-press {
  padding: 12px 26px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background: #2563eb;
  box-shadow: 0 4px 0 #1e40af;
  transition: transform 0.08s ease, box-shadow 0.08s ease;
}
.btn-solid-press:active {
  transform: translateY(4px);
  box-shadow: 0 0 0 #1e40af;
}`,
};

export default component;
