import { PageActionTypes } from "./page.types";

const INITIAL_STATE = {
  //currentUser: null,
  currentPage: null,
  page: null,
  //user: null,
  loading: false,
  error: null
};

const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PageActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };

    default:
      return state;
  }
};

export default pageReducer;
