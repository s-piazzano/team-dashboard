import React from 'react';
import { SectionBody } from '../../components/sections/section-body/section-body';
import './single-page-container.scss';
import { SectionHead } from '../../components/sections/section-head/section-head';
import { graphql, StaticQuery } from 'gatsby';

export const SinglePageContainer = ({
  data,
  handleSocialLink,
  handleScroll,
  items,
  sections,
}: any) => {
  const sectionRefs = React.useRef([]);
  const selectedSection = items.find((item: any) => item.isSelected);
  const scrollHandler = () => {
    const sectionHeightsMapping = sections.map(
      (section: any, index: number) => {
        // get only section heights for current or previous sections
        const sectionsHeights = new Array(index + 1)
          .fill(0)
          .map((_, i) => (sectionRefs as any).current[i].offsetHeight);

        // sum heights to get upper boundary
        const max = sectionsHeights.reduce((acc, curr) => acc + curr, 0);

        // exclude first iteration where lower boundary is zero, then remove current item height
        if (index !== 0) {
          sectionsHeights.pop();
        }

        // sum all heights excepts current to get lower boundary
        const min =
          index === 0
            ? 0
            : sectionsHeights.reduce((acc, curr) => acc + curr, 0);

        // push to array the new object data
        return {
          value: section.value.name,
          min,
          max,
        };
      }
    );

    // calculate target section that is now focused
    // skipping render if section is teh same as before
    sectionHeightsMapping.forEach((currentSection: any) => {
      if (
        window.pageYOffset + 300 >= currentSection.min &&
        window.pageYOffset + 300 <= currentSection.max
      ) {
        if (currentSection.value !== selectedSection.section.name) {
          handleScroll(currentSection.value);
        }
      }
    });
  };

  /**
   * Catch selected item ref and scroll to its position
   */
  const focusSection = () => {
    items.forEach((item: any, i: number) => {
      if (item.isSelected) {
        (sectionRefs as any).current[
          i
        ].scrollIntoView(/* {behavior: "smooth"} */);
      }
    });
  };

  React.useEffect(() => {
    // scroll to position selected in navbar
    focusSection();

    // Scroll events for keeping updated navbar during user scroll
    document.addEventListener('scroll', scrollHandler);

    // Remove listener (like componentWillUnmount)
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  });

  const headAction = () => {
    alert('head action');
  };

  const createCard = (data, source) => {
    switch (source) {
      case 'Member':
        return {
          type: 'card-profile',
          title: data.fullname,
          description: data.description,
          imageUrl: data.photo.childImageSharp.fluid.base64,
          profileLinks: [
            {
              iconName: 'icon-linkedin',
              url: 'https://www.linkedin.com/feed/',
            },
            {
              iconName: 'icon-github',
              url: 'https://github.com/',
            },
            {
              iconName: 'icon-gitlab',
              url: 'https://gitlab.com/VitaTiZ99',
            },
          ],
        };
      case 'Portfolio':
        return {};
      default:
        return {
          type: 'card',
          title: data.title,
          description: data.description,
          imageUrl: data.imageUrl,
          projectUrl: data.projectUrl,
        };
    }
  };

  return (
    <div>
      {sections.map((section: any) => {
        const positionInMenu = items.findIndex(
          (menuItem: any) => menuItem.section.name === section.value.name
        );

        // debugger;
        const hasCards = section.cardsSource;
        const hasCardData = data[`allStrapi${section.cardsSource}`];

        const sectionCards = [];

        if (hasCards && hasCardData) {
          const targetItemsList = data[`allStrapi${section.cardsSource}`].nodes;

          // truncate all elements after third value in array
          targetItemsList.length = 3;

          targetItemsList.forEach(sourceData =>
            sectionCards.push(createCard(sourceData, section.cardsSource))
          );
        }

        return positionInMenu === -1 ? null : section.type ===
          'section-head' ? (
          <SectionHead
            key={section.id}
            id={section.id}
            sectionRefs={sectionRefs}
            positionInMenu={positionInMenu}
            title={section.title}
            bodyContent={section.description}
            headAction={headAction}
            buttonValue={section.buttonValue}
          />
        ) : (
          <SectionBody
            key={section.id}
            id={section.id}
            cards={sectionCards}
            sectionRefs={sectionRefs}
            title={section.title}
            description={section.description}
            positionInMenu={positionInMenu}
            handleSocialLink={handleSocialLink}
          />
        );
      })}
    </div>
  );
};
