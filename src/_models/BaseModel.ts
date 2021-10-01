import {API, Auth, graphqlOperation} from 'aws-amplify';
import {cloneDeep} from 'lodash';
import {
  createLike,
  createUserFollowing,
  deleteLike,
  deleteUserFollowing,
} from '../graphql/mutations';
import {
  listLikes,
  listProfiles,
  listUserFollowers,
  listUserFollowings,
} from '../graphql/queries';
import {handleError} from '../_components';

class BaseModel {
  private static _instance: BaseModel | undefined;

  user: any = {};
  route = 'splash';
  fullLoading = false;
  userLoading = true;

  data: any = {
    likes: [],
  };

  constructor() {
    if (BaseModel._instance) {
      throw new Error(
        'Error : Instanciation failed : Use BaseModel.getInstance() instead of new.',
      );
    }
    BaseModel._instance = this;
  }

  public static getInstance(): BaseModel {
    if (!BaseModel._instance) {
      return new BaseModel();
    }
    return BaseModel._instance;
  }

  public static reset(): BaseModel {
    BaseModel._instance = undefined;
    return BaseModel.getInstance();
  }

  public get isLogin(): boolean {
    return this.user.userId > 0 || this.user?.user?.userId > 0;
  }

  getValue(key: string, defaultValue: any = '') {
    if (typeof this.data[key] !== 'undefined') {
      return this.data[key];
    }
    return defaultValue;
  }

  updateValue(key: string, newValue: any = '') {
    this.data[key] = newValue;
  }

  async initUser(user?: any) {
    let res = user;

    if (!res) {
    }
    if (res.success) {
      this.user.populate(res.data);
    }
    this.fullLoading = false;
    return true;
  }

  async logout(user?: any) {
    let res: any = {};
    this.fullLoading = false;
    return res.success === true;
  }

  public get checkAccess(): boolean {
    return true;
  }

  async checkUser() {
    const model = this.clone();
    try {
      const user = await Auth.currentAuthenticatedUser();
      const profileData = await API.graphql(
        graphqlOperation(listProfiles, {
          filter: {userId: {eq: user.attributes.sub}},
        }),
      );
      const profile = (profileData as any)?.data?.listProfiles?.items[0];

      const likeData = await API.graphql(
        graphqlOperation(listLikes, {
          filter: {profileId: {eq: profile.id}},
        }),
      );

      model.data.likes = (likeData as any)?.data?.listLikes?.items?.map(
        (l: any) => this.getLike(l),
      );

      const followersData = await API.graphql(
        graphqlOperation(listUserFollowings, {
          filter: {profileId: {eq: profile.id}},
        }),
      );
      const followers = (followersData as any)?.data?.listUserFollowings?.items;

      const followingsData = await API.graphql(
        graphqlOperation(listUserFollowings, {
          filter: {userId: {eq: user.attributes.sub}},
        }),
      );
      const followings = (followingsData as any)?.data?.listUserFollowings
        ?.items;
      model.user = {...user, profile, followers, followings};
    } catch (error) {
      model.user = {};
    }
    model.userLoading = false;
    return model;
  }

  getLike(l: any) {
    if (l.postId) {
      return {id: l.id, otherId: l.postId};
    } else if (l.commentId) {
      return {id: l.id, otherId: l.commentId};
    } else if (l.responseId) {
      return {id: l.id, otherId: l.responseId};
    }
  }

  async onLike(item: any, type: string) {
    const i = this.data.likes.findIndex((l: any) => l.otherId === item.id);
    if (i > -1) {
      if (this.data.likes[i].id) {
        try {
          await API.graphql(
            graphqlOperation(deleteLike, {input: {id: this.data.likes[i].id}}),
          );
          this.data.likes.splice(i, 1);
        } catch (error) {
          handleError(error);
        }
      }
    } else {
      const input = {
        profileId: this.user.profile.id,
      };
      if (type === 'post') {
        Object.assign(input, {postId: item.id});
      }
      if (type === 'comment') {
        Object.assign(input, {commentId: item.id});
      }
      if (type === 'response') {
        Object.assign(input, {responseId: item.id});
      }
      try {
        const res = await API.graphql(graphqlOperation(createLike, {input}));
        this.data.likes.push({
          id: (res as any)?.data?.createLike?.id,
          otherId: item.id,
        });
      } catch (error) {
        handleError(error);
      }
    }
    return this;
  }

  async onFollow(item: any, type: string) {
    const i = this.user?.followings?.findIndex(
      (l: any) => l.profileId === item.id,
    );

    if (i > -1) {
      try {
        await API.graphql(
          graphqlOperation(deleteUserFollowing, {
            input: {id: this.user?.followings[i].id},
          }),
        );
        this.user?.followings.splice(i, 1);
      } catch (error) {
        handleError(error);
      }
    } else {
      const input = {
        profileId: item.id,
        userId: this.user.attributes.sub,
      };
      try {
        const res = await API.graphql(
          graphqlOperation(createUserFollowing, {input}),
        );
        this.user?.followings?.push((res as any)?.data?.createUserFollowing);
      } catch (error) {
        handleError(error);
      }
    }
    return this;
  }

  hasLike(item: any) {
    return this.data.likes.findIndex((l: any) => l.otherId === item.id) > -1;
  }

  isFollowing(item: any) {
    return (
      this.user?.followings?.findIndex((l: any) => l.profileId === item.id) > -1
    );
  }

  isFollower(item: any) {
    return (
      this.user?.followers?.findIndex((l: any) => l.userId === item.userId) > -1
    );
  }

  clone() {
    return cloneDeep(this);
  }
}

export {BaseModel};
