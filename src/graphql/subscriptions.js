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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
