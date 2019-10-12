import { HeaderActionTypes } from "./header.types";

const INITIAL_STATE = {
  //currentUser: null,
  currentHeader: null,
  header: null,
  //user: null,
  loading: false,
  error: null
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case HeaderActionTypes.HEADER_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case HeaderActionTypes.GET_CURRENT_HEADER:
      return {
        ...state,
        header: action.payload,
        loading: false
      };
    case HeaderActionTypes.SET_CURRENT_HEADER:
      return {
        ...state,
        currentHeader: action.payload
      };

    default:
      return state;
  }
};

export default headerReducer;
