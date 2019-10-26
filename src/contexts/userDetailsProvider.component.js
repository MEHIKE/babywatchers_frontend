import React, { useState } from "react";
import merge from "lodash.merge";
import UserDetailsContext from "./userDetails.context";

const UserDetailsProvider = ({ children }) => {
  /**
   * User details state / controls
   */
  const setUserDetails = ({
    name,
    dateOfBirth,
    email,
    secretQuestion,
    secretAnswer
  }) => {
    updateUserDetails(prevState => {
      const newState = { ...prevState };
      return merge(newState, {
        name,
        dateOfBirth,
        email,
        secretQuestion,
        secretAnswer
      });
    });
  };

  const showUserDetails = () => {
    //updateUserDetails(prevState => {
    console.log("showUserDetails");
    return { userDetails }; //{
    //...prevState,
    //userDetails: prevState.userDetails
    //userDetails: userDetails.name;
    // };
    //});
  };

  const getUserDetails = key => {
    //updateUserDetails(prevState => {
    console.log("showUserDetails(key)");
    return userDetails.$key; //{
    //...prevState,
    //userDetails: prevState.userDetails
    //userDetails: userDetails.name;
    // };
    //});
  };

  const userState = {
    name: "",
    dateOfBirth: "",
    email: "",
    secretQuestion: "",
    secretAnswer: "",
    setUserDetails,
    showUserDetails,
    getUserDetails
  };

  const [userDetails, updateUserDetails] = useState(userState);
  //const [userDetails, getUserDetails] = useState(userState);

  return (
    <UserDetailsContext.Provider value={userDetails}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
