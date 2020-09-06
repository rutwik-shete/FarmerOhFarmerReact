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
                <div className="Bgimage">

                    <div>

                        <form onSubmit={this.handleSubmit}>
                            <div className="startselling">
                            <h1>SignUp And Start Selling</h1>
                            </div>
                            <div className="Formpage">
                                <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                                <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                                <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                                <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="Address..." /><br />
                                <input type="text" value={this.state.city} onChange={this.cityhandler} placeholder="City..." /><br />
                            </div>
                            <div className="phonenumber">
                                <input type="number" value={this.state.phonenumber} onChange={this.phonenumberhandler} placeholder="PhoneNumber..." size="20" /><br />
                            </div>
                            <div className="pincode">
                                <input type="number" value={this.state.pincode} onChange={this.pincodehandler} placeholder="PinCode..." /><br />
                            </div>
                            <div className="submit">
                                <input type="submit" value="Sign Up" /> 
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default Signup