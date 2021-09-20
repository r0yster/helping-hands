// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    posts: [Post]
  }

  type Volunteer {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
  }

  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    volunteer: [Volunteer]
    posts(username: String): [Post]
    post(_id: ID!): Post
    }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addVolunteer(firstName: String!, lastName: String!, email: String!, phoneNumber: String!): Volunteer
    addPost(postText: String!): Post
    addComment(postId: ID!, commentBody: String!): Post
  }
`;
// export the typeDefs
module.exports = typeDefs;
