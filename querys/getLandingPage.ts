import { gql } from "@apollo/client";

export const GET_LANDINGPAGE_DATA = gql`
  query getData($preview: Boolean) {
    landingPageTextSectionsCollection(limit: 5, preview: $preview) {
      items {
        title
        sectionText {
          json
        }
        sectionImage {
          url
          title
        }
        order
      }
    }
  }
`;
