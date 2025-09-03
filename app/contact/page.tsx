import FloatingElements from "@/components/FloatingElements/FloatingElements";
import SingleHero from "@/components/Hero/SingleHero";
import Icon from "@/components/Icon/Icon";
import Typography from "@/components/Typography/Typography";
import apolloClient from "@/lib/apolloClient";
import previewClient from "@/lib/previewClient";
import { GET_GALLERY_DATA, GET_SINGLE_HERO_DATA } from "@/querys";
import { DocumentNode } from "@apollo/client";
import { Mail } from "lucide-react";
import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {
  GalleryDataProps,
  SingleHeroDataProps,
} from "../gallery/gallery.types";

const ContactPage = async () => {
  const { isEnabled } = await draftMode();
  const client = isEnabled ? previewClient : apolloClient;

  const { data } = await client.query<SingleHeroDataProps>({
    query: GET_SINGLE_HERO_DATA as DocumentNode,
    variables: { preview: isEnabled, title: "Kontakt" },
  });

  const contactHeroData = data?.heroSectionCollection?.items || [];
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
        heroData={contactHeroData[0]}
        textData={sortedGalleryData[0].sectionText}
      />
      <FloatingElements>
        <section className="section-contain flex flex-col items-center justify-center w-full h-auto my-16 md:my-32">
          <div className="md:w-3/4 bg-white z-10 frosted-glass border border-gray-300 shadow-lg p-8 rounded-lg">
            <div className="flex flex-col items-start justify-center gap-4 w-full h-auto">
              <Typography
                variant="h2"
                className="text-black-500 font-questrial"
              >
                Olika kontaktvägar:
              </Typography>
              <div className="flex flex-col md:flex-row gap-4 items-start justify-center">
                <Link
                  href="mailto:annikaalexanderson@hotmail.com"
                  className="flex flex-row gap-3"
                >
                  <Image
                    src="/gmail.svg"
                    alt="Mailicon"
                    width={28}
                    height={28}
                  />
                </Link>{" "}
                <Typography variant="p">
                  annikaalexanderson@hotmale.com
                </Typography>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-start justify-center">
                <Link
                  href="https://www.instagram.com/mormorochjag/"
                  className="flex flex-row gap-3"
                >
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={28}
                    height={28}
                  />
                </Link>{" "}
                <Typography variant="p">Instagram: @mormorochjag</Typography>
              </div>
            </div>
          </div>
        </section>
      </FloatingElements>
    </main>
  );
};
export default ContactPage;
