import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ProductCart.css";
class ProductCart extends Component {
  render() {
    return (
      <Row className="justify-content-md-center">
        {this.props.Products.map((Product) => (
          <div className="ProductCard">
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
                <button type="button" className="Sub">
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
