import { Document as RichTextDocument } from "@contentful/rich-text-types";

export interface HeroSectionCollection {
  heroSectionCollection: {
    items: LandingHeroData[];
  };
}

export interface LandingHeroData {
  heroTitle: string;
  heroImage: { sys?: { id: string }; url: string; title?: string };
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
