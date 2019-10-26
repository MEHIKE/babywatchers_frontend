import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  users: null,
  loading: false,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case UserActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case UserActionTypes.USER_LOGIN:
      return {
        ...state,
        users: action.payload,
        currentUser: action.payload[0],
        loading: false
      };
    case UserActionTypes.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false
      };
    case UserActionTypes.DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
        loading: false
      };
    case UserActionTypes.SET_CURRENT:
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      };
    case UserActionTypes.UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
        loading: false
      };
    case UserActionTypes.CLEAR_CURRENT:
      return {
        ...state,
        currentUser: null,
        loading: false
      };
    case UserActionTypes.GET_CURRENT:
      return {
        ...state
        //,
        //currentUser: state.currentUser
        //,
        //currentUser: action.payload
      };
    case UserActionTypes.USERS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
