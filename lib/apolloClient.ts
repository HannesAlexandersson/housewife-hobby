import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
//HttpLink
const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_CONTENTFUL_SPACE_ID}/?access_token=${process.env.NEXT_CONTENTFUL_ACCESS_KEY}`,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      nextFetchPolicy: "cache-first",
    },
  },
});

export default apolloClient;
