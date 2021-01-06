import React from 'react';
import { SvgIcon } from '../../buttons-indicators/svg-icon/svg-icon';
import './footer-social.scss';

export interface FooterSocialProps {
  links: [];
  iconColor: string;
  action: (url: string) => void;
}

export const FooterSocial: React.FC<FooterSocialProps> = ({
  links = [],
  iconColor,
  action,
}) => {
  return (
    <footer className="footer-social">
      {links.map((link: any, i: number) => (
        <SvgIcon
          key={i}
          iconName={link.icon}
          iconColor={iconColor}
          iconClick={() => action(link.url)}
        />
      ))}
    </footer>
  );
};
