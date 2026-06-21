import type { ComponentEntry } from "@/data/types";

const alerts: ComponentEntry[] = [
  {
    id: "alerts-material-banner",
    slug: "material-banner",
    category: "alerts",
    style: "material",
    title: { ko: "머티리얼 배너", en: "Material Banner" },
    description: {
      ko: "아이콘과 좌측 강조선이 있는 머티리얼 스타일 정보 배너입니다.",
      en: "A material-style info banner with an icon and left accent bar.",
    },
    tags: ["alert", "material", "banner", "info"],
    featured: true,
    html: `<div class="alert-material" role="status">
  <span aria-hidden="true">ℹ️</span>
  <p>변경 사항이 저장되었습니다.</p>
</div>`,
    css: `.alert-material {
  display: flex; align-items: center; gap: 10px; width: 280px;
  padding: 14px 16px; border-radius: 8px; border-left: 4px solid #2563eb;
  background: #eff6ff; color: #1e3a8a; box-shadow: 0 1px 3px rgba(0,0,0,0.12);
}
.alert-material p { margin: 0; font-size: 14px; }`,
  },
  {
    id: "alerts-glass-toast",
    slug: "glass-toast",
    category: "alerts",
    style: "glassmorphism",
    title: { ko: "글래스 토스트", en: "Glass Toast" },
    description: {
      ko: "배경이 비치는 반투명 유리 질감의 토스트 알림입니다.",
      en: "A translucent frosted-glass toast notification.",
    },
    tags: ["alert", "glass", "toast", "blur"],
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<div class="alert-glass" role="status">
  <span aria-hidden="true">✓</span>
  <p>업로드가 완료되었습니다.</p>
</div>`,
    css: `.alert-glass {
  display: flex; align-items: center; gap: 10px; width: 280px;
  padding: 14px 16px; border-radius: 12px; color: #fff;
  border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.18);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
}
.alert-glass p { margin: 0; font-size: 14px; }`,
  },
  {
    id: "alerts-neon-alert",
    slug: "neon-alert",
    category: "alerts",
    style: "neon",
    title: { ko: "네온 알림", en: "Neon Alert" },
    description: {
      ko: "어두운 배경에서 네온 테두리가 빛나는 경고 알림입니다.",
      en: "A warning alert with a glowing neon border on a dark background.",
    },
    tags: ["alert", "neon", "glow", "warning"],
    previewBackground: "#0a0a14",
    html: `<div class="alert-neon" role="alert">
  <span aria-hidden="true">⚠️</span>
  <p>비정상 접근이 감지되었습니다.</p>
</div>`,
    css: `.alert-neon {
  display: flex; align-items: center; gap: 10px; width: 280px;
  padding: 14px 16px; border-radius: 8px; color: #fca5a5;
  background: #160b0b; border: 1px solid #f87171; box-shadow: 0 0 16px rgba(248,113,113,0.5);
}
.alert-neon p { margin: 0; font-size: 14px; text-shadow: 0 0 6px rgba(248,113,113,0.5); }`,
  },
  {
    id: "alerts-brutalist-alert",
    slug: "brutalist-alert",
    category: "alerts",
    style: "neobrutalism",
    title: { ko: "브루탈 알림", en: "Brutalist Alert" },
    description: {
      ko: "두꺼운 테두리와 하드 섀도의 네오브루탈리즘 알림입니다.",
      en: "A neo-brutalist alert with a thick border and hard shadow.",
    },
    tags: ["alert", "brutalism", "border", "banner"],
    previewBackground: "#fef08a",
    html: `<div class="alert-brutalist" role="alert">
  <strong>경고!</strong>
  <p>저장하지 않은 변경 사항이 있습니다.</p>
</div>`,
    css: `.alert-brutalist {
  width: 280px; padding: 14px 16px; border: 3px solid #111; border-radius: 4px;
  background: #fb923c; box-shadow: 6px 6px 0 #111; color: #111;
}
.alert-brutalist strong { display: block; font-size: 15px; font-weight: 900; margin-bottom: 4px; }
.alert-brutalist p { margin: 0; font-size: 13px; font-weight: 600; }`,
  },
  {
    id: "alerts-minimal-inline",
    slug: "minimal-inline",
    category: "alerts",
    style: "minimal",
    title: { ko: "미니멀 인라인", en: "Minimal Inline" },
    description: {
      ko: "연한 배경의 절제된 성공 알림입니다.",
      en: "A restrained success alert with a soft tinted background.",
    },
    tags: ["alert", "minimal", "success", "inline"],
    html: `<div class="alert-minimal" role="status">
  <span class="alert-minimal__dot"></span>
  <p>모든 항목이 동기화되었습니다.</p>
</div>`,
    css: `.alert-minimal {
  display: flex; align-items: center; gap: 10px; width: 280px;
  padding: 12px 16px; border-radius: 10px; background: #f0fdf4; border: 1px solid #bbf7d0;
}
.alert-minimal__dot { width: 9px; height: 9px; border-radius: 50%; background: #22c55e; flex: none; }
.alert-minimal p { margin: 0; font-size: 14px; color: #166534; }`,
  },
  {
    id: "alerts-gradient-banner",
    slug: "gradient-banner",
    category: "alerts",
    style: "gradient",
    title: { ko: "그라데이션 배너", en: "Gradient Banner" },
    description: {
      ko: "그라데이션 배경의 프로모션 배너 알림입니다.",
      en: "A promotional banner alert with a gradient background.",
    },
    tags: ["alert", "gradient", "banner", "promo"],
    html: `<div class="alert-gradient" role="status">
  <p>🎉 한정 할인! 지금 업그레이드하세요.</p>
</div>`,
    css: `.alert-gradient {
  width: 300px; padding: 14px 18px; border-radius: 12px; color: #fff;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  box-shadow: 0 8px 22px rgba(124,58,237,0.4);
}
.alert-gradient p { margin: 0; font-size: 14px; font-weight: 600; }`,
  },
];

export default alerts;
