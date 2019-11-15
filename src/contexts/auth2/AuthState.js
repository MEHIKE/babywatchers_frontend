import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext2 from './authContext';
import authReducer from './authReducer';
//import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token2'),
    isAuthenticated: null,
    loading: true,
    //user: null,
    user: JSON.parse(localStorage.getItem('user2')),
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = user => {
    if (localStorage.token) {
      //setAuthToken(localStorage.token);
    }
    if (!user && localStorage.user2) {
      console.log(user);
      console.log(localStorage.user2);
      user = JSON.parse(localStorage.user2);
      console.log(localStorage.getItem('user2'));
    }
    console.log('LOADUSER=' + user);
    console.log(user);
    try {
      //const res = await axios.get('/api/auth');

      dispatch({
        type: USER_LOADED,
        payload: user
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register User
  const register = user => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      //const res = await axios.post('/api/users', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: user
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Login User
  const login = user => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    console.log('LOGIN: user');
    console.table(user);
    try {
      //const res = await axios.post('/api/auth', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: user
      });

      loadUser(user);
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext2.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext2.Provider>
  );
};

export default AuthState;
