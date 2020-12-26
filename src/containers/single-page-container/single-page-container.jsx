import React from 'react';
import { CardListView } from '../../components/lists/card-list-view/card-list-view';
import { cardsListMock, cardsProfileListMock } from '../../components/lists/card-list-view/card-list-view.mock';
import { HeaderSection } from "../../components/header/header-section/header-section";
import './single-page-container.scss';

export const SinglePageContainer = ({
  handleSocialLink,
  selectedSection,
  handleScroll,
  items
}) => {




  const sectionRefs = React.useRef([])

  const scrollHandler = () => {
    
    const sectionMapping = [
      {
        value: 'home',
        min: 0,
        max: sectionRefs.current[0].offsetHeight
      },
      {
        value: 'members',
        min: sectionRefs.current[0].offsetHeight,
        max: sectionRefs.current[1].offsetHeight + sectionRefs.current[0].offsetHeight
      },
      {
        value: 'portfolio',
        min: sectionRefs.current[1].offsetHeight + sectionRefs.current[0].offsetHeight,
        max: sectionRefs.current[2].offsetHeight + sectionRefs.current[1].offsetHeight + sectionRefs.current[0].offsetHeight
      },
      {
        value: 'blog',
        min: sectionRefs.current[2].offsetHeight + sectionRefs.current[1].offsetHeight + sectionRefs.current[0].offsetHeight,
        max: sectionRefs.current[3].offsetHeight + sectionRefs.current[2].offsetHeight + sectionRefs.current[1].offsetHeight + sectionRefs.current[0].offsetHeight
      },
    ]

    sectionMapping.forEach(currentSection => {
      if(window.pageYOffset + 300 >= currentSection.min && window.pageYOffset + 300 <= currentSection.max ) {
        if(currentSection.value !== selectedSection.value ) {
          handleScroll(currentSection.value)
        }
      }
    })
  }

  const focusSection = () => {
    switch(selectedSection.value) {
      case 'home': {
        if(sectionRefs.current[0]) {
          sectionRefs.current[0].scrollIntoView(/* {behavior: "smooth"} */)
        }
      }
        break;
      case 'members': {
        if(sectionRefs.current[1]) {
          sectionRefs.current[1].scrollIntoView(/* {behavior: "smooth"} */)
        }
      }
        break;
      case 'portfolio': {
        if(sectionRefs.current[2]) {
          sectionRefs.current[2].scrollIntoView(/* {behavior: "smooth"} */)
        }
      }
        break;
      case 'blog': {
        if(sectionRefs.current[3]) {
          sectionRefs.current[3].scrollIntoView(/* {behavior: "smooth"} */)
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
      <section ref={ref => sectionRefs.current[0] = ref} id="home" className="section-home">
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

      <section ref={ref => sectionRefs.current[1] = ref} id="members" className="section-members">
        <HeaderSection title="Chi Siamo"
          description="RainbowTech nasce da un gruppo di amici che condividono la passione per l'informatica e la voglia di sperimentare nuove tecnologie con l'obiettivo di apprendere e migliorare nuove competenze"
        >
        </HeaderSection>
        <CardListView
          cards={cardsProfileListMock}
          handleSocialLink={handleSocialLink}
        />
      </section>

      <section ref={ref => sectionRefs.current[2] = ref} id="portfolio" className="section-portfolio">
        <HeaderSection title="Portfolio"
          description="C'è vero progresso solo quando i vantaggi di una nuova tecnologia diventano per tutti"
        >
        </HeaderSection>
        <CardListView
          cards={cardsListMock}
          handleSocialLink={handleSocialLink}
        />
      </section>

      <section ref={ref => sectionRefs.current[3] = ref} id="blog" className="section-blog">
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