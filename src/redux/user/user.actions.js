import { UserActionTypes } from "./user.types";

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

/*export const getCurrentUser = () => ({
  type: UserActionTypes.GET_CURRENT,
  payload: user
});*/

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
    console.log("data=" + data);
    console.log("userAction getUserLogin = " + `${currentUser.username}`);
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

//set loading to true
export const setLoading = () => {
  return {
    type: UserActionTypes.SET_LOADING
  };
};
