import { SettingsActionTypes } from "./settings.types";

const INITIAL_STATE = {
  //currentUser: null,
  currentSettings: null,
  settings: null,
  //user: null,
  loading: false,
  error: null
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettingsActionTypes.SET_CURRENT_SETTINGS:
      return {
        ...state,
        currentSettings: action.payload
      };

    default:
      return state;
  }
};

export default settingsReducer;
