import type { ComponentEntry } from "@/data/types";

const component: ComponentEntry = {
  id: "buttons-neon-outline",
  slug: "neon-outline",
  category: "buttons",
  title: { ko: "네온 아웃라인", en: "Neon Outline" },
  description: {
    ko: "어두운 배경에서 빛나는 네온 테두리 버튼으로, 호버 시 내부가 채워집니다.",
    en: "A glowing neon outline button on a dark background that fills in on hover.",
  },
  tags: ["neon", "outline", "glow", "dark", "네온"],
  previewBackground: "#0f172a",
  html: `<button class="btn-neon-outline">자세히</button>`,
  css: `.btn-neon-outline {
  padding: 12px 28px;
  border: 2px solid #22d3ee;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #22d3ee;
  background: transparent;
  cursor: pointer;
  text-shadow: 0 0 8px rgba(34, 211, 238, 0.6);
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.35), inset 0 0 12px rgba(34, 211, 238, 0.15);
  transition: all 0.25s ease;
}
.btn-neon-outline:hover {
  color: #042f3a;
  background: #22d3ee;
  text-shadow: none;
  box-shadow: 0 0 22px rgba(34, 211, 238, 0.8);
}`,
};

export default component;
