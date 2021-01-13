import React, { ReactElement } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { SidebarMenu } from '../components/sidebars/sidebar-menu/sidebar-menu';

import { LayoutWithSidebar } from '../components/layouts/layout-with-sidebar/layout-with-sidebar';
import { SinglePageContainer } from '../containers/single-page-container/single-page-container';

import '../../assets/scss/main.scss';
import './index.scss';
import { MenuItemInterface } from '../queries/menu-items';
import { getFooterLinksQuery } from '../queries/footer-links';

export default function Home({ data }: any): ReactElement<any> {
  console.log('DATA', data);

  const links = getFooterLinksQuery();

  const fetchedSections = data.strapiHomePageSections.Sections;
  const fetchedItems: Array<MenuItemInterface> =
    data?.strapiLeftMenu?.items || [];

  const [items, updateMenuSelection] = React.useState(fetchedItems);
  const [sidebarIsOpen, toggleSidebar] = React.useState(false);

  const handleMenuSelection = (target: string) => {
    const updatedItems: Array<MenuItemInterface> = items.map(item =>
      item.section.name === target
        ? { ...item, isSelected: true }
        : { ...item, isSelected: false }
    );

    updateMenuSelection(updatedItems);
  };

  const handleSocialLink = (url: string) => {
    // debugger;
    alert(url);
    // window.open(url, '_blank');
  };

  return (
    <div className="page">
      <LayoutWithSidebar
        sidebarIsOpen={sidebarIsOpen}
        layoutAction={() => toggleSidebar(!sidebarIsOpen)}
      >
        <SidebarMenu
          className="section-sidebar"
          sidebarIsOpen={sidebarIsOpen}
          items={items}
          links={links}
          handleSidebarSocialLink={handleSocialLink}
          handleMenuSelection={handleMenuSelection}
        />
        <SinglePageContainer
          data={data}
          items={items}
          sections={fetchedSections}
          sidebarIsOpen={sidebarIsOpen}
          handleScroll={handleMenuSelection}
          handleSocialLink={handleSocialLink}
        />
      </LayoutWithSidebar>
    </div>
  );
}

// WE LOAD THE DATA WE NEED
// WE FILTER LATER BY PARAMS WE NEED
// IN HOME PAGE WE GET 'articles', 'projects' and long list limited by laste 3,4,6 elements
// CARD ref will indicate if articles or other items are to be used
export const query = graphql`
  {
    strapiLeftMenu {
      items {
        icon
        id
        isSelected
        value
        name
        section {
          name
        }
      }
    }

    strapiHomePageSections {
      Sections {
        id
        type
        title
        isSelected
        description
        cardsSource
        actionLabel
        background_color
        value {
          name
        }
        backgroundImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }

    allStrapiMember {
      nodes {
        fullname
        description
        socials {
          icon
          url
          value
        }
        photo {
          childImageSharp {
            fluid(fit: COVER) {
              base64
              src
            }
          }
        }
      }
    }

    allStrapiProjects {
      nodes {
        title
        projectUrl
        description
        published_at
        imageUrl
        image {
          childImageSharp {
            fluid(fit: COVER) {
              src
            }
          }
        }
      }
    }

    allStrapiArticles(sort: { order: DESC, fields: published_at }) {
      nodes {
        published_at
        title
        subtitle
        description
        imageUrl
        Author {
          fullname
        }
      }
    }
  }
`;

// const riga = {
//   id: '0002',
//   name: 'fanaleUniversale',
//   category: 'AUTO > FANALI > POSTERIORI',
//   category2: 'MOTO > FANALINI > POSTERIORI',
// }

// `
// CATEGORIE [
//   AUTO [
//     MARMITTE
//     FANALI [
//       POSTERIORI
//       ANTERIORI
//     ]
//     RUOTE
//   ]

//   MOTO
//     MARMITTE
//     RUOTE
//     FANLINI
//       ANTERIORI
//       POSTERIORI
// ]

// `

//  CATEGORIE forEach categories crea una lista <category lvl1>

//     foreach livello 2 crea una lista di category

//       foreach livello crea ua category di livello 3

// LISTA PRODOTTI
//  [
//    riga1,
//    riga2
//  ]

//  foreach riga => crea link al id prodotto all'interno di category[riga.lv1][riga.lvl2][riga.lvl3]
