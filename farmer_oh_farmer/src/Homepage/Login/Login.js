import React from 'react';
import './Login.css';
  function Login(){
    return(

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
          <button type="submit" className="button1" >Submit</button>
       </div>

        <div className="signup">
          <button type="submit" className="button2">Create account</button> 
       </div>
      </div>
      

      

       </div>

);

}
export default Login;
