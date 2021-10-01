/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
      id
      userId
      username
      alias
      image
      name
      imageKey
      posts {
        items {
          id
          profileId
          img
          text
          public
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          text
          profileId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          profileId
          postId
          commentId
          responseId
          createdAt
          updatedAt
        }
        nextToken
      }
      responses {
        items {
          id
          profileId
          commentId
          text
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
      id
      userId
      username
      alias
      image
      name
      imageKey
      posts {
        items {
          id
          profileId
          img
          text
          public
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          text
          profileId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          profileId
          postId
          commentId
          responseId
          createdAt
          updatedAt
        }
        nextToken
      }
      responses {
        items {
          id
          profileId
          commentId
          text
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
      id
      userId
      username
      alias
      image
      name
      imageKey
      posts {
        items {
          id
          profileId
          img
          text
          public
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          text
          profileId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          profileId
          postId
          commentId
          responseId
          createdAt
          updatedAt
        }
        nextToken
      }
      responses {
        items {
          id
          profileId
          commentId
          text
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
export const onCreateUserCategory = /* GraphQL */ `
  subscription OnCreateUserCategory {
    onCreateUserCategory {
      id
      userId
      categoryId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserCategory = /* GraphQL */ `
  subscription OnUpdateUserCategory {
    onUpdateUserCategory {
      id
      userId
      categoryId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserCategory = /* GraphQL */ `
  subscription OnDeleteUserCategory {
    onDeleteUserCategory {
      id
      userId
      categoryId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserFollowing = /* GraphQL */ `
  subscription OnCreateUserFollowing {
    onCreateUserFollowing {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserFollowing = /* GraphQL */ `
  subscription OnUpdateUserFollowing {
    onUpdateUserFollowing {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserFollowing = /* GraphQL */ `
  subscription OnDeleteUserFollowing {
    onDeleteUserFollowing {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserFollower = /* GraphQL */ `
  subscription OnCreateUserFollower {
    onCreateUserFollower {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserFollower = /* GraphQL */ `
  subscription OnUpdateUserFollower {
    onUpdateUserFollower {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserFollower = /* GraphQL */ `
  subscription OnDeleteUserFollower {
    onDeleteUserFollower {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      profileId
      postId
      profile {
        id
        userId
        username
        alias
        image
        name
        imageKey
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        profileId
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        img
        text
        public
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      comment {
        id
        text
        profileId
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        post {
          id
          profileId
          img
          text
          public
          createdAt
          updatedAt
        }
        postId
        responses {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      response {
        id
        profileId
        commentId
        text
        comment {
          id
          text
          profileId
          postId
          createdAt
          updatedAt
        }
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      commentId
      responseId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      profileId
      postId
      profile {
        id
        userId
        username
        alias
        image
        name
        imageKey
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        profileId
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        img
        text
        public
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      comment {
        id
        text
        profileId
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        post {
          id
          profileId
          img
          text
          public
          createdAt
          updatedAt
        }
        postId
        responses {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      response {
        id
        profileId
        commentId
        text
        comment {
          id
          text
          profileId
          postId
          createdAt
          updatedAt
        }
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      commentId
      responseId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      profileId
      postId
      profile {
        id
        userId
        username
        alias
        image
        name
        imageKey
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        profileId
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        img
        text
        public
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      comment {
        id
        text
        profileId
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        post {
          id
          profileId
          img
          text
          public
          createdAt
          updatedAt
        }
        postId
        responses {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      response {
        id
        profileId
        commentId
        text
        comment {
          id
          text
          profileId
          postId
          createdAt
          updatedAt
        }
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      commentId
      responseId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCommentResponse = /* GraphQL */ `
  subscription OnCreateCommentResponse {
    onCreateCommentResponse {
      id
      profileId
      commentId
      text
      comment {
        id
        text
        profileId
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        post {
          id
          profileId
          img
          text
          public
          createdAt
          updatedAt
        }
        postId
        responses {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      profile {
        id
        userId
        username
        alias
        image
        name
        imageKey
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          profileId
          postId
          commentId
          responseId
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
export const onUpdateCommentResponse = /* GraphQL */ `
  subscription OnUpdateCommentResponse {
    onUpdateCommentResponse {
      id
      profileId
      commentId
      text
      comment {
        id
        text
        profileId
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        post {
          id
          profileId
          img
          text
          public
          createdAt
          updatedAt
        }
        postId
        responses {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      profile {
        id
        userId
        username
        alias
        image
        name
        imageKey
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          profileId
          postId
          commentId
          responseId
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
export const onDeleteCommentResponse = /* GraphQL */ `
  subscription OnDeleteCommentResponse {
    onDeleteCommentResponse {
      id
      profileId
      commentId
      text
      comment {
        id
        text
        profileId
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        post {
          id
          profileId
          img
          text
          public
          createdAt
          updatedAt
        }
        postId
        responses {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      profile {
        id
        userId
        username
        alias
        image
        name
        imageKey
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          profileId
          postId
          commentId
          responseId
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
      text
      profileId
      profile {
        id
        userId
        username
        alias
        image
        name
        imageKey
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        profileId
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        img
        text
        public
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      postId
      responses {
        items {
          id
          profileId
          commentId
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          profileId
          postId
          commentId
          responseId
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      text
      profileId
      profile {
        id
        userId
        username
        alias
        image
        name
        imageKey
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        profileId
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        img
        text
        public
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      postId
      responses {
        items {
          id
          profileId
          commentId
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          profileId
          postId
          commentId
          responseId
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      text
      profileId
      profile {
        id
        userId
        username
        alias
        image
        name
        imageKey
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        profileId
        profile {
          id
          userId
          username
          alias
          image
          name
          imageKey
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        img
        text
        public
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      postId
      responses {
        items {
          id
          profileId
          commentId
          text
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          profileId
          postId
          commentId
          responseId
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
      profileId
      profile {
        id
        userId
        username
        alias
        image
        name
        imageKey
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          text
          profileId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      img
      text
      public
      likes {
        items {
          id
          profileId
          postId
          commentId
          responseId
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
      profileId
      profile {
        id
        userId
        username
        alias
        image
        name
        imageKey
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          text
          profileId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      img
      text
      public
      likes {
        items {
          id
          profileId
          postId
          commentId
          responseId
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
      profileId
      profile {
        id
        userId
        username
        alias
        image
        name
        imageKey
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          text
          profileId
          postId
          createdAt
          updatedAt
        }
        nextToken
      }
      img
      text
      public
      likes {
        items {
          id
          profileId
          postId
          commentId
          responseId
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
