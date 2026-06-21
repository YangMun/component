import type { ComponentEntry } from "@/data/types";

const steppers: ComponentEntry[] = [
  {
    id: "steppers-minimal-stepper",
    slug: "minimal-stepper",
    category: "steppers",
    style: "minimal",
    title: { ko: "미니멀 스텝", en: "Minimal Stepper" },
    description: {
      ko: "완료·현재·예정 단계를 점과 연결선으로 보여 주는 스텝입니다.",
      en: "A stepper showing done, current and upcoming steps with dots and lines.",
    },
    tags: ["stepper", "minimal", "progress", "steps"],
    featured: true,
    html: `<div class="stp-minimal">
  <span class="done">1</span><i class="done"></i>
  <span class="active">2</span><i></i>
  <span>3</span>
</div>`,
    css: `.stp-minimal { display: inline-flex; align-items: center; }
.stp-minimal span {
  display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%;
  font-size: 13px; font-weight: 700; color: #94a3b8; background: #f1f5f9; border: 2px solid #e2e8f0;
}
.stp-minimal span.done { color: #fff; background: #0f172a; border-color: #0f172a; }
.stp-minimal span.active { color: #0f172a; border-color: #0f172a; }
.stp-minimal i { width: 36px; height: 2px; background: #e2e8f0; }
.stp-minimal i.done { background: #0f172a; }`,
  },
  {
    id: "steppers-gradient-stepper",
    slug: "gradient-stepper",
    category: "steppers",
    style: "gradient",
    title: { ko: "그라데이션 스텝", en: "Gradient Stepper" },
    description: {
      ko: "완료된 단계가 그라데이션으로 채워지는 스텝입니다.",
      en: "A stepper where completed steps fill with a gradient.",
    },
    tags: ["stepper", "gradient", "progress", "steps"],
    html: `<div class="stp-gradient">
  <span class="done">✓</span><i class="done"></i>
  <span class="active">2</span><i></i>
  <span>3</span>
</div>`,
    css: `.stp-gradient { display: inline-flex; align-items: center; }
.stp-gradient span {
  display: grid; place-items: center; width: 32px; height: 32px; border-radius: 50%;
  font-size: 13px; font-weight: 700; color: #a78bfa; background: #f3e8ff;
}
.stp-gradient span.done { color: #fff; background: linear-gradient(135deg, #7c3aed, #ec4899); }
.stp-gradient span.active { color: #fff; background: #7c3aed; box-shadow: 0 0 0 4px rgba(124,58,237,0.2); }
.stp-gradient i { width: 36px; height: 3px; background: #f3e8ff; }
.stp-gradient i.done { background: linear-gradient(90deg, #7c3aed, #ec4899); }`,
  },
  {
    id: "steppers-neon-stepper",
    slug: "neon-stepper",
    category: "steppers",
    style: "neon",
    title: { ko: "네온 스텝", en: "Neon Stepper" },
    description: {
      ko: "어두운 배경에서 완료 단계가 네온으로 빛나는 스텝입니다.",
      en: "A stepper whose completed steps glow neon on a dark background.",
    },
    tags: ["stepper", "neon", "glow", "steps"],
    previewBackground: "#0a0a14",
    html: `<div class="stp-neon">
  <span class="done">1</span><i class="done"></i>
  <span class="active">2</span><i></i>
  <span>3</span>
</div>`,
    css: `.stp-neon { display: inline-flex; align-items: center; }
.stp-neon span {
  display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%;
  font-size: 13px; font-weight: 700; color: #475569; background: #11111f; border: 1px solid #334155;
}
.stp-neon span.done { color: #0a0a14; background: #22d3ee; border-color: #22d3ee; box-shadow: 0 0 12px rgba(34,211,238,0.8); }
.stp-neon span.active { color: #22d3ee; border-color: #22d3ee; box-shadow: 0 0 10px rgba(34,211,238,0.5); }
.stp-neon i { width: 36px; height: 2px; background: #334155; }
.stp-neon i.done { background: #22d3ee; box-shadow: 0 0 8px rgba(34,211,238,0.8); }`,
  },
  {
    id: "steppers-pixel-stepper",
    slug: "pixel-stepper",
    category: "steppers",
    style: "pixel",
    title: { ko: "픽셀 스텝", en: "Pixel Stepper" },
    description: {
      ko: "각진 픽셀 블록으로 단계를 표시하는 레트로 게임 스타일 스텝입니다.",
      en: "A retro 8-bit stepper marking steps with blocky pixel squares.",
    },
    tags: ["stepper", "pixel", "8bit", "steps"],
    previewBackground: "#0d0d18",
    html: `<div class="stp-pixel">
  <span class="done">1</span><i class="done"></i>
  <span class="active">2</span><i></i>
  <span>3</span>
</div>`,
    css: `.stp-pixel { display: inline-flex; align-items: center; font-family: ui-monospace, "Courier New", monospace; }
.stp-pixel span {
  display: grid; place-items: center; width: 30px; height: 30px; font-size: 13px; font-weight: 700;
  color: #64748b; background: #1b1b2f; border: 3px solid #334155;
}
.stp-pixel span.done { color: #0d0d18; background: #22c55e; border-color: #e2e8f0; }
.stp-pixel span.active { color: #22c55e; border-color: #22c55e; }
.stp-pixel i { width: 28px; height: 4px; background: #334155; }
.stp-pixel i.done { background: #22c55e; }`,
  },
];

export default steppers;
