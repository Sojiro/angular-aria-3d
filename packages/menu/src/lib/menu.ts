import { Component, input } from '@angular/core';
import { Menu, MenuTrigger, MenuItem } from '@angular/aria/menu';
import { Aa3dSurface, Aa3dThemeConfig } from '@angular-aria-3d/core';

@Component({
  selector: 'aa3d-menu',
  standalone: true,
  hostDirectives: [
    {
      directive: Menu,
      inputs: ['disabled', 'wrap', 'typeaheadDelay', 'expansionDelay'],
      outputs: ['itemSelected'],
    },
  ],
  template: `<ng-content />`,
  styles: [`:host { display: block; }`],
})
export class Aa3dMenu {
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-menu-trigger',
  standalone: true,
  imports: [Aa3dSurface],
  hostDirectives: [
    {
      directive: MenuTrigger,
      inputs: ['menu', 'disabled', 'softDisabled'],
    },
  ],
  template: `
    <button aa3dSurface [depth]="depth()" [theme]="theme()">
      <span class="aa3d-shadow"></span>
      <span class="aa3d-edge"></span>
      <span class="aa3d-front"><ng-content /></span>
    </button>
  `,
  styles: [
    `:host { display: inline-block; }
     button { border: none; background: none; padding: 0; cursor: pointer; }`,
  ],
})
export class Aa3dMenuTrigger {
  depth = input<'deep' | 'medium' | 'subtle'>('medium');
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-menu-item',
  standalone: true,
  imports: [Aa3dSurface],
  hostDirectives: [
    {
      directive: MenuItem,
      inputs: ['value', 'disabled', 'submenu'],
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
export class Aa3dMenuItem {
  value = input<any>();
  depth = input<'deep' | 'medium' | 'subtle'>('subtle');
  theme = input<Partial<Aa3dThemeConfig>>();
}
