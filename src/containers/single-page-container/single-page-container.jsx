
import React from 'react';
import { CardListView } from '../../components/lists/card-list-view/card-list-view';
import { cardsListMock, cardsProfileListMock } from '../../components/lists/card-list-view/card-list-view.mock';

export const SinglePageContainer = ({handleSocialLink}) => {
  return(
    <div>
      <section id="members" className="section-members">
        chi siamo
        <CardListView
          cards={cardsProfileListMock}
          handleSocialLink={handleSocialLink}
        />
      </section>
    
      <section id="portfolio" className="section-portfolio">
        portfolio
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