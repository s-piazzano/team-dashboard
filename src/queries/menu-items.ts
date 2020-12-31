export interface MenuItemInterface {
  name: string;
  icon: string;
  value: string;
  isSelected: boolean;
}

export const getMenuItemsQuery = (): Array<MenuItemInterface> => [
  {
    name: "Chi siamo",
    icon: "icon-home",
    value: "home",
    isSelected: true,
  },
  {
    name: "Il team",
    icon: "icon-group",
    value: "members",
    isSelected: false,
  },
  {
    name: "Portfolio",
    icon: "icon-flask",
    value: "portfolio",
    isSelected: false,
  },
  {
    name: "Utlimi articoli",
    icon: "icon-coffee",
    value: "blog",
    isSelected: false,
  },
];

// = graphql`
// {
//   allStrapiArticle {
//     edges {
//       node {
//         id
//       }
//     }
//   }
// }
// `
