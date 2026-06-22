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
  {
    id: "badges-holographic-badge",
    slug: "holographic-badge",
    category: "badges",
    style: "holographic",
    title: { ko: "홀로그래픽 배지", en: "Holographic Badge" },
    description: {
      ko: "무지갯빛이 흐르는 홀로그램 질감의 배지입니다.",
      en: "A badge with a flowing holographic rainbow sheen.",
    },
    tags: ["badge", "holographic", "iridescent", "홀로그램"],
    previewBackground: "#0b1020",
    html: `<span class="badge-holo">VIP</span>`,
    css: `.badge-holo {
  display: inline-block; padding: 6px 16px; border-radius: 9999px; font-size: 12px; font-weight: 800;
  color: #1e1b4b;
  background: linear-gradient(115deg, #a78bfa, #f0abfc, #7dd3fc, #6ee7b7, #fda4af, #a78bfa);
  background-size: 300% 100%; animation: badge-holo 4s linear infinite;
}
@keyframes badge-holo { to { background-position: 300% 0; } }`,
  },
  {
    id: "badges-paper-tag",
    slug: "paper-tag",
    category: "badges",
    style: "paper",
    title: { ko: "페이퍼 태그", en: "Paper Tag" },
    description: {
      ko: "손으로 그린 듯한 거친 테두리의 종이 가격표 태그입니다.",
      en: "A paper price-tag with a hand-drawn, sketchy border.",
    },
    tags: ["badge", "paper", "tag", "sketch"],
    previewBackground: "#fdf6e3",
    html: `<span class="badge-paper">SALE</span>`,
    css: `.badge-paper {
  display: inline-block; padding: 6px 14px; font-size: 12px; font-weight: 800; color: #44403c;
  background: #fffdf7; border: 2px solid #44403c;
  border-radius: 18px 4px 20px 4px / 4px 20px 4px 18px; box-shadow: 2px 2px 0 #44403c;
}`,
  },
  {
    id: "badges-outline-badge",
    slug: "outline-badge",
    category: "badges",
    style: "outline",
    title: { ko: "아웃라인 배지", en: "Outline Badge" },
    description: {
      ko: "얇은 단색 선으로만 그린 라인아트 배지입니다.",
      en: "A line-art badge drawn purely with a thin stroke.",
    },
    tags: ["badge", "outline", "line", "minimal"],
    html: `<span class="badge-outline">BETA</span>`,
    css: `.badge-outline {
  display: inline-block; padding: 5px 13px; border: 1.5px solid #0f172a; border-radius: 9999px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.06em; color: #0f172a; background: transparent;
}`,
  },
  {
    id: "badges-memphis-badge",
    slug: "memphis-badge",
    category: "badges",
    style: "memphis",
    title: { ko: "멤피스 배지", en: "Memphis Badge" },
    description: {
      ko: "발랄한 색과 하드 섀도의 80년대 멤피스 배지입니다.",
      en: "An 80s Memphis badge with playful color and a hard shadow.",
    },
    tags: ["badge", "memphis", "playful", "멤피스"],
    previewBackground: "#fef9c3",
    html: `<span class="badge-memphis">NEW!</span>`,
    css: `.badge-memphis {
  display: inline-block; padding: 6px 14px; transform: rotate(-4deg); font-size: 12px; font-weight: 900;
  color: #111; background: #22d3ee; border: 2px solid #111; border-radius: 6px; box-shadow: 3px 3px 0 #f43f5e;
}`,
  },
  {
    id: "badges-duotone-badge",
    slug: "duotone-badge",
    category: "badges",
    style: "duotone",
    title: { ko: "듀오톤 배지", en: "Duotone Badge" },
    description: {
      ko: "두 색이 나뉜 강한 대비의 듀오톤 배지입니다.",
      en: "A high-contrast duotone badge split into two colors.",
    },
    tags: ["badge", "duotone", "contrast", "듀오톤"],
    html: `<span class="badge-duotone"><span>PRO</span><span>+</span></span>`,
    css: `.badge-duotone { display: inline-flex; border-radius: 8px; overflow: hidden; font-size: 12px; font-weight: 800; }
.badge-duotone span:first-child { padding: 5px 12px; color: #fff; background: #4f46e5; }
.badge-duotone span:last-child { padding: 5px 10px; color: #4f46e5; background: #ec4899; }`,
  },
  {
    id: "badges-notification-dot",
    slug: "notification-dot",
    category: "badges",
    style: "minimal",
    title: { ko: "알림 도트", en: "Notification Dot" },
    description: {
      ko: "아이콘 위에 개수를 표시하는 알림 배지입니다.",
      en: "A notification badge that shows a count on top of an icon.",
    },
    tags: ["badge", "notification", "count", "icon"],
    html: `<span class="badge-noti">🔔<span class="badge-noti__count">5</span></span>`,
    css: `.badge-noti { position: relative; display: inline-block; font-size: 28px; }
.badge-noti__count {
  position: absolute; top: -4px; right: -6px; min-width: 18px; height: 18px; padding: 0 4px;
  display: grid; place-items: center; border-radius: 9999px; font-size: 11px; font-weight: 700;
  color: #fff; background: #ef4444; border: 2px solid #fff; box-sizing: content-box;
}`,
  },
  {
    id: "badges-bauhaus-tag",
    slug: "bauhaus-tag",
    category: "badges",
    style: "bauhaus",
    title: { ko: "바우하우스 태그", en: "Bauhaus Tag" },
    description: {
      ko: "검정 테두리와 원색 블록, 원형 도형 액센트로 구성한 기하학 배지입니다.",
      en: "A geometric badge with a black border, primary block and a circular accent.",
    },
    tags: ["badge", "bauhaus", "geometric", "primary", "바우하우스"],
    html: `<span class="badge-bauhaus-tag">NEW</span>`,
    css: `.badge-bauhaus-tag {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 6px 14px 6px 12px; border: 2.5px solid #1a1a1a; border-radius: 0;
  font-family: "Futura", "Century Gothic", system-ui, sans-serif;
  font-size: 12px; font-weight: 800; letter-spacing: 0.1em; color: #1a1a1a;
  background: #ffce00; box-shadow: 3px 3px 0 #1a1a1a;
}
.badge-bauhaus-tag::before { content: ""; width: 10px; height: 10px; border-radius: 50%; background: #e63946; }`,
  },
  {
    id: "badges-artdeco-chip",
    slug: "artdeco-chip",
    category: "badges",
    style: "artdeco",
    title: { ko: "아르데코 칩", en: "Art Deco Chip" },
    description: {
      ko: "금빛 테두리와 마름모 장식, 세리프 글자로 럭셔리 감성을 담은 배지입니다.",
      en: "A luxury badge with a gold border, diamond ornaments and serif lettering.",
    },
    tags: ["badge", "artdeco", "gold", "luxury", "아르데코"],
    previewBackground: "#0d1b2a",
    html: `<span class="badge-artdeco-chip">PREMIUM</span>`,
    css: `.badge-artdeco-chip {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 7px 18px; border: 1px solid #c8a24c; border-radius: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 11px; font-weight: 600; letter-spacing: 0.26em; text-indent: 0.26em;
  color: #e9d8a6; background: linear-gradient(180deg, #16263a, #0d1b2a);
  box-shadow: inset 0 0 0 3px #0d1b2a, inset 0 0 0 4px rgba(200,162,76,0.5);
}
.badge-artdeco-chip::before, .badge-artdeco-chip::after { content: "◆"; font-size: 8px; color: #c8a24c; text-indent: 0; }`,
  },
  {
    id: "badges-aero-orb",
    slug: "aero-orb",
    category: "badges",
    style: "frutigeraero",
    title: { ko: "에어로 오브", en: "Aero Orb" },
    description: {
      ko: "유리 광택이 도는 둥근 아쿠아 배지로, 위쪽에 물방울 하이라이트가 있습니다.",
      en: "A glossy rounded aqua badge with a glassy highlight across the top.",
    },
    tags: ["badge", "frutigeraero", "aqua", "glossy", "에어로"],
    previewBackground: "linear-gradient(180deg, #bfe9ff, #e6f9ff)",
    html: `<span class="badge-aero-orb">ONLINE</span>`,
    css: `.badge-aero-orb {
  position: relative; overflow: hidden; display: inline-block;
  padding: 6px 16px; border: 1px solid #1f7fc4; border-radius: 9999px;
  font-family: "Segoe UI", system-ui, sans-serif; font-size: 12px; font-weight: 700;
  color: #fff; text-shadow: 0 1px 1px rgba(0,0,0,0.3);
  background: linear-gradient(180deg, #6ed06a 0%, #36a832 50%, #2a8c27 51%, #36a832 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 2px 6px rgba(42,140,39,0.45);
}
.badge-aero-orb::before { content: ""; position: absolute; top: 1px; left: 6%; width: 88%; height: 45%; border-radius: 9999px; background: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0)); }`,
  },
];

export default badges;
