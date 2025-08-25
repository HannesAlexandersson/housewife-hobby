import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const previewClient = new ApolloClient({
  link: new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_CONTENTFUL_SPACE_ID}/?access_token=${process.env.NEXT_CONTENTFUL_PREVIEW_KEY}`,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only",
      nextFetchPolicy: "cache-first",
    },
  },
});

export default previewClient;
