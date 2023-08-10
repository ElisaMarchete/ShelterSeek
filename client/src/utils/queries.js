import { gql } from "@apollo/client";
// test: DonationInput
// getCheckout($test: DonationInput) is the method defined in the client
// $abc is the expected variable to be sent to the server
// checkout(test: $abc) is the server method (query) that will be called - must be defined in the server
//  - this is being sent to the server
// export const QUERY_CHECKOUT = gql`
//   query getCheckout($abc: DonationInput) {
//     checkout(test: $abc) {
//       session
//     }
//   }
// `;
export const QUERY_CHECKOUT = gql`
  query getCheckout($shelterId: String, $amount: Float) {
    checkout(shelterId: $shelterId, amount: $amount) {
      session
    }
  }
`;
