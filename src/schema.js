const { gql } = require('apollo-server')

/**
 * Type Definitions for the Schema using the SDL.
 */
const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        address: String
        phone: String
        photo: String
        password: String!
        securityQuestion: String!
        securityAnswer: String!
        email: String!
        DoB: String


    }
    input signUpInput {
        name: String!
        address: String!
        phone: String!
        photo: String
        securityQuestion: String!
        securityAnswer: String!
        password: String!
        email: String!
        DoB: String!
    }

    input updateProfileInput {
        name: String
        address: String
        phone: String
        photo: String
        securityQuestion: String
        securityAnswer: String
        DoB: String
    }

    input loginInput {
        email: String!
        password: String!
    }
   
    type Query {
        profile: ProfileResponse
        
    }
    type Mutation {
        signUp(input: signUpInput): AuthResponse
        login(input: loginInput): AuthResponse
        updateProfile(input: updateProfileInput): ProfileResponse!
    }

    type ProfileResponse {
        id: ID
        name: String
        address: String
        phone: String
        photo: String
        securityQuestion: String
        securityAnswer: String
        email: String
        DoB: String

    }
    type AuthResponse {
        id: ID!
        token: String!
        email: String!
        name: String

    }


`;

module.exports = typeDefs
