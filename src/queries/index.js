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

const FORM_QUERY = gql`
  query FormQuery($slug: String) {
    territories(where: { slug_eq: $slug }) {
      id
      Name
      Description
      Questions
      slug
      city {
        id
      }
    }
  }
`;

const ADD_RESPONSE_MUTATION = gql`
  mutation AddResponseMutation($data: ResponseInput) {
    createResponse(input: { data: $data }) {
      response {
        name
        surname
        email
      }
    }
  }
`;

export { CITY_QUERY, FORM_QUERY, ADD_RESPONSE_MUTATION };
