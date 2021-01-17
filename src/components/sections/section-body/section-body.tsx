import React from "react";
import { HeaderSection } from "../../header/header-section/header-section";
import { CardListView } from "../../lists/card-list-view/card-list-view";

export const SectionBody = ({
  section,
  sectionRefs,
  positionInMenu,
  handleSocialLink,
}: any) => {
  return (
    <section
      id={section.id}
      className="section-body"
      ref={ref => (sectionRefs.current[positionInMenu] = ref)}
    >
      <HeaderSection title={section.title} description={section.bodyContent} />
      <CardListView cards={section.cards} handleSocialLink={handleSocialLink} />
    </section>
  );
};
