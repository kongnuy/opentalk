import { combineReducers } from "redux";
import { app } from "./app.reducer";
import { connect, ConnectedProps } from "react-redux";
import { appActions } from "../_actions";

const rootReducer = combineReducers({ app });
export type RootState = ReturnType<typeof rootReducer>;

const mapStateToProps = (state: RootState) => ({
  model: state.app.model,
});

const dispatchToProps = {
  ...appActions,
};

const connector = connect(mapStateToProps, dispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export { connector };

export default rootReducer;
