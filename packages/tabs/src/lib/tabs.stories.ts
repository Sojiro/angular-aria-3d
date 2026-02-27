import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {
  Aa3dTabs,
  Aa3dTabList,
  Aa3dTab,
  Aa3dTabPanel,
} from './tabs';
import { provideAngularAria3d } from '@angular-aria-3d/core';

const meta: Meta = {
  title: 'Components/Tabs',
  decorators: [
    moduleMetadata({
      imports: [Aa3dTabs, Aa3dTabList, Aa3dTab, Aa3dTabPanel],
      providers: [provideAngularAria3d()],
    }),
  ],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <aa3d-tabs>
        <aa3d-tab-list>
          <aa3d-tab value="one">Tab 1</aa3d-tab>
          <aa3d-tab value="two">Tab 2</aa3d-tab>
          <aa3d-tab value="three">Tab 3</aa3d-tab>
        </aa3d-tab-list>
        <aa3d-tab-panel value="one">Content for Tab 1</aa3d-tab-panel>
        <aa3d-tab-panel value="two">Content for Tab 2</aa3d-tab-panel>
        <aa3d-tab-panel value="three">Content for Tab 3</aa3d-tab-panel>
      </aa3d-tabs>
    `,
  }),
};

export const AllDepths: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px;">
        <aa3d-tabs style="flex: 1;">
          <aa3d-tab-list>
            <aa3d-tab value="a" depth="deep">Deep</aa3d-tab>
          </aa3d-tab-list>
          <aa3d-tab-panel value="a">Deep depth tab</aa3d-tab-panel>
        </aa3d-tabs>
        <aa3d-tabs style="flex: 1;">
          <aa3d-tab-list>
            <aa3d-tab value="b" depth="medium">Medium</aa3d-tab>
          </aa3d-tab-list>
          <aa3d-tab-panel value="b">Medium depth tab</aa3d-tab-panel>
        </aa3d-tabs>
        <aa3d-tabs style="flex: 1;">
          <aa3d-tab-list>
            <aa3d-tab value="c" depth="subtle">Subtle</aa3d-tab>
          </aa3d-tab-list>
          <aa3d-tab-panel value="c">Subtle depth tab</aa3d-tab-panel>
        </aa3d-tabs>
      </div>
    `,
  }),
};

export const ColorPresets: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <aa3d-tabs>
          <aa3d-tab-list>
            <aa3d-tab value="r1" [theme]="{ hue: 345 }">Red Tab 1</aa3d-tab>
            <aa3d-tab value="r2" [theme]="{ hue: 345 }">Red Tab 2</aa3d-tab>
          </aa3d-tab-list>
          <aa3d-tab-panel value="r1">Red themed content</aa3d-tab-panel>
          <aa3d-tab-panel value="r2">Red themed content 2</aa3d-tab-panel>
        </aa3d-tabs>
        <aa3d-tabs>
          <aa3d-tab-list>
            <aa3d-tab value="b1" [theme]="{ hue: 225 }">Blue Tab 1</aa3d-tab>
            <aa3d-tab value="b2" [theme]="{ hue: 225 }">Blue Tab 2</aa3d-tab>
          </aa3d-tab-list>
          <aa3d-tab-panel value="b1">Blue themed content</aa3d-tab-panel>
          <aa3d-tab-panel value="b2">Blue themed content 2</aa3d-tab-panel>
        </aa3d-tabs>
        <aa3d-tabs>
          <aa3d-tab-list>
            <aa3d-tab value="g1" [theme]="{ hue: 145, saturation: 80 }">Green Tab 1</aa3d-tab>
            <aa3d-tab value="g2" [theme]="{ hue: 145, saturation: 80 }">Green Tab 2</aa3d-tab>
          </aa3d-tab-list>
          <aa3d-tab-panel value="g1">Green themed content</aa3d-tab-panel>
          <aa3d-tab-panel value="g2">Green themed content 2</aa3d-tab-panel>
        </aa3d-tabs>
        <aa3d-tabs>
          <aa3d-tab-list>
            <aa3d-tab value="p1" [theme]="{ hue: 275 }">Purple Tab 1</aa3d-tab>
            <aa3d-tab value="p2" [theme]="{ hue: 275 }">Purple Tab 2</aa3d-tab>
          </aa3d-tab-list>
          <aa3d-tab-panel value="p1">Purple themed content</aa3d-tab-panel>
          <aa3d-tab-panel value="p2">Purple themed content 2</aa3d-tab-panel>
        </aa3d-tabs>
        <aa3d-tabs>
          <aa3d-tab-list>
            <aa3d-tab value="o1" [theme]="{ hue: 35 }">Orange Tab 1</aa3d-tab>
            <aa3d-tab value="o2" [theme]="{ hue: 35 }">Orange Tab 2</aa3d-tab>
          </aa3d-tab-list>
          <aa3d-tab-panel value="o1">Orange themed content</aa3d-tab-panel>
          <aa3d-tab-panel value="o2">Orange themed content 2</aa3d-tab-panel>
        </aa3d-tabs>
      </div>
    `,
  }),
};

export const VerticalTabs: Story = {
  render: () => ({
    template: `
      <aa3d-tabs>
        <div style="display: flex; gap: 16px;">
          <aa3d-tab-list orientation="vertical">
            <aa3d-tab value="v1">Vertical 1</aa3d-tab>
            <aa3d-tab value="v2">Vertical 2</aa3d-tab>
            <aa3d-tab value="v3">Vertical 3</aa3d-tab>
          </aa3d-tab-list>
          <div>
            <aa3d-tab-panel value="v1">Vertical tab content 1</aa3d-tab-panel>
            <aa3d-tab-panel value="v2">Vertical tab content 2</aa3d-tab-panel>
            <aa3d-tab-panel value="v3">Vertical tab content 3</aa3d-tab-panel>
          </div>
        </div>
      </aa3d-tabs>
    `,
  }),
};
