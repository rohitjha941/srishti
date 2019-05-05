import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import Nav from "./compo/header/header";
import Home from "./pages/home/home";
import Groups from "./pages/groups/group";
import GoupDetails from "./pages/groups_details/index";
import About from "./pages/about";
import Achievement from "./pages/achievement/achievement";
import Footer from "./compo/footer/footer";
import Scroll from "./compo/scrolltotop";
import Team from "./pages/team/team";
import Login from "./pages/login/login";
import axios from "axios";
import { backend_url, token } from "./const";
import 'antd/dist/antd.css';
import Logout from "./pages/logout/logout";
import Myaccount from "./pages/myaccount/myaccount";

class Main extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    if (token !== null && token !== undefined) {
      axios
        .get(backend_url + "/certi/profile/", {
          headers: {
            Authorization: `Token  ${token} `,
          },
        })
        .then(res => {
          this.setState({
            user: res.data,
          });

          console.log(res.data)
        });
    }
  }
  render() {
    return (
      <Router>
        <Scroll>
          <Nav user={this.state.user} />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/groups" exact={true} component={Groups} />
            <Route
              path="/groups/details"
              exact={true}
              component={GoupDetails}
            />
            <Route path="/about" component={About} />
            <Route path="/achievements" component={Achievement} />
            <Route path="/team" component={Team} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/Myaccount"
              render={props => (
                <Myaccount {...props} user={this.state.user} />
              )}
            />
          </Switch>
          <Footer />
        </Scroll>
      </Router>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
serviceWorker.unregister();
