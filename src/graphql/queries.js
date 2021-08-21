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
      followers {
        id
        name
        username
        email
        imageUri
        followers {
          id
          name
          username
          email
          imageUri
          createdAt
          updatedAt
        }
        following {
          id
          name
          username
          email
          imageUri
          createdAt
          updatedAt
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      following {
        id
        name
        username
        email
        imageUri
        followers {
          id
          name
          username
          email
          imageUri
          createdAt
          updatedAt
        }
        following {
          id
          name
          username
          email
          imageUri
          createdAt
          updatedAt
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      posts {
        items {
          id
          title
          location
          description
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
        followers {
          id
          name
          username
          email
          imageUri
          createdAt
          updatedAt
        }
        following {
          id
          name
          username
          email
          imageUri
          createdAt
          updatedAt
        }
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
        followers {
          id
          name
          username
          email
          imageUri
          createdAt
          updatedAt
        }
        following {
          id
          name
          username
          email
          imageUri
          createdAt
          updatedAt
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      slides {
        id
        postID
        videoUri
      }
      likes {
        id
        name
        username
        email
        imageUri
        followers {
          id
          name
          username
          email
          imageUri
          createdAt
          updatedAt
        }
        following {
          id
          name
          username
          email
          imageUri
          createdAt
          updatedAt
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
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
          createdAt
          updatedAt
        }
        slides {
          id
          postID
          videoUri
        }
        likes {
          id
          name
          username
          email
          imageUri
          createdAt
          updatedAt
        }
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
      content
      userID
      user {
        id
        name
        username
        email
        imageUri
        followers {
          id
          name
          username
          email
          imageUri
          createdAt
          updatedAt
        }
        following {
          id
          name
          username
          email
          imageUri
          createdAt
          updatedAt
        }
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
        content
        userID
        user {
          id
          name
          username
          email
          imageUri
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
