import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  Aa3dAccordion,
  Aa3dAccordionItem,
  Aa3dAccordionHeader,
  Aa3dAccordionPanel,
} from './accordion';
import { provideAngularAria3d } from '@angular-aria-3d/core';

const meta: Meta = {
  title: 'Components/Accordion',
  decorators: [
    moduleMetadata({
      imports: [
        Aa3dAccordion,
        Aa3dAccordionItem,
        Aa3dAccordionHeader,
        Aa3dAccordionPanel,
      ],
      providers: [provideAngularAria3d()],
    }),
  ],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <aa3d-accordion>
        <aa3d-accordion-item>
          <aa3d-accordion-header panelId="default-1">Section 1</aa3d-accordion-header>
          <aa3d-accordion-panel panelId="default-1">Content for section 1</aa3d-accordion-panel>
        </aa3d-accordion-item>
        <aa3d-accordion-item>
          <aa3d-accordion-header panelId="default-2">Section 2</aa3d-accordion-header>
          <aa3d-accordion-panel panelId="default-2">Content for section 2</aa3d-accordion-panel>
        </aa3d-accordion-item>
        <aa3d-accordion-item>
          <aa3d-accordion-header panelId="default-3">Section 3</aa3d-accordion-header>
          <aa3d-accordion-panel panelId="default-3">Content for section 3</aa3d-accordion-panel>
        </aa3d-accordion-item>
      </aa3d-accordion>
    `,
  }),
};

export const AllDepths: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px;">
        <aa3d-accordion style="flex: 1;">
          <aa3d-accordion-item>
            <aa3d-accordion-header panelId="depth-deep" depth="deep">Deep</aa3d-accordion-header>
            <aa3d-accordion-panel panelId="depth-deep">Deep depth content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
        <aa3d-accordion style="flex: 1;">
          <aa3d-accordion-item>
            <aa3d-accordion-header panelId="depth-medium" depth="medium">Medium</aa3d-accordion-header>
            <aa3d-accordion-panel panelId="depth-medium">Medium depth content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
        <aa3d-accordion style="flex: 1;">
          <aa3d-accordion-item>
            <aa3d-accordion-header panelId="depth-subtle" depth="subtle">Subtle</aa3d-accordion-header>
            <aa3d-accordion-panel panelId="depth-subtle">Subtle depth content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
      </div>
    `,
  }),
};

export const ColorPresets: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <aa3d-accordion>
          <aa3d-accordion-item>
            <aa3d-accordion-header panelId="color-red" [theme]="{ hue: 345 }">Red</aa3d-accordion-header>
            <aa3d-accordion-panel panelId="color-red">Red themed content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
        <aa3d-accordion>
          <aa3d-accordion-item>
            <aa3d-accordion-header panelId="color-blue" [theme]="{ hue: 225 }">Blue</aa3d-accordion-header>
            <aa3d-accordion-panel panelId="color-blue">Blue themed content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
        <aa3d-accordion>
          <aa3d-accordion-item>
            <aa3d-accordion-header panelId="color-green" [theme]="{ hue: 145, saturation: 80 }">Green</aa3d-accordion-header>
            <aa3d-accordion-panel panelId="color-green">Green themed content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
        <aa3d-accordion>
          <aa3d-accordion-item>
            <aa3d-accordion-header panelId="color-purple" [theme]="{ hue: 275 }">Purple</aa3d-accordion-header>
            <aa3d-accordion-panel panelId="color-purple">Purple themed content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
        <aa3d-accordion>
          <aa3d-accordion-item>
            <aa3d-accordion-header panelId="color-orange" [theme]="{ hue: 35 }">Orange</aa3d-accordion-header>
            <aa3d-accordion-panel panelId="color-orange">Orange themed content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
      </div>
    `,
  }),
};

export const MultiExpandable: Story = {
  render: () => ({
    template: `
      <aa3d-accordion [multiExpandable]="true">
        <aa3d-accordion-item>
          <aa3d-accordion-header panelId="multi-1">Section 1</aa3d-accordion-header>
          <aa3d-accordion-panel panelId="multi-1">Multiple sections can be open at once.</aa3d-accordion-panel>
        </aa3d-accordion-item>
        <aa3d-accordion-item>
          <aa3d-accordion-header panelId="multi-2">Section 2</aa3d-accordion-header>
          <aa3d-accordion-panel panelId="multi-2">Try opening this while Section 1 is open.</aa3d-accordion-panel>
        </aa3d-accordion-item>
        <aa3d-accordion-item>
          <aa3d-accordion-header panelId="multi-3">Section 3</aa3d-accordion-header>
          <aa3d-accordion-panel panelId="multi-3">All three can be expanded simultaneously.</aa3d-accordion-panel>
        </aa3d-accordion-item>
      </aa3d-accordion>
    `,
  }),
};
