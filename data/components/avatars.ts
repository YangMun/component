import type { ComponentEntry } from "@/data/types";

const avatars: ComponentEntry[] = [
  {
    id: "avatars-gradient-ring",
    slug: "gradient-ring",
    category: "avatars",
    style: "gradient",
    title: { ko: "그라데이션 링", en: "Gradient Ring" },
    description: {
      ko: "그라데이션 테두리가 둘러싼 스토리 스타일 아바타입니다.",
      en: "A story-style avatar wrapped in a gradient ring.",
    },
    tags: ["avatar", "gradient", "ring", "story"],
    featured: true,
    html: `<span class="ava-gradient-ring"><span class="ava-gradient-ring__img">A</span></span>`,
    css: `.ava-gradient-ring {
  display: inline-block; padding: 3px; border-radius: 50%;
  background: conic-gradient(from 0deg, #f59e0b, #ec4899, #7c3aed, #f59e0b);
}
.ava-gradient-ring__img {
  display: grid; place-items: center; width: 56px; height: 56px; border-radius: 50%;
  background: #fff; color: #7c3aed; font-weight: 800; font-size: 22px;
  box-shadow: 0 0 0 3px #fff inset;
}`,
  },
  {
    id: "avatars-neon-glow",
    slug: "neon-glow",
    category: "avatars",
    style: "neon",
    title: { ko: "네온 글로우", en: "Neon Glow" },
    description: {
      ko: "어두운 배경에서 네온 테두리가 빛나는 아바타입니다.",
      en: "An avatar with a glowing neon ring on a dark background.",
    },
    tags: ["avatar", "neon", "glow", "ring"],
    previewBackground: "#0a0a14",
    html: `<span class="ava-neon">B</span>`,
    css: `.ava-neon {
  display: grid; place-items: center; width: 60px; height: 60px; border-radius: 50%;
  font-weight: 800; font-size: 22px; color: #fff; background: #11111f;
  border: 2px solid #22d3ee; box-shadow: 0 0 16px rgba(34,211,238,0.7), inset 0 0 10px rgba(34,211,238,0.3);
}`,
  },
  {
    id: "avatars-glass-avatar",
    slug: "glass-avatar",
    category: "avatars",
    style: "glassmorphism",
    title: { ko: "글래스 아바타", en: "Glass Avatar" },
    description: {
      ko: "배경이 비치는 반투명 유리 질감의 아바타입니다.",
      en: "A translucent frosted-glass avatar.",
    },
    tags: ["avatar", "glass", "blur", "profile"],
    previewBackground: "linear-gradient(135deg, #6366f1, #ec4899)",
    html: `<span class="ava-glass">C</span>`,
    css: `.ava-glass {
  display: grid; place-items: center; width: 60px; height: 60px; border-radius: 50%;
  font-weight: 800; font-size: 22px; color: #fff;
  border: 1px solid rgba(255,255,255,0.5); background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.18);
}`,
  },
  {
    id: "avatars-neumorph-avatar",
    slug: "neumorph-avatar",
    category: "avatars",
    style: "neumorphism",
    title: { ko: "뉴모프 아바타", en: "Neumorph Avatar" },
    description: {
      ko: "배경에서 솟아오른 듯한 뉴모피즘 아바타입니다.",
      en: "A neumorphic avatar that appears raised from the surface.",
    },
    tags: ["avatar", "neumorphism", "soft", "profile"],
    previewBackground: "#e0e5ec",
    html: `<span class="ava-neumorph">D</span>`,
    css: `.ava-neumorph {
  display: grid; place-items: center; width: 64px; height: 64px; border-radius: 50%;
  font-weight: 800; font-size: 22px; color: #7c3aed; background: #e0e5ec;
  box-shadow: 7px 7px 14px #b8bcc4, -7px -7px 14px #ffffff;
}`,
  },
  {
    id: "avatars-status-online",
    slug: "status-online",
    category: "avatars",
    style: "minimal",
    title: { ko: "온라인 상태", en: "Online Status" },
    description: {
      ko: "오른쪽 아래에 온라인 상태 점이 표시된 미니멀 아바타입니다.",
      en: "A minimal avatar with an online status dot in the corner.",
    },
    tags: ["avatar", "minimal", "status", "online"],
    html: `<span class="ava-status">E<span class="ava-status__dot"></span></span>`,
    css: `.ava-status {
  position: relative; display: grid; place-items: center; width: 60px; height: 60px;
  border-radius: 50%; font-weight: 800; font-size: 22px; color: #fff; background: #6366f1;
}
.ava-status__dot {
  position: absolute; right: 2px; bottom: 2px; width: 15px; height: 15px; border-radius: 50%;
  background: #22c55e; border: 3px solid #fff;
}`,
  },
  {
    id: "avatars-clay-avatar",
    slug: "clay-avatar",
    category: "avatars",
    style: "claymorphism",
    title: { ko: "클레이 아바타", en: "Clay Avatar" },
    description: {
      ko: "말랑한 점토 질감의 둥근 파스텔 아바타입니다.",
      en: "A puffy clay-textured rounded pastel avatar.",
    },
    tags: ["avatar", "clay", "pastel", "soft"],
    previewBackground: "#dbeafe",
    html: `<span class="ava-clay">F</span>`,
    css: `.ava-clay {
  display: grid; place-items: center; width: 62px; height: 62px; border-radius: 50%;
  font-weight: 800; font-size: 22px; color: #fff; background: #60a5fa;
  box-shadow: inset 5px 5px 10px rgba(255,255,255,0.5), inset -5px -5px 10px rgba(37,99,235,0.4),
    8px 8px 16px rgba(37,99,235,0.25);
}`,
  },
  {
    id: "avatars-threed-coin",
    slug: "threed-coin",
    category: "avatars",
    style: "threed",
    title: { ko: "3D 코인", en: "3D Coin" },
    description: {
      ko: "입체적인 측면이 보이는 동전 모양의 3D 아바타 배지입니다.",
      en: "A coin-shaped 3D avatar badge with a visible raised edge.",
    },
    tags: ["avatar", "3d", "coin", "badge"],
    html: `<span class="ava-coin">G</span>`,
    css: `.ava-coin {
  display: grid; place-items: center; width: 60px; height: 60px; border-radius: 50%;
  font-weight: 800; font-size: 22px; color: #7c2d12;
  background: radial-gradient(circle at 35% 30%, #fde68a, #f59e0b 70%);
  box-shadow: 0 6px 0 #b45309, 0 10px 14px rgba(0,0,0,0.25), inset 0 2px 4px rgba(255,255,255,0.6);
}`,
  },
];

export default avatars;
