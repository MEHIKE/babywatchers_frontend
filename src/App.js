import React, { Suspense, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
//import { useSSR } from "react-i18next";
//import { hydrate } from "react-dom";
//import logo from "./logo.svg";
import "./css/style.css";
//import { withNamespaces } from "react-i18next";

//import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Overview from "./components/overview/overview.component";
import PageDetail from "./components/pagedetail/pagedetail.component";
import Footer from "./components/footer/footer.component";

import Loginpage from "./pages/loginpage/loginpage.component";

import Spinner from "./assets/spinner.component";

import LoadingProvider from "./contexts/loadingProvider.component";
import UserDetailsProvider from "./contexts/userDetailsProvider.component";

//import logo from "./img/babywatch_header.jpg";

import Loader from "./assets/Loader";

//function App() {
class App extends React.Component {
  render() {
    return (
      <>
        <LoadingProvider>
          <Spinner />
          <UserDetailsProvider>
            <Suspense fallback={<Loader />}>
              <div className="page_container">
                {/*<Router>*/}
                {/*<Switch>*/}
                {/*<Route exact path="/login" component={Loginpage} />*/}

                {/*<F>*/}
                <Router>
                  <Fragment>
                    <Header />

                    <div className="page_content">
                      <Sidebar />

                      <main className="page-view">
                        {/*</main><Router>*/}
                        {/*<Overview></Overview>*/}
                        {/*<PageDetail></PageDetail>*/}
                        <Switch>
                          <Route exact path="/" component={PageDetail} />
                        </Switch>
                        {/*</Router>*/}
                        <Footer />
                      </main>

                      {/*<Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>*/}
                    </div>
                  </Fragment>
                </Router>
              </div>
              {/*</Switch>*/}
              {/*} </Router>*/}
              {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </header> */}
              {/* </Fragment>*/}
            </Suspense>
          </UserDetailsProvider>
        </LoadingProvider>
      </>
    );
  }
}

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
