import React from 'react';
import { CardListView } from '../../components/lists/card-list-view/card-list-view';
import { cardsListMock, cardsProfileListMock } from '../../components/lists/card-list-view/card-list-view.mock';
import { HeaderSection } from "../../components/header/header-section/header-section";
import './single-page-container.scss';

export const SinglePageContainer = ({
  handleSocialLink,
  selectedSection,
  handleScroll
}) => {

  const homeRef = React.useRef()
  const membersRef = React.useRef()
  const portfolioRef = React.useRef()
  const blogRef = React.useRef()

  const scrollHandler = () => {
    const sectionMapping = [
      {
        value: 'home',
        min: 0,
        max: homeRef.current.offsetHeight
      },
      {
        value: 'members',
        min: homeRef.current.offsetHeight,
        max: membersRef.current.offsetHeight + homeRef.current.offsetHeight
      },
      {
        value: 'portfolio',
        min: membersRef.current.offsetHeight + homeRef.current.offsetHeight,
        max: portfolioRef.current.offsetHeight + membersRef.current.offsetHeight + homeRef.current.offsetHeight
      },
      {
        value: 'blog',
        min: portfolioRef.current.offsetHeight + membersRef.current.offsetHeight + homeRef.current.offsetHeight,
        max: blogRef.current.offsetHeight + portfolioRef.current.offsetHeight + membersRef.current.offsetHeight + homeRef.current.offsetHeight
      },
    ]

    sectionMapping.forEach(currentSection => {
      if(window.pageYOffset + 200 >= currentSection.min && window.pageYOffset + 200 <= currentSection.max ) {
        if(currentSection.value !== selectedSection.value ) {
          handleScroll(currentSection.value)
        }
      }
    })
  }

  const focusSection = () => {
    switch(selectedSection.value) {
      case 'home': {
        if(homeRef.current) {
          homeRef.current.scrollIntoView(/* {behavior: "smooth"} */)
        }
      }
        break;
      case 'members': {
        if(membersRef.current) {
          membersRef.current.scrollIntoView(/* {behavior: "smooth"} */)
        }
      }
        break;
      case 'portfolio': {
        if(portfolioRef.current) {
          portfolioRef.current.scrollIntoView(/* {behavior: "smooth"} */)
        }
      }
        break;
      case 'blog': {
        if(blogRef.current) {
          blogRef.current.scrollIntoView(/* {behavior: "smooth"} */)
        }
      };
        break;
  
      default: console.log('DEFAULT @ SinglePageContainer')
    }
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
      <section ref={homeRef} id="home" className="section-home">
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

      <section ref={membersRef} id="members" className="section-members">
        <HeaderSection title="Chi Siamo"
          description="RainbowTech nasce da un gruppo di amici che condividono la passione per l'informatica e la voglia di sperimentare nuove tecnologie con l'obiettivo di apprendere e migliorare nuove competenze"
        >
        </HeaderSection>
        <CardListView
          cards={cardsProfileListMock}
          handleSocialLink={handleSocialLink}
        />
      </section>

      <section ref={portfolioRef} id="portfolio" className="section-portfolio">
        <HeaderSection title="Portfolio"
          description="C'è vero progresso solo quando i vantaggi di una nuova tecnologia diventano per tutti"
        >
        </HeaderSection>
        <CardListView
          cards={cardsListMock}
          handleSocialLink={handleSocialLink}
        />
      </section>

      <section ref={blogRef} id="blog" className="section-blog">
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