import type { ComponentEntry } from "@/data/types";

// Modals are shown in their open state (overlay + dialog) so the design is
// visible in the preview. Wire the open/close with a dialog element or state.
const modals: ComponentEntry[] = [
  {
    id: "modals-minimal-confirm",
    slug: "minimal-confirm",
    category: "modals",
    style: "minimal",
    title: { ko: "미니멀 확인", en: "Minimal Confirm" },
    description: {
      ko: "제목·설명·액션 버튼으로 구성된 깔끔한 확인 모달입니다.",
      en: "A clean confirmation modal with a title, description and actions.",
    },
    tags: ["modal", "dialog", "confirm", "minimal"],
    featured: true,
    previewBackground: "#e2e8f0",
    html: `<div class="modal-minimal">
  <h3>변경 사항을 저장할까요?</h3>
  <p>저장하지 않으면 작성한 내용이 사라집니다.</p>
  <div class="modal-minimal__actions">
    <button class="ghost">취소</button>
    <button class="primary">저장</button>
  </div>
</div>`,
    css: `.modal-minimal {
  width: 300px; padding: 24px; border-radius: 16px; background: #fff;
  box-shadow: 0 20px 50px rgba(15,23,42,0.25);
}
.modal-minimal h3 { margin: 0 0 8px; font-size: 18px; font-weight: 700; color: #0f172a; }
.modal-minimal p { margin: 0 0 20px; font-size: 14px; line-height: 1.6; color: #64748b; }
.modal-minimal__actions { display: flex; justify-content: flex-end; gap: 8px; }
.modal-minimal button { padding: 9px 18px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; border: none; }
.modal-minimal .ghost { background: #f1f5f9; color: #475569; }
.modal-minimal .primary { background: #0f172a; color: #fff; }`,
  },
  {
    id: "modals-glass-modal",
    slug: "glass-modal",
    category: "modals",
    style: "glassmorphism",
    title: { ko: "글래스 모달", en: "Glass Modal" },
    description: {
      ko: "배경이 비치는 반투명 유리 질감의 모달입니다.",
      en: "A translucent frosted-glass modal.",
    },
    tags: ["modal", "glass", "blur", "dialog"],
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<div class="modal-glass">
  <h3>프리미엄 잠금 해제</h3>
  <p>모든 컴포넌트를 무제한으로 사용하세요.</p>
  <button>업그레이드</button>
</div>`,
    css: `.modal-glass {
  width: 300px; padding: 26px; border-radius: 18px; color: #fff; text-align: center;
  border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.16);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.modal-glass h3 { margin: 0 0 8px; font-size: 19px; font-weight: 700; }
.modal-glass p { margin: 0 0 20px; font-size: 14px; opacity: 0.9; }
.modal-glass button { padding: 10px 22px; border: none; border-radius: 10px; font-weight: 600; color: #6366f1; background: #fff; cursor: pointer; }`,
  },
  {
    id: "modals-gradient-promo",
    slug: "gradient-promo",
    category: "modals",
    style: "gradient",
    title: { ko: "그라데이션 프로모", en: "Gradient Promo" },
    description: {
      ko: "그라데이션 헤더가 있는 프로모션 모달입니다.",
      en: "A promotional modal with a gradient header.",
    },
    tags: ["modal", "gradient", "promo", "dialog"],
    previewBackground: "#e2e8f0",
    html: `<div class="modal-promo">
  <div class="modal-promo__head">🎉 한정 혜택</div>
  <div class="modal-promo__body">
    <p>지금 가입하면 첫 달 무료!</p>
    <button>시작하기</button>
  </div>
</div>`,
    css: `.modal-promo {
  width: 290px; border-radius: 16px; overflow: hidden; background: #fff;
  box-shadow: 0 20px 50px rgba(15,23,42,0.25);
}
.modal-promo__head {
  padding: 22px; text-align: center; font-size: 18px; font-weight: 800; color: #fff;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
}
.modal-promo__body { padding: 22px; text-align: center; }
.modal-promo__body p { margin: 0 0 16px; font-size: 14px; color: #475569; }
.modal-promo__body button { padding: 10px 22px; border: none; border-radius: 10px; font-weight: 700; color: #fff; background: linear-gradient(135deg, #7c3aed, #ec4899); cursor: pointer; }`,
  },
  {
    id: "modals-pixel-dialog",
    slug: "pixel-dialog",
    category: "modals",
    style: "pixel",
    title: { ko: "픽셀 다이얼로그", en: "Pixel Dialog" },
    description: {
      ko: "각진 픽셀 테두리의 레트로 게임 스타일 다이얼로그입니다.",
      en: "A retro 8-bit game dialog with a blocky pixel border.",
    },
    tags: ["modal", "pixel", "8bit", "game"],
    featured: true,
    previewBackground: "#0d0d18",
    html: `<div class="modal-pixel">
  <p>QUEST COMPLETE!</p>
  <span>+120 XP</span>
  <button>OK</button>
</div>`,
    css: `.modal-pixel {
  width: 280px; padding: 22px; text-align: center;
  font-family: ui-monospace, "Courier New", monospace; color: #e2e8f0;
  background: #1b1b2f; border: 4px solid #e2e8f0;
  box-shadow: 0 0 0 4px #0d0d18, 8px 8px 0 0 rgba(34,197,94,0.6);
  image-rendering: pixelated;
}
.modal-pixel p { margin: 0 0 8px; font-size: 16px; font-weight: 700; color: #22c55e; letter-spacing: 0.06em; }
.modal-pixel span { display: block; margin-bottom: 18px; font-size: 13px; color: #fde047; }
.modal-pixel button {
  padding: 10px 24px; font-family: inherit; font-weight: 700; color: #0d0d18; background: #22c55e;
  border: 3px solid #e2e8f0; cursor: pointer; box-shadow: 4px 4px 0 #0d0d18;
}
.modal-pixel button:active { transform: translate(4px,4px); box-shadow: 0 0 0 #0d0d18; }`,
  },
];

export default modals;
