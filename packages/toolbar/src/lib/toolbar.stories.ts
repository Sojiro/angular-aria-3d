import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  Aa3dToolbar,
  Aa3dToolbarButton,
  Aa3dToolbarWidgetGroup,
} from '@angular-aria-3d/toolbar';
import { provideAngularAria3d } from '@angular-aria-3d/core';

const meta: Meta = {
  title: 'Components/Toolbar',
  decorators: [
    moduleMetadata({
      imports: [Aa3dToolbar, Aa3dToolbarButton, Aa3dToolbarWidgetGroup],
      providers: [provideAngularAria3d()],
    }),
  ],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <aa3d-toolbar>
        <aa3d-toolbar-button>Bold</aa3d-toolbar-button>
        <aa3d-toolbar-button>Italic</aa3d-toolbar-button>
        <aa3d-toolbar-button>Underline</aa3d-toolbar-button>
      </aa3d-toolbar>
    `,
  }),
};

export const AllDepths: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <aa3d-toolbar>
          <aa3d-toolbar-button depth="deep">Deep 1</aa3d-toolbar-button>
          <aa3d-toolbar-button depth="deep">Deep 2</aa3d-toolbar-button>
        </aa3d-toolbar>
        <aa3d-toolbar>
          <aa3d-toolbar-button depth="medium">Medium 1</aa3d-toolbar-button>
          <aa3d-toolbar-button depth="medium">Medium 2</aa3d-toolbar-button>
        </aa3d-toolbar>
        <aa3d-toolbar>
          <aa3d-toolbar-button depth="subtle">Subtle 1</aa3d-toolbar-button>
          <aa3d-toolbar-button depth="subtle">Subtle 2</aa3d-toolbar-button>
        </aa3d-toolbar>
      </div>
    `,
  }),
};

export const ColorPresets: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <aa3d-toolbar>
          <aa3d-toolbar-button [theme]="{ hue: 345 }">Red 1</aa3d-toolbar-button>
          <aa3d-toolbar-button [theme]="{ hue: 345 }">Red 2</aa3d-toolbar-button>
        </aa3d-toolbar>
        <aa3d-toolbar>
          <aa3d-toolbar-button [theme]="{ hue: 225 }">Blue 1</aa3d-toolbar-button>
          <aa3d-toolbar-button [theme]="{ hue: 225 }">Blue 2</aa3d-toolbar-button>
        </aa3d-toolbar>
        <aa3d-toolbar>
          <aa3d-toolbar-button [theme]="{ hue: 145, saturation: 80 }">Green 1</aa3d-toolbar-button>
          <aa3d-toolbar-button [theme]="{ hue: 145, saturation: 80 }">Green 2</aa3d-toolbar-button>
        </aa3d-toolbar>
        <aa3d-toolbar>
          <aa3d-toolbar-button [theme]="{ hue: 275 }">Purple 1</aa3d-toolbar-button>
          <aa3d-toolbar-button [theme]="{ hue: 275 }">Purple 2</aa3d-toolbar-button>
        </aa3d-toolbar>
        <aa3d-toolbar>
          <aa3d-toolbar-button [theme]="{ hue: 35 }">Orange 1</aa3d-toolbar-button>
          <aa3d-toolbar-button [theme]="{ hue: 35 }">Orange 2</aa3d-toolbar-button>
        </aa3d-toolbar>
      </div>
    `,
  }),
};

export const WithWidgetGroups: Story = {
  render: () => ({
    template: `
      <aa3d-toolbar>
        <aa3d-toolbar-widget-group>
          <aa3d-toolbar-button>Bold</aa3d-toolbar-button>
          <aa3d-toolbar-button>Italic</aa3d-toolbar-button>
        </aa3d-toolbar-widget-group>
        <aa3d-toolbar-widget-group>
          <aa3d-toolbar-button>Left</aa3d-toolbar-button>
          <aa3d-toolbar-button>Center</aa3d-toolbar-button>
          <aa3d-toolbar-button>Right</aa3d-toolbar-button>
        </aa3d-toolbar-widget-group>
      </aa3d-toolbar>
    `,
  }),
};
