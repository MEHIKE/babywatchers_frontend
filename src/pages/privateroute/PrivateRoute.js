import React, { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/auth/auth';

import AuthContext from '../../contexts/auth2/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  //const isAuthenticated = useAuth();
  //const { authTokens } = useAuth();
  const { authTokens, setAuthTokens } = useAuth();

  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;

  useEffect(
    () => {
      if (authTokens) {
        console.log('PRIVATEROUTE authTokens on olems=');
        console.log(authTokens);
        console.log(user);
      } else {
        if (
          localStorage.getItem('tokens') &&
          localStorage.getItem('tokens') !== 'null' &&
          JSON.parse(localStorage.getItem('tokens')).username !== 'logimata'
        ) {
          console.log('OMISTAME TOKENI');
          setAuthTokens(JSON.parse(localStorage.getItem('tokens')));

          console.log('TOKEN OMISTATUD=' + authTokens);
          console.log(user);
        } else console.log('TINGIMUSED EI VASTA');
      }
      if (authTokens || isAuthenticated || (user && user.logedIn)) {
        console.log('ENTERING TO PRIVATE ROUTE1');
        console.log(authTokens);
        console.log(user);
        //throw Error();
      } else {
        console.log('NO ENTERING TO PRIVATE ROUTE=' + isAuthenticated);
        console.log(user);
      }
      console.log('PRIVATEROUTE');
      console.log(authTokens);
      console.log(user);
    },
    [] //, currentHeader.url
  );

  return (
    <Route
      {...rest}
      render={props =>
        user && user.logedIn ? (
          <Component
            {...props}
            logedIn={user.logedIn}
            username={user.username}
            logged={false}
          />
        ) : (
          <div>
            {console.log(
              'ENTERING TO PRIVATE ROUTE2' +
                authTokens +
                ' * ' +
                isAuthenticated +
                '* '
            )}
            <Redirect
              to={{ pathname: '/', state: { referer: props.location } }}
            />
          </div>
        )
      }
    />
  );
};

export default PrivateRoute;
