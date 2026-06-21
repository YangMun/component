import type { ComponentEntry } from "@/data/types";

// Range sliders styled via ::-webkit-slider-thumb / ::-moz-range-thumb.
const sliders: ComponentEntry[] = [
  {
    id: "sliders-minimal-slider",
    slug: "minimal-slider",
    category: "sliders",
    style: "minimal",
    title: { ko: "미니멀 슬라이더", en: "Minimal Slider" },
    description: {
      ko: "얇은 트랙과 둥근 핸들의 깔끔한 범위 슬라이더입니다.",
      en: "A clean range slider with a thin track and round handle.",
    },
    tags: ["slider", "range", "minimal", "input"],
    featured: true,
    html: `<input class="sld-minimal" type="range" min="0" max="100" value="60" aria-label="값" />`,
    css: `.sld-minimal { -webkit-appearance: none; appearance: none; width: 240px; height: 6px; border-radius: 9999px; background: #e2e8f0; outline: none; }
.sld-minimal::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none; width: 20px; height: 20px; border-radius: 50%;
  background: #0f172a; cursor: pointer; box-shadow: 0 2px 6px rgba(0,0,0,0.25);
}
.sld-minimal::-moz-range-thumb { width: 20px; height: 20px; border: none; border-radius: 50%; background: #0f172a; cursor: pointer; }`,
  },
  {
    id: "sliders-gradient-slider",
    slug: "gradient-slider",
    category: "sliders",
    style: "gradient",
    title: { ko: "그라데이션 슬라이더", en: "Gradient Slider" },
    description: {
      ko: "그라데이션 트랙과 흰색 핸들의 화려한 슬라이더입니다.",
      en: "A vivid slider with a gradient track and white handle.",
    },
    tags: ["slider", "range", "gradient", "input"],
    html: `<input class="sld-gradient" type="range" min="0" max="100" value="70" aria-label="값" />`,
    css: `.sld-gradient { -webkit-appearance: none; appearance: none; width: 240px; height: 8px; border-radius: 9999px; outline: none;
  background: linear-gradient(90deg, #7c3aed, #ec4899); }
.sld-gradient::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none; width: 22px; height: 22px; border-radius: 50%;
  background: #fff; cursor: pointer; box-shadow: 0 2px 8px rgba(124,58,237,0.5); border: 2px solid #ec4899;
}
.sld-gradient::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%; background: #fff; border: 2px solid #ec4899; cursor: pointer; }`,
  },
  {
    id: "sliders-neumorph-slider",
    slug: "neumorph-slider",
    category: "sliders",
    style: "neumorphism",
    title: { ko: "뉴모프 슬라이더", en: "Neumorph Slider" },
    description: {
      ko: "눌린 듯한 트랙과 솟은 핸들의 뉴모피즘 슬라이더입니다.",
      en: "A neumorphic slider with a pressed-in track and raised handle.",
    },
    tags: ["slider", "range", "neumorphism", "input"],
    previewBackground: "#e0e5ec",
    html: `<input class="sld-neumorph" type="range" min="0" max="100" value="50" aria-label="값" />`,
    css: `.sld-neumorph { -webkit-appearance: none; appearance: none; width: 240px; height: 12px; border-radius: 9999px; outline: none;
  background: #e0e5ec; box-shadow: inset 3px 3px 6px #b8bcc4, inset -3px -3px 6px #ffffff; }
.sld-neumorph::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none; width: 24px; height: 24px; border-radius: 50%;
  background: #e0e5ec; cursor: pointer; box-shadow: 3px 3px 6px #b8bcc4, -3px -3px 6px #ffffff;
}
.sld-neumorph::-moz-range-thumb { width: 24px; height: 24px; border: none; border-radius: 50%; background: #e0e5ec; cursor: pointer; box-shadow: 3px 3px 6px #b8bcc4, -3px -3px 6px #ffffff; }`,
  },
  {
    id: "sliders-neon-slider",
    slug: "neon-slider",
    category: "sliders",
    style: "neon",
    title: { ko: "네온 슬라이더", en: "Neon Slider" },
    description: {
      ko: "어두운 배경에서 핸들이 네온으로 빛나는 슬라이더입니다.",
      en: "A slider whose handle glows neon on a dark background.",
    },
    tags: ["slider", "range", "neon", "glow"],
    previewBackground: "#0a0a14",
    html: `<input class="sld-neon" type="range" min="0" max="100" value="65" aria-label="값" />`,
    css: `.sld-neon { -webkit-appearance: none; appearance: none; width: 240px; height: 6px; border-radius: 9999px; outline: none; background: #1e293b; }
.sld-neon::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none; width: 20px; height: 20px; border-radius: 50%;
  background: #22d3ee; cursor: pointer; box-shadow: 0 0 12px rgba(34,211,238,0.9);
}
.sld-neon::-moz-range-thumb { width: 20px; height: 20px; border: none; border-radius: 50%; background: #22d3ee; cursor: pointer; box-shadow: 0 0 12px rgba(34,211,238,0.9); }`,
  },
];

export default sliders;
