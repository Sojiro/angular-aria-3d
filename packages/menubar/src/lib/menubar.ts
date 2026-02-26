import { Component, input } from '@angular/core';
import { MenuBar, MenuItem, MenuTrigger, Menu } from '@angular/aria/menu';
import { Aa3dSurface, Aa3dThemeConfig } from '@angular-aria-3d/core';

@Component({
  selector: 'aa3d-menubar',
  standalone: true,
  hostDirectives: [
    {
      directive: MenuBar,
      inputs: ['disabled', 'wrap', 'typeaheadDelay'],
      outputs: ['itemSelected'],
    },
  ],
  template: `<ng-content />`,
  styles: [
    `:host {
      display: flex;
      flex-direction: row;
      align-items: center;
    }`,
  ],
})
export class Aa3dMenubar {
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-menubar-trigger',
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
  styles: [`:host { display: inline-block; cursor: pointer; }`],
})
export class Aa3dMenubarTrigger {
  depth = input<'deep' | 'medium' | 'subtle'>('medium');
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-menubar-item',
  standalone: true,
  imports: [Aa3dSurface],
  hostDirectives: [
    {
      directive: MenuItem,
      inputs: ['value', 'disabled'],
    },
  ],
  template: `
    <div aa3dSurface [depth]="depth()" [theme]="theme()">
      <span class="aa3d-shadow"></span>
      <span class="aa3d-edge"></span>
      <span class="aa3d-front"><ng-content /></span>
    </div>
  `,
  styles: [`:host { display: inline-block; }`],
})
export class Aa3dMenubarItem {
  depth = input<'deep' | 'medium' | 'subtle'>('medium');
  theme = input<Partial<Aa3dThemeConfig>>();
}
