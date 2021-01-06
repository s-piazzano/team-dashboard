import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { getFooterLinksQuery } from '../../../queries/footer-links';
import { FooterSocial, FooterSocialProps } from './footer-social';

export default {
  title: 'Application/FooterSocial',
  component: FooterSocial,
} as Meta;

const Template: Story<FooterSocialProps> = args => <FooterSocial {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  links: getFooterLinksQuery(),
  iconColor: 'black',
};
