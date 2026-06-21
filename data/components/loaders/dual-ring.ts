import type { ComponentEntry } from "@/data/types";

const component: ComponentEntry = {
  id: "loaders-dual-ring",
  slug: "dual-ring",
  category: "loaders",
  title: { ko: "듀얼 링", en: "Dual Ring" },
  description: {
    ko: "두 개의 호가 회전하는 클래식한 원형 스피너입니다.",
    en: "A classic circular spinner made of two rotating arcs.",
  },
  tags: ["loader", "spinner", "ring", "loading"],
  featured: true,
  html: `<span class="loader-dual-ring" role="status" aria-label="로딩 중"></span>`,
  css: `.loader-dual-ring {
  display: inline-block;
  width: 44px;
  height: 44px;
  border: 4px solid rgba(37, 99, 235, 0.2);
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: loader-dual-ring-spin 0.9s linear infinite;
}
@keyframes loader-dual-ring-spin {
  to {
    transform: rotate(360deg);
  }
}`,
};

export default component;
