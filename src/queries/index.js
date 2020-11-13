import { gql } from "apollo-boost";

const CITY_QUERY = gql`
  query CityQuery($slug: String!) {
    cities(where: { slug: $slug }) {
      id
      Name
      title
      description
      background {
        url
      }
      latitude
      longitude
      territories {
        id
        Name
        Description
        PresentationVideoLink
        PresentationPdf {
          url
        }
        LeadMap {
          url
        }
        LeadMapMeta
        Questions
        FooterText
        Logotypes {
          url
        }
        map
        slug
        videoId
      }
      theme {
        name
        background
        color
        primary
        font
      }
      meta {
        footer
        partners {
          name
          logos {
            image {
              url
            }
            link
            name
          }
        }
      }
    }
  }
`;

const FORM_QUERY = gql`
  query FormQuery($slug: String!) {
    territories(where: { slug: $slug }) {
      id
      Name
      Description
      Questions
      slug
      city {
        id
        territories(where: { slug_ne: $slug }) {
          slug
        }
        meta {
          footer
          partners {
            name
            logos {
              image {
                url
              }
              link
              name
            }
          }
        }
      }
    }
  }
`;

const ADD_RESPONSE_MUTATION = gql`
  mutation AddResponseMutation($data: ResponseInput!) {
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
