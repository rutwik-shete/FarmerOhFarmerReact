import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import View from "./View/view";
import Order from "./Order/Order";
import Login from "./Login/Login";
// import MenuBar from "./MenuBar/MenuBar";
import Signup from "./SignUpPage/Signup";
import AddProduct from "./Add product/AddProduct";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/view" component={View} />
            <Route path="/Order" component={Order} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={Signup}/>
            <Route path="/AddProduct" component={AddProduct} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
