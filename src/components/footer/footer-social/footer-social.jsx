import React from "react"
import { SvgIcon } from "../../buttons-indicators/svg-icon/svg-icon"
import './footer-social.scss';

export const FooterSocial = ({links = [], iconColor, action}) => {

  return(
    <footer className="footer-social" >
        {links.map((link, i) => (
          <SvgIcon
            key={i}
            iconName={link.icon}
            iconColor={iconColor}
            iconClick={() => action(link.url)}
          />)
        )}
    </footer>
  )
}