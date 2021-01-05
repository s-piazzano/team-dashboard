import React from 'react';
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
}: any) => {
  return (
    <section
      id={id}
      className="section-body"
      ref={ref => (sectionRefs.current[positionInMenu] = ref)}
    >
      <HeaderSection title={title} description={description} />
      <CardListView cards={cards} handleSocialLink={handleSocialLink} />
    </section>
  );
};
