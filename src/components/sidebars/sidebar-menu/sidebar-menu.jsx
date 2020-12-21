import React from "react"
import { FooterSocial } from "../../footer/footer-social/footer-social"
import 'smtp-webcomponents'

import "./sidebar-menu.scss"
import { MenuItemsList } from "../../lists/menu-items-list/menu-items-list"
import { HeaderTitle } from "../../header/header-title/header-title"
import { SvgIcon } from '../../buttons-indicators/svg-icon/svg-icon';

export const SidebarMenu = ({sidebarIsOpen, toggleSidebar, handleSidebarSocialLink}) => {

		const logoUrl = 'https://picsum.photos/300/200';
		const title = 'RainbowTech';
		const subtitle = 'Where code happens';

		const items = [
			{
				name: 'Chi siamo',
        icon: 'icon-group',
        value: 'members'
      },
      {
				name: 'Portfolio',
        icon: 'icon-flask',
        value: 'portfolio'
      },
      {
				name: 'Utlimi articoli',
        icon: 'icon-coffee',
        value: 'blog'
      }
    ]

    const links = [
      {
        icon: 'icon-github',
        url: 'https://www.github.com'
      },
      {
        icon: 'icon-linkedin',
        url: 'https://www.linkedin.com'
      },
      {
        icon: 'icon-stackoverflow',
        url: 'https://www.stackoverflow.com'
      },
      {
        icon: 'icon-gitlab',
        url: 'https://www.gitlab.com'
      },
    ]

    return (
      <div className={`sidebar-menu ${sidebarIsOpen ? 'expanded' : 'narrow'}`}>
        <div className={`sidebar-toggle ${sidebarIsOpen ? 'icon-left' : 'icon-right'}`}>
          <SvgIcon
            iconName="icon-arrow-circle-right"
            iconClick={toggleSidebar}
          />
        </div>
        <HeaderTitle
          logoUrl={logoUrl}
          title={title}
          subtitle={subtitle}
          mode={sidebarIsOpen ? 'expanded' : 'narrow'}
        />
        <button className="login" onClick={() => alert('login')}>
          <SvgIcon
            iconColor="#e1e1e1"
            iconName="icon-user-circle-o"
          />
          <p className="login-label">LOGIN</p>
        </button>
        <MenuItemsList
          items={items}
          mode={sidebarIsOpen ? 'expanded' : 'narrow'}
          color="#f30e97"
        />
       {sidebarIsOpen
         ? <FooterSocial
            iconColor="#e1e1e1"
            links={links}
            action={handleSidebarSocialLink}
          />
         : null
        }
      </div>
    )
}