import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            address: "",
            city: "",
            phonenumber: "",
            pincode: "",


        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    addresshandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    cityhandler = (event) => {
        this.setState({
            city: event.target.value
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
            lastName: "",
            password: "",
            address: "",
            city: "",
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
                                    <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName"  size="50"/><br />
                                </div>
                                <div className="lastname">
                                    <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName" size="50"/><br />
                                </div>
                                <div classname="password">
                                    <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password"size="50" /><br />
                                </div>
                                <div className="address">
                                    <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="Address" size="50"/><br />
                                </div>
                                <div className="city">
                                    <input type="text" value={this.state.city} onChange={this.cityhandler} placeholder="City" size="50"/><br />
                                </div>
                                <div className="flexbox">
                                    <div className="phonenumber">
                                        <input type="number" value={this.state.phonenumber} onChange={this.phonenumberhandler} placeholder="PhoneNumber" size="20" /><br />
                                    </div>
                                    <div className="pincode">
                                        <input type="number" value={this.state.pincode} onChange={this.pincodehandler} placeholder="PinCode" /><br />
                                    </div>
                                </div>
                                <div className="submit">
                                    <input type="submit" value="Sign Up" /> 
                                </div>
                        </form>
            </div>
        )
    }
}

export default Signup