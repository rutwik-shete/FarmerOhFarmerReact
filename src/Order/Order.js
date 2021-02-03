import React, { Component } from "react";
import "./Order.css";
import Orderloop from "./OrderCard";
import Container from "react-bootstrap/Container";
import ReactLoading from "react-loading";
import * as Constants from "../Constants";
class Order extends Component {
  componentDidMount() {
    let url =
      Constants.GET_ORDERS_API;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ farmerId: sessionStorage.getItem('userData') }),
    }).then((result) => {
      result.json().then((response) => {
        if (response["status"] === "Success") {
          this.setState({
            Orders: response["result"],
            isOrderFetched: "Success",
          });
        } else {
          this.setState({
            Orders: response["result"],
            isOrderFetched: "Failed",
          });
        }
        console.log({ response });
      });
    });
  }

  state = {
    Orders: [],
    isOrderFetched: "Loading",
  };
  render() {
    if (this.state.isOrderFetched === "Success") {
      return (
        <>
          <div className="Block">
            <Container fluid="true">
              <Orderloop ord={this.state.Orders} />
            </Container>
          </div>
        </>
      );
    } else if (this.state.isOrderFetched === "Loading") {
      return (
        <>
          <div className="Block">
            <div className="loadingStyle">
              <ReactLoading type="bars" color="#6C8E0AAB" />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="Block">
            <div className="NoOrdersDiv">
              <h1 className="NoOrdersError">
                No Orders Available For The Farmer
              </h1>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Order;
