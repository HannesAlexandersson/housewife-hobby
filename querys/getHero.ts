import { gql } from "@apollo/client";

export const GET_HERO_DATA = gql`
  query getData($preview: Boolean, $title: String) {
    heroSectionCollection(
      limit: 5
      preview: $preview
      where: { heroTitle: $title }
    ) {
      items {
        sys {
          id
        }
        heroTitle
        heroImagesCollection {
          items {
            url
            title
          }
        }
      }
    }
  }
`;

/* export const GET_HERO_DATA = gql`
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
        } */
/*  """ showcaseCollection(limit: 3, preview: $preview) {
          items {
            sys {
              id
            }
            __typename
            ... on Keramik {
              title
              slug
              beskrivning
              category
              pris
              image {
                url
                title
              }
            }
            ... on Textil {
              title
              slug
              beskrivning
              category
              pris
              image {
                url
                title
              }
            }
          }
        } """
      }
    }
  }
`;
 */
