import type { ComponentEntry } from "@/data/types";

const component: ComponentEntry = {
  id: "cards-gradient-border",
  slug: "gradient-border",
  category: "cards",
  title: { ko: "그라데이션 보더", en: "Gradient Border" },
  description: {
    ko: "그라데이션 테두리가 천천히 회전하며 빛나는 강조용 카드입니다.",
    en: "A highlight card with a slowly rotating, glowing gradient border.",
  },
  tags: ["card", "gradient", "border", "animation"],
  previewBackground: "#0f172a",
  html: `<article class="card-gradient-border">
  <div class="card-gradient-border__inner">
    <h3>프리미엄</h3>
    <p>그라데이션 테두리로 시선을 끄는 카드입니다.</p>
  </div>
</article>`,
  css: `.card-gradient-border {
  width: 260px;
  padding: 2px;
  border-radius: 18px;
  background: conic-gradient(from 0deg, #7c3aed, #ec4899, #22d3ee, #7c3aed);
  animation: card-gradient-spin 4s linear infinite;
}
.card-gradient-border__inner {
  border-radius: 16px;
  padding: 24px;
  background: #0f172a;
  color: #e2e8f0;
}
.card-gradient-border__inner h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.card-gradient-border__inner p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #94a3b8;
}
@keyframes card-gradient-spin {
  to {
    transform: rotate(360deg);
  }
}`,
};

export default component;
