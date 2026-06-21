import type { ComponentEntry } from "@/data/types";

const loaders: ComponentEntry[] = [
  {
    id: "loaders-dual-ring",
    slug: "dual-ring",
    category: "loaders",
    style: "minimal",
    title: { ko: "듀얼 링", en: "Dual Ring" },
    description: {
      ko: "두 개의 호가 회전하는 클래식한 원형 스피너입니다.",
      en: "A classic circular spinner made of two rotating arcs.",
    },
    tags: ["loader", "spinner", "ring", "loading"],
    featured: true,
    html: `<span class="loader-dual-ring" role="status" aria-label="로딩 중"></span>`,
    css: `.loader-dual-ring {
  display: inline-block; width: 44px; height: 44px;
  border: 4px solid rgba(37, 99, 235, 0.2); border-top-color: #2563eb;
  border-radius: 50%; animation: loader-dual-ring-spin 0.9s linear infinite;
}
@keyframes loader-dual-ring-spin { to { transform: rotate(360deg); } }`,
  },
  {
    id: "loaders-bouncing-dots",
    slug: "bouncing-dots",
    category: "loaders",
    style: "minimal",
    title: { ko: "바운싱 도트", en: "Bouncing Dots" },
    description: {
      ko: "세 개의 점이 차례로 튀어오르는 가벼운 로딩 인디케이터입니다.",
      en: "A lightweight loading indicator with three dots bouncing in sequence.",
    },
    tags: ["loader", "dots", "bounce", "loading"],
    html: `<span class="loader-dots" role="status" aria-label="로딩 중">
  <span></span><span></span><span></span>
</span>`,
    css: `.loader-dots { display: inline-flex; gap: 8px; }
.loader-dots span {
  width: 12px; height: 12px; border-radius: 50%; background: #7c3aed;
  animation: loader-dots-bounce 0.6s ease-in-out infinite;
}
.loader-dots span:nth-child(2) { animation-delay: 0.15s; }
.loader-dots span:nth-child(3) { animation-delay: 0.3s; }
@keyframes loader-dots-bounce {
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(-12px); opacity: 1; }
}`,
  },
  {
    id: "loaders-neon-pulse-ring",
    slug: "neon-pulse-ring",
    category: "loaders",
    style: "neon",
    title: { ko: "네온 펄스 링", en: "Neon Pulse Ring" },
    description: {
      ko: "어두운 배경에서 네온 빛이 맥동하며 회전하는 스피너입니다.",
      en: "A spinner whose neon glow pulses and rotates on a dark background.",
    },
    tags: ["loader", "neon", "pulse", "glow"],
    previewBackground: "#0a0a14",
    html: `<span class="loader-neon-ring" role="status" aria-label="로딩 중"></span>`,
    css: `.loader-neon-ring {
  display: inline-block; width: 46px; height: 46px; border-radius: 50%;
  border: 3px solid transparent; border-top-color: #22d3ee; border-right-color: #f0f;
  animation: loader-neon-spin 0.8s linear infinite;
  box-shadow: 0 0 16px rgba(34,211,238,0.6);
}
@keyframes loader-neon-spin { to { transform: rotate(360deg); } }`,
  },
  {
    id: "loaders-gradient-spinner",
    slug: "gradient-spinner",
    category: "loaders",
    style: "gradient",
    title: { ko: "그라데이션 스피너", en: "Gradient Spinner" },
    description: {
      ko: "원뿔형 그라데이션이 회전하는 화려한 스피너입니다.",
      en: "A vivid spinner driven by a rotating conic gradient.",
    },
    tags: ["loader", "gradient", "conic", "spinner"],
    html: `<span class="loader-gradient" role="status" aria-label="로딩 중"></span>`,
    css: `.loader-gradient {
  display: inline-block; width: 48px; height: 48px; border-radius: 50%;
  background: conic-gradient(from 0deg, #7c3aed, #ec4899, #22d3ee, #7c3aed);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0);
  mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 0);
  animation: loader-gradient-spin 0.9s linear infinite;
}
@keyframes loader-gradient-spin { to { transform: rotate(360deg); } }`,
  },
  {
    id: "loaders-glass-loader",
    slug: "glass-loader",
    category: "loaders",
    style: "glassmorphism",
    title: { ko: "글래스 로더", en: "Glass Loader" },
    description: {
      ko: "반투명 유리 위에서 회전하는 글래스모피즘 스피너입니다.",
      en: "A glassmorphism spinner rotating on a frosted glass disc.",
    },
    tags: ["loader", "glass", "blur", "spinner"],
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<span class="loader-glass" role="status" aria-label="로딩 중"></span>`,
    css: `.loader-glass {
  display: inline-block; width: 50px; height: 50px; border-radius: 50%;
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  border: 3px solid rgba(255,255,255,0.35); border-top-color: #fff;
  animation: loader-glass-spin 0.9s linear infinite;
}
@keyframes loader-glass-spin { to { transform: rotate(360deg); } }`,
  },
  {
    id: "loaders-clay-blob",
    slug: "clay-blob",
    category: "loaders",
    style: "claymorphism",
    title: { ko: "클레이 블롭", en: "Clay Blob" },
    description: {
      ko: "말랑한 점토 덩어리가 모양을 바꾸며 회전하는 로더입니다.",
      en: "A clay blob loader that morphs its shape while spinning.",
    },
    tags: ["loader", "clay", "blob", "morph"],
    previewBackground: "#fce7f3",
    html: `<span class="loader-clay" role="status" aria-label="로딩 중"></span>`,
    css: `.loader-clay {
  display: inline-block; width: 46px; height: 46px; background: #f472b6;
  box-shadow: inset 4px 4px 8px rgba(255,255,255,0.5), inset -4px -4px 8px rgba(190,24,93,0.35);
  animation: loader-clay-morph 1.6s ease-in-out infinite;
}
@keyframes loader-clay-morph {
  0%, 100% { border-radius: 42% 58% 60% 40% / 45% 45% 55% 55%; transform: rotate(0); }
  50% { border-radius: 60% 40% 35% 65% / 60% 55% 45% 40%; transform: rotate(180deg); }
}`,
  },
  {
    id: "loaders-material-circular",
    slug: "material-circular",
    category: "loaders",
    style: "material",
    title: { ko: "머티리얼 서큘러", en: "Material Circular" },
    description: {
      ko: "호의 길이가 늘었다 줄어드는 머티리얼 스타일 원형 로더입니다.",
      en: "A material-style circular loader whose arc grows and shrinks.",
    },
    tags: ["loader", "material", "circular", "progress"],
    html: `<span class="loader-material" role="status" aria-label="로딩 중"></span>`,
    css: `.loader-material {
  display: inline-block; width: 44px; height: 44px; border-radius: 50%;
  border: 4px solid #2563eb; border-right-color: transparent;
  animation: loader-material-spin 0.8s linear infinite;
}
@keyframes loader-material-spin { to { transform: rotate(360deg); } }`,
  },
  {
    id: "loaders-neumorph-spinner",
    slug: "neumorph-spinner",
    category: "loaders",
    style: "neumorphism",
    title: { ko: "뉴모프 스피너", en: "Neumorph Spinner" },
    description: {
      ko: "눌린 듯한 트랙 위를 도는 뉴모피즘 스피너입니다.",
      en: "A neumorphic spinner rotating over a pressed-in track.",
    },
    tags: ["loader", "neumorphism", "soft", "spinner"],
    previewBackground: "#e0e5ec",
    html: `<span class="loader-neumorph" role="status" aria-label="로딩 중"></span>`,
    css: `.loader-neumorph {
  display: inline-block; width: 50px; height: 50px; border-radius: 50%;
  background: #e0e5ec;
  box-shadow: inset 4px 4px 8px #b8bcc4, inset -4px -4px 8px #ffffff;
  position: relative;
}
.loader-neumorph::after {
  content: ""; position: absolute; inset: 6px; border-radius: 50%;
  border: 4px solid transparent; border-top-color: #7c3aed;
  animation: loader-neumorph-spin 0.9s linear infinite;
}
@keyframes loader-neumorph-spin { to { transform: rotate(360deg); } }`,
  },
  {
    id: "loaders-retro-equalizer",
    slug: "retro-equalizer",
    category: "loaders",
    style: "retro",
    title: { ko: "레트로 이퀄라이저", en: "Retro Equalizer" },
    description: {
      ko: "오디오 이퀄라이저처럼 막대가 오르내리는 복고풍 로더입니다.",
      en: "A retro loader with bars rising and falling like an audio equalizer.",
    },
    tags: ["loader", "retro", "equalizer", "bars"],
    previewBackground: "#1a1a2e",
    html: `<span class="loader-eq" role="status" aria-label="로딩 중">
  <span></span><span></span><span></span><span></span>
</span>`,
    css: `.loader-eq { display: inline-flex; align-items: flex-end; gap: 5px; height: 40px; }
.loader-eq span {
  width: 7px; height: 100%; border-radius: 2px;
  background: linear-gradient(180deg, #22d3ee, #f0f);
  animation: loader-eq-bounce 0.9s ease-in-out infinite;
}
.loader-eq span:nth-child(2) { animation-delay: 0.15s; }
.loader-eq span:nth-child(3) { animation-delay: 0.3s; }
.loader-eq span:nth-child(4) { animation-delay: 0.45s; }
@keyframes loader-eq-bounce { 0%, 100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }`,
  },
  {
    id: "loaders-threed-cube",
    slug: "threed-cube",
    category: "loaders",
    style: "threed",
    title: { ko: "3D 큐브", en: "3D Cube" },
    description: {
      ko: "입체적으로 회전하는 3D 큐브 로더입니다.",
      en: "A 3D cube loader that tumbles in space.",
    },
    tags: ["loader", "3d", "cube", "rotate"],
    html: `<span class="loader-cube" role="status" aria-label="로딩 중"></span>`,
    css: `.loader-cube {
  display: inline-block; width: 36px; height: 36px; background: #6366f1;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
  animation: loader-cube-spin 1.4s ease-in-out infinite;
}
@keyframes loader-cube-spin {
  0% { transform: perspective(120px) rotateX(0) rotateY(0); }
  50% { transform: perspective(120px) rotateX(-180deg) rotateY(0); }
  100% { transform: perspective(120px) rotateX(-180deg) rotateY(-180deg); }
}`,
  },
  {
    id: "loaders-pixel-blocks",
    slug: "pixel-blocks",
    category: "loaders",
    style: "pixel",
    title: { ko: "픽셀 블록", en: "Pixel Blocks" },
    description: {
      ko: "픽셀 블록이 차례로 켜지는 8비트 게임 스타일 로더입니다.",
      en: "An 8-bit loader where pixel blocks light up in sequence.",
    },
    tags: ["loader", "pixel", "8bit", "loading"],
    previewBackground: "#0d0d18",
    html: `<span class="loader-pixel" role="status" aria-label="로딩 중">
  <span></span><span></span><span></span><span></span><span></span>
</span>`,
    css: `.loader-pixel { display: inline-flex; gap: 4px; }
.loader-pixel span {
  width: 12px; height: 12px; background: #1e293b; image-rendering: pixelated;
  animation: loader-pixel-blink 1s steps(1) infinite;
}
.loader-pixel span:nth-child(2) { animation-delay: 0.2s; }
.loader-pixel span:nth-child(3) { animation-delay: 0.4s; }
.loader-pixel span:nth-child(4) { animation-delay: 0.6s; }
.loader-pixel span:nth-child(5) { animation-delay: 0.8s; }
@keyframes loader-pixel-blink { 0%, 100% { background: #1e293b; } 50% { background: #22c55e; box-shadow: 0 0 8px #22c55e; } }`,
  },
];

export default loaders;
