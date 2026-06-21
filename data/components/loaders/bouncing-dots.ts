import type { ComponentEntry } from "@/data/types";

const component: ComponentEntry = {
  id: "loaders-bouncing-dots",
  slug: "bouncing-dots",
  category: "loaders",
  title: { ko: "바운싱 도트", en: "Bouncing Dots" },
  description: {
    ko: "세 개의 점이 차례로 튀어오르는 가벼운 로딩 인디케이터입니다.",
    en: "A lightweight loading indicator with three dots bouncing in sequence.",
  },
  tags: ["loader", "dots", "bounce", "loading"],
  html: `<span class="loader-dots" role="status" aria-label="로딩 중">
  <span></span><span></span><span></span>
</span>`,
  css: `.loader-dots {
  display: inline-flex;
  gap: 8px;
}
.loader-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #7c3aed;
  animation: loader-dots-bounce 0.6s ease-in-out infinite;
}
.loader-dots span:nth-child(2) {
  animation-delay: 0.15s;
}
.loader-dots span:nth-child(3) {
  animation-delay: 0.3s;
}
@keyframes loader-dots-bounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-12px);
    opacity: 1;
  }
}`,
};

export default component;
