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

export const ADD_SHELTER = gql`
  mutation AddShelter(
    $name: String!
    $address: String!
    $phone: String!
    $email: String!
    $password: String!
    $website: String
    $description: String!
    $image: String!
    $BankTransitNumber: String!
    $BankInstitutionNumber: String!
    $BankAccount: String!
  ) {
    addShelter(
      name: $name
      address: $address
      phone: $phone
      email: $email
      password: $password
      website: $website
      description: $description
      image: $image
      BankTransitNumber: $BankTransitNumber
      BankInstitutionNumber: $BankInstitutionNumber
      BankAccount: $BankAccount
    ) {
      _id
      name
      address
      phone
      email
      website
      description
      image
    }
  }
`;

export const ADD_PETS = gql`
  mutation getPet($image: String!, $shelterId: String!) {
    addPet(image: $image, shelterId: $amount) {
      _id
    }
  }
`;
