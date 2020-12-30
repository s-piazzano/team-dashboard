import React from 'react';
import { SectionBody } from '../../components/sections/section-body/section-body';
import './single-page-container.scss';
import { SectionHead } from '../../components/sections/section-head/section-head';


export const SinglePageContainer = ({
  handleSocialLink,
  handleScroll,
  items,
  sections
}) => {

  const sectionRefs = React.useRef([])
  const selectedSection = items.find(item => item.isSelected)

  const scrollHandler = () => {

    const sectionHeightsMapping = sections.map((section, index) => {

      // get only section heights for current or previous sections
      const sectionsHeights = new Array(index + 1).fill(0).map((_, i) => sectionRefs.current[i].offsetHeight)

      // sum heights to get upper boundary
      const max = sectionsHeights.reduce((acc, curr) => acc + curr, 0)

      // exclude first iteration where lower boundary is zero, then remove current item height
      if (index !== 0) {
        sectionsHeights.pop()
      };

      // sum all heights excepts current to get lower boundary
      const min = index === 0 ? 0 : sectionsHeights.reduce((acc, curr) => acc + curr, 0)

      // push to array the new object data
      return {
        value: section.id,
        min,
        max
      }
    })

    // calculate target section that is now focused
    // skipping render if section is teh same as before
    sectionHeightsMapping.forEach(currentSection => {
      if (window.pageYOffset + 300 >= currentSection.min && window.pageYOffset + 300 <= currentSection.max) {
        if (currentSection.value !== selectedSection.value) {
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
      if (item.isSelected) {
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

  const headAction = () => {
    alert('head action')
  }


  return (
    <div>
      {sections.map(section => {
        const positionInMenu = items.findIndex(menuItem => menuItem.value === section.id)
          return positionInMenu === -1
           ? null
           : section.type === 'section-head'
            ? (<SectionHead 
              key={section.id}
              id={section.id}
              sectionRefs={sectionRefs}
              positionInMenu={positionInMenu}
              title={section.title}
              bodyContent={section.bodyContent}
              headAction={headAction}
              buttonValue={section.buttonValue}
              />)
            : (<SectionBody
                key={section.id}
                section={section}
                sectionRefs={sectionRefs}
                positionInMenu={positionInMenu}
                handleSocialLink={handleSocialLink}
              />)
        })}
    </div>
  )
}