import ApolloClient from "apollo-boost";

import { endpoint } from "./utils";

const client = new ApolloClient({
  uri: endpoint || "http://localhost:1337/graphql"
});

export default client;
