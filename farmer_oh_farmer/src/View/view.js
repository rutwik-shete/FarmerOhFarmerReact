import React, { Component } from 'react';
import './view.css';
import Loopimg from './loopimg';
import './loopimg.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Order from '../Order/Order';

class View extends Component{
  constructor(){
    super(); 
  }

  state={
     img:[
       {
         rate:"250gm/",
         src:'./images/tomatoes.jpg' ,
         price:"60Rs",
       },
       {
         rate:"250gm/",
         src:'./images/tomatoes.jpg',
         price:"60Rs"
       },
       {
         rate:"250gm/",
         src:'./images/tomatoes.jpg',
         price:"60Rs"

       },
       {
        rate:"250gm/",
        src:'./images/tomatoes.jpg',
        price:"60Rs"
       },
       {
        rate:"250gm/",
        src:'./images/tomatoes.jpg',
        price:"60Rs"
       },
       {
        rate:"250gm/",
        src:'./images/tomatoes.jpg',
        price:"60Rs"
       },
        
     ],
  }
  render(){
   
    return(
    
    <div className="Top">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
 
     <div className="image">
     
     <div id="header">
      <span id="header-text-1">Farmer</span>
      <span id="header-text-2">Oh</span>
      <span id="header-text-3">Farmer</span>
     
     <div id="navbox">
      <div className="flexbox">
     <span id="Addpro">Addproduct</span> 
       {/* <span id="Vieword">View order</span> */}
        <Link to='/Order' className="Linked">Vieworder</Link>
       <img src={require("../Homepage/Login/logos/logout.png")} className="out" />
       {/* <span id="Signout">LogOut</span> */}
       <Link to='/Login' className="Linked2">Logout</Link>
       </div>
      </div>
      </div> 
    
      <div className="block">    
      <Loopimg imgData={this.state.img} />
      </div>       
      </div>
     </div>
     
  
   
  

   
    );
}
}

export default View;