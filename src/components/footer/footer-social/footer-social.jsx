import React from "react"
import { SvgIcon } from "../../buttons-indicators/svg-icon/svg-icon"

export const FooterSocial = ({links = [], iconColor, action}) => {

  return(
    <footer className="footer-social" >
      {links.map(link => (
        <SvgIcon
          iconName={link.icon}
          iconColor={iconColor}
          iconClick={() => action(link.url)}
        />)
      )}
    </footer>
  )
}