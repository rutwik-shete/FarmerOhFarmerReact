import React, {Component} from 'react';
import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            address:"",
            city:"",
            phonenumber:"",
            pincode:"",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
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
            address:"",
            city:"",
            phonenumber:"",
            pincode:"",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>SignUp And Start Selling</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Address :</label> <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="Address..." /><br />
                    <label>City :</label> <input type="text" value={this.state.city} onChange={this.cityhandler} placeholder="City..." /><br />
                    <label>PhoneNumber :</label> <input type="number" value={this.state.phonenumber} onChange={this.phonenumberhandler} placeholder="PhoneNumber..." /><br />
                    <label>PinCode :</label> <input type="number" value={this.state.pincode} onChange={this.pincodehandler} placeholder="PinCode..." /><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Signup