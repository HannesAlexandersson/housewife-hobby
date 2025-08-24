export interface HeroData {
  sys?: { id: string };
  heroTitle: string;
  heroImage: {
    sys?: { id: string };
    url: string;
    title?: string;
  };
}

export interface HeroProps {
  hero: HeroData;
  isLanding?: boolean;
}
