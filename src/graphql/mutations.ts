/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      image
      description
      createdAt
      updatedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createUserCategory = /* GraphQL */ `
  mutation CreateUserCategory(
    $input: CreateUserCategoryInput!
    $condition: ModelUserCategoryConditionInput
  ) {
    createUserCategory(input: $input, condition: $condition) {
      id
      userId
      categoryId
      createdAt
      updatedAt
    }
  }
`;
export const updateUserCategory = /* GraphQL */ `
  mutation UpdateUserCategory(
    $input: UpdateUserCategoryInput!
    $condition: ModelUserCategoryConditionInput
  ) {
    updateUserCategory(input: $input, condition: $condition) {
      id
      userId
      categoryId
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserCategory = /* GraphQL */ `
  mutation DeleteUserCategory(
    $input: DeleteUserCategoryInput!
    $condition: ModelUserCategoryConditionInput
  ) {
    deleteUserCategory(input: $input, condition: $condition) {
      id
      userId
      categoryId
      createdAt
      updatedAt
    }
  }
`;
export const createUserFollowing = /* GraphQL */ `
  mutation CreateUserFollowing(
    $input: CreateUserFollowingInput!
    $condition: ModelUserFollowingConditionInput
  ) {
    createUserFollowing(input: $input, condition: $condition) {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const updateUserFollowing = /* GraphQL */ `
  mutation UpdateUserFollowing(
    $input: UpdateUserFollowingInput!
    $condition: ModelUserFollowingConditionInput
  ) {
    updateUserFollowing(input: $input, condition: $condition) {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserFollowing = /* GraphQL */ `
  mutation DeleteUserFollowing(
    $input: DeleteUserFollowingInput!
    $condition: ModelUserFollowingConditionInput
  ) {
    deleteUserFollowing(input: $input, condition: $condition) {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const createUserFollower = /* GraphQL */ `
  mutation CreateUserFollower(
    $input: CreateUserFollowerInput!
    $condition: ModelUserFollowerConditionInput
  ) {
    createUserFollower(input: $input, condition: $condition) {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const updateUserFollower = /* GraphQL */ `
  mutation UpdateUserFollower(
    $input: UpdateUserFollowerInput!
    $condition: ModelUserFollowerConditionInput
  ) {
    updateUserFollower(input: $input, condition: $condition) {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserFollower = /* GraphQL */ `
  mutation DeleteUserFollower(
    $input: DeleteUserFollowerInput!
    $condition: ModelUserFollowerConditionInput
  ) {
    deleteUserFollower(input: $input, condition: $condition) {
      id
      userId
      profileId
      createdAt
      updatedAt
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createCommentResponse = /* GraphQL */ `
  mutation CreateCommentResponse(
    $input: CreateCommentResponseInput!
    $condition: ModelCommentResponseConditionInput
  ) {
    createCommentResponse(input: $input, condition: $condition) {
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
export const updateCommentResponse = /* GraphQL */ `
  mutation UpdateCommentResponse(
    $input: UpdateCommentResponseInput!
    $condition: ModelCommentResponseConditionInput
  ) {
    updateCommentResponse(input: $input, condition: $condition) {
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
export const deleteCommentResponse = /* GraphQL */ `
  mutation DeleteCommentResponse(
    $input: DeleteCommentResponseInput!
    $condition: ModelCommentResponseConditionInput
  ) {
    deleteCommentResponse(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
