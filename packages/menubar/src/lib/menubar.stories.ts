import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  Aa3dMenubar,
  Aa3dMenubarTrigger,
  Aa3dMenubarItem,
} from '@angular-aria-3d/menubar';
import { provideAngularAria3d } from '@angular-aria-3d/core';

const meta: Meta = {
  title: 'Components/Menubar',
  decorators: [
    moduleMetadata({
      imports: [Aa3dMenubar, Aa3dMenubarTrigger, Aa3dMenubarItem],
      providers: [provideAngularAria3d()],
    }),
  ],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <aa3d-menubar>
        <aa3d-menubar-trigger>File</aa3d-menubar-trigger>
        <aa3d-menubar-item>New</aa3d-menubar-item>
        <aa3d-menubar-item>Open</aa3d-menubar-item>
        <aa3d-menubar-item>Save</aa3d-menubar-item>
      </aa3d-menubar>
    `,
  }),
};

export const AllDepths: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <aa3d-menubar>
          <aa3d-menubar-trigger depth="deep">Deep</aa3d-menubar-trigger>
          <aa3d-menubar-item depth="deep">Item 1</aa3d-menubar-item>
          <aa3d-menubar-item depth="deep">Item 2</aa3d-menubar-item>
        </aa3d-menubar>
        <aa3d-menubar>
          <aa3d-menubar-trigger depth="medium">Medium</aa3d-menubar-trigger>
          <aa3d-menubar-item depth="medium">Item 1</aa3d-menubar-item>
          <aa3d-menubar-item depth="medium">Item 2</aa3d-menubar-item>
        </aa3d-menubar>
        <aa3d-menubar>
          <aa3d-menubar-trigger depth="subtle">Subtle</aa3d-menubar-trigger>
          <aa3d-menubar-item depth="subtle">Item 1</aa3d-menubar-item>
          <aa3d-menubar-item depth="subtle">Item 2</aa3d-menubar-item>
        </aa3d-menubar>
      </div>
    `,
  }),
};

export const ColorPresets: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <aa3d-menubar [theme]="{ hue: 345 }">
          <aa3d-menubar-trigger>Red</aa3d-menubar-trigger>
          <aa3d-menubar-item>Item 1</aa3d-menubar-item>
          <aa3d-menubar-item>Item 2</aa3d-menubar-item>
        </aa3d-menubar>
        <aa3d-menubar [theme]="{ hue: 225 }">
          <aa3d-menubar-trigger>Blue</aa3d-menubar-trigger>
          <aa3d-menubar-item>Item 1</aa3d-menubar-item>
          <aa3d-menubar-item>Item 2</aa3d-menubar-item>
        </aa3d-menubar>
        <aa3d-menubar [theme]="{ hue: 145, saturation: 80 }">
          <aa3d-menubar-trigger>Green</aa3d-menubar-trigger>
          <aa3d-menubar-item>Item 1</aa3d-menubar-item>
          <aa3d-menubar-item>Item 2</aa3d-menubar-item>
        </aa3d-menubar>
        <aa3d-menubar [theme]="{ hue: 275 }">
          <aa3d-menubar-trigger>Purple</aa3d-menubar-trigger>
          <aa3d-menubar-item>Item 1</aa3d-menubar-item>
          <aa3d-menubar-item>Item 2</aa3d-menubar-item>
        </aa3d-menubar>
        <aa3d-menubar [theme]="{ hue: 35 }">
          <aa3d-menubar-trigger>Orange</aa3d-menubar-trigger>
          <aa3d-menubar-item>Item 1</aa3d-menubar-item>
          <aa3d-menubar-item>Item 2</aa3d-menubar-item>
        </aa3d-menubar>
      </div>
    `,
  }),
};
