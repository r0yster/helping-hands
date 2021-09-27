import { gql } from "@apollo/client";


export const QUERY_POSTS = gql`
query posts($postsUsername: String) {
  posts(username: $postsUsername) {
    _id
    postText
    createdAt
    username
    commentCount
    comments {
      _id
      commentBody
      createdAt
      username
    }
  }
}
`

export const QUERY_VOLUNTEERS = gql`
query volunteers {
  volunteers {
    _id
    firstName
    lastName
    email
    phoneNumber
  }
}
`

export const QUERY_POST = gql`
query post($postId: ID!) {
  post(_id: $postId) {
    _id
    postText
    createdAt
    username
    commentCount
    comments {
      _id
      commentBody
      createdAt
      username
    }
  }
}`

export const QUERY_USER = gql`
query user($userUsername: String!) {
  user(username: $userUsername) {
    _id
    username
    email
    posts {
      _id
      postText
      createdAt
      commentCount
    }
  }
}
`
export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
    posts {
      _id
      postText
      username
      createdAt
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
}`

export const QUERY_ME_BASIC = gql`
query me {
  me {
    _id
    username
    email
  }
}`