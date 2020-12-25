import React from 'react';
import { CardListView } from '../../components/lists/card-list-view/card-list-view';
import { cardsListMock, cardsProfileListMock } from '../../components/lists/card-list-view/card-list-view.mock';

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
        console.log('@ home');
        if(homeRef.current) {
          homeRef.current.scrollIntoView(/* {behavior: "smooth"} */)
        }
      }
        break;
      case 'members': {
        console.log('@ members');
        if(membersRef.current) {
          membersRef.current.scrollIntoView(/* {behavior: "smooth"} */)
        }
      }
        break;
      case 'portfolio': {
        console.log('@ portfolio');
        if(portfolioRef.current) {
          portfolioRef.current.scrollIntoView(/* {behavior: "smooth"} */)
        }
      }
        break;
      case 'blog': {
        console.log('@ blog');
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

      <section ref={membersRef} id="members" className="section-members">
        chi siamo
        <CardListView
          cards={cardsProfileListMock}
          handleSocialLink={handleSocialLink}
        />
      </section>
    
      <section ref={portfolioRef} id="portfolio" className="section-portfolio">
        portfolio
        <CardListView
          cards={cardsListMock}
          handleSocialLink={handleSocialLink}
        />
      </section>

      <section ref={blogRef} id="blog" className="section-blog">
        articoli
      </section>
    </div>
  )
}