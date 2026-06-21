import type { ComponentEntry } from "@/data/types";

const component: ComponentEntry = {
  id: "cards-hover-lift",
  slug: "hover-lift",
  category: "cards",
  title: { ko: "호버 리프트", en: "Hover Lift" },
  description: {
    ko: "호버하면 카드가 살짝 떠오르며 그림자가 깊어지는 기본 콘텐츠 카드입니다.",
    en: "A content card that lifts slightly with a deeper shadow on hover.",
  },
  tags: ["card", "hover", "shadow", "lift"],
  featured: true,
  html: `<article class="card-hover-lift">
  <h3 class="card-hover-lift__title">카드 제목</h3>
  <p class="card-hover-lift__body">간단한 설명 텍스트가 들어가는 영역입니다.</p>
</article>`,
  css: `.card-hover-lift {
  width: 260px;
  padding: 24px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid #eef2f7;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card-hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.14);
}
.card-hover-lift__title {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
}
.card-hover-lift__body {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #64748b;
}`,
};

export default component;
