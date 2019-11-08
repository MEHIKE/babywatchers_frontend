import React, {
  Suspense,
  Fragment,
  useState,
  useEffect,
  useContext
} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './css/style.css';
import { Provider } from 'react-redux';

import Header from './components/header';
import Sidebar from './components/sidebar/sidebar.component';
//import Overview from "./components/overview/overview.component";
import PageDetail from './components/pagedetail/pagedetail.component';
import Footer from './components/footer/footer.component';

import Loginpage from './pages/loginpage/loginpage.component';

import Spinner from './assets/spinner.component';

import LoadingProvider from './contexts/loadingProvider.component';
import UserDetailsProvider from './contexts/userDetailsProvider.component';

//import logo from "./img/babywatch_header.jpg";

import Loader from './assets/Loader';
import store from './redux/store';
import ContextInfo from './components/contextInfo';
import { AuthContext } from './contexts/auth/auth';
import PrivateRoute from './pages/privateroute/PrivateRoute';
import Admin from './pages/admin/Admin';

import AuthState from './contexts/auth2/AuthState';
import AlertState from './contexts/alert/AlertState';

import AuthContext2 from './contexts/auth2/authContext';

//function App() {
//class App extends React.Component {
const App = () => {
  const [authTokens, setAuthTokens] = useState();

  const authContext2 = useContext(AuthContext2);
  //const { isAuthenticated, user, loadUser } = authContext2;

  const setTokens = data => {
    console.log(
      'setTokens***************************************************** data='
    );
    console.log(data);
    console.log(localStorage.getItem('tokens'));
    if (
      data &&
      localStorage.getItem('tokens') &&
      data.username !== 'logimata'
    ) {
      localStorage.setItem('tokens', JSON.stringify(data));
      setAuthTokens(data);
    } else {
      setAuthTokens(JSON.parse(localStorage.getItem('tokens')));
    }

    if (
      localStorage.getItem('tokens') &&
      localStorage.getItem('tokens') !== 'null' &&
      JSON.parse(localStorage.getItem('tokens')).username !== 'logimata'
    ) {
      //localStorage.setItem('tokens', JSON.stringify(data));
      setAuthTokens(JSON.parse(localStorage.getItem('tokens')));
    }

    console.log(JSON.parse(localStorage.getItem('tokens')));
  };

  useEffect(
    () => {
      //showLoading();
      if (authContext2 && !authContext2.user && localStorage.getItem('user2'))
        authContext2.loadUser(JSON.parse(localStorage.getItem('user2')));
      if (
        localStorage.getItem('tokens') &&
        localStorage.getItem('tokens') !== 'null' &&
        JSON.parse(localStorage.getItem('tokens')).username !== 'logimata'
      ) {
        //localStorage.setItem('tokens', JSON.stringify(data));
        //setAuthTokens(JSON.parse(localStorage.getItem('tokens')));
      } //else {*/
      //if
      //setAuthTokens(JSON.parse(localStorage.getItem('tokens')));
      //}
      //hideLoading();
    },
    [] //, currentHeader.url
  );

  return (
    <AuthState>
      <Fragment>
        <AlertState>
          <LoadingProvider>
            <Spinner />
            <AuthContext.Provider
              value={{ authTokens, setAuthTokens: setTokens }}
            >
              <UserDetailsProvider>
                <Suspense fallback={<Loader />}>
                  <div className='page_container'>
                    {/*<Route exact path="/login" component={Loginpage} />*/}

                    <Router>
                      <Fragment>
                        <Header />

                        <div className='page_content'>
                          <Sidebar />

                          <main className='page-view'>
                            <Switch>
                              <Route exact path='/' component={PageDetail} />
                              <PrivateRoute
                                exact
                                path='/admin'
                                component={Admin}
                              />
                            </Switch>

                            <Footer />
                          </main>
                        </div>
                      </Fragment>
                    </Router>
                    <ContextInfo />
                  </div>
                </Suspense>
              </UserDetailsProvider>
            </AuthContext.Provider>
          </LoadingProvider>
        </AlertState>
      </Fragment>
    </AuthState>
  );
};

export default App; //withNamespaces()(App);

//hydrate(<BaseApp />, document.getElementById("root"));
//if (module.hot) {
//  module.hot.accept();
//}

// loading component for suspense fallback
/*const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);*/

// here app catches the suspense from page in case translations are not yet loaded
