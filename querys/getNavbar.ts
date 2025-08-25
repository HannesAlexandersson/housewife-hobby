import { gql } from "@apollo/client";

export const GET_NAVBAR_DATA = gql`
  query getData($preview: Boolean) {
    navbarLogotypeCollection(limit: 5, preview: $preview) {
      items {
        navbarLogotype {
          url
          title
        }
      }
    }
  }
`;
