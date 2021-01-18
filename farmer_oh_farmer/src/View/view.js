import React, { Component } from "react";
import "./view.css";
import Loopimg from "./loopimg";
import "./loopimg.css";
import { Link } from "react-router-dom";

class View extends Component {
  state = {
    img: [
      {
        rate: "210gm/",
        src: "./images/tomatoes.jpg",
        price: "61Rs",
      },
      {
        rate: "220gm/",
        src: "./images/tomatoes.jpg",
        price: "62Rs",
      },
      {
        rate: "230gm/",
        src: "./images/tomatoes.jpg",
        price: "63Rs",
      },
      {
        rate: "250gm/",
        src: "./images/tomatoes.jpg",
        price: "64Rs",
      },
      {
        rate: "250gm/",
        src: "./images/tomatoes.jpg",
        price: "65Rs",
      },
      {
        rate: "250gm/",
        src: "./images/tomatoes.jpg",
        price: "66Rs",
      },
    ],
  };

  render() {
    return (
      <div className="Back">
        <div className="Image">
          <div id="navbox">
            <span id="Addpro">Addproduct</span>
            <Link to="/Order" className="Linked">
              Vieworder
            </Link>
            <Link to="/Login" className="Linked2">
              Logout
            </Link>
            <div id="header">
              <span id="header-text-1">Farmer</span>
              <span id="header-text-2">Oh</span>
              <span id="header-text-3">Farmer</span>

              {/* <div className="flexBox"> */}
              {/* <span id="Addpro">Addproduct</span>  */}
              {/* <Link to='/Order' className="Linked">Vieworder</Link> */}
              {/* <img src={require("../Homepage/Login/logos/logout.png")} className="out" /> */}
              {/* <Link to='/Login' className="Linked2">Logout</Link> */}
            </div>
          </div>

          <div className="Block">
            <Loopimg imgData={this.state.img} key={this.state.img.price} />
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default View;
