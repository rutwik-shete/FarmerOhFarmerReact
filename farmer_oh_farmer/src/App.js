import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage/Homepage';
import Login from './Homepage/Login/Login';
import SignUp from './SignUpPage/Signup';
import view from './View/view';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import View from './View/view';
 
class App extends Component{

             
  render(){
return(

    <div>

        <Homepage></Homepage>
       {/* <div className="addphotos">
         {
           th
         }
           
        </div> */}

   
   </div>
  );
        }
};

export default App; 
