import type { ComponentEntry } from "@/data/types";

const cards: ComponentEntry[] = [
  {
    id: "cards-hover-lift",
    slug: "hover-lift",
    category: "cards",
    style: "minimal",
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
.card-hover-lift__title { margin: 0 0 8px; font-size: 18px; font-weight: 700; color: #0f172a; }
.card-hover-lift__body { margin: 0; font-size: 14px; line-height: 1.6; color: #64748b; }`,
  },
  {
    id: "cards-gradient-border",
    slug: "gradient-border",
    category: "cards",
    style: "gradient",
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
.card-gradient-border__inner h3 { margin: 0 0 8px; font-size: 18px; font-weight: 700; }
.card-gradient-border__inner p { margin: 0; font-size: 14px; line-height: 1.6; color: #94a3b8; }
@keyframes card-gradient-spin { to { transform: rotate(360deg); } }`,
  },
  {
    id: "cards-glass-profile",
    slug: "glass-profile",
    category: "cards",
    style: "glassmorphism",
    title: { ko: "글래스 프로필", en: "Glass Profile" },
    description: {
      ko: "배경이 비치는 반투명 유리 질감의 프로필 카드입니다.",
      en: "A translucent frosted-glass profile card that lets the background show through.",
    },
    tags: ["card", "glass", "blur", "profile"],
    featured: true,
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<article class="card-glass-profile">
  <div class="card-glass-profile__avatar">A</div>
  <h3>아리아</h3>
  <p>프로덕트 디자이너</p>
</article>`,
    css: `.card-glass-profile {
  width: 220px;
  padding: 24px;
  text-align: center;
  border-radius: 18px;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.35);
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
}
.card-glass-profile__avatar {
  width: 56px; height: 56px; margin: 0 auto 12px;
  display: grid; place-items: center;
  border-radius: 50%; font-weight: 700; font-size: 20px;
  background: rgba(255,255,255,0.3);
}
.card-glass-profile h3 { margin: 0 0 4px; font-size: 18px; }
.card-glass-profile p { margin: 0; font-size: 13px; opacity: 0.85; }`,
  },
  {
    id: "cards-clay-stat",
    slug: "clay-stat",
    category: "cards",
    style: "claymorphism",
    title: { ko: "클레이 스탯", en: "Clay Stat" },
    description: {
      ko: "말랑한 점토 질감의 파스텔 통계 카드입니다.",
      en: "A puffy clay-textured pastel statistic card.",
    },
    tags: ["card", "clay", "pastel", "stat"],
    featured: true,
    previewBackground: "#fce7f3",
    html: `<article class="card-clay-stat">
  <span class="card-clay-stat__num">1,280</span>
  <span class="card-clay-stat__label">신규 사용자</span>
</article>`,
    css: `.card-clay-stat {
  width: 200px;
  padding: 24px;
  display: flex; flex-direction: column; gap: 6px;
  border-radius: 26px;
  background: #f9a8d4;
  color: #831843;
  box-shadow: inset 6px 6px 12px rgba(255,255,255,0.55),
    inset -6px -6px 12px rgba(190,24,93,0.25), 10px 10px 24px rgba(190,24,93,0.2);
}
.card-clay-stat__num { font-size: 28px; font-weight: 800; }
.card-clay-stat__label { font-size: 13px; font-weight: 600; opacity: 0.8; }`,
  },
  {
    id: "cards-neon-product",
    slug: "neon-product",
    category: "cards",
    style: "neon",
    title: { ko: "네온 프로덕트", en: "Neon Product" },
    description: {
      ko: "어두운 배경에서 네온 테두리가 빛나는 제품 카드입니다.",
      en: "A product card with a glowing neon border on a dark background.",
    },
    tags: ["card", "neon", "glow", "product"],
    featured: true,
    previewBackground: "#0a0a14",
    html: `<article class="card-neon-product">
  <h3>사이버 키보드</h3>
  <p class="card-neon-product__price">₩129,000</p>
</article>`,
    css: `.card-neon-product {
  width: 230px;
  padding: 24px;
  border-radius: 14px;
  background: #11111f;
  border: 1px solid #f0f;
  color: #fff;
  box-shadow: 0 0 18px rgba(255,0,255,0.5), inset 0 0 18px rgba(255,0,255,0.15);
}
.card-neon-product h3 { margin: 0 0 10px; font-size: 18px; color: #22d3ee; text-shadow: 0 0 8px rgba(34,211,238,0.8); }
.card-neon-product__price { margin: 0; font-size: 22px; font-weight: 700; color: #f0f; text-shadow: 0 0 8px rgba(255,0,255,0.8); }`,
  },
  {
    id: "cards-brutalist-note",
    slug: "brutalist-note",
    category: "cards",
    style: "neobrutalism",
    title: { ko: "브루탈 노트", en: "Brutalist Note" },
    description: {
      ko: "두꺼운 테두리와 하드 섀도의 네오브루탈리즘 노트 카드입니다.",
      en: "A neo-brutalist note card with thick borders and a hard shadow.",
    },
    tags: ["card", "brutalism", "note", "border"],
    previewBackground: "#fde68a",
    html: `<article class="card-brutalist-note">
  <h3>공지!</h3>
  <p>이번 주 금요일에 업데이트가 진행됩니다.</p>
</article>`,
    css: `.card-brutalist-note {
  width: 240px;
  padding: 20px;
  border: 3px solid #111;
  border-radius: 6px;
  background: #fff;
  box-shadow: 7px 7px 0 #111;
}
.card-brutalist-note h3 { margin: 0 0 8px; font-size: 18px; font-weight: 900; color: #111; }
.card-brutalist-note p { margin: 0; font-size: 14px; line-height: 1.5; color: #333; }`,
  },
  {
    id: "cards-neumorph-panel",
    slug: "neumorph-panel",
    category: "cards",
    style: "neumorphism",
    title: { ko: "뉴모프 패널", en: "Neumorph Panel" },
    description: {
      ko: "배경과 같은 색으로 눌리고 솟은 뉴모피즘 패널 카드입니다.",
      en: "A neumorphic panel card that appears pressed into the same-colored surface.",
    },
    tags: ["card", "neumorphism", "soft", "panel"],
    previewBackground: "#e0e5ec",
    html: `<article class="card-neumorph-panel">
  <h3>오늘의 요약</h3>
  <p>모든 작업이 정상적으로 완료되었습니다.</p>
</article>`,
    css: `.card-neumorph-panel {
  width: 240px;
  padding: 24px;
  border-radius: 20px;
  background: #e0e5ec;
  box-shadow: 8px 8px 16px #b8bcc4, -8px -8px 16px #ffffff;
}
.card-neumorph-panel h3 { margin: 0 0 8px; font-size: 17px; font-weight: 700; color: #4b5563; }
.card-neumorph-panel p { margin: 0; font-size: 14px; line-height: 1.6; color: #6b7280; }`,
  },
  {
    id: "cards-material-elevated",
    slug: "material-elevated",
    category: "cards",
    style: "material",
    title: { ko: "머티리얼 엘리베이션", en: "Material Elevated" },
    description: {
      ko: "호버 시 엘리베이션(그림자)이 올라가는 머티리얼 카드입니다.",
      en: "A material card whose elevation (shadow) rises on hover.",
    },
    tags: ["card", "material", "elevation", "shadow"],
    html: `<article class="card-material-elevated">
  <div class="card-material-elevated__bar"></div>
  <div class="card-material-elevated__body">
    <h3>머티리얼 카드</h3>
    <p>엘리베이션으로 위계를 표현합니다.</p>
  </div>
</article>`,
    css: `.card-material-elevated {
  width: 240px;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.18);
  transition: box-shadow 0.25s ease;
}
.card-material-elevated:hover { box-shadow: 0 12px 28px rgba(0,0,0,0.22); }
.card-material-elevated__bar { height: 6px; background: #2563eb; }
.card-material-elevated__body { padding: 20px; }
.card-material-elevated__body h3 { margin: 0 0 8px; font-size: 17px; font-weight: 700; color: #1f2937; }
.card-material-elevated__body p { margin: 0; font-size: 14px; line-height: 1.6; color: #6b7280; }`,
  },
  {
    id: "cards-retro-poster",
    slug: "retro-poster",
    category: "cards",
    style: "retro",
    title: { ko: "레트로 포스터", en: "Retro Poster" },
    description: {
      ko: "바이퍼웨이브 그라데이션과 그리드가 들어간 복고풍 카드입니다.",
      en: "A retro card with a vaporwave gradient and grid lines.",
    },
    tags: ["card", "retro", "vaporwave", "복고"],
    previewBackground: "#2d1b4e",
    html: `<article class="card-retro-poster">
  <h3>SUNSET</h3>
  <p>1989</p>
</article>`,
    css: `.card-retro-poster {
  width: 230px;
  padding: 28px 20px;
  text-align: center;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(180deg, #ff6ec7 0%, #845ec2 60%, #2d1b4e 100%);
  box-shadow: 0 0 0 2px rgba(255,255,255,0.2), 0 10px 30px rgba(132,94,194,0.5);
}
.card-retro-poster h3 {
  margin: 0; font-size: 30px; font-weight: 900; letter-spacing: 0.12em;
  background: linear-gradient(180deg, #fff, #ffd6f5);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 12px rgba(255,110,199,0.6);
}
.card-retro-poster p { margin: 6px 0 0; font-size: 14px; letter-spacing: 0.4em; opacity: 0.85; }`,
  },
  {
    id: "cards-threed-flip",
    slug: "threed-flip",
    category: "cards",
    style: "threed",
    title: { ko: "3D 플립", en: "3D Flip" },
    description: {
      ko: "호버하면 입체적으로 뒤집히며 뒷면이 보이는 3D 카드입니다.",
      en: "A 3D card that flips on hover to reveal its back face.",
    },
    tags: ["card", "3d", "flip", "transform"],
    html: `<div class="card-threed-flip">
  <div class="card-threed-flip__inner">
    <div class="card-threed-flip__face card-threed-flip__front">앞면</div>
    <div class="card-threed-flip__face card-threed-flip__back">뒷면</div>
  </div>
</div>`,
    css: `.card-threed-flip { width: 200px; height: 130px; perspective: 800px; }
.card-threed-flip__inner {
  position: relative; width: 100%; height: 100%;
  transition: transform 0.6s; transform-style: preserve-3d;
}
.card-threed-flip:hover .card-threed-flip__inner { transform: rotateY(180deg); }
.card-threed-flip__face {
  position: absolute; inset: 0; display: grid; place-items: center;
  border-radius: 14px; font-size: 18px; font-weight: 700; color: #fff;
  backface-visibility: hidden;
}
.card-threed-flip__front { background: #6366f1; }
.card-threed-flip__back { background: #ec4899; transform: rotateY(180deg); }`,
  },
  {
    id: "cards-pixel-quest",
    slug: "pixel-quest",
    category: "cards",
    style: "pixel",
    title: { ko: "픽셀 퀘스트", en: "Pixel Quest" },
    description: {
      ko: "각진 픽셀 테두리와 체력 바가 있는 레트로 게임 카드입니다.",
      en: "A retro 8-bit game card with a blocky pixel border and an HP bar.",
    },
    tags: ["card", "pixel", "8bit", "game"],
    previewBackground: "#0d0d18",
    html: `<article class="card-pixel">
  <h3>SLIME</h3>
  <div class="card-pixel__hp"><span></span></div>
  <p>HP 70 / 100</p>
</article>`,
    css: `.card-pixel {
  width: 220px; padding: 18px; font-family: ui-monospace, "Courier New", monospace;
  color: #e2e8f0; background: #1b1b2f; border: 4px solid #e2e8f0;
  box-shadow: 0 0 0 4px #0d0d18, 6px 6px 0 4px rgba(34,197,94,0.5);
}
.card-pixel h3 { margin: 0 0 12px; font-size: 16px; color: #fde047; letter-spacing: 0.08em; }
.card-pixel__hp { height: 14px; background: #0d0d18; border: 2px solid #e2e8f0; padding: 2px; }
.card-pixel__hp span { display: block; width: 70%; height: 100%; background: #22c55e; }
.card-pixel p { margin: 10px 0 0; font-size: 12px; color: #94a3b8; }`,
  },
];

export default cards;
