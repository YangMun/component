import type { ComponentEntry } from "@/data/types";

// Dropdowns are shown open so the menu is visible in the preview.
const dropdowns: ComponentEntry[] = [
  {
    id: "dropdowns-minimal-menu",
    slug: "minimal-menu",
    category: "dropdowns",
    style: "minimal",
    title: { ko: "미니멀 메뉴", en: "Minimal Menu" },
    description: {
      ko: "아이콘과 함께 항목이 정렬된 깔끔한 드롭다운 메뉴입니다.",
      en: "A clean dropdown menu with icon-aligned items.",
    },
    tags: ["dropdown", "menu", "minimal", "list"],
    featured: true,
    html: `<div class="dd-minimal">
  <a>👤 프로필</a>
  <a>⚙️ 설정</a>
  <a>💳 결제</a>
  <a class="danger">🚪 로그아웃</a>
</div>`,
    css: `.dd-minimal {
  width: 200px; padding: 6px; border-radius: 12px; background: #fff;
  border: 1px solid #eef2f7; box-shadow: 0 12px 28px rgba(15,23,42,0.14);
}
.dd-minimal a {
  display: block; padding: 9px 12px; border-radius: 8px; font-size: 14px; color: #334155;
  cursor: pointer; transition: background 0.15s ease;
}
.dd-minimal a:hover { background: #f1f5f9; }
.dd-minimal .danger { color: #dc2626; }`,
  },
  {
    id: "dropdowns-glass-dropdown",
    slug: "glass-dropdown",
    category: "dropdowns",
    style: "glassmorphism",
    title: { ko: "글래스 드롭다운", en: "Glass Dropdown" },
    description: {
      ko: "배경이 비치는 반투명 유리 질감의 드롭다운입니다.",
      en: "A translucent frosted-glass dropdown.",
    },
    tags: ["dropdown", "glass", "blur", "menu"],
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<div class="dd-glass">
  <a>새로 만들기</a>
  <a>가져오기</a>
  <a>내보내기</a>
</div>`,
    css: `.dd-glass {
  width: 200px; padding: 6px; border-radius: 14px; color: #fff;
  border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.16);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.2);
}
.dd-glass a {
  display: block; padding: 9px 12px; border-radius: 9px; font-size: 14px; cursor: pointer;
  transition: background 0.15s ease;
}
.dd-glass a:hover { background: rgba(255,255,255,0.25); }`,
  },
  {
    id: "dropdowns-neon-dropdown",
    slug: "neon-dropdown",
    category: "dropdowns",
    style: "neon",
    title: { ko: "네온 드롭다운", en: "Neon Dropdown" },
    description: {
      ko: "어두운 배경에서 네온 테두리가 빛나는 드롭다운입니다.",
      en: "A dropdown with a glowing neon border on a dark background.",
    },
    tags: ["dropdown", "neon", "glow", "menu"],
    previewBackground: "#0a0a14",
    html: `<div class="dd-neon">
  <a>STATUS</a>
  <a>CONSOLE</a>
  <a>LOGOUT</a>
</div>`,
    css: `.dd-neon {
  width: 200px; padding: 6px; border-radius: 10px; background: #11111f;
  border: 1px solid #22d3ee; box-shadow: 0 0 18px rgba(34,211,238,0.4);
}
.dd-neon a {
  display: block; padding: 9px 12px; border-radius: 6px; font-size: 13px; font-weight: 600;
  letter-spacing: 0.05em; color: #94a3b8; cursor: pointer; transition: all 0.15s ease;
}
.dd-neon a:hover { color: #22d3ee; background: rgba(34,211,238,0.1); text-shadow: 0 0 8px rgba(34,211,238,0.8); }`,
  },
  {
    id: "dropdowns-neumorph-dropdown",
    slug: "neumorph-dropdown",
    category: "dropdowns",
    style: "neumorphism",
    title: { ko: "뉴모프 드롭다운", en: "Neumorph Dropdown" },
    description: {
      ko: "부드러운 음영의 뉴모피즘 드롭다운 메뉴입니다.",
      en: "A neumorphic dropdown menu with soft shadows.",
    },
    tags: ["dropdown", "neumorphism", "soft", "menu"],
    previewBackground: "#e0e5ec",
    html: `<div class="dd-neumorph">
  <a>대시보드</a>
  <a>리포트</a>
  <a>팀</a>
</div>`,
    css: `.dd-neumorph {
  width: 200px; padding: 10px; border-radius: 16px; background: #e0e5ec;
  box-shadow: 8px 8px 16px #b8bcc4, -8px -8px 16px #ffffff;
}
.dd-neumorph a {
  display: block; padding: 10px 12px; border-radius: 10px; font-size: 14px; font-weight: 600;
  color: #6b7280; cursor: pointer; transition: all 0.15s ease;
}
.dd-neumorph a:hover { color: #7c3aed; box-shadow: inset 3px 3px 6px #b8bcc4, inset -3px -3px 6px #ffffff; }`,
  },
  {
    id: "dropdowns-click-menu",
    slug: "click-menu",
    category: "dropdowns",
    style: "minimal",
    title: { ko: "클릭 메뉴", en: "Click Menu" },
    description: {
      ko: "버튼을 누르면 메뉴가 펼쳐지고 다시 누르면 닫히는 인터랙티브 드롭다운입니다(JS).",
      en: "An interactive dropdown that opens and closes when the button is clicked (JS).",
    },
    tags: ["interactive", "dropdown", "toggle", "menu"],
    html: `<div class="dd-click">
  <button class="dd-click__btn" type="button" aria-expanded="false">메뉴 ▾</button>
  <div class="dd-click__menu">
    <a>새 파일</a><a>열기</a><a>저장</a>
  </div>
</div>`,
    css: `.dd-click { position: relative; display: inline-block; }
.dd-click__btn { padding: 10px 18px; border: 1px solid #e2e8f0; border-radius: 10px; font-size: 14px; font-weight: 600; color: #0f172a; background: #fff; cursor: pointer; }
.dd-click__menu {
  position: absolute; top: calc(100% + 6px); left: 0; width: 160px; padding: 6px; border-radius: 12px;
  background: #fff; border: 1px solid #eef2f7; box-shadow: 0 12px 28px rgba(15,23,42,0.14);
  opacity: 0; transform: translateY(-6px); pointer-events: none; transition: opacity 0.15s ease, transform 0.15s ease;
}
.dd-click__menu.open { opacity: 1; transform: translateY(0); pointer-events: auto; }
.dd-click__menu a { display: block; padding: 9px 12px; border-radius: 8px; font-size: 14px; color: #334155; cursor: pointer; }
.dd-click__menu a:hover { background: #f1f5f9; }`,
    js: `const root = document.querySelector('.dd-click');
const btn = root.querySelector('.dd-click__btn');
const menu = root.querySelector('.dd-click__menu');
btn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', (e) => {
  if (!root.contains(e.target)) { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
});`,
  },
];

export default dropdowns;
