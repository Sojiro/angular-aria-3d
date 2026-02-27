import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Aa3dGrid, Aa3dGridRow, Aa3dGridCell } from '@angular-aria-3d/grid';
import { provideAngularAria3d } from '@angular-aria-3d/core';

const meta: Meta = {
  title: 'Components/Grid',
  decorators: [
    moduleMetadata({
      imports: [Aa3dGrid, Aa3dGridRow, Aa3dGridCell],
      providers: [provideAngularAria3d()],
    }),
  ],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <aa3d-grid>
        <aa3d-grid-row>
          <aa3d-grid-cell>A1</aa3d-grid-cell>
          <aa3d-grid-cell>B1</aa3d-grid-cell>
          <aa3d-grid-cell>C1</aa3d-grid-cell>
        </aa3d-grid-row>
        <aa3d-grid-row>
          <aa3d-grid-cell>A2</aa3d-grid-cell>
          <aa3d-grid-cell>B2</aa3d-grid-cell>
          <aa3d-grid-cell>C2</aa3d-grid-cell>
        </aa3d-grid-row>
        <aa3d-grid-row>
          <aa3d-grid-cell>A3</aa3d-grid-cell>
          <aa3d-grid-cell>B3</aa3d-grid-cell>
          <aa3d-grid-cell>C3</aa3d-grid-cell>
        </aa3d-grid-row>
      </aa3d-grid>
    `,
  }),
};

export const AllDepths: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px;">
        <aa3d-grid>
          <aa3d-grid-row>
            <aa3d-grid-cell depth="deep">Deep 1</aa3d-grid-cell>
            <aa3d-grid-cell depth="deep">Deep 2</aa3d-grid-cell>
          </aa3d-grid-row>
          <aa3d-grid-row>
            <aa3d-grid-cell depth="deep">Deep 3</aa3d-grid-cell>
            <aa3d-grid-cell depth="deep">Deep 4</aa3d-grid-cell>
          </aa3d-grid-row>
        </aa3d-grid>
        <aa3d-grid>
          <aa3d-grid-row>
            <aa3d-grid-cell depth="medium">Medium 1</aa3d-grid-cell>
            <aa3d-grid-cell depth="medium">Medium 2</aa3d-grid-cell>
          </aa3d-grid-row>
          <aa3d-grid-row>
            <aa3d-grid-cell depth="medium">Medium 3</aa3d-grid-cell>
            <aa3d-grid-cell depth="medium">Medium 4</aa3d-grid-cell>
          </aa3d-grid-row>
        </aa3d-grid>
        <aa3d-grid>
          <aa3d-grid-row>
            <aa3d-grid-cell depth="subtle">Subtle 1</aa3d-grid-cell>
            <aa3d-grid-cell depth="subtle">Subtle 2</aa3d-grid-cell>
          </aa3d-grid-row>
          <aa3d-grid-row>
            <aa3d-grid-cell depth="subtle">Subtle 3</aa3d-grid-cell>
            <aa3d-grid-cell depth="subtle">Subtle 4</aa3d-grid-cell>
          </aa3d-grid-row>
        </aa3d-grid>
      </div>
    `,
  }),
};

export const ColorPresets: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <aa3d-grid>
          <aa3d-grid-row>
            <aa3d-grid-cell [theme]="{ hue: 345 }">Red 1</aa3d-grid-cell>
            <aa3d-grid-cell [theme]="{ hue: 345 }">Red 2</aa3d-grid-cell>
          </aa3d-grid-row>
        </aa3d-grid>
        <aa3d-grid>
          <aa3d-grid-row>
            <aa3d-grid-cell [theme]="{ hue: 225 }">Blue 1</aa3d-grid-cell>
            <aa3d-grid-cell [theme]="{ hue: 225 }">Blue 2</aa3d-grid-cell>
          </aa3d-grid-row>
        </aa3d-grid>
        <aa3d-grid>
          <aa3d-grid-row>
            <aa3d-grid-cell [theme]="{ hue: 145, saturation: 80 }">Green 1</aa3d-grid-cell>
            <aa3d-grid-cell [theme]="{ hue: 145, saturation: 80 }">Green 2</aa3d-grid-cell>
          </aa3d-grid-row>
        </aa3d-grid>
        <aa3d-grid>
          <aa3d-grid-row>
            <aa3d-grid-cell [theme]="{ hue: 275 }">Purple 1</aa3d-grid-cell>
            <aa3d-grid-cell [theme]="{ hue: 275 }">Purple 2</aa3d-grid-cell>
          </aa3d-grid-row>
        </aa3d-grid>
        <aa3d-grid>
          <aa3d-grid-row>
            <aa3d-grid-cell [theme]="{ hue: 35 }">Orange 1</aa3d-grid-cell>
            <aa3d-grid-cell [theme]="{ hue: 35 }">Orange 2</aa3d-grid-cell>
          </aa3d-grid-row>
        </aa3d-grid>
      </div>
    `,
  }),
};

export const WithSelection: Story = {
  render: () => ({
    template: `
      <aa3d-grid [enableSelection]="true" selectionMode="follow">
        <aa3d-grid-row>
          <aa3d-grid-cell>Selectable A1</aa3d-grid-cell>
          <aa3d-grid-cell>Selectable B1</aa3d-grid-cell>
          <aa3d-grid-cell>Selectable C1</aa3d-grid-cell>
        </aa3d-grid-row>
        <aa3d-grid-row>
          <aa3d-grid-cell>Selectable A2</aa3d-grid-cell>
          <aa3d-grid-cell>Selectable B2</aa3d-grid-cell>
          <aa3d-grid-cell>Selectable C2</aa3d-grid-cell>
        </aa3d-grid-row>
      </aa3d-grid>
    `,
  }),
};
