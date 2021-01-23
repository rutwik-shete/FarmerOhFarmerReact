import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import View from "./View/view";
import Order from "./Order/Order";
import Login from "./Login/Login";
// import MenuBar from "./MenuBar/MenuBar";
import Signup from "./SignUpPage/Signup";
import HomePage from "./Homepage/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/homepage" component={HomePage} />
            <Route path='/Signup' component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
