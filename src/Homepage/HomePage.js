import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ViewProducts from "../ViewProduct/ViewProducts";
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
            <Route path="/" exact component={AddProduct} />
            <Route path="/homepage/vieworders" component={Order}/>
            <Route path="/homepage/viewproducts" component={ViewProducts}/>
            <Route path="/homepage/addproducts" component={AddProduct}/>
            <Redirect to = "/homepage/addproducts" />
          </Switch>
        </Router>
      </>
    );
  }
}

export default HomePage;
