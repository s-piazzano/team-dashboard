
import React from 'react';
import { CardListView } from '../../components/lists/card-list-view/card-list-view';
import { cardsListMock, cardsProfileListMock } from '../../components/lists/card-list-view/card-list-view.mock';
import { HeaderSection } from "../../components/header/header-section/header-section";
import './single-page-container.scss';

export const SinglePageContainer = ({ handleSocialLink }) => {
  return (
    <div>
      <section id="home" className="section-home">
        <div className="home-title">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
        </div>
        <div className="home-content">
          <p>Quisque id lacus vitae nulla luctus dapibus. Praesent libero tellus, interdum in est ut, volutpat ultrices lorem. Nunc eget mattis odio. Sed ac augue nec
          </p>
        </div>
        <div className="home-button">
          <button>VIEW MORE</button>
        </div>
      </section>

      <section id="members" className="section-members">
        <HeaderSection title="Chi Siamo"
          description="Duis pretium pulvinar dui ut ultricies. Proin imperdiet pulvinar ante, ac rhoncus velit accumsan eget. Nulla faucibus nibh id odio ornare"
        >
        </HeaderSection>
        <CardListView
          cards={cardsProfileListMock}
          handleSocialLink={handleSocialLink}
        />
      </section>

      <section id="portfolio" className="section-portfolio">
        <HeaderSection title="Portfolio"
          description="Duis pretium pulvinar dui ut ultricies. Proin imperdiet pulvinar ante, ac rhoncus velit accumsan eget. Nulla faucibus nibh id odio ornare"
        >
        </HeaderSection>
        <CardListView
          cards={cardsListMock}
          handleSocialLink={handleSocialLink}
        />
      </section>

      <section id="blog" className="section-blog">
        articoli
      </section>
    </div>
  )
}