import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_CONTENTFUL_SPACE_ID}/?access_token=${process.env.NEXT_CONTENTFUL_ACCESS_KEY}`,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      nextFetchPolicy: "cache-first",
    },
  },
});

export default apolloClient;
