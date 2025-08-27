import { gql } from "@apollo/client";

export const GET_SINGLE_HERO_DATA = gql`
  query getData($preview: Boolean, $title: String) {
    heroSectionCollection(
      limit: 1
      preview: $preview
      where: { heroTitle: $title }
    ) {
      items {
        sys {
          id
        }
        heroTitle
        heroImage {
          title
          url
        }
      }
    }
  }
`;
