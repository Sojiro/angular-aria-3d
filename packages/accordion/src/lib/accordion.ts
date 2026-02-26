import { Component, input, inject, ElementRef, OnInit } from '@angular/core';
import { AccordionGroup, AccordionTrigger, AccordionPanel } from '@angular/aria/accordion';
import { Aa3dSurface, Aa3dThemeConfig } from '@angular-aria-3d/core';

let nextPanelId = 0;

@Component({
  selector: 'aa3d-accordion',
  standalone: true,
  hostDirectives: [
    {
      directive: AccordionGroup,
      inputs: ['multiExpandable', 'disabled', 'wrap'],
    },
  ],
  template: `<ng-content />`,
  styles: [`:host { display: block; }`],
})
export class Aa3dAccordion {
  multiExpandable = input(false);
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-accordion-item',
  standalone: true,
  template: `<ng-content />`,
  styles: [`:host { display: block; }`],
})
export class Aa3dAccordionItem implements OnInit {
  private el = inject(ElementRef);
  readonly panelId = `aa3d-panel-${nextPanelId++}`;

  ngOnInit(): void {
    // Store panelId as a data attribute so children can find it
    this.el.nativeElement.setAttribute('data-panel-id', this.panelId);
  }
}

@Component({
  selector: 'aa3d-accordion-header',
  standalone: true,
  imports: [Aa3dSurface, AccordionTrigger],
  template: `
    <button ngAccordionTrigger [panelId]="panelId" aa3dSurface [depth]="depth()" [theme]="theme()">
      <span class="aa3d-shadow"></span>
      <span class="aa3d-edge"></span>
      <span class="aa3d-front">
        <ng-content />
      </span>
    </button>
  `,
  styles: [
    `:host { display: block; }
     button { width: 100%; text-align: left; border: none; background: none; padding: 0; cursor: pointer; }`,
  ],
})
export class Aa3dAccordionHeader implements OnInit {
  private el = inject(ElementRef);
  depth = input<'deep' | 'medium' | 'subtle'>('medium');
  theme = input<Partial<Aa3dThemeConfig>>();
  panelId = '';

  ngOnInit(): void {
    const item = (this.el.nativeElement as HTMLElement).closest('aa3d-accordion-item');
    if (item) {
      this.panelId = item.getAttribute('data-panel-id') ?? '';
    }
  }
}

@Component({
  selector: 'aa3d-accordion-panel',
  standalone: true,
  imports: [AccordionPanel],
  template: `
    <div ngAccordionPanel [panelId]="panelId">
      <ng-content />
    </div>
  `,
  styles: [`:host { display: block; }`],
})
export class Aa3dAccordionPanel implements OnInit {
  private el = inject(ElementRef);
  panelId = '';

  ngOnInit(): void {
    const item = (this.el.nativeElement as HTMLElement).closest('aa3d-accordion-item');
    if (item) {
      this.panelId = item.getAttribute('data-panel-id') ?? '';
    }
  }
}
