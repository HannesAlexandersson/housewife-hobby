import { gql } from "@apollo/client";

export const GET_GALLERY_IMAGES = gql`
  query getData($preview: Boolean) {
    galleryImagesCollection(limit: 50, preview: $preview) {
      items {
        sys {
          id
        }
        title
        description
        image {
          sys {
            id
          }
          url
          title
        }
        category
      }
    }
  }
`;
