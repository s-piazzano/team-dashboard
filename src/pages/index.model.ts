import { getMenuItemsQuery } from "../queries/menu-items"
import { getFooterLinksQuery } from "../queries/footer-links"
import { getSectionItemsQuery } from "../queries/section-items"

export const menuItems = getMenuItemsQuery()
export const links = getFooterLinksQuery()
export const sections = getSectionItemsQuery()
