import { appConstants } from "../_constants";
import { BaseModel, RootState } from "../_models";

const initialState = { model: BaseModel.getInstance() };

export function app(state = initialState, action: any): RootState {
  switch (action.type) {
    case appConstants.REPLACE_MODEL_REQUEST:
      return { ...state, model: action.model };

    default:
      return state;
  }
}
