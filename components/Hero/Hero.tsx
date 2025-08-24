"use client";

import { Button } from "@/components/Button/Button";
import Skeleton from "@/components/Skeleton/Skeleton";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HeroData } from "./Hero.types";

const Hero = ({ heroData }: { heroData: HeroData[] }) => {
  const router = useRouter();

  return (
    <section className="relative h-screen bg-black/30 object-cover">
      <Image
        className="absolute -z-10"
        src={heroData[0].heroImage.url}
        alt={heroData[0].heroImage.title || "Hero image"}
        quality={100}
        fill={true}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        priority={true}
      />
      <div className="mx-auto flex h-full max-w-[1440px] items-end justify-center px-6 pb-24 sm:items-center sm:pb-0 sm:pt-24">
        <div className="flex flex-col items-center gap-12 text-center text-annika-pink">
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl">
              {heroData[0].heroTitle}
            </h1>
          </div>

          <Link href="/gallery">
            <Button className="w-full sm:w-fit" variant="outlinedSecondary">
              Besök galleriet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const HeroSkeleton = () => {
  return <Skeleton className="h-screen" />;
};

export default Hero;
