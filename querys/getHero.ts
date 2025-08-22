import { gql } from "@apollo/client";

export const GET_HERO_DATA = gql`
  query getData($preview: Boolean) {
    heroSectionCollection(limit: 5, preview: $preview) {
      items {
        heroTitle
        heroImage {
          url
          title
        }
      }
    }
  }
`;
