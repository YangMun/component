import type { ComponentEntry } from "@/data/types";

const component: ComponentEntry = {
  id: "buttons-soft-3d",
  slug: "soft-3d",
  category: "buttons",
  title: { ko: "소프트 3D", en: "Soft 3D" },
  description: {
    ko: "부드러운 그림자로 입체감을 준 뉴모피즘 스타일 버튼입니다.",
    en: "A neumorphic-style button with soft shadows for a gentle 3D feel.",
  },
  tags: ["neumorphism", "soft", "3d", "뉴모피즘"],
  previewBackground: "#e0e5ec",
  html: `<button class="btn-soft-3d">눌러보기</button>`,
  css: `.btn-soft-3d {
  padding: 14px 30px;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  background: #e0e5ec;
  box-shadow: 6px 6px 12px #b8bcc4, -6px -6px 12px #ffffff;
  transition: box-shadow 0.18s ease, color 0.18s ease;
}
.btn-soft-3d:hover {
  color: #2563eb;
}
.btn-soft-3d:active {
  box-shadow: inset 5px 5px 10px #b8bcc4, inset -5px -5px 10px #ffffff;
}`,
};

export default component;
