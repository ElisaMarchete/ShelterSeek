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

export const ADD_SHELTER = gql`
  mutation addShelter($shelterInput: ShelterInput!) {
    addShelter(shelterInput: $shelterInput) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const UPDATE_SHELTER = gql`
  mutation updateShelter($shelterInput: UpdateShelterInput!) {
    updateShelter(shelterInput: $shelterInput) {
      _id
      name
      address
      phone
      email
      website
      description
      image
      donations {
        donationDate
        amount
      }
      rating
      cat
      dog
      rabbit
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
