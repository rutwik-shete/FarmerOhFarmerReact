
// import SignUp from './SignUpPage/Signup';
import React, {Component} from 'react';
import view from './View/view';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import View from './View/view';
import Order from './Order/Order';
// <<<<<<< HEAD
// =======
import Login from './Homepage/Login/Login';
import Signup from './SignUpPage/Signup';
import AddProduct from './Add product/AddProduct';

// >>>>>>> 13495af22df56246065621b2649deb0c8e618beb
class App extends Component{

             
  render(){
return(
  <AddProduct></AddProduct>


  
    // <Router>
    // <Switch>

    //   <Route path="/" exact component={Login} />
    //   <Route path="/view"  component={View} />
    //   <Route path="/Order" component={Order} />
    //   <Route path="/Login" component={Login} />
    //   {/* <Route path="/Signup" component={SignUp} />  */}
    
    // </Switch>
    // </Router>

   
 
  );
        }
};

export default App; 
