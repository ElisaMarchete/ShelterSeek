const { gql } = require("apollo-server-express");

// typeDefs = schema Define data in GraphQL
// query is a GET request - mutation is a POST, PUT, or DELETE request

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
    BankTransitNumber: String
    BankInstitutionNumber: String
    BankAccount: String
    donations: [Donation]
  }

  type Donation {
    _id: ID
    amount: float
    data: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    shelters: [Shelter]
    donations: [Donation]
    }

    type Mutation {
        addShelter(
            name: String!
            address: String!
            phone: String!
            email: String!  
            website: String!
            hours: String!
            description: String!
            image: String!
            BankTransitNumber: String!
            BankInstitutionNumber: String!
            BankAccount: String!
        ): Shelter
        addDonation(
            amount: float!
            data: String!
        ): Donation
`;
module.exports = typeDefs;
