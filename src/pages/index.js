import React from "react"
import { Link } from "gatsby"
import { SidebarMenu } from "../components/sidebars/sidebar-menu/sidebar-menu"

import "../../assets/scss/main.scss";
import './index.scss';

export default function Home() {

  return (
    <div className="page">
      {/* <Link to="/about">go to about...</Link> */}

      <aside className="page-sidebar">
        <SidebarMenu />
      </aside>

      <main className="page-content">

        <section className="section-members">
        chi siamo
        </section>
       
        <section className="section-portfolio">
        portfolio
        </section>

        <section className="section-blog">
        articoli
        </section>

      </main>
    </div>
  )
}
