import React from "react"
import { SidebarMenu } from "../components/sidebars/sidebar-menu/sidebar-menu"
import { CardListView } from "../components/lists/card-list-view/card-list-view";
import "../../assets/scss/main.scss";
import './index.scss';
import { cardsListMock, cardsProfileListMock } from "../components/lists/card-list-view/card-list-view.mock";
import { LayoutWithSidebar } from "../components/layouts/layout-with-sidebar/layout-with-sidebar";
import { SinglePageContainer } from "../containers/single-page-container/single-page-container";

export default function Home() {
  const [sidebarIsOpen, toggleSidebar] = React.useState(false)


  const handleSidebarSocialLink = (url) => {
    window.open(url);
  }

  // const checkScroll = () => {
  //   // check current selected item
  //   // find it in sections
  //   // find its offset from page start
  //   // scroll page to match selectedOffset
  // }

  // checkScroll()

  return (
    <div className="page">
      <LayoutWithSidebar
        sidebarIsOpen={sidebarIsOpen}
        layoutAction={() => toggleSidebar(!sidebarIsOpen)}
      >
        <SidebarMenu
          className="section-sidebar"
          sidebarIsOpen={sidebarIsOpen}
          handleSidebarSocialLink={handleSidebarSocialLink}
        />
        <SinglePageContainer />
      </LayoutWithSidebar>

    </div>
  )
}
