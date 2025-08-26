import FloatingElements from "@/components/FloatingElements/FloatingElements";
import SingleHero from "@/components/Hero/SingleHero";
import apolloClient from "@/lib/apolloClient";
import previewClient from "@/lib/previewClient";
import { GET_SINGLE_HERO_DATA } from "@/querys";
import { DocumentNode } from "@apollo/client";
import { draftMode } from "next/headers";
import { SingleHeroDataProps } from "./gallery.types";

const galleryPage = async () => {
  const { isEnabled } = await draftMode();
  const client = isEnabled ? previewClient : apolloClient;

  const { data } = await client.query<SingleHeroDataProps>({
    query: GET_SINGLE_HERO_DATA as DocumentNode,
    variables: { preview: isEnabled, title: "Galleri" },
  });

  const galleryHeroData = data?.heroSectionCollection?.items || [];
  return (
    <main className="relative">
      <SingleHero heroData={galleryHeroData[0]} />
      <section className="section-contain my-16 md:my-32">
        <FloatingElements>
          <p>Gallery page comin soon...</p>
        </FloatingElements>
      </section>
    </main>
  );
};
export default galleryPage;
