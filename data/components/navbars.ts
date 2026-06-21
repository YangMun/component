import type { ComponentEntry } from "@/data/types";

const navbars: ComponentEntry[] = [
  {
    id: "navbars-glass-navbar",
    slug: "glass-navbar",
    category: "navbars",
    style: "glassmorphism",
    title: { ko: "글래스 내비바", en: "Glass Navbar" },
    description: {
      ko: "배경이 비치는 반투명 유리 질감의 상단 내비게이션 바입니다.",
      en: "A translucent frosted-glass top navigation bar.",
    },
    tags: ["navbar", "glass", "blur", "header"],
    featured: true,
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<nav class="nav-glass">
  <span class="nav-glass__logo">◆ Brand</span>
  <span class="nav-glass__links"><a>홈</a><a>기능</a><a>요금</a></span>
</nav>`,
    css: `.nav-glass {
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
  width: 320px; padding: 12px 18px; border-radius: 14px; color: #fff;
  border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.16);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
}
.nav-glass__logo { font-weight: 700; }
.nav-glass__links { display: flex; gap: 14px; font-size: 13px; }
.nav-glass__links a { color: rgba(255,255,255,0.85); cursor: pointer; }
.nav-glass__links a:hover { color: #fff; }`,
  },
  {
    id: "navbars-minimal-navbar",
    slug: "minimal-navbar",
    category: "navbars",
    style: "minimal",
    title: { ko: "미니멀 내비바", en: "Minimal Navbar" },
    description: {
      ko: "로고와 링크, 버튼이 정렬된 깔끔한 상단 바입니다.",
      en: "A clean top bar with a logo, links and a button.",
    },
    tags: ["navbar", "minimal", "header", "clean"],
    html: `<nav class="nav-minimal">
  <span class="nav-minimal__logo">Acme</span>
  <span class="nav-minimal__links"><a>제품</a><a>고객</a><a>문의</a></span>
  <button>시작</button>
</nav>`,
    css: `.nav-minimal {
  display: flex; align-items: center; gap: 20px; width: 340px;
  padding: 12px 18px; border-radius: 12px; background: #fff; border: 1px solid #eef2f7;
  box-shadow: 0 2px 8px rgba(15,23,42,0.06);
}
.nav-minimal__logo { font-weight: 800; color: #0f172a; }
.nav-minimal__links { display: flex; gap: 14px; margin-left: auto; font-size: 13px; }
.nav-minimal__links a { color: #64748b; cursor: pointer; }
.nav-minimal__links a:hover { color: #0f172a; }
.nav-minimal button { padding: 8px 16px; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; color: #fff; background: #0f172a; cursor: pointer; }`,
  },
  {
    id: "navbars-brutalist-navbar",
    slug: "brutalist-navbar",
    category: "navbars",
    style: "neobrutalism",
    title: { ko: "브루탈 내비바", en: "Brutalist Navbar" },
    description: {
      ko: "두꺼운 테두리와 하드 섀도의 네오브루탈리즘 내비게이션 바입니다.",
      en: "A neo-brutalist navigation bar with a thick border and hard shadow.",
    },
    tags: ["navbar", "brutalism", "border", "header"],
    previewBackground: "#a7f3d0",
    html: `<nav class="nav-brutalist">
  <span class="nav-brutalist__logo">BOLD</span>
  <span class="nav-brutalist__links"><a>작업</a><a>소개</a></span>
</nav>`,
    css: `.nav-brutalist {
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
  width: 320px; padding: 12px 18px; border: 3px solid #111; border-radius: 4px;
  background: #fde047; box-shadow: 6px 6px 0 #111;
}
.nav-brutalist__logo { font-weight: 900; color: #111; letter-spacing: 0.05em; }
.nav-brutalist__links { display: flex; gap: 14px; font-size: 14px; font-weight: 700; }
.nav-brutalist__links a { color: #111; cursor: pointer; text-decoration: none; }
.nav-brutalist__links a:hover { text-decoration: underline; }`,
  },
  {
    id: "navbars-gradient-navbar",
    slug: "gradient-navbar",
    category: "navbars",
    style: "gradient",
    title: { ko: "그라데이션 내비바", en: "Gradient Navbar" },
    description: {
      ko: "그라데이션 배경의 화려한 상단 내비게이션 바입니다.",
      en: "A vivid top navigation bar with a gradient background.",
    },
    tags: ["navbar", "gradient", "header", "colorful"],
    html: `<nav class="nav-gradient">
  <span class="nav-gradient__logo">★ Nova</span>
  <span class="nav-gradient__links"><a>탐색</a><a>스토어</a><a>지원</a></span>
</nav>`,
    css: `.nav-gradient {
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
  width: 320px; padding: 13px 18px; border-radius: 12px; color: #fff;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  box-shadow: 0 8px 22px rgba(124,58,237,0.4);
}
.nav-gradient__logo { font-weight: 800; }
.nav-gradient__links { display: flex; gap: 14px; font-size: 13px; }
.nav-gradient__links a { color: rgba(255,255,255,0.9); cursor: pointer; }
.nav-gradient__links a:hover { color: #fff; }`,
  },
  {
    id: "navbars-neon-dock",
    slug: "neon-dock",
    category: "navbars",
    style: "neon",
    title: { ko: "네온 독", en: "Neon Dock" },
    description: {
      ko: "어두운 배경에서 네온 아이콘이 빛나는 하단 독 내비게이션입니다.",
      en: "A bottom dock navigation with glowing neon icons on a dark background.",
    },
    tags: ["navbar", "neon", "dock", "bottom"],
    previewBackground: "#0a0a14",
    html: `<nav class="nav-dock">
  <a class="is-active">🏠</a><a>🔍</a><a>♥</a><a>👤</a>
</nav>`,
    css: `.nav-dock {
  display: inline-flex; gap: 18px; padding: 12px 20px; border-radius: 9999px;
  background: #11111f; border: 1px solid #22d3ee; box-shadow: 0 0 18px rgba(34,211,238,0.4);
}
.nav-dock a {
  font-size: 20px; cursor: pointer; filter: grayscale(0.4); opacity: 0.6; transition: all 0.2s ease;
}
.nav-dock a:hover, .nav-dock a.is-active {
  opacity: 1; filter: none; text-shadow: 0 0 12px rgba(34,211,238,0.9); transform: translateY(-2px);
}`,
  },
  {
    id: "navbars-pixel-hud",
    slug: "pixel-hud",
    category: "navbars",
    style: "pixel",
    title: { ko: "픽셀 HUD", en: "Pixel HUD" },
    description: {
      ko: "각진 픽셀 테두리의 8비트 게임 HUD 스타일 상단 바입니다.",
      en: "An 8-bit game HUD-style top bar with a blocky pixel border.",
    },
    tags: ["navbar", "pixel", "8bit", "hud"],
    previewBackground: "#0d0d18",
    html: `<nav class="nav-pixel">
  <span class="nav-pixel__logo">★ HERO</span>
  <span class="nav-pixel__stats">♥×3　◆×12</span>
</nav>`,
    css: `.nav-pixel {
  display: flex; align-items: center; justify-content: space-between; gap: 20px; width: 320px;
  padding: 12px 16px; font-family: ui-monospace, "Courier New", monospace; color: #e2e8f0;
  background: #1b1b2f; border: 3px solid #e2e8f0; box-shadow: 5px 5px 0 #0d0d18; image-rendering: pixelated;
}
.nav-pixel__logo { font-weight: 700; color: #fde047; letter-spacing: 0.06em; }
.nav-pixel__stats { font-size: 13px; color: #22c55e; }`,
  },
];

export default navbars;
