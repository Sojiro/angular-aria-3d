export interface DepthPreset {
  frontY: number;
  shadowY: number;
  hoverFrontY: number;
  hoverShadowY: number;
  pressFrontY: number;
  pressShadowY: number;
}

export const DEPTH_PRESETS: Record<'deep' | 'medium' | 'subtle', DepthPreset> = {
  deep: {
    frontY: -4, shadowY: 2,
    hoverFrontY: -6, hoverShadowY: 4,
    pressFrontY: -2, pressShadowY: 1,
  },
  medium: {
    frontY: -3, shadowY: 1.5,
    hoverFrontY: -4.5, hoverShadowY: 3,
    pressFrontY: -1.5, pressShadowY: 0.75,
  },
  subtle: {
    frontY: -2, shadowY: 1,
    hoverFrontY: -3, hoverShadowY: 2,
    pressFrontY: -1, pressShadowY: 0.5,
  },
};
