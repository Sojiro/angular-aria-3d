import { Component, input } from '@angular/core';
import { Tabs, TabList, Tab, TabPanel } from '@angular/aria/tabs';
import { Aa3dSurface, Aa3dThemeConfig } from '@angular-aria-3d/core';

@Component({
  selector: 'aa3d-tabs',
  standalone: true,
  hostDirectives: [
    {
      directive: Tabs,
    },
  ],
  template: `<ng-content />`,
  styles: [`:host { display: block; }`],
})
export class Aa3dTabs {
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-tab-list',
  standalone: true,
  hostDirectives: [
    {
      directive: TabList,
      inputs: ['selectionMode', 'orientation', 'wrap', 'disabled', 'focusMode'],
    },
  ],
  template: `<ng-content />`,
  styles: [`:host { display: flex; gap: 4px; }`],
})
export class Aa3dTabList {
  selectionMode = input<'follow' | 'explicit'>('follow');
  orientation = input<'horizontal' | 'vertical'>('horizontal');
}

@Component({
  selector: 'aa3d-tab',
  standalone: true,
  imports: [Aa3dSurface],
  hostDirectives: [
    {
      directive: Tab,
      inputs: ['value', 'disabled'],
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
export class Aa3dTab {
  value = input.required<string>();
  depth = input<'deep' | 'medium' | 'subtle'>('subtle');
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-tab-panel',
  standalone: true,
  hostDirectives: [
    {
      directive: TabPanel,
      inputs: ['value'],
    },
  ],
  template: `<ng-content />`,
  styles: [
    `:host { display: block; }
     :host([inert]) { display: none; }`,
  ],
})
export class Aa3dTabPanel {
  value = input.required<string>();
}
