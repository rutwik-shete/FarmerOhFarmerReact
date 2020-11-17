import React, { Component } from 'react';
import './view.css';
import { photos } from "react";
import Loopimg from './loopimg';


class View extends Component{
  
  state={
     img:[
       {
         name:'mg1',
         src:'./images/onion.jpg' 
       },
       {
         name:'mg2',
         src:'./images/apples.jpg'
       }
      
     ]
     
  }
  render(){
    return(ss
    

    <div className="Top">

     <div className="image">
     
     <div id="header">
      <span id="header-text-1">Farmer</span>
      <span id="header-text-2">Oh</span>


      <span id="header-text-3">Farmer</span>
     
     <div id="navbox">
      <div className="flexbox">
     <span id="Addpro">Add product</span> 
       <span id="Vieword">View order</span>
       <img src={require("../Homepage/Login/logos/logout.png")} className="out" />
       <span id="signout">Log out</span>
       </div>
      </div>
      </div> 
      <div className="block">    
       <Loopimg imgData={this.state.img} ></Loopimg>   
      </div> 
      </div>
      
       
      
       
      

    

    </div>
    );
}
}

export default View;