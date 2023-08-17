import { gql } from "@apollo/client";

export const QUERY_CHECKOUT = gql`
  query getCheckout($shelterId: String, $amount: Float) {
    checkout(shelterId: $shelterId, amount: $amount) {
      session
    }
  }
`;

export const GET_ME = gql`
  query getMe {
    me {
      __typename
      ... on Shelter {
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
          _id
        }
        rating
        BankAccount
        BankInstitutionNumber
        BankTransitNumber
        dog
        cat
        rabbit
      }
      ... on User {
        username
        savedShelters {
          _id
        }
        password
        email
        donations {
          donationDate
          amount
          shelterId
        }
        _id
      }
    }
  }
`;

export const GET_SHELTERS = gql`
  query getShelters($filters: ShelterFilters, $sort: SortInput) {
    shelters(filters: $filters, sort: $sort) {
      _id
      address
      description
      image
      name
      phone
      website
      email
      donations {
        _id
        amount
        donationDate
        shelterId
      }
      rating
      dog
      cat
      rabbit
    }
  }
`;
