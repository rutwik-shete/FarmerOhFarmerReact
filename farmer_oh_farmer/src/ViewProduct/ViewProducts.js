import React, { Component } from "react";
import "./ViewProducts.css";
import ProductCart from "./ProductCart";
import Container from "react-bootstrap/Container";
import * as Constants from "../Constants";
import ReactLoading from "react-loading";

class ViewProducts extends Component {

  constructor(props){
    super(props);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }
  
  state = {
    Products: [],
    isProductFetched:"Loading",

  };

  componentDidMount() {
    this.fetchProducts();
  }


  fetchProducts(){
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

  removeProduct(e) {
    this.setState({
      isProductFetched:"Loading"
    });
    console.log(e.target.value);
    let url = Constants.REMOVE_PRODUCT_API;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: e.target.value }),
    }).then((result) => {
      result.json().then((response) => {
        if (response["status"] === "Success") {
          console.log("Product Removed");
          this.fetchProducts();
        } else {
          console.log("Remove Failed");
        }
        console.log({ response });
      });
    });
  }

  render() {
    if (this.state.isProductFetched === "Success") {
      return (
        <>
          <div className="ProductBlock">
        <Container fluid="true">
          <ProductCart Products={this.state.Products} removeProduct = {this.removeProduct.bind(this)}/>
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
