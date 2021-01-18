import React, { Component } from "react";
import "./MenuBar.css";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";

class MenuBar extends Component {
  render() {
    return (
      <>
        <div className="BgImage">
          <div id="WebsiteLogoDiv">
            <img id="WebsiteLogo" />
          </div>

          <Navbar className="NavBarStyle" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="NavBarCollapseStyle"
            >
              <Nav className="ml-auto">
                <NavLink
                  activeClassName="NavLinkActive"
                  className="NavLinkInActive"
                  to="/homepage/view"
                >
                  View Orders
                </NavLink>
                <NavLink
                  activeClassName="NavLinkActive"
                  className="NavLinkInActive"
                  to="/homepage/order"
                >
                  View Products
                </NavLink>
                <NavLink
                  activeClassName="NavLinkActive"
                  className="NavLinkInActive"
                  to="/homepage/addproducts"
                >
                  AddProduct
                </NavLink>
                <NavLink
                  activeClassName="NavLinkActive"
                  className="NavLinkInActive"
                  to="/homepage/addproducts"
                >
                  Logout
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}

export default MenuBar;
