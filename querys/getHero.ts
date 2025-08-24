import { gql } from "@apollo/client";

export const GET_HERO_DATA = gql`
  query getData($preview: Boolean) {
    heroSectionCollection(limit: 5, preview: $preview) {
      items {
        sys {
          id
        }
        heroTitle
        heroImage {
          sys {
            id
          }
          url
          title
        }
      }
    }
  }
`;
