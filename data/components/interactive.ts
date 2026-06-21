import type { ComponentEntry } from "@/data/types";

// Interactive components. Each ships vanilla JS (the `js` field) that runs in
// the sandboxed preview iframe and is shown as a copyable "JS" tab. Scripts are
// scoped to the component's root class so the snippet works when pasted as-is.
const interactive: ComponentEntry[] = [
  {
    id: "interactive-counter-button",
    slug: "counter-button",
    category: "interactive",
    style: "minimal",
    title: { ko: "카운터 버튼", en: "Counter Button" },
    description: {
      ko: "클릭할 때마다 숫자가 1씩 올라가는 가장 기본적인 인터랙티브 버튼입니다.",
      en: "The most basic interactive button: the number goes up by one on each click.",
    },
    tags: ["interactive", "counter", "click", "state"],
    featured: true,
    html: `<button class="ic-counter" type="button">클릭 <span class="ic-counter__n">0</span></button>`,
    css: `.ic-counter {
  padding: 12px 24px; border: none; border-radius: 10px; font-size: 16px; font-weight: 600;
  color: #fff; background: #0f172a; cursor: pointer; transition: transform 0.1s ease;
}
.ic-counter:active { transform: scale(0.96); }
.ic-counter__n {
  display: inline-block; min-width: 22px; margin-left: 4px; padding: 1px 8px;
  border-radius: 9999px; background: rgba(255,255,255,0.2); font-variant-numeric: tabular-nums;
}`,
    js: `const btn = document.querySelector('.ic-counter');
const out = btn.querySelector('.ic-counter__n');
let count = 0;
btn.addEventListener('click', () => {
  count += 1;
  out.textContent = count;
});`,
  },
  {
    id: "interactive-like-heart",
    slug: "like-heart",
    category: "interactive",
    style: "gradient",
    title: { ko: "좋아요 하트", en: "Like Heart" },
    description: {
      ko: "클릭하면 하트가 채워지고 튀어오르며 좋아요 수가 바뀌는 토글 버튼입니다.",
      en: "A toggle that fills and pops the heart and updates the like count on click.",
    },
    tags: ["interactive", "like", "toggle", "animation"],
    featured: true,
    html: `<button class="ic-like" type="button" aria-pressed="false">
  <span class="ic-like__icon">♥</span>
  <span class="ic-like__count">128</span>
</button>`,
    css: `.ic-like {
  display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px;
  border: 1px solid #e2e8f0; border-radius: 9999px; background: #fff; cursor: pointer;
  font-size: 15px; font-weight: 600; color: #64748b; transition: border-color 0.2s ease;
}
.ic-like__icon { font-size: 18px; color: #cbd5e1; transition: transform 0.2s ease, color 0.2s ease; }
.ic-like.is-liked { border-color: #ec4899; color: #ec4899; }
.ic-like.is-liked .ic-like__icon { color: #ec4899; animation: ic-like-pop 0.35s ease; }
@keyframes ic-like-pop { 0% { transform: scale(1); } 40% { transform: scale(1.4); } 100% { transform: scale(1); } }`,
    js: `const el = document.querySelector('.ic-like');
const count = el.querySelector('.ic-like__count');
const base = 128;
let liked = false;
el.addEventListener('click', () => {
  liked = !liked;
  el.classList.toggle('is-liked', liked);
  el.setAttribute('aria-pressed', String(liked));
  count.textContent = base + (liked ? 1 : 0);
});`,
  },
  {
    id: "interactive-star-rating",
    slug: "star-rating",
    category: "interactive",
    style: "minimal",
    title: { ko: "별점 평가", en: "Star Rating" },
    description: {
      ko: "호버로 미리보고 클릭해 점수를 정하는 별점 평가 컴포넌트입니다.",
      en: "A star rating you preview on hover and set on click.",
    },
    tags: ["interactive", "rating", "stars", "hover"],
    html: `<div class="ic-stars" role="radiogroup" aria-label="별점">
  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
</div>`,
    css: `.ic-stars { display: inline-flex; gap: 4px; font-size: 30px; cursor: pointer; }
.ic-stars span { color: #e2e8f0; transition: color 0.12s ease, transform 0.12s ease; }
.ic-stars span.on { color: #f59e0b; }
.ic-stars span:hover { transform: scale(1.15); }`,
    js: `const root = document.querySelector('.ic-stars');
const stars = Array.from(root.querySelectorAll('span'));
let current = 0;
function paint(n) { stars.forEach((s, i) => s.classList.toggle('on', i < n)); }
stars.forEach((s, i) => {
  s.addEventListener('mouseenter', () => paint(i + 1));
  s.addEventListener('click', () => { current = i + 1; paint(current); });
});
root.addEventListener('mouseleave', () => paint(current));`,
  },
  {
    id: "interactive-quantity-stepper",
    slug: "quantity-stepper",
    category: "interactive",
    style: "neumorphism",
    title: { ko: "수량 조절기", en: "Quantity Stepper" },
    description: {
      ko: "− / + 버튼으로 수량을 조절하는 뉴모피즘 스타일 인터랙티브 컨트롤입니다.",
      en: "A neumorphic control that adjusts a quantity with − / + buttons.",
    },
    tags: ["interactive", "stepper", "quantity", "input"],
    previewBackground: "#e0e5ec",
    html: `<div class="ic-qty">
  <button type="button" data-dir="-1" aria-label="감소">−</button>
  <span class="ic-qty__n">1</span>
  <button type="button" data-dir="1" aria-label="증가">+</button>
</div>`,
    css: `.ic-qty { display: inline-flex; align-items: center; gap: 14px; padding: 8px; border-radius: 16px; background: #e0e5ec; box-shadow: 5px 5px 10px #b8bcc4, -5px -5px 10px #ffffff; }
.ic-qty button {
  width: 38px; height: 38px; border: none; border-radius: 12px; font-size: 20px; font-weight: 700;
  color: #7c3aed; background: #e0e5ec; cursor: pointer; box-shadow: 3px 3px 6px #b8bcc4, -3px -3px 6px #ffffff;
}
.ic-qty button:active { box-shadow: inset 3px 3px 6px #b8bcc4, inset -3px -3px 6px #ffffff; }
.ic-qty__n { min-width: 28px; text-align: center; font-size: 18px; font-weight: 700; color: #475569; font-variant-numeric: tabular-nums; }`,
    js: `const root = document.querySelector('.ic-qty');
const out = root.querySelector('.ic-qty__n');
let value = 1;
root.querySelectorAll('button').forEach((b) => {
  b.addEventListener('click', () => {
    value = Math.max(0, value + Number(b.dataset.dir));
    out.textContent = value;
  });
});`,
  },
  {
    id: "interactive-magnetic-button",
    slug: "magnetic-button",
    category: "interactive",
    style: "neon",
    title: { ko: "마그네틱 버튼", en: "Magnetic Button" },
    description: {
      ko: "커서를 따라 버튼이 살짝 끌려오는 마그네틱 호버 효과입니다.",
      en: "A magnetic hover effect where the button drifts toward the cursor.",
    },
    tags: ["interactive", "magnetic", "hover", "cursor"],
    featured: true,
    previewBackground: "#0a0a14",
    html: `<button class="ic-magnet" type="button">HOVER ME</button>`,
    css: `.ic-magnet {
  padding: 16px 34px; border: 1px solid #22d3ee; border-radius: 12px; font-size: 15px;
  font-weight: 700; letter-spacing: 0.06em; color: #22d3ee; background: rgba(34,211,238,0.08);
  cursor: pointer; box-shadow: 0 0 18px rgba(34,211,238,0.4);
  transition: transform 0.15s ease-out, box-shadow 0.2s ease;
}
.ic-magnet:hover { box-shadow: 0 0 28px rgba(34,211,238,0.7); }`,
    js: `const m = document.querySelector('.ic-magnet');
m.addEventListener('mousemove', (e) => {
  const r = m.getBoundingClientRect();
  const x = e.clientX - r.left - r.width / 2;
  const y = e.clientY - r.top - r.height / 2;
  m.style.transform = 'translate(' + x * 0.3 + 'px,' + y * 0.3 + 'px)';
});
m.addEventListener('mouseleave', () => { m.style.transform = 'translate(0,0)'; });`,
  },
  {
    id: "interactive-password-toggle",
    slug: "password-toggle",
    category: "interactive",
    style: "minimal",
    title: { ko: "비밀번호 표시 토글", en: "Password Toggle" },
    description: {
      ko: "눈 아이콘을 눌러 비밀번호를 보이거나 숨기는 입력창입니다.",
      en: "A password field that shows or hides the value via an eye icon.",
    },
    tags: ["interactive", "password", "toggle", "form"],
    html: `<div class="ic-pw">
  <input class="ic-pw__input" type="password" value="secret123" aria-label="비밀번호" />
  <button class="ic-pw__btn" type="button" aria-label="표시 전환">👁</button>
</div>`,
    css: `.ic-pw { position: relative; width: 240px; }
.ic-pw__input { width: 100%; padding: 12px 44px 12px 14px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 15px; color: #0f172a; outline: none; }
.ic-pw__input:focus { border-color: #2563eb; }
.ic-pw__btn { position: absolute; right: 6px; top: 50%; transform: translateY(-50%); border: none; background: transparent; font-size: 17px; cursor: pointer; opacity: 0.6; }
.ic-pw__btn.on { opacity: 1; }`,
    js: `const root = document.querySelector('.ic-pw');
const input = root.querySelector('.ic-pw__input');
const btn = root.querySelector('.ic-pw__btn');
btn.addEventListener('click', () => {
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  btn.classList.toggle('on', show);
});`,
  },
  {
    id: "interactive-char-counter",
    slug: "char-counter",
    category: "interactive",
    style: "material",
    title: { ko: "글자 수 카운터", en: "Character Counter" },
    description: {
      ko: "입력하는 동안 남은 글자 수가 실시간으로 갱신되는 텍스트 영역입니다.",
      en: "A textarea whose remaining character count updates live as you type.",
    },
    tags: ["interactive", "counter", "textarea", "input"],
    html: `<div class="ic-cc">
  <textarea class="ic-cc__area" maxlength="100" placeholder="메시지를 입력하세요..."></textarea>
  <span class="ic-cc__count">0 / 100</span>
</div>`,
    css: `.ic-cc { width: 260px; }
.ic-cc__area { width: 100%; height: 70px; padding: 12px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 14px; resize: none; outline: none; font-family: inherit; }
.ic-cc__area:focus { border-color: #2563eb; }
.ic-cc__count { display: block; margin-top: 6px; text-align: right; font-size: 12px; color: #94a3b8; font-variant-numeric: tabular-nums; }
.ic-cc__count.full { color: #dc2626; }`,
    js: `const root = document.querySelector('.ic-cc');
const area = root.querySelector('.ic-cc__area');
const out = root.querySelector('.ic-cc__count');
const max = 100;
area.addEventListener('input', () => {
  out.textContent = area.value.length + ' / ' + max;
  out.classList.toggle('full', area.value.length >= max);
});`,
  },
  {
    id: "interactive-typewriter",
    slug: "typewriter",
    category: "interactive",
    style: "minimal",
    title: { ko: "타이프라이터", en: "Typewriter" },
    description: {
      ko: "글자가 한 자씩 입력되고 지워지길 반복하는 타이핑 애니메이션입니다.",
      en: "A typing animation that types and deletes text on a loop.",
    },
    tags: ["interactive", "typewriter", "animation", "text"],
    html: `<div class="ic-type">
  <span class="ic-type__text"></span><span class="ic-type__caret"></span>
</div>`,
    css: `.ic-type { font-size: 22px; font-weight: 700; color: #0f172a; font-family: ui-monospace, monospace; }
.ic-type__caret { display: inline-block; width: 2px; height: 1.1em; margin-left: 2px; background: #7c3aed; vertical-align: text-bottom; animation: ic-type-blink 0.7s steps(1) infinite; }
@keyframes ic-type-blink { 50% { opacity: 0; } }`,
    js: `const out = document.querySelector('.ic-type__text');
const words = ['디자인', '인터랙션', 'Component'];
let w = 0, i = 0, deleting = false;
function tick() {
  const word = words[w];
  i += deleting ? -1 : 1;
  out.textContent = word.slice(0, i);
  if (!deleting && i === word.length) { deleting = true; setTimeout(tick, 1100); return; }
  if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; }
  setTimeout(tick, deleting ? 60 : 130);
}
tick();`,
  },
  {
    id: "interactive-animated-counter",
    slug: "animated-counter",
    category: "interactive",
    style: "gradient",
    title: { ko: "카운트업 숫자", en: "Count-up Number" },
    description: {
      ko: "버튼을 누르면 0부터 목표 숫자까지 부드럽게 올라가는 카운터입니다.",
      en: "A counter that smoothly counts up from zero to a target on click.",
    },
    tags: ["interactive", "counter", "animation", "number"],
    html: `<div class="ic-countup">
  <span class="ic-countup__n">0</span>
  <button type="button">다시 재생</button>
</div>`,
    css: `.ic-countup { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.ic-countup__n { font-size: 40px; font-weight: 800; font-variant-numeric: tabular-nums; background: linear-gradient(135deg, #7c3aed, #ec4899); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
.ic-countup button { padding: 8px 18px; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; color: #fff; background: linear-gradient(135deg, #7c3aed, #ec4899); cursor: pointer; }`,
    js: `const root = document.querySelector('.ic-countup');
const out = root.querySelector('.ic-countup__n');
const btn = root.querySelector('button');
const target = 12500;
function run() {
  let n = 0; const step = target / 45;
  const id = setInterval(() => {
    n += step;
    if (n >= target) { n = target; clearInterval(id); }
    out.textContent = Math.floor(n).toLocaleString();
  }, 22);
}
btn.addEventListener('click', run);
run();`,
  },
  {
    id: "interactive-toast-trigger",
    slug: "toast-trigger",
    category: "interactive",
    style: "material",
    title: { ko: "토스트 트리거", en: "Toast Trigger" },
    description: {
      ko: "버튼을 누르면 토스트 알림이 떴다가 잠시 후 사라집니다.",
      en: "A button that pops a toast notification which auto-dismisses.",
    },
    tags: ["interactive", "toast", "notification", "click"],
    html: `<div class="ic-toast">
  <button type="button">알림 표시</button>
  <div class="ic-toast__msg" role="status">✓ 저장되었습니다</div>
</div>`,
    css: `.ic-toast { position: relative; display: flex; justify-content: center; padding-top: 56px; }
.ic-toast button { padding: 10px 20px; border: none; border-radius: 10px; font-size: 14px; font-weight: 600; color: #fff; background: #2563eb; cursor: pointer; }
.ic-toast__msg { position: absolute; top: 0; left: 50%; transform: translate(-50%, -8px); padding: 10px 16px; border-radius: 10px; background: #0f172a; color: #fff; font-size: 13px; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 0.25s ease, transform 0.25s ease; box-shadow: 0 8px 20px rgba(0,0,0,0.25); }
.ic-toast__msg.show { opacity: 1; transform: translate(-50%, 0); }`,
    js: `const root = document.querySelector('.ic-toast');
const btn = root.querySelector('button');
const toast = root.querySelector('.ic-toast__msg');
let timer;
btn.addEventListener('click', () => {
  toast.classList.add('show');
  clearTimeout(timer);
  timer = setTimeout(() => toast.classList.remove('show'), 1800);
});`,
  },
  {
    id: "interactive-tab-switcher",
    slug: "tab-switcher",
    category: "interactive",
    style: "glassmorphism",
    title: { ko: "탭 전환기", en: "Tab Switcher" },
    description: {
      ko: "탭을 클릭하면 해당 패널의 내용이 실제로 바뀌는 자바스크립트 탭입니다.",
      en: "JavaScript tabs that actually swap the visible panel content on click.",
    },
    tags: ["interactive", "tabs", "panel", "switch"],
    featured: true,
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<div class="ic-tabs">
  <div class="ic-tabs__head">
    <button data-tab="a" class="on">개요</button>
    <button data-tab="b">상세</button>
    <button data-tab="c">리뷰</button>
  </div>
  <div data-panel="a" class="ic-tabs__panel on">제품 개요 내용입니다.</div>
  <div data-panel="b" class="ic-tabs__panel">자세한 사양이 여기 표시됩니다.</div>
  <div data-panel="c" class="ic-tabs__panel">사용자 리뷰가 여기 표시됩니다.</div>
</div>`,
    css: `.ic-tabs { width: 280px; border-radius: 14px; padding: 8px; color: #fff; border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.16); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
.ic-tabs__head { display: flex; gap: 4px; margin-bottom: 8px; }
.ic-tabs__head button { flex: 1; padding: 8px; border: none; border-radius: 9px; font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.8); background: transparent; cursor: pointer; }
.ic-tabs__head button.on { color: #fff; background: rgba(255,255,255,0.3); }
.ic-tabs__panel { display: none; padding: 12px; font-size: 14px; line-height: 1.6; }
.ic-tabs__panel.on { display: block; }`,
    js: `const root = document.querySelector('.ic-tabs');
const tabs = Array.from(root.querySelectorAll('[data-tab]'));
const panels = Array.from(root.querySelectorAll('[data-panel]'));
tabs.forEach((t) => t.addEventListener('click', () => {
  tabs.forEach((x) => x.classList.remove('on'));
  panels.forEach((p) => p.classList.remove('on'));
  t.classList.add('on');
  root.querySelector('[data-panel="' + t.dataset.tab + '"]').classList.add('on');
}));`,
  },
  {
    id: "interactive-color-theme",
    slug: "color-theme",
    category: "interactive",
    style: "claymorphism",
    title: { ko: "색상 테마 선택", en: "Color Theme Picker" },
    description: {
      ko: "색상 스와치를 누르면 미리보기 카드의 색이 즉시 바뀌는 컴포넌트입니다.",
      en: "Tap a color swatch to instantly recolor the preview card.",
    },
    tags: ["interactive", "color", "theme", "picker"],
    previewBackground: "#f1f5f9",
    html: `<div class="ic-theme">
  <div class="ic-theme__card">Aa</div>
  <div class="ic-theme__swatches">
    <button data-color="#a78bfa" style="background:#a78bfa" aria-label="보라"></button>
    <button data-color="#f472b6" style="background:#f472b6" aria-label="분홍"></button>
    <button data-color="#34d399" style="background:#34d399" aria-label="초록"></button>
    <button data-color="#fbbf24" style="background:#fbbf24" aria-label="노랑"></button>
  </div>
</div>`,
    css: `.ic-theme { display: flex; flex-direction: column; align-items: center; gap: 14px; }
.ic-theme__card { display: grid; place-items: center; width: 90px; height: 64px; border-radius: 20px; font-size: 24px; font-weight: 800; color: #fff; background: #a78bfa; box-shadow: inset 4px 4px 8px rgba(255,255,255,0.4), inset -4px -4px 8px rgba(0,0,0,0.15), 8px 8px 18px rgba(0,0,0,0.12); transition: background 0.25s ease; }
.ic-theme__swatches { display: flex; gap: 10px; }
.ic-theme__swatches button { width: 28px; height: 28px; border: 2px solid #fff; border-radius: 50%; cursor: pointer; box-shadow: 0 2px 6px rgba(0,0,0,0.2); }
.ic-theme__swatches button:hover { transform: scale(1.12); }`,
    js: `const root = document.querySelector('.ic-theme');
const card = root.querySelector('.ic-theme__card');
root.querySelectorAll('[data-color]').forEach((b) => {
  b.addEventListener('click', () => { card.style.background = b.dataset.color; });
});`,
  },
  {
    id: "interactive-carousel-dots",
    slug: "carousel-dots",
    category: "interactive",
    style: "gradient",
    title: { ko: "캐러셀 도트", en: "Carousel Dots" },
    description: {
      ko: "도트를 누르면 해당 슬라이드로 부드럽게 전환되는 캐러셀입니다(JS).",
      en: "A carousel that slides smoothly to the chosen slide when a dot is clicked (JS).",
    },
    tags: ["interactive", "carousel", "slider", "dots"],
    featured: true,
    html: `<div class="ic-carousel">
  <div class="ic-carousel__track">
    <div style="background:#7c3aed">1</div>
    <div style="background:#ec4899">2</div>
    <div style="background:#22d3ee">3</div>
  </div>
  <div class="ic-carousel__dots">
    <button class="on" data-i="0" aria-label="1"></button>
    <button data-i="1" aria-label="2"></button>
    <button data-i="2" aria-label="3"></button>
  </div>
</div>`,
    css: `.ic-carousel { width: 240px; }
.ic-carousel__track { display: flex; overflow: hidden; border-radius: 14px; }
.ic-carousel__track > div { min-width: 100%; height: 110px; display: grid; place-items: center; color: #fff; font-size: 32px; font-weight: 800; transition: none; }
.ic-carousel__track { scroll-behavior: smooth; }
.ic-carousel__inner { display: flex; transition: transform 0.4s ease; }
.ic-carousel__dots { display: flex; justify-content: center; gap: 8px; margin-top: 12px; }
.ic-carousel__dots button { width: 9px; height: 9px; border: none; border-radius: 50%; background: #cbd5e1; cursor: pointer; transition: all 0.2s ease; }
.ic-carousel__dots button.on { width: 22px; border-radius: 9999px; background: linear-gradient(90deg, #7c3aed, #ec4899); }`,
    js: `const root = document.querySelector('.ic-carousel');
const track = root.querySelector('.ic-carousel__track');
const slides = Array.from(track.children);
const dots = Array.from(root.querySelectorAll('.ic-carousel__dots button'));
function go(i) {
  track.scrollTo({ left: slides[i].offsetLeft, behavior: 'smooth' });
  dots.forEach((d, j) => d.classList.toggle('on', i === j));
}
dots.forEach((d) => d.addEventListener('click', () => go(Number(d.dataset.i))));`,
  },
  {
    id: "interactive-dark-mode-switch",
    slug: "dark-mode-switch",
    category: "interactive",
    style: "minimal",
    title: { ko: "다크모드 스위치", en: "Dark Mode Switch" },
    description: {
      ko: "해/달 토글을 누르면 미리보기 카드가 라이트·다크로 바뀝니다(JS).",
      en: "A sun/moon toggle that flips the preview card between light and dark (JS).",
    },
    tags: ["interactive", "dark-mode", "toggle", "theme"],
    html: `<div class="ic-dark" data-theme="light">
  <button class="ic-dark__btn" type="button" aria-label="테마 전환"><span>🌙</span></button>
  <div class="ic-dark__card">Aa</div>
</div>`,
    css: `.ic-dark { display: flex; flex-direction: column; align-items: center; gap: 14px; }
.ic-dark__btn { width: 48px; height: 48px; border: none; border-radius: 50%; font-size: 22px; cursor: pointer; background: #e2e8f0; transition: background 0.3s ease; }
.ic-dark__card { display: grid; place-items: center; width: 120px; height: 70px; border-radius: 14px; font-size: 22px; font-weight: 800; transition: all 0.3s ease; }
.ic-dark[data-theme="light"] .ic-dark__card { background: #f8fafc; color: #0f172a; box-shadow: inset 0 0 0 1px #e2e8f0; }
.ic-dark[data-theme="dark"] .ic-dark__card { background: #0f172a; color: #f8fafc; }
.ic-dark[data-theme="dark"] .ic-dark__btn { background: #334155; }`,
    js: `const root = document.querySelector('.ic-dark');
const btn = root.querySelector('.ic-dark__btn');
const icon = btn.querySelector('span');
btn.addEventListener('click', () => {
  const dark = root.dataset.theme === 'light';
  root.dataset.theme = dark ? 'dark' : 'light';
  icon.textContent = dark ? '☀️' : '🌙';
});`,
  },
];

export default interactive;
