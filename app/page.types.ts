import { Document as RichTextDocument } from "@contentful/rich-text-types";

export interface HeroSectionCollection {
  heroSectionCollection: {
    items: LandingHeroData[];
  };
  showcaseCollection?: {
    items: ShowcaseProps[];
  };
}
export interface ShowcaseProps {
  sys: { id: string };
  __typename: string;
  title: string;
  slug: string;
  beskrivning: string;
  category: string;
  pris: number;
  image: { url: string; title: string };
}

export interface LandingHeroData {
  heroTitle: string;
  heroImagesCollection: {
    items: {
      url: string;
      title: string;
    }[];
  };
}

export interface LandingPageCollectionProps {
  landingPageTextSectionsCollection: {
    items: LandingpageSections[];
  };
}

export interface LandingpageSections {
  title: string;
  sectionText: { json: RichTextDocument };
  sectionImage: { url: string; title?: string };
  order: number;
}
