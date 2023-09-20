import type { Meta, StoryObj } from '@storybook/react';

import ArtistInfo from './index';

const meta: Meta<typeof ArtistInfo> = {
  title: 'ArtistInfo',
  component: ArtistInfo,
};

export default meta;
type Story = StoryObj<typeof ArtistInfo>;

export const ArtistInfoItem: Story = {
  args: {
    img: 'https://images.unsplash.com/photo-1694572620159-e69049aeba00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
    part: 'UXUI 디자이너',
    name: '로지',
    info: '유어슈 바이스리드!',
  },
};
