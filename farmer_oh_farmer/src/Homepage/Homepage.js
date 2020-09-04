import React from 'react';
import Login from './Login/Login';
import './Homepage.css';

 function Homepage(){
    return(
    
            <div className="Home">  
       <div className="bgimage">

       <div className="appName">
          <span><h1>Farmer</h1></span><br />
          <span><h1>Oh</h1></span>
          <span><h1>Farmer</h1></span>
       </div>

          <Login></Login>     
      
       </div>
         
            
             </div>
        
              
           
     );

}
export default Homepage;