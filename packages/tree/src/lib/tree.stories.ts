import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  Aa3dTree,
  Aa3dTreeItem,
  Aa3dTreeItemGroup,
} from '@angular-aria-3d/tree';
import { provideAngularAria3d } from '@angular-aria-3d/core';

const meta: Meta = {
  title: 'Components/Tree',
  decorators: [
    moduleMetadata({
      imports: [Aa3dTree, Aa3dTreeItem, Aa3dTreeItemGroup],
      providers: [provideAngularAria3d()],
    }),
  ],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <aa3d-tree>
        <aa3d-tree-item>
          Documents
          <ng-template aa3dTreeItemGroup>
            <aa3d-tree-item>Resume.pdf</aa3d-tree-item>
            <aa3d-tree-item>Cover Letter.pdf</aa3d-tree-item>
          </ng-template>
        </aa3d-tree-item>
        <aa3d-tree-item>
          Photos
          <ng-template aa3dTreeItemGroup>
            <aa3d-tree-item>Vacation.jpg</aa3d-tree-item>
            <aa3d-tree-item>Portrait.png</aa3d-tree-item>
          </ng-template>
        </aa3d-tree-item>
        <aa3d-tree-item>Notes.txt</aa3d-tree-item>
      </aa3d-tree>
    `,
  }),
};

export const AllDepths: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px;">
        <aa3d-tree>
          <aa3d-tree-item depth="deep">Deep Item 1</aa3d-tree-item>
          <aa3d-tree-item depth="deep">Deep Item 2</aa3d-tree-item>
          <aa3d-tree-item depth="deep">Deep Item 3</aa3d-tree-item>
        </aa3d-tree>
        <aa3d-tree>
          <aa3d-tree-item depth="medium">Medium Item 1</aa3d-tree-item>
          <aa3d-tree-item depth="medium">Medium Item 2</aa3d-tree-item>
          <aa3d-tree-item depth="medium">Medium Item 3</aa3d-tree-item>
        </aa3d-tree>
        <aa3d-tree>
          <aa3d-tree-item depth="subtle">Subtle Item 1</aa3d-tree-item>
          <aa3d-tree-item depth="subtle">Subtle Item 2</aa3d-tree-item>
          <aa3d-tree-item depth="subtle">Subtle Item 3</aa3d-tree-item>
        </aa3d-tree>
      </div>
    `,
  }),
};

export const ColorPresets: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <aa3d-tree>
          <aa3d-tree-item [theme]="{ hue: 345 }">Red 1</aa3d-tree-item>
          <aa3d-tree-item [theme]="{ hue: 345 }">Red 2</aa3d-tree-item>
        </aa3d-tree>
        <aa3d-tree>
          <aa3d-tree-item [theme]="{ hue: 225 }">Blue 1</aa3d-tree-item>
          <aa3d-tree-item [theme]="{ hue: 225 }">Blue 2</aa3d-tree-item>
        </aa3d-tree>
        <aa3d-tree>
          <aa3d-tree-item [theme]="{ hue: 145, saturation: 80 }">Green 1</aa3d-tree-item>
          <aa3d-tree-item [theme]="{ hue: 145, saturation: 80 }">Green 2</aa3d-tree-item>
        </aa3d-tree>
        <aa3d-tree>
          <aa3d-tree-item [theme]="{ hue: 275 }">Purple 1</aa3d-tree-item>
          <aa3d-tree-item [theme]="{ hue: 275 }">Purple 2</aa3d-tree-item>
        </aa3d-tree>
        <aa3d-tree>
          <aa3d-tree-item [theme]="{ hue: 35 }">Orange 1</aa3d-tree-item>
          <aa3d-tree-item [theme]="{ hue: 35 }">Orange 2</aa3d-tree-item>
        </aa3d-tree>
      </div>
    `,
  }),
};

export const NestedTree: Story = {
  render: () => ({
    template: `
      <aa3d-tree>
        <aa3d-tree-item>
          src
          <ng-template aa3dTreeItemGroup>
            <aa3d-tree-item>
              app
              <ng-template aa3dTreeItemGroup>
                <aa3d-tree-item>app.component.ts</aa3d-tree-item>
                <aa3d-tree-item>app.module.ts</aa3d-tree-item>
              </ng-template>
            </aa3d-tree-item>
            <aa3d-tree-item>
              assets
              <ng-template aa3dTreeItemGroup>
                <aa3d-tree-item>logo.svg</aa3d-tree-item>
              </ng-template>
            </aa3d-tree-item>
            <aa3d-tree-item>main.ts</aa3d-tree-item>
          </ng-template>
        </aa3d-tree-item>
        <aa3d-tree-item>package.json</aa3d-tree-item>
        <aa3d-tree-item>tsconfig.json</aa3d-tree-item>
      </aa3d-tree>
    `,
  }),
};
