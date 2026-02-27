import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  Aa3dAutocomplete,
  Aa3dAutocompleteInput,
  Aa3dAutocompleteListbox,
  Aa3dAutocompleteOption,
} from './autocomplete/autocomplete';
import { provideAngularAria3d } from '@angular-aria-3d/core';

const meta: Meta = {
  title: 'Components/Autocomplete',
  decorators: [
    moduleMetadata({
      imports: [
        Aa3dAutocomplete,
        Aa3dAutocompleteInput,
        Aa3dAutocompleteListbox,
        Aa3dAutocompleteOption,
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
      <aa3d-autocomplete>
        <aa3d-autocomplete-input></aa3d-autocomplete-input>
        <aa3d-autocomplete-listbox>
          <aa3d-autocomplete-option>Apple</aa3d-autocomplete-option>
          <aa3d-autocomplete-option>Apricot</aa3d-autocomplete-option>
          <aa3d-autocomplete-option>Banana</aa3d-autocomplete-option>
          <aa3d-autocomplete-option>Cherry</aa3d-autocomplete-option>
        </aa3d-autocomplete-listbox>
      </aa3d-autocomplete>
    `,
  }),
};

export const AllDepths: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px;">
        <aa3d-autocomplete>
          <aa3d-autocomplete-input depth="deep"></aa3d-autocomplete-input>
          <aa3d-autocomplete-listbox>
            <aa3d-autocomplete-option depth="deep">Deep 1</aa3d-autocomplete-option>
            <aa3d-autocomplete-option depth="deep">Deep 2</aa3d-autocomplete-option>
          </aa3d-autocomplete-listbox>
        </aa3d-autocomplete>
        <aa3d-autocomplete>
          <aa3d-autocomplete-input depth="medium"></aa3d-autocomplete-input>
          <aa3d-autocomplete-listbox>
            <aa3d-autocomplete-option depth="medium">Medium 1</aa3d-autocomplete-option>
            <aa3d-autocomplete-option depth="medium">Medium 2</aa3d-autocomplete-option>
          </aa3d-autocomplete-listbox>
        </aa3d-autocomplete>
        <aa3d-autocomplete>
          <aa3d-autocomplete-input depth="subtle"></aa3d-autocomplete-input>
          <aa3d-autocomplete-listbox>
            <aa3d-autocomplete-option depth="subtle">Subtle 1</aa3d-autocomplete-option>
            <aa3d-autocomplete-option depth="subtle">Subtle 2</aa3d-autocomplete-option>
          </aa3d-autocomplete-listbox>
        </aa3d-autocomplete>
      </div>
    `,
  }),
};

export const ColorPresets: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <aa3d-autocomplete>
          <aa3d-autocomplete-input [theme]="{ hue: 345 }"></aa3d-autocomplete-input>
          <aa3d-autocomplete-listbox>
            <aa3d-autocomplete-option [theme]="{ hue: 345 }">Red 1</aa3d-autocomplete-option>
            <aa3d-autocomplete-option [theme]="{ hue: 345 }">Red 2</aa3d-autocomplete-option>
          </aa3d-autocomplete-listbox>
        </aa3d-autocomplete>
        <aa3d-autocomplete>
          <aa3d-autocomplete-input [theme]="{ hue: 225 }"></aa3d-autocomplete-input>
          <aa3d-autocomplete-listbox>
            <aa3d-autocomplete-option [theme]="{ hue: 225 }">Blue 1</aa3d-autocomplete-option>
            <aa3d-autocomplete-option [theme]="{ hue: 225 }">Blue 2</aa3d-autocomplete-option>
          </aa3d-autocomplete-listbox>
        </aa3d-autocomplete>
        <aa3d-autocomplete>
          <aa3d-autocomplete-input [theme]="{ hue: 145, saturation: 80 }"></aa3d-autocomplete-input>
          <aa3d-autocomplete-listbox>
            <aa3d-autocomplete-option [theme]="{ hue: 145, saturation: 80 }">Green 1</aa3d-autocomplete-option>
            <aa3d-autocomplete-option [theme]="{ hue: 145, saturation: 80 }">Green 2</aa3d-autocomplete-option>
          </aa3d-autocomplete-listbox>
        </aa3d-autocomplete>
        <aa3d-autocomplete>
          <aa3d-autocomplete-input [theme]="{ hue: 275 }"></aa3d-autocomplete-input>
          <aa3d-autocomplete-listbox>
            <aa3d-autocomplete-option [theme]="{ hue: 275 }">Purple 1</aa3d-autocomplete-option>
            <aa3d-autocomplete-option [theme]="{ hue: 275 }">Purple 2</aa3d-autocomplete-option>
          </aa3d-autocomplete-listbox>
        </aa3d-autocomplete>
        <aa3d-autocomplete>
          <aa3d-autocomplete-input [theme]="{ hue: 35 }"></aa3d-autocomplete-input>
          <aa3d-autocomplete-listbox>
            <aa3d-autocomplete-option [theme]="{ hue: 35 }">Orange 1</aa3d-autocomplete-option>
            <aa3d-autocomplete-option [theme]="{ hue: 35 }">Orange 2</aa3d-autocomplete-option>
          </aa3d-autocomplete-listbox>
        </aa3d-autocomplete>
      </div>
    `,
  }),
};
