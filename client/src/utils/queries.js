import { gql } from "@apollo/client";

export const QUERY_CHECKOUT = gql`
  query getCheckout($donation: [DonationInput]) {
    checkout(donation: $donation) {
      session
    }
  }
`;
