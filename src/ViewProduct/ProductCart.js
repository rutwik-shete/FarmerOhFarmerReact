import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ProductCart.css";
import * as Constants from "../Constants";
class ProductCart extends Component {
  render() {
    return (
      <Row className="justify-content-md-center">
        {this.props.Products.map((Product) => (
          <div className="ProductCard" key={Product.id}>
            <Row className="ProductCardRow">
              <img
                src={Product.productDataPhotoLink}
                alt="veggies"
                className="ProductImage"
              />
              <Col className="ProductCardCol">
                <p className="RatePriceText">{Product.productDataName}</p>
                <p className="RatePriceText">Rate / {Product.measurement}</p>
                <p className="RatePriceText">{Product.cost} ₹</p>
                <button
                  type="button"
                  className="Sub"
                  onClick={this.props.removeProduct}
                  value={Product.id}
                >
                  Remove
                </button>
              </Col>
            </Row>
          </div>
        ))}
        ;
      </Row>
    );
  }
}

export default ProductCart;
