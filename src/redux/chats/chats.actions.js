import { ChatActionTypes } from "./chat.types";

export const setChat = chat => ({
  type: ChatActionTypes.SET_CHAT,
  payload: chat
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

//get settings from server to make a chat
export const getUserNewChats = id => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/chats?user_id=${id}`);
    const data = await res.json();
    //console.log(`/user_settings?username=${name}`);
    //console.log("data=" + data);
    //console.log(`${name}`);
    dispatch({
      type: ChatActionTypes.GET_CHAT,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ChatActionTypes.CHAT_ERROR,
      payload: error.response.data
    });
  }
};

//get settings from server to make a chat
export const getUserChats = user => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/chats?user_id=${user.id}`);
    const data = await res.json();
    //console.log(`/user_settings?username=${name}`);
    //console.log("data=" + data);
    //console.log(`${name}`);
    dispatch({
      type: ChatActionTypes.GET_CHAT,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ChatActionTypes.CHAT_ERROR,
      payload: error.response.data
    });
  }
};

//add chats to server to make a chat
export const addChat = chat => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/chats", {
      method: "POST",
      body: JSON.stringify(chat),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: ChatActionTypes.ADD_CHAT,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ChatActionTypes.CHAT_ERROR,
      payload: error.response.data
    });
  }
};

//delete Chat
export const deleteChat = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/chats/${id}`, {
      method: "DELETE"
    });

    //console.log(`/user_settings?username=${name}`);
    //console.log("data=" + data);
    //console.log(`${name}`);
    dispatch({
      type: ChatActionTypes.DELETE_CHAT,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: ChatActionTypes.CHAT_ERROR,
      payload: error.response.data
    });
  }
};

//update header
export const updateChat = chat => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/chat/${chat.id}`, {
      method: "PUT",
      body: JSON.stringify(chat),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    //console.log(`/user_settings?username=${name}`);
    //console.log("data=" + data);
    //console.log(`${name}`);
    dispatch({
      type: ChatActionTypes.UPDATE_CHAT,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ChatActionTypes.CHAT_ERROR,
      payload: error.response.data
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: ChatActionTypes.SET_LOADING
  };
};
