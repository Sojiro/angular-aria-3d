import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  Aa3dMenu,
  Aa3dMenuTrigger,
  Aa3dMenuItem,
} from './menu';
import { provideAngularAria3d } from '@angular-aria-3d/core';

const meta: Meta = {
  title: 'Components/Menu',
  decorators: [
    moduleMetadata({
      imports: [Aa3dMenu, Aa3dMenuTrigger, Aa3dMenuItem],
      providers: [provideAngularAria3d()],
    }),
  ],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <aa3d-menu>
        <aa3d-menu-trigger>Open Menu</aa3d-menu-trigger>
        <aa3d-menu-item>Cut</aa3d-menu-item>
        <aa3d-menu-item>Copy</aa3d-menu-item>
        <aa3d-menu-item>Paste</aa3d-menu-item>
      </aa3d-menu>
    `,
  }),
};

export const AllDepths: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px;">
        <aa3d-menu>
          <aa3d-menu-trigger depth="deep">Deep Trigger</aa3d-menu-trigger>
          <aa3d-menu-item depth="deep">Deep Item 1</aa3d-menu-item>
          <aa3d-menu-item depth="deep">Deep Item 2</aa3d-menu-item>
        </aa3d-menu>
        <aa3d-menu>
          <aa3d-menu-trigger depth="medium">Medium Trigger</aa3d-menu-trigger>
          <aa3d-menu-item depth="medium">Medium Item 1</aa3d-menu-item>
          <aa3d-menu-item depth="medium">Medium Item 2</aa3d-menu-item>
        </aa3d-menu>
        <aa3d-menu>
          <aa3d-menu-trigger depth="subtle">Subtle Trigger</aa3d-menu-trigger>
          <aa3d-menu-item depth="subtle">Subtle Item 1</aa3d-menu-item>
          <aa3d-menu-item depth="subtle">Subtle Item 2</aa3d-menu-item>
        </aa3d-menu>
      </div>
    `,
  }),
};

export const ColorPresets: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <aa3d-menu>
          <aa3d-menu-trigger [theme]="{ hue: 345 }">Red</aa3d-menu-trigger>
          <aa3d-menu-item [theme]="{ hue: 345 }">Red Item 1</aa3d-menu-item>
          <aa3d-menu-item [theme]="{ hue: 345 }">Red Item 2</aa3d-menu-item>
        </aa3d-menu>
        <aa3d-menu>
          <aa3d-menu-trigger [theme]="{ hue: 225 }">Blue</aa3d-menu-trigger>
          <aa3d-menu-item [theme]="{ hue: 225 }">Blue Item 1</aa3d-menu-item>
          <aa3d-menu-item [theme]="{ hue: 225 }">Blue Item 2</aa3d-menu-item>
        </aa3d-menu>
        <aa3d-menu>
          <aa3d-menu-trigger [theme]="{ hue: 145, saturation: 80 }">Green</aa3d-menu-trigger>
          <aa3d-menu-item [theme]="{ hue: 145, saturation: 80 }">Green Item 1</aa3d-menu-item>
          <aa3d-menu-item [theme]="{ hue: 145, saturation: 80 }">Green Item 2</aa3d-menu-item>
        </aa3d-menu>
        <aa3d-menu>
          <aa3d-menu-trigger [theme]="{ hue: 275 }">Purple</aa3d-menu-trigger>
          <aa3d-menu-item [theme]="{ hue: 275 }">Purple Item 1</aa3d-menu-item>
          <aa3d-menu-item [theme]="{ hue: 275 }">Purple Item 2</aa3d-menu-item>
        </aa3d-menu>
        <aa3d-menu>
          <aa3d-menu-trigger [theme]="{ hue: 35 }">Orange</aa3d-menu-trigger>
          <aa3d-menu-item [theme]="{ hue: 35 }">Orange Item 1</aa3d-menu-item>
          <aa3d-menu-item [theme]="{ hue: 35 }">Orange Item 2</aa3d-menu-item>
        </aa3d-menu>
      </div>
    `,
  }),
};
