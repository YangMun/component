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
  {
    id: "cards-tilt-3d",
    slug: "tilt-3d",
    category: "cards",
    style: "glassmorphism",
    title: { ko: "3D 틸트 카드", en: "3D Tilt Card" },
    description: {
      ko: "마우스를 따라 입체적으로 기울어지는 글래스 틸트 카드입니다(JS).",
      en: "A glass card that tilts in 3D following the mouse (JS).",
    },
    tags: ["interactive", "tilt", "3d", "hover"],
    featured: true,
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<article class="card-tilt">
  <h3>3D TILT</h3>
  <p>마우스를 올려보세요</p>
</article>`,
    css: `.card-tilt {
  width: 200px; padding: 28px 22px; text-align: center; border-radius: 18px; color: #fff;
  border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.18);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.2); transition: transform 0.1s ease-out;
  transform-style: preserve-3d;
}
.card-tilt h3 { margin: 0 0 6px; font-size: 20px; letter-spacing: 0.08em; }
.card-tilt p { margin: 0; font-size: 13px; opacity: 0.9; }`,
    js: `const c = document.querySelector('.card-tilt');
c.addEventListener('mousemove', (e) => {
  const r = c.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  c.style.transform = 'perspective(600px) rotateY(' + px * 18 + 'deg) rotateX(' + (-py * 18) + 'deg)';
});
c.addEventListener('mouseleave', () => {
  c.style.transform = 'perspective(600px) rotateY(0) rotateX(0)';
});`,
  },
  {
    id: "cards-holographic-card",
    slug: "holographic-card",
    category: "cards",
    style: "holographic",
    title: { ko: "홀로그래픽 카드", en: "Holographic Card" },
    description: {
      ko: "무지갯빛이 흐르는 홀로그램 멤버십 카드입니다.",
      en: "A holographic membership card with a flowing rainbow sheen.",
    },
    tags: ["card", "holographic", "iridescent", "홀로그램"],
    featured: true,
    previewBackground: "#0b1020",
    html: `<article class="card-holo">
  <span class="card-holo__label">MEMBER</span>
  <span class="card-holo__no">**** 2049</span>
</article>`,
    css: `.card-holo {
  width: 250px; height: 150px; padding: 20px; display: flex; flex-direction: column;
  justify-content: space-between; border-radius: 16px; color: #1e1b4b; font-weight: 700;
  background: linear-gradient(115deg, #a78bfa, #f0abfc, #7dd3fc, #6ee7b7, #fda4af, #a78bfa);
  background-size: 300% 100%; animation: card-holo-shift 5s linear infinite;
  box-shadow: 0 12px 30px rgba(167,139,250,0.5);
}
.card-holo__label { font-size: 12px; letter-spacing: 0.2em; }
.card-holo__no { font-size: 20px; letter-spacing: 0.1em; }
@keyframes card-holo-shift { to { background-position: 300% 0; } }`,
  },
  {
    id: "cards-paper-note",
    slug: "paper-note",
    category: "cards",
    style: "paper",
    title: { ko: "페이퍼 노트", en: "Paper Note" },
    description: {
      ko: "테이프로 붙인 듯한 손그림 느낌의 종이 메모 카드입니다.",
      en: "A hand-drawn paper note card that looks taped to the wall.",
    },
    tags: ["card", "paper", "note", "sketch"],
    previewBackground: "#e7e5e4",
    html: `<article class="card-paper">
  <span class="card-paper__tape"></span>
  <h3>To-do</h3>
  <p>아이디어 스케치하기 ✏️</p>
</article>`,
    css: `.card-paper {
  position: relative; width: 220px; padding: 22px; background: #fffdf7; color: #44403c;
  border: 2px solid #44403c; border-radius: 255px 14px 225px 14px / 14px 225px 14px 255px;
  box-shadow: 3px 4px 0 rgba(68,64,60,0.5); transform: rotate(-2deg);
}
.card-paper__tape { position: absolute; top: -10px; left: 50%; transform: translateX(-50%) rotate(3deg); width: 60px; height: 18px; background: rgba(250,204,21,0.6); }
.card-paper h3 { margin: 0 0 8px; font-size: 18px; }
.card-paper p { margin: 0; font-size: 14px; line-height: 1.5; }`,
  },
  {
    id: "cards-outline-card",
    slug: "outline-card",
    category: "cards",
    style: "outline",
    title: { ko: "아웃라인 카드", en: "Outline Card" },
    description: {
      ko: "얇은 단색 선으로만 구성한 미니멀 라인아트 카드입니다.",
      en: "A minimal line-art card built purely from thin strokes.",
    },
    tags: ["card", "outline", "line", "minimal"],
    html: `<article class="card-outline">
  <span class="card-outline__icon">◎</span>
  <h3>라인아트</h3>
  <p>선만으로 표현한 깔끔한 카드입니다.</p>
</article>`,
    css: `.card-outline {
  width: 240px; padding: 22px; border: 1.5px solid #0f172a; border-radius: 14px; background: transparent;
  transition: box-shadow 0.2s ease;
}
.card-outline:hover { box-shadow: 5px 5px 0 #0f172a; }
.card-outline__icon { font-size: 26px; color: #0f172a; }
.card-outline h3 { margin: 10px 0 6px; font-size: 17px; font-weight: 700; color: #0f172a; }
.card-outline p { margin: 0; font-size: 13px; line-height: 1.6; color: #475569; }`,
  },
  {
    id: "cards-memphis-card",
    slug: "memphis-card",
    category: "cards",
    style: "memphis",
    title: { ko: "멤피스 카드", en: "Memphis Card" },
    description: {
      ko: "기하학 도형과 발랄한 색이 가득한 80년대 멤피스 카드입니다.",
      en: "An 80s Memphis card full of geometric shapes and playful colors.",
    },
    tags: ["card", "memphis", "geometric", "멤피스"],
    previewBackground: "#fef9c3",
    html: `<article class="card-memphis">
  <h3>MEMPHIS</h3>
  <p>80년대 감성의 도형 카드</p>
</article>`,
    css: `.card-memphis {
  position: relative; width: 240px; padding: 24px; overflow: hidden;
  background: #fff7ed; border: 3px solid #111; border-radius: 10px; box-shadow: 6px 6px 0 #111;
  background-image: radial-gradient(#f43f5e 3px, transparent 3px), radial-gradient(#22d3ee 3px, transparent 3px);
  background-size: 26px 26px; background-position: 0 0, 13px 13px;
}
.card-memphis h3 { margin: 0 0 8px; font-size: 20px; font-weight: 900; color: #111; }
.card-memphis p { margin: 0; font-size: 13px; font-weight: 600; color: #333; background: #fff7ed; display: inline; }`,
  },
  {
    id: "cards-duotone-card",
    slug: "duotone-card",
    category: "cards",
    style: "duotone",
    title: { ko: "듀오톤 카드", en: "Duotone Card" },
    description: {
      ko: "두 색의 강한 대비로 구성한 임팩트 있는 듀오톤 카드입니다.",
      en: "A bold duotone card built from two strongly contrasting colors.",
    },
    tags: ["card", "duotone", "contrast", "듀오톤"],
    html: `<article class="card-duotone">
  <div class="card-duotone__top">2049</div>
  <div class="card-duotone__bottom"><h3>FUTURE</h3><p>듀오톤 디자인</p></div>
</article>`,
    css: `.card-duotone { width: 220px; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 28px rgba(79,70,229,0.3); }
.card-duotone__top { padding: 26px 20px; font-size: 30px; font-weight: 900; color: #ec4899; background: #4f46e5; }
.card-duotone__bottom { padding: 18px 20px; background: #ec4899; color: #4f46e5; }
.card-duotone__bottom h3 { margin: 0 0 4px; font-size: 18px; font-weight: 800; }
.card-duotone__bottom p { margin: 0; font-size: 13px; font-weight: 600; }`,
  },
  {
    id: "cards-bento-grid",
    slug: "bento-grid",
    category: "cards",
    style: "minimal",
    title: { ko: "벤토 그리드", en: "Bento Grid" },
    description: {
      ko: "크기가 다른 칸을 모아 구성하는 요즘 유행하는 벤토 그리드 레이아웃입니다.",
      en: "A trendy bento-grid layout assembled from cells of varying sizes.",
    },
    tags: ["card", "bento", "grid", "layout"],
    featured: true,
    html: `<div class="card-bento">
  <div class="card-bento__a">A</div>
  <div class="card-bento__b">B</div>
  <div class="card-bento__c">C</div>
  <div class="card-bento__d">D</div>
</div>`,
    css: `.card-bento {
  display: grid; grid-template-columns: repeat(3, 56px); grid-template-rows: repeat(2, 56px);
  gap: 8px;
}
.card-bento > div { display: grid; place-items: center; border-radius: 14px; font-weight: 800; color: #fff; }
.card-bento__a { grid-column: span 2; background: #6366f1; }
.card-bento__b { background: #ec4899; }
.card-bento__c { background: #22c55e; }
.card-bento__d { grid-column: span 2; background: #0f172a; }`,
  },
  {
    id: "cards-bauhaus-geo",
    slug: "bauhaus-geo",
    category: "cards",
    style: "bauhaus",
    title: { ko: "바우하우스 지오", en: "Bauhaus Geo" },
    description: {
      ko: "원·삼각형·사각형 원색 도형 헤더와 검정 테두리로 구성한 모던 기하 카드입니다.",
      en: "A modernist card with a primary-shape header (circle, triangle, square) and bold black borders.",
    },
    tags: ["bauhaus", "geometric", "card", "primary", "바우하우스"],
    featured: true,
    html: `<div class="card-bauhaus-geo">
  <div class="card-bauhaus-geo__art">
    <span class="cbg-circle"></span>
    <span class="cbg-tri"></span>
    <span class="cbg-square"></span>
  </div>
  <div class="card-bauhaus-geo__body">
    <h3>FORM &amp; FUNCTION</h3>
    <p>기하학적 형태와 원색으로 완성한 모던 디자인 카드.</p>
  </div>
</div>`,
    css: `.card-bauhaus-geo {
  width: 250px;
  border: 3px solid #1a1a1a;
  background: #faf3e0;
  box-shadow: 8px 8px 0 #1a1a1a;
  font-family: "Futura", "Century Gothic", system-ui, sans-serif;
}
.card-bauhaus-geo__art {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 100px;
  padding: 0 18px 16px;
  border-bottom: 3px solid #1a1a1a;
  background: #ffce00;
}
.cbg-circle { width: 40px; height: 40px; border-radius: 50%; background: #e63946; }
.cbg-tri { width: 0; height: 0; border-left: 22px solid transparent; border-right: 22px solid transparent; border-bottom: 40px solid #1d3557; }
.cbg-square { width: 38px; height: 38px; background: #1a1a1a; }
.card-bauhaus-geo__body { padding: 16px 18px 20px; }
.card-bauhaus-geo__body h3 { margin: 0 0 8px; font-size: 16px; font-weight: 800; letter-spacing: 0.08em; color: #1a1a1a; }
.card-bauhaus-geo__body p { margin: 0; font-size: 13px; line-height: 1.5; color: #444; }`,
  },
  {
    id: "cards-artdeco-frame",
    slug: "artdeco-frame",
    category: "cards",
    style: "artdeco",
    title: { ko: "아르데코 프레임", en: "Art Deco Frame" },
    description: {
      ko: "금빛 이중 프레임과 상단 선버스트 문양으로 럭셔리 호텔 감성을 담은 카드입니다.",
      en: "A luxury card with a double gold frame and a sunburst motif at the top.",
    },
    tags: ["artdeco", "gold", "luxury", "card", "아르데코"],
    featured: true,
    previewBackground: "#0d1b2a",
    html: `<div class="card-artdeco-frame">
  <div class="card-artdeco-frame__fan"></div>
  <h3>THE GRAND</h3>
  <div class="card-artdeco-frame__rule"></div>
  <p>EST. 1925</p>
  <span class="card-artdeco-frame__sub">PRIVATE MEMBERS CLUB</span>
</div>`,
    css: `.card-artdeco-frame {
  position: relative;
  width: 230px;
  padding: 34px 26px 28px;
  text-align: center;
  border: 1px solid #c8a24c;
  background: linear-gradient(180deg, #16263a, #0d1b2a);
  box-shadow: inset 0 0 0 5px #0d1b2a, inset 0 0 0 6px rgba(200,162,76,0.5);
  font-family: Georgia, "Times New Roman", serif;
  color: #e9d8a6;
}
.card-artdeco-frame__fan {
  width: 56px; height: 28px; margin: 0 auto 18px;
  border-radius: 56px 56px 0 0;
  background: repeating-conic-gradient(from 180deg at 50% 100%, #c8a24c 0deg 9deg, transparent 9deg 18deg);
}
.card-artdeco-frame h3 { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.28em; text-indent: 0.28em; }
.card-artdeco-frame__rule { width: 70px; height: 1px; margin: 12px auto; background: #c8a24c; position: relative; }
.card-artdeco-frame__rule::before { content: ""; position: absolute; left: 50%; top: -3px; width: 7px; height: 7px; margin-left: -3.5px; background: #c8a24c; transform: rotate(45deg); }
.card-artdeco-frame p { margin: 0; font-size: 13px; letter-spacing: 0.3em; text-indent: 0.3em; color: #c8a24c; }
.card-artdeco-frame__sub { display: block; margin-top: 10px; font-size: 10px; letter-spacing: 0.24em; text-indent: 0.24em; color: rgba(233,216,166,0.7); }`,
  },
  {
    id: "cards-aero-glass",
    slug: "aero-glass",
    category: "cards",
    style: "frutigeraero",
    title: { ko: "에어로 글래스 카드", en: "Aero Glass Card" },
    description: {
      ko: "하늘빛 그라데이션과 유리 광택, 물방울 하이라이트로 2000년대 감성을 살린 카드입니다.",
      en: "A sky-gradient card with a glossy sheen and bubble highlights for that 2000s feel.",
    },
    tags: ["frutigeraero", "aqua", "glossy", "card", "에어로"],
    featured: true,
    previewBackground: "linear-gradient(180deg, #bfe9ff, #e6f9ff)",
    html: `<div class="card-aero-glass">
  <div class="card-aero-glass__icon">🌿</div>
  <h3>Aero Cloud</h3>
  <p>맑고 투명한 클라우드 동기화로 어디서나 안전하게.</p>
  <button>Get Started</button>
</div>`,
    css: `.card-aero-glass {
  position: relative;
  overflow: hidden;
  width: 230px;
  padding: 22px 22px 24px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.8);
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255,255,255,0.55), rgba(146,214,255,0.55));
  backdrop-filter: blur(6px);
  box-shadow: 0 10px 30px rgba(31,127,196,0.35), inset 0 1px 0 rgba(255,255,255,0.9);
  font-family: "Segoe UI", system-ui, sans-serif;
  color: #0b4a72;
}
.card-aero-glass::before {
  content: "";
  position: absolute;
  top: -40%; left: -10%;
  width: 120%; height: 70%;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0));
  pointer-events: none;
}
.card-aero-glass__icon { width: 54px; height: 54px; margin: 0 auto 12px; display: grid; place-items: center; font-size: 26px; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fff, #9fe0b0); box-shadow: inset 0 1px 2px rgba(255,255,255,0.9), 0 4px 10px rgba(31,127,196,0.3); }
.card-aero-glass h3 { position: relative; margin: 0 0 6px; font-size: 19px; font-weight: 700; }
.card-aero-glass p { position: relative; margin: 0 0 16px; font-size: 13px; line-height: 1.5; color: #2a6f9e; }
.card-aero-glass button {
  position: relative; padding: 9px 22px; border: 1px solid #1f7fc4; border-radius: 9px;
  font-size: 13px; font-weight: 700; color: #fff; cursor: pointer; text-shadow: 0 1px 1px rgba(0,0,0,0.3);
  background: linear-gradient(180deg, #5cc6ff, #2a93e0 51%, #1f7fc4);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 2px 6px rgba(31,127,196,0.4);
}`,
  },
];

export default cards;
