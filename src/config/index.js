const cityName = process.env.REACT_APP_CITY_NAME;
const apiUrl = process.env.REACT_APP_API_HOST || "";
const endpoint = apiUrl + "/graphql";
const theme = process.env.REACT_APP_THEME;

export { theme, apiUrl, endpoint, cityName };
