import React from "react"
import { StaticQuery, graphql } from 'gatsby';

import { SidebarMenu } from "../components/sidebars/sidebar-menu/sidebar-menu"

import { LayoutWithSidebar } from "../components/layouts/layout-with-sidebar/layout-with-sidebar";
import { SinglePageContainer } from "../containers/single-page-container/single-page-container";
import { menuItems, links, sections } from "./index.model";

import "../../assets/scss/main.scss";
import './index.scss';

export default function Home({data}) {
  console.log(data);
  const [items, updateMenuSelection] = React.useState(data.strapiLeftMenuItem.item)
  const [sidebarIsOpen, toggleSidebar] = React.useState(false)

  const handleMenuSelection = (target) => {
    const updatedItems = items.map(item => (
      item.value === target
        ? { ...item, isSelected: true } 
        : { ...item, isSelected: false })
    )

    updateMenuSelection(updatedItems);
  }

  const handleSocialLink = (url) => {
    window.open(url);
  }

  return (
    <div className="page">
      <LayoutWithSidebar
        sidebarIsOpen={sidebarIsOpen}
        layoutAction={() => toggleSidebar(!sidebarIsOpen)}
      >
        <SidebarMenu
          className="section-sidebar"
          sidebarIsOpen={sidebarIsOpen}
          items={items}
          links={links}
          handleSidebarSocialLink={handleSocialLink}
          handleMenuSelection={handleMenuSelection}
        />
        <SinglePageContainer
          items={items}
          sections={sections}
          handleScroll={handleMenuSelection}
          handleSocialLink={handleSocialLink}
        />
      </LayoutWithSidebar>
    </div>
  )
}

export const query = graphql`
  {
    strapiLeftMenuItem {
      item {
        icon
        id
        isSelected
        name
        value
      }
    }
  }
`