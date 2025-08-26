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
