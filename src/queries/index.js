import { gql } from "apollo-boost";

const CITY_QUERY = gql`
  query CityQuery($slug: String) {
    cities(where: { slug_eq: $slug }) {
      id
      Name
    }
    territories(where: { city: { slug_eq: $slug } }) {
      id
      Name
      Description
      PresentationVideoLink
      LeadMap {
        url
      }
      LeadMapMeta
      Questions
      FooterText
      Logotypes {
        url
      }
      slug
    }
  }
`;

export { CITY_QUERY };
