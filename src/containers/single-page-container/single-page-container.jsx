import React from 'react';
import { CardListView } from '../../components/lists/card-list-view/card-list-view';
import { cardsListMock, cardsProfileListMock } from '../../components/lists/card-list-view/card-list-view.mock';
import { HeaderSection } from "../../components/header/header-section/header-section";
import './single-page-container.scss';

export const SinglePageContainer = ({
  handleSocialLink,
  handleScroll,
  items,
  sections
}) => {

  const sectionRefs = React.useRef([])
  const selectedSection = items.find(item => item.isSelected)

  const scrollHandler = () => {
    
    const sectionHeightsMapping = items.map((item, index) => {

      // get only section heights for current or previous sections
      const sectionsHeights = new Array(index + 1).fill(0).map((_, i) => sectionRefs.current[i].offsetHeight)
      
      // sum heights to get upper boundary
      const max = sectionsHeights.reduce((acc, curr) => acc + curr, 0)

      // exclude first iteration where lower boundary is zero, then remove current item height
      if(index !== 0) {
        sectionsHeights.pop()
      };

      // sum all heights excepts current to get lower boundary
      const min = index === 0 ? 0 : sectionsHeights.reduce((acc, curr) => acc + curr, 0)

      // push to array the new object data
      return {
        value: item.value,
        min,
        max
      }
    })
    
    // calculate target section that is now focused
    // skipping render if section is teh same as before
    sectionHeightsMapping.forEach(currentSection => {
      if(window.pageYOffset + 300 >= currentSection.min && window.pageYOffset + 300 <= currentSection.max ) {
        if(currentSection.value !== selectedSection.value) {
          handleScroll(currentSection.value)
        }
      }
    })
  }

  /**
   * Catch selected item ref and scroll to its position
   */
  const focusSection = () => {
    items.forEach((item, i) => {
      if(item.isSelected) {
        sectionRefs.current[i].scrollIntoView(/* {behavior: "smooth"} */)
      }
    })
  }


  React.useEffect(() => {
    // scroll to position selected in navbar
    focusSection()

    // Scroll events for keeping updated navbar during user scroll
    document.addEventListener("scroll", scrollHandler);
  
    // Remove listener (like componentWillUnmount)
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  })


  return(
    <div>
      {
        sections.map(section => {
          const positionInMenu = items.findIndex(menuItem => menuItem.value === section.id)

          return section.type === 'section-head'
            ? (<section
                key={section.id}
                id={section.id}
                className={section.type}
                ref={ref => sectionRefs.current[positionInMenu] = ref}
              >
                <div className="head-title">
                  <h2>{section.title}</h2>
                </div>
                <div className="head-content">
                  <p>{section.bodyContent}
                  </p>
                </div>
                <div className="head-button">
                  <button>{section.buttonValue}</button>
                </div>
              </section>)
            : (<section
                key={section.id}
                id={section.id}
                className={section.type}
                ref={ref => sectionRefs.current[positionInMenu] = ref}
              >
                <HeaderSection title={section.title}
                  description={section.bodyContent}
                >
                </HeaderSection>
                <CardListView
                  cards={section.cards}
                  handleSocialLink={handleSocialLink}
                />
              </section>)

        })
      }
    </div>
  )
}