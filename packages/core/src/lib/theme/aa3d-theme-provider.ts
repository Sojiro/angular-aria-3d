import { InjectionToken, Provider } from '@angular/core';
import { Aa3dTheme, Aa3dThemeConfig } from './aa3d-theme';

export type { Aa3dTheme } from './aa3d-theme';

export const DEFAULT_THEME: Aa3dTheme = {
  hue: 345,
  saturation: 100,
  depth: 'medium',
  radius: 12,
  transition: { hover: 250, rest: 600, press: 34 },
};

export const AA3D_THEME = new InjectionToken<Aa3dTheme>('AA3D_THEME', {
  providedIn: 'root',
  factory: () => DEFAULT_THEME,
});

export function provideAngularAria3d(config?: Aa3dThemeConfig): Provider {
  return {
    provide: AA3D_THEME,
    useValue: mergeTheme(config),
  };
}

function mergeTheme(config?: Aa3dThemeConfig): Aa3dTheme {
  if (!config) return { ...DEFAULT_THEME };
  return {
    hue: config.hue ?? DEFAULT_THEME.hue,
    saturation: config.saturation ?? DEFAULT_THEME.saturation,
    depth: config.depth ?? DEFAULT_THEME.depth,
    radius: config.radius ?? DEFAULT_THEME.radius,
    transition: {
      hover: config.transition?.hover ?? DEFAULT_THEME.transition.hover,
      rest: config.transition?.rest ?? DEFAULT_THEME.transition.rest,
      press: config.transition?.press ?? DEFAULT_THEME.transition.press,
    },
  };
}
