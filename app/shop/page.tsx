import FloatingElements from "@/components/FloatingElements/FloatingElements";
import SingleHero from "@/components/Hero/SingleHero";
import apolloClient from "@/lib/apolloClient";
import previewClient from "@/lib/previewClient";
import { GET_GALLERY_DATA, GET_SINGLE_HERO_DATA } from "@/querys";
import { DocumentNode } from "@apollo/client";
import { draftMode } from "next/headers";
import {
  GalleryDataProps,
  SingleHeroDataProps,
} from "../gallery/gallery.types";

const ShopPage = async () => {
  const { isEnabled } = await draftMode();
  const client = isEnabled ? previewClient : apolloClient;

  const { data } = await client.query<SingleHeroDataProps>({
    query: GET_SINGLE_HERO_DATA as DocumentNode,
    variables: { preview: isEnabled, title: "Välkommen till butiken" },
  });

  const shopHeroData = data?.heroSectionCollection?.items || [];

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
    <main>
      <SingleHero
        heroData={shopHeroData[0]}
        textData={sortedGalleryData[0].sectionText}
      />
      <FloatingElements>
        <div className="my-24 flex flex-col items-center justify-center gap-6 px-6 text-center">
          <h2 className="font-inter text-4xl font-bold text-white-500 md:text-5xl">
            Butiken är på gång!
          </h2>
          <p className="max-w-2xl font-questrial text-lg text-white-500 md:text-xl">
            Just nu jobbar jag på att få upp butiken här på hemsidan. Under
            tiden kan du nå mig via Instagram eller mail för beställningar och
            frågor.
          </p>
        </div>
      </FloatingElements>
    </main>
  );
};
export default ShopPage;
