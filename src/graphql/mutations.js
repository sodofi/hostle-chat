/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
