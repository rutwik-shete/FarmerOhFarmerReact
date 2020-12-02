import React, {Component} from 'react';
import './Login.css';
import {Link}  from 'react-router-dom';
import  View from '../../View/view';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function Reqlogin(){
//   return(
   
//   );
// }

class Login extends Component{
  constructor(){
    super()
  //   this.state={
  //     Showme:true
  //   }
  // }

  //   operation(){
  //     this.setState({
  //       Showme:false
  //     })

    }
  render() {
    return(  
  //  { this.state.Showme?  
      <div className="bgimage">  
      <div className="main"> 
      <div className="Heading"> 
            <h1>LOGIN</h1>
       </div> 
 
<div className="email">
<input type="text" placeholder="farmer@example.com" size="35"></input>
<img src={require("./logos/mail.png")} className="maillogo"></img>
</div>

<div className="password">
 <input type="text" placeholder="Password" size="35"></input>
 <img src={require("./logos/chavi.png")} className="passlogo"></img>
</div>

<div className="flexBox">
<div className="submit">
  <button type="submit" className="button">
 <Link to='/view' className="Enter">submit</Link>
 </button>
</div>

<div className="signup">
 <button type="submit" className="button2">Create account</button> 
 {/* <button type="submit" className="button2">
   <Link to="/Signup" className="Allenter"> */}
     {/* Create account */}
   {/* </Link>
 </button> */}
</div>
</div>
      
       </div>
       </div>
//        :null
// }
  //      <Switch>
  // <Route exact path="/View" component={View}></Route>
  //     </Switch> 
  //     </Router> 


);
  }
    

}
  





  
export default Login;
