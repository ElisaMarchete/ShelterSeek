import { gql } from "@apollo/client";

// getCheckout from client side
// checkout from server side
export const QUERY_CHECKOUT = gql`
  query getCheckout($shelterId: String, $amount: Float) {
    checkout(shelterId: $shelterId, amount: $amount) {
      session
    }
  }
`;

export const GET_SHELTERS = gql`
  query getShelters($filters: ShelterFilters) {
    shelters(filters: $filters) {
      _id
      address
      description
      image
      name
      phone
      website
      email
      pets {
        _id
        image
      }
      donations {
        _id
        amount
        donationDate
        shelterId
      }
      rating
      dog
      cat
      rabbit
    }
  }
`;

export const GET_PETS = gql`
  query getPets($shelterId: String!) {
    pets(shelterId: $shelterId) {
      _id
      image
      shelterId
    }
  }
`;
