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

/*export const ADD_VOLUNTEER = gql`

  mutation addVolunteer($firstName: String!, lastName: String!, $email: String!, phoneNumber: String!) {

     addVolunteer(firstName: $firstName, lastName: $lastName, email: $email, phoneNumber: $phoneNumber) {

       volunteer {
         firstName
         lastName
         email
         phoneNumber
       }

     }

  }
`;*/

export const ADD_VOLUNTEER = gql`
  mutation addVolunteer($firstName: String!, $lastName: String!, $email: String!, $phoneNumber: String!) {
    addVolunteer(firstName: $firstName, lastName: $lastName, email: $email, phoneNumber: $phoneNumber) {
        firstName
        lastName
        email
        phoneNumber
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
}`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;