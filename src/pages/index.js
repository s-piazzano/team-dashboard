import React from "react"
import { Link } from "gatsby"
import { SidebarMenu } from "../components/sidebars/sidebar-menu/sidebar-menu"
import { CardProfile } from "../components/cards/cardProfile/cardProfile";
import { Card } from "../components/cards/card/card";
import { CardListView } from "../components/lists/card-list-view/card-list-view";
import "../../assets/scss/main.scss";
import './index.scss';
import { cardsListMock, cardsProfileListMock } from "../components/lists/card-list-view/card-list-view.mock";

export default function Home() {

  const cardsList = cardsListMock;
  const cardsProfileList = cardsProfileListMock;

  const [sidebarIsOpen, toggleSidebar] = React.useState(false)


  const handleSocialLink = (url) => {
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
      {/* <Link to="/about">go to about...</Link> */}

      <aside className="page-sidebar">
        <SidebarMenu
          sidebarIsOpen={sidebarIsOpen}
          toggleSidebar={() => toggleSidebar(!sidebarIsOpen)}
          handleSidebarSocialLink={handleSocialLink}
        />
      </aside>

      <main className={`page-content ${sidebarIsOpen ? 'expanded' : 'narrow'}`}>

        <section id="members" className="section-members">
          chi siamo
          <CardListView
            cards={cardsProfileListMock}
            handleSocialLink={handleSocialLink}
          />
        </section>
       
        <section id="portfolio" className="section-portfolio">
          portfolio
          <CardListView
            cards={cardsListMock}
            handleSocialLink={handleSocialLink}
          />
        </section>

        <section id="blog" className="section-blog">
          articoli
        </section>

      </main>
    </div>
  )
}
