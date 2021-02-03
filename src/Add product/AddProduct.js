import React, { Component } from "react";
import "./AddProduct.css";
import { Redirect } from "react-router-dom";
import { AddProductapi } from "../Notsure/AddProductapi";
import * as Constants from "../Constants";

const firststate = {
  data: [],
  unit: [
    {
      id: "Kg",
      name: "Kilogram",
    },
    {
      id: "Gm",
      name: "Gram",
    },
    {
      id: "Ltr",
      name: "Litres",
    },
  ],
  selectedUnit: "",
  selectedMeasure: "",
  redirect: false,
  Qtyerror: "",
  Rateerror: "",
  Rate: "",
  productDataID: "",
  optionId:"1",
  unitId:"1",
  selectValue:"",
  cheakUnit:""
 
};
class AddProduct extends Component {
  constructor() {
    super();

    this.state = firststate;
    this.setUnit = this.setUnit.bind(this);
    this.setMeasure = this.setMeasure.bind(this);
    this.setProductDataID = this.setProductDataID.bind(this);
    this.addProductToFarmer = this.addProductToFarmer.bind(this);
    this.onchange = this.onchange.bind(this);
    this.addMoreProduct = this.addMoreProduct.bind(this);
    this.Verified = this.Verified.bind(this);
  
  }

  componentDidMount() {
    let url = Constants.GET_PRODUCT_DATA;
    fetch(url, {
      method: "GET",
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ data: resp["result"] });
        const data = this.state.data;
        console.log({ data });
      });
    });
  }

  //     onchange(from){
  //         // let from="";
  //         this.setState({[from.target.name]: from.target.value});
  //         // this.setState({[from.target.name]: from.target.value});
  //         console.log(this.state);
  //    }

  //    notso(str){
  //        console.log('Hi');
  //        this.setState({[str.target.name]: str.target.value});
  //        console.log(this.str);



  setUnit = async (event) => {
    event.persist();
    await this.setState({ selectedUnit: event.target.value });
    // console.log(this.state.assign);
    console.log(this.state.selectedUnit);
    //  this.setState({cheakUnit: event.target.value});
    
    this.setState(() =>  ({
      cheakUnit :event.target.value

    }));

  };

  setMeasure(e) {
    this.setState({ selectedMeasure: e.target.value });
    console.log(this.state.selectedMeasure);
  }

  setProductDataID(e) {
    this.setState({ productDataID: e.target.value });
    this.setState({ selectValue: e.target.value});
  }

    Verified(){
      let Rateerror="";
      let Qtyerror="";
      if(!this.state.Rate) {
        Rateerror = "Rate cannot be empty";
        
        // alert("Rate cannot be empty");
      }
      if(!this.state.selectedMeasure) {
        Qtyerror = "Quantity cannot be empty";
       
        // alert("Quantity cannot be empty");
        // return false;
      }
      if(!this.state.selectValue){
        alert("Please select product");
     
      }
      if(!this.state.cheakUnit){
        alert("Please select a unit");
       
      }

      if(Qtyerror||Rateerror){
        this.setState({Qtyerror,Rateerror});
        return false;
      }
  

      return true;
  
     

    };

    // Validation(){
    //   let Rateerror="";
    //   let Qtyerror="";
    //   if(!this.state.Rate) {
    //     Rateerror = "Rate cannot be empty";
    //     this.setState({Rateerror});
    //     // alert("Rate cannot be empty");
    //   }
    //   if(!this.state.selectedMeasure) {
    //     Qtyerror = "Quantity cannot be empty";
    //     this.setState({Qtyerror});
    //     // alert("Quantity cannot be empty");
    //     // return false;
    //   }
    //   if(!this.state.selectValue){
    //     alert("Please select product");
      
    //   }
    //   if(!this.state.cheakUnit){
    //     alert("Please select a unit");
    //     return false;
    //   }
    //   // if(this.state.selectValue == "Choose product"){
    //   //   Optionerror = "Choose a product";
        
    //   // }
    //   // if(Rateerror || Qtyerror){
    //   //   this.setState({  Rateerror, Qtyerror});
    //   //   return false;
    //   // }

    //   return true;
    // }
 

  addProductToFarmer() {
    const isVerify = this.Verified();
  
    // console.log(this.state.Rate);
    // console.log(this.state.selectedMeasure);
    // console.log(this.state.selectedUnit);
    // console.log(this.state.productDataID);
    if(isVerify) {
    let url = Constants.ADD_PRODUCT_API;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cost: this.state.Rate,
        measurement: this.state.selectedMeasure + this.state.selectedUnit,
        farmer:{
            id:"2"
        },
        productData:{
            id:this.state.productDataID
        }
      }),
    }).then((result) => {
      result.json().then((response) => {
        if (response["status"] === "Success") {
          console.log("Product Added");
          this.setState({redirect: true});
        } else {
          console.log("Product Failed");      
        }
        console.log({ response });
      });
    });

    
  
  }
}
  addMoreProduct(){
//  const isVal = this.Validation();
    const isVal= this.Verified();
  
  if(isVal){
    this.setState({Rateerror:""});
    this.setState({Qtyerror:""});
    alert("Product Added succesfully");
    

  }
   
}
 

  onchange(e) {
    this.setState({ Rate: e.target.value });
    console.log(this.state);
  }

  render() {
    // const data = this.state.data;
    // console.warn(data);
    // const data=this.state.data;
    // console.warn(resp);
    if(this.state.redirect){
        return(<Redirect to={'/Homepage'} />);
       }

    return (
      <div className="Box">
        <form>
          <div className="form-row align-items-center">
            <div className="col-auto my-1">
              <select
                className="custom-select mr-sm-2 trial"
                onChange={this.setProductDataID} 
              >
                <option value hidden >
                Choose product
                </option>
                {this.state.data.map((Data) => (
                  <option key={Data.id} value={Data.id}>{Data.name}</option>
                ))}
                ;
              </select>
            </div>
            <div>{this.state.Optionerror}</div>
          </div>
          <div className="form-row align-items-center">
            <div className="col-auto my-1">
              <select className="custom-select mr-sm-2" onChange={this.setUnit} >
                <option value hidden>
                  Unit
                </option>
                {this.state.unit.map((Units) => (
                  <option key={Units.id} value={Units.id}>
                    {Units.name}
                  </option>
                ))} ;
              </select>
            </div>
          </div>

          <div className="form-group Sample">
            <input
              type="text"
              className="form-inline"
              placeholder="Minimum Order Qty"
              onChange={this.setMeasure}
            
           
            />
          </div>
          <div className="Error">{this.state.Qtyerror}</div>

          <div className="form-group Sample">
            <input
              type="text"
              className="form-inline"
              placeholder={
                "Rate Per " +
                this.state.selectedMeasure +
                this.state.selectedUnit
              }
              onChange={this.onchange}
            
            ></input>
          </div>
          <div className="Errors">{this.state.Rateerror}</div>
        </form>
        <div className="flexBox Lol">
          <div className="Aadd">
            <button
              className="btn btn-primary"
              onClick={this.addProductToFarmer}
            >
              Submit
            </button>
          </div>
          <div className="Vieww">
            <button className="btn btn-primary" onClick={this.addMoreProduct}>Add More...</button>
          </div>
        </div>
      </div>
    );
  }
}
export default AddProduct;
