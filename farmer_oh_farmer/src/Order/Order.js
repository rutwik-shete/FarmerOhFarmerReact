import React, { Component } from 'react';
import './Order.css';
import {Link}  from 'react-router-dom';
 
class Order extends Component{
    constructor(){
        super();
    }
     render(){
     return(
        <div className="Ontop">
        <div className="Toporder">
        <div id="header">
      <span id="header-text-1">Farmer</span>
      <span id="header-text-2">Oh</span>
      <span id="header-text-3">Farmer</span>
      <div id="navbox">
      <Link to='/Login' className="Getout">LogOut</Link>
      <img src={require("../Homepage/Login/logos/logout.png")} className="logo" />
      <div className="block1">  
      </div>
        </div>
        </div>
        </div>
        </div>
        

     );










     }




};

export default Order;














