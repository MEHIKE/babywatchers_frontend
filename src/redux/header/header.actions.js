import { HeaderActionTypes } from "./header.types";

export const setCurrentHeader = header => ({
  type: HeaderActionTypes.SET_CURRENT_HEADER,
  payload: header
});

/*export const getCurrentHeader = () => {
  return async dispatch => {
    setLoading();
    const res = await fetch("/settings");
    const data = await res.json();

    dispatch({
      type: HeaderActionTypes.GET_CURRENT_HEADER,
      payload: data
    });
  };
};
*/

//get settings from server to make a header
export const getCurrentHeader = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/user_settings");
    const data = await res.json();

    dispatch({
      type: HeaderActionTypes.GET_CURRENT_HEADER,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: HeaderActionTypes.HEADER_ERROR,
      payload: error.response.data
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: HeaderActionTypes.SET_LOADING
  };
};
