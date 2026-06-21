import type { ComponentEntry } from "@/data/types";

const component: ComponentEntry = {
  id: "buttons-shine-sweep",
  slug: "shine-sweep",
  category: "buttons",
  title: { ko: "샤인 스윕", en: "Shine Sweep" },
  description: {
    ko: "호버하면 빛줄기가 버튼 위를 가로질러 지나가는 광택 애니메이션 버튼입니다.",
    en: "A glossy button where a light streak sweeps across the surface on hover.",
  },
  tags: ["shine", "animation", "hover", "광택"],
  featured: true,
  html: `<button class="btn-shine-sweep">다운로드</button>`,
  css: `.btn-shine-sweep {
  position: relative;
  overflow: hidden;
  padding: 13px 30px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background: #0f172a;
  transition: background 0.2s ease;
}
.btn-shine-sweep::after {
  content: "";
  position: absolute;
  top: 0;
  left: -120%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.45),
    transparent
  );
  transform: skewX(-20deg);
  transition: left 0.6s ease;
}
.btn-shine-sweep:hover {
  background: #1e293b;
}
.btn-shine-sweep:hover::after {
  left: 130%;
}`,
};

export default component;
