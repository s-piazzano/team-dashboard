import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CardProfile, CardProfileProps } from './cardProfile';

export default {
  title: 'Application/CardProfile',
  component: CardProfile,
} as Meta;

const Template: Story<CardProfileProps> = args => <CardProfile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Tiziano',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare leo at eleifend posuere. Interdum et malesuada fames ac ante.',
  imageUrl: 'https://picsum.photos/300/200',
  profileLinks: [
    {
      iconName: 'icon-linkedin',
      url: 'https://www.linkedin.com/feed/',
    },
    {
      iconName: 'icon-github',
      url: 'https://github.com/',
    },
    {
      iconName: 'icon-gitlab',
      url: 'https://gitlab.com/VitaTiZ99',
    },
  ],
};
