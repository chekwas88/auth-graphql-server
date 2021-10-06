const { gql } = require("apollo-server");

/**
 * Type Definitions for the Schema using the SDL.
 */
const typeDefs = gql`
  type Query {
    profile: User
  }
  type Mutation {
    signUp(input: signUpInput): AuthResponse
    login(input: loginInput): AuthResponse
    updateProfile(input: updateProfileInput): updateResponse
  }

  type User {
    id: ID
    name: String
    address: String
    phone: String
    photo: String
    email: String
  }
  type updateResponse {
    message: String
  }

  type AuthResponse {
    id: ID!
    token: String!
    email: String!
    name: String
  }

  ### Inputs
  input signUpInput {
    name: String!
    address: String!
    phone: String!
    photo: String
    securityQuestion: String!
    securityAnswer: String!
    password: String!
    email: String!
  }

  input updateProfileInput {
    name: String
    address: String
    phone: String
    photo: String
  }

  input loginInput {
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;
