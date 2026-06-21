import type { ComponentEntry } from "@/data/types";

// Tooltips are shown in their visible state so the bubble is seen in the
// preview. To make one hover-only, wrap the bubble and reveal it on :hover.
const tooltips: ComponentEntry[] = [
  {
    id: "tooltips-minimal-tip",
    slug: "minimal-tip",
    category: "tooltips",
    style: "minimal",
    title: { ko: "미니멀 팁", en: "Minimal Tip" },
    description: {
      ko: "어두운 말풍선과 화살표로 된 깔끔한 기본 툴팁입니다.",
      en: "A clean default tooltip with a dark bubble and arrow.",
    },
    tags: ["tooltip", "minimal", "bubble", "툴팁"],
    featured: true,
    html: `<span class="tip-minimal">툴팁 메시지</span>`,
    css: `.tip-minimal {
  position: relative; display: inline-block; padding: 8px 14px; border-radius: 8px;
  font-size: 13px; color: #fff; background: #1f2937;
}
.tip-minimal::after {
  content: ""; position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%);
  border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid #1f2937;
}`,
  },
  {
    id: "tooltips-neon-tip",
    slug: "neon-tip",
    category: "tooltips",
    style: "neon",
    title: { ko: "네온 팁", en: "Neon Tip" },
    description: {
      ko: "어두운 배경에서 빛나는 네온 테두리 툴팁입니다.",
      en: "A glowing neon-outlined tooltip on a dark background.",
    },
    tags: ["tooltip", "neon", "glow", "bubble"],
    previewBackground: "#0a0a14",
    html: `<span class="tip-neon">시스템 온라인</span>`,
    css: `.tip-neon {
  position: relative; display: inline-block; padding: 8px 16px; border-radius: 8px;
  font-size: 13px; color: #22d3ee; background: #11111f; border: 1px solid #22d3ee;
  box-shadow: 0 0 14px rgba(34,211,238,0.5); text-shadow: 0 0 6px rgba(34,211,238,0.7);
}
.tip-neon::after {
  content: ""; position: absolute; bottom: -7px; left: 50%; transform: translateX(-50%);
  border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 7px solid #22d3ee;
}`,
  },
  {
    id: "tooltips-glass-tip",
    slug: "glass-tip",
    category: "tooltips",
    style: "glassmorphism",
    title: { ko: "글래스 팁", en: "Glass Tip" },
    description: {
      ko: "배경이 비치는 반투명 유리 질감의 툴팁입니다.",
      en: "A translucent frosted-glass tooltip.",
    },
    tags: ["tooltip", "glass", "blur", "bubble"],
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<span class="tip-glass">자세히 보기</span>`,
    css: `.tip-glass {
  display: inline-block; padding: 9px 16px; border-radius: 10px; font-size: 13px; color: #fff;
  border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.18);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.2);
}`,
  },
  {
    id: "tooltips-gradient-tip",
    slug: "gradient-tip",
    category: "tooltips",
    style: "gradient",
    title: { ko: "그라데이션 팁", en: "Gradient Tip" },
    description: {
      ko: "그라데이션 배경의 화살표 달린 툴팁입니다.",
      en: "A tooltip with a gradient background and arrow.",
    },
    tags: ["tooltip", "gradient", "bubble", "arrow"],
    html: `<span class="tip-gradient">업그레이드하세요</span>`,
    css: `.tip-gradient {
  position: relative; display: inline-block; padding: 9px 16px; border-radius: 9px;
  font-size: 13px; font-weight: 600; color: #fff;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  box-shadow: 0 6px 16px rgba(124,58,237,0.4);
}
.tip-gradient::after {
  content: ""; position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%);
  border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid #ec4899;
}`,
  },
  {
    id: "tooltips-brutalist-tip",
    slug: "brutalist-tip",
    category: "tooltips",
    style: "neobrutalism",
    title: { ko: "브루탈 팁", en: "Brutalist Tip" },
    description: {
      ko: "두꺼운 테두리와 하드 섀도의 네오브루탈리즘 툴팁입니다.",
      en: "A neo-brutalist tooltip with a thick border and hard shadow.",
    },
    tags: ["tooltip", "brutalism", "border", "bubble"],
    previewBackground: "#bae6fd",
    html: `<span class="tip-brutalist">알아두세요!</span>`,
    css: `.tip-brutalist {
  position: relative; display: inline-block; padding: 9px 16px; border: 2px solid #111; border-radius: 3px;
  font-size: 13px; font-weight: 700; color: #111; background: #fff; box-shadow: 4px 4px 0 #111;
}
.tip-brutalist::after {
  content: ""; position: absolute; bottom: -9px; left: 18px;
  border-left: 7px solid transparent; border-right: 7px solid transparent; border-top: 8px solid #111;
}`,
  },
  {
    id: "tooltips-clay-tip",
    slug: "clay-tip",
    category: "tooltips",
    style: "claymorphism",
    title: { ko: "클레이 팁", en: "Clay Tip" },
    description: {
      ko: "말랑한 점토 질감의 둥근 파스텔 툴팁입니다.",
      en: "A puffy clay-textured rounded pastel tooltip.",
    },
    tags: ["tooltip", "clay", "pastel", "bubble"],
    previewBackground: "#fce7f3",
    html: `<span class="tip-clay">좋은 선택이에요</span>`,
    css: `.tip-clay {
  display: inline-block; padding: 11px 18px; border-radius: 18px; font-size: 13px; font-weight: 600;
  color: #831843; background: #f9a8d4;
  box-shadow: inset 3px 3px 6px rgba(255,255,255,0.55), inset -3px -3px 6px rgba(190,24,93,0.25),
    6px 6px 14px rgba(190,24,93,0.2);
}`,
  },
];

export default tooltips;
