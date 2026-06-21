import type { ComponentEntry } from "@/data/types";

const component: ComponentEntry = {
  id: "inputs-floating-label",
  slug: "floating-label",
  category: "inputs",
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
  css: `.field-floating {
  position: relative;
  width: 240px;
}
.field-floating__input {
  width: 100%;
  padding: 18px 12px 6px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 15px;
  color: #0f172a;
  background: #fff;
  outline: none;
  transition: border-color 0.2s ease;
}
.field-floating__input:focus {
  border-color: #2563eb;
}
.field-floating__label {
  position: absolute;
  left: 12px;
  top: 13px;
  font-size: 15px;
  color: #94a3b8;
  pointer-events: none;
  transition: all 0.15s ease;
}
.field-floating__input:focus + .field-floating__label,
.field-floating__input:not(:placeholder-shown) + .field-floating__label {
  top: 5px;
  font-size: 11px;
  color: #2563eb;
}`,
};

export default component;
