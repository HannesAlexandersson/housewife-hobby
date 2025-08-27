import { gql } from "@apollo/client";
export const GET_GALLERY_DATA = gql`
  query getData($preview: Boolean) {
    galleryTextSectionsCollection(limit: 5, preview: $preview) {
      items {
        sys {
          id
        }
        title
        sectionText {
          json
        }
        sectionImage {
          sys {
            id
          }
          url
          title
        }
        order
      }
    }
  }
`;
