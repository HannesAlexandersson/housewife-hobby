import { DocumentNode } from "@apollo/client";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

export type { DocumentNode };

export interface BlockProps {
  sys?: ContentfulSys;
  sectionTitle?: string;
  sectionText?: { json: RichTextDocument };
  sectionImage?: ImageProps;
  order: number;
}

export type ShowcaseItem = {
  id: string;
  type: "Keramik" | "Textil";
  title: string;
  slug: string;
  beskrivning: string;
  category: string[];
  pris: string;
  image: {
    url: string;
    title: string;
  };
};

export interface HeroDataProps {
  heroTitleFirst: string;
  heroTitleSecond: string;
  heroText: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  heroImage?: {
    sys: { id: string };
    url: string;
  };
  page?: string; // Optional field for page reference
}

export interface DataProps {
  sys?: ContentfulSys;
  sectionTitle?: string;
  sectionText?: { json: RichTextDocument };
  sectionImage?: ImageProps;
  order: number;
}

export interface ContentfulSys {
  id: string;
}

export interface ImageProps {
  url: string;
  sys?: ContentfulSys;
  description?: string;
  title?: string;
}
export interface CardData {
  sys: { id: string };
  cardTitle: string;
  cardText: string;
  nameOfIcon: string;
  order: number;
}
export interface CardSliderData {
  sys: { id: string };
  cardTitle: string;
  cardText: { json: RichTextDocument };
  nameOfIcon: string;
  order: number;
  price?: string;
  nameOfIconColor?: string;
}

export type QuoteTextBlockProps = {
  block: RichTextDocument;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
