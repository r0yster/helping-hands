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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
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