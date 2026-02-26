import {
  Directive, inject, input, effect,
  ElementRef,
} from '@angular/core';
import { AA3D_THEME } from '../theme/aa3d-theme-provider';
import { Aa3dThemeConfig } from '../theme/aa3d-theme';
import { DEPTH_PRESETS } from '../theme/aa3d-theme-defaults';

@Directive({
  selector: '[aa3dSurface]',
  standalone: true,
  host: { 'class': 'aa3d-pushable' },
})
export class Aa3dSurface {
  private el = inject(ElementRef);
  private globalTheme = inject(AA3D_THEME);

  depth = input<'deep' | 'medium' | 'subtle'>('medium');
  theme = input<Partial<Aa3dThemeConfig>>();

  constructor() {
    effect(() => {
      this.applyStyles();
    });
  }

  private applyStyles(): void {
    const el = this.el.nativeElement;
    const preset = DEPTH_PRESETS[this.depth()];
    const t = this.theme();
    const hue = t?.hue ?? this.globalTheme.hue;
    const saturation = t?.saturation ?? this.globalTheme.saturation;
    const radius = t?.radius ?? this.globalTheme.radius;
    const transition = {
      hover: t?.transition?.hover ?? this.globalTheme.transition.hover,
      rest: t?.transition?.rest ?? this.globalTheme.transition.rest,
      press: t?.transition?.press ?? this.globalTheme.transition.press,
    };

    // Depth properties
    this.setProperty(el, '--aa3d-depth-front', `${preset.frontY}px`);
    this.setProperty(el, '--aa3d-depth-shadow', `${preset.shadowY}px`);
    this.setProperty(el, '--aa3d-depth-hover-front', `${preset.hoverFrontY}px`);
    this.setProperty(el, '--aa3d-depth-hover-shadow', `${preset.hoverShadowY}px`);
    this.setProperty(el, '--aa3d-depth-press-front', `${preset.pressFrontY}px`);
    this.setProperty(el, '--aa3d-depth-press-shadow', `${preset.pressShadowY}px`);

    // Theme properties
    this.setProperty(el, '--aa3d-hue', `${hue}`);
    this.setProperty(el, '--aa3d-saturation', `${saturation}%`);
    this.setProperty(el, '--aa3d-radius', `${radius}px`);
    this.setProperty(el, '--aa3d-transition-hover', `${transition.hover}ms`);
    this.setProperty(el, '--aa3d-transition-rest', `${transition.rest}ms`);
    this.setProperty(el, '--aa3d-transition-press', `${transition.press}ms`);
  }

  private setProperty(el: HTMLElement, prop: string, value: string): void {
    el.style.setProperty(prop, value);
  }
}
