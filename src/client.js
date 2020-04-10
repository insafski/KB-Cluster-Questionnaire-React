import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: process.env.REACT_APP_STRAPI_ENDPOINT || "http://localhost:1337/graphql"
});

export default client;
