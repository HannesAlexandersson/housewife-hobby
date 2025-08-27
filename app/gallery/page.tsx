import FloatingElements from "@/components/FloatingElements/FloatingElements";
import SingleHero from "@/components/Hero/SingleHero";
import TextBlock from "@/components/TextSection/TextSection";
import apolloClient from "@/lib/apolloClient";
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
      <FloatingElements>kategories coming soon...</FloatingElements>
    </main>
  );
};
export default galleryPage;
