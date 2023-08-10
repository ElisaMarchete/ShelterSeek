const { gql } = require("apollo-server-express");

// typeDefs = schema Define data in GraphQL
// query is a GET request (reading) - mutation is a POST, PUT, or DELETE request

const typeDefs = gql`
  type Donation {
    _id: ID
    donationDate: String
    amount: Float
    shelter: Shelter
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
  }

  type Auth {
    token: ID
    shelter: Shelter
  }

  type Checkout {
    session: ID
  }

  input DonationInput {
    shelter: ID
    amount: Float
  }

  type Query {
    shelters: [Shelter]
    donation(id: ID!): Donation
    checkout(shelterId: String, amount: Float): Checkout
  }

  type Mutation {
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

    addDonation(amount: Float!, shelterId: ID!): Shelter
  }
`;
module.exports = typeDefs;
