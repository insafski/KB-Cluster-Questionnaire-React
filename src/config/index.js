const CITY_NAME = process.env.REACT_APP_CITY_NAME;
const API_HOST = process.env.REACT_APP_API_HOST || "";
const ENDPOINT = API_HOST + "/graphql";
const THEME = process.env.REACT_APP_THEME;
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

export { THEME, API_HOST, ENDPOINT, CITY_NAME, MAPBOX_TOKEN };
