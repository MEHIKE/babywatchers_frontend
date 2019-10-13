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
export const getCurrentHeader = name => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/user_settings?username=${name}`);
    const data = await res.json();
    //console.log(`/user_settings?username=${name}`);
    //console.log("data=" + data);
    //console.log(`${name}`);
    dispatch({
      type: HeaderActionTypes.GET_CURRENT_HEADER,
      payload: data[0]
    });
  } catch (error) {
    dispatch({
      type: HeaderActionTypes.HEADER_ERROR,
      payload: error.response.data
    });
  }
};

//add settings to server to make a header settings
export const addHeader = header => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/user_settings", {
      method: "POST",
      body: JSON.stringify(header),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: HeaderActionTypes.ADD_HEADER,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: HeaderActionTypes.HEADER_ERROR,
      payload: error.response.data
    });
  }
};

//delete Header
export const deleteHeader = name => async dispatch => {
  try {
    setLoading();
    await fetch(`/user_settings?username=${name}`, {
      method: "DELETE"
    });

    //console.log(`/user_settings?username=${name}`);
    //console.log("data=" + data);
    //console.log(`${name}`);
    dispatch({
      type: HeaderActionTypes.DELETE_HEADER,
      payload: name
    });
  } catch (error) {
    dispatch({
      type: HeaderActionTypes.HEADER_ERROR,
      payload: error.response.data
    });
  }
};

//update header
export const updateHeader = header => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/user_settings?username=${header.name}`, {
      method: "PUT",
      body: JSON.stringify(header),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    //console.log(`/user_settings?username=${name}`);
    //console.log("data=" + data);
    //console.log(`${name}`);
    dispatch({
      type: HeaderActionTypes.UPDATE_HEADER,
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
