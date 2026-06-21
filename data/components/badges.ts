import type { ComponentEntry } from "@/data/types";

const badges: ComponentEntry[] = [
  {
    id: "badges-gradient-pill",
    slug: "gradient-pill",
    category: "badges",
    style: "gradient",
    title: { ko: "그라데이션 필", en: "Gradient Pill" },
    description: {
      ko: "그라데이션 배경의 둥근 알약 모양 배지입니다.",
      en: "A rounded pill badge with a gradient background.",
    },
    tags: ["badge", "gradient", "pill", "tag"],
    featured: true,
    html: `<span class="badge-gradient-pill">NEW</span>`,
    css: `.badge-gradient-pill {
  display: inline-block; padding: 6px 14px; border-radius: 9999px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.04em; color: #fff;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  box-shadow: 0 4px 12px rgba(124,58,237,0.4);
}`,
  },
  {
    id: "badges-neon-badge",
    slug: "neon-badge",
    category: "badges",
    style: "neon",
    title: { ko: "네온 배지", en: "Neon Badge" },
    description: {
      ko: "어두운 배경에서 빛나는 네온 테두리 배지입니다.",
      en: "A glowing neon outline badge on a dark background.",
    },
    tags: ["badge", "neon", "glow", "outline"],
    previewBackground: "#0a0a14",
    html: `<span class="badge-neon">LIVE</span>`,
    css: `.badge-neon {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 14px; border-radius: 6px; font-size: 12px; font-weight: 700;
  color: #22d3ee; border: 1px solid #22d3ee; background: rgba(34,211,238,0.08);
  text-shadow: 0 0 6px rgba(34,211,238,0.8); box-shadow: 0 0 12px rgba(34,211,238,0.4);
}
.badge-neon::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: #22d3ee; box-shadow: 0 0 8px #22d3ee; }`,
  },
  {
    id: "badges-glass-badge",
    slug: "glass-badge",
    category: "badges",
    style: "glassmorphism",
    title: { ko: "글래스 배지", en: "Glass Badge" },
    description: {
      ko: "배경이 비치는 반투명 유리 질감의 배지입니다.",
      en: "A translucent frosted-glass badge.",
    },
    tags: ["badge", "glass", "blur", "tag"],
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<span class="badge-glass">PRO</span>`,
    css: `.badge-glass {
  display: inline-block; padding: 6px 16px; border-radius: 9999px;
  font-size: 12px; font-weight: 700; color: #fff;
  border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.18);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
}`,
  },
  {
    id: "badges-brutalist-tag",
    slug: "brutalist-tag",
    category: "badges",
    style: "neobrutalism",
    title: { ko: "브루탈 태그", en: "Brutalist Tag" },
    description: {
      ko: "두꺼운 테두리와 하드 섀도의 네오브루탈리즘 태그입니다.",
      en: "A neo-brutalist tag with a thick border and hard shadow.",
    },
    tags: ["badge", "brutalism", "tag", "border"],
    previewBackground: "#a7f3d0",
    html: `<span class="badge-brutalist">SALE</span>`,
    css: `.badge-brutalist {
  display: inline-block; padding: 6px 14px; border: 2px solid #111; border-radius: 2px;
  font-size: 12px; font-weight: 900; color: #111; background: #fde047; box-shadow: 3px 3px 0 #111;
}`,
  },
  {
    id: "badges-minimal-dot",
    slug: "minimal-dot",
    category: "badges",
    style: "minimal",
    title: { ko: "미니멀 닷", en: "Minimal Dot" },
    description: {
      ko: "작은 상태 점과 텍스트로 이루어진 절제된 상태 배지입니다.",
      en: "A restrained status badge made of a small dot and text.",
    },
    tags: ["badge", "minimal", "status", "dot"],
    html: `<span class="badge-minimal-dot"><span></span>활성</span>`,
    css: `.badge-minimal-dot {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 5px 12px; border-radius: 9999px; font-size: 13px; font-weight: 600;
  color: #166534; background: #f0fdf4; border: 1px solid #bbf7d0;
}
.badge-minimal-dot span { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; }`,
  },
  {
    id: "badges-material-chip",
    slug: "material-chip",
    category: "badges",
    style: "material",
    title: { ko: "머티리얼 칩", en: "Material Chip" },
    description: {
      ko: "아이콘과 라벨이 들어간 머티리얼 스타일 칩입니다.",
      en: "A material-style chip with an icon and label.",
    },
    tags: ["badge", "material", "chip", "filter"],
    html: `<span class="badge-material-chip">✓ 완료</span>`,
    css: `.badge-material-chip {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 7px 14px; border-radius: 8px; font-size: 13px; font-weight: 600;
  color: #1e40af; background: #dbeafe; box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}`,
  },
  {
    id: "badges-retro-sticker",
    slug: "retro-sticker",
    category: "badges",
    style: "retro",
    title: { ko: "레트로 스티커", en: "Retro Sticker" },
    description: {
      ko: "살짝 기울어진 복고풍 스티커 배지입니다.",
      en: "A slightly tilted retro sticker badge.",
    },
    tags: ["badge", "retro", "sticker", "복고"],
    previewBackground: "#1a1a2e",
    html: `<span class="badge-retro-sticker">HOT!</span>`,
    css: `.badge-retro-sticker {
  display: inline-block; padding: 8px 16px; transform: rotate(-6deg);
  font-family: ui-monospace, monospace; font-size: 13px; font-weight: 800; letter-spacing: 0.08em;
  color: #1a1a2e; background: #fde047; border: 2px dashed #1a1a2e; border-radius: 6px;
  box-shadow: 0 0 0 3px #fde047, 4px 4px 0 rgba(244,114,182,0.9);
}`,
  },
  {
    id: "badges-pixel-tag",
    slug: "pixel-tag",
    category: "badges",
    style: "pixel",
    title: { ko: "픽셀 태그", en: "Pixel Tag" },
    description: {
      ko: "각진 픽셀 테두리의 8비트 게임 스타일 태그입니다.",
      en: "An 8-bit game tag with a blocky pixel border.",
    },
    tags: ["badge", "pixel", "8bit", "tag"],
    previewBackground: "#0d0d18",
    html: `<span class="badge-pixel">LV.99</span>`,
    css: `.badge-pixel {
  display: inline-block; padding: 6px 12px; font-family: ui-monospace, "Courier New", monospace;
  font-size: 12px; font-weight: 700; letter-spacing: 0.06em; color: #0d0d18; background: #fde047;
  border: 2px solid #0d0d18; box-shadow: 3px 3px 0 #22c55e; image-rendering: pixelated;
}`,
  },
];

export default badges;
