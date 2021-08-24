import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    # $firstName: String!
    # $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      # firstName: $firstName
      # lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_POST = gql`
mutation AddPostMutation($addPostText: String!) {
  addPost(postText: $addPostText) {
    _id
    postText
    createdAt
    username
    commentCount
    comments {
      _id
      
    }
  }
}`