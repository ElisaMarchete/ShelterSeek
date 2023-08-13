import { gql } from "@apollo/client";

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
  )   
  {addShelter(
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
    ) 
    {
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