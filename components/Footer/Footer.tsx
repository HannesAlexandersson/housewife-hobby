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
        <FooterClient />
        <div className="flex flex-1 flex-col items-center justify-start gap-4 pt-6">
          <div className="relative flex h-auto w-auto flex-1 flex-col items-center justify-start gap-1">
            <Link href={"/"} className="relative">
              <Image
                src={footerData[0]?.logo.url ?? ""}
                alt={footerData[0]?.logo.title ?? "Footer logo"}
                width={175}
                height={175}
                className="hover:cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex flex-row justify-center gap-5 pb-10 pt-2">
            <Link href="#" target="_blank" rel="noreferrer">
              <Icon name="facebook" size={28} strokeWidth={1} />
            </Link>
            <Link href="#" target="_blank" rel="noreferrer">
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
          <div className="flex flex-1 flex-col items-center justify-end gap-4">
            <h4>
              This page is powered by{" "}
              <Link href="https://minimalist-elegance.vercel.app/">
                <span className="text-annika-lightGreen hover:text-annika-darkGreen">
                  Alexander&son
                </span>
              </Link>
            </h4>
          </div>
          <div className="flex flex-1 flex-col items-center justify-end gap-4">
            <Typography size="sm" className="text-center">
              &copy; {new Date().getFullYear()} Alexander&son. All rights
              reserved.
            </Typography>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
