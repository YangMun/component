import type { ComponentEntry } from "@/data/types";

// Accordions use the native <details>/<summary> elements, so expand/collapse
// works with zero JavaScript. The first item is shown open in the preview.
const accordions: ComponentEntry[] = [
  {
    id: "accordions-minimal-accordion",
    slug: "minimal-accordion",
    category: "accordions",
    style: "minimal",
    title: { ko: "미니멀 아코디언", en: "Minimal Accordion" },
    description: {
      ko: "구분선과 회전하는 화살표가 있는 깔끔한 FAQ 아코디언입니다.",
      en: "A clean FAQ accordion with dividers and a rotating chevron.",
    },
    tags: ["accordion", "faq", "minimal", "details"],
    featured: true,
    html: `<div class="acc-minimal">
  <details open>
    <summary>환불이 가능한가요?<span>›</span></summary>
    <p>구매 후 7일 이내에는 전액 환불이 가능합니다.</p>
  </details>
  <details>
    <summary>플랜을 변경할 수 있나요?<span>›</span></summary>
    <p>언제든지 상위 또는 하위 플랜으로 변경할 수 있습니다.</p>
  </details>
</div>`,
    css: `.acc-minimal { width: 300px; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; background: #fff; }
.acc-minimal details { border-bottom: 1px solid #e2e8f0; }
.acc-minimal details:last-child { border-bottom: none; }
.acc-minimal summary {
  display: flex; justify-content: space-between; align-items: center;
  padding: 14px 16px; font-size: 14px; font-weight: 600; color: #0f172a; cursor: pointer; list-style: none;
}
.acc-minimal summary::-webkit-details-marker { display: none; }
.acc-minimal summary span { transition: transform 0.2s ease; color: #94a3b8; }
.acc-minimal details[open] summary span { transform: rotate(90deg); }
.acc-minimal p { margin: 0; padding: 0 16px 14px; font-size: 13px; line-height: 1.6; color: #64748b; }`,
  },
  {
    id: "accordions-brutalist-accordion",
    slug: "brutalist-accordion",
    category: "accordions",
    style: "neobrutalism",
    title: { ko: "브루탈 아코디언", en: "Brutalist Accordion" },
    description: {
      ko: "두꺼운 테두리와 하드 섀도의 네오브루탈리즘 아코디언입니다.",
      en: "A neo-brutalist accordion with thick borders and a hard shadow.",
    },
    tags: ["accordion", "brutalism", "faq", "details"],
    previewBackground: "#bae6fd",
    html: `<div class="acc-brutalist">
  <details open>
    <summary>FAQ 1 +</summary>
    <p>네오브루탈리즘은 강한 대비와 두꺼운 테두리가 특징입니다.</p>
  </details>
  <details>
    <summary>FAQ 2 +</summary>
    <p>하드 섀도로 입체감을 강조합니다.</p>
  </details>
</div>`,
    css: `.acc-brutalist { width: 300px; }
.acc-brutalist details { border: 3px solid #111; background: #fff; margin-bottom: 10px; box-shadow: 5px 5px 0 #111; }
.acc-brutalist summary {
  padding: 12px 14px; font-size: 14px; font-weight: 800; color: #111; cursor: pointer;
  list-style: none; background: #fde047;
}
.acc-brutalist summary::-webkit-details-marker { display: none; }
.acc-brutalist p { margin: 0; padding: 12px 14px; font-size: 13px; line-height: 1.6; color: #333; font-weight: 500; }`,
  },
  {
    id: "accordions-glass-accordion",
    slug: "glass-accordion",
    category: "accordions",
    style: "glassmorphism",
    title: { ko: "글래스 아코디언", en: "Glass Accordion" },
    description: {
      ko: "배경이 비치는 반투명 유리 질감의 아코디언입니다.",
      en: "A translucent frosted-glass accordion.",
    },
    tags: ["accordion", "glass", "blur", "details"],
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<div class="acc-glass">
  <details open>
    <summary>무엇이 포함되나요?</summary>
    <p>모든 카테고리의 컴포넌트가 포함됩니다.</p>
  </details>
  <details>
    <summary>업데이트 주기는?</summary>
    <p>매주 새로운 컴포넌트가 추가됩니다.</p>
  </details>
</div>`,
    css: `.acc-glass {
  width: 300px; border-radius: 14px; overflow: hidden; color: #fff;
  border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.16);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
}
.acc-glass details { border-bottom: 1px solid rgba(255,255,255,0.25); }
.acc-glass details:last-child { border-bottom: none; }
.acc-glass summary { padding: 13px 16px; font-size: 14px; font-weight: 600; cursor: pointer; list-style: none; }
.acc-glass summary::-webkit-details-marker { display: none; }
.acc-glass p { margin: 0; padding: 0 16px 14px; font-size: 13px; line-height: 1.6; opacity: 0.9; }`,
  },
  {
    id: "accordions-pixel-accordion",
    slug: "pixel-accordion",
    category: "accordions",
    style: "pixel",
    title: { ko: "픽셀 아코디언", en: "Pixel Accordion" },
    description: {
      ko: "각진 픽셀 테두리의 레트로 게임 스타일 아코디언입니다.",
      en: "A retro 8-bit accordion with blocky pixel borders.",
    },
    tags: ["accordion", "pixel", "8bit", "details"],
    previewBackground: "#0d0d18",
    html: `<div class="acc-pixel">
  <details open>
    <summary>► LEVEL 1</summary>
    <p>첫 번째 단계를 클리어했습니다.</p>
  </details>
  <details>
    <summary>► LEVEL 2</summary>
    <p>다음 단계에 도전하세요.</p>
  </details>
</div>`,
    css: `.acc-pixel { width: 300px; font-family: ui-monospace, "Courier New", monospace; }
.acc-pixel details { border: 3px solid #22c55e; background: #1b1b2f; margin-bottom: 10px; box-shadow: 4px 4px 0 #0d0d18; }
.acc-pixel summary {
  padding: 12px 14px; font-size: 13px; font-weight: 700; letter-spacing: 0.05em;
  color: #22c55e; cursor: pointer; list-style: none;
}
.acc-pixel summary::-webkit-details-marker { display: none; }
.acc-pixel p { margin: 0; padding: 0 14px 12px; font-size: 12px; line-height: 1.6; color: #cbd5e1; }`,
  },
];

export default accordions;
