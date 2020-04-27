import ApolloClient from "apollo-boost";

import { ENDPOINT } from "./config";

const client = new ApolloClient({
  uri: ENDPOINT || "http://localhost:1337/graphql"
});

export default client;
