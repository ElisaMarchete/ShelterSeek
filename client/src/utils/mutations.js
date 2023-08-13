import { gql } from "@apollo/client";

export const ADD_DONATION = gql`
  mutation getDonation($shelterId: String, $amount: Float) {
    addDonation(shelterId: $shelterId, amount: $amount) {
      _id
    }
  }
`;
