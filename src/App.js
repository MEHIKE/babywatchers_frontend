import React, { Suspense, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./css/style.css";
import { Provider } from "react-redux";

import Header from "./components/header";
import Sidebar from "./components/sidebar/sidebar.component";
//import Overview from "./components/overview/overview.component";
import PageDetail from "./components/pagedetail/pagedetail.component";
import Footer from "./components/footer/footer.component";

import Loginpage from "./pages/loginpage/loginpage.component";

import Spinner from "./assets/spinner.component";

import LoadingProvider from "./contexts/loadingProvider.component";
import UserDetailsProvider from "./contexts/userDetailsProvider.component";

//import logo from "./img/babywatch_header.jpg";

import Loader from "./assets/Loader";
import store from "./redux/store";
import ContextInfo from "./components/contextInfo";

//function App() {
//class App extends React.Component {
const App = () => (
  <Fragment>
    <LoadingProvider>
      <Spinner />
      <UserDetailsProvider>
        <Suspense fallback={<Loader />}>
          <div className="page_container">
            {/*<Route exact path="/login" component={Loginpage} />*/}

            <Router>
              <Fragment>
                <Header />

                <div className="page_content">
                  <Sidebar />

                  <main className="page-view">
                    <Switch>
                      <Route exact path="/" component={PageDetail} />
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
    </LoadingProvider>
  </Fragment>
);

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
