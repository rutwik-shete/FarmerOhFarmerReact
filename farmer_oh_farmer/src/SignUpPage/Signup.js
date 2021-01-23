import React, { Component } from 'react';
import './Signup.css';
import signupAPI, { signupfarmer } from '../Notsure/signupAPI';

class Signup extends Component {


    constructor(props) {
        super(props)

        this.state = {
            name: "",
            password: "",
            confirmPassword: "",
            address: "",
            email: "",
            phonenumber: "",
            pincode: "",
            nameerror: "",
            passerror:"",


        }
        this.submit = this.submit.bind(this);
        this.validate = this.validate.bind(this);
    }

    namehandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    confirmpasswordhandler = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }
    addresshandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    phonenumberhandler = (event) => {
        this.setState({
            phonenumber: event.target.value
        })
    }
    pincodehandler = (event) => {
        this.setState({
            pincode: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.name}   Farmer Registered Successfully!`)
        console.log(this.state);
        this.setState({
            name: "",
            password: "",
            confirmPassword: "",
            address: "",
            email: "",
            phonenumber: "",
            pincode: "",
        })
        event.preventDefault()

    }
    submit() {
        const passValidate = this.validate();

        if (passValidate) {


            console.log('fe');
            signupfarmer(this.state).then((result) => {
                let responseJson = result;
                if (responseJson['status'] === "Success") {

                    sessionStorage.setItem('userData', responseJson);
                    console.log(responseJson);
                }

                else {
                    console.log('Failed');
                    console.log(result);
                }
            })
        }
    }
    validate() {

        let input = this.state.input;
        let errors = {};
        let nameerror = "";
        let passerror = "";

        if (!this.state.name) {
            nameerror = "Name cannot be empty"
        }
        if(!this.state.password){
            passerror = "Password cannot be empty"
        }
        // if (!input["confirmPassword"]) {
        //     errors["confirmPassword"] = "Please enter your confirm password.";
        // }

        // if (typeof input["password"] !== "undefined" && typeof input["confirmPassword"] !== "undefined") {

        //     if (input["password"] != input["confirmPassword"]) {
        //         errors["password"] = "Passwords do not match.";
        //     }
        // }

        if (nameerror) {
            this.setState({ nameerror });
            return false;
        }
        if(passerror){
            this.setState({ passerror});
            return false;
        }
        
        // this.setState({
        //     errors: errors
        // });    
        return true;
    };

    render() {
        return (
            <div className="blurredbg">
                <div className="Home">
                    <form>
                        <div className="startselling">
                            <h1>Register And Start Selling</h1>
                        </div>
                        <div className="name">
                            <input type="text" value={this.state.name} onChange={this.namehandler} placeholder="Name/CompanyName/GroupName" size="50" required /><br />
                        </div>
                        <span>
                            {this.state.nameerror}
                        </span>

                        <div className="password">
                            <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" id="password" size="50" required /><br />
                        </div>
                        <span>
                            {this.state.passerror}
                        </span>
                        <div className="confirmpassword">
                            <input type="password" value={this.state.confirmPassword} onChange={this.confirmpasswordhandler} placeholder="Confirm Password" id="confirm_password" size="50" required /><br />
                        </div>
                        <div className="address">
                            <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="Address" size="50" /><br />
                        </div>
                        <div className="email">
                            <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email" size="50" /><br />
                        </div>
                        <div className="flexbox">
                            <div className="phonenumber">
                                <input type="tel" value={this.state.phonenumber} onChange={this.phonenumberhandler} placeholder="PhoneNumber" maxlength="10" required /><br />
                            </div>
                            <div className="pincode">
                                <input type="text" value={this.state.pincode} onChange={this.pincodehandler} placeholder=" PinCode" maxlength="6" size="20" required /><br />
                            </div>
                        </div>
                        <div className="submit">
                            <input type="button" onClick={this.submit} value="Sign Up" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;