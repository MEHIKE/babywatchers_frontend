import { LoginsActionTypes } from "./logins.types";

const INITIAL_STATE = {
  //currentUser: null,
  currentLogin: null,
  logins: null,
  //user: null,
  loading: false,
  error: null
};

const loginsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginsActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LoginsActionTypes.LOGINS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case LoginsActionTypes.GET_CURRENT_LOGIN:
      return {
        ...state,
        header: action.payload,
        currentLogin: action.payload,
        loading: false
      };
    case LoginsActionTypes.SET_CURRENT_LOGIN:
      return {
        ...state,
        currentLogin: action.payload,
        header: action.payload,
        loading: false
      };
    case LoginsActionTypes.ADD_LOGIN:
      return {
        ...state,
        currentLogin: [...state.currentLogin, action.payload],
        logins: [...state.logins, action.payload],
        loading: false
      };
    case LoginsActionTypes.UPDATE_LOGIN:
      return {
        ...state,
        logins: state.logins.map(login =>
          login.username === action.payload.username ? action.payload : login
        ),
        loading: false
      };
    case LoginsActionTypes.DELETE_LOGIN:
      return {
        ...state,
        logins: state.logins.filter(login => login.username !== action.payload),
        loading: false
      };
    case LoginsActionTypes.SHOW_CURRENT:
      return {
        ...state //,
        //currentHeader: action.currentHeader
        // currentHeader: action.currentHeader }; //{
        //currentHeader: state
        //...state
        //,
        /*header: state.header.filter(
          header => header.username !== action.payload
        //),
        loading: false*/
      };
    default:
      return state;
  }
};

export default loginsReducer;
