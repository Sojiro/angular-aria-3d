import { Component, input } from '@angular/core';
import { Listbox, Option } from '@angular/aria/listbox';
import { Aa3dSurface, Aa3dThemeConfig } from '@angular-aria-3d/core';

@Component({
  selector: 'aa3d-listbox',
  standalone: true,
  hostDirectives: [
    {
      directive: Listbox,
      inputs: ['multi', 'orientation', 'focusMode', 'disabled', 'readonly', 'wrap', 'selectionMode', 'typeaheadDelay', 'softDisabled'],
      outputs: ['valuesChange'],
    },
  ],
  template: `<ng-content />`,
  styles: [`:host { display: block; }`],
})
export class Aa3dListbox {
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-option',
  standalone: true,
  imports: [Aa3dSurface],
  hostDirectives: [
    {
      directive: Option,
      inputs: ['value', 'disabled', 'label'],
    },
  ],
  template: `
    <div aa3dSurface [depth]="depth()" [theme]="theme()">
      <span class="aa3d-shadow"></span>
      <span class="aa3d-edge"></span>
      <span class="aa3d-front"><ng-content /></span>
    </div>
  `,
  styles: [`:host { display: block; }`],
})
export class Aa3dOption {
  depth = input<'deep' | 'medium' | 'subtle'>('subtle');
  theme = input<Partial<Aa3dThemeConfig>>();
}
