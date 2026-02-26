import { Component, input } from '@angular/core';
import { Combobox, ComboboxInput } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import { Aa3dSurface, Aa3dThemeConfig } from '@angular-aria-3d/core';

@Component({
  selector: 'aa3d-autocomplete',
  standalone: true,
  hostDirectives: [
    {
      directive: Combobox,
      inputs: ['disabled', 'readonly', 'firstMatch', 'alwaysExpanded'],
    },
  ],
  host: {
    '[attr.filterMode]': '"auto-select"',
  },
  template: `<ng-content />`,
  styles: [`:host { display: inline-block; }`],
})
export class Aa3dAutocomplete {
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-autocomplete-input',
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
export class Aa3dAutocompleteInput {
  depth = input<'deep' | 'medium' | 'subtle'>('medium');
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-autocomplete-listbox',
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
export class Aa3dAutocompleteListbox {
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-autocomplete-option',
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
export class Aa3dAutocompleteOption {
  depth = input<'deep' | 'medium' | 'subtle'>('subtle');
  theme = input<Partial<Aa3dThemeConfig>>();
}
