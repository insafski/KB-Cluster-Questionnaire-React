import { useLocation } from "react-router-dom";

const cityName = process.env.REACT_APP_CITY_NAME;
const endpoint = process.env.REACT_APP_STRAPI_ENDPOINT;
const baseUrl = endpoint.replace("/graphql", "");
const theme = process.env.REACT_APP_THEME;

const useQueryString = () => new URLSearchParams(useLocation().search);

export { cityName, endpoint, baseUrl, theme, useQueryString };
