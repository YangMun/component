import type { ComponentEntry } from "@/data/types";

const component: ComponentEntry = {
  id: "buttons-gradient-glow",
  slug: "gradient-glow",
  category: "buttons",
  title: { ko: "그라데이션 글로우", en: "Gradient Glow" },
  description: {
    ko: "보라-핑크 그라데이션 배경에 호버 시 부드러운 발광 효과가 더해지는 버튼입니다.",
    en: "A purple-to-pink gradient button with a soft glow that grows on hover.",
  },
  tags: ["gradient", "glow", "hover", "그라데이션"],
  featured: true,
  html: `<button class="btn-gradient-glow">시작하기</button>`,
  css: `.btn-gradient-glow {
  padding: 14px 28px;
  border: none;
  border-radius: 9999px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.45);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-gradient-glow:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(236, 72, 153, 0.6);
}
.btn-gradient-glow:active {
  transform: translateY(0);
}`,
};

export default component;
