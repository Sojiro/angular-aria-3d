import { Component, input } from '@angular/core';
import { Grid, GridRow, GridCell } from '@angular/aria/grid';
import { Aa3dSurface, Aa3dThemeConfig } from '@angular-aria-3d/core';

@Component({
  selector: 'aa3d-grid',
  standalone: true,
  hostDirectives: [
    {
      directive: Grid,
      inputs: ['enableSelection', 'selectionMode', 'colWrap', 'rowWrap', 'disabled', 'multi', 'focusMode', 'softDisabled', 'enableRangeSelection'],
    },
  ],
  template: `<ng-content />`,
  styles: [`:host { display: block; }`],
})
export class Aa3dGrid {
  enableSelection = input(false);
  selectionMode = input<'follow' | 'explicit'>('explicit');
  colWrap = input<'continuous' | 'loop' | 'nowrap'>('nowrap');
  rowWrap = input<'continuous' | 'loop' | 'nowrap'>('nowrap');
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-grid-row',
  standalone: true,
  hostDirectives: [
    {
      directive: GridRow,
      inputs: ['rowIndex'],
    },
  ],
  template: `<ng-content />`,
  styles: [`:host { display: table-row; }`],
})
export class Aa3dGridRow {}

@Component({
  selector: 'aa3d-grid-cell',
  standalone: true,
  imports: [Aa3dSurface],
  hostDirectives: [
    {
      directive: GridCell,
      inputs: ['rowSpan', 'colSpan', 'disabled', 'selected', 'selectable', 'role', 'id', 'rowIndex', 'colIndex', 'orientation', 'wrap', 'tabindex'],
      outputs: ['selectedChange'],
    },
  ],
  template: `
    <div aa3dSurface [depth]="depth()" [theme]="theme()">
      <span class="aa3d-shadow"></span>
      <span class="aa3d-edge"></span>
      <span class="aa3d-front"><ng-content /></span>
    </div>
  `,
  styles: [`:host { display: table-cell; }`],
})
export class Aa3dGridCell {
  depth = input<'deep' | 'medium' | 'subtle'>('subtle');
  theme = input<Partial<Aa3dThemeConfig>>();
}
