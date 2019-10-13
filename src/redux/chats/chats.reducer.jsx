import { ChatsActionTypes } from "./chats.types";

const INITIAL_STATE = {
  //currentUser: null,
  //currentHeader: null,
  chat: null,
  //user: null,
  loading: false,
  error: null
};

const chatsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChatsActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ChatsActionTypes.CHAT_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ChatsActionTypes.GET_CHAT:
      return {
        ...state,
        chat: action.payload,
        //currentHeader: action.payload,
        loading: false
      };
    case ChatsActionTypes.SET_CHAT:
      return {
        ...state,
        //currentHeader: action.payload,
        chat: action.payload,
        loading: false
      };
    case ChatsActionTypes.ADD_CHAT:
      return {
        ...state,
        //currentHeader: [...state.currentHeader, action.payload],
        chat: [...state.chat, action.payload],
        loading: false
      };
    case ChatsActionTypes.UPDATE_CHAT:
      return {
        ...state,
        chat: state.chat.map(chat =>
          chat.username === action.payload.username ? action.payload : chat
        ),
        loading: false
      };
    case ChatsActionTypes.DELETE_CHAT:
      return {
        ...state,
        chat: state.chat.filter(chat => chat.username !== action.payload),
        loading: false
      };
    default:
      return state;
  }
};

export default chatsReducer;
