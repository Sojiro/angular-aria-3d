import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  Aa3dMultiselect,
  Aa3dMultiselectTrigger,
  Aa3dMultiselectListbox,
  Aa3dMultiselectOption,
} from './multiselect/multiselect';
import { provideAngularAria3d } from '@angular-aria-3d/core';

const meta: Meta = {
  title: 'Components/Multiselect',
  decorators: [
    moduleMetadata({
      imports: [
        Aa3dMultiselect,
        Aa3dMultiselectTrigger,
        Aa3dMultiselectListbox,
        Aa3dMultiselectOption,
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
      <aa3d-multiselect>
        <aa3d-multiselect-trigger>Choose fruits</aa3d-multiselect-trigger>
        <aa3d-multiselect-listbox>
          <aa3d-multiselect-option>Apple</aa3d-multiselect-option>
          <aa3d-multiselect-option>Banana</aa3d-multiselect-option>
          <aa3d-multiselect-option>Cherry</aa3d-multiselect-option>
          <aa3d-multiselect-option>Date</aa3d-multiselect-option>
        </aa3d-multiselect-listbox>
      </aa3d-multiselect>
    `,
  }),
};

export const AllDepths: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px;">
        <aa3d-multiselect>
          <aa3d-multiselect-trigger depth="deep">Deep</aa3d-multiselect-trigger>
          <aa3d-multiselect-listbox>
            <aa3d-multiselect-option depth="deep">Option 1</aa3d-multiselect-option>
            <aa3d-multiselect-option depth="deep">Option 2</aa3d-multiselect-option>
          </aa3d-multiselect-listbox>
        </aa3d-multiselect>
        <aa3d-multiselect>
          <aa3d-multiselect-trigger depth="medium">Medium</aa3d-multiselect-trigger>
          <aa3d-multiselect-listbox>
            <aa3d-multiselect-option depth="medium">Option 1</aa3d-multiselect-option>
            <aa3d-multiselect-option depth="medium">Option 2</aa3d-multiselect-option>
          </aa3d-multiselect-listbox>
        </aa3d-multiselect>
        <aa3d-multiselect>
          <aa3d-multiselect-trigger depth="subtle">Subtle</aa3d-multiselect-trigger>
          <aa3d-multiselect-listbox>
            <aa3d-multiselect-option depth="subtle">Option 1</aa3d-multiselect-option>
            <aa3d-multiselect-option depth="subtle">Option 2</aa3d-multiselect-option>
          </aa3d-multiselect-listbox>
        </aa3d-multiselect>
      </div>
    `,
  }),
};

export const ColorPresets: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <aa3d-multiselect>
          <aa3d-multiselect-trigger [theme]="{ hue: 345 }">Red</aa3d-multiselect-trigger>
          <aa3d-multiselect-listbox>
            <aa3d-multiselect-option [theme]="{ hue: 345 }">Red 1</aa3d-multiselect-option>
            <aa3d-multiselect-option [theme]="{ hue: 345 }">Red 2</aa3d-multiselect-option>
          </aa3d-multiselect-listbox>
        </aa3d-multiselect>
        <aa3d-multiselect>
          <aa3d-multiselect-trigger [theme]="{ hue: 225 }">Blue</aa3d-multiselect-trigger>
          <aa3d-multiselect-listbox>
            <aa3d-multiselect-option [theme]="{ hue: 225 }">Blue 1</aa3d-multiselect-option>
            <aa3d-multiselect-option [theme]="{ hue: 225 }">Blue 2</aa3d-multiselect-option>
          </aa3d-multiselect-listbox>
        </aa3d-multiselect>
        <aa3d-multiselect>
          <aa3d-multiselect-trigger [theme]="{ hue: 145, saturation: 80 }">Green</aa3d-multiselect-trigger>
          <aa3d-multiselect-listbox>
            <aa3d-multiselect-option [theme]="{ hue: 145, saturation: 80 }">Green 1</aa3d-multiselect-option>
            <aa3d-multiselect-option [theme]="{ hue: 145, saturation: 80 }">Green 2</aa3d-multiselect-option>
          </aa3d-multiselect-listbox>
        </aa3d-multiselect>
        <aa3d-multiselect>
          <aa3d-multiselect-trigger [theme]="{ hue: 275 }">Purple</aa3d-multiselect-trigger>
          <aa3d-multiselect-listbox>
            <aa3d-multiselect-option [theme]="{ hue: 275 }">Purple 1</aa3d-multiselect-option>
            <aa3d-multiselect-option [theme]="{ hue: 275 }">Purple 2</aa3d-multiselect-option>
          </aa3d-multiselect-listbox>
        </aa3d-multiselect>
        <aa3d-multiselect>
          <aa3d-multiselect-trigger [theme]="{ hue: 35 }">Orange</aa3d-multiselect-trigger>
          <aa3d-multiselect-listbox>
            <aa3d-multiselect-option [theme]="{ hue: 35 }">Orange 1</aa3d-multiselect-option>
            <aa3d-multiselect-option [theme]="{ hue: 35 }">Orange 2</aa3d-multiselect-option>
          </aa3d-multiselect-listbox>
        </aa3d-multiselect>
      </div>
    `,
  }),
};
