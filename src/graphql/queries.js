/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      email
      imageUri
      followers
      following
      posts {
        items {
          id
          videoUri
          title
          location
          description
          userID
          slides
          likes
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        email
        imageUri
        followers
        following
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      videoUri
      title
      location
      description
      userID
      user {
        id
        name
        username
        email
        imageUri
        followers
        following
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      slides
      likes
      comments {
        items {
          id
          postID
          content
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        videoUri
        title
        location
        description
        userID
        user {
          id
          name
          username
          email
          imageUri
          followers
          following
          createdAt
          updatedAt
        }
        slides
        likes
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      post {
        id
        videoUri
        title
        location
        description
        userID
        user {
          id
          name
          username
          email
          imageUri
          followers
          following
          createdAt
          updatedAt
        }
        slides
        likes
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      userID
      user {
        id
        name
        username
        email
        imageUri
        followers
        following
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        post {
          id
          videoUri
          title
          location
          description
          userID
          slides
          likes
          createdAt
          updatedAt
        }
        content
        userID
        user {
          id
          name
          username
          email
          imageUri
          followers
          following
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
