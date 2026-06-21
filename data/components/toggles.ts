import type { ComponentEntry } from "@/data/types";

const toggles: ComponentEntry[] = [
  {
    id: "toggles-neumorph-switch",
    slug: "neumorph-switch",
    category: "toggles",
    style: "neumorphism",
    title: { ko: "뉴모프 스위치", en: "Neumorph Switch" },
    description: {
      ko: "눌린 듯한 트랙 위로 부드럽게 미끄러지는 뉴모피즘 토글 스위치입니다.",
      en: "A neumorphic toggle that slides smoothly over a pressed-in track.",
    },
    tags: ["toggle", "switch", "neumorphism", "스위치"],
    featured: true,
    previewBackground: "#e0e5ec",
    html: `<label class="sw-neumorph">
  <input type="checkbox" checked />
  <span class="sw-neumorph__track"><span class="sw-neumorph__thumb"></span></span>
</label>`,
    css: `.sw-neumorph { display: inline-block; cursor: pointer; }
.sw-neumorph input { display: none; }
.sw-neumorph__track {
  display: block; width: 64px; height: 34px; border-radius: 9999px; background: #e0e5ec;
  box-shadow: inset 4px 4px 8px #b8bcc4, inset -4px -4px 8px #ffffff; position: relative;
}
.sw-neumorph__thumb {
  position: absolute; top: 4px; left: 4px; width: 26px; height: 26px; border-radius: 50%;
  background: #e0e5ec; box-shadow: 3px 3px 6px #b8bcc4, -3px -3px 6px #ffffff;
  transition: left 0.25s ease, background 0.25s ease;
}
.sw-neumorph input:checked + .sw-neumorph__track .sw-neumorph__thumb { left: 34px; background: #7c3aed; }`,
  },
  {
    id: "toggles-neon-switch",
    slug: "neon-switch",
    category: "toggles",
    style: "neon",
    title: { ko: "네온 스위치", en: "Neon Switch" },
    description: {
      ko: "켜면 네온 빛이 들어오는 어두운 배경 토글 스위치입니다.",
      en: "A dark toggle that lights up with a neon glow when switched on.",
    },
    tags: ["toggle", "switch", "neon", "glow"],
    previewBackground: "#0a0a14",
    html: `<label class="sw-neon">
  <input type="checkbox" checked />
  <span class="sw-neon__track"><span class="sw-neon__thumb"></span></span>
</label>`,
    css: `.sw-neon { display: inline-block; cursor: pointer; }
.sw-neon input { display: none; }
.sw-neon__track {
  display: block; width: 64px; height: 32px; border-radius: 9999px;
  background: #1e293b; border: 1px solid #334155; position: relative; transition: all 0.25s ease;
}
.sw-neon__thumb {
  position: absolute; top: 3px; left: 4px; width: 24px; height: 24px; border-radius: 50%;
  background: #475569; transition: left 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}
.sw-neon input:checked + .sw-neon__track { border-color: #22d3ee; box-shadow: 0 0 14px rgba(34,211,238,0.6); }
.sw-neon input:checked + .sw-neon__track .sw-neon__thumb {
  left: 36px; background: #22d3ee; box-shadow: 0 0 12px rgba(34,211,238,0.9);
}`,
  },
  {
    id: "toggles-gradient-switch",
    slug: "gradient-switch",
    category: "toggles",
    style: "gradient",
    title: { ko: "그라데이션 스위치", en: "Gradient Switch" },
    description: {
      ko: "켜면 트랙이 그라데이션으로 채워지는 토글 스위치입니다.",
      en: "A toggle whose track fills with a gradient when switched on.",
    },
    tags: ["toggle", "switch", "gradient", "스위치"],
    html: `<label class="sw-gradient">
  <input type="checkbox" checked />
  <span class="sw-gradient__track"><span class="sw-gradient__thumb"></span></span>
</label>`,
    css: `.sw-gradient { display: inline-block; cursor: pointer; }
.sw-gradient input { display: none; }
.sw-gradient__track {
  display: block; width: 64px; height: 32px; border-radius: 9999px;
  background: #cbd5e1; position: relative; transition: background 0.3s ease;
}
.sw-gradient__thumb {
  position: absolute; top: 3px; left: 3px; width: 26px; height: 26px; border-radius: 50%;
  background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.2); transition: left 0.3s ease;
}
.sw-gradient input:checked + .sw-gradient__track { background: linear-gradient(90deg, #7c3aed, #ec4899); }
.sw-gradient input:checked + .sw-gradient__track .sw-gradient__thumb { left: 35px; }`,
  },
  {
    id: "toggles-threed-switch",
    slug: "threed-switch",
    category: "toggles",
    style: "threed",
    title: { ko: "3D 스위치", en: "3D Switch" },
    description: {
      ko: "입체적인 측면이 보이며 눌리는 3D 토글 스위치입니다.",
      en: "A 3D toggle with a visible side that depresses as it flips.",
    },
    tags: ["toggle", "switch", "3d", "입체"],
    html: `<label class="sw-threed">
  <input type="checkbox" checked />
  <span class="sw-threed__track"><span class="sw-threed__thumb"></span></span>
</label>`,
    css: `.sw-threed { display: inline-block; cursor: pointer; }
.sw-threed input { display: none; }
.sw-threed__track {
  display: block; width: 66px; height: 34px; border-radius: 9999px; background: #cbd5e1;
  box-shadow: inset 0 -4px 0 rgba(0,0,0,0.15); position: relative; transition: background 0.25s ease;
}
.sw-threed__thumb {
  position: absolute; top: 3px; left: 3px; width: 28px; height: 28px; border-radius: 50%;
  background: #fff; box-shadow: 0 4px 0 #94a3b8, 0 6px 8px rgba(0,0,0,0.2);
  transition: left 0.2s ease;
}
.sw-threed input:checked + .sw-threed__track { background: #34d399; }
.sw-threed input:checked + .sw-threed__track .sw-threed__thumb { left: 35px; box-shadow: 0 4px 0 #059669, 0 6px 8px rgba(0,0,0,0.2); }`,
  },
  {
    id: "toggles-brutalist-checkbox",
    slug: "brutalist-checkbox",
    category: "toggles",
    style: "neobrutalism",
    title: { ko: "브루탈 체크박스", en: "Brutalist Checkbox" },
    description: {
      ko: "두꺼운 테두리와 하드 섀도, 체크 시 색이 채워지는 체크박스입니다.",
      en: "A checkbox with a thick border and hard shadow that fills on check.",
    },
    tags: ["toggle", "checkbox", "brutalism", "체크박스"],
    previewBackground: "#fef08a",
    html: `<label class="cb-brutalist">
  <input type="checkbox" checked />
  <span class="cb-brutalist__box"></span>
  <span class="cb-brutalist__label">동의합니다</span>
</label>`,
    css: `.cb-brutalist { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; font-weight: 700; color: #111; }
.cb-brutalist input { display: none; }
.cb-brutalist__box {
  width: 26px; height: 26px; border: 3px solid #111; border-radius: 2px;
  background: #fff; box-shadow: 3px 3px 0 #111; position: relative; transition: background 0.1s ease;
}
.cb-brutalist input:checked + .cb-brutalist__box { background: #f472b6; }
.cb-brutalist input:checked + .cb-brutalist__box::after {
  content: "✓"; position: absolute; inset: 0; display: grid; place-items: center;
  font-size: 18px; font-weight: 900; color: #111;
}`,
  },
  {
    id: "toggles-clay-switch",
    slug: "clay-switch",
    category: "toggles",
    style: "claymorphism",
    title: { ko: "클레이 스위치", en: "Clay Switch" },
    description: {
      ko: "말랑한 점토 질감의 파스텔 토글 스위치입니다.",
      en: "A puffy clay-textured pastel toggle switch.",
    },
    tags: ["toggle", "switch", "clay", "pastel"],
    previewBackground: "#ede9fe",
    html: `<label class="sw-clay">
  <input type="checkbox" checked />
  <span class="sw-clay__track"><span class="sw-clay__thumb"></span></span>
</label>`,
    css: `.sw-clay { display: inline-block; cursor: pointer; }
.sw-clay input { display: none; }
.sw-clay__track {
  display: block; width: 66px; height: 36px; border-radius: 9999px; background: #c4b5fd;
  box-shadow: inset 3px 3px 6px rgba(255,255,255,0.6), inset -3px -3px 6px rgba(124,58,237,0.3);
  position: relative; transition: background 0.25s ease;
}
.sw-clay__thumb {
  position: absolute; top: 4px; left: 4px; width: 28px; height: 28px; border-radius: 50%;
  background: #fff; box-shadow: 2px 2px 5px rgba(124,58,237,0.4); transition: left 0.25s ease;
}
.sw-clay input:checked + .sw-clay__track { background: #a78bfa; }
.sw-clay input:checked + .sw-clay__track .sw-clay__thumb { left: 34px; }`,
  },
  {
    id: "toggles-pixel-switch",
    slug: "pixel-switch",
    category: "toggles",
    style: "pixel",
    title: { ko: "픽셀 스위치", en: "Pixel Switch" },
    description: {
      ko: "각진 픽셀 블록이 칸을 옮겨가는 8비트 게임 스타일 토글입니다.",
      en: "An 8-bit toggle where a blocky pixel handle jumps between slots.",
    },
    tags: ["toggle", "pixel", "8bit", "switch"],
    previewBackground: "#0d0d18",
    html: `<label class="sw-pixel">
  <input type="checkbox" checked />
  <span class="sw-pixel__track"><span class="sw-pixel__thumb"></span></span>
</label>`,
    css: `.sw-pixel { display: inline-block; cursor: pointer; }
.sw-pixel input { display: none; }
.sw-pixel__track {
  display: block; width: 64px; height: 32px; background: #1b1b2f; border: 3px solid #e2e8f0;
  position: relative; image-rendering: pixelated; box-shadow: 4px 4px 0 #0d0d18;
}
.sw-pixel__thumb { position: absolute; top: 3px; left: 3px; width: 23px; height: 23px; background: #64748b; transition: left 0.1s steps(2); }
.sw-pixel input:checked + .sw-pixel__track .sw-pixel__thumb { left: 32px; background: #22c55e; box-shadow: 0 0 8px #22c55e; }`,
  },
  {
    id: "toggles-holographic-switch",
    slug: "holographic-switch",
    category: "toggles",
    style: "holographic",
    title: { ko: "홀로그래픽 스위치", en: "Holographic Switch" },
    description: {
      ko: "켜면 트랙이 무지갯빛 홀로그램으로 채워지는 토글 스위치입니다.",
      en: "A toggle whose track fills with a holographic rainbow when switched on.",
    },
    tags: ["toggle", "switch", "holographic", "홀로그램"],
    previewBackground: "#0b1020",
    html: `<label class="sw-holo">
  <input type="checkbox" checked />
  <span class="sw-holo__track"><span class="sw-holo__thumb"></span></span>
</label>`,
    css: `.sw-holo { display: inline-block; cursor: pointer; }
.sw-holo input { display: none; }
.sw-holo__track { display: block; width: 64px; height: 32px; border-radius: 9999px; background: #312e57; position: relative; transition: background 0.3s ease; }
.sw-holo__thumb { position: absolute; top: 3px; left: 3px; width: 26px; height: 26px; border-radius: 50%; background: #fff; transition: left 0.3s ease; }
.sw-holo input:checked + .sw-holo__track {
  background: linear-gradient(115deg, #a78bfa, #f0abfc, #7dd3fc, #6ee7b7, #fda4af, #a78bfa);
  background-size: 300% 100%; animation: sw-holo 3s linear infinite;
}
.sw-holo input:checked + .sw-holo__track .sw-holo__thumb { left: 35px; }
@keyframes sw-holo { to { background-position: 300% 0; } }`,
  },
];

export default toggles;
