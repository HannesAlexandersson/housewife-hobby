import { Document as RichTextDocument } from "@contentful/rich-text-types";

export interface GalleryImageDataProps {
  galleryImagesCollection: {
    items: GalleryImage[];
  };
}
export interface GalleryImage {
  title: string;
  description: string;
  sys: {
    id: string;
  };
  image: {
    title: string;
    url: string;
  };
  category: string;
}

export interface SingleHeroDataProps {
  heroSectionCollection: {
    items: SingleHeroData[];
  };
}
export interface SingleHeroData {
  heroTitle: string;
  heroImage: {
    title: string;
    url: string;
  };
}
export interface GalleryDataProps {
  galleryTextSectionsCollection: {
    items: GallerySectionProps[];
  };
}

export interface GallerySectionProps {
  title: string;
  sectionText: { json: RichTextDocument };
  sectionImage: {
    title: string;
    url: string;
  };
  order: number;
}
