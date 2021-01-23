import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./Login/Login";
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
