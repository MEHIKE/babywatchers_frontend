import { UserActionTypes } from "./user.types";
import uuid from "uuid";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT,
  payload: user
});

//clear current User
export const clearCurrentUser = () => {
  return {
    type: UserActionTypes.CLEAR_CURRENT
  };
};

export const getCurrentUser = () => ({
  type: UserActionTypes.GET_CURRENT
  //,
  //payload: user
});

//get users from server t
const getOne = async username => {
  try {
    const res = await fetch(`/users?username=${username}`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    if (data && data.length > 0) return data[0];
    else return null;
  } catch (error) {
    const data = null;
    return data;
  }
  //return null;
};

export const getUser = username => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/users?username=${username}`);
    const data = await res.json()[0];
    //const data = await getOne(username);
    //console.log(`/user_settings?username=${name}`);
    //console.log("data=" + data);
    //console.log(`${name}`);
    dispatch({
      type: UserActionTypes.GET_USER,
      payload: data
      //data[0]
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_ERROR,
      payload: error.response.data
    });
  }
};

//get users from server t
export const getUsers = username => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/users?username=${username}`);
    const data = await res.json();
    //console.log(`/user_settings?username=${name}`);
    //console.log("data=" + data);
    //console.log(`${name}`);
    dispatch({
      type: UserActionTypes.GET_USERS,
      payload: data
      //data[0]
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_ERROR,
      payload: error.response.data
    });
  }
};

//get users from server t
export const getUserLogin = currentUser => async dispatch => {
  try {
    console.log("useractionreducer userLogin method");
    setLoading();
    const res = await fetch(
      `/users?username=${currentUser.username}&password=${currentUser.password}`
    );
    const data = await res.json();
    //console.log(`/user_settings?username=${name}`);
    console.log(data);
    //console.log("userAction getUserLogin = "`${currentUser.username}`);
    dispatch({
      type: UserActionTypes.USER_LOGIN,
      payload: data
      //data[0]
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_ERROR,
      payload: error.response.data
    });
  }
};

//get users from server t
export const updateUser = user => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/users/${user.username}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    //console.log(`/user_settings?username=${name}`);
    //console.log("data=" + data);
    //console.log(`${name}`);
    dispatch({
      type: UserActionTypes.UPDATE_USER,
      payload: data
      //data[0]
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_ERROR,
      payload: error.response.data
    });
  }
};

//get users from server t
export const addUser = user => async dispatch => {
  try {
    setLoading();
    const userdata = await getOne(user.username);
    console.log(userdata);
    if (userdata !== null) {
      dispatch({
        type: UserActionTypes.USER_ERROR,
        payload: "ERROR"
      });
      return null;
    }
    const res = await fetch("/users", {
      method: "POST",
      body: JSON.stringify({
        id: uuid.v4(),
        username: user.username,
        password: user.password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    console.log(user);
    console.log(data);
    //console.log(`${name}`);
    dispatch({
      type: UserActionTypes.ADD_USER,
      payload: data
      //data[0]
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.USER_ERROR,
      payload: error.response
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: UserActionTypes.SET_LOADING
  };
};
