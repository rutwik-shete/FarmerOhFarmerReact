import React, { Component } from 'react';
import './App.css';
import Login from './Homepage/Login/Login';
import SignUp from './SignUpPage/Signup';
import view from './View/view';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import View from './View/view';
import Order from './Order/Order';
 
class App extends Component{

             
  render(){
return(

    <div>
  
     <Router>
       <Switch>
     <Route path="/" exact component={Login} />
     <Route path="/view"  component={View} />
     <Route path="/Order" component={Order} />
     <Route path="/Login" component={Login} />

     </Switch>
     </Router> 
   

   
   </div>
 
  );
        }
};

export default App; 
