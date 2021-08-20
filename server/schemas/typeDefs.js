// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    username: String!
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Event {
    _id: ID!
    eventname: String!
    location: String!
    date: Date!
    time: String!
  }

  type Query {
    me: User
    events: [Event!]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;
// export the typeDefs
module.exports = typeDefs;
