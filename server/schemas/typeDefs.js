const { gql } = require("apollo-server-express");

// typeDefs = schema Define data in GraphQL
// query is a GET request (reading) - mutation is a POST, PUT, or DELETE request

const typeDefs = gql`
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

  type Donation {
    _id: ID
    purchaseDate: String
    amount: Float
    shelter: Shelter
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    shelter: Shelter
  }

  input DonationInput {
    shelter: ID
    amount: Float
  }

  type Query {
    shelters: [Shelter]
    donation(_id: ID!): Donation
    checkout(donation: [DonationInput]): Checkout
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
  }
`;
module.exports = typeDefs;
