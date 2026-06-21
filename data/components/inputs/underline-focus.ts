import type { ComponentEntry } from "@/data/types";

const component: ComponentEntry = {
  id: "inputs-underline-focus",
  slug: "underline-focus",
  category: "inputs",
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
  css: `.field-underline {
  position: relative;
  width: 240px;
}
.field-underline__input {
  width: 100%;
  padding: 8px 2px;
  border: none;
  border-bottom: 1px solid #cbd5e1;
  font-size: 15px;
  color: #0f172a;
  background: transparent;
  outline: none;
}
.field-underline__bar {
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 2px;
  width: 0;
  background: #7c3aed;
  transition: width 0.25s ease, left 0.25s ease;
}
.field-underline__input:focus ~ .field-underline__bar {
  left: 0;
  width: 100%;
}`,
};

export default component;
