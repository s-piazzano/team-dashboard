import React from "react"
import { Link } from "gatsby"
import { SidebarMenu } from "../components/sidebars/sidebar-menu/sidebar-menu"
import { CardProfile } from "../components/cards/cardProfile/cardProfile";
import { Card } from "../components/cards/card/card";
import "../../assets/scss/main.scss";
import './index.scss';

export default function Home() {

  const [sidebarIsOpen, toggleSidebar] = React.useState(false)

  return (
    <div className="page">
      {/* <Link to="/about">go to about...</Link> */}

      <aside className="page-sidebar">
        <SidebarMenu
          sidebarIsOpen={sidebarIsOpen}
          toggleSidebar={() => toggleSidebar(!sidebarIsOpen)}
        />
      </aside>

      <main className={`page-content ${sidebarIsOpen ? 'expanded' : 'narrow'}`}>

        <section id="members" className="section-members">
          chi siamo
        </section>
       
        <section id="portfolio" className="section-portfolio">
          portfolio
          <CardProfile></CardProfile>
        </section>

        <section id="blog" className="section-blog">
          articoli
        </section>

      </main>
    </div>
  )
}
