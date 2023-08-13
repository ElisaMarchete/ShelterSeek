import { gql } from "@apollo/client";

export const QUERY_CHECKOUT = gql`
  query getCheckout($shelterId: String, $amount: Float) {
    checkout(shelterId: $shelterId, amount: $amount) {
      session
    }
  }
`;

export const GET_SHELTERS = gql`
  query getShelters {
    shelters {
      _id
      address
      description
      image
      name
      phone
      website
      email
      rating
      donations {
        _id
        amount
        donationDate
        shelterId
      }
    }
  }
`;
