import React, { Component } from "react";
import "./Orderloop.css";
import Grid from "@material-ui/core/Grid";

class Orderloop extends Component {
  render() {
    return (
      <Grid container justify="center" spacing={5}>
        {this.props.ord.map((ord) => (
          <Grid item>
            <div className="Extend">
              <div className="Upper">
                <span id="Name">
                  <p className="customerInfo"> {ord.name} </p>
                </span>
                <span id="Address">
                  <p className="customerInfo"> {ord.address}</p>
                </span>
                <span id="Number">
                  <p className="customerInfo">{ord.phone}</p>
                </span>
              </div>
              <div>
                <span id="Table">
                  <table className="table-striped">
                    <tr>
                      <th>Name</th>
                      <th>Measurement</th>
                      <th>QTY</th>
                      <th>Price</th>
                    </tr>
                    <tr>
                      <td>{ord.product}</td>
                      <td>{ord.measurement}</td>
                      <td>{ord.qty}</td>
                      <td>{ord.cost}</td>
                    </tr>
                    <tr>
                      <td>{ord.product2}</td>
                      <td>{ord.measurement2}</td>
                      <td>{ord.qty2}</td>
                      <td>{ord.cost2}</td>
                    </tr>
                    <tr>
                      <td>{ord.product3}</td>
                      <td>{ord.measurement3}</td>
                      <td>{ord.qty3}</td>
                      <td>{ord.cost3}</td>
                    </tr>
                    <tr>
                      <td>{ord.product4}</td>
                      <td>{ord.measurement4}</td>
                      <td>{ord.qty4}</td>
                      <td>{ord.cost4}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className="Total">Total :</td>
                      <td className="Total">840</td>
                    </tr>
                  </table>
                </span>
              </div>
              <button color="Red" className="Status">
                {ord.status}
              </button>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default Orderloop;
