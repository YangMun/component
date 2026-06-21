import type { ComponentEntry } from "@/data/types";

// Buttons
import gradientGlow from "./buttons/gradient-glow";
import solidPress from "./buttons/solid-press";
import neonOutline from "./buttons/neon-outline";
import shineSweep from "./buttons/shine-sweep";
import pillArrow from "./buttons/pill-arrow";
import soft3d from "./buttons/soft-3d";
// Cards
import hoverLift from "./cards/hover-lift";
import gradientBorder from "./cards/gradient-border";
// Inputs
import floatingLabel from "./inputs/floating-label";
import underlineFocus from "./inputs/underline-focus";
// Loaders
import dualRing from "./loaders/dual-ring";
import bouncingDots from "./loaders/bouncing-dots";

// The single registry of every component on the site.
// To add a component: create its file, import it here, and append to this array.
export const components: ComponentEntry[] = [
  gradientGlow,
  solidPress,
  neonOutline,
  shineSweep,
  pillArrow,
  soft3d,
  hoverLift,
  gradientBorder,
  floatingLabel,
  underlineFocus,
  dualRing,
  bouncingDots,
];

export function getComponentsByCategory(categoryId: string): ComponentEntry[] {
  return components.filter((c) => c.category === categoryId);
}

export function getFeaturedComponents(limit = 6): ComponentEntry[] {
  return components.filter((c) => c.featured).slice(0, limit);
}

export function getComponentCount(categoryId: string): number {
  return getComponentsByCategory(categoryId).length;
}
