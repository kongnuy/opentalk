import {appConstants} from '../_constants';
import {BaseModel} from '../_models';

export const appActions = {
  replaceModel,
  logout,
  refreshUser,
  replaceModelRequest,
};

function replaceModelRequest(model: BaseModel) {
  return {
    model,
    type: appConstants.REPLACE_MODEL_REQUEST,
  };
}
function replace(model?: BaseModel) {
  if (model) {
    return replaceModelRequest(model.clone());
  } else {
    return replaceModelRequest(BaseModel.getInstance().clone());
  }
}

function replaceModel(model?: BaseModel) {
  return async function (dispatch: any) {
    dispatch(replace(model));
  };
}

function refreshUser(user?: any) {
  return async function (dispatch: any) {
    const model = BaseModel.getInstance();
    model.fullLoading = true;
    dispatch(replace(model));
    const res = await model.initUser(user);
    if (res) {
      dispatch(replace(model));
    }
  };
}

function logout(path?: string) {
  return async function (dispatch: any) {
    const model = BaseModel.getInstance();
    dispatch(replace(model));
    const res = await model.logout();
    if (res) {
      const mdl = BaseModel.reset();
      mdl.fullLoading = false;
      dispatch(replace(mdl));
    }
  };
}
