import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  Aa3dMenubar,
  Aa3dMenubarTrigger,
  Aa3dMenubarItem,
} from './menubar';
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
        <aa3d-menubar>
          <aa3d-menubar-trigger [theme]="{ hue: 345 }">Red</aa3d-menubar-trigger>
          <aa3d-menubar-item [theme]="{ hue: 345 }">Item 1</aa3d-menubar-item>
          <aa3d-menubar-item [theme]="{ hue: 345 }">Item 2</aa3d-menubar-item>
        </aa3d-menubar>
        <aa3d-menubar>
          <aa3d-menubar-trigger [theme]="{ hue: 225 }">Blue</aa3d-menubar-trigger>
          <aa3d-menubar-item [theme]="{ hue: 225 }">Item 1</aa3d-menubar-item>
          <aa3d-menubar-item [theme]="{ hue: 225 }">Item 2</aa3d-menubar-item>
        </aa3d-menubar>
        <aa3d-menubar>
          <aa3d-menubar-trigger [theme]="{ hue: 145, saturation: 80 }">Green</aa3d-menubar-trigger>
          <aa3d-menubar-item [theme]="{ hue: 145, saturation: 80 }">Item 1</aa3d-menubar-item>
          <aa3d-menubar-item [theme]="{ hue: 145, saturation: 80 }">Item 2</aa3d-menubar-item>
        </aa3d-menubar>
        <aa3d-menubar>
          <aa3d-menubar-trigger [theme]="{ hue: 275 }">Purple</aa3d-menubar-trigger>
          <aa3d-menubar-item [theme]="{ hue: 275 }">Item 1</aa3d-menubar-item>
          <aa3d-menubar-item [theme]="{ hue: 275 }">Item 2</aa3d-menubar-item>
        </aa3d-menubar>
        <aa3d-menubar>
          <aa3d-menubar-trigger [theme]="{ hue: 35 }">Orange</aa3d-menubar-trigger>
          <aa3d-menubar-item [theme]="{ hue: 35 }">Item 1</aa3d-menubar-item>
          <aa3d-menubar-item [theme]="{ hue: 35 }">Item 2</aa3d-menubar-item>
        </aa3d-menubar>
      </div>
    `,
  }),
};
