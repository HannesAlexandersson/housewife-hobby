export interface HeroData {
  sys?: { id: string };
  heroTitle: string;
  heroImagesCollection: {
    items: {
      url: string;
      title: string;
    }[];
  };
}
export interface SingleHeroData {
  sys?: { id: string };
  heroTitle: string;
  heroImage: {
    url: string;
    title: string;
  };
}
export interface HeroProps {
  hero: HeroData;
  isLanding?: boolean;
}
