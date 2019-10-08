import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//import logo from "./logo.svg";
import "./css/style.css";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";

//function App() {
class App extends React.Component {
  render() {
    return (
      <div className="page_container">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
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
