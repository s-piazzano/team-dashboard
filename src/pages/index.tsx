import React, { ReactElement } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { SidebarMenu } from '../components/sidebars/sidebar-menu/sidebar-menu';

import { LayoutWithSidebar } from '../components/layouts/layout-with-sidebar/layout-with-sidebar';
import { SinglePageContainer } from '../containers/single-page-container/single-page-container';
import { menuItems, links, sections } from './index.model';

import '../../assets/scss/main.scss';
import './index.scss';
import { MenuItemInterface } from '../queries/menu-items';

export default function Home({ data }: any): ReactElement<any> {
  const fetchedSections = data.strapiHomePageSections.Sections;

  console.log('DATA-----', data);

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
    window.open(url);
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
          allStrapiMember={data.allStrapiMember}
          items={items}
          sections={fetchedSections}
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
        type
        title
        isSelected
        description
        cardsSource
        value {
          name
        }
        background_color
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
      edges {
        node {
          id
          fullname
          description
        }
      }
    }
  }
`;

// strapiHomepage {
//   section {
//     description
//     id
//     title
//     card {
//       value
//     }
//   }
// }
