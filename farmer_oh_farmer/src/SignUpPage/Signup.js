import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            password: "",
            confirmPassword: "",
            address: "",
            phonenumber: "",
            pincode: "",


        }
        this.handleSubmit = this.handleSubmit.bind(this)
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
            address: event.target.value
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
        alert(`${this.state.firstName} ${this.state.lastName}  Farmer Registered Successfully!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            password: "",
            confirmpassword: "",
            address: "",
            email:"",
            phonenumber: "",
            pincode: "",
        })
        event.preventDefault()

    }




    render() {
        return (
            <div className="Home">
                        <form onSubmit={this.handleSubmit}>
                            <div className="startselling">
                                <h1>Register And Start Selling</h1>
                            </div>
                                <div classname="firstname"> 
                                    <input type="text" value={this.state.name} onChange={this.firsthandler} placeholder="Name/CompanyName/GroupName" size="50" required/><br />
                                </div>
                                <div className="password">
                                    <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" id="password" size="50" required/><br />
                                </div>
                                <div classname="confirmpassword">
                                    <input type="password" value={this.state.confirmPassword} onChange={this.confirmpasswordhandler} placeholder="Confirm Passsword" id="confirm_password" size="50" required /><br />
                                </div>
                                <div className="address">
                                    <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="Address" size="50" /><br />
                                </div>
                                <div className="email">
                                    <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email" size="50" /><br />
                                </div>
                                <div className="flexbox">
                                    <div className="phonenumber">
                                        <input type="tel" value={this.state.phonenumber} onChange={this.phonenumberhandler} placeholder="PhoneNumber" required/><br />
                                    </div>
                                    <div className="pincode">
                                        <input type="text" value={this.state.pincode} onChange={this.pincodehandler} placeholder=" PinCode" maxlength="6" size="20" required/><br />
                                    </div>
                                </div>
                                <div className="submit">
                                    <input type="submit" value="Sign Up"/> 
                                </div>
                        </form>
            </div>
        )
    }
}

export default Signup