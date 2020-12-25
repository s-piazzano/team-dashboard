import React from "react"
import { SidebarMenu } from "../components/sidebars/sidebar-menu/sidebar-menu"

import { LayoutWithSidebar } from "../components/layouts/layout-with-sidebar/layout-with-sidebar";
import { SinglePageContainer } from "../containers/single-page-container/single-page-container";
import { menuItems } from "./index.model";

import "../../assets/scss/main.scss";
import './index.scss';

export default function Home() {

  const [items, updateMenuSelection] = React.useState(menuItems)
  const [sidebarIsOpen, toggleSidebar] = React.useState(false)
  // const resultsRef = React.useRef();
  
  // React.useEffect(
  //   () => {
  //     console.log('test')
  //     if (resultsRef.current) {
  //       console.log(resultsRef)
  //       window.scrollTo({
  //         behavior: "smooth",
  //         top: resultsRef.current.offsetTop
  //       });
  //     }
  //   },
  //   [items]
  // );

  const handleMenuSelection = (target) => {
    const updatedItems = items.map(item => (
      item.value === target
        ? { ...item, isSelected: true } 
        : { ...item, isSelected: false })
    )

    updateMenuSelection(updatedItems);


    // SCROLL TO
    // https://www.robinwieruch.de/react-scroll-to-item


  }

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
      <LayoutWithSidebar
        sidebarIsOpen={sidebarIsOpen}
        layoutAction={() => toggleSidebar(!sidebarIsOpen)}
      >
        <SidebarMenu
          className="section-sidebar"
          sidebarIsOpen={sidebarIsOpen}
          items={items}
          handleSidebarSocialLink={handleSocialLink}
          handleMenuSelection={handleMenuSelection}
        />
        <SinglePageContainer
          selectedSection={items.find(item => item.isSelected)}
          handleScroll={handleMenuSelection}
          handleSocialLink={handleSocialLink}
        />
      </LayoutWithSidebar>
    </div>
  )
}
