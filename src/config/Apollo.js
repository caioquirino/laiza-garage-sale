import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const swellStoreId = process.env.REACT_APP_SWELL_STORE_ID;
const swellPublicToken = process.env.REACT_APP_SWELL_PUBLIC_TOKEN;

if (!swellStoreId)
  throw new Error(
    `Missing REACT_APP_SWELL_STORE_ID variable in the .env.local file`
  );

if (!swellPublicToken)
  throw new Error(
    "Missing REACT_APP_SWELL_PUBLIC_TOKEN variable in the .env.local file"
  );

const storeUrl = `https://${swellStoreId}.swell.store`;

const httpLink = createHttpLink({
  // This is the URL to your store's GraphQL server.
  //
  // If you want to use the Playground, you can use this URL instead:
  // https://${swellStoreId}.swell.store/playground

  uri: `${storeUrl}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: swellPublicToken,
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
