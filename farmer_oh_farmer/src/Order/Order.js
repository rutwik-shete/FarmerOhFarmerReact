import React, { Component } from "react";
import "./Order.css";
import { Link } from "react-router-dom";
import Orderloop from "../Order/Orderloop";
import Grid from "@material-ui/core/Grid";
class Order extends Component {
  state = {
    Orders: [
      {
        name: "Atharva Tuljapurkar",
        address: "A-504,Sai Niwas,Dhayari",
        phone: "8999052763",
        product: "Tomato",
        measurement: "250g",
        qty: "2",
        cost: "240",
        product2: "Onion",
        measurement2: "150g",
        qty2: "1",
        cost2: "300",
        product3: "Carrot",
        measurement3: "350g",
        qty3: "3",
        cost3: "150",
        product4: "Garlic",
        measurement4: "500g",
        qty4: "5",
        cost4: "50",
        status: "PENDING",
      },
      {
        name: "Atharva Tuljapurkar",
        address: "A-504,Sai Niwas,Dhayari",
        phone: "8999052763",
        product: "Tomato",
        measurement: "250g",
        qty: "2",
        cost: "240",
        product2: "Onion",
        measurement2: "150g",
        qty2: "1",
        cost2: "300",
        product3: "Carrot",
        measurement3: "350g",
        qty3: "3",
        cost3: "150",
        product4: "Garlic",
        measurement4: "500g",
        qty4: "5",
        cost4: "50",
        status: "PENDING",
      },
      {
        name: "Atharva Tuljapurkar",
        address: "A-504,Sai Niwas,Dhayari",
        phone: "8999052763",
        product: "Tomato",
        measurement: "250g",
        qty: "2",
        cost: "240",
        product2: "Onion",
        measurement2: "150g",
        qty2: "1",
        cost2: "300",
        product3: "Carrot",
        measurement3: "350g",
        qty3: "3",
        cost3: "150",
        product4: "Garlic",
        measurement4: "500g",
        qty4: "5",
        cost4: "50",
        status: "PENDING",
      },
      {
        name: "Atharva Tuljapurkar",
        address: "A-504,Sai Niwas,Dhayari",
        phone: "8999052763",
        product: "Tomato",
        measurement: "250g",
        qty: "2",
        cost: "240",
        product2: "Onion",
        measurement2: "150g",
        qty2: "1",
        cost2: "300",
        product3: "Carrot",
        measurement3: "350g",
        qty3: "3",
        cost3: "150",
        product4: "Garlic",
        measurement4: "500g",
        qty4: "5",
        cost4: "50",
        status: "PENDING",
      },
      {
        name: "Atharva Tuljapurkar",
        address: "A-504,Sai Niwas,Dhayari",
        phone: "8999052763",
        product: "Tomato",
        measurement: "250g",
        qty: "2",
        cost: "240",
        product2: "Onion",
        measurement2: "150g",
        qty2: "1",
        cost2: "300",
        product3: "Carrot",
        measurement3: "350g",
        qty3: "3",
        cost3: "150",
        product4: "Garlic",
        measurement4: "500g",
        qty4: "5",
        cost4: "50",
        status: "PENDING",
      },
    ],
  };
  render() {
    return (
      <div className="Toporder">
        <div id="header2">
          <span id="header-text-4">Farmer</span>
          <span id="header-text-5">Oh</span>
          <span id="header-text-6">Farmer</span>
          <div id="navbox2">
            <Link to="/Login" className="Getout">
              Logout
            </Link>
            {/* <img
              src={require("../Homepage/Login/logos/logout.png")}
=======
            <img
              // src={require("../Homepage/Login/logos/logout.png")}
// >>>>>>> 5f7af64c48003adf37c8460d13e8b1eed324af0d
              className="logo"
              alt="keyphoto"
            /> */}
          </div>
        </div>
        <Grid item xs={12}>
          <Orderloop ord={this.state.Orders} cst={this.state.Customer} />
        </Grid>
      </div>
    );
  }
}

export default Order;
