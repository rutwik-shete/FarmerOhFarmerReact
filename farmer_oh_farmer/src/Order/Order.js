import React, { Component } from 'react';
import './Order.css';
import {Link}  from 'react-router-dom';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, CardBody } from 'reactstrap'
  import Orderloop from '../Order/Orderloop';
class Order extends Component{
    constructor(){
        super();
    }
     state = {
       Orders : [
         {
           name:"Atharva Tuljapurkar",
           address:"A-504,Sai Niwas,Dhayari",
           phone:"8999052763"
         },
         {
          name:"Atharva Tuljapurkar",
          address:"A-504,Sai Niwas,Dhayari",
          phone:"8999052763"
         },
         {
          name:"Atharva Tuljapurkar",
          address:"A-504,Sai Niwas,Dhayari",
          phone:"8999052763"
         }

       ],
     }
     render(){
     return(
        <div className="Ontop">
        <div className="Toporder">
        <div id="header2">
      <span id="header-text-4">Farmer</span>
      <span id="header-text-5">Oh</span>
      <span id="header-text-6">Farmer</span>
      <div id="navbox2">
      <Link to='/Login' className="Getout">LogOut</Link>
      <img src={require("../Homepage/Login/logos/logout.png")} className="logo" />
      <div className="block1">  

      <Orderloop ord={this.state.Orders} />
    
      </div>
      </div>
        </div>
        </div>
        </div>
       
        

     );










     }




};

export default Order;














