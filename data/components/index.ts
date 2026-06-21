import type { ComponentEntry } from "@/data/types";

// Each category is one array module. To add a component, append an entry to the
// matching category file; to add a category, create its file and import it here.
import buttons from "./buttons";
import cards from "./cards";
import inputs from "./inputs";
import loaders from "./loaders";
import toggles from "./toggles";
import badges from "./badges";
import tooltips from "./tooltips";
import avatars from "./avatars";
import alerts from "./alerts";
import progress from "./progress";
import tabs from "./tabs";
import navbars from "./navbars";
import modals from "./modals";
import dropdowns from "./dropdowns";
import accordions from "./accordions";
import sliders from "./sliders";
import breadcrumbs from "./breadcrumbs";
import steppers from "./steppers";
import interactive from "./interactive";

// The single registry of every component on the site.
export const components: ComponentEntry[] = [
  ...buttons,
  ...cards,
  ...inputs,
  ...loaders,
  ...toggles,
  ...badges,
  ...tooltips,
  ...avatars,
  ...alerts,
  ...progress,
  ...tabs,
  ...navbars,
  ...modals,
  ...dropdowns,
  ...accordions,
  ...sliders,
  ...breadcrumbs,
  ...steppers,
  ...interactive,
];

export function getComponentsByCategory(categoryId: string): ComponentEntry[] {
  return components.filter((c) => c.category === categoryId);
}

export function getComponentsByStyle(styleId: string): ComponentEntry[] {
  return components.filter((c) => c.style === styleId);
}

export function getFeaturedComponents(limit = 6): ComponentEntry[] {
  return components.filter((c) => c.featured).slice(0, limit);
}

export function getComponentCount(categoryId: string): number {
  return getComponentsByCategory(categoryId).length;
}

export function getStyleCount(styleId: string): number {
  return getComponentsByStyle(styleId).length;
}
