import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a2e' },
        { name: 'medium', value: '#2d2d44' },
        { name: 'light', value: '#f0f0f0' },
      ],
    },
  },
};

export default preview;
