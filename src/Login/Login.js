import React, {Component} from 'react';
import {PostData} from '../Notsure/PostData';
import { Redirect} from 'react-router-dom';
import './Login.css';
import Signup from '../SignUpPage/Signup';
// import {Link}  from 'react-router-dom';

const initialState = {
  email:'',
  password:'',
  redirect:false,
  emailError:'',
  passwordError:'',
  isbuttonDisabled:false,
  Displaymessage:'',
  issignup:false,
  signupcode:'',
}


class Login extends Component{

  
  constructor(props){
    super(props);

      this.state = initialState;
       this.login = this.login.bind(this);
       this.onchange = this.onchange.bind(this);
       this.toggleSignupForm = this.toggleSignupForm.bind(this);

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
    if (emailError || passwordError ) {
      this.setState({emailError , passwordError });
      return false;
    } 
    return true;
  };

 
 

 login() {
  //  console.log(this.state);

  const isValid = this.Validate();

  if(isValid){

    this.setState(initialState);
    this.setState({isbuttonDisabled:true});
     PostData(this.state).then((result) => {
    let responseJson = result;

        if(responseJson['status']==="Success" ){
      
      sessionStorage.setItem('userData', responseJson.result.id);
      this.setState({redirect: true});
    
    }
  

    else{
      console.log('Login Failed');
      this.setState({isbuttonDisabled:false});
      this.setState({Displaymessage:"Login Failed"});
    }

  })
}
 
 }

 toggleSignupForm(){
    if(this.state.issignup)
      this.setState({issignup:false});
    else
      this.setState({issignup:true});
 }

 onchange(e){
      this.setState({[e.target.name]: e.target.value});
      console.log(this.state);
 }
  render() {

    if(this.state.issignup){
      // this.setState({
      //   signupcode:<Signup></Signup>
      // });
      this.state.signupcode = <Signup fun={this.toggleSignupForm.bind(this)}></Signup>;
  
    }
    else{
      this.state.signupcode=null;
    }

    if(this.state.redirect){
      return(<Redirect to={'/homepage'} />);
     }
  
    return(   
      <div className="bgimage">
               {this.state.signupcode}
      <div className="Main">
      <div className="Heading"> 
            <h1>LOGIN</h1>
      </div> 
 <form>
<div className="form-group">
<input type="text1"  className="form-control" name="email" placeholder="E-mail" onChange={this.onchange}  >
</input>
</div>

<div className="popup" style={{  fontSize:20, color:"red" }}>{this.state.emailError} </div>
<div className="form-group">
 <input type="password" placeholder="Password" className="form-control" name="password"  onChange={this.onchange}  ></input>
 </div>

 <div className="Msg" style={{ fontSize:20, color:"red"}}>{this.state.passwordError}</div>
 </form>
 <div className="Msgs">{this.state.Displaymessage}</div>

<div className="flexBox">
<div className="Submit">
  <button type="button" className="btn btn-primary" onClick={this.login} disabled={this.state.isbuttonDisabled} >
  {this.state.isbuttonDisabled ? 'Submiting...' : 'Submit'}
 </button>
</div>

<div className="Signup">
 <button type="button" className="btn btn-primary" onClick={this.toggleSignupForm}>
   Create account</button> 
</div>
</div>  
</div>  
   
</div>
      
);
  }
    
}
  
export default Login;
