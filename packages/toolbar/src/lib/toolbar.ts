import { Component, input } from '@angular/core';
import { Toolbar, ToolbarWidget, ToolbarWidgetGroup } from '@angular/aria/toolbar';
import { Aa3dSurface, Aa3dThemeConfig } from '@angular-aria-3d/core';

@Component({
  selector: 'aa3d-toolbar',
  standalone: true,
  hostDirectives: [
    {
      directive: Toolbar,
      inputs: ['orientation', 'disabled', 'wrap', 'softDisabled'],
      outputs: ['valuesChange'],
    },
  ],
  template: `<ng-content />`,
  styles: [
    `:host {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4px;
    }`,
  ],
})
export class Aa3dToolbar {
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-toolbar-button',
  standalone: true,
  imports: [Aa3dSurface],
  hostDirectives: [
    {
      directive: ToolbarWidget,
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
export class Aa3dToolbarButton {
  depth = input<'deep' | 'medium' | 'subtle'>('medium');
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-toolbar-widget-group',
  standalone: true,
  hostDirectives: [
    {
      directive: ToolbarWidgetGroup,
      inputs: ['disabled', 'multi'],
    },
  ],
  template: `<ng-content />`,
  styles: [
    `:host {
      display: inline-flex;
      gap: 2px;
    }`,
  ],
})
export class Aa3dToolbarWidgetGroup {
  theme = input<Partial<Aa3dThemeConfig>>();
}
