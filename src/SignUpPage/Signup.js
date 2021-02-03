import React, { Component } from "react";
import "./Signup.css";
import signupAPI, { signupfarmer } from "../Notsure/signupAPI";
import { Redirect } from "react-router-dom";
import * as Constants from "../Constants";
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      confirmPassword: "",
      address: "",
      email: "",
      phonenumber: "",
      pincode: "",
      nameerror: "",
      passerror: "",
      confirmpasserror: "",
      addresserror: "",
      emailerror: "",
      phonenumbererror: "",
      pincodeerror: "",
      redirect: false,
      deliveryPincodes:'',
    };
    this.submit = this.submit.bind(this);
    this.validate = this.validate.bind(this);
    this.addLocationToFarmer = this.addLocationToFarmer.bind(this);
  }

  // rutwik() {
  //     console.log('Alo')
  // }

  namehandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  confirmpasswordhandler = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
  };
  addresshandler = (event) => {
    this.setState({
      address: event.target.value,
    });
  };
  emailhandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  phonenumberhandler = (event) => {
    this.setState({
      phonenumber: event.target.value,
    });
  };
  pincodehandler = (event) => {
    this.setState({
      pincode: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.name}   Farmer Registered Successfully!`);
    console.log(this.state);
    this.setState({
      name: "",
      password: "",
      confirmPassword: "",
      address: "",
      email: "",
      phonenumber: "",
      pincode: "",
    });
    event.preventDefault();
  };
  submit() {
    const passValidate = this.validate();
    if (passValidate) {
      let url = Constants.SIGNUP_API;
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.name,
          phone: this.state.phonenumber,
          email: this.state.email,
          password: this.state.password,
          address: this.state.address,
          pincode: this.state.pincode,
        }),
      }).then((result) => {
        result.json().then((response) => {
          if (response["status"] === "Success") {
            console.log("User Added");
            sessionStorage.setItem('userData', response.result.id);
            this.addLocationToFarmer(response.result.id);
            //this.setState({ redirect: true });
          } else {
            console.log("User Adding Failed");
          }
          console.log({ response });
        });
      });
    }
  }

  addLocationToFarmer(farmerId){
    var deliveryPincodeArray = this.state.deliveryPincodes.split(',');
    let url = Constants.DELIVERY_PINCODE_API;
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          farmerId: [farmerId],
          locations: deliveryPincodeArray,
        }),
      }).then((result) => {
        result.json().then((response) => {
          if (response["status"] === "Success") {
            console.log("Locations Added");
            sessionStorage.setItem('userData', response.result.id);
            this.addLocationToFarmer(response.result.id);
            this.setState({ redirect: true });
          } else {
            console.log("Location Adding Failed");
          }
          console.log({ response });
        });
      });
  }

  // if (passValidate) {
  //     //     console.log('request sent');
  //     //     console.log('fe');
  //     signupfarmer(this.state).then((result) => {
  //         let responseJson = result;
  //         if (responseJson['status'] === "Success") {

  //             // sessionStorage.setItem('userData', responseJson);
  //             this.setState({redirect: true});
  //             // console.log(responseJson);
  //         }

  //         else {
  //             console.log('Failed');
  //             console.log(result);
  //         }
  //     })
  // }

  validate() {
    let input = this.state.input;
    let errors = {};
    let nameerror = "";
    let passerror = "";
    let confirmpasserror = "";
    let addresserror = "";
    let emailerror = "";
    let phonenumbererror = "";
    let pincodeerror = "";

    if (!this.state.name) {
      nameerror = "Name cannot be empty";
      this.setState({ nameerror });
    } else {
      this.setState({ nameerror });
    }

    if (!this.state.password) {
      passerror = "Please enter your password.";
      this.setState({ passerror });
    } else {
      this.setState({ passerror });
    }

    if (!this.state.confirmPassword) {
      confirmpasserror = "Please confirm your password.";
      this.setState({ confirmpasserror });
    } else {
      this.setState({ confirmpasserror });
    }

    if (this.state.password && this.state.confirmPassword) {
      if (this.state.password !== this.state.confirmPassword) {
        passerror = "Passwords Do not Match";
        confirmpasserror = "Passwords Do Not Match";
        this.setState({
          passerror,
          confirmpasserror,
          password: "",
          confirmPassword: "",
        });
      } else {
        this.setState({ passerror, confirmpasserror });
      }
    }

    if (!this.state.address) {
      addresserror = "Please Enter Your Address";
      this.setState({ addresserror });
    } else {
      this.setState({ addresserror });
    }

    if (!this.state.email) {
      emailerror = "Please Enter Your Email";
      this.setState({ emailerror });
    } else {
      this.setState({ emailerror });
    }
    if (!this.state.phonenumber) {
      phonenumbererror = "Enter Your PhoneNumber";
      this.setState({ phonenumbererror });
    } else {
      this.setState({ phonenumbererror });
    }
    if (!this.state.pincode) {
      pincodeerror = "Enter Your Pincode";
      this.setState({ pincodeerror });
    } else {
      this.setState({ pincodeerror });
    }
    if (
      nameerror ||
      passerror ||
      confirmpasserror ||
      addresserror ||
      emailerror ||
      phonenumbererror ||
      pincodeerror
    ) {
      return false;
    }
    return true;
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/homepage"} />;
    }
    return (
      <>
        <div className="blurredbg" onClick={this.props.fun}></div>
        <div className="Home">
          <form>
            <div className="startselling">
              <h1>Register And Start Selling</h1>
            </div>
            <input
              type="text"
              value={this.state.name}
              onChange={this.namehandler}
              placeholder="Name/CompanyName/GroupName"
              size="50"
              className="name"
              required
            ></input>
            <p className="nameerror">{this.state.nameerror}</p>
            <div>
              <input
                type="password"
                value={this.state.password}
                onChange={this.passwordhandler}
                placeholder="Password"
                id="password"
                size="50"
                className="password"
                required
              />
              <p className="passerror">{this.state.passerror}</p>
            </div>
            <div>
              <input
                type="password"
                value={this.state.confirmPassword}
                onChange={this.confirmpasswordhandler}
                placeholder="Confirm Password"
                id="confirm_password"
                size="50"
                className="confirmpassword"
                required
              />
              <p className="confirmpasserror">{this.state.confirmpasserror}</p>
            </div>
            <input
              type="text"
              value={this.state.address}
              onChange={this.addresshandler}
              placeholder="Address"
              size="50"
              className="address"
            />
            <br />
            <p className="addresserror">{this.state.addresserror}</p>
            <input
              type="text"
              value={this.state.email}
              onChange={this.emailhandler}
              placeholder="Email"
              size="50"
              className="email"
            />
            <br />
            <p className="emailerror">{this.state.emailerror}</p>
            <div className="flexbox">
              <div>
                <input
                  type="tel"
                  value={this.state.phonenumber}
                  onChange={this.phonenumberhandler}
                  placeholder="PhoneNumber"
                  maxlength="10"
                  className="phonenumber"
                  required
                />
                <br />
                <p className="phonenumbererror">
                  {this.state.phonenumbererror}
                </p>
              </div>
              <div>
                <input
                  type="text"
                  value={this.state.pincode}
                  onChange={this.pincodehandler}
                  placeholder=" PinCode"
                  maxlength="6"
                  className="pincode"
                  required
                />
                <br />
                <p className="pincodeerror">{this.state.pincodeerror}</p>
              </div>
            </div>
            <div className="submit">
              <input type="button" onClick={this.submit} value="Sign Up" />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Signup;
