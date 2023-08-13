import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($userInput: UserInput!) {
    addUser(userInput: $userInput) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($loginName: String!, $loginPassword: String!) {
    login(loginName: $loginName, loginPassword: $loginPassword) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_DONATION = gql`
  mutation getDonation($shelterId: String, $amount: Float) {
    addDonation(shelterId: $shelterId, amount: $amount) {
      _id
    }
  }
`;
