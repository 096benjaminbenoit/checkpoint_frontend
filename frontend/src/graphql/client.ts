import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.API_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

export default client;
