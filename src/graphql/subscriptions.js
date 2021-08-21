/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
