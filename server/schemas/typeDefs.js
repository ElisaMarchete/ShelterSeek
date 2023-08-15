const { gql } = require("apollo-server-express");

// typeDefs = schema Define data in GraphQL
// query is a GET request (reading) - mutation is a POST, PUT, or DELETE request

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedShelters: [Shelter]
    donations: [Donation]
  }

  type Donation {
    _id: ID
    donationDate: String
    amount: Float
    shelterId: ID
  }

  type Shelter {
    _id: ID
    name: String
    address: String
    phone: String
    email: String
    website: String
    description: String
    image: String
    donations: [Donation]
    rating: Int
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Pets {
    _id: ID
    name: String
    age: Int
    breed: String
    description: String
    image: String
    shelterId: String
  }

  type Query {
    me: User
    shelters(filters: ShelterFilters): [Shelter]
    donation(id: ID!): Donation
    checkout(shelterId: String, amount: Float): Checkout
  }

  type Mutation {
    addUser(userInput: UserInput!): Auth
    login(loginName: String!, loginPassword: String!): Auth
    addShelter(
      name: String!
      address: String!
      phone: String!
      email: String!
      password: String!
      website: String
      description: String!
      image: String!
      BankTransitNumber: String!
      BankInstitutionNumber: String!
      BankAccount: String!
    ): Shelter

    addDonation(shelterId: String, amount: Float): Donation

    addPet(image: String!, shelterId: String!): Pets
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input ShelterFilters {
    name: String
    rating: Int
  }
`;
module.exports = typeDefs;
