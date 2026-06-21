import type { ComponentEntry } from "@/data/types";

const breadcrumbs: ComponentEntry[] = [
  {
    id: "breadcrumbs-minimal-breadcrumb",
    slug: "minimal-breadcrumb",
    category: "breadcrumbs",
    style: "minimal",
    title: { ko: "미니멀 브레드크럼", en: "Minimal Breadcrumb" },
    description: {
      ko: "슬래시 구분자를 사용하는 깔끔한 경로 내비게이션입니다.",
      en: "A clean path navigation using slash separators.",
    },
    tags: ["breadcrumb", "minimal", "navigation", "path"],
    featured: true,
    html: `<nav class="bc-minimal" aria-label="경로">
  <a>홈</a><span>/</span><a>컴포넌트</a><span>/</span><b>버튼</b>
</nav>`,
    css: `.bc-minimal { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; }
.bc-minimal a { color: #64748b; cursor: pointer; }
.bc-minimal a:hover { color: #0f172a; }
.bc-minimal span { color: #cbd5e1; }
.bc-minimal b { color: #0f172a; font-weight: 600; }`,
  },
  {
    id: "breadcrumbs-gradient-breadcrumb",
    slug: "gradient-breadcrumb",
    category: "breadcrumbs",
    style: "gradient",
    title: { ko: "그라데이션 브레드크럼", en: "Gradient Breadcrumb" },
    description: {
      ko: "현재 위치가 그라데이션 알약으로 강조되는 경로 내비게이션입니다.",
      en: "A breadcrumb where the current page is a gradient pill.",
    },
    tags: ["breadcrumb", "gradient", "navigation", "pill"],
    html: `<nav class="bc-gradient" aria-label="경로">
  <a>홈</a><span>›</span><a>설정</a><span>›</span><b>계정</b>
</nav>`,
    css: `.bc-gradient { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; }
.bc-gradient a { color: #7c3aed; cursor: pointer; }
.bc-gradient span { color: #c4b5fd; }
.bc-gradient b {
  padding: 4px 12px; border-radius: 9999px; color: #fff; font-weight: 600;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
}`,
  },
  {
    id: "breadcrumbs-material-breadcrumb",
    slug: "material-breadcrumb",
    category: "breadcrumbs",
    style: "material",
    title: { ko: "머티리얼 브레드크럼", en: "Material Breadcrumb" },
    description: {
      ko: "연한 배경 칩으로 감싼 머티리얼 스타일 경로 내비게이션입니다.",
      en: "A material-style breadcrumb wrapped in a soft tinted chip.",
    },
    tags: ["breadcrumb", "material", "navigation", "chip"],
    html: `<nav class="bc-material" aria-label="경로">
  <a>🏠</a><span>›</span><a>문서</a><span>›</span><b>가이드</b>
</nav>`,
    css: `.bc-material {
  display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 9999px;
  background: #eff6ff; font-size: 14px;
}
.bc-material a { color: #2563eb; cursor: pointer; }
.bc-material span { color: #93c5fd; }
.bc-material b { color: #1e3a8a; font-weight: 700; }`,
  },
  {
    id: "breadcrumbs-pixel-breadcrumb",
    slug: "pixel-breadcrumb",
    category: "breadcrumbs",
    style: "pixel",
    title: { ko: "픽셀 브레드크럼", en: "Pixel Breadcrumb" },
    description: {
      ko: "각진 픽셀 화살표로 단계를 잇는 레트로 게임 스타일 경로입니다.",
      en: "A retro 8-bit breadcrumb linking steps with blocky pixel arrows.",
    },
    tags: ["breadcrumb", "pixel", "8bit", "navigation"],
    previewBackground: "#0d0d18",
    html: `<nav class="bc-pixel" aria-label="경로">
  <a>WORLD</a><span>▶</span><a>STAGE</a><span>▶</span><b>BOSS</b>
</nav>`,
    css: `.bc-pixel {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: ui-monospace, "Courier New", monospace; font-size: 12px; font-weight: 700; letter-spacing: 0.05em;
}
.bc-pixel a { color: #64748b; cursor: pointer; }
.bc-pixel a:hover { color: #22c55e; }
.bc-pixel span { color: #22c55e; }
.bc-pixel b {
  padding: 4px 8px; color: #0d0d18; background: #22c55e; border: 2px solid #e2e8f0; box-shadow: 3px 3px 0 #0d0d18;
}`,
  },
];

export default breadcrumbs;
