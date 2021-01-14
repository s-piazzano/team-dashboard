import React from 'react';
import { FooterSocial } from '../../footer/footer-social/footer-social';

import './sidebar-menu.scss';
import { MenuItemsList } from '../../lists/menu-items-list/menu-items-list';
import { HeaderTitle } from '../../header/header-title/header-title';
import { SvgIcon } from '../../buttons-indicators/svg-icon/svg-icon';

export const SidebarMenu = ({
  items,
  links,
  sidebarIsOpen,
  handleSidebarSocialLink,
  handleMenuSelection,
}: any) => {
  const logoUrl =
    'https://media-exp1.licdn.com/dms/image/C4D03AQGUuFcXdnGhjQ/profile-displayphoto-shrink_800_800/0/1523742691669?e=1616025600&v=beta&t=2EZYqR0Ps0lU0fO7yPPmO9kxINeN5GuxZmC1bNBWMCA'; /* 'https://picsum.photos/300/200' */
  /* 'https://previews.123rf.com/images/mamanamsai/mamanamsai1511/mamanamsai151100435/48391186-progettazione-di-ingranaggi-concetto-arcobaleno-vettore-pulito.jpg'; */ const title =
    'Marco';
  const subtitle = 'Where code happens';

  return (
    <div className={`sidebar-menu ${sidebarIsOpen ? 'expanded' : 'narrow'}`}>
      {sidebarIsOpen ? (
        <>
          <HeaderTitle
            logoUrl={logoUrl}
            title={title}
            subtitle={subtitle}
            mode={sidebarIsOpen ? 'expanded' : 'narrow'}
          />
          <button className="login" onClick={() => alert('login')}>
            {' '}
            {/* // TODO this will open a dialog to perform login. Login will enable more page options */}
            <SvgIcon iconColor="#e1e1e1" iconName="icon-user-circle-o" />
            <p className="login-label">LOGIN</p>
          </button>
        </>
      ) : null}
      <MenuItemsList
        items={items}
        action={handleMenuSelection}
        mode={sidebarIsOpen ? 'expanded' : 'narrow'}
        color="#f30e97"
      />
      {sidebarIsOpen ? (
        <FooterSocial
          iconColor="#e1e1e1"
          links={links}
          action={handleSidebarSocialLink}
        />
      ) : null}
    </div>
  );
};
