import { createStore, applyMiddleware, compose } from 'redux';
//import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import rootReducer from './root-reducer';

const middlewares = [reduxPromise, logger, thunk];
const initialState = {};

/*const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);*/

let store;

if (
  window.navigator.userAgent.includes('Chrome') &&
  !window.navigator.userAgent.includes('OPR')
) {
  store = createStore(
    rootReducer,
    initialState,
    //composeWithDevTools(
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}

export default store;
