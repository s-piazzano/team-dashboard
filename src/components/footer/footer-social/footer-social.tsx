import React from "react"
import { SvgIcon } from "../../buttons-indicators/svg-icon/svg-icon"
import "./footer-social.scss"

export const FooterSocial = ({ links = [], iconColor, action }: any) => {
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
  )
}
