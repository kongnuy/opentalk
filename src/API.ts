/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  image: string,
  description?: string | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  image: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  description?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateProfileInput = {
  id?: string | null,
  userId: string,
  username: string,
  alias: string,
  image: string,
  name?: string | null,
  imageKey?: string | null,
};

export type ModelProfileConditionInput = {
  userId?: ModelStringInput | null,
  username?: ModelStringInput | null,
  alias?: ModelStringInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  userId: string,
  username: string,
  alias: string,
  image: string,
  name?: string | null,
  imageKey?: string | null,
  posts?: ModelPostConnection | null,
  comments?: ModelCommentConnection | null,
  likes?: ModelLikeConnection | null,
  responses?: ModelCommentResponseConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  profileId: string,
  profile?: Profile | null,
  comments?: ModelCommentConnection | null,
  img?: string | null,
  text?: string | null,
  public?: boolean | null,
  likes?: ModelLikeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  text?: string | null,
  profileId: string,
  profile?: Profile | null,
  post?: Post | null,
  postId: string,
  responses?: ModelCommentResponseConnection | null,
  likes?: ModelLikeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentResponseConnection = {
  __typename: "ModelCommentResponseConnection",
  items?:  Array<CommentResponse | null > | null,
  nextToken?: string | null,
};

export type CommentResponse = {
  __typename: "CommentResponse",
  id: string,
  profileId: string,
  commentId: string,
  text: string,
  comment?: Comment | null,
  profile?: Profile | null,
  likes?: ModelLikeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items?:  Array<Like | null > | null,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  profileId: string,
  postId?: string | null,
  profile?: Profile | null,
  post?: Post | null,
  comment?: Comment | null,
  response?: CommentResponse | null,
  commentId?: string | null,
  responseId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProfileInput = {
  id: string,
  userId?: string | null,
  username?: string | null,
  alias?: string | null,
  image?: string | null,
  name?: string | null,
  imageKey?: string | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type CreateUserCategoryInput = {
  id?: string | null,
  userId: string,
  categoryId: string,
};

export type ModelUserCategoryConditionInput = {
  userId?: ModelStringInput | null,
  categoryId?: ModelStringInput | null,
  and?: Array< ModelUserCategoryConditionInput | null > | null,
  or?: Array< ModelUserCategoryConditionInput | null > | null,
  not?: ModelUserCategoryConditionInput | null,
};

export type UserCategory = {
  __typename: "UserCategory",
  id: string,
  userId: string,
  categoryId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserCategoryInput = {
  id: string,
  userId?: string | null,
  categoryId?: string | null,
};

export type DeleteUserCategoryInput = {
  id: string,
};

export type CreateUserFollowingInput = {
  id?: string | null,
  userId: string,
  profileId: string,
};

export type ModelUserFollowingConditionInput = {
  userId?: ModelStringInput | null,
  profileId?: ModelStringInput | null,
  and?: Array< ModelUserFollowingConditionInput | null > | null,
  or?: Array< ModelUserFollowingConditionInput | null > | null,
  not?: ModelUserFollowingConditionInput | null,
};

export type UserFollowing = {
  __typename: "UserFollowing",
  id: string,
  userId: string,
  profileId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserFollowingInput = {
  id: string,
  userId?: string | null,
  profileId?: string | null,
};

export type DeleteUserFollowingInput = {
  id: string,
};

export type CreateUserFollowerInput = {
  id?: string | null,
  userId: string,
  profileId: string,
};

export type ModelUserFollowerConditionInput = {
  userId?: ModelStringInput | null,
  profileId?: ModelStringInput | null,
  and?: Array< ModelUserFollowerConditionInput | null > | null,
  or?: Array< ModelUserFollowerConditionInput | null > | null,
  not?: ModelUserFollowerConditionInput | null,
};

export type UserFollower = {
  __typename: "UserFollower",
  id: string,
  userId: string,
  profileId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserFollowerInput = {
  id: string,
  userId?: string | null,
  profileId?: string | null,
};

export type DeleteUserFollowerInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  profileId: string,
  postId?: string | null,
  commentId?: string | null,
  responseId?: string | null,
};

export type ModelLikeConditionInput = {
  profileId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  commentId?: ModelIDInput | null,
  responseId?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLikeInput = {
  id: string,
  profileId?: string | null,
  postId?: string | null,
  commentId?: string | null,
  responseId?: string | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type CreateCommentResponseInput = {
  id?: string | null,
  profileId: string,
  commentId: string,
  text: string,
};

export type ModelCommentResponseConditionInput = {
  profileId?: ModelIDInput | null,
  commentId?: ModelIDInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelCommentResponseConditionInput | null > | null,
  or?: Array< ModelCommentResponseConditionInput | null > | null,
  not?: ModelCommentResponseConditionInput | null,
};

export type UpdateCommentResponseInput = {
  id: string,
  profileId?: string | null,
  commentId?: string | null,
  text?: string | null,
};

export type DeleteCommentResponseInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  text?: string | null,
  profileId: string,
  postId: string,
};

export type ModelCommentConditionInput = {
  text?: ModelStringInput | null,
  profileId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  text?: string | null,
  profileId?: string | null,
  postId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  profileId: string,
  img?: string | null,
  text?: string | null,
  public?: boolean | null,
};

export type ModelPostConditionInput = {
  profileId?: ModelIDInput | null,
  img?: ModelStringInput | null,
  text?: ModelStringInput | null,
  public?: ModelBooleanInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePostInput = {
  id: string,
  profileId?: string | null,
  img?: string | null,
  text?: string | null,
  public?: boolean | null,
};

export type DeletePostInput = {
  id: string,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items?:  Array<Category | null > | null,
  nextToken?: string | null,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  username?: ModelStringInput | null,
  alias?: ModelStringInput | null,
  image?: ModelStringInput | null,
  name?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items?:  Array<Profile | null > | null,
  nextToken?: string | null,
};

export type ModelUserCategoryFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  categoryId?: ModelStringInput | null,
  and?: Array< ModelUserCategoryFilterInput | null > | null,
  or?: Array< ModelUserCategoryFilterInput | null > | null,
  not?: ModelUserCategoryFilterInput | null,
};

export type ModelUserCategoryConnection = {
  __typename: "ModelUserCategoryConnection",
  items?:  Array<UserCategory | null > | null,
  nextToken?: string | null,
};

export type ModelUserFollowingFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  profileId?: ModelStringInput | null,
  and?: Array< ModelUserFollowingFilterInput | null > | null,
  or?: Array< ModelUserFollowingFilterInput | null > | null,
  not?: ModelUserFollowingFilterInput | null,
};

export type ModelUserFollowingConnection = {
  __typename: "ModelUserFollowingConnection",
  items?:  Array<UserFollowing | null > | null,
  nextToken?: string | null,
};

export type ModelUserFollowerFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  profileId?: ModelStringInput | null,
  and?: Array< ModelUserFollowerFilterInput | null > | null,
  or?: Array< ModelUserFollowerFilterInput | null > | null,
  not?: ModelUserFollowerFilterInput | null,
};

export type ModelUserFollowerConnection = {
  __typename: "ModelUserFollowerConnection",
  items?:  Array<UserFollower | null > | null,
  nextToken?: string | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  profileId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  commentId?: ModelIDInput | null,
  responseId?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
};

export type ModelCommentResponseFilterInput = {
  id?: ModelIDInput | null,
  profileId?: ModelIDInput | null,
  commentId?: ModelIDInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelCommentResponseFilterInput | null > | null,
  or?: Array< ModelCommentResponseFilterInput | null > | null,
  not?: ModelCommentResponseFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  profileId?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  profileId?: ModelIDInput | null,
  img?: ModelStringInput | null,
  text?: ModelStringInput | null,
  public?: ModelBooleanInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    username: string,
    alias: string,
    image: string,
    name?: string | null,
    imageKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    username: string,
    alias: string,
    image: string,
    name?: string | null,
    imageKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    username: string,
    alias: string,
    image: string,
    name?: string | null,
    imageKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserCategoryMutationVariables = {
  input: CreateUserCategoryInput,
  condition?: ModelUserCategoryConditionInput | null,
};

export type CreateUserCategoryMutation = {
  createUserCategory?:  {
    __typename: "UserCategory",
    id: string,
    userId: string,
    categoryId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserCategoryMutationVariables = {
  input: UpdateUserCategoryInput,
  condition?: ModelUserCategoryConditionInput | null,
};

export type UpdateUserCategoryMutation = {
  updateUserCategory?:  {
    __typename: "UserCategory",
    id: string,
    userId: string,
    categoryId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserCategoryMutationVariables = {
  input: DeleteUserCategoryInput,
  condition?: ModelUserCategoryConditionInput | null,
};

export type DeleteUserCategoryMutation = {
  deleteUserCategory?:  {
    __typename: "UserCategory",
    id: string,
    userId: string,
    categoryId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserFollowingMutationVariables = {
  input: CreateUserFollowingInput,
  condition?: ModelUserFollowingConditionInput | null,
};

export type CreateUserFollowingMutation = {
  createUserFollowing?:  {
    __typename: "UserFollowing",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserFollowingMutationVariables = {
  input: UpdateUserFollowingInput,
  condition?: ModelUserFollowingConditionInput | null,
};

export type UpdateUserFollowingMutation = {
  updateUserFollowing?:  {
    __typename: "UserFollowing",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserFollowingMutationVariables = {
  input: DeleteUserFollowingInput,
  condition?: ModelUserFollowingConditionInput | null,
};

export type DeleteUserFollowingMutation = {
  deleteUserFollowing?:  {
    __typename: "UserFollowing",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserFollowerMutationVariables = {
  input: CreateUserFollowerInput,
  condition?: ModelUserFollowerConditionInput | null,
};

export type CreateUserFollowerMutation = {
  createUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserFollowerMutationVariables = {
  input: UpdateUserFollowerInput,
  condition?: ModelUserFollowerConditionInput | null,
};

export type UpdateUserFollowerMutation = {
  updateUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserFollowerMutationVariables = {
  input: DeleteUserFollowerInput,
  condition?: ModelUserFollowerConditionInput | null,
};

export type DeleteUserFollowerMutation = {
  deleteUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    profileId: string,
    postId?: string | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    response?:  {
      __typename: "CommentResponse",
      id: string,
      profileId: string,
      commentId: string,
      text: string,
      comment?:  {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentId?: string | null,
    responseId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    profileId: string,
    postId?: string | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    response?:  {
      __typename: "CommentResponse",
      id: string,
      profileId: string,
      commentId: string,
      text: string,
      comment?:  {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentId?: string | null,
    responseId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    profileId: string,
    postId?: string | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    response?:  {
      __typename: "CommentResponse",
      id: string,
      profileId: string,
      commentId: string,
      text: string,
      comment?:  {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentId?: string | null,
    responseId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentResponseMutationVariables = {
  input: CreateCommentResponseInput,
  condition?: ModelCommentResponseConditionInput | null,
};

export type CreateCommentResponseMutation = {
  createCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    profileId: string,
    commentId: string,
    text: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentResponseMutationVariables = {
  input: UpdateCommentResponseInput,
  condition?: ModelCommentResponseConditionInput | null,
};

export type UpdateCommentResponseMutation = {
  updateCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    profileId: string,
    commentId: string,
    text: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentResponseMutationVariables = {
  input: DeleteCommentResponseInput,
  condition?: ModelCommentResponseConditionInput | null,
};

export type DeleteCommentResponseMutation = {
  deleteCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    profileId: string,
    commentId: string,
    text: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postId: string,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postId: string,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postId: string,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    img?: string | null,
    text?: string | null,
    public?: boolean | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    img?: string | null,
    text?: string | null,
    public?: boolean | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    img?: string | null,
    text?: string | null,
    public?: boolean | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items?:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      image: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    username: string,
    alias: string,
    image: string,
    name?: string | null,
    imageKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items?:  Array< {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserCategoryQueryVariables = {
  id: string,
};

export type GetUserCategoryQuery = {
  getUserCategory?:  {
    __typename: "UserCategory",
    id: string,
    userId: string,
    categoryId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserCategoriesQueryVariables = {
  filter?: ModelUserCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserCategoriesQuery = {
  listUserCategories?:  {
    __typename: "ModelUserCategoryConnection",
    items?:  Array< {
      __typename: "UserCategory",
      id: string,
      userId: string,
      categoryId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserFollowingQueryVariables = {
  id: string,
};

export type GetUserFollowingQuery = {
  getUserFollowing?:  {
    __typename: "UserFollowing",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserFollowingsQueryVariables = {
  filter?: ModelUserFollowingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserFollowingsQuery = {
  listUserFollowings?:  {
    __typename: "ModelUserFollowingConnection",
    items?:  Array< {
      __typename: "UserFollowing",
      id: string,
      userId: string,
      profileId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserFollowerQueryVariables = {
  id: string,
};

export type GetUserFollowerQuery = {
  getUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserFollowersQueryVariables = {
  filter?: ModelUserFollowerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserFollowersQuery = {
  listUserFollowers?:  {
    __typename: "ModelUserFollowerConnection",
    items?:  Array< {
      __typename: "UserFollower",
      id: string,
      userId: string,
      profileId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    id: string,
    profileId: string,
    postId?: string | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    response?:  {
      __typename: "CommentResponse",
      id: string,
      profileId: string,
      commentId: string,
      text: string,
      comment?:  {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentId?: string | null,
    responseId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items?:  Array< {
      __typename: "Like",
      id: string,
      profileId: string,
      postId?: string | null,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comment?:  {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      response?:  {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      commentId?: string | null,
      responseId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentResponseQueryVariables = {
  id: string,
};

export type GetCommentResponseQuery = {
  getCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    profileId: string,
    commentId: string,
    text: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentResponsesQueryVariables = {
  filter?: ModelCommentResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentResponsesQuery = {
  listCommentResponses?:  {
    __typename: "ModelCommentResponseConnection",
    items?:  Array< {
      __typename: "CommentResponse",
      id: string,
      profileId: string,
      commentId: string,
      text: string,
      comment?:  {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postId: string,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    img?: string | null,
    text?: string | null,
    public?: boolean | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    image: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    username: string,
    alias: string,
    image: string,
    name?: string | null,
    imageKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    username: string,
    alias: string,
    image: string,
    name?: string | null,
    imageKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    username: string,
    alias: string,
    image: string,
    name?: string | null,
    imageKey?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserCategorySubscription = {
  onCreateUserCategory?:  {
    __typename: "UserCategory",
    id: string,
    userId: string,
    categoryId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserCategorySubscription = {
  onUpdateUserCategory?:  {
    __typename: "UserCategory",
    id: string,
    userId: string,
    categoryId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserCategorySubscription = {
  onDeleteUserCategory?:  {
    __typename: "UserCategory",
    id: string,
    userId: string,
    categoryId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserFollowingSubscription = {
  onCreateUserFollowing?:  {
    __typename: "UserFollowing",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserFollowingSubscription = {
  onUpdateUserFollowing?:  {
    __typename: "UserFollowing",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserFollowingSubscription = {
  onDeleteUserFollowing?:  {
    __typename: "UserFollowing",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserFollowerSubscription = {
  onCreateUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserFollowerSubscription = {
  onUpdateUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserFollowerSubscription = {
  onDeleteUserFollower?:  {
    __typename: "UserFollower",
    id: string,
    userId: string,
    profileId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    profileId: string,
    postId?: string | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    response?:  {
      __typename: "CommentResponse",
      id: string,
      profileId: string,
      commentId: string,
      text: string,
      comment?:  {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentId?: string | null,
    responseId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    profileId: string,
    postId?: string | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    response?:  {
      __typename: "CommentResponse",
      id: string,
      profileId: string,
      commentId: string,
      text: string,
      comment?:  {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentId?: string | null,
    responseId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    profileId: string,
    postId?: string | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    response?:  {
      __typename: "CommentResponse",
      id: string,
      profileId: string,
      commentId: string,
      text: string,
      comment?:  {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    commentId?: string | null,
    responseId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentResponseSubscription = {
  onCreateCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    profileId: string,
    commentId: string,
    text: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentResponseSubscription = {
  onUpdateCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    profileId: string,
    commentId: string,
    text: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentResponseSubscription = {
  onDeleteCommentResponse?:  {
    __typename: "CommentResponse",
    id: string,
    profileId: string,
    commentId: string,
    text: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      text?: string | null,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        profileId: string,
        img?: string | null,
        text?: string | null,
        public?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      postId: string,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postId: string,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postId: string,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    text?: string | null,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      profileId: string,
      profile?:  {
        __typename: "Profile",
        id: string,
        userId: string,
        username: string,
        alias: string,
        image: string,
        name?: string | null,
        imageKey?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      img?: string | null,
      text?: string | null,
      public?: boolean | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    postId: string,
    responses?:  {
      __typename: "ModelCommentResponseConnection",
      items?:  Array< {
        __typename: "CommentResponse",
        id: string,
        profileId: string,
        commentId: string,
        text: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    img?: string | null,
    text?: string | null,
    public?: boolean | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    img?: string | null,
    text?: string | null,
    public?: boolean | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    profileId: string,
    profile?:  {
      __typename: "Profile",
      id: string,
      userId: string,
      username: string,
      alias: string,
      image: string,
      name?: string | null,
      imageKey?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      responses?:  {
        __typename: "ModelCommentResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text?: string | null,
        profileId: string,
        postId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    img?: string | null,
    text?: string | null,
    public?: boolean | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        profileId: string,
        postId?: string | null,
        commentId?: string | null,
        responseId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
