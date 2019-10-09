import React from "react";
//import { Switch, Route, Redirect } from "react-router-dom";
//import { Route } from "react-router-dom";

//import logo from "./logo.svg";
import "./css/style.css";

//import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Overview from "./components/overview/overview.component";
import PageDetail from "./components/pagedetail/pagedetail.component";
import Footer from "./components/footer/footer.component";

//function App() {
class App extends React.Component {
  render() {
    return (
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
    );
  }
}

export default App;
