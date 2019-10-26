import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import settingsReducer from "./settings/settings.reducer";
import pageReducer from "./page/page.reducer";
import loadingReducer from "./loading/loading.reducer";
import headerReducer from "./header/header.reducer";
import chatsReducer from "./chats/chats.reducer";
import loginsReducer from "./logins/logins.reducer";
//import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  settings: settingsReducer,
  page: pageReducer,
  loading: loadingReducer,
  header: headerReducer,
  chats: chatsReducer,
  logins: loginsReducer
  //cart: cartReducer
});
