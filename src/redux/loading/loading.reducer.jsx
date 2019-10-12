import { LoadingActionTypes } from "./loading.types";

const INITIAL_STATE = {
  //currentUser: null,
  currentLoading: null,
  //loading: null,
  //user: null,
  loading: false,
  error: null
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoadingActionTypes.SET_CURRENT_LOADING:
      return {
        ...state,
        currentLoading: action.payload
      };

    default:
      return state;
  }
};

export default loadingReducer;
