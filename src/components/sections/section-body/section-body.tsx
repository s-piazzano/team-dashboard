import React from 'react';
import { AnimatedButton } from '../../buttons-indicators/button/AnimatedButton';
import { HeaderSection } from '../../header/header-section/header-section';
import { CardListView } from '../../lists/card-list-view/card-list-view';

export const SectionBody = ({
  id,
  title,
  description,
  cards,
  sectionRefs,
  positionInMenu,
  handleSocialLink,
  action,
  buttonValue,
  backgroundImage,
  cardsMode,
  sidebarIsOpen,
}: any) => {
  return (
    <section
      id={id}
      className="section-body"
      ref={ref => (sectionRefs.current[positionInMenu] = ref)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <HeaderSection title={title} description={description} />
      <CardListView
        cards={cards}
        handleSocialLink={handleSocialLink}
        mode={cardsMode}
        sidebarIsOpen={sidebarIsOpen}
      />
      {buttonValue ? (
        <AnimatedButton action={action} label={buttonValue} />
      ) : null}
    </section>
  );
};
