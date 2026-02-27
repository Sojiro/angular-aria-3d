import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  Aa3dSelect,
  Aa3dSelectTrigger,
  Aa3dSelectListbox,
  Aa3dSelectOption,
} from '@angular-aria-3d/select';
import { provideAngularAria3d } from '@angular-aria-3d/core';

const meta: Meta = {
  title: 'Components/Select',
  decorators: [
    moduleMetadata({
      imports: [
        Aa3dSelect,
        Aa3dSelectTrigger,
        Aa3dSelectListbox,
        Aa3dSelectOption,
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
      <aa3d-select>
        <aa3d-select-trigger>Choose a fruit</aa3d-select-trigger>
        <aa3d-select-listbox>
          <aa3d-select-option>Apple</aa3d-select-option>
          <aa3d-select-option>Banana</aa3d-select-option>
          <aa3d-select-option>Cherry</aa3d-select-option>
        </aa3d-select-listbox>
      </aa3d-select>
    `,
  }),
};

export const AllDepths: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px;">
        <aa3d-select>
          <aa3d-select-trigger depth="deep">Deep</aa3d-select-trigger>
          <aa3d-select-listbox>
            <aa3d-select-option depth="deep">Option 1</aa3d-select-option>
            <aa3d-select-option depth="deep">Option 2</aa3d-select-option>
          </aa3d-select-listbox>
        </aa3d-select>
        <aa3d-select>
          <aa3d-select-trigger depth="medium">Medium</aa3d-select-trigger>
          <aa3d-select-listbox>
            <aa3d-select-option depth="medium">Option 1</aa3d-select-option>
            <aa3d-select-option depth="medium">Option 2</aa3d-select-option>
          </aa3d-select-listbox>
        </aa3d-select>
        <aa3d-select>
          <aa3d-select-trigger depth="subtle">Subtle</aa3d-select-trigger>
          <aa3d-select-listbox>
            <aa3d-select-option depth="subtle">Option 1</aa3d-select-option>
            <aa3d-select-option depth="subtle">Option 2</aa3d-select-option>
          </aa3d-select-listbox>
        </aa3d-select>
      </div>
    `,
  }),
};

export const ColorPresets: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <aa3d-select [theme]="{ hue: 345 }">
          <aa3d-select-trigger>Red</aa3d-select-trigger>
          <aa3d-select-listbox>
            <aa3d-select-option>Red 1</aa3d-select-option>
            <aa3d-select-option>Red 2</aa3d-select-option>
          </aa3d-select-listbox>
        </aa3d-select>
        <aa3d-select [theme]="{ hue: 225 }">
          <aa3d-select-trigger>Blue</aa3d-select-trigger>
          <aa3d-select-listbox>
            <aa3d-select-option>Blue 1</aa3d-select-option>
            <aa3d-select-option>Blue 2</aa3d-select-option>
          </aa3d-select-listbox>
        </aa3d-select>
        <aa3d-select [theme]="{ hue: 145, saturation: 80 }">
          <aa3d-select-trigger>Green</aa3d-select-trigger>
          <aa3d-select-listbox>
            <aa3d-select-option>Green 1</aa3d-select-option>
            <aa3d-select-option>Green 2</aa3d-select-option>
          </aa3d-select-listbox>
        </aa3d-select>
        <aa3d-select [theme]="{ hue: 275 }">
          <aa3d-select-trigger>Purple</aa3d-select-trigger>
          <aa3d-select-listbox>
            <aa3d-select-option>Purple 1</aa3d-select-option>
            <aa3d-select-option>Purple 2</aa3d-select-option>
          </aa3d-select-listbox>
        </aa3d-select>
        <aa3d-select [theme]="{ hue: 35 }">
          <aa3d-select-trigger>Orange</aa3d-select-trigger>
          <aa3d-select-listbox>
            <aa3d-select-option>Orange 1</aa3d-select-option>
            <aa3d-select-option>Orange 2</aa3d-select-option>
          </aa3d-select-listbox>
        </aa3d-select>
      </div>
    `,
  }),
};
