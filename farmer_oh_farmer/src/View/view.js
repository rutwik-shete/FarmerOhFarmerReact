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
      

     
    
      <div className="Back"> 
     <div className="Image">
     
      <div id="navbox">
         <span id="Addpro">Addproduct</span> 
         <Link to='/Order' className="Linked">Vieworder</Link>
          <Link to='/Login' className="Linked2">Logout</Link>
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
      <Loopimg imgData={this.state.img} />
      </div>
      </div> 
      </div> 
      // </div>      
     
    );
}
}

export default View;