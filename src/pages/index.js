import React from "react"
import { Link } from "gatsby"
import { SidebarMenu } from "../components/sidebars/sidebar-menu/sidebar-menu"

import "../../assets/scss/main.scss";
import './index.scss';

export default function Home() {

  const [sidebarIsOpen, toggleSidebar] = React.useState(false)


  const handleSidebarSocialLink = (url) => {


    alert(url)

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
          handleSidebarSocialLink={handleSidebarSocialLink}
        />
      </aside>

      <main className={`page-content ${sidebarIsOpen ? 'expanded' : 'narrow'}`}>

        <section id="members" className="section-members">
          chi siamo
        </section>
       
        <section id="portfolio" className="section-portfolio">
          portfolio
        </section>

        <section id="blog" className="section-blog">
          articoli
        </section>

      </main>
    </div>
  )
}
