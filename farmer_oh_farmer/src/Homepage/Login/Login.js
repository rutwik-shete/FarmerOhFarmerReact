import React, {Component} from 'react';
import {PostData} from '../../Notsure/PostData';
import { Redirect} from 'react-router-dom';
import './Login.css';
// import {Link}  from 'react-router-dom';

const initialState = {
  email:'',
  password:'',
  redirect:false,
  emailError:'',
  passwordError:''
}


class Login extends Component{

  
  constructor(props){
    super(props);

      this.state = initialState;
     

       this.login = this.login.bind(this);
       this.onchange = this.onchange.bind(this);

  }

  Validate = () => {
   let  emailError = "";
   let passwordError = "";

   if(!this.state.password){
     passwordError = 'Password cannot be empty';
   }

    if(!this.state.email){
      emailError = 'Email cannot be empty';
    }
    if (emailError || passwordError) {
      this.setState({emailError , passwordError});
      return false;
    }

    return true;

  };

 login() {
  //  console.log(this.state);
  const isValid = this.Validate();
 

  PostData(this.state).then((result) => {
    let responseJson = result;
    if(responseJson['status']==="Success"){
      // this.props.history.push('/View')
      sessionStorage.setItem('userData', responseJson);
      this.setState({redirect: true});
     
    }
  })
 
  if(isValid) {
 
    this.setState(initialState);
  }

 
 }

 onchange(e){
      this.setState({[e.target.name]: e.target.value});
      console.log(this.state);
 }



  render() {

    if(this.state.redirect){
      return(<Redirect to={'/View'} />);
     }
  
    return(   
    
     

      <div className="bgimage">   
      <div className="Main"> 
      <div className="Heading"> 
            <h1>LOGIN</h1>
             </div> 
 
<div className="Email">
<input type="text"  className="Gmail" name="email" placeholder="E-mail" onChange={this.onchange} >
</input>

{/* <img src={require("./logos/mail.png")} alt="mailbox" className="Maillogo"></img> */}

</div>

<div className="popup" style={{  fontSize:20, color:"red" }}>{this.state.emailError} </div>

<div className="Password">
 <input type="password" className="Unique" name="password" placeholder="Password" onChange={this.onchange}></input>
 
 {/* <img src={require("./logos/chavi.png")} alt="key" className="Passlogo"></img> */}

 </div>
 <div className="Msg" style={{ fontSize:20, color:"red"}}>{this.state.passwordError}</div>

<div className="flexBox">

<div className="Submit">
  <button type="submit" className="Enter" onClick={this.login} >
submit 
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
