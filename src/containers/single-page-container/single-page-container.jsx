
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
          <h2>Supera te stesso e supererai il mondo</h2>
        </div>
        <div className="home-content">
          <p>Non soffocare la tua ispirazione e la tua immaginazione, non diventare lo schiavo del tuo modello
          </p>
        </div>
        <div className="home-button">
          <button>VIEW MORE</button>
        </div>
      </section>

      <section id="members" className="section-members">
        <HeaderSection title="Chi Siamo"
          description="RainbowTech nasce da un gruppo di amici che condividono la passione per l'informatica e la voglia di sperimentare nuove tecnologie con l'obiettivo di apprendere e migliorare nuove competenze"
        >
        </HeaderSection>
        <CardListView
          cards={cardsProfileListMock}
          handleSocialLink={handleSocialLink}
        />
      </section>

      <section id="portfolio" className="section-portfolio">
        <HeaderSection title="Portfolio"
          description="C'è vero progresso solo quando i vantaggi di una nuova tecnologia diventano per tutti"
        >
        </HeaderSection>
        <CardListView
          cards={cardsListMock}
          handleSocialLink={handleSocialLink}
        />
      </section>

      <section id="blog" className="section-blog">
        <HeaderSection title="Blog"
            description="Il maggior piacere nel fare qualcosa di nuovo sta nel pensiero di poterlo condividere"
        ></HeaderSection>
        <CardListView
          cards={cardsListMock}
          handleSocialLink={handleSocialLink}
        />
      </section>
    </div>
  )
}