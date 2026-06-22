import type { Dictionary } from "./ko";

// English copy. Must satisfy the Dictionary shape defined by the Korean source.
const en: Dictionary = {
  meta: {
    siteName: "Component Gallery",
    tagline: "A UI component collection for design inspiration",
    description:
      "A free component gallery to preview the design and motion of buttons, cards, inputs and more, then copy ready-to-use HTML and CSS code.",
  },
  nav: {
    home: "Home",
    components: "Components",
    styles: "Styles",
    about: "About",
    privacy: "Privacy Policy",
    terms: "Terms",
    contact: "Contact",
    skipToContent: "Skip to content",
  },
  actions: {
    copy: "Copy",
    copied: "Copied!",
    copyHtml: "Copy HTML",
    copyCss: "Copy CSS",
    viewAll: "View all",
    viewCategory: "View category",
    toggleTheme: "Toggle theme",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    installApp: "Install app",
  },
  home: {
    heroTitle: "Turn design inspiration into code, instantly",
    heroSubtitle:
      "Every button has a look, a click motion, and a color. Pick a component you like and copy its HTML and CSS to use right away.",
    heroCtaPrimary: "Browse components",
    heroCtaSecondary: "About this site",
    featuresTitle: "What you can do here",
    features: [
      {
        title: "Live previews",
        body: "Each component ships as a working preview so you can see the motion and colors exactly as they are.",
      },
      {
        title: "One-click copy",
        body: "HTML and CSS are split into tabs and copied to your clipboard with a single button.",
      },
      {
        title: "Browse by category",
        body: "Components are organized into categories like buttons, cards and inputs so you find what you need fast.",
      },
      {
        title: "Framework agnostic",
        body: "Plain HTML and CSS means you can paste it into React, Vue or any plain web page.",
      },
    ],
    featuredTitle: "Featured components",
    browseByCategory: "Browse by category",
    browseByStyle: "Browse by design style",
    heroEyebrow: "Design component index",
    stats: { components: "Components", categories: "Categories", styles: "Styles" },
  },
  gallery: {
    title: "Components",
    subtitle: "Pick a category or browse every component below.",
    allCategories: "All categories",
    allStyles: "All styles",
    styleTitle: "Design styles",
    styleSubtitle:
      "Browse components by the latest design trends — glassmorphism, neumorphism, neon and more.",
    itemsCount: "{count} components",
    empty: "No components have been added yet.",
    preview: "Preview",
    code: "Code",
  },
  footer: {
    rights: "All rights reserved.",
    description:
      "A free UI component inspiration gallery for designers and developers.",
    sections: {
      explore: "Explore",
      legal: "Legal",
    },
  },
  langSwitch: "Language",
};

export default en;
