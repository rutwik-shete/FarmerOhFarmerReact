import React, { Component } from "react";
import "./ViewProducts.css";
import ProductCart from "./ProductCart";
import Container from "react-bootstrap/Container";
import * as Constants from "../Constants";
import ReactLoading from "react-loading";

class ViewProducts extends Component {
  componentDidMount() {
    let url = Constants.GET_PRODUCTS_API;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ farmerId: "2" }),
    }).then((result) => {
      result.json().then((response) => {
        if (response["status"] === "Success") {
          this.setState({
            Products: response["result"],
            isProductFetched: "Success",
          });
        } else {
          this.setState({
            Products: response["result"],
            isProductFetched: "Failed",
          });
        }
        console.log({ response });
      });
    });
  }

  state = {
    Products: [],
    isProductFetched:"Loading",
  };

  render() {
    if (this.state.isProductFetched === "Success") {
      return (
        <>
          <div className="ProductBlock">
        <Container fluid="true">
          <ProductCart Products={this.state.Products} />
        </Container>
      </div>
        </>
      );
    } else if (this.state.isProductFetched === "Loading") {
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
                No Products Added Please Add Products
              </h1>
            </div>
          </div>
        </>
      );
    }
  }
}

export default ViewProducts;
