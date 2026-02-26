import { Component, input } from '@angular/core';
import { Combobox, ComboboxInput } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import { Aa3dSurface, Aa3dThemeConfig } from '@angular-aria-3d/core';

@Component({
  selector: 'aa3d-select',
  standalone: true,
  hostDirectives: [
    {
      directive: Combobox,
      inputs: ['disabled', 'readonly', 'alwaysExpanded'],
    },
  ],
  template: `<ng-content />`,
  styles: [`:host { display: inline-block; }`],
})
export class Aa3dSelect {
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-select-trigger',
  standalone: true,
  imports: [Aa3dSurface, ComboboxInput],
  template: `
    <div aa3dSurface [depth]="depth()" [theme]="theme()">
      <span class="aa3d-shadow"></span>
      <span class="aa3d-edge"></span>
      <span class="aa3d-front">
        <input ngComboboxInput [readonly]="true" />
        <ng-content />
      </span>
    </div>
  `,
  styles: [
    `:host { display: inline-block; }
     input { border: none; background: transparent; outline: none; cursor: pointer; width: 100%; }`,
  ],
})
export class Aa3dSelectTrigger {
  depth = input<'deep' | 'medium' | 'subtle'>('medium');
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-select-listbox',
  standalone: true,
  hostDirectives: [
    {
      directive: Listbox,
      inputs: ['orientation', 'focusMode', 'wrap', 'selectionMode', 'typeaheadDelay'],
      outputs: ['valuesChange'],
    },
  ],
  template: `<ng-content />`,
  styles: [`:host { display: block; }`],
})
export class Aa3dSelectListbox {
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-select-option',
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
export class Aa3dSelectOption {
  depth = input<'deep' | 'medium' | 'subtle'>('subtle');
  theme = input<Partial<Aa3dThemeConfig>>();
}
