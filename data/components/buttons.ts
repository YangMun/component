import type { ComponentEntry } from "@/data/types";

// Button components. Add a new button by appending an entry to this array.
const buttons: ComponentEntry[] = [
  {
    id: "buttons-gradient-glow",
    slug: "gradient-glow",
    category: "buttons",
    style: "gradient",
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
  },
  {
    id: "buttons-solid-press",
    slug: "solid-press",
    category: "buttons",
    style: "material",
    title: { ko: "솔리드 프레스", en: "Solid Press" },
    description: {
      ko: "단색 배경에 아래쪽 그림자가 있어 클릭하면 실제로 눌리는 느낌을 주는 버튼입니다.",
      en: "A solid button with a bottom shadow that physically presses down on click.",
    },
    tags: ["solid", "press", "click", "단색"],
    featured: true,
    html: `<button class="btn-solid-press">확인</button>`,
    css: `.btn-solid-press {
  padding: 12px 26px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background: #2563eb;
  box-shadow: 0 4px 0 #1e40af;
  transition: transform 0.08s ease, box-shadow 0.08s ease;
}
.btn-solid-press:active {
  transform: translateY(4px);
  box-shadow: 0 0 0 #1e40af;
}`,
  },
  {
    id: "buttons-neon-outline",
    slug: "neon-outline",
    category: "buttons",
    style: "neon",
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
  },
  {
    id: "buttons-shine-sweep",
    slug: "shine-sweep",
    category: "buttons",
    style: "minimal",
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
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent);
  transform: skewX(-20deg);
  transition: left 0.6s ease;
}
.btn-shine-sweep:hover { background: #1e293b; }
.btn-shine-sweep:hover::after { left: 130%; }`,
  },
  {
    id: "buttons-pill-arrow",
    slug: "pill-arrow",
    category: "buttons",
    style: "minimal",
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
.btn-pill-arrow__icon { transition: transform 0.2s ease; }
.btn-pill-arrow:hover { background: #111827; color: #fff; }
.btn-pill-arrow:hover .btn-pill-arrow__icon { transform: translateX(5px); }`,
  },
  {
    id: "buttons-soft-3d",
    slug: "soft-3d",
    category: "buttons",
    style: "neumorphism",
    title: { ko: "소프트 3D", en: "Soft 3D" },
    description: {
      ko: "부드러운 그림자로 입체감을 준 뉴모피즘 스타일 버튼입니다.",
      en: "A neumorphic-style button with soft shadows for a gentle 3D feel.",
    },
    tags: ["neumorphism", "soft", "3d", "뉴모피즘"],
    previewBackground: "#e0e5ec",
    html: `<button class="btn-soft-3d">눌러보기</button>`,
    css: `.btn-soft-3d {
  padding: 14px 30px;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  background: #e0e5ec;
  box-shadow: 6px 6px 12px #b8bcc4, -6px -6px 12px #ffffff;
  transition: box-shadow 0.18s ease, color 0.18s ease;
}
.btn-soft-3d:hover { color: #2563eb; }
.btn-soft-3d:active {
  box-shadow: inset 5px 5px 10px #b8bcc4, inset -5px -5px 10px #ffffff;
}`,
  },
  {
    id: "buttons-glass-frost",
    slug: "glass-frost",
    category: "buttons",
    style: "glassmorphism",
    title: { ko: "글래스 프로스트", en: "Glass Frost" },
    description: {
      ko: "반투명 유리와 블러로 배경이 비치는 글래스모피즘 버튼입니다.",
      en: "A glassmorphism button with translucent, blurred frosted glass.",
    },
    tags: ["glass", "blur", "glassmorphism", "유리"],
    featured: true,
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<button class="btn-glass-frost">탐색하기</button>`,
    css: `.btn-glass-frost {
  padding: 13px 30px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: background 0.2s ease, transform 0.2s ease;
}
.btn-glass-frost:hover {
  background: rgba(255, 255, 255, 0.28);
  transform: translateY(-2px);
}`,
  },
  {
    id: "buttons-brutalist-block",
    slug: "brutalist-block",
    category: "buttons",
    style: "neobrutalism",
    title: { ko: "브루탈 블록", en: "Brutalist Block" },
    description: {
      ko: "두꺼운 검은 테두리와 하드 섀도가 특징인 네오브루탈리즘 버튼입니다.",
      en: "A neo-brutalist button with a thick black border and hard offset shadow.",
    },
    tags: ["brutalism", "border", "shadow", "브루탈리즘"],
    featured: true,
    previewBackground: "#fef9c3",
    html: `<button class="btn-brutalist-block">클릭!</button>`,
    css: `.btn-brutalist-block {
  padding: 14px 28px;
  border: 3px solid #111;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 800;
  color: #111;
  cursor: pointer;
  background: #facc15;
  box-shadow: 5px 5px 0 #111;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.btn-brutalist-block:hover { transform: translate(-1px, -1px); box-shadow: 6px 6px 0 #111; }
.btn-brutalist-block:active { transform: translate(5px, 5px); box-shadow: 0 0 0 #111; }`,
  },
  {
    id: "buttons-retro-y2k",
    slug: "retro-y2k",
    category: "buttons",
    style: "retro",
    title: { ko: "레트로 Y2K", en: "Retro Y2K" },
    description: {
      ko: "메탈릭 그라데이션과 둥근 모서리로 2000년대 감성을 살린 버튼입니다.",
      en: "A button with a metallic gradient and rounded edges for a Y2K vibe.",
    },
    tags: ["retro", "y2k", "metallic", "복고"],
    previewBackground: "#1a1a2e",
    html: `<button class="btn-retro-y2k">PLAY ▶</button>`,
    css: `.btn-retro-y2k {
  padding: 13px 28px;
  border: 2px solid #fff;
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #1a1a2e;
  cursor: pointer;
  background: linear-gradient(180deg, #f0f0f5 0%, #c0c0d0 45%, #8a8aa0 55%, #e8e8f0 100%);
  box-shadow: 0 0 16px rgba(167, 139, 250, 0.7);
  transition: filter 0.2s ease;
}
.btn-retro-y2k:hover { filter: brightness(1.1); }`,
  },
  {
    id: "buttons-clay-pill",
    slug: "clay-pill",
    category: "buttons",
    style: "claymorphism",
    title: { ko: "클레이 필", en: "Clay Pill" },
    description: {
      ko: "말랑한 점토 질감의 둥근 파스텔 버튼입니다.",
      en: "A puffy, clay-textured pastel pill button.",
    },
    tags: ["clay", "claymorphism", "pastel", "점토"],
    previewBackground: "#ede9fe",
    html: `<button class="btn-clay-pill">좋아요</button>`,
    css: `.btn-clay-pill {
  padding: 14px 30px;
  border: none;
  border-radius: 9999px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  background: #a78bfa;
  box-shadow: inset 4px 4px 8px rgba(255,255,255,0.5),
    inset -4px -4px 8px rgba(124,58,237,0.4), 8px 8px 16px rgba(124,58,237,0.25);
  transition: transform 0.15s ease;
}
.btn-clay-pill:active { transform: scale(0.96); }`,
  },
  {
    id: "buttons-threed-push",
    slug: "threed-push",
    category: "buttons",
    style: "threed",
    title: { ko: "3D 푸시", en: "3D Push" },
    description: {
      ko: "두꺼운 측면이 보이는 입체 버튼으로, 누르면 아래로 내려갑니다.",
      en: "A 3D button with a visible side that sinks down when pressed.",
    },
    tags: ["3d", "push", "depth", "입체"],
    html: `<button class="btn-threed-push">결제하기</button>`,
    css: `.btn-threed-push {
  padding: 14px 30px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  background: #16a34a;
  box-shadow: 0 7px 0 #15803d, 0 9px 14px rgba(0,0,0,0.25);
  transition: transform 0.08s ease, box-shadow 0.08s ease;
}
.btn-threed-push:active {
  transform: translateY(6px);
  box-shadow: 0 1px 0 #15803d, 0 2px 6px rgba(0,0,0,0.25);
}`,
  },
  {
    id: "buttons-aurora-border",
    slug: "aurora-border",
    category: "buttons",
    style: "gradient",
    title: { ko: "오로라 보더", en: "Aurora Border" },
    description: {
      ko: "테두리를 따라 그라데이션이 흐르는 오로라 느낌의 버튼입니다.",
      en: "A button whose gradient border flows like an aurora.",
    },
    tags: ["gradient", "aurora", "border", "오로라"],
    previewBackground: "#0b1020",
    html: `<button class="btn-aurora-border"><span>가입하기</span></button>`,
    css: `.btn-aurora-border {
  position: relative;
  padding: 0;
  border: none;
  border-radius: 12px;
  background: linear-gradient(90deg, #f472b6, #818cf8, #22d3ee, #f472b6);
  background-size: 300% 100%;
  cursor: pointer;
  animation: aurora-flow 4s linear infinite;
}
.btn-aurora-border span {
  display: block;
  margin: 2px;
  padding: 12px 28px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: #0b1020;
}
@keyframes aurora-flow { to { background-position: 300% 0; } }`,
  },
];

export default buttons;
