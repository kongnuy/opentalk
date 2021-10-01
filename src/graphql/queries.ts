/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserCategory = /* GraphQL */ `
  query GetUserCategory($id: ID!) {
    getUserCategory(id: $id) {
      id
      userId
      categoryId
      createdAt
      updatedAt
    }
  }
`;
export const listUserCategories = /* GraphQL */ `
  query ListUserCategories(
    $filter: ModelUserCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        categoryId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserFollowing = /* GraphQL */ `
  query GetUserFollowing($id: ID!) {
    getUserFollowing(id: $id) {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const listUserFollowings = /* GraphQL */ `
  query ListUserFollowings(
    $filter: ModelUserFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        profileId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserFollower = /* GraphQL */ `
  query GetUserFollower($id: ID!) {
    getUserFollower(id: $id) {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const listUserFollowers = /* GraphQL */ `
  query ListUserFollowers(
    $filter: ModelUserFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        profileId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        comment {
          id
          text
          profileId
          postId
          createdAt
          updatedAt
        }
        response {
          id
          profileId
          commentId
          text
          createdAt
          updatedAt
        }
        commentId
        responseId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCommentResponse = /* GraphQL */ `
  query GetCommentResponse($id: ID!) {
    getCommentResponse(id: $id) {
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
export const listCommentResponses = /* GraphQL */ `
  query ListCommentResponses(
    $filter: ModelCommentResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentResponses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
          items {
            id
          }
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
          profile {
            alias
            name
            imageKey
          }
          likes {
            nextToken
            items {
              id
            }
          }
          responses {
            nextToken
            items {
              id
            }
          }
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          items {
            id
          }
        }
        img
        text
        public
        likes {
          nextToken
          items {
            id
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
