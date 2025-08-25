import Hero from "@/components/Hero/Hero";
import TextBlock from "@/components/TextSection/TextSection";
import apolloClient from "@/lib/apolloClient";
import previewClient from "@/lib/previewClient";
import { GET_HERO_DATA, GET_LANDINGPAGE_DATA } from "@/querys";
import { DocumentNode } from "@/utils/globalTypes";
import { draftMode } from "next/headers";
import Image from "next/image";
import {
  HeroSectionCollection,
  LandingHeroData,
  LandingPageCollectionProps,
  LandingpageSections,
} from "./page.types";

export default async function Home() {
  const { isEnabled } = await draftMode();
  const client = isEnabled ? previewClient : apolloClient;

  const { data } = await client.query<HeroSectionCollection>({
    query: GET_HERO_DATA as DocumentNode,
    variables: { preview: isEnabled },
  });

  const landingHeroData: LandingHeroData[] =
    data?.heroSectionCollection?.items || [];

  const { data: landingData } = await client.query<LandingPageCollectionProps>({
    query: GET_LANDINGPAGE_DATA,
    variables: { preview: isEnabled },
  });
  const landingPageSections: LandingpageSections[] =
    landingData?.landingPageTextSectionsCollection?.items || [];

  const sortedLandingPageData = landingPageSections
    .sort((a: LandingpageSections, b: LandingpageSections) => a.order - b.order)
    .map((item: LandingpageSections) => ({
      sectionTitle: item.title, // rename title -> sectionTitle
      sectionText: item.sectionText,
      sectionImage: item.sectionImage,
      order: item.order,
    }));

  return (
    <>
      <main className="relative">
        <div className="fixed inset-0 -z-10"></div>
        <Hero heroData={landingHeroData} />
        {sortedLandingPageData.map((section, index) => (
          <section
            key={index}
            className="section-contain w-full h-auto my-16 md:my-32"
          >
            <div className="md:w-3/4 bg-white frosted-glass border border-gray-300 shadow-lg p-8 rounded-lg">
              {section && (
                <div className="flex flex-col md:flex-row w-full h-auto">
                  <div className="flex-1 flex items-start justify-center">
                    <div className="text-lg md:text-2xl">
                      <TextBlock.Section
                        key={section.order}
                        className={"mx-auto max-w-[1440px] my-6 px-6 md:px-16"}
                        reverse={section.order % 2 === 0 ? true : false}
                      >
                        <TextBlock block={section} showImage={true} />
                      </TextBlock.Section>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
