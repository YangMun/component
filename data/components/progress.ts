import type { ComponentEntry } from "@/data/types";

const progress: ComponentEntry[] = [
  {
    id: "progress-aurora-bar",
    slug: "aurora-bar",
    category: "progress",
    style: "gradient",
    title: { ko: "오로라 바", en: "Aurora Bar" },
    description: {
      ko: "그라데이션이 흐르는 오로라 느낌의 진행 표시 바입니다.",
      en: "A progress bar with a flowing aurora gradient fill.",
    },
    tags: ["progress", "gradient", "aurora", "bar"],
    featured: true,
    html: `<div class="prog-aurora" role="progressbar" aria-valuenow="70">
  <div class="prog-aurora__fill"></div>
</div>`,
    css: `.prog-aurora {
  width: 280px; height: 14px; border-radius: 9999px; background: #e2e8f0; overflow: hidden;
}
.prog-aurora__fill {
  width: 70%; height: 100%; border-radius: 9999px;
  background: linear-gradient(90deg, #7c3aed, #ec4899, #22d3ee, #7c3aed);
  background-size: 200% 100%; animation: prog-aurora-flow 2s linear infinite;
}
@keyframes prog-aurora-flow { to { background-position: 200% 0; } }`,
  },
  {
    id: "progress-neon-bar",
    slug: "neon-bar",
    category: "progress",
    style: "neon",
    title: { ko: "네온 바", en: "Neon Bar" },
    description: {
      ko: "어두운 배경에서 네온 빛이 채워지는 진행 표시 바입니다.",
      en: "A progress bar whose neon fill glows on a dark background.",
    },
    tags: ["progress", "neon", "glow", "bar"],
    previewBackground: "#0a0a14",
    html: `<div class="prog-neon" role="progressbar" aria-valuenow="60">
  <div class="prog-neon__fill"></div>
</div>`,
    css: `.prog-neon {
  width: 280px; height: 12px; border-radius: 9999px; background: #1e293b; overflow: hidden;
  border: 1px solid #334155;
}
.prog-neon__fill {
  width: 60%; height: 100%; border-radius: 9999px; background: #22d3ee;
  box-shadow: 0 0 14px rgba(34,211,238,0.9);
}`,
  },
  {
    id: "progress-striped-material",
    slug: "striped-material",
    category: "progress",
    style: "material",
    title: { ko: "스트라이프 머티리얼", en: "Striped Material" },
    description: {
      ko: "움직이는 줄무늬가 들어간 머티리얼 스타일 진행 바입니다.",
      en: "A material-style progress bar with animated stripes.",
    },
    tags: ["progress", "material", "striped", "bar"],
    html: `<div class="prog-striped" role="progressbar" aria-valuenow="55">
  <div class="prog-striped__fill"></div>
</div>`,
    css: `.prog-striped {
  width: 280px; height: 16px; border-radius: 8px; background: #e5e7eb; overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);
}
.prog-striped__fill {
  width: 55%; height: 100%; background: #2563eb;
  background-image: linear-gradient(45deg, rgba(255,255,255,0.25) 25%, transparent 25%,
    transparent 50%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.25) 75%, transparent 75%);
  background-size: 24px 24px; animation: prog-striped-move 0.8s linear infinite;
}
@keyframes prog-striped-move { to { background-position: 24px 0; } }`,
  },
  {
    id: "progress-neumorph-bar",
    slug: "neumorph-bar",
    category: "progress",
    style: "neumorphism",
    title: { ko: "뉴모프 바", en: "Neumorph Bar" },
    description: {
      ko: "눌린 듯한 트랙에 부드러운 채움이 있는 뉴모피즘 진행 바입니다.",
      en: "A neumorphic progress bar with a pressed-in track and soft fill.",
    },
    tags: ["progress", "neumorphism", "soft", "bar"],
    previewBackground: "#e0e5ec",
    html: `<div class="prog-neumorph" role="progressbar" aria-valuenow="65">
  <div class="prog-neumorph__fill"></div>
</div>`,
    css: `.prog-neumorph {
  width: 280px; height: 18px; border-radius: 9999px; background: #e0e5ec; padding: 4px;
  box-shadow: inset 4px 4px 8px #b8bcc4, inset -4px -4px 8px #ffffff;
}
.prog-neumorph__fill {
  width: 65%; height: 100%; border-radius: 9999px;
  background: linear-gradient(90deg, #a78bfa, #7c3aed);
}`,
  },
  {
    id: "progress-minimal-line",
    slug: "minimal-line",
    category: "progress",
    style: "minimal",
    title: { ko: "미니멀 라인", en: "Minimal Line" },
    description: {
      ko: "라벨과 퍼센트가 함께 표시되는 얇은 미니멀 진행 바입니다.",
      en: "A thin minimal progress bar shown with a label and percentage.",
    },
    tags: ["progress", "minimal", "line", "bar"],
    html: `<div class="prog-minimal">
  <div class="prog-minimal__head"><span>업로드</span><span>80%</span></div>
  <div class="prog-minimal__track"><div class="prog-minimal__fill"></div></div>
</div>`,
    css: `.prog-minimal { width: 280px; }
.prog-minimal__head {
  display: flex; justify-content: space-between; margin-bottom: 6px;
  font-size: 12px; color: #64748b;
}
.prog-minimal__track { height: 6px; border-radius: 9999px; background: #e2e8f0; overflow: hidden; }
.prog-minimal__fill { width: 80%; height: 100%; background: #0f172a; border-radius: 9999px; }`,
  },
  {
    id: "progress-clay-bar",
    slug: "clay-bar",
    category: "progress",
    style: "claymorphism",
    title: { ko: "클레이 바", en: "Clay Bar" },
    description: {
      ko: "말랑한 점토 질감의 둥근 파스텔 진행 바입니다.",
      en: "A puffy clay-textured rounded pastel progress bar.",
    },
    tags: ["progress", "clay", "pastel", "bar"],
    previewBackground: "#fce7f3",
    html: `<div class="prog-clay" role="progressbar" aria-valuenow="50">
  <div class="prog-clay__fill"></div>
</div>`,
    css: `.prog-clay {
  width: 280px; height: 20px; border-radius: 9999px; background: #fbcfe8; padding: 4px;
  box-shadow: inset 3px 3px 6px rgba(190,24,93,0.25), inset -3px -3px 6px rgba(255,255,255,0.6);
}
.prog-clay__fill {
  width: 50%; height: 100%; border-radius: 9999px; background: #f472b6;
  box-shadow: inset 2px 2px 4px rgba(255,255,255,0.5), inset -2px -2px 4px rgba(190,24,93,0.3);
}`,
  },
  {
    id: "progress-retro-segments",
    slug: "retro-segments",
    category: "progress",
    style: "retro",
    title: { ko: "레트로 세그먼트", en: "Retro Segments" },
    description: {
      ko: "픽셀 블록으로 채워지는 복고풍 진행 표시입니다.",
      en: "A retro progress meter that fills with pixel blocks.",
    },
    tags: ["progress", "retro", "pixel", "segments"],
    previewBackground: "#1a1a2e",
    html: `<div class="prog-retro" role="progressbar" aria-valuenow="60">
  <span class="on"></span><span class="on"></span><span class="on"></span>
  <span></span><span></span>
</div>`,
    css: `.prog-retro {
  display: inline-flex; gap: 5px; padding: 6px; background: #0f0f23; border: 2px solid #22d3ee;
}
.prog-retro span {
  width: 28px; height: 18px; background: #1e293b; box-shadow: inset 0 0 0 1px #334155;
}
.prog-retro span.on { background: #22d3ee; box-shadow: 0 0 8px rgba(34,211,238,0.8); }`,
  },
  {
    id: "progress-pixel-bar",
    slug: "pixel-bar",
    category: "progress",
    style: "pixel",
    title: { ko: "픽셀 바", en: "Pixel Bar" },
    description: {
      ko: "각진 픽셀 블록으로 채워지는 8비트 게임 스타일 진행 바입니다.",
      en: "An 8-bit progress bar that fills with blocky pixel cells.",
    },
    tags: ["progress", "pixel", "8bit", "bar"],
    previewBackground: "#0d0d18",
    html: `<div class="prog-pixel" role="progressbar" aria-valuenow="70">
  <div class="prog-pixel__fill"></div>
</div>`,
    css: `.prog-pixel {
  width: 280px; height: 22px; padding: 3px; background: #1b1b2f; border: 3px solid #e2e8f0;
  image-rendering: pixelated; box-shadow: 4px 4px 0 #0d0d18;
}
.prog-pixel__fill {
  width: 70%; height: 100%; background:
    repeating-linear-gradient(90deg, #22c55e 0, #22c55e 10px, #16a34a 10px, #16a34a 14px);
}`,
  },
  {
    id: "progress-holographic-bar",
    slug: "holographic-bar",
    category: "progress",
    style: "holographic",
    title: { ko: "홀로그래픽 바", en: "Holographic Bar" },
    description: {
      ko: "무지갯빛 홀로그램이 흐르며 채워지는 진행 표시 바입니다.",
      en: "A progress bar that fills with a flowing holographic rainbow.",
    },
    tags: ["progress", "holographic", "iridescent", "bar"],
    previewBackground: "#0b1020",
    html: `<div class="prog-holo" role="progressbar" aria-valuenow="75"><div class="prog-holo__fill"></div></div>`,
    css: `.prog-holo { width: 280px; height: 14px; border-radius: 9999px; background: #312e57; overflow: hidden; }
.prog-holo__fill {
  width: 75%; height: 100%; border-radius: 9999px;
  background: linear-gradient(115deg, #a78bfa, #f0abfc, #7dd3fc, #6ee7b7, #fda4af, #a78bfa);
  background-size: 300% 100%; animation: prog-holo 3s linear infinite;
}
@keyframes prog-holo { to { background-position: 300% 0; } }`,
  },
  {
    id: "progress-duotone-bar",
    slug: "duotone-bar",
    category: "progress",
    style: "duotone",
    title: { ko: "듀오톤 바", en: "Duotone Bar" },
    description: {
      ko: "두 색의 강한 대비로 채워지는 듀오톤 진행 바입니다.",
      en: "A duotone progress bar filled with two strongly contrasting colors.",
    },
    tags: ["progress", "duotone", "contrast", "bar"],
    html: `<div class="prog-duotone" role="progressbar" aria-valuenow="60"><div class="prog-duotone__fill"></div></div>`,
    css: `.prog-duotone { width: 280px; height: 14px; border-radius: 9999px; background: #ec4899; overflow: hidden; }
.prog-duotone__fill { width: 60%; height: 100%; background: #4f46e5; }`,
  },
  {
    id: "progress-circular-ring",
    slug: "circular-ring",
    category: "progress",
    style: "gradient",
    title: { ko: "원형 링", en: "Circular Ring" },
    description: {
      ko: "퍼센트를 가운데 표시하는 원형 그라데이션 진행 링입니다.",
      en: "A circular gradient progress ring with the percentage in the center.",
    },
    tags: ["progress", "circular", "ring", "gradient"],
    featured: true,
    html: `<div class="prog-ring"><span>72%</span></div>`,
    css: `.prog-ring {
  width: 96px; height: 96px; border-radius: 50%; display: grid; place-items: center;
  background: conic-gradient(#7c3aed 0 72%, #e9d5ff 72% 100%);
}
.prog-ring span {
  display: grid; place-items: center; width: 74px; height: 74px; border-radius: 50%;
  background: #fff; font-size: 18px; font-weight: 800; color: #7c3aed;
}`,
  },
];

export default progress;
