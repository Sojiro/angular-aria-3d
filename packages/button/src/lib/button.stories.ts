import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Aa3dButton } from './button.component';
import { provideAngularAria3d } from '@angular-aria-3d/core';

const meta: Meta = {
  title: 'Components/Button',
  decorators: [
    moduleMetadata({
      imports: [Aa3dButton],
      providers: [provideAngularAria3d()],
    }),
  ],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `<aa3d-button>Push me</aa3d-button>`,
  }),
};

export const AllDepths: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <aa3d-button depth="deep">Deep</aa3d-button>
        <aa3d-button depth="medium">Medium</aa3d-button>
        <aa3d-button depth="subtle">Subtle</aa3d-button>
      </div>
    `,
  }),
};

export const ColorPresets: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <aa3d-button [theme]="{ hue: 345 }">Red</aa3d-button>
        <aa3d-button [theme]="{ hue: 225 }">Blue</aa3d-button>
        <aa3d-button [theme]="{ hue: 145, saturation: 80 }">Green</aa3d-button>
        <aa3d-button [theme]="{ hue: 275 }">Purple</aa3d-button>
        <aa3d-button [theme]="{ hue: 35 }">Orange</aa3d-button>
      </div>
    `,
  }),
};
