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

  type Pets {
    _id: ID
    image: String
    shelterId: String
  }

  type Shelter {
    _id: ID
    name: String!
    address: String!
    phone: String!
    email: String!
    website: String
    description: String!
    image: String
    donations: [Donation]
    rating: Int
    BankTransitNumber: String!
    BankInstitutionNumber: String!
    BankAccount: String!
    cat: Boolean
    dog: Boolean
    rabbit: Boolean
    pets: [Pets]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: Entity
  }

  type Entity {
    _id: ID
    username: String
    name: String
    email: String
  }

  union MeResult = User | Shelter

  type Query {
    me: MeResult
    pets(shelterId: String): [Pets]
    shelters(filters: ShelterFilters): [Shelter]
    getShelter(_id: ID!): Shelter
    donation(id: ID!): Donation
    checkout(shelterId: String, amount: Float): Checkout
  }

  type Mutation {
    addUser(userInput: UserInput!): Auth
    login(loginName: String!, loginPassword: String!): Auth
    # addShelter(
    #   name: String!
    #   address: String!
    #   phone: String!
    #   email: String!
    #   password: String!
    #   website: String
    #   description: String!
    #   image: String!
    #   BankTransitNumber: String!
    #   BankInstitutionNumber: String!
    #   BankAccount: String!
    # ): Shelter
    addShelter(shelterInput: ShelterInput!): Auth
    updateShelter(shelterInput: UpdateShelterInput!): Shelter
    addDonation(shelterId: String, amount: Float): Donation
    addPet(image: String!, shelterId: String!): Pets
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input ShelterInput {
    name: String!
    address: String!
    phone: String!
    email: String!
    password: String!
    website: String
    description: String!
    image: String
    BankTransitNumber: String!
    BankInstitutionNumber: String!
    BankAccount: String!
    rabbit: Boolean
    dog: Boolean
    cat: Boolean
  }

  input UpdateShelterInput {
    name: String
    address: String
    phone: String
    email: String
    password: String
    website: String
    description: String
    image: String
    BankTransitNumber: String
    BankInstitutionNumber: String
    BankAccount: String
    rabbit: Boolean
    dog: Boolean
    cat: Boolean
  }

  input ShelterFilters {
    name: String
    rating: Int
    dog: Boolean
    cat: Boolean
    rabbit: Boolean
  }
`;

module.exports = typeDefs;
