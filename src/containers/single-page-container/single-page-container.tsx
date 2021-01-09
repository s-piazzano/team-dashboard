import React from 'react';
import { SectionBody } from '../../components/sections/section-body/section-body';
import './single-page-container.scss';

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

  const sectionAction = () => {
    alert('section action');
  };

  const createCard = (data, source) => {
    switch (source) {
      case 'Member':
        return {
          type: 'card-profile',
          title: data.fullname,
          description: data.description,
          imageUrl: data.photo?.childImageSharp?.fluid?.src,
          profileLinks: data.socials,
        };
      case 'Portfolio':
        return {};
      default:
        return {
          type: 'card',
          title: data.title,
          description: data.description,
          imageUrl: data.image?.childImageSharp?.fluid?.src,
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

        const hasCards = section.cardsSource;
        const hasCardData = data[`allStrapi${section.cardsSource}`];

        const sectionCards = [];

        if (hasCards && hasCardData) {
          const targetItemsList = data[`allStrapi${section.cardsSource}`].nodes;

          // truncate all elements after third value in array
          // but not in members list
          if (section.cardsSource !== 'Member') {
            targetItemsList.length = 3;
          }

          targetItemsList.forEach(sourceData =>
            sectionCards.push(createCard(sourceData, section.cardsSource))
          );
        }

        return positionInMenu !== -1 ? (
          <SectionBody
            key={section.id}
            id={section.id}
            cards={sectionCards}
            cardsMode={section.cardsSource === 'Member' ? 'carousel' : 'normal'}
            sectionRefs={sectionRefs}
            title={section.title}
            description={section.description}
            positionInMenu={positionInMenu}
            handleSocialLink={handleSocialLink}
            buttonValue={section.actionLabel}
            backgroundImage={
              section.backgroundImage?.childImageSharp?.fluid?.src
            }
            action={sectionAction}
          />
        ) : null;
      })}
    </div>
  );
};
