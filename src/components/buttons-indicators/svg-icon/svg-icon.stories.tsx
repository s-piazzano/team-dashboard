import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SvgIcon, SvgIconProps } from './svg-icon';

export default {
  title: 'Application/SvgIcon',
  component: SvgIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SvgIconProps> = args => <SvgIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  iconName: 'icon-github',
  iconColor: 'black',
  iconClick: () => console.log('svg'),
};
