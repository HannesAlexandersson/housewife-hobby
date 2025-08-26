"use client";

import Typography from "@/components/Typography/Typography";
import Image from "next/image";
import { SingleHeroData } from "./Hero.types";

const SingleHero = ({ heroData }: { heroData: SingleHeroData }) => {
  return (
    <section className="relative h-screen bg-black/30 object-cover">
      <Image
        className={`absolute -z-10 transition-opacity duration-1000`}
        src={heroData.heroImage.url}
        alt={heroData.heroImage.title || "Hero image"}
        fill={true}
        sizes="100vw"
        priority={false}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      <div className="mx-auto flex h-full max-w-[1440px] items-end justify-center px-6 pb-24 sm:items-center sm:pb-0 sm:pt-24">
        <div className="flex flex-col items-center gap-12 text-center text-annika-pink">
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <Typography
              variant="h1"
              className="font-secondaryFont text-5xl lg:text-8xl"
            >
              {heroData.heroTitle}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleHero;
