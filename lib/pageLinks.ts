type PageLinkProps = {
  title: string;
  path: string;
}[];

const pageLinks: PageLinkProps = [
  {
    title: "Hem",
    path: "/",
  },
  {
    title: "Galleri",
    path: "/gallery",
  },
  {
    title: "Butik",
    path: "/shop",
  },
  {
    title: "Kontakt",
    path: "/contact",
  },
];

export default pageLinks;
