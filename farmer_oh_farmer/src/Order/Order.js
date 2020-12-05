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
           phone:"8999052763",
           product:"Tomato",
           qty:"2KG",
           cost:"240",
           product2:"Onion",
           qty2:"2KG",
           cost2:"300",
           product3:"Carrot",
           qty3:"2KG",
           cost3:"150",
           product4:"Garlic",
           qty4:"2KG",
           cost4:"50",
           status:"PENDING"
               
         },
        //  {
        //   name:"Atharva Tuljapurkar",
        //   address:"A-504,Sai Niwas,Dhayari",
        //   phone:"8999052763",
        //   product:"Tomato",
        //   qty:"2KG",
        //   cost:"240",
        //   product2:"Onion",
        //   qty2:"2KG",
        //   cost2:"300",
        //   product3:"Carrot",
        //   qty3:"2KG",
        //   cost3:"150",
        //   product4:"Garlic",
        //   qty4:"2KG",
        //   cost4:"50",
        //   status:"DELIVERED"
          
        //  }

       ],
    //    Customer : [
    //     {
    //         product:"Tomato",
    //         qty:"2KG",
    //         cost:"240"
    //     },
    //     {
    //         product:"Onion",
    //         qty:"2KG",
    //         cost:"300"
    //     },
    //     {
    //         product:"Carrot",
    //         qty:"2KG",
    //         cost:"150"
    //     },
    //     {
    //         product:"Garlic",
    //         qty:"2KG",
    //         cost:"50"
    //     }
    // ],
     }
     render(){
     return(
    
        <div className="Toporder">
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
        <div id="header2">
      <span id="header-text-4">Farmer</span>
      <span id="header-text-5">Oh</span>
      <span id="header-text-6">Farmer</span>
      <div id="navbox2">
      <Link to='/Login' className="Getout">Logout</Link>
      <img src={require("../Homepage/Login/logos/logout.png")} className="logo" />
      </div>
      </div>
      <div className="block1">  

      <Orderloop ord={this.state.Orders}
                 cst={this.state.Customer} />
    
    
      
        </div>
        </div>
      
       
        

     );










     }




};

export default Order;














