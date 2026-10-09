import { NAVY_RAISED } from '../../styles/designTokens';

/**
 * BackgroundGlows Component
 * Subtle, flat tonal depth behind ServiceDetails pages — no blur, no glow.
 */
export const BackgroundGlows = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[60vh]"
        style={{ background: `linear-gradient(180deg, ${NAVY_RAISED}, transparent)`, opacity: 0.45 }}
      />
    </div>
  );
};
