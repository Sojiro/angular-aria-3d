import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  Aa3dCombobox,
  Aa3dComboboxInput,
  Aa3dComboboxListbox,
  Aa3dComboboxOption,
} from './combobox/combobox';
import { provideAngularAria3d } from '@angular-aria-3d/core';

const meta: Meta = {
  title: 'Components/Combobox',
  decorators: [
    moduleMetadata({
      imports: [
        Aa3dCombobox,
        Aa3dComboboxInput,
        Aa3dComboboxListbox,
        Aa3dComboboxOption,
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
      <aa3d-combobox>
        <aa3d-combobox-input></aa3d-combobox-input>
        <aa3d-combobox-listbox>
          <aa3d-combobox-option>Apple</aa3d-combobox-option>
          <aa3d-combobox-option>Apricot</aa3d-combobox-option>
          <aa3d-combobox-option>Banana</aa3d-combobox-option>
          <aa3d-combobox-option>Cherry</aa3d-combobox-option>
        </aa3d-combobox-listbox>
      </aa3d-combobox>
    `,
  }),
};

export const AllDepths: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px;">
        <aa3d-combobox>
          <aa3d-combobox-input depth="deep"></aa3d-combobox-input>
          <aa3d-combobox-listbox>
            <aa3d-combobox-option depth="deep">Deep 1</aa3d-combobox-option>
            <aa3d-combobox-option depth="deep">Deep 2</aa3d-combobox-option>
          </aa3d-combobox-listbox>
        </aa3d-combobox>
        <aa3d-combobox>
          <aa3d-combobox-input depth="medium"></aa3d-combobox-input>
          <aa3d-combobox-listbox>
            <aa3d-combobox-option depth="medium">Medium 1</aa3d-combobox-option>
            <aa3d-combobox-option depth="medium">Medium 2</aa3d-combobox-option>
          </aa3d-combobox-listbox>
        </aa3d-combobox>
        <aa3d-combobox>
          <aa3d-combobox-input depth="subtle"></aa3d-combobox-input>
          <aa3d-combobox-listbox>
            <aa3d-combobox-option depth="subtle">Subtle 1</aa3d-combobox-option>
            <aa3d-combobox-option depth="subtle">Subtle 2</aa3d-combobox-option>
          </aa3d-combobox-listbox>
        </aa3d-combobox>
      </div>
    `,
  }),
};

export const ColorPresets: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <aa3d-combobox>
          <aa3d-combobox-input [theme]="{ hue: 345 }"></aa3d-combobox-input>
          <aa3d-combobox-listbox>
            <aa3d-combobox-option [theme]="{ hue: 345 }">Red 1</aa3d-combobox-option>
            <aa3d-combobox-option [theme]="{ hue: 345 }">Red 2</aa3d-combobox-option>
          </aa3d-combobox-listbox>
        </aa3d-combobox>
        <aa3d-combobox>
          <aa3d-combobox-input [theme]="{ hue: 225 }"></aa3d-combobox-input>
          <aa3d-combobox-listbox>
            <aa3d-combobox-option [theme]="{ hue: 225 }">Blue 1</aa3d-combobox-option>
            <aa3d-combobox-option [theme]="{ hue: 225 }">Blue 2</aa3d-combobox-option>
          </aa3d-combobox-listbox>
        </aa3d-combobox>
        <aa3d-combobox>
          <aa3d-combobox-input [theme]="{ hue: 145, saturation: 80 }"></aa3d-combobox-input>
          <aa3d-combobox-listbox>
            <aa3d-combobox-option [theme]="{ hue: 145, saturation: 80 }">Green 1</aa3d-combobox-option>
            <aa3d-combobox-option [theme]="{ hue: 145, saturation: 80 }">Green 2</aa3d-combobox-option>
          </aa3d-combobox-listbox>
        </aa3d-combobox>
        <aa3d-combobox>
          <aa3d-combobox-input [theme]="{ hue: 275 }"></aa3d-combobox-input>
          <aa3d-combobox-listbox>
            <aa3d-combobox-option [theme]="{ hue: 275 }">Purple 1</aa3d-combobox-option>
            <aa3d-combobox-option [theme]="{ hue: 275 }">Purple 2</aa3d-combobox-option>
          </aa3d-combobox-listbox>
        </aa3d-combobox>
        <aa3d-combobox>
          <aa3d-combobox-input [theme]="{ hue: 35 }"></aa3d-combobox-input>
          <aa3d-combobox-listbox>
            <aa3d-combobox-option [theme]="{ hue: 35 }">Orange 1</aa3d-combobox-option>
            <aa3d-combobox-option [theme]="{ hue: 35 }">Orange 2</aa3d-combobox-option>
          </aa3d-combobox-listbox>
        </aa3d-combobox>
      </div>
    `,
  }),
};
