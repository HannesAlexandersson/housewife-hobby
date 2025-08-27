import Icon from "@/components/Icon/Icon";
import apolloClient from "@/lib/apolloClient";
import previewClient from "@/lib/previewClient";
import { GET_FOOTER_DATA } from "@/querys";
import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import Typography from "../Typography/Typography";
import FooterClient from "./FooterClient";

interface FooterQueryProps {
  footerSectionCollection: {
    items: FooterDataProps[];
  };
}

interface FooterDataProps {
  logo: {
    url: string;
    title?: string;
  };
  title?: string;
}

const Footer = async () => {
  const { isEnabled } = await draftMode();
  const client = isEnabled ? previewClient : apolloClient;

  const { data } = await client.query<FooterQueryProps>({
    query: GET_FOOTER_DATA,
    variables: { preview: isEnabled },
  });
  const footerData: FooterDataProps[] =
    data?.footerSectionCollection?.items.map((item: FooterDataProps) => ({
      logo: item.logo,
      title: item.title,
    })) || [];

  return (
    <>
      <footer className="flex flex-col border-t-2 border-annika-pink bg-annika-cream px-2 py-6 text-annika-blue">
        <div>
          <FooterClient />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around gap-4 pt-6 px-4">
          <Link href={"/"} className="relative">
            <Image
              src={footerData[0]?.logo.url ?? ""}
              alt={footerData[0]?.logo.title ?? "Footer logo"}
              width={175}
              height={175}
              className="hover:cursor-pointer"
            />
          </Link>

          <Typography size="sm" className="text-center">
            &copy; {new Date().getFullYear()} Mormor&Jag. All rights reserved.
          </Typography>

          <div className="flex flex-row justify-center gap-5 pb-10 pt-2 md:pb-0 md:pt-0">
            <Link href="#" target="_blank" rel="noreferrer">
              <Icon name="facebook" size={28} strokeWidth={1} />
            </Link>
            <Link
              href="https://www.instagram.com/mormorochjag/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="instagram" size={28} strokeWidth={1} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/hannes-alexandersson-3226952b3/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" size={28} strokeWidth={1} />
            </Link>
            <Link
              href="https://github.com/HannesAlexandersson"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" size={28} strokeWidth={1} />
            </Link>
          </div>

          <h4>
            This page is powered by{" "}
            <Link href="https://minimalist-elegance.vercel.app/">
              <span className="text-annika-lightGreen hover:text-annika-darkGreen">
                Alexander&son
              </span>
            </Link>
          </h4>
        </div>
      </footer>
    </>
  );
};
export default Footer;
