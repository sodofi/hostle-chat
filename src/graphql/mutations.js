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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
