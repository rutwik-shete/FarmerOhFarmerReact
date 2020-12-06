import React, {Component} from 'react';
import './Login.css';
import {Link}  from 'react-router-dom';
import  View from '../../View/view';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

class Login extends Component{
  constructor(){
    super()

    }
    
  render() {

    return(   
    
      <div className="bgimage">   
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
      <div className="main"> 
      <div className="Heading"> 
            <h1>LOGIN</h1>
             </div> 
 
<div className="Email">
<input type="text" placeholder="Email" className="Gmail" ></input>
<img src={require("./logos/mail.png")} alt="mailbox" className="maillogo"></img>
</div>

<div className="Password">
 <input type="text" placeholder="Password" className="Unique" ></input>
 <img src={require("./logos/chavi.png")} alt="key" className="passlogo"></img>
</div>

<div className="flexBox">
<div className="submit">
  <button type="submit" className="button">
 <Link to='/view' className="Enter">submit</Link>
 </button>
</div>

<div className="signup">
 <button type="submit" className="button2">
   <span id="New">Create account</span></button> 

</div>
</div>
      
       </div>
       
    
       </div>
      
);
  }
    
}
  





  
export default Login;
