import { Component, input } from '@angular/core';
import { Aa3dSurface, Aa3dThemeConfig } from '@angular-aria-3d/core';

@Component({
  selector: 'aa3d-button',
  standalone: true,
  imports: [Aa3dSurface],
  template: `
    <button
      aa3dSurface
      [depth]="depth()"
      [theme]="theme()"
      [disabled]="disabled()"
      [type]="type()">
      <span class="aa3d-shadow"></span>
      <span class="aa3d-edge"></span>
      <span class="aa3d-front">
        <ng-content />
      </span>
    </button>
  `,
  styles: [`:host { display: inline-block; }`],
})
export class Aa3dButton {
  depth = input<'deep' | 'medium' | 'subtle'>('deep');
  theme = input<Partial<Aa3dThemeConfig>>();
  disabled = input(false);
  type = input<'button' | 'submit' | 'reset'>('button');
}
