import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import View from "../View/view";
import Order from "../Order/Order";
import Login from "../Login/Login";
import MenuBar from "../MenuBar/MenuBar";
import Signup from "../SignUpPage/Signup";
import AddProduct from "../Add product/AddProduct"

class HomePage extends Component {
  render() {
    return (
      <>
        <Router>
          <MenuBar />
          <Switch>
            <Route path="/" exact component={Order} />
            <Route path="/homepage/order" component={Order}/>
            <Route path="/homepage/view" component={View}/>
            <Route path="/homepage/addproducts" component={AddProduct}/>
            <Redirect to = "/homepage/order" />
          </Switch>
        </Router>
      </>
    );
  }
}

export default HomePage;