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
        error: action.payload,
        loading: false
      };
    case HeaderActionTypes.GET_CURRENT_HEADER:
      return {
        ...state,
        header: action.payload,
        currentHeader: action.payload,
        loading: false
      };
    case HeaderActionTypes.SET_CURRENT_HEADER:
      return {
        ...state,
        currentHeader: action.payload,
        header: action.payload,
        loading: false
      };
    case HeaderActionTypes.ADD_HEADER:
      return {
        ...state,
        currentHeader: [...state.currentHeader, action.payload],
        header: [...state.header, action.payload],
        loading: false
      };
    case HeaderActionTypes.UPDATE_HEADER:
      return {
        ...state,
        header: state.header.map(header =>
          header.username === action.payload.username ? action.payload : header
        ),
        loading: false
      };
    case HeaderActionTypes.DELETE_HEADER:
      return {
        ...state,
        header: state.header.filter(
          header => header.username !== action.payload
        ),
        loading: false
      };
    default:
      return state;
  }
};

export default headerReducer;
