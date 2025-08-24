import Hero from "@/components/Hero/Hero";
import TextBlock from "@/components/TextSection/TextSection";
import apolloClient from "@/lib/apolloClient";
import previewClient from "@/lib/previewClient";
import { GET_HERO_DATA, GET_LANDINGPAGE_DATA } from "@/querys";
import { Document } from "@contentful/rich-text-types";
import { draftMode } from "next/headers";
import Image from "next/image";

export default async function Home() {
  const { isEnabled } = await draftMode();
  const client = isEnabled ? previewClient : apolloClient;

  const { data } = await client.query({
    query: GET_HERO_DATA,
    variables: { preview: isEnabled },
  });

  const landingHeroData = data?.heroSectionCollection?.items || [];

  const { data: landingData } = await client.query({
    query: GET_LANDINGPAGE_DATA,
    variables: { preview: isEnabled },
  });
  const landingPageSections = landingData?.landingPageCollection?.items || [];
  interface LandingpageSections {
    title: string;
    sectionText: { json: Document };
    sectionImage: { url: string; title?: string };
    order: number;
  }
  const sortedLandingPageData: LandingpageSections[] = landingPageSections
    .sort((a: LandingpageSections, b: LandingpageSections) => a.order - b.order)
    .map((item: LandingpageSections) => ({
      sectionTitle: item.title, // rename title -> sectionTitle
      sectionText: item.sectionText,
      sectionImage: item.sectionImage,
      order: item.order,
    }));
  return (
    <main className="relative">
      <Hero heroData={landingHeroData} />
      {sortedLandingPageData.map((section, index) => (
        <section
          key={index}
          className="section-contain w-full h-auto my-16 md:my-32"
        >
          <div className="w-[90%] md:w-3/4 bg-white bg-opacity-50 border border-gray-300 shadow-lg p-8 rounded-lg">
            {section && (
              <div className="flex flex-col md:flex-row w-full h-auto">
                <div className="flex-1 flex items-start justify-center p-6 md:p-16">
                  <div>
                    <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
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
                <div className="relative flex flex-1 items-start justify-center">
                  <Image
                    src={section.sectionImage.url}
                    alt={section.sectionImage.title || "Personal images"}
                    width={300}
                    height={500}
                    className="p-6 md:p-16 md:hidden"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src={section.sectionImage.url}
                    alt={section.sectionImage.title || "Personal images"}
                    fill={true}
                    className="p-6 md:p-16 sm:hidden md:block"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
