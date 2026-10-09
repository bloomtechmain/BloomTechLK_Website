// Shared brand design tokens — the house style established in src/pages/Home.tsx.
// Dark navy + orange accent, no gradients/blur/glow/glassmorphism. Import these
// instead of re-declaring local hex copies so every page stays in sync.

export const NAVY = '#101D36';
export const NAVY_RAISED = '#16233F'; // one step lighter — "elevated" surfaces on dark sections
export const ORANGE = '#FF6B00';
export const ORANGE_LIGHT = '#FFB27A'; // used for eyebrow/kicker labels on dark backgrounds
export const GREY = '#F5F6F8';
export const FONT_SANS = "'Inter', sans-serif";

// Subtle two-stop accent gradients — for primary CTA buttons and major
// hero/CTA section backgrounds only. Not for icon chips, cards, or borders.
export const ORANGE_GRADIENT = 'linear-gradient(135deg, #FF6B00 0%, #FF7A1A 100%)';
export const NAVY_GRADIENT = 'linear-gradient(135deg, #101D36 0%, #16233F 100%)';
