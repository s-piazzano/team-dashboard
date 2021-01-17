import { graphql } from "gatsby";

export const homepageQuery = graphql`
  {
    strapiHomepage {
      section {
        description
        id
        title
        card {
          value
        }
      }
    }
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
  }
`;
