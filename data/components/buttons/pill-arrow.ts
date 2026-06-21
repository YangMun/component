import type { ComponentEntry } from "@/data/types";

const component: ComponentEntry = {
  id: "buttons-pill-arrow",
  slug: "pill-arrow",
  category: "buttons",
  title: { ko: "필 화살표", en: "Pill Arrow" },
  description: {
    ko: "알약 모양 버튼으로, 호버 시 화살표가 오른쪽으로 미끄러지듯 움직입니다.",
    en: "A pill-shaped button whose arrow slides to the right on hover.",
  },
  tags: ["pill", "arrow", "hover", "cta", "알약"],
  html: `<button class="btn-pill-arrow">
  <span>더 알아보기</span>
  <span class="btn-pill-arrow__icon" aria-hidden="true">→</span>
</button>`,
  css: `.btn-pill-arrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 9999px;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  background: #f1f5f9;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}
.btn-pill-arrow__icon {
  transition: transform 0.2s ease;
}
.btn-pill-arrow:hover {
  background: #111827;
  color: #fff;
}
.btn-pill-arrow:hover .btn-pill-arrow__icon {
  transform: translateX(5px);
}`,
};

export default component;
