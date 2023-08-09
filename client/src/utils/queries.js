import { gql } from "@apollo/client";

export const QUERY_CHECKOUT = gql`
  query getCheckout($donation: [DonationInput]) {
    checkout(shelter: $donation) {
      session
    }
  }
`;
