import { LoginsActionTypes } from "./logins.types";

export const setCurrentLogin = login => ({
  type: LoginsActionTypes.SET_CURRENT_LOGIN,
  payload: login
});

//get settings from server to make a login
export const getCurrentLogins = name => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logins?username=${name}`);
    const data = await res.json();
    console.log(`/logins?username=${name}`);
    console.log("data=" + data);
    console.log(`${name}`);
    dispatch({
      type: LoginsActionTypes.GET_CURRENT_LOGIN,
      payload: data[0]
    });
  } catch (error) {
    dispatch({
      type: LoginsActionTypes.LOGINS_ERROR,
      payload: error.response.data
    });
  }
};

//add settings to server to make a header settings
export const addLogin = login => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logins", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: LoginsActionTypes.ADD_LOGIN,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LoginsActionTypes.LOGINS_ERROR,
      payload: error.response.data
    });
  }
};

//delete Header
export const deleteLogin = name => async dispatch => {
  try {
    setLoading();
    await fetch(`/logins?username=${name}`, {
      method: "DELETE"
    });

    //console.log(`/user_settings?username=${name}`);
    //console.log("data=" + data);
    //console.log(`${name}`);
    dispatch({
      type: LoginsActionTypes.DELETE_LOGIN,
      payload: name
    });
  } catch (error) {
    dispatch({
      type: LoginsActionTypes.LOGIN_ERROR,
      payload: error.response.data
    });
  }
};

//update header
export const updateLogin = login => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/logins?username=${login.name}`, {
      method: "PUT",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    //console.log(`/user_settings?username=${name}`);
    //console.log("data=" + data);
    //console.log(`${name}`);
    dispatch({
      type: LoginsActionTypes.UPDATE_LOGIN,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LoginsActionTypes.LOGINS_ERROR,
      payload: error.response.data
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: LoginsActionTypes.SET_LOADING
  };
};

export const showCurrentLogin = (currentLogin = []) => ({
  type: LoginsActionTypes.SHOW_CURRENT_LOGIN,
  currentLogin
});
