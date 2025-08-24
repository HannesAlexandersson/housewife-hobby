import Hero from "@/components/Hero/Hero";
import apolloClient from "@/lib/apolloClient";
import previewClient from "@/lib/previewClient";
import { GET_HERO_DATA } from "@/querys";
import { draftMode } from "next/headers";

export default async function Home() {
  const { isEnabled } = await draftMode();
  const client = isEnabled ? previewClient : apolloClient;

  const { data } = await client.query({
    query: GET_HERO_DATA,
    variables: { preview: isEnabled },
  });

  const landingHeroData = data?.heroSectionCollection?.items || [];
  return (
    <main className="">
      <Hero heroData={landingHeroData} />
    </main>
  );
}
