import type { ComponentEntry } from "@/data/types";

const inputs: ComponentEntry[] = [
  {
    id: "inputs-floating-label",
    slug: "floating-label",
    category: "inputs",
    style: "material",
    title: { ko: "플로팅 라벨", en: "Floating Label" },
    description: {
      ko: "입력하면 라벨이 위로 떠오르는 머티리얼 스타일 입력창입니다.",
      en: "A material-style input whose label floats up as you type.",
    },
    tags: ["input", "label", "form", "focus"],
    featured: true,
    html: `<div class="field-floating">
  <input class="field-floating__input" id="ff-email" type="text" placeholder=" " />
  <label class="field-floating__label" for="ff-email">이메일</label>
</div>`,
    css: `.field-floating { position: relative; width: 240px; }
.field-floating__input {
  width: 100%; padding: 18px 12px 6px;
  border: 1px solid #cbd5e1; border-radius: 8px;
  font-size: 15px; color: #0f172a; background: #fff; outline: none;
  transition: border-color 0.2s ease;
}
.field-floating__input:focus { border-color: #2563eb; }
.field-floating__label {
  position: absolute; left: 12px; top: 13px;
  font-size: 15px; color: #94a3b8; pointer-events: none;
  transition: all 0.15s ease;
}
.field-floating__input:focus + .field-floating__label,
.field-floating__input:not(:placeholder-shown) + .field-floating__label {
  top: 5px; font-size: 11px; color: #2563eb;
}`,
  },
  {
    id: "inputs-underline-focus",
    slug: "underline-focus",
    category: "inputs",
    style: "minimal",
    title: { ko: "언더라인 포커스", en: "Underline Focus" },
    description: {
      ko: "포커스 시 밑줄이 가운데에서 양쪽으로 펼쳐지는 미니멀 입력창입니다.",
      en: "A minimal input where the underline expands from the center on focus.",
    },
    tags: ["input", "underline", "minimal", "focus"],
    html: `<div class="field-underline">
  <input class="field-underline__input" type="text" placeholder="이름을 입력하세요" />
  <span class="field-underline__bar" aria-hidden="true"></span>
</div>`,
    css: `.field-underline { position: relative; width: 240px; }
.field-underline__input {
  width: 100%; padding: 8px 2px; border: none;
  border-bottom: 1px solid #cbd5e1; font-size: 15px;
  color: #0f172a; background: transparent; outline: none;
}
.field-underline__bar {
  position: absolute; left: 50%; bottom: 0; height: 2px; width: 0;
  background: #7c3aed; transition: width 0.25s ease, left 0.25s ease;
}
.field-underline__input:focus ~ .field-underline__bar { left: 0; width: 100%; }`,
  },
  {
    id: "inputs-glass-search",
    slug: "glass-search",
    category: "inputs",
    style: "glassmorphism",
    title: { ko: "글래스 검색", en: "Glass Search" },
    description: {
      ko: "배경이 비치는 반투명 유리 질감의 검색 입력창입니다.",
      en: "A translucent frosted-glass search input.",
    },
    tags: ["input", "glass", "search", "blur"],
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<div class="field-glass">
  <span aria-hidden="true">🔍</span>
  <input type="text" placeholder="검색..." />
</div>`,
    css: `.field-glass {
  display: flex; align-items: center; gap: 8px;
  width: 240px; padding: 12px 16px;
  border-radius: 9999px;
  border: 1px solid rgba(255,255,255,0.4);
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
}
.field-glass input {
  flex: 1; border: none; background: transparent; outline: none;
  font-size: 15px; color: #fff;
}
.field-glass input::placeholder { color: rgba(255,255,255,0.8); }`,
  },
  {
    id: "inputs-neumorph-field",
    slug: "neumorph-field",
    category: "inputs",
    style: "neumorphism",
    title: { ko: "뉴모프 필드", en: "Neumorph Field" },
    description: {
      ko: "안쪽으로 눌린 듯한 뉴모피즘 입력 필드입니다.",
      en: "A neumorphic input field that looks pressed inward.",
    },
    tags: ["input", "neumorphism", "soft", "inset"],
    previewBackground: "#e0e5ec",
    html: `<input class="field-neumorph" type="text" placeholder="입력하세요" />`,
    css: `.field-neumorph {
  width: 240px; padding: 14px 18px; border: none; border-radius: 12px;
  font-size: 15px; color: #4b5563; background: #e0e5ec; outline: none;
  box-shadow: inset 5px 5px 10px #b8bcc4, inset -5px -5px 10px #ffffff;
}
.field-neumorph::placeholder { color: #9aa3b2; }`,
  },
  {
    id: "inputs-neon-input",
    slug: "neon-input",
    category: "inputs",
    style: "neon",
    title: { ko: "네온 인풋", en: "Neon Input" },
    description: {
      ko: "포커스 시 네온 테두리가 빛나는 어두운 배경 입력창입니다.",
      en: "A dark input whose neon border glows on focus.",
    },
    tags: ["input", "neon", "glow", "focus"],
    previewBackground: "#0a0a14",
    html: `<input class="field-neon" type="text" placeholder="아이디 입력" />`,
    css: `.field-neon {
  width: 240px; padding: 13px 16px; border-radius: 8px;
  border: 1px solid #1e293b; background: #11111f;
  font-size: 15px; color: #e2e8f0; outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.field-neon::placeholder { color: #475569; }
.field-neon:focus {
  border-color: #22d3ee;
  box-shadow: 0 0 14px rgba(34,211,238,0.6), inset 0 0 8px rgba(34,211,238,0.2);
}`,
  },
  {
    id: "inputs-brutalist-input",
    slug: "brutalist-input",
    category: "inputs",
    style: "neobrutalism",
    title: { ko: "브루탈 인풋", en: "Brutalist Input" },
    description: {
      ko: "두꺼운 테두리와 하드 섀도의 네오브루탈리즘 입력창입니다.",
      en: "A neo-brutalist input with a thick border and hard shadow.",
    },
    tags: ["input", "brutalism", "border", "form"],
    previewBackground: "#bae6fd",
    html: `<input class="field-brutalist" type="text" placeholder="이름" />`,
    css: `.field-brutalist {
  width: 240px; padding: 13px 16px; border: 3px solid #111; border-radius: 2px;
  font-size: 15px; font-weight: 600; color: #111; background: #fff; outline: none;
  box-shadow: 4px 4px 0 #111; transition: box-shadow 0.1s ease, transform 0.1s ease;
}
.field-brutalist::placeholder { color: #6b7280; font-weight: 500; }
.field-brutalist:focus { transform: translate(-1px,-1px); box-shadow: 5px 5px 0 #111; }`,
  },
  {
    id: "inputs-clay-input",
    slug: "clay-input",
    category: "inputs",
    style: "claymorphism",
    title: { ko: "클레이 인풋", en: "Clay Input" },
    description: {
      ko: "말랑한 점토 질감의 둥근 파스텔 입력창입니다.",
      en: "A puffy clay-textured rounded pastel input.",
    },
    tags: ["input", "clay", "pastel", "soft"],
    previewBackground: "#dbeafe",
    html: `<input class="field-clay" type="text" placeholder="메모 추가" />`,
    css: `.field-clay {
  width: 240px; padding: 15px 20px; border: none; border-radius: 9999px;
  font-size: 15px; color: #1e3a8a; background: #bfdbfe; outline: none;
  box-shadow: inset 4px 4px 8px rgba(255,255,255,0.6),
    inset -4px -4px 8px rgba(37,99,235,0.25), 6px 6px 14px rgba(37,99,235,0.18);
}
.field-clay::placeholder { color: #60a5fa; }`,
  },
  {
    id: "inputs-retro-input",
    slug: "retro-input",
    category: "inputs",
    style: "retro",
    title: { ko: "레트로 인풋", en: "Retro Input" },
    description: {
      ko: "픽셀 느낌의 테두리와 깜빡이는 커서를 가진 복고풍 입력창입니다.",
      en: "A retro input with a pixel-style border and a blinking caret feel.",
    },
    tags: ["input", "retro", "pixel", "복고"],
    previewBackground: "#1a1a2e",
    html: `<input class="field-retro" type="text" placeholder="ENTER NAME" />`,
    css: `.field-retro {
  width: 240px; padding: 14px 16px; border: 2px solid #22d3ee; border-radius: 0;
  font-family: ui-monospace, monospace; font-size: 14px; letter-spacing: 0.1em;
  color: #22d3ee; background: #0f0f23; outline: none;
  box-shadow: 0 0 0 2px #0f0f23, 0 0 0 4px #f0f, 0 0 16px rgba(255,0,255,0.4);
}
.field-retro::placeholder { color: #4b5fa3; }
.field-retro:focus { caret-color: #f0f; }`,
  },
  {
    id: "inputs-pixel-input",
    slug: "pixel-input",
    category: "inputs",
    style: "pixel",
    title: { ko: "픽셀 인풋", en: "Pixel Input" },
    description: {
      ko: "각진 픽셀 테두리와 모노스페이스 글꼴의 8비트 입력창입니다.",
      en: "An 8-bit input with a blocky pixel border and monospace type.",
    },
    tags: ["input", "pixel", "8bit", "form"],
    previewBackground: "#0d0d18",
    html: `<input class="field-pixel" type="text" placeholder="ENTER NAME_" />`,
    css: `.field-pixel {
  width: 240px; padding: 13px 14px; font-family: ui-monospace, "Courier New", monospace;
  font-size: 14px; letter-spacing: 0.06em; color: #22c55e; background: #1b1b2f;
  border: 3px solid #22c55e; outline: none; box-shadow: 4px 4px 0 #0d0d18; image-rendering: pixelated;
}
.field-pixel::placeholder { color: #4b5563; }
.field-pixel:focus { border-color: #fde047; color: #fde047; box-shadow: 4px 4px 0 #0d0d18, 0 0 0 1px #fde047; }`,
  },
];

export default inputs;
