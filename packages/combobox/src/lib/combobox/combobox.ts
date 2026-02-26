import { Component, input } from '@angular/core';
import { Combobox, ComboboxInput } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import { Aa3dSurface, Aa3dThemeConfig } from '@angular-aria-3d/core';

@Component({
  selector: 'aa3d-combobox',
  standalone: true,
  hostDirectives: [
    {
      directive: Combobox,
      inputs: ['filterMode', 'disabled', 'readonly', 'firstMatch', 'alwaysExpanded'],
    },
  ],
  template: `<ng-content />`,
  styles: [`:host { display: inline-block; }`],
})
export class Aa3dCombobox {
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-combobox-input',
  standalone: true,
  imports: [Aa3dSurface, ComboboxInput],
  template: `
    <div aa3dSurface [depth]="depth()" [theme]="theme()">
      <span class="aa3d-shadow"></span>
      <span class="aa3d-edge"></span>
      <span class="aa3d-front">
        <input ngComboboxInput />
        <ng-content />
      </span>
    </div>
  `,
  styles: [
    `:host { display: inline-block; }
     input { border: none; background: transparent; outline: none; width: 100%; }`,
  ],
})
export class Aa3dComboboxInput {
  depth = input<'deep' | 'medium' | 'subtle'>('medium');
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-combobox-listbox',
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
export class Aa3dComboboxListbox {
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-combobox-option',
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
export class Aa3dComboboxOption {
  depth = input<'deep' | 'medium' | 'subtle'>('subtle');
  theme = input<Partial<Aa3dThemeConfig>>();
}
