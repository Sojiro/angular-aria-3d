import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Aa3dListbox, Aa3dOption } from '@angular-aria-3d/listbox';
import { provideAngularAria3d } from '@angular-aria-3d/core';

const meta: Meta = {
  title: 'Components/Listbox',
  decorators: [
    moduleMetadata({
      imports: [Aa3dListbox, Aa3dOption],
      providers: [provideAngularAria3d()],
    }),
  ],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <aa3d-listbox>
        <aa3d-option>Apple</aa3d-option>
        <aa3d-option>Banana</aa3d-option>
        <aa3d-option>Cherry</aa3d-option>
        <aa3d-option>Date</aa3d-option>
      </aa3d-listbox>
    `,
  }),
};

export const AllDepths: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px;">
        <aa3d-listbox>
          <aa3d-option depth="deep">Deep 1</aa3d-option>
          <aa3d-option depth="deep">Deep 2</aa3d-option>
          <aa3d-option depth="deep">Deep 3</aa3d-option>
        </aa3d-listbox>
        <aa3d-listbox>
          <aa3d-option depth="medium">Medium 1</aa3d-option>
          <aa3d-option depth="medium">Medium 2</aa3d-option>
          <aa3d-option depth="medium">Medium 3</aa3d-option>
        </aa3d-listbox>
        <aa3d-listbox>
          <aa3d-option depth="subtle">Subtle 1</aa3d-option>
          <aa3d-option depth="subtle">Subtle 2</aa3d-option>
          <aa3d-option depth="subtle">Subtle 3</aa3d-option>
        </aa3d-listbox>
      </div>
    `,
  }),
};

export const ColorPresets: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <aa3d-listbox>
          <aa3d-option [theme]="{ hue: 345 }">Red 1</aa3d-option>
          <aa3d-option [theme]="{ hue: 345 }">Red 2</aa3d-option>
        </aa3d-listbox>
        <aa3d-listbox>
          <aa3d-option [theme]="{ hue: 225 }">Blue 1</aa3d-option>
          <aa3d-option [theme]="{ hue: 225 }">Blue 2</aa3d-option>
        </aa3d-listbox>
        <aa3d-listbox>
          <aa3d-option [theme]="{ hue: 145, saturation: 80 }">Green 1</aa3d-option>
          <aa3d-option [theme]="{ hue: 145, saturation: 80 }">Green 2</aa3d-option>
        </aa3d-listbox>
        <aa3d-listbox>
          <aa3d-option [theme]="{ hue: 275 }">Purple 1</aa3d-option>
          <aa3d-option [theme]="{ hue: 275 }">Purple 2</aa3d-option>
        </aa3d-listbox>
        <aa3d-listbox>
          <aa3d-option [theme]="{ hue: 35 }">Orange 1</aa3d-option>
          <aa3d-option [theme]="{ hue: 35 }">Orange 2</aa3d-option>
        </aa3d-listbox>
      </div>
    `,
  }),
};
