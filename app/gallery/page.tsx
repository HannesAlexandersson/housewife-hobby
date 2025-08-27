import { Button } from "@/components/Button/Button";
import FloatingElements from "@/components/FloatingElements/FloatingElements";
import SingleHero from "@/components/Hero/SingleHero";
import Typography from "@/components/Typography/Typography";
import apolloClient from "@/lib/apolloClient";
import { categories } from "@/lib/galleryCategories";
import previewClient from "@/lib/previewClient";
import { GET_GALLERY_DATA, GET_SINGLE_HERO_DATA } from "@/querys";
import { DocumentNode } from "@apollo/client";
import { draftMode } from "next/headers";
import { GalleryDataProps, SingleHeroDataProps } from "./gallery.types";

const galleryPage = async () => {
  const { isEnabled } = await draftMode();
  const client = isEnabled ? previewClient : apolloClient;

  const { data } = await client.query<SingleHeroDataProps>({
    query: GET_SINGLE_HERO_DATA as DocumentNode,
    variables: { preview: isEnabled, title: "Galleri" },
  });

  const galleryHeroData = data?.heroSectionCollection?.items || [];

  const { data: galleryData } = await client.query<GalleryDataProps>({
    query: GET_GALLERY_DATA,
    variables: { preview: isEnabled },
  });

  const gallerySections =
    galleryData?.galleryTextSectionsCollection?.items || [];
  const sortedGalleryData = gallerySections
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      sectionTitle: item.title,
      sectionText: item.sectionText,
      sectionImage: item.sectionImage,
      order: item.order,
    }));

  return (
    <main className="relative">
      <SingleHero
        heroData={galleryHeroData[0]}
        textData={sortedGalleryData[0].sectionText}
      />
      <FloatingElements>
        <section className="section-contain w-full h-auto my-16 md:my-32">
          <div className="bg-white z-10 frosted-glass border border-gray-300 shadow-lg px-8 py-12 rounded-lg">
            <div className="flex flex-col md:flex-row gap-5 w-full h-auto">
              {categories.map((block, index) => (
                <Button key={index} variant="category">
                  {block}
                </Button>
              ))}
            </div>
          </div>
        </section>
      </FloatingElements>
    </main>
  );
};
export default galleryPage;
