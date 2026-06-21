import type { Style } from "./types";

// Design styles (trends / concepts). A component references one style id.
// Add a style here and tag components with its id to make it browsable.
export const styles: Style[] = [
  {
    id: "glassmorphism",
    icon: "🧊",
    accent: "#38bdf8",
    title: { ko: "글래스모피즘", en: "Glassmorphism" },
    description: {
      ko: "반투명 유리와 블러로 깊이를 표현하는 스타일. SaaS·대시보드에 잘 어울립니다.",
      en: "Translucent, blurred ‘frosted glass’ surfaces. Great for SaaS and dashboards.",
    },
  },
  {
    id: "neumorphism",
    icon: "🫧",
    accent: "#94a3b8",
    title: { ko: "뉴모피즘", en: "Neumorphism" },
    description: {
      ko: "부드러운 음영으로 배경에서 눌리고 솟은 입체감을 주는 스타일.",
      en: "Soft inner/outer shadows that make elements feel pressed into the surface.",
    },
  },
  {
    id: "neobrutalism",
    icon: "🟨",
    accent: "#facc15",
    title: { ko: "네오브루탈리즘", en: "Neo-Brutalism" },
    description: {
      ko: "두꺼운 검은 테두리와 하드 섀도, 강한 색으로 시선을 끄는 스타일.",
      en: "Thick black borders, hard offset shadows and bold colors that grab attention.",
    },
  },
  {
    id: "claymorphism",
    icon: "🧱",
    accent: "#f472b6",
    title: { ko: "클레이모피즘", en: "Claymorphism" },
    description: {
      ko: "말랑한 점토 느낌의 둥근 형태와 파스텔 색. 앱·키즈 UI에 좋습니다.",
      en: "Puffy, clay-like rounded shapes in pastel colors. Friendly for apps and kids.",
    },
  },
  {
    id: "gradient",
    icon: "🌈",
    accent: "#a855f7",
    title: { ko: "그라데이션 / 오로라", en: "Gradient / Aurora" },
    description: {
      ko: "화려한 색 전환과 오로라 빛. 랜딩 페이지와 프로모션에 효과적입니다.",
      en: "Vivid color transitions and aurora glows. Effective for landing and promo pages.",
    },
  },
  {
    id: "neon",
    icon: "💡",
    accent: "#22d3ee",
    title: { ko: "네온 / 사이버펑크", en: "Neon / Cyberpunk" },
    description: {
      ko: "어두운 배경 위 발광하는 네온. 게임·테크 제품에 어울립니다.",
      en: "Glowing neon on dark backgrounds. Suits gaming and tech products.",
    },
  },
  {
    id: "minimal",
    icon: "⚪",
    accent: "#0f172a",
    title: { ko: "미니멀", en: "Minimal" },
    description: {
      ko: "절제된 색과 여백으로 콘텐츠에 집중하는 스타일. 포트폴리오에 적합합니다.",
      en: "Restrained color and whitespace that put content first. Ideal for portfolios.",
    },
  },
  {
    id: "retro",
    icon: "📼",
    accent: "#fb7185",
    title: { ko: "레트로 / Y2K", en: "Retro / Y2K" },
    description: {
      ko: "빈티지와 바이퍼웨이브 감성의 복고 스타일.",
      en: "Vintage and vaporwave-flavored retro aesthetics.",
    },
  },
  {
    id: "pixel",
    icon: "👾",
    accent: "#22c55e",
    title: { ko: "픽셀 / 8비트", en: "Pixel / 8-bit" },
    description: {
      ko: "각진 픽셀 테두리와 모노스페이스 글꼴로 레트로 게임 감성을 살린 스타일입니다.",
      en: "Blocky pixel borders and monospace type for a retro 8-bit game feel.",
    },
  },
  {
    id: "material",
    icon: "📐",
    accent: "#2563eb",
    title: { ko: "머티리얼", en: "Material" },
    description: {
      ko: "그림자와 엘리베이션으로 위계를 표현하는 안드로이드풍 스타일.",
      en: "Shadow and elevation to express hierarchy, in an Android-like style.",
    },
  },
  {
    id: "threed",
    icon: "🎲",
    accent: "#f97316",
    title: { ko: "3D / 스큐어모픽", en: "3D / Skeuomorphic" },
    description: {
      ko: "입체 버튼과 물성 표현으로 실제 사물 같은 질감을 주는 스타일.",
      en: "Three-dimensional buttons and tactile materials that mimic real objects.",
    },
  },
  {
    id: "holographic",
    icon: "🪩",
    accent: "#c084fc",
    title: { ko: "홀로그래픽", en: "Holographic" },
    description: {
      ko: "보는 각도에 따라 색이 바뀌는 듯한 무지갯빛 이리데센트 스타일입니다.",
      en: "An iridescent style with a rainbow sheen that seems to shift with the angle.",
    },
  },
  {
    id: "paper",
    icon: "📝",
    accent: "#d97706",
    title: { ko: "페이퍼 / 핸드드로잉", en: "Paper / Hand-drawn" },
    description: {
      ko: "손으로 그린 듯한 거친 테두리와 종이 질감의 아날로그 스타일입니다.",
      en: "An analog style with hand-drawn wobbly borders and a paper texture.",
    },
  },
  {
    id: "outline",
    icon: "✏️",
    accent: "#0f172a",
    title: { ko: "아웃라인 / 라인아트", en: "Outline / Line-art" },
    description: {
      ko: "얇은 단색 선으로만 표현하는 모노라인 아웃라인 스타일입니다.",
      en: "A monoline style expressed purely with thin single-color strokes.",
    },
  },
  {
    id: "memphis",
    icon: "🔺",
    accent: "#f43f5e",
    title: { ko: "멤피스", en: "Memphis" },
    description: {
      ko: "1980년대 감성의 기하학 도형과 발랄한 색·패턴이 어우러진 스타일입니다.",
      en: "Playful 1980s geometry with bold shapes, colors and patterns.",
    },
  },
  {
    id: "duotone",
    icon: "🎭",
    accent: "#6366f1",
    title: { ko: "듀오톤", en: "Duotone" },
    description: {
      ko: "두 가지 색의 강한 대비로 구성하는 절제되고 임팩트 있는 스타일입니다.",
      en: "Built from two strongly contrasting colors for a bold, restrained look.",
    },
  },
];

export function getStyle(id: string): Style | undefined {
  return styles.find((s) => s.id === id);
}
