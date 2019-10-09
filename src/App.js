import React, { Suspense } from "react";
//import { Switch, Route, Redirect } from "react-router-dom";
//import { Route } from "react-router-dom";
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

import logo from "./img/babywatch_header.jpg";

//function App() {
class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <div className="page_container">
          <Header />
          <div className="page_content">
            <Sidebar />
            <main className="page-view">
              <Overview></Overview>
              <PageDetail></PageDetail>
              <Footer />
            </main>

            {/*<Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>*/}
          </div>
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
        </div>
      </Suspense>
    );
  }
}

export default App; //withNamespaces()(App);

//hydrate(<BaseApp />, document.getElementById("root"));
//if (module.hot) {
//  module.hot.accept();
//}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
