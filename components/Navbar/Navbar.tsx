import apolloClient from "@/lib/apolloClient";
import previewClient from "@/lib/previewClient";
import { GET_NAVBAR_DATA } from "@/querys";
import { draftMode } from "next/headers";
import NavbarClient from "./NavbarClient";

interface LogoCollectionProps {
  navbarLogotypeCollection: {
    items: { navbarLogotype: { url: string; title?: string } }[];
  };
}
const Navbar = async () => {
  const { isEnabled } = await draftMode();
  const client = isEnabled ? previewClient : apolloClient;
  const { data } = await client.query<LogoCollectionProps>({
    query: GET_NAVBAR_DATA,
    variables: { preview: isEnabled },
  });

  const logo = data?.navbarLogotypeCollection?.items || [];

  return (
    <div>
      <NavbarClient logo={logo[0]} withBg={false} variant="light" />
    </div>
  );
};

export const NavbarSkeleton = () => {
  return (
    <div>
      <NavbarClient
        logo={{ navbarLogotype: { url: "", title: "" } }}
        withBg={false}
        variant="light"
      />
    </div>
  );
};

export default Navbar;
