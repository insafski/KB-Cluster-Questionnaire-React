const cityName = process.env.REACT_APP_CITY_NAME;
const endpoint = process.env.REACT_APP_STRAPI_ENDPOINT;
const baseUrl = endpoint.replace("/graphql", "");
const theme = process.env.REACT_APP_THEME;

export { cityName, endpoint, baseUrl, theme };
