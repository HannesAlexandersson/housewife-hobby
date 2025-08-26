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

export interface HeroProps {
  hero: HeroData;
  isLanding?: boolean;
}
