import { createContext } from 'react';

const UserDetailsContext = createContext({
  /**
   * Although it is possible to remove the following I like to keep them here
   * because they help anyone importing UserDetailsContext to understand what properties/functions
   * this particular context has available
   */

  name: '',
  dateOfBirth: '',
  email: '',
  secretQuestion: '',
  secretAnswer: '',
  role: '',

  /**
   * {Object} userDetails i.e. {[name], [dateOfBirth], [email], [secretQuestion], [secretAnswer]}
   */
  setUserDetails: userDetails => {},
  showUserDetails: () => {},
  getUserDetails: key => {}
});

export default UserDetailsContext;
