import { gql } from "@apollo/client";

export const GET_FOOTER_DATA = gql`
  query getData($preview: Boolean) {
    footerSectionCollection(limit: 5, preview: $preview) {
      items {
        title
        logo {
          url
          title
        }
      }
    }
  }
`;
