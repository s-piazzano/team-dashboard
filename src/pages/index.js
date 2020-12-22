import React from "react"
import { SidebarMenu } from "../components/sidebars/sidebar-menu/sidebar-menu"
import { CardListView } from "../components/lists/card-list-view/card-list-view";
import "../../assets/scss/main.scss";
import './index.scss';
import { cardsListMock, cardsProfileListMock } from "../components/lists/card-list-view/card-list-view.mock";
import { LayoutWithSidebar } from "../components/layouts/layout-with-sidebar/layout-with-sidebar";

export default function Home() {

  const cardsList = cardsListMock;
  const cardsProfileList = cardsProfileListMock;

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
      <LayoutWithSidebar>
        <SidebarMenu
          className="page-sidebar"
          sidebarIsOpen={sidebarIsOpen}
          toggleSidebar={() => toggleSidebar(!sidebarIsOpen)}
          handleSidebarSocialLink={handleSidebarSocialLink}
        />

        <div>
          <section id="members" className="section-members">
            chi siamo
            <CardListView
              cards={cardsProfileListMock}
            />
          </section>
        
          <section id="portfolio" className="section-portfolio">
            portfolio
            <CardListView
              cards={cardsListMock}
            />
          </section>

          <section id="blog" className="section-blog">
            articoli
          </section>

        </div>
      </LayoutWithSidebar>

    </div>
  )
}
