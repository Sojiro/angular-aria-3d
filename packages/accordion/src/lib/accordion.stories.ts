import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  Aa3dAccordion,
  Aa3dAccordionItem,
  Aa3dAccordionHeader,
  Aa3dAccordionPanel,
} from '@angular-aria-3d/accordion';
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
          <aa3d-accordion-header>Section 1</aa3d-accordion-header>
          <aa3d-accordion-panel>Content for section 1</aa3d-accordion-panel>
        </aa3d-accordion-item>
        <aa3d-accordion-item>
          <aa3d-accordion-header>Section 2</aa3d-accordion-header>
          <aa3d-accordion-panel>Content for section 2</aa3d-accordion-panel>
        </aa3d-accordion-item>
        <aa3d-accordion-item>
          <aa3d-accordion-header>Section 3</aa3d-accordion-header>
          <aa3d-accordion-panel>Content for section 3</aa3d-accordion-panel>
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
            <aa3d-accordion-header depth="deep">Deep</aa3d-accordion-header>
            <aa3d-accordion-panel>Deep depth content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
        <aa3d-accordion style="flex: 1;">
          <aa3d-accordion-item>
            <aa3d-accordion-header depth="medium">Medium</aa3d-accordion-header>
            <aa3d-accordion-panel>Medium depth content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
        <aa3d-accordion style="flex: 1;">
          <aa3d-accordion-item>
            <aa3d-accordion-header depth="subtle">Subtle</aa3d-accordion-header>
            <aa3d-accordion-panel>Subtle depth content</aa3d-accordion-panel>
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
        <aa3d-accordion [theme]="{ hue: 345 }">
          <aa3d-accordion-item>
            <aa3d-accordion-header>Red</aa3d-accordion-header>
            <aa3d-accordion-panel>Red themed content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
        <aa3d-accordion [theme]="{ hue: 225 }">
          <aa3d-accordion-item>
            <aa3d-accordion-header>Blue</aa3d-accordion-header>
            <aa3d-accordion-panel>Blue themed content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
        <aa3d-accordion [theme]="{ hue: 145, saturation: 80 }">
          <aa3d-accordion-item>
            <aa3d-accordion-header>Green</aa3d-accordion-header>
            <aa3d-accordion-panel>Green themed content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
        <aa3d-accordion [theme]="{ hue: 275 }">
          <aa3d-accordion-item>
            <aa3d-accordion-header>Purple</aa3d-accordion-header>
            <aa3d-accordion-panel>Purple themed content</aa3d-accordion-panel>
          </aa3d-accordion-item>
        </aa3d-accordion>
        <aa3d-accordion [theme]="{ hue: 35 }">
          <aa3d-accordion-item>
            <aa3d-accordion-header>Orange</aa3d-accordion-header>
            <aa3d-accordion-panel>Orange themed content</aa3d-accordion-panel>
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
          <aa3d-accordion-header>Section 1</aa3d-accordion-header>
          <aa3d-accordion-panel>Multiple sections can be open at once.</aa3d-accordion-panel>
        </aa3d-accordion-item>
        <aa3d-accordion-item>
          <aa3d-accordion-header>Section 2</aa3d-accordion-header>
          <aa3d-accordion-panel>Try opening this while Section 1 is open.</aa3d-accordion-panel>
        </aa3d-accordion-item>
        <aa3d-accordion-item>
          <aa3d-accordion-header>Section 3</aa3d-accordion-header>
          <aa3d-accordion-panel>All three can be expanded simultaneously.</aa3d-accordion-panel>
        </aa3d-accordion-item>
      </aa3d-accordion>
    `,
  }),
};
