import React, { Component } from "react";
import "./MenuBar.css";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import Button from "react-bootstrap/Button";
import * as Constants from "../Constants";

class MenuBar extends Component {
  logout(){
    window.location.replace(Constants.LOGIN_URL);
  }
  render() {
    return (
      <>
        <div className="BgImage">
          <div id="WebsiteLogoDiv">
            <img id="WebsiteLogo" />
          </div>

          <Navbar className="NavBarStyle" expand="lg">
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="NavBarCollapseStyle"
            >
              <Nav className="ml-auto">
                <NavLink
                  activeClassName="NavLinkActive"
                  className="NavLinkInActive"
                  to="/homepage/viewproducts"
                >
                  View Products
                </NavLink>
                <NavLink
                  activeClassName="NavLinkActive"
                  className="NavLinkInActive"
                  to="/homepage/vieworders"
                >
                  View Orders
                </NavLink>
                <NavLink
                  activeClassName="NavLinkActive"
                  className="NavLinkInActive"
                  to="/homepage/addproducts"
                >
                  AddProduct
                </NavLink>
                <Button variant="contained" size="sm" className="something" onClick={this.logout}>
                  <div>
                    <img
                      src={require("../Login/logos/logout.png")}
                      className="LogOutLogo"
                    />
                    <p className="LogoutText">Logout</p>
                  </div>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}

export default MenuBar;
