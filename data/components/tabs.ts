import type { ComponentEntry } from "@/data/types";

// Tabs use radio inputs so the active state works with no JavaScript.
const tabs: ComponentEntry[] = [
  {
    id: "tabs-underline-tabs",
    slug: "underline-tabs",
    category: "tabs",
    style: "minimal",
    title: { ko: "언더라인 탭", en: "Underline Tabs" },
    description: {
      ko: "선택한 탭 아래에 밑줄이 표시되는 미니멀 탭입니다.",
      en: "Minimal tabs with an underline beneath the active tab.",
    },
    tags: ["tabs", "minimal", "underline", "탭"],
    featured: true,
    html: `<div class="tabs-underline">
  <label><input type="radio" name="tu" checked /><span>홈</span></label>
  <label><input type="radio" name="tu" /><span>프로필</span></label>
  <label><input type="radio" name="tu" /><span>설정</span></label>
</div>`,
    css: `.tabs-underline { display: inline-flex; gap: 4px; border-bottom: 1px solid #e2e8f0; }
.tabs-underline label { cursor: pointer; }
.tabs-underline input { display: none; }
.tabs-underline span {
  display: block; padding: 10px 18px; font-size: 14px; font-weight: 600; color: #64748b;
  border-bottom: 2px solid transparent; margin-bottom: -1px; transition: color 0.2s ease, border-color 0.2s ease;
}
.tabs-underline input:checked + span { color: #0f172a; border-bottom-color: #0f172a; }`,
  },
  {
    id: "tabs-pill-segment",
    slug: "pill-segment",
    category: "tabs",
    style: "gradient",
    title: { ko: "필 세그먼트", en: "Pill Segment" },
    description: {
      ko: "선택 시 그라데이션 알약으로 강조되는 세그먼트 컨트롤입니다.",
      en: "A segmented control where the active item becomes a gradient pill.",
    },
    tags: ["tabs", "gradient", "segment", "pill"],
    html: `<div class="tabs-pill">
  <label><input type="radio" name="tp" checked /><span>월간</span></label>
  <label><input type="radio" name="tp" /><span>연간</span></label>
</div>`,
    css: `.tabs-pill { display: inline-flex; gap: 4px; padding: 5px; border-radius: 9999px; background: #eef2f7; }
.tabs-pill label { cursor: pointer; }
.tabs-pill input { display: none; }
.tabs-pill span {
  display: block; padding: 9px 22px; border-radius: 9999px; font-size: 14px; font-weight: 600; color: #475569;
  transition: color 0.2s ease;
}
.tabs-pill input:checked + span {
  color: #fff; background: linear-gradient(135deg, #7c3aed, #ec4899);
  box-shadow: 0 4px 12px rgba(124,58,237,0.4);
}`,
  },
  {
    id: "tabs-glass-tabs",
    slug: "glass-tabs",
    category: "tabs",
    style: "glassmorphism",
    title: { ko: "글래스 탭", en: "Glass Tabs" },
    description: {
      ko: "배경이 비치는 반투명 유리 질감의 세그먼트 탭입니다.",
      en: "Translucent frosted-glass segmented tabs.",
    },
    tags: ["tabs", "glass", "blur", "segment"],
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<div class="tabs-glass">
  <label><input type="radio" name="tg" checked /><span>전체</span></label>
  <label><input type="radio" name="tg" /><span>사진</span></label>
  <label><input type="radio" name="tg" /><span>영상</span></label>
</div>`,
    css: `.tabs-glass {
  display: inline-flex; gap: 4px; padding: 5px; border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.16);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
}
.tabs-glass label { cursor: pointer; }
.tabs-glass input { display: none; }
.tabs-glass span { display: block; padding: 8px 18px; border-radius: 8px; font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.85); transition: all 0.2s ease; }
.tabs-glass input:checked + span { color: #fff; background: rgba(255,255,255,0.3); }`,
  },
  {
    id: "tabs-neumorph-segment",
    slug: "neumorph-segment",
    category: "tabs",
    style: "neumorphism",
    title: { ko: "뉴모프 세그먼트", en: "Neumorph Segment" },
    description: {
      ko: "선택 시 안쪽으로 눌리는 뉴모피즘 세그먼트 컨트롤입니다.",
      en: "A neumorphic segmented control where the active item presses inward.",
    },
    tags: ["tabs", "neumorphism", "soft", "segment"],
    previewBackground: "#e0e5ec",
    html: `<div class="tabs-neumorph">
  <label><input type="radio" name="tn" checked /><span>일</span></label>
  <label><input type="radio" name="tn" /><span>주</span></label>
  <label><input type="radio" name="tn" /><span>월</span></label>
</div>`,
    css: `.tabs-neumorph {
  display: inline-flex; gap: 6px; padding: 6px; border-radius: 14px; background: #e0e5ec;
  box-shadow: 5px 5px 10px #b8bcc4, -5px -5px 10px #ffffff;
}
.tabs-neumorph label { cursor: pointer; }
.tabs-neumorph input { display: none; }
.tabs-neumorph span { display: block; padding: 8px 18px; border-radius: 9px; font-size: 14px; font-weight: 600; color: #6b7280; transition: all 0.2s ease; }
.tabs-neumorph input:checked + span { color: #7c3aed; box-shadow: inset 3px 3px 6px #b8bcc4, inset -3px -3px 6px #ffffff; }`,
  },
  {
    id: "tabs-brutalist-tabs",
    slug: "brutalist-tabs",
    category: "tabs",
    style: "neobrutalism",
    title: { ko: "브루탈 탭", en: "Brutalist Tabs" },
    description: {
      ko: "두꺼운 테두리와 하드 섀도, 선택 시 색이 채워지는 탭입니다.",
      en: "Tabs with thick borders and hard shadows that fill in when active.",
    },
    tags: ["tabs", "brutalism", "border", "segment"],
    previewBackground: "#bae6fd",
    html: `<div class="tabs-brutalist">
  <label><input type="radio" name="tb" checked /><span>코드</span></label>
  <label><input type="radio" name="tb" /><span>미리보기</span></label>
</div>`,
    css: `.tabs-brutalist { display: inline-flex; gap: 8px; }
.tabs-brutalist label { cursor: pointer; }
.tabs-brutalist input { display: none; }
.tabs-brutalist span {
  display: block; padding: 9px 18px; border: 2px solid #111; border-radius: 3px;
  font-size: 14px; font-weight: 800; color: #111; background: #fff; box-shadow: 3px 3px 0 #111;
  transition: background 0.1s ease;
}
.tabs-brutalist input:checked + span { background: #fde047; }`,
  },
  {
    id: "tabs-threed-tabs",
    slug: "threed-tabs",
    category: "tabs",
    style: "threed",
    title: { ko: "3D 탭", en: "3D Tabs" },
    description: {
      ko: "선택 시 입체적으로 솟아오르는 3D 세그먼트 탭입니다.",
      en: "3D segmented tabs whose active item raises with depth.",
    },
    tags: ["tabs", "3d", "depth", "segment"],
    html: `<div class="tabs-threed">
  <label><input type="radio" name="t3" checked /><span>지금</span></label>
  <label><input type="radio" name="t3" /><span>예약</span></label>
</div>`,
    css: `.tabs-threed { display: inline-flex; gap: 8px; padding: 6px; border-radius: 14px; background: #e2e8f0; }
.tabs-threed label { cursor: pointer; }
.tabs-threed input { display: none; }
.tabs-threed span { display: block; padding: 9px 20px; border-radius: 10px; font-size: 14px; font-weight: 700; color: #64748b; transition: all 0.15s ease; }
.tabs-threed input:checked + span { color: #fff; background: #6366f1; box-shadow: 0 4px 0 #4338ca, 0 6px 10px rgba(0,0,0,0.2); transform: translateY(-2px); }`,
  },
  {
    id: "tabs-outline-tabs",
    slug: "outline-tabs",
    category: "tabs",
    style: "outline",
    title: { ko: "아웃라인 탭", en: "Outline Tabs" },
    description: {
      ko: "선택 시 테두리가 그려지는 라인아트 세그먼트 탭입니다.",
      en: "Line-art segmented tabs where the active item gets a drawn outline.",
    },
    tags: ["tabs", "outline", "line", "segment"],
    html: `<div class="tabs-outline">
  <label><input type="radio" name="to" checked /><span>요약</span></label>
  <label><input type="radio" name="to" /><span>상세</span></label>
  <label><input type="radio" name="to" /><span>활동</span></label>
</div>`,
    css: `.tabs-outline { display: inline-flex; gap: 8px; }
.tabs-outline label { cursor: pointer; }
.tabs-outline input { display: none; }
.tabs-outline span { display: block; padding: 8px 18px; border: 1.5px solid transparent; border-radius: 9999px; font-size: 14px; font-weight: 600; color: #94a3b8; transition: all 0.2s ease; }
.tabs-outline input:checked + span { color: #0f172a; border-color: #0f172a; }`,
  },
  {
    id: "tabs-duotone-tabs",
    slug: "duotone-tabs",
    category: "tabs",
    style: "duotone",
    title: { ko: "듀오톤 탭", en: "Duotone Tabs" },
    description: {
      ko: "두 색의 강한 대비로 선택을 표시하는 듀오톤 세그먼트 탭입니다.",
      en: "Duotone segmented tabs that mark the active item with two contrasting colors.",
    },
    tags: ["tabs", "duotone", "contrast", "segment"],
    html: `<div class="tabs-duotone">
  <label><input type="radio" name="td" checked /><span>왼쪽</span></label>
  <label><input type="radio" name="td" /><span>오른쪽</span></label>
</div>`,
    css: `.tabs-duotone { display: inline-flex; padding: 4px; border-radius: 10px; background: #ec4899; }
.tabs-duotone label { cursor: pointer; }
.tabs-duotone input { display: none; }
.tabs-duotone span { display: block; padding: 9px 22px; border-radius: 8px; font-size: 14px; font-weight: 700; color: #fff; transition: all 0.2s ease; }
.tabs-duotone input:checked + span { color: #fff; background: #4338ca; }`,
  },
];

export default tabs;
