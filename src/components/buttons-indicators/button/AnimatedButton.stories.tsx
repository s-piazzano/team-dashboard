import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { AnimatedButton, AnimatedButtonProps } from './AnimatedButton';

export default {
  title: 'Application/Button 2',
  component: AnimatedButton,
} as Meta;

const Template: Story<AnimatedButtonProps> = args => (
  <AnimatedButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  action: () => console.log('pinco'),
  label: 'Pinco',
};
