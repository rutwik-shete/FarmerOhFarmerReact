import React from 'react';
import './Login.css';
  function Login(){
    return(

        <div className="main">
        <div className="block">
        </div>
        <div className="Heading"> 
          <h1>LOGIN</h1>
          </div> 

        <div className="email">
         <input type="text" placeholder="farmer@example.com" size="35"></input> 
        </div>

        <div className="password">
          <input type="text" placeholder="Password" size="35"></input>
        </div>

        <div className="checkbox">
          <input type="checkbox" id="customecheck" ></input>
          <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
       </div>

        <div className="submit">
          <button type="submit" className="button1" >Submit</button>
       </div>

        <div className="signup">
          <button type="submit">Create account</button> 
       </div>

        <div className="rememberme">
        <p className="forgot-password text-right">
              <a href="#">Forget password?</a>
          </p>
       </div>

       </div>

);

}
export default Login;
