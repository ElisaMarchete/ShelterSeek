import { gql } from "@apollo/client";

export const QUERY_CHECKOUT = gql`
  query getCheckout($shelterId: String, $amount: Float) {
    checkout(shelterId: $shelterId, amount: $amount) {
      session
    }
  }
`;
