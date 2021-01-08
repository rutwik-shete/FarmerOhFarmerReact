import React, {Component} from 'react';
import './Login.css';
import {Link}  from 'react-router-dom';
import  View from '../../View/view';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
;

class Login extends Component{
  constructor(){
    super()

    }
    
  render() {

    return(   
    
      <div className="bgimage">   
      <div className="Main"> 
      <div className="Heading"> 
            <h1>LOGIN</h1>
             </div> 
 
<div className="Email">
<input type="text" placeholder="Email" className="Gmail" >
</input>
{/* <img src={require("./logos/mail.png")} alt="mailbox" className="Maillogo"></img> */}

</div>

<div className="Password">
 <input type="notext" placeholder="Password" className="Unique" ></input>
 {/* <img src={require("./logos/chavi.png")} alt="key" className="Passlogo"></img> */}

 </div>

<div className="flexBox">

<div className="Submit">
  <button type="submit" className="Enter" >
 <Link to='/view' className="Color">submit</Link>
 </button>
</div>

<div className="Signup">
 <button type="submit" className="New" >
   Create account</button> 

</div>
</div>    
</div>     
   </div>
      
);
  }
    
}
  





  
export default Login;
