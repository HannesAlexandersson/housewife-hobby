import Skeleton from "@/components/Skeleton/Skeleton";
import Typography from "@/components/Typography/Typography";
import { cn } from "@/utils/utils";
import { ContentfulLivePreview } from "@contentful/live-preview";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import React from "react";
import { richTextOptions } from "../RichTextOptions/RichTextOptions";
import {
  SectionProps,
  TextBlockProps,
  TextBlockSkeletonProps,
} from "./TextSection.types";

export const TextBlockSkeleton: React.FC<TextBlockSkeletonProps> = ({
  dark = false,
  ...props
}) => {
  return (
    <div
      className={
        'grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 md:group-data-[reverse="true"]:[&>div]:odd:order-2 md:[&>div]:even:order-2 md:group-data-[reverse="true"]:[&>div]:even:order-1 md:[&>span]:even:order-1'
      }
      {...props}
    >
      <div className="grid grid-rows-10 gap-6">
        <Skeleton dark={dark} />
        <Skeleton dark={dark} />
        <Skeleton dark={dark} />
      </div>
      <span>
        <Skeleton
          dark={dark}
          className="aspect-square h-full rounded-lg object-cover object-center"
        />
      </span>
    </div>
  );
};

const TextBlock: React.FC<TextBlockProps> & {
  Section: React.FC<SectionProps>;
} = ({ block, className, variant = "light", showImage = true, ...props }) => {
  return (
    <div
      className={cn(
        'text-primaryText grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5 md:group-data-[reverse="true"]:[&>div]:odd:order-2 md:[&>div]:even:order-2 md:group-data-[reverse="true"]:[&>div]:even:order-1 md:[&>img]:even:order-1',
        { "text-light": variant === "dark", "text-dark": variant === "light" },
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-6">
        <Typography
          {...ContentfulLivePreview.getProps({
            assetId: block?.sys?.id ?? "",
            fieldId: "logos",
            locale: "en-US",
          })}
          variant="h2"
          className="font-primaryFont text-primaryText"
        >
          {block.sectionTitle}
        </Typography>
        <article
          {...ContentfulLivePreview.getProps({
            entryId: block?.sys?.id ?? "",
            fieldId: "logos",
            locale: "en-US",
          })}
          className="font-secondaryFont text-primaryText flex flex-col gap-4"
        >
          {block.sectionText &&
            documentToReactComponents(block.sectionText.json, richTextOptions)}
        </article>
      </div>
      {showImage && block.sectionImage?.url && (
        <Image
          src={block.sectionImage.url}
          alt={block.sectionImage.title ?? "Bild för text blocket"}
          width={1760}
          height={993}
          style={{ width: "auto", height: "auto" }}
          quality={80}
          priority
          className="h-full rounded-lg object-cover object-center"
          {...ContentfulLivePreview.getProps({
            assetId: block?.sys?.id ?? "",
            fieldId: "logos",
            locale: "en-US",
          })}
        />
      )}
    </div>
  );
};

const Section: React.FC<SectionProps> = ({
  children,
  className,
  reverse = false,
  ...props
}) => {
  return (
    <section
      data-reverse={reverse}
      className={cn("group flex flex-col gap-8 md:gap-16", className)}
      {...props}
    >
      {children}
    </section>
  );
};

TextBlock.Section = Section;

export default TextBlock;
