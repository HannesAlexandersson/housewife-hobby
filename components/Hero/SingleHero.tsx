"use client";

import { richTextOptions } from "@/components/RichTextOptions/RichTextOptions";
import Typography from "@/components/Typography/Typography";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import Image from "next/image";
import { SingleHeroData } from "./Hero.types";

const SingleHero = ({
  heroData,
  textData,
}: {
  heroData: SingleHeroData;
  textData: { json: RichTextDocument };
}) => {
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
              className="font-inter text-5xl lg:text-8xl"
            >
              {heroData.heroTitle}
            </Typography>
            <article className="font-questrial text-white-500 flex flex-col gap-4 text-shadow-lg text-2xl md:text-3xl max-w-4xl">
              {textData &&
                documentToReactComponents(textData.json, richTextOptions)}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleHero;
