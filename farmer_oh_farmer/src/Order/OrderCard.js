import React, { Component } from "react";
import "./OrderCard.css";
import Grid from "@material-ui/core/Grid";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Orderloop extends Component {
  render() {
    return (
      <Row className="justify-content-md-center">
        {this.props.ord.map((ord) => (
          <Col className="OrderRowStyle" md="auto" key={ord.id}>
            <div className="Extend">
              <div className="Upper">
                  <p className="customerInfo"> {ord.customerName} </p>
                  <p className="customerInfo"> {ord.customerAddress}</p>
                  <p className="customerInfo">{ord.customerPhone}</p>
              </div>
              <div>
                <span id="Table">
                  <table className="table-striped">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Measurement</th>
                        <th>QTY</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ord.orderContent.map((OrderContent) => (
                        <tr key={OrderContent.id}>
                          <td>{OrderContent.product.productDataName}</td>
                          <td>{OrderContent.product.measurement}</td>
                          <td>{OrderContent.productQuantity}</td>
                          <td>{OrderContent.product.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td></td>
                        <td></td>
                        <td className="Total">Total :</td>
                        <td className="Total">{ord.orderAmount}</td>
                      </tr>
                    </tfoot>
                  </table>
                </span>
              </div>
              {ord.deliveryStatus != "DELIVERED" ? (
                <button className="Status">
                  {ord.deliveryStatus}
                </button>
              ) : (
                <button className="Delivered">
                  {ord.deliveryStatus}
                </button>
              )}
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Orderloop;
