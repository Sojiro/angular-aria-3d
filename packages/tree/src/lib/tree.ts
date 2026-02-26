import { Component, Directive, inject, input } from '@angular/core';
import { Tree, TreeItem, TreeItemGroup } from '@angular/aria/tree';
import { Aa3dSurface, Aa3dThemeConfig } from '@angular-aria-3d/core';

@Component({
  selector: 'aa3d-tree',
  standalone: true,
  hostDirectives: [
    {
      directive: Tree,
      inputs: ['multi', 'nav', 'disabled', 'orientation', 'selectionMode', 'focusMode', 'wrap', 'softDisabled', 'typeaheadDelay'],
      outputs: ['valuesChange'],
    },
  ],
  exportAs: 'aa3dTree',
  template: `<ng-content />`,
  styles: [`:host { display: block; }`],
})
export class Aa3dTree {
  multi = input(false);
  nav = input(false);
  theme = input<Partial<Aa3dThemeConfig>>();

  /** Reference to the underlying Tree directive for use as parent in TreeItem. */
  readonly treeDirective = inject(Tree);
}

@Component({
  selector: 'aa3d-tree-item',
  standalone: true,
  imports: [Aa3dSurface],
  hostDirectives: [
    {
      directive: TreeItem,
      inputs: ['value', 'parent', 'disabled', 'selectable', 'expanded', 'label', 'id'],
      outputs: ['expandedChange'],
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
export class Aa3dTreeItem {
  depth = input<'deep' | 'medium' | 'subtle'>('subtle');
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Directive({
  selector: 'ng-template[aa3dTreeItemGroup]',
  standalone: true,
  hostDirectives: [
    {
      directive: TreeItemGroup,
      inputs: ['ownedBy'],
    },
  ],
  exportAs: 'aa3dTreeItemGroup',
})
export class Aa3dTreeItemGroup {}
