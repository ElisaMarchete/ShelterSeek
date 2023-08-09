import { gql } from "@apollo/client";

export const QUERY_CHECKOUT = gql`
  query getCheckout($shelters: [ID]!) {
    checkout(shelters: $shelters) {
      session
    }
  }
`;
