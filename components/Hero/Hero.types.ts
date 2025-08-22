export interface HeroData {
  heroTitle: string;
  heroImage: {
    url: string;
    title?: string;
  };
}

export interface HeroProps {
  hero: HeroData;
  isLanding?: boolean;
}
