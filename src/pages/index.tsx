import React, { ReactElement } from "react";
import { StaticQuery, graphql } from "gatsby";

import { SidebarMenu } from "../components/sidebars/sidebar-menu/sidebar-menu";

import { LayoutWithSidebar } from "../components/layouts/layout-with-sidebar/layout-with-sidebar";
import { SinglePageContainer } from "../containers/single-page-container/single-page-container";
import { menuItems, links, sections } from "./index.model";

import "../../assets/scss/main.scss";
import "./index.scss";
import { MenuItemInterface } from "../queries/menu-items";

export default function Home({ data }: any): ReactElement<any> {
  const fetchedItems: Array<MenuItemInterface> =
    data?.strapiLeftMenu?.items || [];

  const [items, updateMenuSelection] = React.useState(fetchedItems);
  const [sidebarIsOpen, toggleSidebar] = React.useState(false);

  const handleMenuSelection = (target: string) => {
    const updatedItems: Array<MenuItemInterface> = items.map(item =>
      item.section.name === target
        ? { ...item, isSelected: true }
        : { ...item, isSelected: false }
    );

    updateMenuSelection(updatedItems);
  };

  const handleSocialLink = (url: string) => {
    window.open(url);
  };

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
  );
}

export const query = graphql`
  {
    strapiLeftMenu {
      items {
        icon
        id
        isSelected
        name
        section {
          name
        }
      }
    }
  }
`;
