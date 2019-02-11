import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import Nav from "./compo/header/header";
import Home from "./pages/home/home";
import Groups from "./pages/groups/group";
import GoupDetails from "./pages/groups_details/index"
import About from "./pages/about";

class Main extends Component {
  render() {
    return (
      <Router>
        <>
          <Nav />
          <Switch>
            <Route path="/" exact = {true} component={Home} />
            <Route path = "/groups" exact = {true} component = {Groups} />
            <Route path = "/groups/details" exact = {true} component = {GoupDetails} />
            <Route path = "/about" component = {About} />
          </Switch>
        </>
      </Router>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
serviceWorker.unregister();
