"use client";

import Typography from "@/components/Typography/Typography";
import locations from "@/lib/locations";
import pageLinks from "@/lib/pageLinks";
import { cn } from "@/utils/utils";
import Link from "next/link";
import {
  SectionContentProps,
  SectionProps,
  SectionTitleProps,
} from "./Footer.types";

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <section {...props} className="flex flex-col md:min-w-40 md:gap-3">
      {children}
    </section>
  );
};

const Title = ({ children, ...props }: SectionTitleProps) => {
  return (
    <Typography
      variant={"h4"}
      className={
        "text-primaryText text-3xl font-semibold uppercase underline underline-offset-4 md:text-xl"
      }
      {...props}
    >
      {children}
    </Typography>
  );
};

Section.Title = Title;

const Content = ({ children, className, ...props }: SectionContentProps) => {
  return (
    <div className={cn("flex flex-col md:gap-2 ", className)} {...props}>
      {children}
    </div>
  );
};

Section.Content = Content;

const FooterClient = ({ ...props }) => {
  return (
    <>
      <div
        {...props}
        className="bg-annika-cream px-6 py-8 text-annika-blue md:p-16 "
      >
        <div className="flex flex-col md:flex-row mx-auto max-w-[1024px] justify-between items-start w-full ">
          <Section id="contactFooter">
            <Section.Title>Kontakt</Section.Title>
            <Section.Content>
              <a
                href="mailto:alexanderochson@gmail.com"
                className="hover:underline-offset-2 hover:underline hover:text-linkHoverClr"
              >
                alexanderochson@gmail.com
              </a>
            </Section.Content>
            <Section.Content>
              <Typography
                size="sm"
                className="hover:underline-offset-2 hover:underline hover:text-linkHoverClr"
              >
                +46790112009
              </Typography>
            </Section.Content>
          </Section>

          <Section>
            <Section.Title>Navigering</Section.Title>
            <Section.Content>
              {pageLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <Typography
                    size="sm"
                    className="hover:underline-offset-2 hover:underline hover:text-linkHoverClr"
                  >
                    {link.title}
                  </Typography>
                </Link>
              ))}
            </Section.Content>
          </Section>
          <Section>
            <Section.Title>Hitta</Section.Title>
            <Section.Content className={"gap-4"}>
              {locations.map((location) => (
                <div key={location.address}>
                  <Typography className={"text-md font-medium md:text-lg "}>
                    {location.title}
                  </Typography>
                  <a
                    target="_blank"
                    href={`https://maps.google.com/?q=${location.address}`}
                    className="hover:underline-offset-2 hover:underline hover:text-linkHoverClr"
                  >
                    <Typography size="sm">{location.address}</Typography>
                  </a>
                </div>
              ))}
            </Section.Content>
          </Section>
        </div>
      </div>
    </>
  );
};

export default FooterClient;
