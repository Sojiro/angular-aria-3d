import { Component, input } from '@angular/core';
import { AccordionGroup, AccordionTrigger, AccordionPanel } from '@angular/aria/accordion';
import { Aa3dSurface, Aa3dThemeConfig } from '@angular-aria-3d/core';

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
export class Aa3dAccordionItem {}

@Component({
  selector: 'aa3d-accordion-header',
  standalone: true,
  hostDirectives: [
    {
      directive: AccordionTrigger,
      inputs: ['panelId', 'expanded', 'disabled'],
    },
    {
      directive: Aa3dSurface,
      inputs: ['depth', 'theme'],
    },
  ],
  template: `
    <span class="aa3d-shadow"></span>
    <span class="aa3d-edge"></span>
    <span class="aa3d-front">
      <ng-content />
    </span>
  `,
  styles: [
    `:host {
      display: block;
      width: 100%;
      text-align: left;
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }`,
  ],
})
export class Aa3dAccordionHeader {
  panelId = input.required<string>();
  depth = input<'deep' | 'medium' | 'subtle'>('medium');
  theme = input<Partial<Aa3dThemeConfig>>();
}

@Component({
  selector: 'aa3d-accordion-panel',
  standalone: true,
  hostDirectives: [
    {
      directive: AccordionPanel,
      inputs: ['panelId'],
    },
  ],
  template: `<ng-content />`,
  styles: [
    `:host { display: block; }
     :host([inert]) { display: none; }`,
  ],
})
export class Aa3dAccordionPanel {
  panelId = input.required<string>();
}
